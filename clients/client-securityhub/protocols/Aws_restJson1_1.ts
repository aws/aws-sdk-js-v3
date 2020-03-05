import {
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput
} from "../commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput
} from "../commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput
} from "../commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput
} from "../commands/BatchImportFindingsCommand";
import {
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput
} from "../commands/CreateActionTargetCommand";
import {
  CreateInsightCommandInput,
  CreateInsightCommandOutput
} from "../commands/CreateInsightCommand";
import {
  CreateMembersCommandInput,
  CreateMembersCommandOutput
} from "../commands/CreateMembersCommand";
import {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput
} from "../commands/DeclineInvitationsCommand";
import {
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput
} from "../commands/DeleteActionTargetCommand";
import {
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput
} from "../commands/DeleteInsightCommand";
import {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput
} from "../commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput
} from "../commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput
} from "../commands/DescribeActionTargetsCommand";
import {
  DescribeHubCommandInput,
  DescribeHubCommandOutput
} from "../commands/DescribeHubCommand";
import {
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput
} from "../commands/DescribeProductsCommand";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput
} from "../commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput
} from "../commands/DisableImportFindingsForProductCommand";
import {
  DisableSecurityHubCommandInput,
  DisableSecurityHubCommandOutput
} from "../commands/DisableSecurityHubCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput
} from "../commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput
} from "../commands/EnableImportFindingsForProductCommand";
import {
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput
} from "../commands/EnableSecurityHubCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput
} from "../commands/GetEnabledStandardsCommand";
import {
  GetFindingsCommandInput,
  GetFindingsCommandOutput
} from "../commands/GetFindingsCommand";
import {
  GetInsightResultsCommandInput,
  GetInsightResultsCommandOutput
} from "../commands/GetInsightResultsCommand";
import {
  GetInsightsCommandInput,
  GetInsightsCommandOutput
} from "../commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput
} from "../commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput
} from "../commands/GetMasterAccountCommand";
import {
  GetMembersCommandInput,
  GetMembersCommandOutput
} from "../commands/GetMembersCommand";
import {
  InviteMembersCommandInput,
  InviteMembersCommandOutput
} from "../commands/InviteMembersCommand";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput
} from "../commands/ListEnabledProductsForImportCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "../commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "../commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateActionTargetCommandInput,
  UpdateActionTargetCommandOutput
} from "../commands/UpdateActionTargetCommand";
import {
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput
} from "../commands/UpdateFindingsCommand";
import {
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput
} from "../commands/UpdateInsightCommand";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput
} from "../commands/UpdateStandardsControlCommand";
import {
  AccessDeniedException,
  AccountDetails,
  ActionTarget,
  AvailabilityZone,
  AwsCloudFrontDistributionDetails,
  AwsCloudFrontDistributionLogging,
  AwsCloudFrontDistributionOriginItem,
  AwsCloudFrontDistributionOrigins,
  AwsEc2InstanceDetails,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamRoleDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionCode,
  AwsLambdaFunctionDeadLetterConfig,
  AwsLambdaFunctionDetails,
  AwsLambdaFunctionEnvironment,
  AwsLambdaFunctionEnvironmentError,
  AwsLambdaFunctionLayer,
  AwsLambdaFunctionTracingConfig,
  AwsLambdaFunctionVpcConfig,
  AwsS3BucketDetails,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  Compliance,
  ContainerDetails,
  DateFilter,
  DateRange,
  ImportFindingsError,
  Insight,
  InsightResultValue,
  InsightResults,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  Invitation,
  IpFilter,
  KeywordFilter,
  LimitExceededException,
  LoadBalancerState,
  Malware,
  MapFilter,
  Member,
  Network,
  Note,
  NoteUpdate,
  NumberFilter,
  ProcessDetails,
  Product,
  Recommendation,
  RelatedFinding,
  Remediation,
  Resource,
  ResourceConflictException,
  ResourceDetails,
  ResourceNotFoundException,
  Result,
  Severity,
  SortCriterion,
  StandardsControl,
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StringFilter,
  ThreatIntelIndicator
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AcceptInvitationCommand(
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/master";
  let body: any;
  const bodyParams: any = {};
  if (input.InvitationId !== undefined) {
    bodyParams["InvitationId"] = input.InvitationId;
  }
  if (input.MasterId !== undefined) {
    bodyParams["MasterId"] = input.MasterId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BatchDisableStandardsCommand(
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/standards/deregister";
  let body: any;
  const bodyParams: any = {};
  if (input.StandardsSubscriptionArns !== undefined) {
    bodyParams[
      "StandardsSubscriptionArns"
    ] = serializeAws_restJson1_1StandardsSubscriptionArns(
      input.StandardsSubscriptionArns,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BatchEnableStandardsCommand(
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/standards/register";
  let body: any;
  const bodyParams: any = {};
  if (input.StandardsSubscriptionRequests !== undefined) {
    bodyParams[
      "StandardsSubscriptionRequests"
    ] = serializeAws_restJson1_1StandardsSubscriptionRequests(
      input.StandardsSubscriptionRequests,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BatchImportFindingsCommand(
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/findings/import";
  let body: any;
  const bodyParams: any = {};
  if (input.Findings !== undefined) {
    bodyParams["Findings"] = serializeAws_restJson1_1AwsSecurityFindingList(
      input.Findings,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateActionTargetCommand(
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/actionTargets";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateInsightCommand(
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/insights";
  let body: any;
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1AwsSecurityFindingFilters(
      input.Filters,
      context
    );
  }
  if (input.GroupByAttribute !== undefined) {
    bodyParams["GroupByAttribute"] = input.GroupByAttribute;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateMembersCommand(
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/members";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountDetails !== undefined) {
    bodyParams["AccountDetails"] = serializeAws_restJson1_1AccountDetailsList(
      input.AccountDetails,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeclineInvitationsCommand(
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/invitations/decline";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteActionTargetCommand(
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ActionTargetArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteInsightCommand(
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteInvitationsCommand(
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/invitations/delete";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteMembersCommand(
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/members/delete";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeActionTargetsCommand(
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/actionTargets/get";
  let body: any;
  const bodyParams: any = {};
  if (input.ActionTargetArns !== undefined) {
    bodyParams["ActionTargetArns"] = serializeAws_restJson1_1ArnList(
      input.ActionTargetArns,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeHubCommand(
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/accounts";
  const query: any = {};
  if (input.HubArn !== undefined) {
    query["HubArn"] = input.HubArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeProductsCommand(
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/products";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeStandardsControlsCommand(
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/standards/controls/{StandardsSubscriptionArn+}";
  if (input.StandardsSubscriptionArn !== undefined) {
    const labelValue: string = input.StandardsSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: StandardsSubscriptionArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsSubscriptionArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: StandardsSubscriptionArn."
    );
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DisableImportFindingsForProductCommand(
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/productSubscriptions/{ProductSubscriptionArn+}";
  if (input.ProductSubscriptionArn !== undefined) {
    const labelValue: string = input.ProductSubscriptionArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ProductSubscriptionArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ProductSubscriptionArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ProductSubscriptionArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisableSecurityHubCommand(
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/accounts";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisassociateFromMasterAccountCommand(
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/master/disassociate";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisassociateMembersCommand(
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/members/disassociate";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1EnableImportFindingsForProductCommand(
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/productSubscriptions";
  let body: any;
  const bodyParams: any = {};
  if (input.ProductArn !== undefined) {
    bodyParams["ProductArn"] = input.ProductArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1EnableSecurityHubCommand(
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/accounts";
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetEnabledStandardsCommand(
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/standards/get";
  let body: any;
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StandardsSubscriptionArns !== undefined) {
    bodyParams[
      "StandardsSubscriptionArns"
    ] = serializeAws_restJson1_1StandardsSubscriptionArns(
      input.StandardsSubscriptionArns,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetFindingsCommand(
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/findings";
  let body: any;
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1AwsSecurityFindingFilters(
      input.Filters,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortCriteria !== undefined) {
    bodyParams["SortCriteria"] = serializeAws_restJson1_1SortCriteria(
      input.SortCriteria,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetInsightResultsCommand(
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/insights/results/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetInsightsCommand(
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/insights/get";
  let body: any;
  const bodyParams: any = {};
  if (input.InsightArns !== undefined) {
    bodyParams["InsightArns"] = serializeAws_restJson1_1ArnList(
      input.InsightArns,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetInvitationsCountCommand(
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/invitations/count";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetMasterAccountCommand(
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/master";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetMembersCommand(
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/members/get";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1InviteMembersCommand(
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/members/invite";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(
      input.AccountIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListEnabledProductsForImportCommand(
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/productSubscriptions";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListInvitationsCommand(
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/invitations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListMembersCommand(
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/members";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.OnlyAssociated !== undefined) {
    query["OnlyAssociated"] = input.OnlyAssociated.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateActionTargetCommand(
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/actionTargets/{ActionTargetArn+}";
  if (input.ActionTargetArn !== undefined) {
    const labelValue: string = input.ActionTargetArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ActionTargetArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ActionTargetArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFindingsCommand(
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/findings";
  let body: any;
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1AwsSecurityFindingFilters(
      input.Filters,
      context
    );
  }
  if (input.Note !== undefined) {
    bodyParams["Note"] = serializeAws_restJson1_1NoteUpdate(
      input.Note,
      context
    );
  }
  if (input.RecordState !== undefined) {
    bodyParams["RecordState"] = input.RecordState;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateInsightCommand(
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/insights/{InsightArn+}";
  if (input.InsightArn !== undefined) {
    const labelValue: string = input.InsightArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{InsightArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1AwsSecurityFindingFilters(
      input.Filters,
      context
    );
  }
  if (input.GroupByAttribute !== undefined) {
    bodyParams["GroupByAttribute"] = input.GroupByAttribute;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateStandardsControlCommand(
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/standards/control/{StandardsControlArn+}";
  if (input.StandardsControlArn !== undefined) {
    const labelValue: string = input.StandardsControlArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: StandardsControlArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{StandardsControlArn+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: StandardsControlArn."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ControlStatus !== undefined) {
    bodyParams["ControlStatus"] = input.ControlStatus;
  }
  if (input.DisabledReason !== undefined) {
    bodyParams["DisabledReason"] = input.DisabledReason;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AcceptInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AcceptInvitationCommandError(
      output,
      context
    );
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptInvitationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AcceptInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1BatchDisableStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchDisableStandardsCommandError(
      output,
      context
    );
  }
  const contents: BatchDisableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDisableStandardsResponse",
    StandardsSubscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.StandardsSubscriptions !== undefined &&
    data.StandardsSubscriptions !== null
  ) {
    contents.StandardsSubscriptions = deserializeAws_restJson1_1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchDisableStandardsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1BatchEnableStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchEnableStandardsCommandError(
      output,
      context
    );
  }
  const contents: BatchEnableStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchEnableStandardsResponse",
    StandardsSubscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.StandardsSubscriptions !== undefined &&
    data.StandardsSubscriptions !== null
  ) {
    contents.StandardsSubscriptions = deserializeAws_restJson1_1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchEnableStandardsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1BatchImportFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchImportFindingsCommandError(
      output,
      context
    );
  }
  const contents: BatchImportFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchImportFindingsResponse",
    FailedCount: undefined,
    FailedFindings: undefined,
    SuccessCount: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FailedCount !== undefined && data.FailedCount !== null) {
    contents.FailedCount = data.FailedCount;
  }
  if (data.FailedFindings !== undefined && data.FailedFindings !== null) {
    contents.FailedFindings = deserializeAws_restJson1_1ImportFindingsErrorList(
      data.FailedFindings,
      context
    );
  }
  if (data.SuccessCount !== undefined && data.SuccessCount !== null) {
    contents.SuccessCount = data.SuccessCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchImportFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateActionTargetCommandError(
      output,
      context
    );
  }
  const contents: CreateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateActionTargetResponse",
    ActionTargetArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateInsightCommandError(output, context);
  }
  const contents: CreateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInsightResponse",
    InsightArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMembersCommandError(output, context);
  }
  const contents: CreateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeclineInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeclineInvitationsCommandError(
      output,
      context
    );
  }
  const contents: DeclineInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeclineInvitationsResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeclineInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteActionTargetCommandError(
      output,
      context
    );
  }
  const contents: DeleteActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteActionTargetResponse",
    ActionTargetArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInsightCommandError(output, context);
  }
  const contents: DeleteInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInsightResponse",
    InsightArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined && data.InsightArn !== null) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInvitationsCommandError(
      output,
      context
    );
  }
  const contents: DeleteInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInvitationsResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMembersCommandError(output, context);
  }
  const contents: DeleteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeActionTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeActionTargetsCommandError(
      output,
      context
    );
  }
  const contents: DescribeActionTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeActionTargetsResponse",
    ActionTargets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActionTargets !== undefined && data.ActionTargets !== null) {
    contents.ActionTargets = deserializeAws_restJson1_1ActionTargetList(
      data.ActionTargets,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeActionTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeHubCommandError(output, context);
  }
  const contents: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHubResponse",
    HubArn: undefined,
    SubscribedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.HubArn !== undefined && data.HubArn !== null) {
    contents.HubArn = data.HubArn;
  }
  if (data.SubscribedAt !== undefined && data.SubscribedAt !== null) {
    contents.SubscribedAt = data.SubscribedAt;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeProductsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeProductsCommandError(
      output,
      context
    );
  }
  const contents: DescribeProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProductsResponse",
    NextToken: undefined,
    Products: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Products !== undefined && data.Products !== null) {
    contents.Products = deserializeAws_restJson1_1ProductsList(
      data.Products,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeProductsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeStandardsControlsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeStandardsControlsCommandError(
      output,
      context
    );
  }
  const contents: DescribeStandardsControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStandardsControlsResponse",
    Controls: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Controls !== undefined && data.Controls !== null) {
    contents.Controls = deserializeAws_restJson1_1StandardsControls(
      data.Controls,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeStandardsControlsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisableImportFindingsForProductCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisableImportFindingsForProductCommandError(
      output,
      context
    );
  }
  const contents: DisableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableImportFindingsForProductResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisableImportFindingsForProductCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisableSecurityHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisableSecurityHubCommandError(
      output,
      context
    );
  }
  const contents: DisableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableSecurityHubResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisableSecurityHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(
      output,
      context
    );
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateFromMasterAccountResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisassociateMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateMembersCommandError(
      output,
      context
    );
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateMembersResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1EnableImportFindingsForProductCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1EnableImportFindingsForProductCommandError(
      output,
      context
    );
  }
  const contents: EnableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableImportFindingsForProductResponse",
    ProductSubscriptionArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ProductSubscriptionArn !== undefined &&
    data.ProductSubscriptionArn !== null
  ) {
    contents.ProductSubscriptionArn = data.ProductSubscriptionArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableImportFindingsForProductCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1EnableSecurityHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1EnableSecurityHubCommandError(
      output,
      context
    );
  }
  const contents: EnableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableSecurityHubResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableSecurityHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetEnabledStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetEnabledStandardsCommandError(
      output,
      context
    );
  }
  const contents: GetEnabledStandardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEnabledStandardsResponse",
    NextToken: undefined,
    StandardsSubscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.StandardsSubscriptions !== undefined &&
    data.StandardsSubscriptions !== null
  ) {
    contents.StandardsSubscriptions = deserializeAws_restJson1_1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetEnabledStandardsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFindingsCommandError(output, context);
  }
  const contents: GetFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingsResponse",
    Findings: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Findings !== undefined && data.Findings !== null) {
    contents.Findings = deserializeAws_restJson1_1AwsSecurityFindingList(
      data.Findings,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetInsightResultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetInsightResultsCommandError(
      output,
      context
    );
  }
  const contents: GetInsightResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightResultsResponse",
    InsightResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightResults !== undefined && data.InsightResults !== null) {
    contents.InsightResults = deserializeAws_restJson1_1InsightResults(
      data.InsightResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInsightResultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetInsightsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetInsightsCommandError(output, context);
  }
  const contents: GetInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightsResponse",
    Insights: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Insights !== undefined && data.Insights !== null) {
    contents.Insights = deserializeAws_restJson1_1InsightList(
      data.Insights,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInsightsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetInvitationsCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetInvitationsCountCommandError(
      output,
      context
    );
  }
  const contents: GetInvitationsCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInvitationsCountResponse",
    InvitationsCount: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InvitationsCount !== undefined && data.InvitationsCount !== null) {
    contents.InvitationsCount = data.InvitationsCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInvitationsCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMasterAccountCommandError(
      output,
      context
    );
  }
  const contents: GetMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMasterAccountResponse",
    Master: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Master !== undefined && data.Master !== null) {
    contents.Master = deserializeAws_restJson1_1Invitation(
      data.Master,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMasterAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMembersCommandError(output, context);
  }
  const contents: GetMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMembersResponse",
    Members: undefined,
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1_1MemberList(
      data.Members,
      context
    );
  }
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1InviteMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InviteMembersCommandError(output, context);
  }
  const contents: InviteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InviteMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedAccounts !== undefined &&
    data.UnprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1ResultList(
      data.UnprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1InviteMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListEnabledProductsForImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListEnabledProductsForImportCommandError(
      output,
      context
    );
  }
  const contents: ListEnabledProductsForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEnabledProductsForImportResponse",
    NextToken: undefined,
    ProductSubscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.ProductSubscriptions !== undefined &&
    data.ProductSubscriptions !== null
  ) {
    contents.ProductSubscriptions = deserializeAws_restJson1_1ProductSubscriptionArnList(
      data.ProductSubscriptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListEnabledProductsForImportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInvitationsCommandError(
      output,
      context
    );
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInvitationsResponse",
    Invitations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1_1InvitationList(
      data.Invitations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMembersResponse",
    Members: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1_1MemberList(
      data.Members,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateActionTargetCommandError(
      output,
      context
    );
  }
  const contents: UpdateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionTargetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFindingsCommandError(
      output,
      context
    );
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFindingsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInsightCommandError(output, context);
  }
  const contents: UpdateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInsightResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateStandardsControlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateStandardsControlCommandError(
      output,
      context
    );
  }
  const contents: UpdateStandardsControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStandardsControlResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateStandardsControlCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidAccessExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: InvalidAccessException = {
    name: "InvalidAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1AccountDetails = (
  input: AccountDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AccountDetailsList = (
  input: Array<AccountDetails>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AccountDetails(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1AccountIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1AvailabilityZone = (
  input: AvailabilityZone,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  if (input.ZoneName !== undefined) {
    bodyParams["ZoneName"] = input.ZoneName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AvailabilityZones = (
  input: Array<AvailabilityZone>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AvailabilityZone(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1AwsCloudFrontDistributionDetails = (
  input: AwsCloudFrontDistributionDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.ETag !== undefined) {
    bodyParams["ETag"] = input.ETag;
  }
  if (input.LastModifiedTime !== undefined) {
    bodyParams["LastModifiedTime"] = input.LastModifiedTime;
  }
  if (input.Logging !== undefined) {
    bodyParams[
      "Logging"
    ] = serializeAws_restJson1_1AwsCloudFrontDistributionLogging(
      input.Logging,
      context
    );
  }
  if (input.Origins !== undefined) {
    bodyParams[
      "Origins"
    ] = serializeAws_restJson1_1AwsCloudFrontDistributionOrigins(
      input.Origins,
      context
    );
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  if (input.WebAclId !== undefined) {
    bodyParams["WebAclId"] = input.WebAclId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsCloudFrontDistributionLogging = (
  input: AwsCloudFrontDistributionLogging,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.IncludeCookies !== undefined) {
    bodyParams["IncludeCookies"] = input.IncludeCookies;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsCloudFrontDistributionOriginItem = (
  input: AwsCloudFrontDistributionOriginItem,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.OriginPath !== undefined) {
    bodyParams["OriginPath"] = input.OriginPath;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList = (
  input: Array<AwsCloudFrontDistributionOriginItem>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1AwsCloudFrontDistributionOriginItem(
        entry,
        context
      )
    );
  }
  return contents;
};

const serializeAws_restJson1_1AwsCloudFrontDistributionOrigins = (
  input: AwsCloudFrontDistributionOrigins,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Items !== undefined) {
    bodyParams[
      "Items"
    ] = serializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList(
      input.Items,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsEc2InstanceDetails = (
  input: AwsEc2InstanceDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IamInstanceProfileArn !== undefined) {
    bodyParams["IamInstanceProfileArn"] = input.IamInstanceProfileArn;
  }
  if (input.ImageId !== undefined) {
    bodyParams["ImageId"] = input.ImageId;
  }
  if (input.IpV4Addresses !== undefined) {
    bodyParams["IpV4Addresses"] = serializeAws_restJson1_1StringList(
      input.IpV4Addresses,
      context
    );
  }
  if (input.IpV6Addresses !== undefined) {
    bodyParams["IpV6Addresses"] = serializeAws_restJson1_1StringList(
      input.IpV6Addresses,
      context
    );
  }
  if (input.KeyName !== undefined) {
    bodyParams["KeyName"] = input.KeyName;
  }
  if (input.LaunchedAt !== undefined) {
    bodyParams["LaunchedAt"] = input.LaunchedAt;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.VpcId !== undefined) {
    bodyParams["VpcId"] = input.VpcId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsElbv2LoadBalancerDetails = (
  input: AwsElbv2LoadBalancerDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams["AvailabilityZones"] = serializeAws_restJson1_1AvailabilityZones(
      input.AvailabilityZones,
      context
    );
  }
  if (input.CanonicalHostedZoneId !== undefined) {
    bodyParams["CanonicalHostedZoneId"] = input.CanonicalHostedZoneId;
  }
  if (input.CreatedTime !== undefined) {
    bodyParams["CreatedTime"] = input.CreatedTime;
  }
  if (input.DNSName !== undefined) {
    bodyParams["DNSName"] = input.DNSName;
  }
  if (input.IpAddressType !== undefined) {
    bodyParams["IpAddressType"] = input.IpAddressType;
  }
  if (input.Scheme !== undefined) {
    bodyParams["Scheme"] = input.Scheme;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.SecurityGroups,
      context
    );
  }
  if (input.State !== undefined) {
    bodyParams["State"] = serializeAws_restJson1_1LoadBalancerState(
      input.State,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.VpcId !== undefined) {
    bodyParams["VpcId"] = input.VpcId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsIamAccessKeyDetails = (
  input: AwsIamAccessKeyDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatedAt !== undefined) {
    bodyParams["CreatedAt"] = input.CreatedAt;
  }
  if (input.PrincipalId !== undefined) {
    bodyParams["PrincipalId"] = input.PrincipalId;
  }
  if (input.PrincipalName !== undefined) {
    bodyParams["PrincipalName"] = input.PrincipalName;
  }
  if (input.PrincipalType !== undefined) {
    bodyParams["PrincipalType"] = input.PrincipalType;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsIamRoleDetails = (
  input: AwsIamRoleDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssumeRolePolicyDocument !== undefined) {
    bodyParams["AssumeRolePolicyDocument"] = input.AssumeRolePolicyDocument;
  }
  if (input.CreateDate !== undefined) {
    bodyParams["CreateDate"] = input.CreateDate;
  }
  if (input.MaxSessionDuration !== undefined) {
    bodyParams["MaxSessionDuration"] = input.MaxSessionDuration;
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  if (input.RoleId !== undefined) {
    bodyParams["RoleId"] = input.RoleId;
  }
  if (input.RoleName !== undefined) {
    bodyParams["RoleName"] = input.RoleName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsKmsKeyDetails = (
  input: AwsKmsKeyDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AWSAccountId !== undefined) {
    bodyParams["AWSAccountId"] = input.AWSAccountId;
  }
  if (input.CreationDate !== undefined) {
    bodyParams["CreationDate"] = input.CreationDate;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyManager !== undefined) {
    bodyParams["KeyManager"] = input.KeyManager;
  }
  if (input.KeyState !== undefined) {
    bodyParams["KeyState"] = input.KeyState;
  }
  if (input.Origin !== undefined) {
    bodyParams["Origin"] = input.Origin;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionCode = (
  input: AwsLambdaFunctionCode,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  if (input.S3ObjectVersion !== undefined) {
    bodyParams["S3ObjectVersion"] = input.S3ObjectVersion;
  }
  if (input.ZipFile !== undefined) {
    bodyParams["ZipFile"] = input.ZipFile;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig = (
  input: AwsLambdaFunctionDeadLetterConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TargetArn !== undefined) {
    bodyParams["TargetArn"] = input.TargetArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionDetails = (
  input: AwsLambdaFunctionDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Code !== undefined) {
    bodyParams["Code"] = serializeAws_restJson1_1AwsLambdaFunctionCode(
      input.Code,
      context
    );
  }
  if (input.CodeSha256 !== undefined) {
    bodyParams["CodeSha256"] = input.CodeSha256;
  }
  if (input.DeadLetterConfig !== undefined) {
    bodyParams[
      "DeadLetterConfig"
    ] = serializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig(
      input.DeadLetterConfig,
      context
    );
  }
  if (input.Environment !== undefined) {
    bodyParams[
      "Environment"
    ] = serializeAws_restJson1_1AwsLambdaFunctionEnvironment(
      input.Environment,
      context
    );
  }
  if (input.FunctionName !== undefined) {
    bodyParams["FunctionName"] = input.FunctionName;
  }
  if (input.Handler !== undefined) {
    bodyParams["Handler"] = input.Handler;
  }
  if (input.KmsKeyArn !== undefined) {
    bodyParams["KmsKeyArn"] = input.KmsKeyArn;
  }
  if (input.LastModified !== undefined) {
    bodyParams["LastModified"] = input.LastModified;
  }
  if (input.Layers !== undefined) {
    bodyParams["Layers"] = serializeAws_restJson1_1AwsLambdaFunctionLayerList(
      input.Layers,
      context
    );
  }
  if (input.MasterArn !== undefined) {
    bodyParams["MasterArn"] = input.MasterArn;
  }
  if (input.MemorySize !== undefined) {
    bodyParams["MemorySize"] = input.MemorySize;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Runtime !== undefined) {
    bodyParams["Runtime"] = input.Runtime;
  }
  if (input.Timeout !== undefined) {
    bodyParams["Timeout"] = input.Timeout;
  }
  if (input.TracingConfig !== undefined) {
    bodyParams[
      "TracingConfig"
    ] = serializeAws_restJson1_1AwsLambdaFunctionTracingConfig(
      input.TracingConfig,
      context
    );
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  if (input.VpcConfig !== undefined) {
    bodyParams[
      "VpcConfig"
    ] = serializeAws_restJson1_1AwsLambdaFunctionVpcConfig(
      input.VpcConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionEnvironment = (
  input: AwsLambdaFunctionEnvironment,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Error !== undefined) {
    bodyParams[
      "Error"
    ] = serializeAws_restJson1_1AwsLambdaFunctionEnvironmentError(
      input.Error,
      context
    );
  }
  if (input.Variables !== undefined) {
    bodyParams["Variables"] = serializeAws_restJson1_1FieldMap(
      input.Variables,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionEnvironmentError = (
  input: AwsLambdaFunctionEnvironmentError,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ErrorCode !== undefined) {
    bodyParams["ErrorCode"] = input.ErrorCode;
  }
  if (input.Message !== undefined) {
    bodyParams["Message"] = input.Message;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionLayer = (
  input: AwsLambdaFunctionLayer,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.CodeSize !== undefined) {
    bodyParams["CodeSize"] = input.CodeSize;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionLayerList = (
  input: Array<AwsLambdaFunctionLayer>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1AwsLambdaFunctionLayer(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1AwsLambdaFunctionTracingConfig = (
  input: AwsLambdaFunctionTracingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Mode !== undefined) {
    bodyParams["Mode"] = input.Mode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsLambdaFunctionVpcConfig = (
  input: AwsLambdaFunctionVpcConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_restJson1_1NonEmptyStringList(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_restJson1_1NonEmptyStringList(
      input.SubnetIds,
      context
    );
  }
  if (input.VpcId !== undefined) {
    bodyParams["VpcId"] = input.VpcId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsS3BucketDetails = (
  input: AwsS3BucketDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OwnerId !== undefined) {
    bodyParams["OwnerId"] = input.OwnerId;
  }
  if (input.OwnerName !== undefined) {
    bodyParams["OwnerName"] = input.OwnerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsSecurityFinding = (
  input: AwsSecurityFinding,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsAccountId !== undefined) {
    bodyParams["AwsAccountId"] = input.AwsAccountId;
  }
  if (input.Compliance !== undefined) {
    bodyParams["Compliance"] = serializeAws_restJson1_1Compliance(
      input.Compliance,
      context
    );
  }
  if (input.Confidence !== undefined) {
    bodyParams["Confidence"] = input.Confidence;
  }
  if (input.CreatedAt !== undefined) {
    bodyParams["CreatedAt"] = input.CreatedAt;
  }
  if (input.Criticality !== undefined) {
    bodyParams["Criticality"] = input.Criticality;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FirstObservedAt !== undefined) {
    bodyParams["FirstObservedAt"] = input.FirstObservedAt;
  }
  if (input.GeneratorId !== undefined) {
    bodyParams["GeneratorId"] = input.GeneratorId;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LastObservedAt !== undefined) {
    bodyParams["LastObservedAt"] = input.LastObservedAt;
  }
  if (input.Malware !== undefined) {
    bodyParams["Malware"] = serializeAws_restJson1_1MalwareList(
      input.Malware,
      context
    );
  }
  if (input.Network !== undefined) {
    bodyParams["Network"] = serializeAws_restJson1_1Network(
      input.Network,
      context
    );
  }
  if (input.Note !== undefined) {
    bodyParams["Note"] = serializeAws_restJson1_1Note(input.Note, context);
  }
  if (input.Process !== undefined) {
    bodyParams["Process"] = serializeAws_restJson1_1ProcessDetails(
      input.Process,
      context
    );
  }
  if (input.ProductArn !== undefined) {
    bodyParams["ProductArn"] = input.ProductArn;
  }
  if (input.ProductFields !== undefined) {
    bodyParams["ProductFields"] = serializeAws_restJson1_1FieldMap(
      input.ProductFields,
      context
    );
  }
  if (input.RecordState !== undefined) {
    bodyParams["RecordState"] = input.RecordState;
  }
  if (input.RelatedFindings !== undefined) {
    bodyParams["RelatedFindings"] = serializeAws_restJson1_1RelatedFindingList(
      input.RelatedFindings,
      context
    );
  }
  if (input.Remediation !== undefined) {
    bodyParams["Remediation"] = serializeAws_restJson1_1Remediation(
      input.Remediation,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_restJson1_1ResourceList(
      input.Resources,
      context
    );
  }
  if (input.SchemaVersion !== undefined) {
    bodyParams["SchemaVersion"] = input.SchemaVersion;
  }
  if (input.Severity !== undefined) {
    bodyParams["Severity"] = serializeAws_restJson1_1Severity(
      input.Severity,
      context
    );
  }
  if (input.SourceUrl !== undefined) {
    bodyParams["SourceUrl"] = input.SourceUrl;
  }
  if (input.ThreatIntelIndicators !== undefined) {
    bodyParams[
      "ThreatIntelIndicators"
    ] = serializeAws_restJson1_1ThreatIntelIndicatorList(
      input.ThreatIntelIndicators,
      context
    );
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  if (input.Types !== undefined) {
    bodyParams["Types"] = serializeAws_restJson1_1TypeList(
      input.Types,
      context
    );
  }
  if (input.UpdatedAt !== undefined) {
    bodyParams["UpdatedAt"] = input.UpdatedAt;
  }
  if (input.UserDefinedFields !== undefined) {
    bodyParams["UserDefinedFields"] = serializeAws_restJson1_1FieldMap(
      input.UserDefinedFields,
      context
    );
  }
  if (input.VerificationState !== undefined) {
    bodyParams["VerificationState"] = input.VerificationState;
  }
  if (input.WorkflowState !== undefined) {
    bodyParams["WorkflowState"] = input.WorkflowState;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsSecurityFindingFilters = (
  input: AwsSecurityFindingFilters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsAccountId !== undefined) {
    bodyParams["AwsAccountId"] = serializeAws_restJson1_1StringFilterList(
      input.AwsAccountId,
      context
    );
  }
  if (input.CompanyName !== undefined) {
    bodyParams["CompanyName"] = serializeAws_restJson1_1StringFilterList(
      input.CompanyName,
      context
    );
  }
  if (input.ComplianceStatus !== undefined) {
    bodyParams["ComplianceStatus"] = serializeAws_restJson1_1StringFilterList(
      input.ComplianceStatus,
      context
    );
  }
  if (input.Confidence !== undefined) {
    bodyParams["Confidence"] = serializeAws_restJson1_1NumberFilterList(
      input.Confidence,
      context
    );
  }
  if (input.CreatedAt !== undefined) {
    bodyParams["CreatedAt"] = serializeAws_restJson1_1DateFilterList(
      input.CreatedAt,
      context
    );
  }
  if (input.Criticality !== undefined) {
    bodyParams["Criticality"] = serializeAws_restJson1_1NumberFilterList(
      input.Criticality,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = serializeAws_restJson1_1StringFilterList(
      input.Description,
      context
    );
  }
  if (input.FirstObservedAt !== undefined) {
    bodyParams["FirstObservedAt"] = serializeAws_restJson1_1DateFilterList(
      input.FirstObservedAt,
      context
    );
  }
  if (input.GeneratorId !== undefined) {
    bodyParams["GeneratorId"] = serializeAws_restJson1_1StringFilterList(
      input.GeneratorId,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = serializeAws_restJson1_1StringFilterList(
      input.Id,
      context
    );
  }
  if (input.Keyword !== undefined) {
    bodyParams["Keyword"] = serializeAws_restJson1_1KeywordFilterList(
      input.Keyword,
      context
    );
  }
  if (input.LastObservedAt !== undefined) {
    bodyParams["LastObservedAt"] = serializeAws_restJson1_1DateFilterList(
      input.LastObservedAt,
      context
    );
  }
  if (input.MalwareName !== undefined) {
    bodyParams["MalwareName"] = serializeAws_restJson1_1StringFilterList(
      input.MalwareName,
      context
    );
  }
  if (input.MalwarePath !== undefined) {
    bodyParams["MalwarePath"] = serializeAws_restJson1_1StringFilterList(
      input.MalwarePath,
      context
    );
  }
  if (input.MalwareState !== undefined) {
    bodyParams["MalwareState"] = serializeAws_restJson1_1StringFilterList(
      input.MalwareState,
      context
    );
  }
  if (input.MalwareType !== undefined) {
    bodyParams["MalwareType"] = serializeAws_restJson1_1StringFilterList(
      input.MalwareType,
      context
    );
  }
  if (input.NetworkDestinationDomain !== undefined) {
    bodyParams[
      "NetworkDestinationDomain"
    ] = serializeAws_restJson1_1StringFilterList(
      input.NetworkDestinationDomain,
      context
    );
  }
  if (input.NetworkDestinationIpV4 !== undefined) {
    bodyParams["NetworkDestinationIpV4"] = serializeAws_restJson1_1IpFilterList(
      input.NetworkDestinationIpV4,
      context
    );
  }
  if (input.NetworkDestinationIpV6 !== undefined) {
    bodyParams["NetworkDestinationIpV6"] = serializeAws_restJson1_1IpFilterList(
      input.NetworkDestinationIpV6,
      context
    );
  }
  if (input.NetworkDestinationPort !== undefined) {
    bodyParams[
      "NetworkDestinationPort"
    ] = serializeAws_restJson1_1NumberFilterList(
      input.NetworkDestinationPort,
      context
    );
  }
  if (input.NetworkDirection !== undefined) {
    bodyParams["NetworkDirection"] = serializeAws_restJson1_1StringFilterList(
      input.NetworkDirection,
      context
    );
  }
  if (input.NetworkProtocol !== undefined) {
    bodyParams["NetworkProtocol"] = serializeAws_restJson1_1StringFilterList(
      input.NetworkProtocol,
      context
    );
  }
  if (input.NetworkSourceDomain !== undefined) {
    bodyParams[
      "NetworkSourceDomain"
    ] = serializeAws_restJson1_1StringFilterList(
      input.NetworkSourceDomain,
      context
    );
  }
  if (input.NetworkSourceIpV4 !== undefined) {
    bodyParams["NetworkSourceIpV4"] = serializeAws_restJson1_1IpFilterList(
      input.NetworkSourceIpV4,
      context
    );
  }
  if (input.NetworkSourceIpV6 !== undefined) {
    bodyParams["NetworkSourceIpV6"] = serializeAws_restJson1_1IpFilterList(
      input.NetworkSourceIpV6,
      context
    );
  }
  if (input.NetworkSourceMac !== undefined) {
    bodyParams["NetworkSourceMac"] = serializeAws_restJson1_1StringFilterList(
      input.NetworkSourceMac,
      context
    );
  }
  if (input.NetworkSourcePort !== undefined) {
    bodyParams["NetworkSourcePort"] = serializeAws_restJson1_1NumberFilterList(
      input.NetworkSourcePort,
      context
    );
  }
  if (input.NoteText !== undefined) {
    bodyParams["NoteText"] = serializeAws_restJson1_1StringFilterList(
      input.NoteText,
      context
    );
  }
  if (input.NoteUpdatedAt !== undefined) {
    bodyParams["NoteUpdatedAt"] = serializeAws_restJson1_1DateFilterList(
      input.NoteUpdatedAt,
      context
    );
  }
  if (input.NoteUpdatedBy !== undefined) {
    bodyParams["NoteUpdatedBy"] = serializeAws_restJson1_1StringFilterList(
      input.NoteUpdatedBy,
      context
    );
  }
  if (input.ProcessLaunchedAt !== undefined) {
    bodyParams["ProcessLaunchedAt"] = serializeAws_restJson1_1DateFilterList(
      input.ProcessLaunchedAt,
      context
    );
  }
  if (input.ProcessName !== undefined) {
    bodyParams["ProcessName"] = serializeAws_restJson1_1StringFilterList(
      input.ProcessName,
      context
    );
  }
  if (input.ProcessParentPid !== undefined) {
    bodyParams["ProcessParentPid"] = serializeAws_restJson1_1NumberFilterList(
      input.ProcessParentPid,
      context
    );
  }
  if (input.ProcessPath !== undefined) {
    bodyParams["ProcessPath"] = serializeAws_restJson1_1StringFilterList(
      input.ProcessPath,
      context
    );
  }
  if (input.ProcessPid !== undefined) {
    bodyParams["ProcessPid"] = serializeAws_restJson1_1NumberFilterList(
      input.ProcessPid,
      context
    );
  }
  if (input.ProcessTerminatedAt !== undefined) {
    bodyParams["ProcessTerminatedAt"] = serializeAws_restJson1_1DateFilterList(
      input.ProcessTerminatedAt,
      context
    );
  }
  if (input.ProductArn !== undefined) {
    bodyParams["ProductArn"] = serializeAws_restJson1_1StringFilterList(
      input.ProductArn,
      context
    );
  }
  if (input.ProductFields !== undefined) {
    bodyParams["ProductFields"] = serializeAws_restJson1_1MapFilterList(
      input.ProductFields,
      context
    );
  }
  if (input.ProductName !== undefined) {
    bodyParams["ProductName"] = serializeAws_restJson1_1StringFilterList(
      input.ProductName,
      context
    );
  }
  if (input.RecommendationText !== undefined) {
    bodyParams["RecommendationText"] = serializeAws_restJson1_1StringFilterList(
      input.RecommendationText,
      context
    );
  }
  if (input.RecordState !== undefined) {
    bodyParams["RecordState"] = serializeAws_restJson1_1StringFilterList(
      input.RecordState,
      context
    );
  }
  if (input.RelatedFindingsId !== undefined) {
    bodyParams["RelatedFindingsId"] = serializeAws_restJson1_1StringFilterList(
      input.RelatedFindingsId,
      context
    );
  }
  if (input.RelatedFindingsProductArn !== undefined) {
    bodyParams[
      "RelatedFindingsProductArn"
    ] = serializeAws_restJson1_1StringFilterList(
      input.RelatedFindingsProductArn,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceIamInstanceProfileArn"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceIamInstanceProfileArn,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceImageId !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceImageId"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceImageId,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceIpV4Addresses !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceIpV4Addresses"
    ] = serializeAws_restJson1_1IpFilterList(
      input.ResourceAwsEc2InstanceIpV4Addresses,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceIpV6Addresses !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceIpV6Addresses"
    ] = serializeAws_restJson1_1IpFilterList(
      input.ResourceAwsEc2InstanceIpV6Addresses,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceKeyName !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceKeyName"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceKeyName,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceLaunchedAt !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceLaunchedAt"
    ] = serializeAws_restJson1_1DateFilterList(
      input.ResourceAwsEc2InstanceLaunchedAt,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceSubnetId !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceSubnetId"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceSubnetId,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceType !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceType"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceType,
      context
    );
  }
  if (input.ResourceAwsEc2InstanceVpcId !== undefined) {
    bodyParams[
      "ResourceAwsEc2InstanceVpcId"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsEc2InstanceVpcId,
      context
    );
  }
  if (input.ResourceAwsIamAccessKeyCreatedAt !== undefined) {
    bodyParams[
      "ResourceAwsIamAccessKeyCreatedAt"
    ] = serializeAws_restJson1_1DateFilterList(
      input.ResourceAwsIamAccessKeyCreatedAt,
      context
    );
  }
  if (input.ResourceAwsIamAccessKeyStatus !== undefined) {
    bodyParams[
      "ResourceAwsIamAccessKeyStatus"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsIamAccessKeyStatus,
      context
    );
  }
  if (input.ResourceAwsIamAccessKeyUserName !== undefined) {
    bodyParams[
      "ResourceAwsIamAccessKeyUserName"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsIamAccessKeyUserName,
      context
    );
  }
  if (input.ResourceAwsS3BucketOwnerId !== undefined) {
    bodyParams[
      "ResourceAwsS3BucketOwnerId"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsS3BucketOwnerId,
      context
    );
  }
  if (input.ResourceAwsS3BucketOwnerName !== undefined) {
    bodyParams[
      "ResourceAwsS3BucketOwnerName"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceAwsS3BucketOwnerName,
      context
    );
  }
  if (input.ResourceContainerImageId !== undefined) {
    bodyParams[
      "ResourceContainerImageId"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceContainerImageId,
      context
    );
  }
  if (input.ResourceContainerImageName !== undefined) {
    bodyParams[
      "ResourceContainerImageName"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceContainerImageName,
      context
    );
  }
  if (input.ResourceContainerLaunchedAt !== undefined) {
    bodyParams[
      "ResourceContainerLaunchedAt"
    ] = serializeAws_restJson1_1DateFilterList(
      input.ResourceContainerLaunchedAt,
      context
    );
  }
  if (input.ResourceContainerName !== undefined) {
    bodyParams[
      "ResourceContainerName"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ResourceContainerName,
      context
    );
  }
  if (input.ResourceDetailsOther !== undefined) {
    bodyParams["ResourceDetailsOther"] = serializeAws_restJson1_1MapFilterList(
      input.ResourceDetailsOther,
      context
    );
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = serializeAws_restJson1_1StringFilterList(
      input.ResourceId,
      context
    );
  }
  if (input.ResourcePartition !== undefined) {
    bodyParams["ResourcePartition"] = serializeAws_restJson1_1StringFilterList(
      input.ResourcePartition,
      context
    );
  }
  if (input.ResourceRegion !== undefined) {
    bodyParams["ResourceRegion"] = serializeAws_restJson1_1StringFilterList(
      input.ResourceRegion,
      context
    );
  }
  if (input.ResourceTags !== undefined) {
    bodyParams["ResourceTags"] = serializeAws_restJson1_1MapFilterList(
      input.ResourceTags,
      context
    );
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = serializeAws_restJson1_1StringFilterList(
      input.ResourceType,
      context
    );
  }
  if (input.SeverityLabel !== undefined) {
    bodyParams["SeverityLabel"] = serializeAws_restJson1_1StringFilterList(
      input.SeverityLabel,
      context
    );
  }
  if (input.SeverityNormalized !== undefined) {
    bodyParams["SeverityNormalized"] = serializeAws_restJson1_1NumberFilterList(
      input.SeverityNormalized,
      context
    );
  }
  if (input.SeverityProduct !== undefined) {
    bodyParams["SeverityProduct"] = serializeAws_restJson1_1NumberFilterList(
      input.SeverityProduct,
      context
    );
  }
  if (input.SourceUrl !== undefined) {
    bodyParams["SourceUrl"] = serializeAws_restJson1_1StringFilterList(
      input.SourceUrl,
      context
    );
  }
  if (input.ThreatIntelIndicatorCategory !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorCategory"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ThreatIntelIndicatorCategory,
      context
    );
  }
  if (input.ThreatIntelIndicatorLastObservedAt !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorLastObservedAt"
    ] = serializeAws_restJson1_1DateFilterList(
      input.ThreatIntelIndicatorLastObservedAt,
      context
    );
  }
  if (input.ThreatIntelIndicatorSource !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorSource"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ThreatIntelIndicatorSource,
      context
    );
  }
  if (input.ThreatIntelIndicatorSourceUrl !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorSourceUrl"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ThreatIntelIndicatorSourceUrl,
      context
    );
  }
  if (input.ThreatIntelIndicatorType !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorType"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ThreatIntelIndicatorType,
      context
    );
  }
  if (input.ThreatIntelIndicatorValue !== undefined) {
    bodyParams[
      "ThreatIntelIndicatorValue"
    ] = serializeAws_restJson1_1StringFilterList(
      input.ThreatIntelIndicatorValue,
      context
    );
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = serializeAws_restJson1_1StringFilterList(
      input.Title,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = serializeAws_restJson1_1StringFilterList(
      input.Type,
      context
    );
  }
  if (input.UpdatedAt !== undefined) {
    bodyParams["UpdatedAt"] = serializeAws_restJson1_1DateFilterList(
      input.UpdatedAt,
      context
    );
  }
  if (input.UserDefinedFields !== undefined) {
    bodyParams["UserDefinedFields"] = serializeAws_restJson1_1MapFilterList(
      input.UserDefinedFields,
      context
    );
  }
  if (input.VerificationState !== undefined) {
    bodyParams["VerificationState"] = serializeAws_restJson1_1StringFilterList(
      input.VerificationState,
      context
    );
  }
  if (input.WorkflowState !== undefined) {
    bodyParams["WorkflowState"] = serializeAws_restJson1_1StringFilterList(
      input.WorkflowState,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsSecurityFindingList = (
  input: Array<AwsSecurityFinding>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AwsSecurityFinding(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1AwsSnsTopicDetails = (
  input: AwsSnsTopicDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KmsMasterKeyId !== undefined) {
    bodyParams["KmsMasterKeyId"] = input.KmsMasterKeyId;
  }
  if (input.Owner !== undefined) {
    bodyParams["Owner"] = input.Owner;
  }
  if (input.Subscription !== undefined) {
    bodyParams[
      "Subscription"
    ] = serializeAws_restJson1_1AwsSnsTopicSubscriptionList(
      input.Subscription,
      context
    );
  }
  if (input.TopicName !== undefined) {
    bodyParams["TopicName"] = input.TopicName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsSnsTopicSubscription = (
  input: AwsSnsTopicSubscription,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Endpoint !== undefined) {
    bodyParams["Endpoint"] = input.Endpoint;
  }
  if (input.Protocol !== undefined) {
    bodyParams["Protocol"] = input.Protocol;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsSnsTopicSubscriptionList = (
  input: Array<AwsSnsTopicSubscription>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1AwsSnsTopicSubscription(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1AwsSqsQueueDetails = (
  input: AwsSqsQueueDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeadLetterTargetArn !== undefined) {
    bodyParams["DeadLetterTargetArn"] = input.DeadLetterTargetArn;
  }
  if (input.KmsDataKeyReusePeriodSeconds !== undefined) {
    bodyParams["KmsDataKeyReusePeriodSeconds"] =
      input.KmsDataKeyReusePeriodSeconds;
  }
  if (input.KmsMasterKeyId !== undefined) {
    bodyParams["KmsMasterKeyId"] = input.KmsMasterKeyId;
  }
  if (input.QueueName !== undefined) {
    bodyParams["QueueName"] = input.QueueName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Compliance = (
  input: Compliance,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerDetails = (
  input: ContainerDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ImageId !== undefined) {
    bodyParams["ImageId"] = input.ImageId;
  }
  if (input.ImageName !== undefined) {
    bodyParams["ImageName"] = input.ImageName;
  }
  if (input.LaunchedAt !== undefined) {
    bodyParams["LaunchedAt"] = input.LaunchedAt;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DateFilter = (
  input: DateFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DateRange !== undefined) {
    bodyParams["DateRange"] = serializeAws_restJson1_1DateRange(
      input.DateRange,
      context
    );
  }
  if (input.End !== undefined) {
    bodyParams["End"] = input.End;
  }
  if (input.Start !== undefined) {
    bodyParams["Start"] = input.Start;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DateFilterList = (
  input: Array<DateFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DateFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DateRange = (
  input: DateRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Unit !== undefined) {
    bodyParams["Unit"] = input.Unit;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FieldMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1IpFilter = (
  input: IpFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Cidr !== undefined) {
    bodyParams["Cidr"] = input.Cidr;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IpFilterList = (
  input: Array<IpFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1IpFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1KeywordFilter = (
  input: KeywordFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1KeywordFilterList = (
  input: Array<KeywordFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1KeywordFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1LoadBalancerState = (
  input: LoadBalancerState,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Code !== undefined) {
    bodyParams["Code"] = input.Code;
  }
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Malware = (
  input: Malware,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MalwareList = (
  input: Array<Malware>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Malware(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1MapFilter = (
  input: MapFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Comparison !== undefined) {
    bodyParams["Comparison"] = input.Comparison;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MapFilterList = (
  input: Array<MapFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1MapFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Network = (
  input: Network,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationDomain !== undefined) {
    bodyParams["DestinationDomain"] = input.DestinationDomain;
  }
  if (input.DestinationIpV4 !== undefined) {
    bodyParams["DestinationIpV4"] = input.DestinationIpV4;
  }
  if (input.DestinationIpV6 !== undefined) {
    bodyParams["DestinationIpV6"] = input.DestinationIpV6;
  }
  if (input.DestinationPort !== undefined) {
    bodyParams["DestinationPort"] = input.DestinationPort;
  }
  if (input.Direction !== undefined) {
    bodyParams["Direction"] = input.Direction;
  }
  if (input.Protocol !== undefined) {
    bodyParams["Protocol"] = input.Protocol;
  }
  if (input.SourceDomain !== undefined) {
    bodyParams["SourceDomain"] = input.SourceDomain;
  }
  if (input.SourceIpV4 !== undefined) {
    bodyParams["SourceIpV4"] = input.SourceIpV4;
  }
  if (input.SourceIpV6 !== undefined) {
    bodyParams["SourceIpV6"] = input.SourceIpV6;
  }
  if (input.SourceMac !== undefined) {
    bodyParams["SourceMac"] = input.SourceMac;
  }
  if (input.SourcePort !== undefined) {
    bodyParams["SourcePort"] = input.SourcePort;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NonEmptyStringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Note = (
  input: Note,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.UpdatedAt !== undefined) {
    bodyParams["UpdatedAt"] = input.UpdatedAt;
  }
  if (input.UpdatedBy !== undefined) {
    bodyParams["UpdatedBy"] = input.UpdatedBy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NoteUpdate = (
  input: NoteUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.UpdatedBy !== undefined) {
    bodyParams["UpdatedBy"] = input.UpdatedBy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NumberFilter = (
  input: NumberFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Eq !== undefined) {
    bodyParams["Eq"] = input.Eq;
  }
  if (input.Gte !== undefined) {
    bodyParams["Gte"] = input.Gte;
  }
  if (input.Lte !== undefined) {
    bodyParams["Lte"] = input.Lte;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NumberFilterList = (
  input: Array<NumberFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1NumberFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1ProcessDetails = (
  input: ProcessDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LaunchedAt !== undefined) {
    bodyParams["LaunchedAt"] = input.LaunchedAt;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentPid !== undefined) {
    bodyParams["ParentPid"] = input.ParentPid;
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  if (input.Pid !== undefined) {
    bodyParams["Pid"] = input.Pid;
  }
  if (input.TerminatedAt !== undefined) {
    bodyParams["TerminatedAt"] = input.TerminatedAt;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Recommendation = (
  input: Recommendation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.Url !== undefined) {
    bodyParams["Url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RelatedFinding = (
  input: RelatedFinding,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.ProductArn !== undefined) {
    bodyParams["ProductArn"] = input.ProductArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RelatedFindingList = (
  input: Array<RelatedFinding>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1RelatedFinding(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Remediation = (
  input: Remediation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Recommendation !== undefined) {
    bodyParams["Recommendation"] = serializeAws_restJson1_1Recommendation(
      input.Recommendation,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Resource = (
  input: Resource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Details !== undefined) {
    bodyParams["Details"] = serializeAws_restJson1_1ResourceDetails(
      input.Details,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Partition !== undefined) {
    bodyParams["Partition"] = input.Partition;
  }
  if (input.Region !== undefined) {
    bodyParams["Region"] = input.Region;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1FieldMap(input.Tags, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceDetails = (
  input: ResourceDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsCloudFrontDistribution !== undefined) {
    bodyParams[
      "AwsCloudFrontDistribution"
    ] = serializeAws_restJson1_1AwsCloudFrontDistributionDetails(
      input.AwsCloudFrontDistribution,
      context
    );
  }
  if (input.AwsEc2Instance !== undefined) {
    bodyParams[
      "AwsEc2Instance"
    ] = serializeAws_restJson1_1AwsEc2InstanceDetails(
      input.AwsEc2Instance,
      context
    );
  }
  if (input.AwsElbv2LoadBalancer !== undefined) {
    bodyParams[
      "AwsElbv2LoadBalancer"
    ] = serializeAws_restJson1_1AwsElbv2LoadBalancerDetails(
      input.AwsElbv2LoadBalancer,
      context
    );
  }
  if (input.AwsIamAccessKey !== undefined) {
    bodyParams[
      "AwsIamAccessKey"
    ] = serializeAws_restJson1_1AwsIamAccessKeyDetails(
      input.AwsIamAccessKey,
      context
    );
  }
  if (input.AwsIamRole !== undefined) {
    bodyParams["AwsIamRole"] = serializeAws_restJson1_1AwsIamRoleDetails(
      input.AwsIamRole,
      context
    );
  }
  if (input.AwsKmsKey !== undefined) {
    bodyParams["AwsKmsKey"] = serializeAws_restJson1_1AwsKmsKeyDetails(
      input.AwsKmsKey,
      context
    );
  }
  if (input.AwsLambdaFunction !== undefined) {
    bodyParams[
      "AwsLambdaFunction"
    ] = serializeAws_restJson1_1AwsLambdaFunctionDetails(
      input.AwsLambdaFunction,
      context
    );
  }
  if (input.AwsS3Bucket !== undefined) {
    bodyParams["AwsS3Bucket"] = serializeAws_restJson1_1AwsS3BucketDetails(
      input.AwsS3Bucket,
      context
    );
  }
  if (input.AwsSnsTopic !== undefined) {
    bodyParams["AwsSnsTopic"] = serializeAws_restJson1_1AwsSnsTopicDetails(
      input.AwsSnsTopic,
      context
    );
  }
  if (input.AwsSqsQueue !== undefined) {
    bodyParams["AwsSqsQueue"] = serializeAws_restJson1_1AwsSqsQueueDetails(
      input.AwsSqsQueue,
      context
    );
  }
  if (input.Container !== undefined) {
    bodyParams["Container"] = serializeAws_restJson1_1ContainerDetails(
      input.Container,
      context
    );
  }
  if (input.Other !== undefined) {
    bodyParams["Other"] = serializeAws_restJson1_1FieldMap(
      input.Other,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceList = (
  input: Array<Resource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Resource(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Severity = (
  input: Severity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Normalized !== undefined) {
    bodyParams["Normalized"] = input.Normalized;
  }
  if (input.Product !== undefined) {
    bodyParams["Product"] = input.Product;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SortCriteria = (
  input: Array<SortCriterion>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1SortCriterion(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SortCriterion = (
  input: SortCriterion,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Field !== undefined) {
    bodyParams["Field"] = input.Field;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StandardsInputParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1StandardsSubscriptionArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1StandardsSubscriptionRequest = (
  input: StandardsSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StandardsArn !== undefined) {
    bodyParams["StandardsArn"] = input.StandardsArn;
  }
  if (input.StandardsInput !== undefined) {
    bodyParams[
      "StandardsInput"
    ] = serializeAws_restJson1_1StandardsInputParameterMap(
      input.StandardsInput,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1StandardsSubscriptionRequests = (
  input: Array<StandardsSubscriptionRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1StandardsSubscriptionRequest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1StringFilter = (
  input: StringFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Comparison !== undefined) {
    bodyParams["Comparison"] = input.Comparison;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StringFilterList = (
  input: Array<StringFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1StringFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ThreatIntelIndicator = (
  input: ThreatIntelIndicator,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Category !== undefined) {
    bodyParams["Category"] = input.Category;
  }
  if (input.LastObservedAt !== undefined) {
    bodyParams["LastObservedAt"] = input.LastObservedAt;
  }
  if (input.Source !== undefined) {
    bodyParams["Source"] = input.Source;
  }
  if (input.SourceUrl !== undefined) {
    bodyParams["SourceUrl"] = input.SourceUrl;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ThreatIntelIndicatorList = (
  input: Array<ThreatIntelIndicator>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1ThreatIntelIndicator(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1ActionTarget = (
  output: any,
  context: __SerdeContext
): ActionTarget => {
  let contents: any = {
    __type: "ActionTarget",
    ActionTargetArn: undefined,
    Description: undefined,
    Name: undefined
  };
  if (output.ActionTargetArn !== undefined && output.ActionTargetArn !== null) {
    contents.ActionTargetArn = output.ActionTargetArn;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1ActionTargetList = (
  output: any,
  context: __SerdeContext
): Array<ActionTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ActionTarget(entry, context)
  );
};

const deserializeAws_restJson1_1AvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  let contents: any = {
    __type: "AvailabilityZone",
    SubnetId: undefined,
    ZoneName: undefined
  };
  if (output.SubnetId !== undefined && output.SubnetId !== null) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.ZoneName !== undefined && output.ZoneName !== null) {
    contents.ZoneName = output.ZoneName;
  }
  return contents;
};

const deserializeAws_restJson1_1AvailabilityZones = (
  output: any,
  context: __SerdeContext
): Array<AvailabilityZone> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AvailabilityZone(entry, context)
  );
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDetails => {
  let contents: any = {
    __type: "AwsCloudFrontDistributionDetails",
    DomainName: undefined,
    ETag: undefined,
    LastModifiedTime: undefined,
    Logging: undefined,
    Origins: undefined,
    Status: undefined,
    WebAclId: undefined
  };
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.ETag !== undefined && output.ETag !== null) {
    contents.ETag = output.ETag;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = output.LastModifiedTime;
  }
  if (output.Logging !== undefined && output.Logging !== null) {
    contents.Logging = deserializeAws_restJson1_1AwsCloudFrontDistributionLogging(
      output.Logging,
      context
    );
  }
  if (output.Origins !== undefined && output.Origins !== null) {
    contents.Origins = deserializeAws_restJson1_1AwsCloudFrontDistributionOrigins(
      output.Origins,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.WebAclId !== undefined && output.WebAclId !== null) {
    contents.WebAclId = output.WebAclId;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  let contents: any = {
    __type: "AwsCloudFrontDistributionLogging",
    Bucket: undefined,
    Enabled: undefined,
    IncludeCookies: undefined,
    Prefix: undefined
  };
  if (output.Bucket !== undefined && output.Bucket !== null) {
    contents.Bucket = output.Bucket;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.IncludeCookies !== undefined && output.IncludeCookies !== null) {
    contents.IncludeCookies = output.IncludeCookies;
  }
  if (output.Prefix !== undefined && output.Prefix !== null) {
    contents.Prefix = output.Prefix;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItem = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem => {
  let contents: any = {
    __type: "AwsCloudFrontDistributionOriginItem",
    DomainName: undefined,
    Id: undefined,
    OriginPath: undefined
  };
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.OriginPath !== undefined && output.OriginPath !== null) {
    contents.OriginPath = output.OriginPath;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList = (
  output: any,
  context: __SerdeContext
): Array<AwsCloudFrontDistributionOriginItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItem(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionOrigins = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOrigins => {
  let contents: any = {
    __type: "AwsCloudFrontDistributionOrigins",
    Items: undefined
  };
  if (output.Items !== undefined && output.Items !== null) {
    contents.Items = deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList(
      output.Items,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AwsEc2InstanceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceDetails => {
  let contents: any = {
    __type: "AwsEc2InstanceDetails",
    IamInstanceProfileArn: undefined,
    ImageId: undefined,
    IpV4Addresses: undefined,
    IpV6Addresses: undefined,
    KeyName: undefined,
    LaunchedAt: undefined,
    SubnetId: undefined,
    Type: undefined,
    VpcId: undefined
  };
  if (
    output.IamInstanceProfileArn !== undefined &&
    output.IamInstanceProfileArn !== null
  ) {
    contents.IamInstanceProfileArn = output.IamInstanceProfileArn;
  }
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  if (output.IpV4Addresses !== undefined && output.IpV4Addresses !== null) {
    contents.IpV4Addresses = deserializeAws_restJson1_1StringList(
      output.IpV4Addresses,
      context
    );
  }
  if (output.IpV6Addresses !== undefined && output.IpV6Addresses !== null) {
    contents.IpV6Addresses = deserializeAws_restJson1_1StringList(
      output.IpV6Addresses,
      context
    );
  }
  if (output.KeyName !== undefined && output.KeyName !== null) {
    contents.KeyName = output.KeyName;
  }
  if (output.LaunchedAt !== undefined && output.LaunchedAt !== null) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.SubnetId !== undefined && output.SubnetId !== null) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsElbv2LoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerDetails => {
  let contents: any = {
    __type: "AwsElbv2LoadBalancerDetails",
    AvailabilityZones: undefined,
    CanonicalHostedZoneId: undefined,
    CreatedTime: undefined,
    DNSName: undefined,
    IpAddressType: undefined,
    Scheme: undefined,
    SecurityGroups: undefined,
    State: undefined,
    Type: undefined,
    VpcId: undefined
  };
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1AvailabilityZones(
      output.AvailabilityZones,
      context
    );
  }
  if (
    output.CanonicalHostedZoneId !== undefined &&
    output.CanonicalHostedZoneId !== null
  ) {
    contents.CanonicalHostedZoneId = output.CanonicalHostedZoneId;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = output.CreatedTime;
  }
  if (output.DNSName !== undefined && output.DNSName !== null) {
    contents.DNSName = output.DNSName;
  }
  if (output.IpAddressType !== undefined && output.IpAddressType !== null) {
    contents.IpAddressType = output.IpAddressType;
  }
  if (output.Scheme !== undefined && output.Scheme !== null) {
    contents.Scheme = output.Scheme;
  }
  if (output.SecurityGroups !== undefined && output.SecurityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1SecurityGroups(
      output.SecurityGroups,
      context
    );
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = deserializeAws_restJson1_1LoadBalancerState(
      output.State,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  let contents: any = {
    __type: "AwsIamAccessKeyDetails",
    CreatedAt: undefined,
    PrincipalId: undefined,
    PrincipalName: undefined,
    PrincipalType: undefined,
    Status: undefined,
    UserName: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = output.CreatedAt;
  }
  if (output.PrincipalId !== undefined && output.PrincipalId !== null) {
    contents.PrincipalId = output.PrincipalId;
  }
  if (output.PrincipalName !== undefined && output.PrincipalName !== null) {
    contents.PrincipalName = output.PrincipalName;
  }
  if (output.PrincipalType !== undefined && output.PrincipalType !== null) {
    contents.PrincipalType = output.PrincipalType;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsIamRoleDetails = (
  output: any,
  context: __SerdeContext
): AwsIamRoleDetails => {
  let contents: any = {
    __type: "AwsIamRoleDetails",
    AssumeRolePolicyDocument: undefined,
    CreateDate: undefined,
    MaxSessionDuration: undefined,
    Path: undefined,
    RoleId: undefined,
    RoleName: undefined
  };
  if (
    output.AssumeRolePolicyDocument !== undefined &&
    output.AssumeRolePolicyDocument !== null
  ) {
    contents.AssumeRolePolicyDocument = output.AssumeRolePolicyDocument;
  }
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = output.CreateDate;
  }
  if (
    output.MaxSessionDuration !== undefined &&
    output.MaxSessionDuration !== null
  ) {
    contents.MaxSessionDuration = output.MaxSessionDuration;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.RoleId !== undefined && output.RoleId !== null) {
    contents.RoleId = output.RoleId;
  }
  if (output.RoleName !== undefined && output.RoleName !== null) {
    contents.RoleName = output.RoleName;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsKmsKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsKmsKeyDetails => {
  let contents: any = {
    __type: "AwsKmsKeyDetails",
    AWSAccountId: undefined,
    CreationDate: undefined,
    KeyId: undefined,
    KeyManager: undefined,
    KeyState: undefined,
    Origin: undefined
  };
  if (output.AWSAccountId !== undefined && output.AWSAccountId !== null) {
    contents.AWSAccountId = output.AWSAccountId;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = output.CreationDate;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyManager !== undefined && output.KeyManager !== null) {
    contents.KeyManager = output.KeyManager;
  }
  if (output.KeyState !== undefined && output.KeyState !== null) {
    contents.KeyState = output.KeyState;
  }
  if (output.Origin !== undefined && output.Origin !== null) {
    contents.Origin = output.Origin;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionCode = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionCode => {
  let contents: any = {
    __type: "AwsLambdaFunctionCode",
    S3Bucket: undefined,
    S3Key: undefined,
    S3ObjectVersion: undefined,
    ZipFile: undefined
  };
  if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
    contents.S3Bucket = output.S3Bucket;
  }
  if (output.S3Key !== undefined && output.S3Key !== null) {
    contents.S3Key = output.S3Key;
  }
  if (output.S3ObjectVersion !== undefined && output.S3ObjectVersion !== null) {
    contents.S3ObjectVersion = output.S3ObjectVersion;
  }
  if (output.ZipFile !== undefined && output.ZipFile !== null) {
    contents.ZipFile = output.ZipFile;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  let contents: any = {
    __type: "AwsLambdaFunctionDeadLetterConfig",
    TargetArn: undefined
  };
  if (output.TargetArn !== undefined && output.TargetArn !== null) {
    contents.TargetArn = output.TargetArn;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  let contents: any = {
    __type: "AwsLambdaFunctionDetails",
    Code: undefined,
    CodeSha256: undefined,
    DeadLetterConfig: undefined,
    Environment: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KmsKeyArn: undefined,
    LastModified: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = deserializeAws_restJson1_1AwsLambdaFunctionCode(
      output.Code,
      context
    );
  }
  if (output.CodeSha256 !== undefined && output.CodeSha256 !== null) {
    contents.CodeSha256 = output.CodeSha256;
  }
  if (
    output.DeadLetterConfig !== undefined &&
    output.DeadLetterConfig !== null
  ) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig(
      output.DeadLetterConfig,
      context
    );
  }
  if (output.Environment !== undefined && output.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1AwsLambdaFunctionEnvironment(
      output.Environment,
      context
    );
  }
  if (output.FunctionName !== undefined && output.FunctionName !== null) {
    contents.FunctionName = output.FunctionName;
  }
  if (output.Handler !== undefined && output.Handler !== null) {
    contents.Handler = output.Handler;
  }
  if (output.KmsKeyArn !== undefined && output.KmsKeyArn !== null) {
    contents.KmsKeyArn = output.KmsKeyArn;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = output.LastModified;
  }
  if (output.Layers !== undefined && output.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1AwsLambdaFunctionLayerList(
      output.Layers,
      context
    );
  }
  if (output.MasterArn !== undefined && output.MasterArn !== null) {
    contents.MasterArn = output.MasterArn;
  }
  if (output.MemorySize !== undefined && output.MemorySize !== null) {
    contents.MemorySize = output.MemorySize;
  }
  if (output.RevisionId !== undefined && output.RevisionId !== null) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.Runtime !== undefined && output.Runtime !== null) {
    contents.Runtime = output.Runtime;
  }
  if (output.Timeout !== undefined && output.Timeout !== null) {
    contents.Timeout = output.Timeout;
  }
  if (output.TracingConfig !== undefined && output.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1AwsLambdaFunctionTracingConfig(
      output.TracingConfig,
      context
    );
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1AwsLambdaFunctionVpcConfig(
      output.VpcConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionEnvironment = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironment => {
  let contents: any = {
    __type: "AwsLambdaFunctionEnvironment",
    Error: undefined,
    Variables: undefined
  };
  if (output.Error !== undefined && output.Error !== null) {
    contents.Error = deserializeAws_restJson1_1AwsLambdaFunctionEnvironmentError(
      output.Error,
      context
    );
  }
  if (output.Variables !== undefined && output.Variables !== null) {
    contents.Variables = deserializeAws_restJson1_1FieldMap(
      output.Variables,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionEnvironmentError = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironmentError => {
  let contents: any = {
    __type: "AwsLambdaFunctionEnvironmentError",
    ErrorCode: undefined,
    Message: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  let contents: any = {
    __type: "AwsLambdaFunctionLayer",
    Arn: undefined,
    CodeSize: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CodeSize !== undefined && output.CodeSize !== null) {
    contents.CodeSize = output.CodeSize;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionLayerList = (
  output: any,
  context: __SerdeContext
): Array<AwsLambdaFunctionLayer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsLambdaFunctionLayer(entry, context)
  );
};

const deserializeAws_restJson1_1AwsLambdaFunctionTracingConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionTracingConfig => {
  let contents: any = {
    __type: "AwsLambdaFunctionTracingConfig",
    Mode: undefined
  };
  if (output.Mode !== undefined && output.Mode !== null) {
    contents.Mode = output.Mode;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsLambdaFunctionVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionVpcConfig => {
  let contents: any = {
    __type: "AwsLambdaFunctionVpcConfig",
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VpcId: undefined
  };
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_restJson1_1NonEmptyStringList(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1_1NonEmptyStringList(
      output.SubnetIds,
      context
    );
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsS3BucketDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketDetails => {
  let contents: any = {
    __type: "AwsS3BucketDetails",
    OwnerId: undefined,
    OwnerName: undefined
  };
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.OwnerName !== undefined && output.OwnerName !== null) {
    contents.OwnerName = output.OwnerName;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsSecurityFinding = (
  output: any,
  context: __SerdeContext
): AwsSecurityFinding => {
  let contents: any = {
    __type: "AwsSecurityFinding",
    AwsAccountId: undefined,
    Compliance: undefined,
    Confidence: undefined,
    CreatedAt: undefined,
    Criticality: undefined,
    Description: undefined,
    FirstObservedAt: undefined,
    GeneratorId: undefined,
    Id: undefined,
    LastObservedAt: undefined,
    Malware: undefined,
    Network: undefined,
    Note: undefined,
    Process: undefined,
    ProductArn: undefined,
    ProductFields: undefined,
    RecordState: undefined,
    RelatedFindings: undefined,
    Remediation: undefined,
    Resources: undefined,
    SchemaVersion: undefined,
    Severity: undefined,
    SourceUrl: undefined,
    ThreatIntelIndicators: undefined,
    Title: undefined,
    Types: undefined,
    UpdatedAt: undefined,
    UserDefinedFields: undefined,
    VerificationState: undefined,
    WorkflowState: undefined
  };
  if (output.AwsAccountId !== undefined && output.AwsAccountId !== null) {
    contents.AwsAccountId = output.AwsAccountId;
  }
  if (output.Compliance !== undefined && output.Compliance !== null) {
    contents.Compliance = deserializeAws_restJson1_1Compliance(
      output.Compliance,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = output.Confidence;
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = output.CreatedAt;
  }
  if (output.Criticality !== undefined && output.Criticality !== null) {
    contents.Criticality = output.Criticality;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.FirstObservedAt !== undefined && output.FirstObservedAt !== null) {
    contents.FirstObservedAt = output.FirstObservedAt;
  }
  if (output.GeneratorId !== undefined && output.GeneratorId !== null) {
    contents.GeneratorId = output.GeneratorId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LastObservedAt !== undefined && output.LastObservedAt !== null) {
    contents.LastObservedAt = output.LastObservedAt;
  }
  if (output.Malware !== undefined && output.Malware !== null) {
    contents.Malware = deserializeAws_restJson1_1MalwareList(
      output.Malware,
      context
    );
  }
  if (output.Network !== undefined && output.Network !== null) {
    contents.Network = deserializeAws_restJson1_1Network(
      output.Network,
      context
    );
  }
  if (output.Note !== undefined && output.Note !== null) {
    contents.Note = deserializeAws_restJson1_1Note(output.Note, context);
  }
  if (output.Process !== undefined && output.Process !== null) {
    contents.Process = deserializeAws_restJson1_1ProcessDetails(
      output.Process,
      context
    );
  }
  if (output.ProductArn !== undefined && output.ProductArn !== null) {
    contents.ProductArn = output.ProductArn;
  }
  if (output.ProductFields !== undefined && output.ProductFields !== null) {
    contents.ProductFields = deserializeAws_restJson1_1FieldMap(
      output.ProductFields,
      context
    );
  }
  if (output.RecordState !== undefined && output.RecordState !== null) {
    contents.RecordState = output.RecordState;
  }
  if (output.RelatedFindings !== undefined && output.RelatedFindings !== null) {
    contents.RelatedFindings = deserializeAws_restJson1_1RelatedFindingList(
      output.RelatedFindings,
      context
    );
  }
  if (output.Remediation !== undefined && output.Remediation !== null) {
    contents.Remediation = deserializeAws_restJson1_1Remediation(
      output.Remediation,
      context
    );
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_restJson1_1ResourceList(
      output.Resources,
      context
    );
  }
  if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
    contents.SchemaVersion = output.SchemaVersion;
  }
  if (output.Severity !== undefined && output.Severity !== null) {
    contents.Severity = deserializeAws_restJson1_1Severity(
      output.Severity,
      context
    );
  }
  if (output.SourceUrl !== undefined && output.SourceUrl !== null) {
    contents.SourceUrl = output.SourceUrl;
  }
  if (
    output.ThreatIntelIndicators !== undefined &&
    output.ThreatIntelIndicators !== null
  ) {
    contents.ThreatIntelIndicators = deserializeAws_restJson1_1ThreatIntelIndicatorList(
      output.ThreatIntelIndicators,
      context
    );
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = output.Title;
  }
  if (output.Types !== undefined && output.Types !== null) {
    contents.Types = deserializeAws_restJson1_1TypeList(output.Types, context);
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = output.UpdatedAt;
  }
  if (
    output.UserDefinedFields !== undefined &&
    output.UserDefinedFields !== null
  ) {
    contents.UserDefinedFields = deserializeAws_restJson1_1FieldMap(
      output.UserDefinedFields,
      context
    );
  }
  if (
    output.VerificationState !== undefined &&
    output.VerificationState !== null
  ) {
    contents.VerificationState = output.VerificationState;
  }
  if (output.WorkflowState !== undefined && output.WorkflowState !== null) {
    contents.WorkflowState = output.WorkflowState;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsSecurityFindingFilters = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingFilters => {
  let contents: any = {
    __type: "AwsSecurityFindingFilters",
    AwsAccountId: undefined,
    CompanyName: undefined,
    ComplianceStatus: undefined,
    Confidence: undefined,
    CreatedAt: undefined,
    Criticality: undefined,
    Description: undefined,
    FirstObservedAt: undefined,
    GeneratorId: undefined,
    Id: undefined,
    Keyword: undefined,
    LastObservedAt: undefined,
    MalwareName: undefined,
    MalwarePath: undefined,
    MalwareState: undefined,
    MalwareType: undefined,
    NetworkDestinationDomain: undefined,
    NetworkDestinationIpV4: undefined,
    NetworkDestinationIpV6: undefined,
    NetworkDestinationPort: undefined,
    NetworkDirection: undefined,
    NetworkProtocol: undefined,
    NetworkSourceDomain: undefined,
    NetworkSourceIpV4: undefined,
    NetworkSourceIpV6: undefined,
    NetworkSourceMac: undefined,
    NetworkSourcePort: undefined,
    NoteText: undefined,
    NoteUpdatedAt: undefined,
    NoteUpdatedBy: undefined,
    ProcessLaunchedAt: undefined,
    ProcessName: undefined,
    ProcessParentPid: undefined,
    ProcessPath: undefined,
    ProcessPid: undefined,
    ProcessTerminatedAt: undefined,
    ProductArn: undefined,
    ProductFields: undefined,
    ProductName: undefined,
    RecommendationText: undefined,
    RecordState: undefined,
    RelatedFindingsId: undefined,
    RelatedFindingsProductArn: undefined,
    ResourceAwsEc2InstanceIamInstanceProfileArn: undefined,
    ResourceAwsEc2InstanceImageId: undefined,
    ResourceAwsEc2InstanceIpV4Addresses: undefined,
    ResourceAwsEc2InstanceIpV6Addresses: undefined,
    ResourceAwsEc2InstanceKeyName: undefined,
    ResourceAwsEc2InstanceLaunchedAt: undefined,
    ResourceAwsEc2InstanceSubnetId: undefined,
    ResourceAwsEc2InstanceType: undefined,
    ResourceAwsEc2InstanceVpcId: undefined,
    ResourceAwsIamAccessKeyCreatedAt: undefined,
    ResourceAwsIamAccessKeyStatus: undefined,
    ResourceAwsIamAccessKeyUserName: undefined,
    ResourceAwsS3BucketOwnerId: undefined,
    ResourceAwsS3BucketOwnerName: undefined,
    ResourceContainerImageId: undefined,
    ResourceContainerImageName: undefined,
    ResourceContainerLaunchedAt: undefined,
    ResourceContainerName: undefined,
    ResourceDetailsOther: undefined,
    ResourceId: undefined,
    ResourcePartition: undefined,
    ResourceRegion: undefined,
    ResourceTags: undefined,
    ResourceType: undefined,
    SeverityLabel: undefined,
    SeverityNormalized: undefined,
    SeverityProduct: undefined,
    SourceUrl: undefined,
    ThreatIntelIndicatorCategory: undefined,
    ThreatIntelIndicatorLastObservedAt: undefined,
    ThreatIntelIndicatorSource: undefined,
    ThreatIntelIndicatorSourceUrl: undefined,
    ThreatIntelIndicatorType: undefined,
    ThreatIntelIndicatorValue: undefined,
    Title: undefined,
    Type: undefined,
    UpdatedAt: undefined,
    UserDefinedFields: undefined,
    VerificationState: undefined,
    WorkflowState: undefined
  };
  if (output.AwsAccountId !== undefined && output.AwsAccountId !== null) {
    contents.AwsAccountId = deserializeAws_restJson1_1StringFilterList(
      output.AwsAccountId,
      context
    );
  }
  if (output.CompanyName !== undefined && output.CompanyName !== null) {
    contents.CompanyName = deserializeAws_restJson1_1StringFilterList(
      output.CompanyName,
      context
    );
  }
  if (
    output.ComplianceStatus !== undefined &&
    output.ComplianceStatus !== null
  ) {
    contents.ComplianceStatus = deserializeAws_restJson1_1StringFilterList(
      output.ComplianceStatus,
      context
    );
  }
  if (output.Confidence !== undefined && output.Confidence !== null) {
    contents.Confidence = deserializeAws_restJson1_1NumberFilterList(
      output.Confidence,
      context
    );
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = deserializeAws_restJson1_1DateFilterList(
      output.CreatedAt,
      context
    );
  }
  if (output.Criticality !== undefined && output.Criticality !== null) {
    contents.Criticality = deserializeAws_restJson1_1NumberFilterList(
      output.Criticality,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = deserializeAws_restJson1_1StringFilterList(
      output.Description,
      context
    );
  }
  if (output.FirstObservedAt !== undefined && output.FirstObservedAt !== null) {
    contents.FirstObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.FirstObservedAt,
      context
    );
  }
  if (output.GeneratorId !== undefined && output.GeneratorId !== null) {
    contents.GeneratorId = deserializeAws_restJson1_1StringFilterList(
      output.GeneratorId,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = deserializeAws_restJson1_1StringFilterList(
      output.Id,
      context
    );
  }
  if (output.Keyword !== undefined && output.Keyword !== null) {
    contents.Keyword = deserializeAws_restJson1_1KeywordFilterList(
      output.Keyword,
      context
    );
  }
  if (output.LastObservedAt !== undefined && output.LastObservedAt !== null) {
    contents.LastObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.LastObservedAt,
      context
    );
  }
  if (output.MalwareName !== undefined && output.MalwareName !== null) {
    contents.MalwareName = deserializeAws_restJson1_1StringFilterList(
      output.MalwareName,
      context
    );
  }
  if (output.MalwarePath !== undefined && output.MalwarePath !== null) {
    contents.MalwarePath = deserializeAws_restJson1_1StringFilterList(
      output.MalwarePath,
      context
    );
  }
  if (output.MalwareState !== undefined && output.MalwareState !== null) {
    contents.MalwareState = deserializeAws_restJson1_1StringFilterList(
      output.MalwareState,
      context
    );
  }
  if (output.MalwareType !== undefined && output.MalwareType !== null) {
    contents.MalwareType = deserializeAws_restJson1_1StringFilterList(
      output.MalwareType,
      context
    );
  }
  if (
    output.NetworkDestinationDomain !== undefined &&
    output.NetworkDestinationDomain !== null
  ) {
    contents.NetworkDestinationDomain = deserializeAws_restJson1_1StringFilterList(
      output.NetworkDestinationDomain,
      context
    );
  }
  if (
    output.NetworkDestinationIpV4 !== undefined &&
    output.NetworkDestinationIpV4 !== null
  ) {
    contents.NetworkDestinationIpV4 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkDestinationIpV4,
      context
    );
  }
  if (
    output.NetworkDestinationIpV6 !== undefined &&
    output.NetworkDestinationIpV6 !== null
  ) {
    contents.NetworkDestinationIpV6 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkDestinationIpV6,
      context
    );
  }
  if (
    output.NetworkDestinationPort !== undefined &&
    output.NetworkDestinationPort !== null
  ) {
    contents.NetworkDestinationPort = deserializeAws_restJson1_1NumberFilterList(
      output.NetworkDestinationPort,
      context
    );
  }
  if (
    output.NetworkDirection !== undefined &&
    output.NetworkDirection !== null
  ) {
    contents.NetworkDirection = deserializeAws_restJson1_1StringFilterList(
      output.NetworkDirection,
      context
    );
  }
  if (output.NetworkProtocol !== undefined && output.NetworkProtocol !== null) {
    contents.NetworkProtocol = deserializeAws_restJson1_1StringFilterList(
      output.NetworkProtocol,
      context
    );
  }
  if (
    output.NetworkSourceDomain !== undefined &&
    output.NetworkSourceDomain !== null
  ) {
    contents.NetworkSourceDomain = deserializeAws_restJson1_1StringFilterList(
      output.NetworkSourceDomain,
      context
    );
  }
  if (
    output.NetworkSourceIpV4 !== undefined &&
    output.NetworkSourceIpV4 !== null
  ) {
    contents.NetworkSourceIpV4 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkSourceIpV4,
      context
    );
  }
  if (
    output.NetworkSourceIpV6 !== undefined &&
    output.NetworkSourceIpV6 !== null
  ) {
    contents.NetworkSourceIpV6 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkSourceIpV6,
      context
    );
  }
  if (
    output.NetworkSourceMac !== undefined &&
    output.NetworkSourceMac !== null
  ) {
    contents.NetworkSourceMac = deserializeAws_restJson1_1StringFilterList(
      output.NetworkSourceMac,
      context
    );
  }
  if (
    output.NetworkSourcePort !== undefined &&
    output.NetworkSourcePort !== null
  ) {
    contents.NetworkSourcePort = deserializeAws_restJson1_1NumberFilterList(
      output.NetworkSourcePort,
      context
    );
  }
  if (output.NoteText !== undefined && output.NoteText !== null) {
    contents.NoteText = deserializeAws_restJson1_1StringFilterList(
      output.NoteText,
      context
    );
  }
  if (output.NoteUpdatedAt !== undefined && output.NoteUpdatedAt !== null) {
    contents.NoteUpdatedAt = deserializeAws_restJson1_1DateFilterList(
      output.NoteUpdatedAt,
      context
    );
  }
  if (output.NoteUpdatedBy !== undefined && output.NoteUpdatedBy !== null) {
    contents.NoteUpdatedBy = deserializeAws_restJson1_1StringFilterList(
      output.NoteUpdatedBy,
      context
    );
  }
  if (
    output.ProcessLaunchedAt !== undefined &&
    output.ProcessLaunchedAt !== null
  ) {
    contents.ProcessLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ProcessLaunchedAt,
      context
    );
  }
  if (output.ProcessName !== undefined && output.ProcessName !== null) {
    contents.ProcessName = deserializeAws_restJson1_1StringFilterList(
      output.ProcessName,
      context
    );
  }
  if (
    output.ProcessParentPid !== undefined &&
    output.ProcessParentPid !== null
  ) {
    contents.ProcessParentPid = deserializeAws_restJson1_1NumberFilterList(
      output.ProcessParentPid,
      context
    );
  }
  if (output.ProcessPath !== undefined && output.ProcessPath !== null) {
    contents.ProcessPath = deserializeAws_restJson1_1StringFilterList(
      output.ProcessPath,
      context
    );
  }
  if (output.ProcessPid !== undefined && output.ProcessPid !== null) {
    contents.ProcessPid = deserializeAws_restJson1_1NumberFilterList(
      output.ProcessPid,
      context
    );
  }
  if (
    output.ProcessTerminatedAt !== undefined &&
    output.ProcessTerminatedAt !== null
  ) {
    contents.ProcessTerminatedAt = deserializeAws_restJson1_1DateFilterList(
      output.ProcessTerminatedAt,
      context
    );
  }
  if (output.ProductArn !== undefined && output.ProductArn !== null) {
    contents.ProductArn = deserializeAws_restJson1_1StringFilterList(
      output.ProductArn,
      context
    );
  }
  if (output.ProductFields !== undefined && output.ProductFields !== null) {
    contents.ProductFields = deserializeAws_restJson1_1MapFilterList(
      output.ProductFields,
      context
    );
  }
  if (output.ProductName !== undefined && output.ProductName !== null) {
    contents.ProductName = deserializeAws_restJson1_1StringFilterList(
      output.ProductName,
      context
    );
  }
  if (
    output.RecommendationText !== undefined &&
    output.RecommendationText !== null
  ) {
    contents.RecommendationText = deserializeAws_restJson1_1StringFilterList(
      output.RecommendationText,
      context
    );
  }
  if (output.RecordState !== undefined && output.RecordState !== null) {
    contents.RecordState = deserializeAws_restJson1_1StringFilterList(
      output.RecordState,
      context
    );
  }
  if (
    output.RelatedFindingsId !== undefined &&
    output.RelatedFindingsId !== null
  ) {
    contents.RelatedFindingsId = deserializeAws_restJson1_1StringFilterList(
      output.RelatedFindingsId,
      context
    );
  }
  if (
    output.RelatedFindingsProductArn !== undefined &&
    output.RelatedFindingsProductArn !== null
  ) {
    contents.RelatedFindingsProductArn = deserializeAws_restJson1_1StringFilterList(
      output.RelatedFindingsProductArn,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
    output.ResourceAwsEc2InstanceIamInstanceProfileArn !== null
  ) {
    contents.ResourceAwsEc2InstanceIamInstanceProfileArn = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceIamInstanceProfileArn,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceImageId !== undefined &&
    output.ResourceAwsEc2InstanceImageId !== null
  ) {
    contents.ResourceAwsEc2InstanceImageId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceImageId,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceIpV4Addresses !== undefined &&
    output.ResourceAwsEc2InstanceIpV4Addresses !== null
  ) {
    contents.ResourceAwsEc2InstanceIpV4Addresses = deserializeAws_restJson1_1IpFilterList(
      output.ResourceAwsEc2InstanceIpV4Addresses,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceIpV6Addresses !== undefined &&
    output.ResourceAwsEc2InstanceIpV6Addresses !== null
  ) {
    contents.ResourceAwsEc2InstanceIpV6Addresses = deserializeAws_restJson1_1IpFilterList(
      output.ResourceAwsEc2InstanceIpV6Addresses,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceKeyName !== undefined &&
    output.ResourceAwsEc2InstanceKeyName !== null
  ) {
    contents.ResourceAwsEc2InstanceKeyName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceKeyName,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceLaunchedAt !== undefined &&
    output.ResourceAwsEc2InstanceLaunchedAt !== null
  ) {
    contents.ResourceAwsEc2InstanceLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceAwsEc2InstanceLaunchedAt,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceSubnetId !== undefined &&
    output.ResourceAwsEc2InstanceSubnetId !== null
  ) {
    contents.ResourceAwsEc2InstanceSubnetId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceSubnetId,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceType !== undefined &&
    output.ResourceAwsEc2InstanceType !== null
  ) {
    contents.ResourceAwsEc2InstanceType = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceType,
      context
    );
  }
  if (
    output.ResourceAwsEc2InstanceVpcId !== undefined &&
    output.ResourceAwsEc2InstanceVpcId !== null
  ) {
    contents.ResourceAwsEc2InstanceVpcId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceVpcId,
      context
    );
  }
  if (
    output.ResourceAwsIamAccessKeyCreatedAt !== undefined &&
    output.ResourceAwsIamAccessKeyCreatedAt !== null
  ) {
    contents.ResourceAwsIamAccessKeyCreatedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceAwsIamAccessKeyCreatedAt,
      context
    );
  }
  if (
    output.ResourceAwsIamAccessKeyStatus !== undefined &&
    output.ResourceAwsIamAccessKeyStatus !== null
  ) {
    contents.ResourceAwsIamAccessKeyStatus = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsIamAccessKeyStatus,
      context
    );
  }
  if (
    output.ResourceAwsIamAccessKeyUserName !== undefined &&
    output.ResourceAwsIamAccessKeyUserName !== null
  ) {
    contents.ResourceAwsIamAccessKeyUserName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsIamAccessKeyUserName,
      context
    );
  }
  if (
    output.ResourceAwsS3BucketOwnerId !== undefined &&
    output.ResourceAwsS3BucketOwnerId !== null
  ) {
    contents.ResourceAwsS3BucketOwnerId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsS3BucketOwnerId,
      context
    );
  }
  if (
    output.ResourceAwsS3BucketOwnerName !== undefined &&
    output.ResourceAwsS3BucketOwnerName !== null
  ) {
    contents.ResourceAwsS3BucketOwnerName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsS3BucketOwnerName,
      context
    );
  }
  if (
    output.ResourceContainerImageId !== undefined &&
    output.ResourceContainerImageId !== null
  ) {
    contents.ResourceContainerImageId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerImageId,
      context
    );
  }
  if (
    output.ResourceContainerImageName !== undefined &&
    output.ResourceContainerImageName !== null
  ) {
    contents.ResourceContainerImageName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerImageName,
      context
    );
  }
  if (
    output.ResourceContainerLaunchedAt !== undefined &&
    output.ResourceContainerLaunchedAt !== null
  ) {
    contents.ResourceContainerLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceContainerLaunchedAt,
      context
    );
  }
  if (
    output.ResourceContainerName !== undefined &&
    output.ResourceContainerName !== null
  ) {
    contents.ResourceContainerName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerName,
      context
    );
  }
  if (
    output.ResourceDetailsOther !== undefined &&
    output.ResourceDetailsOther !== null
  ) {
    contents.ResourceDetailsOther = deserializeAws_restJson1_1MapFilterList(
      output.ResourceDetailsOther,
      context
    );
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceId,
      context
    );
  }
  if (
    output.ResourcePartition !== undefined &&
    output.ResourcePartition !== null
  ) {
    contents.ResourcePartition = deserializeAws_restJson1_1StringFilterList(
      output.ResourcePartition,
      context
    );
  }
  if (output.ResourceRegion !== undefined && output.ResourceRegion !== null) {
    contents.ResourceRegion = deserializeAws_restJson1_1StringFilterList(
      output.ResourceRegion,
      context
    );
  }
  if (output.ResourceTags !== undefined && output.ResourceTags !== null) {
    contents.ResourceTags = deserializeAws_restJson1_1MapFilterList(
      output.ResourceTags,
      context
    );
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = deserializeAws_restJson1_1StringFilterList(
      output.ResourceType,
      context
    );
  }
  if (output.SeverityLabel !== undefined && output.SeverityLabel !== null) {
    contents.SeverityLabel = deserializeAws_restJson1_1StringFilterList(
      output.SeverityLabel,
      context
    );
  }
  if (
    output.SeverityNormalized !== undefined &&
    output.SeverityNormalized !== null
  ) {
    contents.SeverityNormalized = deserializeAws_restJson1_1NumberFilterList(
      output.SeverityNormalized,
      context
    );
  }
  if (output.SeverityProduct !== undefined && output.SeverityProduct !== null) {
    contents.SeverityProduct = deserializeAws_restJson1_1NumberFilterList(
      output.SeverityProduct,
      context
    );
  }
  if (output.SourceUrl !== undefined && output.SourceUrl !== null) {
    contents.SourceUrl = deserializeAws_restJson1_1StringFilterList(
      output.SourceUrl,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorCategory !== undefined &&
    output.ThreatIntelIndicatorCategory !== null
  ) {
    contents.ThreatIntelIndicatorCategory = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorCategory,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorLastObservedAt !== undefined &&
    output.ThreatIntelIndicatorLastObservedAt !== null
  ) {
    contents.ThreatIntelIndicatorLastObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.ThreatIntelIndicatorLastObservedAt,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorSource !== undefined &&
    output.ThreatIntelIndicatorSource !== null
  ) {
    contents.ThreatIntelIndicatorSource = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorSource,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorSourceUrl !== undefined &&
    output.ThreatIntelIndicatorSourceUrl !== null
  ) {
    contents.ThreatIntelIndicatorSourceUrl = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorSourceUrl,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorType !== undefined &&
    output.ThreatIntelIndicatorType !== null
  ) {
    contents.ThreatIntelIndicatorType = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorType,
      context
    );
  }
  if (
    output.ThreatIntelIndicatorValue !== undefined &&
    output.ThreatIntelIndicatorValue !== null
  ) {
    contents.ThreatIntelIndicatorValue = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorValue,
      context
    );
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = deserializeAws_restJson1_1StringFilterList(
      output.Title,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = deserializeAws_restJson1_1StringFilterList(
      output.Type,
      context
    );
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = deserializeAws_restJson1_1DateFilterList(
      output.UpdatedAt,
      context
    );
  }
  if (
    output.UserDefinedFields !== undefined &&
    output.UserDefinedFields !== null
  ) {
    contents.UserDefinedFields = deserializeAws_restJson1_1MapFilterList(
      output.UserDefinedFields,
      context
    );
  }
  if (
    output.VerificationState !== undefined &&
    output.VerificationState !== null
  ) {
    contents.VerificationState = deserializeAws_restJson1_1StringFilterList(
      output.VerificationState,
      context
    );
  }
  if (output.WorkflowState !== undefined && output.WorkflowState !== null) {
    contents.WorkflowState = deserializeAws_restJson1_1StringFilterList(
      output.WorkflowState,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AwsSecurityFindingList = (
  output: any,
  context: __SerdeContext
): Array<AwsSecurityFinding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsSecurityFinding(entry, context)
  );
};

const deserializeAws_restJson1_1AwsSnsTopicDetails = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicDetails => {
  let contents: any = {
    __type: "AwsSnsTopicDetails",
    KmsMasterKeyId: undefined,
    Owner: undefined,
    Subscription: undefined,
    TopicName: undefined
  };
  if (output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null) {
    contents.KmsMasterKeyId = output.KmsMasterKeyId;
  }
  if (output.Owner !== undefined && output.Owner !== null) {
    contents.Owner = output.Owner;
  }
  if (output.Subscription !== undefined && output.Subscription !== null) {
    contents.Subscription = deserializeAws_restJson1_1AwsSnsTopicSubscriptionList(
      output.Subscription,
      context
    );
  }
  if (output.TopicName !== undefined && output.TopicName !== null) {
    contents.TopicName = output.TopicName;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  let contents: any = {
    __type: "AwsSnsTopicSubscription",
    Endpoint: undefined,
    Protocol: undefined
  };
  if (output.Endpoint !== undefined && output.Endpoint !== null) {
    contents.Endpoint = output.Endpoint;
  }
  if (output.Protocol !== undefined && output.Protocol !== null) {
    contents.Protocol = output.Protocol;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsSnsTopicSubscriptionList = (
  output: any,
  context: __SerdeContext
): Array<AwsSnsTopicSubscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsSnsTopicSubscription(entry, context)
  );
};

const deserializeAws_restJson1_1AwsSqsQueueDetails = (
  output: any,
  context: __SerdeContext
): AwsSqsQueueDetails => {
  let contents: any = {
    __type: "AwsSqsQueueDetails",
    DeadLetterTargetArn: undefined,
    KmsDataKeyReusePeriodSeconds: undefined,
    KmsMasterKeyId: undefined,
    QueueName: undefined
  };
  if (
    output.DeadLetterTargetArn !== undefined &&
    output.DeadLetterTargetArn !== null
  ) {
    contents.DeadLetterTargetArn = output.DeadLetterTargetArn;
  }
  if (
    output.KmsDataKeyReusePeriodSeconds !== undefined &&
    output.KmsDataKeyReusePeriodSeconds !== null
  ) {
    contents.KmsDataKeyReusePeriodSeconds = output.KmsDataKeyReusePeriodSeconds;
  }
  if (output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null) {
    contents.KmsMasterKeyId = output.KmsMasterKeyId;
  }
  if (output.QueueName !== undefined && output.QueueName !== null) {
    contents.QueueName = output.QueueName;
  }
  return contents;
};

const deserializeAws_restJson1_1CategoryList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Compliance = (
  output: any,
  context: __SerdeContext
): Compliance => {
  let contents: any = {
    __type: "Compliance",
    Status: undefined
  };
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerDetails = (
  output: any,
  context: __SerdeContext
): ContainerDetails => {
  let contents: any = {
    __type: "ContainerDetails",
    ImageId: undefined,
    ImageName: undefined,
    LaunchedAt: undefined,
    Name: undefined
  };
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  if (output.ImageName !== undefined && output.ImageName !== null) {
    contents.ImageName = output.ImageName;
  }
  if (output.LaunchedAt !== undefined && output.LaunchedAt !== null) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1DateFilter = (
  output: any,
  context: __SerdeContext
): DateFilter => {
  let contents: any = {
    __type: "DateFilter",
    DateRange: undefined,
    End: undefined,
    Start: undefined
  };
  if (output.DateRange !== undefined && output.DateRange !== null) {
    contents.DateRange = deserializeAws_restJson1_1DateRange(
      output.DateRange,
      context
    );
  }
  if (output.End !== undefined && output.End !== null) {
    contents.End = output.End;
  }
  if (output.Start !== undefined && output.Start !== null) {
    contents.Start = output.Start;
  }
  return contents;
};

const deserializeAws_restJson1_1DateFilterList = (
  output: any,
  context: __SerdeContext
): Array<DateFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DateFilter(entry, context)
  );
};

const deserializeAws_restJson1_1DateRange = (
  output: any,
  context: __SerdeContext
): DateRange => {
  let contents: any = {
    __type: "DateRange",
    Unit: undefined,
    Value: undefined
  };
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1FieldMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ImportFindingsError = (
  output: any,
  context: __SerdeContext
): ImportFindingsError => {
  let contents: any = {
    __type: "ImportFindingsError",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    Id: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_restJson1_1ImportFindingsErrorList = (
  output: any,
  context: __SerdeContext
): Array<ImportFindingsError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImportFindingsError(entry, context)
  );
};

const deserializeAws_restJson1_1Insight = (
  output: any,
  context: __SerdeContext
): Insight => {
  let contents: any = {
    __type: "Insight",
    Filters: undefined,
    GroupByAttribute: undefined,
    InsightArn: undefined,
    Name: undefined
  };
  if (output.Filters !== undefined && output.Filters !== null) {
    contents.Filters = deserializeAws_restJson1_1AwsSecurityFindingFilters(
      output.Filters,
      context
    );
  }
  if (
    output.GroupByAttribute !== undefined &&
    output.GroupByAttribute !== null
  ) {
    contents.GroupByAttribute = output.GroupByAttribute;
  }
  if (output.InsightArn !== undefined && output.InsightArn !== null) {
    contents.InsightArn = output.InsightArn;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1InsightList = (
  output: any,
  context: __SerdeContext
): Array<Insight> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Insight(entry, context)
  );
};

const deserializeAws_restJson1_1InsightResultValue = (
  output: any,
  context: __SerdeContext
): InsightResultValue => {
  let contents: any = {
    __type: "InsightResultValue",
    Count: undefined,
    GroupByAttributeValue: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (
    output.GroupByAttributeValue !== undefined &&
    output.GroupByAttributeValue !== null
  ) {
    contents.GroupByAttributeValue = output.GroupByAttributeValue;
  }
  return contents;
};

const deserializeAws_restJson1_1InsightResultValueList = (
  output: any,
  context: __SerdeContext
): Array<InsightResultValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InsightResultValue(entry, context)
  );
};

const deserializeAws_restJson1_1InsightResults = (
  output: any,
  context: __SerdeContext
): InsightResults => {
  let contents: any = {
    __type: "InsightResults",
    GroupByAttribute: undefined,
    InsightArn: undefined,
    ResultValues: undefined
  };
  if (
    output.GroupByAttribute !== undefined &&
    output.GroupByAttribute !== null
  ) {
    contents.GroupByAttribute = output.GroupByAttribute;
  }
  if (output.InsightArn !== undefined && output.InsightArn !== null) {
    contents.InsightArn = output.InsightArn;
  }
  if (output.ResultValues !== undefined && output.ResultValues !== null) {
    contents.ResultValues = deserializeAws_restJson1_1InsightResultValueList(
      output.ResultValues,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Invitation = (
  output: any,
  context: __SerdeContext
): Invitation => {
  let contents: any = {
    __type: "Invitation",
    AccountId: undefined,
    InvitationId: undefined,
    InvitedAt: undefined,
    MemberStatus: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.InvitationId !== undefined && output.InvitationId !== null) {
    contents.InvitationId = output.InvitationId;
  }
  if (output.InvitedAt !== undefined && output.InvitedAt !== null) {
    contents.InvitedAt = new Date(output.InvitedAt);
  }
  if (output.MemberStatus !== undefined && output.MemberStatus !== null) {
    contents.MemberStatus = output.MemberStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1InvitationList = (
  output: any,
  context: __SerdeContext
): Array<Invitation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Invitation(entry, context)
  );
};

const deserializeAws_restJson1_1IpFilter = (
  output: any,
  context: __SerdeContext
): IpFilter => {
  let contents: any = {
    __type: "IpFilter",
    Cidr: undefined
  };
  if (output.Cidr !== undefined && output.Cidr !== null) {
    contents.Cidr = output.Cidr;
  }
  return contents;
};

const deserializeAws_restJson1_1IpFilterList = (
  output: any,
  context: __SerdeContext
): Array<IpFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IpFilter(entry, context)
  );
};

const deserializeAws_restJson1_1KeywordFilter = (
  output: any,
  context: __SerdeContext
): KeywordFilter => {
  let contents: any = {
    __type: "KeywordFilter",
    Value: undefined
  };
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1KeywordFilterList = (
  output: any,
  context: __SerdeContext
): Array<KeywordFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1KeywordFilter(entry, context)
  );
};

const deserializeAws_restJson1_1LoadBalancerState = (
  output: any,
  context: __SerdeContext
): LoadBalancerState => {
  let contents: any = {
    __type: "LoadBalancerState",
    Code: undefined,
    Reason: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_restJson1_1Malware = (
  output: any,
  context: __SerdeContext
): Malware => {
  let contents: any = {
    __type: "Malware",
    Name: undefined,
    Path: undefined,
    State: undefined,
    Type: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1MalwareList = (
  output: any,
  context: __SerdeContext
): Array<Malware> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Malware(entry, context)
  );
};

const deserializeAws_restJson1_1MapFilter = (
  output: any,
  context: __SerdeContext
): MapFilter => {
  let contents: any = {
    __type: "MapFilter",
    Comparison: undefined,
    Key: undefined,
    Value: undefined
  };
  if (output.Comparison !== undefined && output.Comparison !== null) {
    contents.Comparison = output.Comparison;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1MapFilterList = (
  output: any,
  context: __SerdeContext
): Array<MapFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MapFilter(entry, context)
  );
};

const deserializeAws_restJson1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  let contents: any = {
    __type: "Member",
    AccountId: undefined,
    Email: undefined,
    InvitedAt: undefined,
    MasterId: undefined,
    MemberStatus: undefined,
    UpdatedAt: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.InvitedAt !== undefined && output.InvitedAt !== null) {
    contents.InvitedAt = new Date(output.InvitedAt);
  }
  if (output.MasterId !== undefined && output.MasterId !== null) {
    contents.MasterId = output.MasterId;
  }
  if (output.MemberStatus !== undefined && output.MemberStatus !== null) {
    contents.MemberStatus = output.MemberStatus;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(output.UpdatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1MemberList = (
  output: any,
  context: __SerdeContext
): Array<Member> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Member(entry, context)
  );
};

const deserializeAws_restJson1_1Network = (
  output: any,
  context: __SerdeContext
): Network => {
  let contents: any = {
    __type: "Network",
    DestinationDomain: undefined,
    DestinationIpV4: undefined,
    DestinationIpV6: undefined,
    DestinationPort: undefined,
    Direction: undefined,
    Protocol: undefined,
    SourceDomain: undefined,
    SourceIpV4: undefined,
    SourceIpV6: undefined,
    SourceMac: undefined,
    SourcePort: undefined
  };
  if (
    output.DestinationDomain !== undefined &&
    output.DestinationDomain !== null
  ) {
    contents.DestinationDomain = output.DestinationDomain;
  }
  if (output.DestinationIpV4 !== undefined && output.DestinationIpV4 !== null) {
    contents.DestinationIpV4 = output.DestinationIpV4;
  }
  if (output.DestinationIpV6 !== undefined && output.DestinationIpV6 !== null) {
    contents.DestinationIpV6 = output.DestinationIpV6;
  }
  if (output.DestinationPort !== undefined && output.DestinationPort !== null) {
    contents.DestinationPort = output.DestinationPort;
  }
  if (output.Direction !== undefined && output.Direction !== null) {
    contents.Direction = output.Direction;
  }
  if (output.Protocol !== undefined && output.Protocol !== null) {
    contents.Protocol = output.Protocol;
  }
  if (output.SourceDomain !== undefined && output.SourceDomain !== null) {
    contents.SourceDomain = output.SourceDomain;
  }
  if (output.SourceIpV4 !== undefined && output.SourceIpV4 !== null) {
    contents.SourceIpV4 = output.SourceIpV4;
  }
  if (output.SourceIpV6 !== undefined && output.SourceIpV6 !== null) {
    contents.SourceIpV6 = output.SourceIpV6;
  }
  if (output.SourceMac !== undefined && output.SourceMac !== null) {
    contents.SourceMac = output.SourceMac;
  }
  if (output.SourcePort !== undefined && output.SourcePort !== null) {
    contents.SourcePort = output.SourcePort;
  }
  return contents;
};

const deserializeAws_restJson1_1NonEmptyStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Note = (
  output: any,
  context: __SerdeContext
): Note => {
  let contents: any = {
    __type: "Note",
    Text: undefined,
    UpdatedAt: undefined,
    UpdatedBy: undefined
  };
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = output.UpdatedAt;
  }
  if (output.UpdatedBy !== undefined && output.UpdatedBy !== null) {
    contents.UpdatedBy = output.UpdatedBy;
  }
  return contents;
};

const deserializeAws_restJson1_1NumberFilter = (
  output: any,
  context: __SerdeContext
): NumberFilter => {
  let contents: any = {
    __type: "NumberFilter",
    Eq: undefined,
    Gte: undefined,
    Lte: undefined
  };
  if (output.Eq !== undefined && output.Eq !== null) {
    contents.Eq = output.Eq;
  }
  if (output.Gte !== undefined && output.Gte !== null) {
    contents.Gte = output.Gte;
  }
  if (output.Lte !== undefined && output.Lte !== null) {
    contents.Lte = output.Lte;
  }
  return contents;
};

const deserializeAws_restJson1_1NumberFilterList = (
  output: any,
  context: __SerdeContext
): Array<NumberFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NumberFilter(entry, context)
  );
};

const deserializeAws_restJson1_1ProcessDetails = (
  output: any,
  context: __SerdeContext
): ProcessDetails => {
  let contents: any = {
    __type: "ProcessDetails",
    LaunchedAt: undefined,
    Name: undefined,
    ParentPid: undefined,
    Path: undefined,
    Pid: undefined,
    TerminatedAt: undefined
  };
  if (output.LaunchedAt !== undefined && output.LaunchedAt !== null) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ParentPid !== undefined && output.ParentPid !== null) {
    contents.ParentPid = output.ParentPid;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.Pid !== undefined && output.Pid !== null) {
    contents.Pid = output.Pid;
  }
  if (output.TerminatedAt !== undefined && output.TerminatedAt !== null) {
    contents.TerminatedAt = output.TerminatedAt;
  }
  return contents;
};

const deserializeAws_restJson1_1Product = (
  output: any,
  context: __SerdeContext
): Product => {
  let contents: any = {
    __type: "Product",
    ActivationUrl: undefined,
    Categories: undefined,
    CompanyName: undefined,
    Description: undefined,
    MarketplaceUrl: undefined,
    ProductArn: undefined,
    ProductName: undefined,
    ProductSubscriptionResourcePolicy: undefined
  };
  if (output.ActivationUrl !== undefined && output.ActivationUrl !== null) {
    contents.ActivationUrl = output.ActivationUrl;
  }
  if (output.Categories !== undefined && output.Categories !== null) {
    contents.Categories = deserializeAws_restJson1_1CategoryList(
      output.Categories,
      context
    );
  }
  if (output.CompanyName !== undefined && output.CompanyName !== null) {
    contents.CompanyName = output.CompanyName;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.MarketplaceUrl !== undefined && output.MarketplaceUrl !== null) {
    contents.MarketplaceUrl = output.MarketplaceUrl;
  }
  if (output.ProductArn !== undefined && output.ProductArn !== null) {
    contents.ProductArn = output.ProductArn;
  }
  if (output.ProductName !== undefined && output.ProductName !== null) {
    contents.ProductName = output.ProductName;
  }
  if (
    output.ProductSubscriptionResourcePolicy !== undefined &&
    output.ProductSubscriptionResourcePolicy !== null
  ) {
    contents.ProductSubscriptionResourcePolicy =
      output.ProductSubscriptionResourcePolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1ProductSubscriptionArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ProductsList = (
  output: any,
  context: __SerdeContext
): Array<Product> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Product(entry, context)
  );
};

const deserializeAws_restJson1_1Recommendation = (
  output: any,
  context: __SerdeContext
): Recommendation => {
  let contents: any = {
    __type: "Recommendation",
    Text: undefined,
    Url: undefined
  };
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Url !== undefined && output.Url !== null) {
    contents.Url = output.Url;
  }
  return contents;
};

const deserializeAws_restJson1_1RelatedFinding = (
  output: any,
  context: __SerdeContext
): RelatedFinding => {
  let contents: any = {
    __type: "RelatedFinding",
    Id: undefined,
    ProductArn: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.ProductArn !== undefined && output.ProductArn !== null) {
    contents.ProductArn = output.ProductArn;
  }
  return contents;
};

const deserializeAws_restJson1_1RelatedFindingList = (
  output: any,
  context: __SerdeContext
): Array<RelatedFinding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RelatedFinding(entry, context)
  );
};

const deserializeAws_restJson1_1Remediation = (
  output: any,
  context: __SerdeContext
): Remediation => {
  let contents: any = {
    __type: "Remediation",
    Recommendation: undefined
  };
  if (output.Recommendation !== undefined && output.Recommendation !== null) {
    contents.Recommendation = deserializeAws_restJson1_1Recommendation(
      output.Recommendation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    Details: undefined,
    Id: undefined,
    Partition: undefined,
    Region: undefined,
    Tags: undefined,
    Type: undefined
  };
  if (output.Details !== undefined && output.Details !== null) {
    contents.Details = deserializeAws_restJson1_1ResourceDetails(
      output.Details,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Partition !== undefined && output.Partition !== null) {
    contents.Partition = output.Partition;
  }
  if (output.Region !== undefined && output.Region !== null) {
    contents.Region = output.Region;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1FieldMap(output.Tags, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceDetails = (
  output: any,
  context: __SerdeContext
): ResourceDetails => {
  let contents: any = {
    __type: "ResourceDetails",
    AwsCloudFrontDistribution: undefined,
    AwsEc2Instance: undefined,
    AwsElbv2LoadBalancer: undefined,
    AwsIamAccessKey: undefined,
    AwsIamRole: undefined,
    AwsKmsKey: undefined,
    AwsLambdaFunction: undefined,
    AwsS3Bucket: undefined,
    AwsSnsTopic: undefined,
    AwsSqsQueue: undefined,
    Container: undefined,
    Other: undefined
  };
  if (
    output.AwsCloudFrontDistribution !== undefined &&
    output.AwsCloudFrontDistribution !== null
  ) {
    contents.AwsCloudFrontDistribution = deserializeAws_restJson1_1AwsCloudFrontDistributionDetails(
      output.AwsCloudFrontDistribution,
      context
    );
  }
  if (output.AwsEc2Instance !== undefined && output.AwsEc2Instance !== null) {
    contents.AwsEc2Instance = deserializeAws_restJson1_1AwsEc2InstanceDetails(
      output.AwsEc2Instance,
      context
    );
  }
  if (
    output.AwsElbv2LoadBalancer !== undefined &&
    output.AwsElbv2LoadBalancer !== null
  ) {
    contents.AwsElbv2LoadBalancer = deserializeAws_restJson1_1AwsElbv2LoadBalancerDetails(
      output.AwsElbv2LoadBalancer,
      context
    );
  }
  if (output.AwsIamAccessKey !== undefined && output.AwsIamAccessKey !== null) {
    contents.AwsIamAccessKey = deserializeAws_restJson1_1AwsIamAccessKeyDetails(
      output.AwsIamAccessKey,
      context
    );
  }
  if (output.AwsIamRole !== undefined && output.AwsIamRole !== null) {
    contents.AwsIamRole = deserializeAws_restJson1_1AwsIamRoleDetails(
      output.AwsIamRole,
      context
    );
  }
  if (output.AwsKmsKey !== undefined && output.AwsKmsKey !== null) {
    contents.AwsKmsKey = deserializeAws_restJson1_1AwsKmsKeyDetails(
      output.AwsKmsKey,
      context
    );
  }
  if (
    output.AwsLambdaFunction !== undefined &&
    output.AwsLambdaFunction !== null
  ) {
    contents.AwsLambdaFunction = deserializeAws_restJson1_1AwsLambdaFunctionDetails(
      output.AwsLambdaFunction,
      context
    );
  }
  if (output.AwsS3Bucket !== undefined && output.AwsS3Bucket !== null) {
    contents.AwsS3Bucket = deserializeAws_restJson1_1AwsS3BucketDetails(
      output.AwsS3Bucket,
      context
    );
  }
  if (output.AwsSnsTopic !== undefined && output.AwsSnsTopic !== null) {
    contents.AwsSnsTopic = deserializeAws_restJson1_1AwsSnsTopicDetails(
      output.AwsSnsTopic,
      context
    );
  }
  if (output.AwsSqsQueue !== undefined && output.AwsSqsQueue !== null) {
    contents.AwsSqsQueue = deserializeAws_restJson1_1AwsSqsQueueDetails(
      output.AwsSqsQueue,
      context
    );
  }
  if (output.Container !== undefined && output.Container !== null) {
    contents.Container = deserializeAws_restJson1_1ContainerDetails(
      output.Container,
      context
    );
  }
  if (output.Other !== undefined && output.Other !== null) {
    contents.Other = deserializeAws_restJson1_1FieldMap(output.Other, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resource(entry, context)
  );
};

const deserializeAws_restJson1_1Result = (
  output: any,
  context: __SerdeContext
): Result => {
  let contents: any = {
    __type: "Result",
    AccountId: undefined,
    ProcessingResult: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (
    output.ProcessingResult !== undefined &&
    output.ProcessingResult !== null
  ) {
    contents.ProcessingResult = output.ProcessingResult;
  }
  return contents;
};

const deserializeAws_restJson1_1ResultList = (
  output: any,
  context: __SerdeContext
): Array<Result> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Result(entry, context)
  );
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Severity = (
  output: any,
  context: __SerdeContext
): Severity => {
  let contents: any = {
    __type: "Severity",
    Normalized: undefined,
    Product: undefined
  };
  if (output.Normalized !== undefined && output.Normalized !== null) {
    contents.Normalized = output.Normalized;
  }
  if (output.Product !== undefined && output.Product !== null) {
    contents.Product = output.Product;
  }
  return contents;
};

const deserializeAws_restJson1_1StandardsControl = (
  output: any,
  context: __SerdeContext
): StandardsControl => {
  let contents: any = {
    __type: "StandardsControl",
    ControlId: undefined,
    ControlStatus: undefined,
    ControlStatusUpdatedAt: undefined,
    Description: undefined,
    DisabledReason: undefined,
    RemediationUrl: undefined,
    SeverityRating: undefined,
    StandardsControlArn: undefined,
    Title: undefined
  };
  if (output.ControlId !== undefined && output.ControlId !== null) {
    contents.ControlId = output.ControlId;
  }
  if (output.ControlStatus !== undefined && output.ControlStatus !== null) {
    contents.ControlStatus = output.ControlStatus;
  }
  if (
    output.ControlStatusUpdatedAt !== undefined &&
    output.ControlStatusUpdatedAt !== null
  ) {
    contents.ControlStatusUpdatedAt = new Date(output.ControlStatusUpdatedAt);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DisabledReason !== undefined && output.DisabledReason !== null) {
    contents.DisabledReason = output.DisabledReason;
  }
  if (output.RemediationUrl !== undefined && output.RemediationUrl !== null) {
    contents.RemediationUrl = output.RemediationUrl;
  }
  if (output.SeverityRating !== undefined && output.SeverityRating !== null) {
    contents.SeverityRating = output.SeverityRating;
  }
  if (
    output.StandardsControlArn !== undefined &&
    output.StandardsControlArn !== null
  ) {
    contents.StandardsControlArn = output.StandardsControlArn;
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = output.Title;
  }
  return contents;
};

const deserializeAws_restJson1_1StandardsControls = (
  output: any,
  context: __SerdeContext
): Array<StandardsControl> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StandardsControl(entry, context)
  );
};

const deserializeAws_restJson1_1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1StandardsSubscription = (
  output: any,
  context: __SerdeContext
): StandardsSubscription => {
  let contents: any = {
    __type: "StandardsSubscription",
    StandardsArn: undefined,
    StandardsInput: undefined,
    StandardsStatus: undefined,
    StandardsSubscriptionArn: undefined
  };
  if (output.StandardsArn !== undefined && output.StandardsArn !== null) {
    contents.StandardsArn = output.StandardsArn;
  }
  if (output.StandardsInput !== undefined && output.StandardsInput !== null) {
    contents.StandardsInput = deserializeAws_restJson1_1StandardsInputParameterMap(
      output.StandardsInput,
      context
    );
  }
  if (output.StandardsStatus !== undefined && output.StandardsStatus !== null) {
    contents.StandardsStatus = output.StandardsStatus;
  }
  if (
    output.StandardsSubscriptionArn !== undefined &&
    output.StandardsSubscriptionArn !== null
  ) {
    contents.StandardsSubscriptionArn = output.StandardsSubscriptionArn;
  }
  return contents;
};

const deserializeAws_restJson1_1StandardsSubscriptions = (
  output: any,
  context: __SerdeContext
): Array<StandardsSubscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StandardsSubscription(entry, context)
  );
};

const deserializeAws_restJson1_1StringFilter = (
  output: any,
  context: __SerdeContext
): StringFilter => {
  let contents: any = {
    __type: "StringFilter",
    Comparison: undefined,
    Value: undefined
  };
  if (output.Comparison !== undefined && output.Comparison !== null) {
    contents.Comparison = output.Comparison;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1StringFilterList = (
  output: any,
  context: __SerdeContext
): Array<StringFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StringFilter(entry, context)
  );
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ThreatIntelIndicator = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator => {
  let contents: any = {
    __type: "ThreatIntelIndicator",
    Category: undefined,
    LastObservedAt: undefined,
    Source: undefined,
    SourceUrl: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Category !== undefined && output.Category !== null) {
    contents.Category = output.Category;
  }
  if (output.LastObservedAt !== undefined && output.LastObservedAt !== null) {
    contents.LastObservedAt = output.LastObservedAt;
  }
  if (output.Source !== undefined && output.Source !== null) {
    contents.Source = output.Source;
  }
  if (output.SourceUrl !== undefined && output.SourceUrl !== null) {
    contents.SourceUrl = output.SourceUrl;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1ThreatIntelIndicatorList = (
  output: any,
  context: __SerdeContext
): Array<ThreatIntelIndicator> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ThreatIntelIndicator(entry, context)
  );
};

const deserializeAws_restJson1_1TypeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
