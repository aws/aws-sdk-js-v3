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
  AccessDeniedException,
  AccountDetails,
  ActionTarget,
  AwsEc2InstanceDetails,
  AwsIamAccessKeyDetails,
  AwsS3BucketDetails,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
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
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StringFilter,
  ThreatIntelIndicator
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
    const labelValue: any = input.ActionTargetArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ActionTargetArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ActionTargetArn}", labelValue);
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
    const labelValue: any = input.InsightArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace("{InsightArn}", labelValue);
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
    query["HubArn"] = input.HubArn.toString();
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
    query["NextToken"] = input.NextToken.toString();
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
    const labelValue: any = input.ProductSubscriptionArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ProductSubscriptionArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ProductSubscriptionArn}", labelValue);
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
    const labelValue: any = input.InsightArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace("{InsightArn}", labelValue);
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
  let body: any = {};
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
  let body: any = {};
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
  let body: any = {};
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
    query["NextToken"] = input.NextToken.toString();
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
    query["NextToken"] = input.NextToken.toString();
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
    query["NextToken"] = input.NextToken.toString();
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
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
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
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
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
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
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
    const labelValue: any = input.ActionTargetArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ActionTargetArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ActionTargetArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
  }
  let body: any = {};
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
  let body: any = {};
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
    const labelValue: any = input.InsightArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightArn.");
    }
    resolvedPath = resolvedPath.replace("{InsightArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: InsightArn.");
  }
  let body: any = {};
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

export async function deserializeAws_restJson1_1AcceptInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AcceptInvitationCommandError(
      output,
      context
    );
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptInvitationResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AcceptInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1BatchDisableStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.StandardsSubscriptions !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1BatchEnableStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.StandardsSubscriptions !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1BatchImportFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.FailedCount !== undefined) {
    contents.FailedCount = data.FailedCount;
  }
  if (data.FailedFindings !== undefined) {
    contents.FailedFindings = deserializeAws_restJson1_1ImportFindingsErrorList(
      data.FailedFindings,
      context
    );
  }
  if (data.SuccessCount !== undefined) {
    contents.SuccessCount = data.SuccessCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchImportFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.ActionTargetArn !== undefined) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateInsightCommandError(output, context);
  }
  const contents: CreateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInsightResponse",
    InsightArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateMembersCommandError(output, context);
  }
  const contents: CreateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeclineInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.ActionTargetArn !== undefined) {
    contents.ActionTargetArn = data.ActionTargetArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteInsightCommandError(output, context);
  }
  const contents: DeleteInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInsightResponse",
    InsightArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightArn !== undefined) {
    contents.InsightArn = data.InsightArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteMembersCommandError(output, context);
  }
  const contents: DeleteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeActionTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.ActionTargets !== undefined) {
    contents.ActionTargets = deserializeAws_restJson1_1ActionTargetList(
      data.ActionTargets,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeActionTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeHubCommandError(output, context);
  }
  const contents: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHubResponse",
    HubArn: undefined,
    SubscribedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.HubArn !== undefined) {
    contents.HubArn = data.HubArn;
  }
  if (data.SubscribedAt !== undefined) {
    contents.SubscribedAt = data.SubscribedAt;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeProductsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Products !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DisableImportFindingsForProductCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisableImportFindingsForProductCommandError(
      output,
      context
    );
  }
  const contents: DisableImportFindingsForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableImportFindingsForProductResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisableImportFindingsForProductCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DisableSecurityHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisableSecurityHubCommandError(
      output,
      context
    );
  }
  const contents: DisableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableSecurityHubResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisableSecurityHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(
      output,
      context
    );
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateFromMasterAccountResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DisassociateMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisassociateMembersCommandError(
      output,
      context
    );
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateMembersResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1EnableImportFindingsForProductCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.ProductSubscriptionArn !== undefined) {
    contents.ProductSubscriptionArn = data.ProductSubscriptionArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableImportFindingsForProductCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1EnableSecurityHubCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1EnableSecurityHubCommandError(
      output,
      context
    );
  }
  const contents: EnableSecurityHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableSecurityHubResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableSecurityHubCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetEnabledStandardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.StandardsSubscriptions !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetFindingsCommandError(output, context);
  }
  const contents: GetFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingsResponse",
    Findings: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Findings !== undefined) {
    contents.Findings = deserializeAws_restJson1_1AwsSecurityFindingList(
      data.Findings,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetInsightResultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.InsightResults !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetInsightsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetInsightsCommandError(output, context);
  }
  const contents: GetInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightsResponse",
    Insights: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Insights !== undefined) {
    contents.Insights = deserializeAws_restJson1_1InsightList(
      data.Insights,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInsightsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetInvitationsCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.InvitationsCount !== undefined) {
    contents.InvitationsCount = data.InvitationsCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInvitationsCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.Master !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetMembersCommandError(output, context);
  }
  const contents: GetMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMembersResponse",
    Members: undefined,
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined) {
    contents.Members = deserializeAws_restJson1_1MemberList(
      data.Members,
      context
    );
  }
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1InviteMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1InviteMembersCommandError(output, context);
  }
  const contents: InviteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InviteMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedAccounts !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListEnabledProductsForImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProductSubscriptions !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.Invitations !== undefined) {
    contents.Invitations = deserializeAws_restJson1_1InvitationList(
      data.Invitations,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMembersResponse",
    Members: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined) {
    contents.Members = deserializeAws_restJson1_1MemberList(
      data.Members,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateActionTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateActionTargetCommandError(
      output,
      context
    );
  }
  const contents: UpdateActionTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateActionTargetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateActionTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateFindingsCommandError(
      output,
      context
    );
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFindingsResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateInsightCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateInsightCommandError(output, context);
  }
  const contents: UpdateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInsightResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateInsightCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = await deserializeAws_restJson1_1InternalExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = await deserializeAws_restJson1_1InvalidInputExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.securityhub#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    __type: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidAccessExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: InvalidAccessException = {
    __type: "InvalidAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    __type: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1AccountDetails = (
  input: AccountDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1AccountDetails(entry, context)
  );
};

