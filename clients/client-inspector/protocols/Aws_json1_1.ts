import {
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput
} from "../commands/AddAttributesToFindingsCommand";
import {
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput
} from "../commands/CreateAssessmentTargetCommand";
import {
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput
} from "../commands/CreateAssessmentTemplateCommand";
import {
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput
} from "../commands/CreateExclusionsPreviewCommand";
import {
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput
} from "../commands/CreateResourceGroupCommand";
import {
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput
} from "../commands/DeleteAssessmentRunCommand";
import {
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput
} from "../commands/DeleteAssessmentTargetCommand";
import {
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput
} from "../commands/DeleteAssessmentTemplateCommand";
import {
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput
} from "../commands/DescribeAssessmentRunsCommand";
import {
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput
} from "../commands/DescribeAssessmentTargetsCommand";
import {
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput
} from "../commands/DescribeAssessmentTemplatesCommand";
import {
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput
} from "../commands/DescribeCrossAccountAccessRoleCommand";
import {
  DescribeExclusionsCommandInput,
  DescribeExclusionsCommandOutput
} from "../commands/DescribeExclusionsCommand";
import {
  DescribeFindingsCommandInput,
  DescribeFindingsCommandOutput
} from "../commands/DescribeFindingsCommand";
import {
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput
} from "../commands/DescribeResourceGroupsCommand";
import {
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput
} from "../commands/DescribeRulesPackagesCommand";
import {
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput
} from "../commands/GetAssessmentReportCommand";
import {
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput
} from "../commands/GetExclusionsPreviewCommand";
import {
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput
} from "../commands/GetTelemetryMetadataCommand";
import {
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput
} from "../commands/ListAssessmentRunAgentsCommand";
import {
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput
} from "../commands/ListAssessmentRunsCommand";
import {
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput
} from "../commands/ListAssessmentTargetsCommand";
import {
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput
} from "../commands/ListAssessmentTemplatesCommand";
import {
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput
} from "../commands/ListEventSubscriptionsCommand";
import {
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput
} from "../commands/ListExclusionsCommand";
import {
  ListFindingsCommandInput,
  ListFindingsCommandOutput
} from "../commands/ListFindingsCommand";
import {
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput
} from "../commands/ListRulesPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput
} from "../commands/PreviewAgentsCommand";
import {
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput
} from "../commands/RegisterCrossAccountAccessRoleCommand";
import {
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput
} from "../commands/RemoveAttributesFromFindingsCommand";
import {
  SetTagsForResourceCommandInput,
  SetTagsForResourceCommandOutput
} from "../commands/SetTagsForResourceCommand";
import {
  StartAssessmentRunCommandInput,
  StartAssessmentRunCommandOutput
} from "../commands/StartAssessmentRunCommand";
import {
  StopAssessmentRunCommandInput,
  StopAssessmentRunCommandOutput
} from "../commands/StopAssessmentRunCommand";
import {
  SubscribeToEventCommandInput,
  SubscribeToEventCommandOutput
} from "../commands/SubscribeToEventCommand";
import {
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput
} from "../commands/UnsubscribeFromEventCommand";
import {
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput
} from "../commands/UpdateAssessmentTargetCommand";
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
  UpdateAssessmentTargetRequest
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