const serializeAws_restJson1_1AccountIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1ArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1AwsEc2InstanceDetails = (
  input: AwsEc2InstanceDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_restJson1_1AwsIamAccessKeyDetails = (
  input: AwsIamAccessKeyDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CreatedAt !== undefined) {
    bodyParams["CreatedAt"] = input.CreatedAt;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsS3BucketDetails = (
  input: AwsS3BucketDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1AwsSecurityFinding(entry, context)
  );
};

const serializeAws_restJson1_1Compliance = (
  input: Compliance,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerDetails = (
  input: ContainerDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1DateFilter(entry, context)
  );
};

const serializeAws_restJson1_1DateRange = (
  input: DateRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1IpFilter = (
  input: IpFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Cidr !== undefined) {
    bodyParams["Cidr"] = input.Cidr;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IpFilterList = (
  input: Array<IpFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1IpFilter(entry, context)
  );
};

const serializeAws_restJson1_1KeywordFilter = (
  input: KeywordFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1KeywordFilterList = (
  input: Array<KeywordFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1KeywordFilter(entry, context)
  );
};

const serializeAws_restJson1_1Malware = (
  input: Malware,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1Malware(entry, context)
  );
};

const serializeAws_restJson1_1MapFilter = (
  input: MapFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1MapFilter(entry, context)
  );
};

const serializeAws_restJson1_1Network = (
  input: Network,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_restJson1_1Note = (
  input: Note,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1NumberFilter(entry, context)
  );
};

const serializeAws_restJson1_1ProcessDetails = (
  input: ProcessDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1RelatedFinding(entry, context)
  );
};

const serializeAws_restJson1_1Remediation = (
  input: Remediation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.AwsEc2Instance !== undefined) {
    bodyParams[
      "AwsEc2Instance"
    ] = serializeAws_restJson1_1AwsEc2InstanceDetails(
      input.AwsEc2Instance,
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
  if (input.AwsS3Bucket !== undefined) {
    bodyParams["AwsS3Bucket"] = serializeAws_restJson1_1AwsS3BucketDetails(
      input.AwsS3Bucket,
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1Resource(entry, context)
  );
};

const serializeAws_restJson1_1Severity = (
  input: Severity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1SortCriterion(entry, context)
  );
};

const serializeAws_restJson1_1SortCriterion = (
  input: SortCriterion,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1StandardsSubscriptionArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1StandardsSubscriptionRequest = (
  input: StandardsSubscriptionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1StandardsSubscriptionRequest(entry, context)
  );
};

const serializeAws_restJson1_1StringFilter = (
  input: StringFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1StringFilter(entry, context)
  );
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ThreatIntelIndicator = (
  input: ThreatIntelIndicator,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1ThreatIntelIndicator(entry, context)
  );
};