export async function serializeAws_json1_1AddAttributesToFindingsCommand(
  input: AddAttributesToFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.AddAttributesToFindings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddAttributesToFindingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAssessmentTargetCommand(
  input: CreateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.CreateAssessmentTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAssessmentTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAssessmentTemplateCommand(
  input: CreateAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.CreateAssessmentTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAssessmentTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateExclusionsPreviewCommand(
  input: CreateExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.CreateExclusionsPreview";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateExclusionsPreviewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateResourceGroupCommand(
  input: CreateResourceGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.CreateResourceGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResourceGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAssessmentRunCommand(
  input: DeleteAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentRun";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAssessmentRunRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAssessmentTargetCommand(
  input: DeleteAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAssessmentTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAssessmentTemplateCommand(
  input: DeleteAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAssessmentTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAssessmentRunsCommand(
  input: DescribeAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentRuns";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAssessmentRunsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAssessmentTargetsCommand(
  input: DescribeAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentTargets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAssessmentTargetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAssessmentTemplatesCommand(
  input: DescribeAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentTemplates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAssessmentTemplatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCrossAccountAccessRoleCommand(
  input: DescribeCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeCrossAccountAccessRole";
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}

export async function serializeAws_json1_1DescribeExclusionsCommand(
  input: DescribeExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeExclusions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeExclusionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeFindingsCommand(
  input: DescribeFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeFindings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeFindingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeResourceGroupsCommand(
  input: DescribeResourceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeResourceGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourceGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeRulesPackagesCommand(
  input: DescribeRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.DescribeRulesPackages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeRulesPackagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAssessmentReportCommand(
  input: GetAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.GetAssessmentReport";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAssessmentReportRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetExclusionsPreviewCommand(
  input: GetExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.GetExclusionsPreview";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetExclusionsPreviewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTelemetryMetadataCommand(
  input: GetTelemetryMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.GetTelemetryMetadata";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTelemetryMetadataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssessmentRunAgentsCommand(
  input: ListAssessmentRunAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListAssessmentRunAgents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssessmentRunAgentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssessmentRunsCommand(
  input: ListAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListAssessmentRuns";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssessmentRunsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssessmentTargetsCommand(
  input: ListAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListAssessmentTargets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssessmentTargetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssessmentTemplatesCommand(
  input: ListAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListAssessmentTemplates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssessmentTemplatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListEventSubscriptionsCommand(
  input: ListEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListEventSubscriptions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEventSubscriptionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListExclusionsCommand(
  input: ListExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListExclusions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListExclusionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFindingsCommand(
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListFindings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFindingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRulesPackagesCommand(
  input: ListRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListRulesPackages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRulesPackagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PreviewAgentsCommand(
  input: PreviewAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.PreviewAgents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PreviewAgentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterCrossAccountAccessRoleCommand(
  input: RegisterCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.RegisterCrossAccountAccessRole";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterCrossAccountAccessRoleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveAttributesFromFindingsCommand(
  input: RemoveAttributesFromFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.RemoveAttributesFromFindings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveAttributesFromFindingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetTagsForResourceCommand(
  input: SetTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.SetTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartAssessmentRunCommand(
  input: StartAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.StartAssessmentRun";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartAssessmentRunRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopAssessmentRunCommand(
  input: StopAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.StopAssessmentRun";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopAssessmentRunRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SubscribeToEventCommand(
  input: SubscribeToEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.SubscribeToEvent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubscribeToEventRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UnsubscribeFromEventCommand(
  input: UnsubscribeFromEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.UnsubscribeFromEvent";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UnsubscribeFromEventRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateAssessmentTargetCommand(
  input: UpdateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "InspectorService.UpdateAssessmentTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateAssessmentTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddAttributesToFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddAttributesToFindingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddAttributesToFindingsResponse(
    data,
    context
  );
  const response: AddAttributesToFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddAttributesToFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddAttributesToFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1CreateAssessmentTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAssessmentTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssessmentTargetResponse(
    data,
    context
  );
  const response: CreateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAssessmentTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAssessmentTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector.v20160216#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1CreateAssessmentTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAssessmentTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssessmentTemplateResponse(
    data,
    context
  );
  const response: CreateAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAssessmentTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAssessmentTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector.v20160216#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1CreateExclusionsPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateExclusionsPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExclusionsPreviewResponse(
    data,
    context
  );
  const response: CreateExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateExclusionsPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateExclusionsPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreviewGenerationInProgressException":
    case "com.amazonaws.inspector.v20160216#PreviewGenerationInProgressException":
      response = {
        ...(await deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1CreateResourceGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateResourceGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResourceGroupResponse(data, context);
  const response: CreateResourceGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResourceGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateResourceGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector.v20160216#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DeleteAssessmentRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAssessmentRunCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAssessmentRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DeleteAssessmentTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAssessmentTargetCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAssessmentTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DeleteAssessmentTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAssessmentTemplateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAssessmentTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAssessmentRunsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAssessmentRunsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentRunsResponse(
    data,
    context
  );
  const response: DescribeAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAssessmentRunsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAssessmentRunsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAssessmentTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAssessmentTargetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentTargetsResponse(
    data,
    context
  );
  const response: DescribeAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAssessmentTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAssessmentTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAssessmentTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentTemplatesResponse(
    data,
    context
  );
  const response: DescribeAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAssessmentTemplatesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse(
    data,
    context
  );
  const response: DescribeCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCrossAccountAccessRoleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export async function deserializeAws_json1_1DescribeExclusionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeExclusionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExclusionsResponse(data, context);
  const response: DescribeExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExclusionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeExclusionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFindingsResponse(data, context);
  const response: DescribeFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeResourceGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeResourceGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceGroupsResponse(
    data,
    context
  );
  const response: DescribeResourceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourceGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeResourceGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DescribeRulesPackagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRulesPackagesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRulesPackagesResponse(data, context);
  const response: DescribeRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRulesPackagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeRulesPackagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1GetAssessmentReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAssessmentReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssessmentReportResponse(data, context);
  const response: GetAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAssessmentReportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAssessmentReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.inspector.v20160216#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
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

export async function deserializeAws_json1_1GetExclusionsPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetExclusionsPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExclusionsPreviewResponse(data, context);
  const response: GetExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExclusionsPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetExclusionsPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1GetTelemetryMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTelemetryMetadataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTelemetryMetadataResponse(data, context);
  const response: GetTelemetryMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTelemetryMetadataResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTelemetryMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListAssessmentRunAgentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssessmentRunAgentsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentRunAgentsResponse(
    data,
    context
  );
  const response: ListAssessmentRunAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssessmentRunAgentsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAssessmentRunAgentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListAssessmentRunsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssessmentRunsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentRunsResponse(data, context);
  const response: ListAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssessmentRunsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAssessmentRunsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListAssessmentTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssessmentTargetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentTargetsResponse(data, context);
  const response: ListAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssessmentTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAssessmentTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1ListAssessmentTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssessmentTemplatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentTemplatesResponse(
    data,
    context
  );
  const response: ListAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssessmentTemplatesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAssessmentTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListEventSubscriptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventSubscriptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSubscriptionsResponse(
    data,
    context
  );
  const response: ListEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventSubscriptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListEventSubscriptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListExclusionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListExclusionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExclusionsResponse(data, context);
  const response: ListExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListExclusionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListExclusionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFindingsResponse(data, context);
  const response: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1ListRulesPackagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRulesPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesPackagesResponse(data, context);
  const response: ListRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRulesPackagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRulesPackagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1PreviewAgentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PreviewAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PreviewAgentsResponse(data, context);
  const response: PreviewAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PreviewAgentsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PreviewAgentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
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

export async function deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RegisterCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1RemoveAttributesFromFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveAttributesFromFindingsResponse(
    data,
    context
  );
  const response: RemoveAttributesFromFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveAttributesFromFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1SetTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetTagsForResourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SetTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1StartAssessmentRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartAssessmentRunCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAssessmentRunResponse(data, context);
  const response: StartAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartAssessmentRunResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartAssessmentRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AgentsAlreadyRunningAssessmentException":
    case "com.amazonaws.inspector.v20160216#AgentsAlreadyRunningAssessmentException":
      response = {
        ...(await deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector.v20160216#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1StopAssessmentRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopAssessmentRunCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopAssessmentRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1SubscribeToEventCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubscribeToEventCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubscribeToEventCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubscribeToEventCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector.v20160216#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1UnsubscribeFromEventCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnsubscribeFromEventCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UnsubscribeFromEventCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UnsubscribeFromEventCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1UpdateAssessmentTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAssessmentTargetCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAssessmentTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector.v20160216#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector.v20160216#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector.v20160216#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AgentsAlreadyRunningAssessmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AgentsAlreadyRunningAssessmentException(
    body,
    context
  );
  const contents: AgentsAlreadyRunningAssessmentException = {
    name: "AgentsAlreadyRunningAssessmentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AssessmentRunInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssessmentRunInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssessmentRunInProgressException(
    body,
    context
  );
  const contents: AssessmentRunInProgressException = {
    name: "AssessmentRunInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(
    body,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCrossAccountRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCrossAccountRoleException(
    body,
    context
  );
  const contents: InvalidCrossAccountRoleException = {
    name: "InvalidCrossAccountRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoSuchEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchEntityException(
    body,
    context
  );
  const contents: NoSuchEntityException = {
    name: "NoSuchEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreviewGenerationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PreviewGenerationInProgressException(
    body,
    context
  );
  const contents: PreviewGenerationInProgressException = {
    name: "PreviewGenerationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceTemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceTemporarilyUnavailableException(
    body,
    context
  );
  const contents: ServiceTemporarilyUnavailableException = {
    name: "ServiceTemporarilyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedFeatureException(
    body,
    context
  );
  const contents: UnsupportedFeatureException = {
    name: "UnsupportedFeatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddAttributesToFindingsRequest = (
  input: AddAttributesToFindingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1UserAttributeList(
      input.attributes,
      context
    );
  }
  if (input.findingArns !== undefined) {
    bodyParams[
      "findingArns"
    ] = serializeAws_json1_1AddRemoveAttributesFindingArnList(
      input.findingArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddRemoveAttributesFindingArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AgentFilter = (
  input: AgentFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.agentHealthCodes !== undefined) {
    bodyParams["agentHealthCodes"] = serializeAws_json1_1AgentHealthCodeList(
      input.agentHealthCodes,
      context
    );
  }
  if (input.agentHealths !== undefined) {
    bodyParams["agentHealths"] = serializeAws_json1_1AgentHealthList(
      input.agentHealths,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AgentHealthCodeList = (
  input: Array<AgentHealthCode | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AgentHealthList = (
  input: Array<AgentHealth | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AgentIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AssessmentRunFilter = (
  input: AssessmentRunFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.completionTimeRange !== undefined) {
    bodyParams["completionTimeRange"] = serializeAws_json1_1TimestampRange(
      input.completionTimeRange,
      context
    );
  }
  if (input.durationRange !== undefined) {
    bodyParams["durationRange"] = serializeAws_json1_1DurationRange(
      input.durationRange,
      context
    );
  }
  if (input.namePattern !== undefined) {
    bodyParams["namePattern"] = input.namePattern;
  }
  if (input.rulesPackageArns !== undefined) {
    bodyParams[
      "rulesPackageArns"
    ] = serializeAws_json1_1FilterRulesPackageArnList(
      input.rulesPackageArns,
      context
    );
  }
  if (input.startTimeRange !== undefined) {
    bodyParams["startTimeRange"] = serializeAws_json1_1TimestampRange(
      input.startTimeRange,
      context
    );
  }
  if (input.stateChangeTimeRange !== undefined) {
    bodyParams["stateChangeTimeRange"] = serializeAws_json1_1TimestampRange(
      input.stateChangeTimeRange,
      context
    );
  }
  if (input.states !== undefined) {
    bodyParams["states"] = serializeAws_json1_1AssessmentRunStateList(
      input.states,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AssessmentRunStateList = (
  input: Array<AssessmentRunState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AssessmentTargetFilter = (
  input: AssessmentTargetFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetNamePattern !== undefined) {
    bodyParams["assessmentTargetNamePattern"] =
      input.assessmentTargetNamePattern;
  }
  return bodyParams;
};

const serializeAws_json1_1AssessmentTemplateFilter = (
  input: AssessmentTemplateFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.durationRange !== undefined) {
    bodyParams["durationRange"] = serializeAws_json1_1DurationRange(
      input.durationRange,
      context
    );
  }
  if (input.namePattern !== undefined) {
    bodyParams["namePattern"] = input.namePattern;
  }
  if (input.rulesPackageArns !== undefined) {
    bodyParams[
      "rulesPackageArns"
    ] = serializeAws_json1_1FilterRulesPackageArnList(
      input.rulesPackageArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AssessmentTemplateRulesPackageArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1AttributeList = (
  input: Array<Attribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Attribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1AutoScalingGroupList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1BatchDescribeArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1BatchDescribeExclusionsArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateAssessmentTargetRequest = (
  input: CreateAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetName !== undefined) {
    bodyParams["assessmentTargetName"] = input.assessmentTargetName;
  }
  if (input.resourceGroupArn !== undefined) {
    bodyParams["resourceGroupArn"] = input.resourceGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAssessmentTemplateRequest = (
  input: CreateAssessmentTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetArn !== undefined) {
    bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
  }
  if (input.assessmentTemplateName !== undefined) {
    bodyParams["assessmentTemplateName"] = input.assessmentTemplateName;
  }
  if (input.durationInSeconds !== undefined) {
    bodyParams["durationInSeconds"] = input.durationInSeconds;
  }
  if (input.rulesPackageArns !== undefined) {
    bodyParams[
      "rulesPackageArns"
    ] = serializeAws_json1_1AssessmentTemplateRulesPackageArnList(
      input.rulesPackageArns,
      context
    );
  }
  if (input.userAttributesForFindings !== undefined) {
    bodyParams[
      "userAttributesForFindings"
    ] = serializeAws_json1_1UserAttributeList(
      input.userAttributesForFindings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateExclusionsPreviewRequest = (
  input: CreateExclusionsPreviewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTemplateArn !== undefined) {
    bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateResourceGroupRequest = (
  input: CreateResourceGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceGroupTags !== undefined) {
    bodyParams["resourceGroupTags"] = serializeAws_json1_1ResourceGroupTags(
      input.resourceGroupTags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAssessmentRunRequest = (
  input: DeleteAssessmentRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAssessmentTargetRequest = (
  input: DeleteAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetArn !== undefined) {
    bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAssessmentTemplateRequest = (
  input: DeleteAssessmentTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTemplateArn !== undefined) {
    bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAssessmentRunsRequest = (
  input: DescribeAssessmentRunsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArns !== undefined) {
    bodyParams["assessmentRunArns"] = serializeAws_json1_1BatchDescribeArnList(
      input.assessmentRunArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAssessmentTargetsRequest = (
  input: DescribeAssessmentTargetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetArns !== undefined) {
    bodyParams[
      "assessmentTargetArns"
    ] = serializeAws_json1_1BatchDescribeArnList(
      input.assessmentTargetArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAssessmentTemplatesRequest = (
  input: DescribeAssessmentTemplatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTemplateArns !== undefined) {
    bodyParams[
      "assessmentTemplateArns"
    ] = serializeAws_json1_1BatchDescribeArnList(
      input.assessmentTemplateArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeExclusionsRequest = (
  input: DescribeExclusionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.exclusionArns !== undefined) {
    bodyParams[
      "exclusionArns"
    ] = serializeAws_json1_1BatchDescribeExclusionsArnList(
      input.exclusionArns,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeFindingsRequest = (
  input: DescribeFindingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.findingArns !== undefined) {
    bodyParams["findingArns"] = serializeAws_json1_1BatchDescribeArnList(
      input.findingArns,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeResourceGroupsRequest = (
  input: DescribeResourceGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceGroupArns !== undefined) {
    bodyParams["resourceGroupArns"] = serializeAws_json1_1BatchDescribeArnList(
      input.resourceGroupArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeRulesPackagesRequest = (
  input: DescribeRulesPackagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.rulesPackageArns !== undefined) {
    bodyParams["rulesPackageArns"] = serializeAws_json1_1BatchDescribeArnList(
      input.rulesPackageArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DurationRange = (
  input: DurationRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxSeconds !== undefined) {
    bodyParams["maxSeconds"] = input.maxSeconds;
  }
  if (input.minSeconds !== undefined) {
    bodyParams["minSeconds"] = input.minSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1FilterRulesPackageArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FindingFilter = (
  input: FindingFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.agentIds !== undefined) {
    bodyParams["agentIds"] = serializeAws_json1_1AgentIdList(
      input.agentIds,
      context
    );
  }
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1AttributeList(
      input.attributes,
      context
    );
  }
  if (input.autoScalingGroups !== undefined) {
    bodyParams["autoScalingGroups"] = serializeAws_json1_1AutoScalingGroupList(
      input.autoScalingGroups,
      context
    );
  }
  if (input.creationTimeRange !== undefined) {
    bodyParams["creationTimeRange"] = serializeAws_json1_1TimestampRange(
      input.creationTimeRange,
      context
    );
  }
  if (input.ruleNames !== undefined) {
    bodyParams["ruleNames"] = serializeAws_json1_1RuleNameList(
      input.ruleNames,
      context
    );
  }
  if (input.rulesPackageArns !== undefined) {
    bodyParams[
      "rulesPackageArns"
    ] = serializeAws_json1_1FilterRulesPackageArnList(
      input.rulesPackageArns,
      context
    );
  }
  if (input.severities !== undefined) {
    bodyParams["severities"] = serializeAws_json1_1SeverityList(
      input.severities,
      context
    );
  }
  if (input.userAttributes !== undefined) {
    bodyParams["userAttributes"] = serializeAws_json1_1AttributeList(
      input.userAttributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetAssessmentReportRequest = (
  input: GetAssessmentReportRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  if (input.reportFileFormat !== undefined) {
    bodyParams["reportFileFormat"] = input.reportFileFormat;
  }
  if (input.reportType !== undefined) {
    bodyParams["reportType"] = input.reportType;
  }
  return bodyParams;
};

const serializeAws_json1_1GetExclusionsPreviewRequest = (
  input: GetExclusionsPreviewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTemplateArn !== undefined) {
    bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.previewToken !== undefined) {
    bodyParams["previewToken"] = input.previewToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTelemetryMetadataRequest = (
  input: GetTelemetryMetadataRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssessmentRunAgentsRequest = (
  input: ListAssessmentRunAgentsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1AgentFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssessmentRunsRequest = (
  input: ListAssessmentRunsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTemplateArns !== undefined) {
    bodyParams[
      "assessmentTemplateArns"
    ] = serializeAws_json1_1ListParentArnList(
      input.assessmentTemplateArns,
      context
    );
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1AssessmentRunFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssessmentTargetsRequest = (
  input: ListAssessmentTargetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1AssessmentTargetFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssessmentTemplatesRequest = (
  input: ListAssessmentTemplatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetArns !== undefined) {
    bodyParams["assessmentTargetArns"] = serializeAws_json1_1ListParentArnList(
      input.assessmentTargetArns,
      context
    );
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1AssessmentTemplateFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEventSubscriptionsRequest = (
  input: ListEventSubscriptionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListExclusionsRequest = (
  input: ListExclusionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFindingsRequest = (
  input: ListFindingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArns !== undefined) {
    bodyParams["assessmentRunArns"] = serializeAws_json1_1ListParentArnList(
      input.assessmentRunArns,
      context
    );
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1FindingFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListParentArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListRulesPackagesRequest = (
  input: ListRulesPackagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1PreviewAgentsRequest = (
  input: PreviewAgentsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.previewAgentsArn !== undefined) {
    bodyParams["previewAgentsArn"] = input.previewAgentsArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterCrossAccountAccessRoleRequest = (
  input: RegisterCrossAccountAccessRoleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveAttributesFromFindingsRequest = (
  input: RemoveAttributesFromFindingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributeKeys !== undefined) {
    bodyParams["attributeKeys"] = serializeAws_json1_1UserAttributeKeyList(
      input.attributeKeys,
      context
    );
  }
  if (input.findingArns !== undefined) {
    bodyParams[
      "findingArns"
    ] = serializeAws_json1_1AddRemoveAttributesFindingArnList(
      input.findingArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceGroupTag = (
  input: ResourceGroupTag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceGroupTags = (
  input: Array<ResourceGroupTag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ResourceGroupTag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RuleNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SetTagsForResourceRequest = (
  input: SetTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1SeverityList = (
  input: Array<Severity | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartAssessmentRunRequest = (
  input: StartAssessmentRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunName !== undefined) {
    bodyParams["assessmentRunName"] = input.assessmentRunName;
  }
  if (input.assessmentTemplateArn !== undefined) {
    bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1StopAssessmentRunRequest = (
  input: StopAssessmentRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentRunArn !== undefined) {
    bodyParams["assessmentRunArn"] = input.assessmentRunArn;
  }
  if (input.stopAction !== undefined) {
    bodyParams["stopAction"] = input.stopAction;
  }
  return bodyParams;
};

const serializeAws_json1_1SubscribeToEventRequest = (
  input: SubscribeToEventRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.event !== undefined) {
    bodyParams["event"] = input.event;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.topicArn !== undefined) {
    bodyParams["topicArn"] = input.topicArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TimestampRange = (
  input: TimestampRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.beginDate !== undefined) {
    bodyParams["beginDate"] = Math.round(input.beginDate.getTime() / 1000);
  }
  if (input.endDate !== undefined) {
    bodyParams["endDate"] = Math.round(input.endDate.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UnsubscribeFromEventRequest = (
  input: UnsubscribeFromEventRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.event !== undefined) {
    bodyParams["event"] = input.event;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.topicArn !== undefined) {
    bodyParams["topicArn"] = input.topicArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateAssessmentTargetRequest = (
  input: UpdateAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assessmentTargetArn !== undefined) {
    bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
  }
  if (input.assessmentTargetName !== undefined) {
    bodyParams["assessmentTargetName"] = input.assessmentTargetName;
  }
  if (input.resourceGroupArn !== undefined) {
    bodyParams["resourceGroupArn"] = input.resourceGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UserAttributeKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UserAttributeList = (
  input: Array<Attribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Attribute(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    canRetry: undefined,
    errorCode: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AddAttributesToFindingsResponse = (
  output: any,
  context: __SerdeContext
): AddAttributesToFindingsResponse => {
  let contents: any = {
    __type: "AddAttributesToFindingsResponse",
    failedItems: undefined
  };
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AgentAlreadyRunningAssessment = (
  output: any,
  context: __SerdeContext
): AgentAlreadyRunningAssessment => {
  let contents: any = {
    __type: "AgentAlreadyRunningAssessment",
    agentId: undefined,
    assessmentRunArn: undefined
  };
  if (output.agentId !== undefined && output.agentId !== null) {
    contents.agentId = output.agentId;
  }
  if (
    output.assessmentRunArn !== undefined &&
    output.assessmentRunArn !== null
  ) {
    contents.assessmentRunArn = output.assessmentRunArn;
  }
  return contents;
};

const deserializeAws_json1_1AgentAlreadyRunningAssessmentList = (
  output: any,
  context: __SerdeContext
): Array<AgentAlreadyRunningAssessment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentAlreadyRunningAssessment(entry, context)
  );
};

const deserializeAws_json1_1AgentPreview = (
  output: any,
  context: __SerdeContext
): AgentPreview => {
  let contents: any = {
    __type: "AgentPreview",
    agentHealth: undefined,
    agentId: undefined,
    agentVersion: undefined,
    autoScalingGroup: undefined,
    hostname: undefined,
    ipv4Address: undefined,
    kernelVersion: undefined,
    operatingSystem: undefined
  };
  if (output.agentHealth !== undefined && output.agentHealth !== null) {
    contents.agentHealth = output.agentHealth;
  }
  if (output.agentId !== undefined && output.agentId !== null) {
    contents.agentId = output.agentId;
  }
  if (output.agentVersion !== undefined && output.agentVersion !== null) {
    contents.agentVersion = output.agentVersion;
  }
  if (
    output.autoScalingGroup !== undefined &&
    output.autoScalingGroup !== null
  ) {
    contents.autoScalingGroup = output.autoScalingGroup;
  }
  if (output.hostname !== undefined && output.hostname !== null) {
    contents.hostname = output.hostname;
  }
  if (output.ipv4Address !== undefined && output.ipv4Address !== null) {
    contents.ipv4Address = output.ipv4Address;
  }
  if (output.kernelVersion !== undefined && output.kernelVersion !== null) {
    contents.kernelVersion = output.kernelVersion;
  }
  if (output.operatingSystem !== undefined && output.operatingSystem !== null) {
    contents.operatingSystem = output.operatingSystem;
  }
  return contents;
};

const deserializeAws_json1_1AgentPreviewList = (
  output: any,
  context: __SerdeContext
): Array<AgentPreview> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentPreview(entry, context)
  );
};

const deserializeAws_json1_1AgentsAlreadyRunningAssessmentException = (
  output: any,
  context: __SerdeContext
): AgentsAlreadyRunningAssessmentException => {
  let contents: any = {
    __type: "AgentsAlreadyRunningAssessmentException",
    agents: undefined,
    agentsTruncated: undefined,
    canRetry: undefined,
    message: undefined
  };
  if (output.agents !== undefined && output.agents !== null) {
    contents.agents = deserializeAws_json1_1AgentAlreadyRunningAssessmentList(
      output.agents,
      context
    );
  }
  if (output.agentsTruncated !== undefined && output.agentsTruncated !== null) {
    contents.agentsTruncated = output.agentsTruncated;
  }
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRulesPackageArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AssessmentRun = (
  output: any,
  context: __SerdeContext
): AssessmentRun => {
  let contents: any = {
    __type: "AssessmentRun",
    arn: undefined,
    assessmentTemplateArn: undefined,
    completedAt: undefined,
    createdAt: undefined,
    dataCollected: undefined,
    durationInSeconds: undefined,
    findingCounts: undefined,
    name: undefined,
    notifications: undefined,
    rulesPackageArns: undefined,
    startedAt: undefined,
    state: undefined,
    stateChangedAt: undefined,
    stateChanges: undefined,
    userAttributesForFindings: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.assessmentTemplateArn !== undefined &&
    output.assessmentTemplateArn !== null
  ) {
    contents.assessmentTemplateArn = output.assessmentTemplateArn;
  }
  if (output.completedAt !== undefined && output.completedAt !== null) {
    contents.completedAt = new Date(Math.round(output.completedAt * 1000));
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.dataCollected !== undefined && output.dataCollected !== null) {
    contents.dataCollected = output.dataCollected;
  }
  if (
    output.durationInSeconds !== undefined &&
    output.durationInSeconds !== null
  ) {
    contents.durationInSeconds = output.durationInSeconds;
  }
  if (output.findingCounts !== undefined && output.findingCounts !== null) {
    contents.findingCounts = deserializeAws_json1_1AssessmentRunFindingCounts(
      output.findingCounts,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.notifications !== undefined && output.notifications !== null) {
    contents.notifications = deserializeAws_json1_1AssessmentRunNotificationList(
      output.notifications,
      context
    );
  }
  if (
    output.rulesPackageArns !== undefined &&
    output.rulesPackageArns !== null
  ) {
    contents.rulesPackageArns = deserializeAws_json1_1AssessmentRulesPackageArnList(
      output.rulesPackageArns,
      context
    );
  }
  if (output.startedAt !== undefined && output.startedAt !== null) {
    contents.startedAt = new Date(Math.round(output.startedAt * 1000));
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  if (output.stateChangedAt !== undefined && output.stateChangedAt !== null) {
    contents.stateChangedAt = new Date(
      Math.round(output.stateChangedAt * 1000)
    );
  }
  if (output.stateChanges !== undefined && output.stateChanges !== null) {
    contents.stateChanges = deserializeAws_json1_1AssessmentRunStateChangeList(
      output.stateChanges,
      context
    );
  }
  if (
    output.userAttributesForFindings !== undefined &&
    output.userAttributesForFindings !== null
  ) {
    contents.userAttributesForFindings = deserializeAws_json1_1UserAttributeList(
      output.userAttributesForFindings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRunAgent = (
  output: any,
  context: __SerdeContext
): AssessmentRunAgent => {
  let contents: any = {
    __type: "AssessmentRunAgent",
    agentHealth: undefined,
    agentHealthCode: undefined,
    agentHealthDetails: undefined,
    agentId: undefined,
    assessmentRunArn: undefined,
    autoScalingGroup: undefined,
    telemetryMetadata: undefined
  };
  if (output.agentHealth !== undefined && output.agentHealth !== null) {
    contents.agentHealth = output.agentHealth;
  }
  if (output.agentHealthCode !== undefined && output.agentHealthCode !== null) {
    contents.agentHealthCode = output.agentHealthCode;
  }
  if (
    output.agentHealthDetails !== undefined &&
    output.agentHealthDetails !== null
  ) {
    contents.agentHealthDetails = output.agentHealthDetails;
  }
  if (output.agentId !== undefined && output.agentId !== null) {
    contents.agentId = output.agentId;
  }
  if (
    output.assessmentRunArn !== undefined &&
    output.assessmentRunArn !== null
  ) {
    contents.assessmentRunArn = output.assessmentRunArn;
  }
  if (
    output.autoScalingGroup !== undefined &&
    output.autoScalingGroup !== null
  ) {
    contents.autoScalingGroup = output.autoScalingGroup;
  }
  if (
    output.telemetryMetadata !== undefined &&
    output.telemetryMetadata !== null
  ) {
    contents.telemetryMetadata = deserializeAws_json1_1TelemetryMetadataList(
      output.telemetryMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRunAgentList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentRunAgent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentRunAgent(entry, context)
  );
};

const deserializeAws_json1_1AssessmentRunFindingCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1AssessmentRunInProgressArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AssessmentRunInProgressException = (
  output: any,
  context: __SerdeContext
): AssessmentRunInProgressException => {
  let contents: any = {
    __type: "AssessmentRunInProgressException",
    assessmentRunArns: undefined,
    assessmentRunArnsTruncated: undefined,
    canRetry: undefined,
    message: undefined
  };
  if (
    output.assessmentRunArns !== undefined &&
    output.assessmentRunArns !== null
  ) {
    contents.assessmentRunArns = deserializeAws_json1_1AssessmentRunInProgressArnList(
      output.assessmentRunArns,
      context
    );
  }
  if (
    output.assessmentRunArnsTruncated !== undefined &&
    output.assessmentRunArnsTruncated !== null
  ) {
    contents.assessmentRunArnsTruncated = output.assessmentRunArnsTruncated;
  }
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRunList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentRun> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentRun(entry, context)
  );
};

const deserializeAws_json1_1AssessmentRunNotification = (
  output: any,
  context: __SerdeContext
): AssessmentRunNotification => {
  let contents: any = {
    __type: "AssessmentRunNotification",
    date: undefined,
    error: undefined,
    event: undefined,
    message: undefined,
    snsPublishStatusCode: undefined,
    snsTopicArn: undefined
  };
  if (output.date !== undefined && output.date !== null) {
    contents.date = new Date(Math.round(output.date * 1000));
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.event !== undefined && output.event !== null) {
    contents.event = output.event;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (
    output.snsPublishStatusCode !== undefined &&
    output.snsPublishStatusCode !== null
  ) {
    contents.snsPublishStatusCode = output.snsPublishStatusCode;
  }
  if (output.snsTopicArn !== undefined && output.snsTopicArn !== null) {
    contents.snsTopicArn = output.snsTopicArn;
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRunNotificationList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentRunNotification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentRunNotification(entry, context)
  );
};

const deserializeAws_json1_1AssessmentRunStateChange = (
  output: any,
  context: __SerdeContext
): AssessmentRunStateChange => {
  let contents: any = {
    __type: "AssessmentRunStateChange",
    state: undefined,
    stateChangedAt: undefined
  };
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  if (output.stateChangedAt !== undefined && output.stateChangedAt !== null) {
    contents.stateChangedAt = new Date(
      Math.round(output.stateChangedAt * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1AssessmentRunStateChangeList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentRunStateChange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentRunStateChange(entry, context)
  );
};

const deserializeAws_json1_1AssessmentTarget = (
  output: any,
  context: __SerdeContext
): AssessmentTarget => {
  let contents: any = {
    __type: "AssessmentTarget",
    arn: undefined,
    createdAt: undefined,
    name: undefined,
    resourceGroupArn: undefined,
    updatedAt: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.resourceGroupArn !== undefined &&
    output.resourceGroupArn !== null
  ) {
    contents.resourceGroupArn = output.resourceGroupArn;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1AssessmentTargetList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentTarget(entry, context)
  );
};

const deserializeAws_json1_1AssessmentTemplate = (
  output: any,
  context: __SerdeContext
): AssessmentTemplate => {
  let contents: any = {
    __type: "AssessmentTemplate",
    arn: undefined,
    assessmentRunCount: undefined,
    assessmentTargetArn: undefined,
    createdAt: undefined,
    durationInSeconds: undefined,
    lastAssessmentRunArn: undefined,
    name: undefined,
    rulesPackageArns: undefined,
    userAttributesForFindings: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.assessmentRunCount !== undefined &&
    output.assessmentRunCount !== null
  ) {
    contents.assessmentRunCount = output.assessmentRunCount;
  }
  if (
    output.assessmentTargetArn !== undefined &&
    output.assessmentTargetArn !== null
  ) {
    contents.assessmentTargetArn = output.assessmentTargetArn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (
    output.durationInSeconds !== undefined &&
    output.durationInSeconds !== null
  ) {
    contents.durationInSeconds = output.durationInSeconds;
  }
  if (
    output.lastAssessmentRunArn !== undefined &&
    output.lastAssessmentRunArn !== null
  ) {
    contents.lastAssessmentRunArn = output.lastAssessmentRunArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.rulesPackageArns !== undefined &&
    output.rulesPackageArns !== null
  ) {
    contents.rulesPackageArns = deserializeAws_json1_1AssessmentTemplateRulesPackageArnList(
      output.rulesPackageArns,
      context
    );
  }
  if (
    output.userAttributesForFindings !== undefined &&
    output.userAttributesForFindings !== null
  ) {
    contents.userAttributesForFindings = deserializeAws_json1_1UserAttributeList(
      output.userAttributesForFindings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AssessmentTemplateList = (
  output: any,
  context: __SerdeContext
): Array<AssessmentTemplate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AssessmentTemplate(entry, context)
  );
};

const deserializeAws_json1_1AssessmentTemplateRulesPackageArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AssetAttributes = (
  output: any,
  context: __SerdeContext
): AssetAttributes => {
  let contents: any = {
    __type: "AssetAttributes",
    agentId: undefined,
    amiId: undefined,
    autoScalingGroup: undefined,
    hostname: undefined,
    ipv4Addresses: undefined,
    networkInterfaces: undefined,
    schemaVersion: undefined,
    tags: undefined
  };
  if (output.agentId !== undefined && output.agentId !== null) {
    contents.agentId = output.agentId;
  }
  if (output.amiId !== undefined && output.amiId !== null) {
    contents.amiId = output.amiId;
  }
  if (
    output.autoScalingGroup !== undefined &&
    output.autoScalingGroup !== null
  ) {
    contents.autoScalingGroup = output.autoScalingGroup;
  }
  if (output.hostname !== undefined && output.hostname !== null) {
    contents.hostname = output.hostname;
  }
  if (output.ipv4Addresses !== undefined && output.ipv4Addresses !== null) {
    contents.ipv4Addresses = deserializeAws_json1_1Ipv4AddressList(
      output.ipv4Addresses,
      context
    );
  }
  if (
    output.networkInterfaces !== undefined &&
    output.networkInterfaces !== null
  ) {
    contents.networkInterfaces = deserializeAws_json1_1NetworkInterfaces(
      output.networkInterfaces,
      context
    );
  }
  if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
    contents.schemaVersion = output.schemaVersion;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1AttributeList = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1CreateAssessmentTargetResponse = (
  output: any,
  context: __SerdeContext
): CreateAssessmentTargetResponse => {
  let contents: any = {
    __type: "CreateAssessmentTargetResponse",
    assessmentTargetArn: undefined
  };
  if (
    output.assessmentTargetArn !== undefined &&
    output.assessmentTargetArn !== null
  ) {
    contents.assessmentTargetArn = output.assessmentTargetArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateAssessmentTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateAssessmentTemplateResponse => {
  let contents: any = {
    __type: "CreateAssessmentTemplateResponse",
    assessmentTemplateArn: undefined
  };
  if (
    output.assessmentTemplateArn !== undefined &&
    output.assessmentTemplateArn !== null
  ) {
    contents.assessmentTemplateArn = output.assessmentTemplateArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateExclusionsPreviewResponse = (
  output: any,
  context: __SerdeContext
): CreateExclusionsPreviewResponse => {
  let contents: any = {
    __type: "CreateExclusionsPreviewResponse",
    previewToken: undefined
  };
  if (output.previewToken !== undefined && output.previewToken !== null) {
    contents.previewToken = output.previewToken;
  }
  return contents;
};

const deserializeAws_json1_1CreateResourceGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateResourceGroupResponse => {
  let contents: any = {
    __type: "CreateResourceGroupResponse",
    resourceGroupArn: undefined
  };
  if (
    output.resourceGroupArn !== undefined &&
    output.resourceGroupArn !== null
  ) {
    contents.resourceGroupArn = output.resourceGroupArn;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentRunsResponse => {
  let contents: any = {
    __type: "DescribeAssessmentRunsResponse",
    assessmentRuns: undefined,
    failedItems: undefined
  };
  if (output.assessmentRuns !== undefined && output.assessmentRuns !== null) {
    contents.assessmentRuns = deserializeAws_json1_1AssessmentRunList(
      output.assessmentRuns,
      context
    );
  }
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTargetsResponse => {
  let contents: any = {
    __type: "DescribeAssessmentTargetsResponse",
    assessmentTargets: undefined,
    failedItems: undefined
  };
  if (
    output.assessmentTargets !== undefined &&
    output.assessmentTargets !== null
  ) {
    contents.assessmentTargets = deserializeAws_json1_1AssessmentTargetList(
      output.assessmentTargets,
      context
    );
  }
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTemplatesResponse => {
  let contents: any = {
    __type: "DescribeAssessmentTemplatesResponse",
    assessmentTemplates: undefined,
    failedItems: undefined
  };
  if (
    output.assessmentTemplates !== undefined &&
    output.assessmentTemplates !== null
  ) {
    contents.assessmentTemplates = deserializeAws_json1_1AssessmentTemplateList(
      output.assessmentTemplates,
      context
    );
  }
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse = (
  output: any,
  context: __SerdeContext
): DescribeCrossAccountAccessRoleResponse => {
  let contents: any = {
    __type: "DescribeCrossAccountAccessRoleResponse",
    registeredAt: undefined,
    roleArn: undefined,
    valid: undefined
  };
  if (output.registeredAt !== undefined && output.registeredAt !== null) {
    contents.registeredAt = new Date(Math.round(output.registeredAt * 1000));
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.valid !== undefined && output.valid !== null) {
    contents.valid = output.valid;
  }
  return contents;
};

const deserializeAws_json1_1DescribeExclusionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExclusionsResponse => {
  let contents: any = {
    __type: "DescribeExclusionsResponse",
    exclusions: undefined,
    failedItems: undefined
  };
  if (output.exclusions !== undefined && output.exclusions !== null) {
    contents.exclusions = deserializeAws_json1_1ExclusionMap(
      output.exclusions,
      context
    );
  }
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFindingsResponse => {
  let contents: any = {
    __type: "DescribeFindingsResponse",
    failedItems: undefined,
    findings: undefined
  };
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  if (output.findings !== undefined && output.findings !== null) {
    contents.findings = deserializeAws_json1_1FindingList(
      output.findings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeResourceGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceGroupsResponse => {
  let contents: any = {
    __type: "DescribeResourceGroupsResponse",
    failedItems: undefined,
    resourceGroups: undefined
  };
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  if (output.resourceGroups !== undefined && output.resourceGroups !== null) {
    contents.resourceGroups = deserializeAws_json1_1ResourceGroupList(
      output.resourceGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeRulesPackagesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRulesPackagesResponse => {
  let contents: any = {
    __type: "DescribeRulesPackagesResponse",
    failedItems: undefined,
    rulesPackages: undefined
  };
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  if (output.rulesPackages !== undefined && output.rulesPackages !== null) {
    contents.rulesPackages = deserializeAws_json1_1RulesPackageList(
      output.rulesPackages,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EventSubscription = (
  output: any,
  context: __SerdeContext
): EventSubscription => {
  let contents: any = {
    __type: "EventSubscription",
    event: undefined,
    subscribedAt: undefined
  };
  if (output.event !== undefined && output.event !== null) {
    contents.event = output.event;
  }
  if (output.subscribedAt !== undefined && output.subscribedAt !== null) {
    contents.subscribedAt = new Date(Math.round(output.subscribedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1EventSubscriptionList = (
  output: any,
  context: __SerdeContext
): Array<EventSubscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventSubscription(entry, context)
  );
};

const deserializeAws_json1_1Exclusion = (
  output: any,
  context: __SerdeContext
): Exclusion => {
  let contents: any = {
    __type: "Exclusion",
    arn: undefined,
    attributes: undefined,
    description: undefined,
    recommendation: undefined,
    scopes: undefined,
    title: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_json1_1AttributeList(
      output.attributes,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.recommendation !== undefined && output.recommendation !== null) {
    contents.recommendation = output.recommendation;
  }
  if (output.scopes !== undefined && output.scopes !== null) {
    contents.scopes = deserializeAws_json1_1ScopeList(output.scopes, context);
  }
  if (output.title !== undefined && output.title !== null) {
    contents.title = output.title;
  }
  return contents;
};

const deserializeAws_json1_1ExclusionMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Exclusion } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1Exclusion(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1ExclusionPreview = (
  output: any,
  context: __SerdeContext
): ExclusionPreview => {
  let contents: any = {
    __type: "ExclusionPreview",
    attributes: undefined,
    description: undefined,
    recommendation: undefined,
    scopes: undefined,
    title: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_json1_1AttributeList(
      output.attributes,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.recommendation !== undefined && output.recommendation !== null) {
    contents.recommendation = output.recommendation;
  }
  if (output.scopes !== undefined && output.scopes !== null) {
    contents.scopes = deserializeAws_json1_1ScopeList(output.scopes, context);
  }
  if (output.title !== undefined && output.title !== null) {
    contents.title = output.title;
  }
  return contents;
};

const deserializeAws_json1_1ExclusionPreviewList = (
  output: any,
  context: __SerdeContext
): Array<ExclusionPreview> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExclusionPreview(entry, context)
  );
};

const deserializeAws_json1_1FailedItemDetails = (
  output: any,
  context: __SerdeContext
): FailedItemDetails => {
  let contents: any = {
    __type: "FailedItemDetails",
    failureCode: undefined,
    retryable: undefined
  };
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.retryable !== undefined && output.retryable !== null) {
    contents.retryable = output.retryable;
  }
  return contents;
};

const deserializeAws_json1_1FailedItems = (
  output: any,
  context: __SerdeContext
): { [key: string]: FailedItemDetails } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1FailedItemDetails(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_json1_1Finding = (
  output: any,
  context: __SerdeContext
): Finding => {
  let contents: any = {
    __type: "Finding",
    arn: undefined,
    assetAttributes: undefined,
    assetType: undefined,
    attributes: undefined,
    confidence: undefined,
    createdAt: undefined,
    description: undefined,
    id: undefined,
    indicatorOfCompromise: undefined,
    numericSeverity: undefined,
    recommendation: undefined,
    schemaVersion: undefined,
    service: undefined,
    serviceAttributes: undefined,
    severity: undefined,
    title: undefined,
    updatedAt: undefined,
    userAttributes: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.assetAttributes !== undefined && output.assetAttributes !== null) {
    contents.assetAttributes = deserializeAws_json1_1AssetAttributes(
      output.assetAttributes,
      context
    );
  }
  if (output.assetType !== undefined && output.assetType !== null) {
    contents.assetType = output.assetType;
  }
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_json1_1AttributeList(
      output.attributes,
      context
    );
  }
  if (output.confidence !== undefined && output.confidence !== null) {
    contents.confidence = output.confidence;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (
    output.indicatorOfCompromise !== undefined &&
    output.indicatorOfCompromise !== null
  ) {
    contents.indicatorOfCompromise = output.indicatorOfCompromise;
  }
  if (output.numericSeverity !== undefined && output.numericSeverity !== null) {
    contents.numericSeverity = output.numericSeverity;
  }
  if (output.recommendation !== undefined && output.recommendation !== null) {
    contents.recommendation = output.recommendation;
  }
  if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
    contents.schemaVersion = output.schemaVersion;
  }
  if (output.service !== undefined && output.service !== null) {
    contents.service = output.service;
  }
  if (
    output.serviceAttributes !== undefined &&
    output.serviceAttributes !== null
  ) {
    contents.serviceAttributes = deserializeAws_json1_1InspectorServiceAttributes(
      output.serviceAttributes,
      context
    );
  }
  if (output.severity !== undefined && output.severity !== null) {
    contents.severity = output.severity;
  }
  if (output.title !== undefined && output.title !== null) {
    contents.title = output.title;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
  }
  if (output.userAttributes !== undefined && output.userAttributes !== null) {
    contents.userAttributes = deserializeAws_json1_1UserAttributeList(
      output.userAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FindingList = (
  output: any,
  context: __SerdeContext
): Array<Finding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Finding(entry, context)
  );
};

const deserializeAws_json1_1GetAssessmentReportResponse = (
  output: any,
  context: __SerdeContext
): GetAssessmentReportResponse => {
  let contents: any = {
    __type: "GetAssessmentReportResponse",
    status: undefined,
    url: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1GetExclusionsPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetExclusionsPreviewResponse => {
  let contents: any = {
    __type: "GetExclusionsPreviewResponse",
    exclusionPreviews: undefined,
    nextToken: undefined,
    previewStatus: undefined
  };
  if (
    output.exclusionPreviews !== undefined &&
    output.exclusionPreviews !== null
  ) {
    contents.exclusionPreviews = deserializeAws_json1_1ExclusionPreviewList(
      output.exclusionPreviews,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.previewStatus !== undefined && output.previewStatus !== null) {
    contents.previewStatus = output.previewStatus;
  }
  return contents;
};

const deserializeAws_json1_1GetTelemetryMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetTelemetryMetadataResponse => {
  let contents: any = {
    __type: "GetTelemetryMetadataResponse",
    telemetryMetadata: undefined
  };
  if (
    output.telemetryMetadata !== undefined &&
    output.telemetryMetadata !== null
  ) {
    contents.telemetryMetadata = deserializeAws_json1_1TelemetryMetadataList(
      output.telemetryMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InspectorServiceAttributes = (
  output: any,
  context: __SerdeContext
): InspectorServiceAttributes => {
  let contents: any = {
    __type: "InspectorServiceAttributes",
    assessmentRunArn: undefined,
    rulesPackageArn: undefined,
    schemaVersion: undefined
  };
  if (
    output.assessmentRunArn !== undefined &&
    output.assessmentRunArn !== null
  ) {
    contents.assessmentRunArn = output.assessmentRunArn;
  }
  if (output.rulesPackageArn !== undefined && output.rulesPackageArn !== null) {
    contents.rulesPackageArn = output.rulesPackageArn;
  }
  if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
    contents.schemaVersion = output.schemaVersion;
  }
  return contents;
};

const deserializeAws_json1_1InternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  let contents: any = {
    __type: "InternalException",
    canRetry: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCrossAccountRoleException = (
  output: any,
  context: __SerdeContext
): InvalidCrossAccountRoleException => {
  let contents: any = {
    __type: "InvalidCrossAccountRoleException",
    canRetry: undefined,
    errorCode: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    canRetry: undefined,
    errorCode: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Ipv4AddressList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Ipv6Addresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    canRetry: undefined,
    errorCode: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListAssessmentRunAgentsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentRunAgentsResponse => {
  let contents: any = {
    __type: "ListAssessmentRunAgentsResponse",
    assessmentRunAgents: undefined,
    nextToken: undefined
  };
  if (
    output.assessmentRunAgents !== undefined &&
    output.assessmentRunAgents !== null
  ) {
    contents.assessmentRunAgents = deserializeAws_json1_1AssessmentRunAgentList(
      output.assessmentRunAgents,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentRunsResponse => {
  let contents: any = {
    __type: "ListAssessmentRunsResponse",
    assessmentRunArns: undefined,
    nextToken: undefined
  };
  if (
    output.assessmentRunArns !== undefined &&
    output.assessmentRunArns !== null
  ) {
    contents.assessmentRunArns = deserializeAws_json1_1ListReturnedArnList(
      output.assessmentRunArns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentTargetsResponse => {
  let contents: any = {
    __type: "ListAssessmentTargetsResponse",
    assessmentTargetArns: undefined,
    nextToken: undefined
  };
  if (
    output.assessmentTargetArns !== undefined &&
    output.assessmentTargetArns !== null
  ) {
    contents.assessmentTargetArns = deserializeAws_json1_1ListReturnedArnList(
      output.assessmentTargetArns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentTemplatesResponse => {
  let contents: any = {
    __type: "ListAssessmentTemplatesResponse",
    assessmentTemplateArns: undefined,
    nextToken: undefined
  };
  if (
    output.assessmentTemplateArns !== undefined &&
    output.assessmentTemplateArns !== null
  ) {
    contents.assessmentTemplateArns = deserializeAws_json1_1ListReturnedArnList(
      output.assessmentTemplateArns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListEventSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): ListEventSubscriptionsResponse => {
  let contents: any = {
    __type: "ListEventSubscriptionsResponse",
    nextToken: undefined,
    subscriptions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.subscriptions !== undefined && output.subscriptions !== null) {
    contents.subscriptions = deserializeAws_json1_1SubscriptionList(
      output.subscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListExclusionsResponse = (
  output: any,
  context: __SerdeContext
): ListExclusionsResponse => {
  let contents: any = {
    __type: "ListExclusionsResponse",
    exclusionArns: undefined,
    nextToken: undefined
  };
  if (output.exclusionArns !== undefined && output.exclusionArns !== null) {
    contents.exclusionArns = deserializeAws_json1_1ListReturnedArnList(
      output.exclusionArns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListFindingsResponse = (
  output: any,
  context: __SerdeContext
): ListFindingsResponse => {
  let contents: any = {
    __type: "ListFindingsResponse",
    findingArns: undefined,
    nextToken: undefined
  };
  if (output.findingArns !== undefined && output.findingArns !== null) {
    contents.findingArns = deserializeAws_json1_1ListReturnedArnList(
      output.findingArns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListReturnedArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListRulesPackagesResponse = (
  output: any,
  context: __SerdeContext
): ListRulesPackagesResponse => {
  let contents: any = {
    __type: "ListRulesPackagesResponse",
    nextToken: undefined,
    rulesPackageArns: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.rulesPackageArns !== undefined &&
    output.rulesPackageArns !== null
  ) {
    contents.rulesPackageArns = deserializeAws_json1_1ListReturnedArnList(
      output.rulesPackageArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    ipv6Addresses: undefined,
    networkInterfaceId: undefined,
    privateDnsName: undefined,
    privateIpAddress: undefined,
    privateIpAddresses: undefined,
    publicDnsName: undefined,
    publicIp: undefined,
    securityGroups: undefined,
    subnetId: undefined,
    vpcId: undefined
  };
  if (output.ipv6Addresses !== undefined && output.ipv6Addresses !== null) {
    contents.ipv6Addresses = deserializeAws_json1_1Ipv6Addresses(
      output.ipv6Addresses,
      context
    );
  }
  if (
    output.networkInterfaceId !== undefined &&
    output.networkInterfaceId !== null
  ) {
    contents.networkInterfaceId = output.networkInterfaceId;
  }
  if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
    contents.privateDnsName = output.privateDnsName;
  }
  if (
    output.privateIpAddress !== undefined &&
    output.privateIpAddress !== null
  ) {
    contents.privateIpAddress = output.privateIpAddress;
  }
  if (
    output.privateIpAddresses !== undefined &&
    output.privateIpAddresses !== null
  ) {
    contents.privateIpAddresses = deserializeAws_json1_1PrivateIpAddresses(
      output.privateIpAddresses,
      context
    );
  }
  if (output.publicDnsName !== undefined && output.publicDnsName !== null) {
    contents.publicDnsName = output.publicDnsName;
  }
  if (output.publicIp !== undefined && output.publicIp !== null) {
    contents.publicIp = output.publicIp;
  }
  if (output.securityGroups !== undefined && output.securityGroups !== null) {
    contents.securityGroups = deserializeAws_json1_1SecurityGroups(
      output.securityGroups,
      context
    );
  }
  if (output.subnetId !== undefined && output.subnetId !== null) {
    contents.subnetId = output.subnetId;
  }
  if (output.vpcId !== undefined && output.vpcId !== null) {
    contents.vpcId = output.vpcId;
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterfaces = (
  output: any,
  context: __SerdeContext
): Array<NetworkInterface> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_json1_1NoSuchEntityException = (
  output: any,
  context: __SerdeContext
): NoSuchEntityException => {
  let contents: any = {
    __type: "NoSuchEntityException",
    canRetry: undefined,
    errorCode: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PreviewAgentsResponse = (
  output: any,
  context: __SerdeContext
): PreviewAgentsResponse => {
  let contents: any = {
    __type: "PreviewAgentsResponse",
    agentPreviews: undefined,
    nextToken: undefined
  };
  if (output.agentPreviews !== undefined && output.agentPreviews !== null) {
    contents.agentPreviews = deserializeAws_json1_1AgentPreviewList(
      output.agentPreviews,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1PreviewGenerationInProgressException = (
  output: any,
  context: __SerdeContext
): PreviewGenerationInProgressException => {
  let contents: any = {
    __type: "PreviewGenerationInProgressException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PrivateIp = (
  output: any,
  context: __SerdeContext
): PrivateIp => {
  let contents: any = {
    __type: "PrivateIp",
    privateDnsName: undefined,
    privateIpAddress: undefined
  };
  if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
    contents.privateDnsName = output.privateDnsName;
  }
  if (
    output.privateIpAddress !== undefined &&
    output.privateIpAddress !== null
  ) {
    contents.privateIpAddress = output.privateIpAddress;
  }
  return contents;
};

const deserializeAws_json1_1PrivateIpAddresses = (
  output: any,
  context: __SerdeContext
): Array<PrivateIp> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PrivateIp(entry, context)
  );
};

const deserializeAws_json1_1RemoveAttributesFromFindingsResponse = (
  output: any,
  context: __SerdeContext
): RemoveAttributesFromFindingsResponse => {
  let contents: any = {
    __type: "RemoveAttributesFromFindingsResponse",
    failedItems: undefined
  };
  if (output.failedItems !== undefined && output.failedItems !== null) {
    contents.failedItems = deserializeAws_json1_1FailedItems(
      output.failedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceGroup = (
  output: any,
  context: __SerdeContext
): ResourceGroup => {
  let contents: any = {
    __type: "ResourceGroup",
    arn: undefined,
    createdAt: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1ResourceGroupTags(
      output.tags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceGroupList = (
  output: any,
  context: __SerdeContext
): Array<ResourceGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceGroup(entry, context)
  );
};

const deserializeAws_json1_1ResourceGroupTag = (
  output: any,
  context: __SerdeContext
): ResourceGroupTag => {
  let contents: any = {
    __type: "ResourceGroupTag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ResourceGroupTags = (
  output: any,
  context: __SerdeContext
): Array<ResourceGroupTag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceGroupTag(entry, context)
  );
};

const deserializeAws_json1_1RulesPackage = (
  output: any,
  context: __SerdeContext
): RulesPackage => {
  let contents: any = {
    __type: "RulesPackage",
    arn: undefined,
    description: undefined,
    name: undefined,
    provider: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.provider !== undefined && output.provider !== null) {
    contents.provider = output.provider;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1RulesPackageList = (
  output: any,
  context: __SerdeContext
): Array<RulesPackage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RulesPackage(entry, context)
  );
};

const deserializeAws_json1_1Scope = (
  output: any,
  context: __SerdeContext
): Scope => {
  let contents: any = {
    __type: "Scope",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ScopeList = (
  output: any,
  context: __SerdeContext
): Array<Scope> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Scope(entry, context)
  );
};

const deserializeAws_json1_1SecurityGroup = (
  output: any,
  context: __SerdeContext
): SecurityGroup => {
  let contents: any = {
    __type: "SecurityGroup",
    groupId: undefined,
    groupName: undefined
  };
  if (output.groupId !== undefined && output.groupId !== null) {
    contents.groupId = output.groupId;
  }
  if (output.groupName !== undefined && output.groupName !== null) {
    contents.groupName = output.groupName;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<SecurityGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecurityGroup(entry, context)
  );
};

const deserializeAws_json1_1ServiceTemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceTemporarilyUnavailableException => {
  let contents: any = {
    __type: "ServiceTemporarilyUnavailableException",
    canRetry: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StartAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): StartAssessmentRunResponse => {
  let contents: any = {
    __type: "StartAssessmentRunResponse",
    assessmentRunArn: undefined
  };
  if (
    output.assessmentRunArn !== undefined &&
    output.assessmentRunArn !== null
  ) {
    contents.assessmentRunArn = output.assessmentRunArn;
  }
  return contents;
};

const deserializeAws_json1_1Subscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  let contents: any = {
    __type: "Subscription",
    eventSubscriptions: undefined,
    resourceArn: undefined,
    topicArn: undefined
  };
  if (
    output.eventSubscriptions !== undefined &&
    output.eventSubscriptions !== null
  ) {
    contents.eventSubscriptions = deserializeAws_json1_1EventSubscriptionList(
      output.eventSubscriptions,
      context
    );
  }
  if (output.resourceArn !== undefined && output.resourceArn !== null) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.topicArn !== undefined && output.topicArn !== null) {
    contents.topicArn = output.topicArn;
  }
  return contents;
};

const deserializeAws_json1_1SubscriptionList = (
  output: any,
  context: __SerdeContext
): Array<Subscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Subscription(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TelemetryMetadata = (
  output: any,
  context: __SerdeContext
): TelemetryMetadata => {
  let contents: any = {
    __type: "TelemetryMetadata",
    count: undefined,
    dataSize: undefined,
    messageType: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.dataSize !== undefined && output.dataSize !== null) {
    contents.dataSize = output.dataSize;
  }
  if (output.messageType !== undefined && output.messageType !== null) {
    contents.messageType = output.messageType;
  }
  return contents;
};

const deserializeAws_json1_1TelemetryMetadataList = (
  output: any,
  context: __SerdeContext
): Array<TelemetryMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TelemetryMetadata(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedFeatureException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureException => {
  let contents: any = {
    __type: "UnsupportedFeatureException",
    canRetry: undefined,
    message: undefined
  };
  if (output.canRetry !== undefined && output.canRetry !== null) {
    contents.canRetry = output.canRetry;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UserAttributeList = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
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