const serializeAws_restJson1_1TypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
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
  if (output.ActionTargetArn !== undefined) {
    contents.ActionTargetArn = output.ActionTargetArn;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined) {
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
  if (output.IamInstanceProfileArn !== undefined) {
    contents.IamInstanceProfileArn = output.IamInstanceProfileArn;
  }
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  if (output.IpV4Addresses !== undefined) {
    contents.IpV4Addresses = deserializeAws_restJson1_1StringList(
      output.IpV4Addresses,
      context
    );
  }
  if (output.IpV6Addresses !== undefined) {
    contents.IpV6Addresses = deserializeAws_restJson1_1StringList(
      output.IpV6Addresses,
      context
    );
  }
  if (output.KeyName !== undefined) {
    contents.KeyName = output.KeyName;
  }
  if (output.LaunchedAt !== undefined) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.SubnetId !== undefined) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.VpcId !== undefined) {
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
    Status: undefined,
    UserName: undefined
  };
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = output.CreatedAt;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
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
  if (output.OwnerId !== undefined) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.OwnerName !== undefined) {
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
  if (output.AwsAccountId !== undefined) {
    contents.AwsAccountId = output.AwsAccountId;
  }
  if (output.Compliance !== undefined) {
    contents.Compliance = deserializeAws_restJson1_1Compliance(
      output.Compliance,
      context
    );
  }
  if (output.Confidence !== undefined) {
    contents.Confidence = output.Confidence;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = output.CreatedAt;
  }
  if (output.Criticality !== undefined) {
    contents.Criticality = output.Criticality;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.FirstObservedAt !== undefined) {
    contents.FirstObservedAt = output.FirstObservedAt;
  }
  if (output.GeneratorId !== undefined) {
    contents.GeneratorId = output.GeneratorId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.LastObservedAt !== undefined) {
    contents.LastObservedAt = output.LastObservedAt;
  }
  if (output.Malware !== undefined) {
    contents.Malware = deserializeAws_restJson1_1MalwareList(
      output.Malware,
      context
    );
  }
  if (output.Network !== undefined) {
    contents.Network = deserializeAws_restJson1_1Network(
      output.Network,
      context
    );
  }
  if (output.Note !== undefined) {
    contents.Note = deserializeAws_restJson1_1Note(output.Note, context);
  }
  if (output.Process !== undefined) {
    contents.Process = deserializeAws_restJson1_1ProcessDetails(
      output.Process,
      context
    );
  }
  if (output.ProductArn !== undefined) {
    contents.ProductArn = output.ProductArn;
  }
  if (output.ProductFields !== undefined) {
    contents.ProductFields = deserializeAws_restJson1_1FieldMap(
      output.ProductFields,
      context
    );
  }
  if (output.RecordState !== undefined) {
    contents.RecordState = output.RecordState;
  }
  if (output.RelatedFindings !== undefined) {
    contents.RelatedFindings = deserializeAws_restJson1_1RelatedFindingList(
      output.RelatedFindings,
      context
    );
  }
  if (output.Remediation !== undefined) {
    contents.Remediation = deserializeAws_restJson1_1Remediation(
      output.Remediation,
      context
    );
  }
  if (output.Resources !== undefined) {
    contents.Resources = deserializeAws_restJson1_1ResourceList(
      output.Resources,
      context
    );
  }
  if (output.SchemaVersion !== undefined) {
    contents.SchemaVersion = output.SchemaVersion;
  }
  if (output.Severity !== undefined) {
    contents.Severity = deserializeAws_restJson1_1Severity(
      output.Severity,
      context
    );
  }
  if (output.SourceUrl !== undefined) {
    contents.SourceUrl = output.SourceUrl;
  }
  if (output.ThreatIntelIndicators !== undefined) {
    contents.ThreatIntelIndicators = deserializeAws_restJson1_1ThreatIntelIndicatorList(
      output.ThreatIntelIndicators,
      context
    );
  }
  if (output.Title !== undefined) {
    contents.Title = output.Title;
  }
  if (output.Types !== undefined) {
    contents.Types = deserializeAws_restJson1_1TypeList(output.Types, context);
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = output.UpdatedAt;
  }
  if (output.UserDefinedFields !== undefined) {
    contents.UserDefinedFields = deserializeAws_restJson1_1FieldMap(
      output.UserDefinedFields,
      context
    );
  }
  if (output.VerificationState !== undefined) {
    contents.VerificationState = output.VerificationState;
  }
  if (output.WorkflowState !== undefined) {
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
  if (output.AwsAccountId !== undefined) {
    contents.AwsAccountId = deserializeAws_restJson1_1StringFilterList(
      output.AwsAccountId,
      context
    );
  }
  if (output.CompanyName !== undefined) {
    contents.CompanyName = deserializeAws_restJson1_1StringFilterList(
      output.CompanyName,
      context
    );
  }
  if (output.ComplianceStatus !== undefined) {
    contents.ComplianceStatus = deserializeAws_restJson1_1StringFilterList(
      output.ComplianceStatus,
      context
    );
  }
  if (output.Confidence !== undefined) {
    contents.Confidence = deserializeAws_restJson1_1NumberFilterList(
      output.Confidence,
      context
    );
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = deserializeAws_restJson1_1DateFilterList(
      output.CreatedAt,
      context
    );
  }
  if (output.Criticality !== undefined) {
    contents.Criticality = deserializeAws_restJson1_1NumberFilterList(
      output.Criticality,
      context
    );
  }
  if (output.Description !== undefined) {
    contents.Description = deserializeAws_restJson1_1StringFilterList(
      output.Description,
      context
    );
  }
  if (output.FirstObservedAt !== undefined) {
    contents.FirstObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.FirstObservedAt,
      context
    );
  }
  if (output.GeneratorId !== undefined) {
    contents.GeneratorId = deserializeAws_restJson1_1StringFilterList(
      output.GeneratorId,
      context
    );
  }
  if (output.Id !== undefined) {
    contents.Id = deserializeAws_restJson1_1StringFilterList(
      output.Id,
      context
    );
  }
  if (output.Keyword !== undefined) {
    contents.Keyword = deserializeAws_restJson1_1KeywordFilterList(
      output.Keyword,
      context
    );
  }
  if (output.LastObservedAt !== undefined) {
    contents.LastObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.LastObservedAt,
      context
    );
  }
  if (output.MalwareName !== undefined) {
    contents.MalwareName = deserializeAws_restJson1_1StringFilterList(
      output.MalwareName,
      context
    );
  }
  if (output.MalwarePath !== undefined) {
    contents.MalwarePath = deserializeAws_restJson1_1StringFilterList(
      output.MalwarePath,
      context
    );
  }
  if (output.MalwareState !== undefined) {
    contents.MalwareState = deserializeAws_restJson1_1StringFilterList(
      output.MalwareState,
      context
    );
  }
  if (output.MalwareType !== undefined) {
    contents.MalwareType = deserializeAws_restJson1_1StringFilterList(
      output.MalwareType,
      context
    );
  }
  if (output.NetworkDestinationDomain !== undefined) {
    contents.NetworkDestinationDomain = deserializeAws_restJson1_1StringFilterList(
      output.NetworkDestinationDomain,
      context
    );
  }
  if (output.NetworkDestinationIpV4 !== undefined) {
    contents.NetworkDestinationIpV4 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkDestinationIpV4,
      context
    );
  }
  if (output.NetworkDestinationIpV6 !== undefined) {
    contents.NetworkDestinationIpV6 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkDestinationIpV6,
      context
    );
  }
  if (output.NetworkDestinationPort !== undefined) {
    contents.NetworkDestinationPort = deserializeAws_restJson1_1NumberFilterList(
      output.NetworkDestinationPort,
      context
    );
  }
  if (output.NetworkDirection !== undefined) {
    contents.NetworkDirection = deserializeAws_restJson1_1StringFilterList(
      output.NetworkDirection,
      context
    );
  }
  if (output.NetworkProtocol !== undefined) {
    contents.NetworkProtocol = deserializeAws_restJson1_1StringFilterList(
      output.NetworkProtocol,
      context
    );
  }
  if (output.NetworkSourceDomain !== undefined) {
    contents.NetworkSourceDomain = deserializeAws_restJson1_1StringFilterList(
      output.NetworkSourceDomain,
      context
    );
  }
  if (output.NetworkSourceIpV4 !== undefined) {
    contents.NetworkSourceIpV4 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkSourceIpV4,
      context
    );
  }
  if (output.NetworkSourceIpV6 !== undefined) {
    contents.NetworkSourceIpV6 = deserializeAws_restJson1_1IpFilterList(
      output.NetworkSourceIpV6,
      context
    );
  }
  if (output.NetworkSourceMac !== undefined) {
    contents.NetworkSourceMac = deserializeAws_restJson1_1StringFilterList(
      output.NetworkSourceMac,
      context
    );
  }
  if (output.NetworkSourcePort !== undefined) {
    contents.NetworkSourcePort = deserializeAws_restJson1_1NumberFilterList(
      output.NetworkSourcePort,
      context
    );
  }
  if (output.NoteText !== undefined) {
    contents.NoteText = deserializeAws_restJson1_1StringFilterList(
      output.NoteText,
      context
    );
  }
  if (output.NoteUpdatedAt !== undefined) {
    contents.NoteUpdatedAt = deserializeAws_restJson1_1DateFilterList(
      output.NoteUpdatedAt,
      context
    );
  }
  if (output.NoteUpdatedBy !== undefined) {
    contents.NoteUpdatedBy = deserializeAws_restJson1_1StringFilterList(
      output.NoteUpdatedBy,
      context
    );
  }
  if (output.ProcessLaunchedAt !== undefined) {
    contents.ProcessLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ProcessLaunchedAt,
      context
    );
  }
  if (output.ProcessName !== undefined) {
    contents.ProcessName = deserializeAws_restJson1_1StringFilterList(
      output.ProcessName,
      context
    );
  }
  if (output.ProcessParentPid !== undefined) {
    contents.ProcessParentPid = deserializeAws_restJson1_1NumberFilterList(
      output.ProcessParentPid,
      context
    );
  }
  if (output.ProcessPath !== undefined) {
    contents.ProcessPath = deserializeAws_restJson1_1StringFilterList(
      output.ProcessPath,
      context
    );
  }
  if (output.ProcessPid !== undefined) {
    contents.ProcessPid = deserializeAws_restJson1_1NumberFilterList(
      output.ProcessPid,
      context
    );
  }
  if (output.ProcessTerminatedAt !== undefined) {
    contents.ProcessTerminatedAt = deserializeAws_restJson1_1DateFilterList(
      output.ProcessTerminatedAt,
      context
    );
  }
  if (output.ProductArn !== undefined) {
    contents.ProductArn = deserializeAws_restJson1_1StringFilterList(
      output.ProductArn,
      context
    );
  }
  if (output.ProductFields !== undefined) {
    contents.ProductFields = deserializeAws_restJson1_1MapFilterList(
      output.ProductFields,
      context
    );
  }
  if (output.ProductName !== undefined) {
    contents.ProductName = deserializeAws_restJson1_1StringFilterList(
      output.ProductName,
      context
    );
  }
  if (output.RecommendationText !== undefined) {
    contents.RecommendationText = deserializeAws_restJson1_1StringFilterList(
      output.RecommendationText,
      context
    );
  }
  if (output.RecordState !== undefined) {
    contents.RecordState = deserializeAws_restJson1_1StringFilterList(
      output.RecordState,
      context
    );
  }
  if (output.RelatedFindingsId !== undefined) {
    contents.RelatedFindingsId = deserializeAws_restJson1_1StringFilterList(
      output.RelatedFindingsId,
      context
    );
  }
  if (output.RelatedFindingsProductArn !== undefined) {
    contents.RelatedFindingsProductArn = deserializeAws_restJson1_1StringFilterList(
      output.RelatedFindingsProductArn,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined) {
    contents.ResourceAwsEc2InstanceIamInstanceProfileArn = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceIamInstanceProfileArn,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceImageId !== undefined) {
    contents.ResourceAwsEc2InstanceImageId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceImageId,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceIpV4Addresses !== undefined) {
    contents.ResourceAwsEc2InstanceIpV4Addresses = deserializeAws_restJson1_1IpFilterList(
      output.ResourceAwsEc2InstanceIpV4Addresses,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceIpV6Addresses !== undefined) {
    contents.ResourceAwsEc2InstanceIpV6Addresses = deserializeAws_restJson1_1IpFilterList(
      output.ResourceAwsEc2InstanceIpV6Addresses,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceKeyName !== undefined) {
    contents.ResourceAwsEc2InstanceKeyName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceKeyName,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceLaunchedAt !== undefined) {
    contents.ResourceAwsEc2InstanceLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceAwsEc2InstanceLaunchedAt,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceSubnetId !== undefined) {
    contents.ResourceAwsEc2InstanceSubnetId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceSubnetId,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceType !== undefined) {
    contents.ResourceAwsEc2InstanceType = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceType,
      context
    );
  }
  if (output.ResourceAwsEc2InstanceVpcId !== undefined) {
    contents.ResourceAwsEc2InstanceVpcId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsEc2InstanceVpcId,
      context
    );
  }
  if (output.ResourceAwsIamAccessKeyCreatedAt !== undefined) {
    contents.ResourceAwsIamAccessKeyCreatedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceAwsIamAccessKeyCreatedAt,
      context
    );
  }
  if (output.ResourceAwsIamAccessKeyStatus !== undefined) {
    contents.ResourceAwsIamAccessKeyStatus = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsIamAccessKeyStatus,
      context
    );
  }
  if (output.ResourceAwsIamAccessKeyUserName !== undefined) {
    contents.ResourceAwsIamAccessKeyUserName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsIamAccessKeyUserName,
      context
    );
  }
  if (output.ResourceAwsS3BucketOwnerId !== undefined) {
    contents.ResourceAwsS3BucketOwnerId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsS3BucketOwnerId,
      context
    );
  }
  if (output.ResourceAwsS3BucketOwnerName !== undefined) {
    contents.ResourceAwsS3BucketOwnerName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceAwsS3BucketOwnerName,
      context
    );
  }
  if (output.ResourceContainerImageId !== undefined) {
    contents.ResourceContainerImageId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerImageId,
      context
    );
  }
  if (output.ResourceContainerImageName !== undefined) {
    contents.ResourceContainerImageName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerImageName,
      context
    );
  }
  if (output.ResourceContainerLaunchedAt !== undefined) {
    contents.ResourceContainerLaunchedAt = deserializeAws_restJson1_1DateFilterList(
      output.ResourceContainerLaunchedAt,
      context
    );
  }
  if (output.ResourceContainerName !== undefined) {
    contents.ResourceContainerName = deserializeAws_restJson1_1StringFilterList(
      output.ResourceContainerName,
      context
    );
  }
  if (output.ResourceDetailsOther !== undefined) {
    contents.ResourceDetailsOther = deserializeAws_restJson1_1MapFilterList(
      output.ResourceDetailsOther,
      context
    );
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = deserializeAws_restJson1_1StringFilterList(
      output.ResourceId,
      context
    );
  }
  if (output.ResourcePartition !== undefined) {
    contents.ResourcePartition = deserializeAws_restJson1_1StringFilterList(
      output.ResourcePartition,
      context
    );
  }
  if (output.ResourceRegion !== undefined) {
    contents.ResourceRegion = deserializeAws_restJson1_1StringFilterList(
      output.ResourceRegion,
      context
    );
  }
  if (output.ResourceTags !== undefined) {
    contents.ResourceTags = deserializeAws_restJson1_1MapFilterList(
      output.ResourceTags,
      context
    );
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = deserializeAws_restJson1_1StringFilterList(
      output.ResourceType,
      context
    );
  }
  if (output.SeverityLabel !== undefined) {
    contents.SeverityLabel = deserializeAws_restJson1_1StringFilterList(
      output.SeverityLabel,
      context
    );
  }
  if (output.SeverityNormalized !== undefined) {
    contents.SeverityNormalized = deserializeAws_restJson1_1NumberFilterList(
      output.SeverityNormalized,
      context
    );
  }
  if (output.SeverityProduct !== undefined) {
    contents.SeverityProduct = deserializeAws_restJson1_1NumberFilterList(
      output.SeverityProduct,
      context
    );
  }
  if (output.SourceUrl !== undefined) {
    contents.SourceUrl = deserializeAws_restJson1_1StringFilterList(
      output.SourceUrl,
      context
    );
  }
  if (output.ThreatIntelIndicatorCategory !== undefined) {
    contents.ThreatIntelIndicatorCategory = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorCategory,
      context
    );
  }
  if (output.ThreatIntelIndicatorLastObservedAt !== undefined) {
    contents.ThreatIntelIndicatorLastObservedAt = deserializeAws_restJson1_1DateFilterList(
      output.ThreatIntelIndicatorLastObservedAt,
      context
    );
  }
  if (output.ThreatIntelIndicatorSource !== undefined) {
    contents.ThreatIntelIndicatorSource = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorSource,
      context
    );
  }
  if (output.ThreatIntelIndicatorSourceUrl !== undefined) {
    contents.ThreatIntelIndicatorSourceUrl = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorSourceUrl,
      context
    );
  }
  if (output.ThreatIntelIndicatorType !== undefined) {
    contents.ThreatIntelIndicatorType = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorType,
      context
    );
  }
  if (output.ThreatIntelIndicatorValue !== undefined) {
    contents.ThreatIntelIndicatorValue = deserializeAws_restJson1_1StringFilterList(
      output.ThreatIntelIndicatorValue,
      context
    );
  }
  if (output.Title !== undefined) {
    contents.Title = deserializeAws_restJson1_1StringFilterList(
      output.Title,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = deserializeAws_restJson1_1StringFilterList(
      output.Type,
      context
    );
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = deserializeAws_restJson1_1DateFilterList(
      output.UpdatedAt,
      context
    );
  }
  if (output.UserDefinedFields !== undefined) {
    contents.UserDefinedFields = deserializeAws_restJson1_1MapFilterList(
      output.UserDefinedFields,
      context
    );
  }
  if (output.VerificationState !== undefined) {
    contents.VerificationState = deserializeAws_restJson1_1StringFilterList(
      output.VerificationState,
      context
    );
  }
  if (output.WorkflowState !== undefined) {
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
  if (output.Status !== undefined) {
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
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  if (output.ImageName !== undefined) {
    contents.ImageName = output.ImageName;
  }
  if (output.LaunchedAt !== undefined) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.Name !== undefined) {
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
  if (output.DateRange !== undefined) {
    contents.DateRange = deserializeAws_restJson1_1DateRange(
      output.DateRange,
      context
    );
  }
  if (output.End !== undefined) {
    contents.End = output.End;
  }
  if (output.Start !== undefined) {
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
  if (output.Unit !== undefined) {
    contents.Unit = output.Unit;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1FieldMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
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
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined) {
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
  if (output.Filters !== undefined) {
    contents.Filters = deserializeAws_restJson1_1AwsSecurityFindingFilters(
      output.Filters,
      context
    );
  }
  if (output.GroupByAttribute !== undefined) {
    contents.GroupByAttribute = output.GroupByAttribute;
  }
  if (output.InsightArn !== undefined) {
    contents.InsightArn = output.InsightArn;
  }
  if (output.Name !== undefined) {
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
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.GroupByAttributeValue !== undefined) {
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
  if (output.GroupByAttribute !== undefined) {
    contents.GroupByAttribute = output.GroupByAttribute;
  }
  if (output.InsightArn !== undefined) {
    contents.InsightArn = output.InsightArn;
  }
  if (output.ResultValues !== undefined) {
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
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.InvitationId !== undefined) {
    contents.InvitationId = output.InvitationId;
  }
  if (output.InvitedAt !== undefined) {
    contents.InvitedAt = new Date(output.InvitedAt);
  }
  if (output.MemberStatus !== undefined) {
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
  if (output.Cidr !== undefined) {
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
  if (output.Value !== undefined) {
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
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Path !== undefined) {
    contents.Path = output.Path;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.Type !== undefined) {
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
  if (output.Comparison !== undefined) {
    contents.Comparison = output.Comparison;
  }
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
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
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.Email !== undefined) {
    contents.Email = output.Email;
  }
  if (output.InvitedAt !== undefined) {
    contents.InvitedAt = new Date(output.InvitedAt);
  }
  if (output.MasterId !== undefined) {
    contents.MasterId = output.MasterId;
  }
  if (output.MemberStatus !== undefined) {
    contents.MemberStatus = output.MemberStatus;
  }
  if (output.UpdatedAt !== undefined) {
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
  if (output.DestinationDomain !== undefined) {
    contents.DestinationDomain = output.DestinationDomain;
  }
  if (output.DestinationIpV4 !== undefined) {
    contents.DestinationIpV4 = output.DestinationIpV4;
  }
  if (output.DestinationIpV6 !== undefined) {
    contents.DestinationIpV6 = output.DestinationIpV6;
  }
  if (output.DestinationPort !== undefined) {
    contents.DestinationPort = output.DestinationPort;
  }
  if (output.Direction !== undefined) {
    contents.Direction = output.Direction;
  }
  if (output.Protocol !== undefined) {
    contents.Protocol = output.Protocol;
  }
  if (output.SourceDomain !== undefined) {
    contents.SourceDomain = output.SourceDomain;
  }
  if (output.SourceIpV4 !== undefined) {
    contents.SourceIpV4 = output.SourceIpV4;
  }
  if (output.SourceIpV6 !== undefined) {
    contents.SourceIpV6 = output.SourceIpV6;
  }
  if (output.SourceMac !== undefined) {
    contents.SourceMac = output.SourceMac;
  }
  if (output.SourcePort !== undefined) {
    contents.SourcePort = output.SourcePort;
  }
  return contents;
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
  if (output.Text !== undefined) {
    contents.Text = output.Text;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = output.UpdatedAt;
  }
  if (output.UpdatedBy !== undefined) {
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
  if (output.Eq !== undefined) {
    contents.Eq = output.Eq;
  }
  if (output.Gte !== undefined) {
    contents.Gte = output.Gte;
  }
  if (output.Lte !== undefined) {
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
  if (output.LaunchedAt !== undefined) {
    contents.LaunchedAt = output.LaunchedAt;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ParentPid !== undefined) {
    contents.ParentPid = output.ParentPid;
  }
  if (output.Path !== undefined) {
    contents.Path = output.Path;
  }
  if (output.Pid !== undefined) {
    contents.Pid = output.Pid;
  }
  if (output.TerminatedAt !== undefined) {
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
  if (output.ActivationUrl !== undefined) {
    contents.ActivationUrl = output.ActivationUrl;
  }
  if (output.Categories !== undefined) {
    contents.Categories = deserializeAws_restJson1_1CategoryList(
      output.Categories,
      context
    );
  }
  if (output.CompanyName !== undefined) {
    contents.CompanyName = output.CompanyName;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.MarketplaceUrl !== undefined) {
    contents.MarketplaceUrl = output.MarketplaceUrl;
  }
  if (output.ProductArn !== undefined) {
    contents.ProductArn = output.ProductArn;
  }
  if (output.ProductName !== undefined) {
    contents.ProductName = output.ProductName;
  }
  if (output.ProductSubscriptionResourcePolicy !== undefined) {
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
  if (output.Text !== undefined) {
    contents.Text = output.Text;
  }
  if (output.Url !== undefined) {
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
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.ProductArn !== undefined) {
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
  if (output.Recommendation !== undefined) {
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
  if (output.Details !== undefined) {
    contents.Details = deserializeAws_restJson1_1ResourceDetails(
      output.Details,
      context
    );
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Partition !== undefined) {
    contents.Partition = output.Partition;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1FieldMap(output.Tags, context);
  }
  if (output.Type !== undefined) {
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
    AwsEc2Instance: undefined,
    AwsIamAccessKey: undefined,
    AwsS3Bucket: undefined,
    Container: undefined,
    Other: undefined
  };
  if (output.AwsEc2Instance !== undefined) {
    contents.AwsEc2Instance = deserializeAws_restJson1_1AwsEc2InstanceDetails(
      output.AwsEc2Instance,
      context
    );
  }
  if (output.AwsIamAccessKey !== undefined) {
    contents.AwsIamAccessKey = deserializeAws_restJson1_1AwsIamAccessKeyDetails(
      output.AwsIamAccessKey,
      context
    );
  }
  if (output.AwsS3Bucket !== undefined) {
    contents.AwsS3Bucket = deserializeAws_restJson1_1AwsS3BucketDetails(
      output.AwsS3Bucket,
      context
    );
  }
  if (output.Container !== undefined) {
    contents.Container = deserializeAws_restJson1_1ContainerDetails(
      output.Container,
      context
    );
  }
  if (output.Other !== undefined) {
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
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.ProcessingResult !== undefined) {
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

const deserializeAws_restJson1_1Severity = (
  output: any,
  context: __SerdeContext
): Severity => {
  let contents: any = {
    __type: "Severity",
    Normalized: undefined,
    Product: undefined
  };
  if (output.Normalized !== undefined) {
    contents.Normalized = output.Normalized;
  }
  if (output.Product !== undefined) {
    contents.Product = output.Product;
  }
  return contents;
};

const deserializeAws_restJson1_1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
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
  if (output.StandardsArn !== undefined) {
    contents.StandardsArn = output.StandardsArn;
  }
  if (output.StandardsInput !== undefined) {
    contents.StandardsInput = deserializeAws_restJson1_1StandardsInputParameterMap(
      output.StandardsInput,
      context
    );
  }
  if (output.StandardsStatus !== undefined) {
    contents.StandardsStatus = output.StandardsStatus;
  }
  if (output.StandardsSubscriptionArn !== undefined) {
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
  if (output.Comparison !== undefined) {
    contents.Comparison = output.Comparison;
  }
  if (output.Value !== undefined) {
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
  let mapParams: any = {};
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
  if (output.Category !== undefined) {
    contents.Category = output.Category;
  }
  if (output.LastObservedAt !== undefined) {
    contents.LastObservedAt = output.LastObservedAt;
  }
  if (output.Source !== undefined) {
    contents.Source = output.Source;
  }
  if (output.SourceUrl !== undefined) {
    contents.SourceUrl = output.SourceUrl;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined) {
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
  return context.streamCollector(streamBody) || new Uint8Array();
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
