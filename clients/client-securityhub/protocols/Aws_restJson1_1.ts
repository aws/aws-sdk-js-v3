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

export const serializeAws_restJson1_1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1BatchDisableStandardsCommand = async (
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1BatchEnableStandardsCommand = async (
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1BatchImportFindingsCommand = async (
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateActionTargetCommand = async (
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateInsightCommand = async (
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteActionTargetCommand = async (
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeActionTargetsCommand = async (
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/accounts";
  const query: any = {
    ...(input.HubArn !== undefined && { HubArn: input.HubArn })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeProductsCommand = async (
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/products";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeStandardsControlsCommand = async (
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DisableImportFindingsForProductCommand = async (
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DisableSecurityHubCommand = async (
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/accounts";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/master/disassociate";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1EnableImportFindingsForProductCommand = async (
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/productSubscriptions";
  let body: any;
  const bodyParams: any = {};
  if (input.ProductArn !== undefined) {
    bodyParams["ProductArn"] = input.ProductArn;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1EnableSecurityHubCommand = async (
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/accounts";
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetInsightResultsCommand = async (
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/invitations/count";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/master";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListEnabledProductsForImportCommand = async (
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/productSubscriptions";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/invitations";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/members";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OnlyAssociated !== undefined && {
      OnlyAssociated: input.OnlyAssociated.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateActionTargetCommand = async (
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateInsightCommand = async (
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateStandardsControlCommand = async (
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
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
};

const deserializeAws_restJson1_1AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1BatchDisableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
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
};

const deserializeAws_restJson1_1BatchDisableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1BatchEnableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
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
};

const deserializeAws_restJson1_1BatchEnableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1BatchImportFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
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
};

const deserializeAws_restJson1_1BatchImportFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1CreateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
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

export const deserializeAws_restJson1_1CreateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
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

export const deserializeAws_restJson1_1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
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

export const deserializeAws_restJson1_1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeActionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeActionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeStandardsControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeStandardsControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DisableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DisableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1EnableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
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
};

const deserializeAws_restJson1_1EnableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
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

export const deserializeAws_restJson1_1EnableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
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
};

const deserializeAws_restJson1_1EnableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
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

export const deserializeAws_restJson1_1GetEnabledStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetEnabledStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1GetInsightResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetInsightResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1ListEnabledProductsForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListEnabledProductsForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInsightCommandError(output, context);
  }
  const contents: UpdateInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInsightResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateStandardsControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateStandardsControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidAccessExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: InvalidAccessException = {
    name: "InvalidAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
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
  input: AccountDetails[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AccountDetails(entry, context)
  );
};

const serializeAws_restJson1_1AccountIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
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
  input: AvailabilityZone[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AvailabilityZone(entry, context)
  );
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
  input: AwsCloudFrontDistributionOriginItem[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AwsCloudFrontDistributionOriginItem(entry, context)
  );
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
  input: AwsLambdaFunctionLayer[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AwsLambdaFunctionLayer(entry, context)
  );
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
  input: AwsSecurityFinding[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AwsSecurityFinding(entry, context)
  );
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
  input: AwsSnsTopicSubscription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AwsSnsTopicSubscription(entry, context)
  );
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
  input: DateFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1DateFilter(entry, context));
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
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
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
  input: IpFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1IpFilter(entry, context));
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
  input: KeywordFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1KeywordFilter(entry, context)
  );
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
  input: Malware[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Malware(entry, context));
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
  input: MapFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1MapFilter(entry, context));
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
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
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
  input: NumberFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1NumberFilter(entry, context)
  );
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
  input: RelatedFinding[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1RelatedFinding(entry, context)
  );
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
  input: Resource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Resource(entry, context));
};

const serializeAws_restJson1_1SecurityGroups = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
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
  input: SortCriterion[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1SortCriterion(entry, context)
  );
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
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1StandardsSubscriptionArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
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
  input: StandardsSubscriptionRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1StandardsSubscriptionRequest(entry, context)
  );
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
  input: StringFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1StringFilter(entry, context)
  );
};

const serializeAws_restJson1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
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
  input: ThreatIntelIndicator[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1ThreatIntelIndicator(entry, context)
  );
};

const serializeAws_restJson1_1TypeList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_restJson1_1ActionTarget = (
  output: any,
  context: __SerdeContext
): ActionTarget => {
  return {
    __type: "ActionTarget",
    ActionTargetArn:
      output.ActionTargetArn !== undefined && output.ActionTargetArn !== null
        ? output.ActionTargetArn
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ActionTargetList = (
  output: any,
  context: __SerdeContext
): ActionTarget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ActionTarget(entry, context)
  );
};

const deserializeAws_restJson1_1AvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  return {
    __type: "AvailabilityZone",
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined,
    ZoneName:
      output.ZoneName !== undefined && output.ZoneName !== null
        ? output.ZoneName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AvailabilityZones = (
  output: any,
  context: __SerdeContext
): AvailabilityZone[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AvailabilityZone(entry, context)
  );
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDetails => {
  return {
    __type: "AwsCloudFrontDistributionDetails",
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    ETag:
      output.ETag !== undefined && output.ETag !== null
        ? output.ETag
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? output.LastModifiedTime
        : undefined,
    Logging:
      output.Logging !== undefined && output.Logging !== null
        ? deserializeAws_restJson1_1AwsCloudFrontDistributionLogging(
            output.Logging,
            context
          )
        : undefined,
    Origins:
      output.Origins !== undefined && output.Origins !== null
        ? deserializeAws_restJson1_1AwsCloudFrontDistributionOrigins(
            output.Origins,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    WebAclId:
      output.WebAclId !== undefined && output.WebAclId !== null
        ? output.WebAclId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  return {
    __type: "AwsCloudFrontDistributionLogging",
    Bucket:
      output.Bucket !== undefined && output.Bucket !== null
        ? output.Bucket
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    IncludeCookies:
      output.IncludeCookies !== undefined && output.IncludeCookies !== null
        ? output.IncludeCookies
        : undefined,
    Prefix:
      output.Prefix !== undefined && output.Prefix !== null
        ? output.Prefix
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItem = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem => {
  return {
    __type: "AwsCloudFrontDistributionOriginItem",
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    OriginPath:
      output.OriginPath !== undefined && output.OriginPath !== null
        ? output.OriginPath
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem[] => {
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
  return {
    __type: "AwsCloudFrontDistributionOrigins",
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1_1AwsCloudFrontDistributionOriginItemList(
            output.Items,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsEc2InstanceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceDetails => {
  return {
    __type: "AwsEc2InstanceDetails",
    IamInstanceProfileArn:
      output.IamInstanceProfileArn !== undefined &&
      output.IamInstanceProfileArn !== null
        ? output.IamInstanceProfileArn
        : undefined,
    ImageId:
      output.ImageId !== undefined && output.ImageId !== null
        ? output.ImageId
        : undefined,
    IpV4Addresses:
      output.IpV4Addresses !== undefined && output.IpV4Addresses !== null
        ? deserializeAws_restJson1_1StringList(output.IpV4Addresses, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
        ? deserializeAws_restJson1_1StringList(output.IpV6Addresses, context)
        : undefined,
    KeyName:
      output.KeyName !== undefined && output.KeyName !== null
        ? output.KeyName
        : undefined,
    LaunchedAt:
      output.LaunchedAt !== undefined && output.LaunchedAt !== null
        ? output.LaunchedAt
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsElbv2LoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerDetails => {
  return {
    __type: "AwsElbv2LoadBalancerDetails",
    AvailabilityZones:
      output.AvailabilityZones !== undefined &&
      output.AvailabilityZones !== null
        ? deserializeAws_restJson1_1AvailabilityZones(
            output.AvailabilityZones,
            context
          )
        : undefined,
    CanonicalHostedZoneId:
      output.CanonicalHostedZoneId !== undefined &&
      output.CanonicalHostedZoneId !== null
        ? output.CanonicalHostedZoneId
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? output.CreatedTime
        : undefined,
    DNSName:
      output.DNSName !== undefined && output.DNSName !== null
        ? output.DNSName
        : undefined,
    IpAddressType:
      output.IpAddressType !== undefined && output.IpAddressType !== null
        ? output.IpAddressType
        : undefined,
    Scheme:
      output.Scheme !== undefined && output.Scheme !== null
        ? output.Scheme
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_restJson1_1SecurityGroups(
            output.SecurityGroups,
            context
          )
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1_1LoadBalancerState(output.State, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  return {
    __type: "AwsIamAccessKeyDetails",
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? output.CreatedAt
        : undefined,
    PrincipalId:
      output.PrincipalId !== undefined && output.PrincipalId !== null
        ? output.PrincipalId
        : undefined,
    PrincipalName:
      output.PrincipalName !== undefined && output.PrincipalName !== null
        ? output.PrincipalName
        : undefined,
    PrincipalType:
      output.PrincipalType !== undefined && output.PrincipalType !== null
        ? output.PrincipalType
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    UserName:
      output.UserName !== undefined && output.UserName !== null
        ? output.UserName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsIamRoleDetails = (
  output: any,
  context: __SerdeContext
): AwsIamRoleDetails => {
  return {
    __type: "AwsIamRoleDetails",
    AssumeRolePolicyDocument:
      output.AssumeRolePolicyDocument !== undefined &&
      output.AssumeRolePolicyDocument !== null
        ? output.AssumeRolePolicyDocument
        : undefined,
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? output.CreateDate
        : undefined,
    MaxSessionDuration:
      output.MaxSessionDuration !== undefined &&
      output.MaxSessionDuration !== null
        ? output.MaxSessionDuration
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    RoleId:
      output.RoleId !== undefined && output.RoleId !== null
        ? output.RoleId
        : undefined,
    RoleName:
      output.RoleName !== undefined && output.RoleName !== null
        ? output.RoleName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsKmsKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsKmsKeyDetails => {
  return {
    __type: "AwsKmsKeyDetails",
    AWSAccountId:
      output.AWSAccountId !== undefined && output.AWSAccountId !== null
        ? output.AWSAccountId
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? output.CreationDate
        : undefined,
    KeyId:
      output.KeyId !== undefined && output.KeyId !== null
        ? output.KeyId
        : undefined,
    KeyManager:
      output.KeyManager !== undefined && output.KeyManager !== null
        ? output.KeyManager
        : undefined,
    KeyState:
      output.KeyState !== undefined && output.KeyState !== null
        ? output.KeyState
        : undefined,
    Origin:
      output.Origin !== undefined && output.Origin !== null
        ? output.Origin
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionCode = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionCode => {
  return {
    __type: "AwsLambdaFunctionCode",
    S3Bucket:
      output.S3Bucket !== undefined && output.S3Bucket !== null
        ? output.S3Bucket
        : undefined,
    S3Key:
      output.S3Key !== undefined && output.S3Key !== null
        ? output.S3Key
        : undefined,
    S3ObjectVersion:
      output.S3ObjectVersion !== undefined && output.S3ObjectVersion !== null
        ? output.S3ObjectVersion
        : undefined,
    ZipFile:
      output.ZipFile !== undefined && output.ZipFile !== null
        ? output.ZipFile
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  return {
    __type: "AwsLambdaFunctionDeadLetterConfig",
    TargetArn:
      output.TargetArn !== undefined && output.TargetArn !== null
        ? output.TargetArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  return {
    __type: "AwsLambdaFunctionDetails",
    Code:
      output.Code !== undefined && output.Code !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionCode(output.Code, context)
        : undefined,
    CodeSha256:
      output.CodeSha256 !== undefined && output.CodeSha256 !== null
        ? output.CodeSha256
        : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionDeadLetterConfig(
            output.DeadLetterConfig,
            context
          )
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionEnvironment(
            output.Environment,
            context
          )
        : undefined,
    FunctionName:
      output.FunctionName !== undefined && output.FunctionName !== null
        ? output.FunctionName
        : undefined,
    Handler:
      output.Handler !== undefined && output.Handler !== null
        ? output.Handler
        : undefined,
    KmsKeyArn:
      output.KmsKeyArn !== undefined && output.KmsKeyArn !== null
        ? output.KmsKeyArn
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? output.LastModified
        : undefined,
    Layers:
      output.Layers !== undefined && output.Layers !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionLayerList(
            output.Layers,
            context
          )
        : undefined,
    MasterArn:
      output.MasterArn !== undefined && output.MasterArn !== null
        ? output.MasterArn
        : undefined,
    MemorySize:
      output.MemorySize !== undefined && output.MemorySize !== null
        ? output.MemorySize
        : undefined,
    RevisionId:
      output.RevisionId !== undefined && output.RevisionId !== null
        ? output.RevisionId
        : undefined,
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    Runtime:
      output.Runtime !== undefined && output.Runtime !== null
        ? output.Runtime
        : undefined,
    Timeout:
      output.Timeout !== undefined && output.Timeout !== null
        ? output.Timeout
        : undefined,
    TracingConfig:
      output.TracingConfig !== undefined && output.TracingConfig !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionTracingConfig(
            output.TracingConfig,
            context
          )
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionVpcConfig(
            output.VpcConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionEnvironment = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironment => {
  return {
    __type: "AwsLambdaFunctionEnvironment",
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionEnvironmentError(
            output.Error,
            context
          )
        : undefined,
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1_1FieldMap(output.Variables, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionEnvironmentError = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironmentError => {
  return {
    __type: "AwsLambdaFunctionEnvironmentError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  return {
    __type: "AwsLambdaFunctionLayer",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CodeSize:
      output.CodeSize !== undefined && output.CodeSize !== null
        ? output.CodeSize
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionLayerList = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsLambdaFunctionLayer(entry, context)
  );
};

const deserializeAws_restJson1_1AwsLambdaFunctionTracingConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionTracingConfig => {
  return {
    __type: "AwsLambdaFunctionTracingConfig",
    Mode:
      output.Mode !== undefined && output.Mode !== null
        ? output.Mode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsLambdaFunctionVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionVpcConfig => {
  return {
    __type: "AwsLambdaFunctionVpcConfig",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1_1NonEmptyStringList(
            output.SecurityGroupIds,
            context
          )
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1_1NonEmptyStringList(
            output.SubnetIds,
            context
          )
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsS3BucketDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketDetails => {
  return {
    __type: "AwsS3BucketDetails",
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    OwnerName:
      output.OwnerName !== undefined && output.OwnerName !== null
        ? output.OwnerName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsSecurityFinding = (
  output: any,
  context: __SerdeContext
): AwsSecurityFinding => {
  return {
    __type: "AwsSecurityFinding",
    AwsAccountId:
      output.AwsAccountId !== undefined && output.AwsAccountId !== null
        ? output.AwsAccountId
        : undefined,
    Compliance:
      output.Compliance !== undefined && output.Compliance !== null
        ? deserializeAws_restJson1_1Compliance(output.Compliance, context)
        : undefined,
    Confidence:
      output.Confidence !== undefined && output.Confidence !== null
        ? output.Confidence
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? output.CreatedAt
        : undefined,
    Criticality:
      output.Criticality !== undefined && output.Criticality !== null
        ? output.Criticality
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null
        ? output.FirstObservedAt
        : undefined,
    GeneratorId:
      output.GeneratorId !== undefined && output.GeneratorId !== null
        ? output.GeneratorId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null
        ? output.LastObservedAt
        : undefined,
    Malware:
      output.Malware !== undefined && output.Malware !== null
        ? deserializeAws_restJson1_1MalwareList(output.Malware, context)
        : undefined,
    Network:
      output.Network !== undefined && output.Network !== null
        ? deserializeAws_restJson1_1Network(output.Network, context)
        : undefined,
    Note:
      output.Note !== undefined && output.Note !== null
        ? deserializeAws_restJson1_1Note(output.Note, context)
        : undefined,
    Process:
      output.Process !== undefined && output.Process !== null
        ? deserializeAws_restJson1_1ProcessDetails(output.Process, context)
        : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? output.ProductArn
        : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1_1FieldMap(output.ProductFields, context)
        : undefined,
    RecordState:
      output.RecordState !== undefined && output.RecordState !== null
        ? output.RecordState
        : undefined,
    RelatedFindings:
      output.RelatedFindings !== undefined && output.RelatedFindings !== null
        ? deserializeAws_restJson1_1RelatedFindingList(
            output.RelatedFindings,
            context
          )
        : undefined,
    Remediation:
      output.Remediation !== undefined && output.Remediation !== null
        ? deserializeAws_restJson1_1Remediation(output.Remediation, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1_1ResourceList(output.Resources, context)
        : undefined,
    SchemaVersion:
      output.SchemaVersion !== undefined && output.SchemaVersion !== null
        ? output.SchemaVersion
        : undefined,
    Severity:
      output.Severity !== undefined && output.Severity !== null
        ? deserializeAws_restJson1_1Severity(output.Severity, context)
        : undefined,
    SourceUrl:
      output.SourceUrl !== undefined && output.SourceUrl !== null
        ? output.SourceUrl
        : undefined,
    ThreatIntelIndicators:
      output.ThreatIntelIndicators !== undefined &&
      output.ThreatIntelIndicators !== null
        ? deserializeAws_restJson1_1ThreatIntelIndicatorList(
            output.ThreatIntelIndicators,
            context
          )
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? output.Title
        : undefined,
    Types:
      output.Types !== undefined && output.Types !== null
        ? deserializeAws_restJson1_1TypeList(output.Types, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? output.UpdatedAt
        : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined &&
      output.UserDefinedFields !== null
        ? deserializeAws_restJson1_1FieldMap(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState !== undefined &&
      output.VerificationState !== null
        ? output.VerificationState
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null
        ? output.WorkflowState
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsSecurityFindingFilters = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingFilters => {
  return {
    __type: "AwsSecurityFindingFilters",
    AwsAccountId:
      output.AwsAccountId !== undefined && output.AwsAccountId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.AwsAccountId,
            context
          )
        : undefined,
    CompanyName:
      output.CompanyName !== undefined && output.CompanyName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.CompanyName,
            context
          )
        : undefined,
    ComplianceStatus:
      output.ComplianceStatus !== undefined && output.ComplianceStatus !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ComplianceStatus,
            context
          )
        : undefined,
    Confidence:
      output.Confidence !== undefined && output.Confidence !== null
        ? deserializeAws_restJson1_1NumberFilterList(output.Confidence, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(output.CreatedAt, context)
        : undefined,
    Criticality:
      output.Criticality !== undefined && output.Criticality !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.Criticality,
            context
          )
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.Description,
            context
          )
        : undefined,
    FirstObservedAt:
      output.FirstObservedAt !== undefined && output.FirstObservedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.FirstObservedAt,
            context
          )
        : undefined,
    GeneratorId:
      output.GeneratorId !== undefined && output.GeneratorId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.GeneratorId,
            context
          )
        : undefined,
    Id:
      output.Id !== undefined && output.Id !== null
        ? deserializeAws_restJson1_1StringFilterList(output.Id, context)
        : undefined,
    Keyword:
      output.Keyword !== undefined && output.Keyword !== null
        ? deserializeAws_restJson1_1KeywordFilterList(output.Keyword, context)
        : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.LastObservedAt,
            context
          )
        : undefined,
    MalwareName:
      output.MalwareName !== undefined && output.MalwareName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.MalwareName,
            context
          )
        : undefined,
    MalwarePath:
      output.MalwarePath !== undefined && output.MalwarePath !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.MalwarePath,
            context
          )
        : undefined,
    MalwareState:
      output.MalwareState !== undefined && output.MalwareState !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.MalwareState,
            context
          )
        : undefined,
    MalwareType:
      output.MalwareType !== undefined && output.MalwareType !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.MalwareType,
            context
          )
        : undefined,
    NetworkDestinationDomain:
      output.NetworkDestinationDomain !== undefined &&
      output.NetworkDestinationDomain !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NetworkDestinationDomain,
            context
          )
        : undefined,
    NetworkDestinationIpV4:
      output.NetworkDestinationIpV4 !== undefined &&
      output.NetworkDestinationIpV4 !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.NetworkDestinationIpV4,
            context
          )
        : undefined,
    NetworkDestinationIpV6:
      output.NetworkDestinationIpV6 !== undefined &&
      output.NetworkDestinationIpV6 !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.NetworkDestinationIpV6,
            context
          )
        : undefined,
    NetworkDestinationPort:
      output.NetworkDestinationPort !== undefined &&
      output.NetworkDestinationPort !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.NetworkDestinationPort,
            context
          )
        : undefined,
    NetworkDirection:
      output.NetworkDirection !== undefined && output.NetworkDirection !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NetworkDirection,
            context
          )
        : undefined,
    NetworkProtocol:
      output.NetworkProtocol !== undefined && output.NetworkProtocol !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NetworkProtocol,
            context
          )
        : undefined,
    NetworkSourceDomain:
      output.NetworkSourceDomain !== undefined &&
      output.NetworkSourceDomain !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NetworkSourceDomain,
            context
          )
        : undefined,
    NetworkSourceIpV4:
      output.NetworkSourceIpV4 !== undefined &&
      output.NetworkSourceIpV4 !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.NetworkSourceIpV4,
            context
          )
        : undefined,
    NetworkSourceIpV6:
      output.NetworkSourceIpV6 !== undefined &&
      output.NetworkSourceIpV6 !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.NetworkSourceIpV6,
            context
          )
        : undefined,
    NetworkSourceMac:
      output.NetworkSourceMac !== undefined && output.NetworkSourceMac !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NetworkSourceMac,
            context
          )
        : undefined,
    NetworkSourcePort:
      output.NetworkSourcePort !== undefined &&
      output.NetworkSourcePort !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.NetworkSourcePort,
            context
          )
        : undefined,
    NoteText:
      output.NoteText !== undefined && output.NoteText !== null
        ? deserializeAws_restJson1_1StringFilterList(output.NoteText, context)
        : undefined,
    NoteUpdatedAt:
      output.NoteUpdatedAt !== undefined && output.NoteUpdatedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.NoteUpdatedAt,
            context
          )
        : undefined,
    NoteUpdatedBy:
      output.NoteUpdatedBy !== undefined && output.NoteUpdatedBy !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.NoteUpdatedBy,
            context
          )
        : undefined,
    ProcessLaunchedAt:
      output.ProcessLaunchedAt !== undefined &&
      output.ProcessLaunchedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ProcessLaunchedAt,
            context
          )
        : undefined,
    ProcessName:
      output.ProcessName !== undefined && output.ProcessName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ProcessName,
            context
          )
        : undefined,
    ProcessParentPid:
      output.ProcessParentPid !== undefined && output.ProcessParentPid !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.ProcessParentPid,
            context
          )
        : undefined,
    ProcessPath:
      output.ProcessPath !== undefined && output.ProcessPath !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ProcessPath,
            context
          )
        : undefined,
    ProcessPid:
      output.ProcessPid !== undefined && output.ProcessPid !== null
        ? deserializeAws_restJson1_1NumberFilterList(output.ProcessPid, context)
        : undefined,
    ProcessTerminatedAt:
      output.ProcessTerminatedAt !== undefined &&
      output.ProcessTerminatedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ProcessTerminatedAt,
            context
          )
        : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? deserializeAws_restJson1_1StringFilterList(output.ProductArn, context)
        : undefined,
    ProductFields:
      output.ProductFields !== undefined && output.ProductFields !== null
        ? deserializeAws_restJson1_1MapFilterList(output.ProductFields, context)
        : undefined,
    ProductName:
      output.ProductName !== undefined && output.ProductName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ProductName,
            context
          )
        : undefined,
    RecommendationText:
      output.RecommendationText !== undefined &&
      output.RecommendationText !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.RecommendationText,
            context
          )
        : undefined,
    RecordState:
      output.RecordState !== undefined && output.RecordState !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.RecordState,
            context
          )
        : undefined,
    RelatedFindingsId:
      output.RelatedFindingsId !== undefined &&
      output.RelatedFindingsId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.RelatedFindingsId,
            context
          )
        : undefined,
    RelatedFindingsProductArn:
      output.RelatedFindingsProductArn !== undefined &&
      output.RelatedFindingsProductArn !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.RelatedFindingsProductArn,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceIamInstanceProfileArn:
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
      output.ResourceAwsEc2InstanceIamInstanceProfileArn !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceIamInstanceProfileArn,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceImageId:
      output.ResourceAwsEc2InstanceImageId !== undefined &&
      output.ResourceAwsEc2InstanceImageId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceImageId,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceIpV4Addresses:
      output.ResourceAwsEc2InstanceIpV4Addresses !== undefined &&
      output.ResourceAwsEc2InstanceIpV4Addresses !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.ResourceAwsEc2InstanceIpV4Addresses,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceIpV6Addresses:
      output.ResourceAwsEc2InstanceIpV6Addresses !== undefined &&
      output.ResourceAwsEc2InstanceIpV6Addresses !== null
        ? deserializeAws_restJson1_1IpFilterList(
            output.ResourceAwsEc2InstanceIpV6Addresses,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceKeyName:
      output.ResourceAwsEc2InstanceKeyName !== undefined &&
      output.ResourceAwsEc2InstanceKeyName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceKeyName,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceLaunchedAt:
      output.ResourceAwsEc2InstanceLaunchedAt !== undefined &&
      output.ResourceAwsEc2InstanceLaunchedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ResourceAwsEc2InstanceLaunchedAt,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceSubnetId:
      output.ResourceAwsEc2InstanceSubnetId !== undefined &&
      output.ResourceAwsEc2InstanceSubnetId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceSubnetId,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceType:
      output.ResourceAwsEc2InstanceType !== undefined &&
      output.ResourceAwsEc2InstanceType !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceType,
            context
          )
        : undefined,
    ResourceAwsEc2InstanceVpcId:
      output.ResourceAwsEc2InstanceVpcId !== undefined &&
      output.ResourceAwsEc2InstanceVpcId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsEc2InstanceVpcId,
            context
          )
        : undefined,
    ResourceAwsIamAccessKeyCreatedAt:
      output.ResourceAwsIamAccessKeyCreatedAt !== undefined &&
      output.ResourceAwsIamAccessKeyCreatedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ResourceAwsIamAccessKeyCreatedAt,
            context
          )
        : undefined,
    ResourceAwsIamAccessKeyStatus:
      output.ResourceAwsIamAccessKeyStatus !== undefined &&
      output.ResourceAwsIamAccessKeyStatus !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsIamAccessKeyStatus,
            context
          )
        : undefined,
    ResourceAwsIamAccessKeyUserName:
      output.ResourceAwsIamAccessKeyUserName !== undefined &&
      output.ResourceAwsIamAccessKeyUserName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsIamAccessKeyUserName,
            context
          )
        : undefined,
    ResourceAwsS3BucketOwnerId:
      output.ResourceAwsS3BucketOwnerId !== undefined &&
      output.ResourceAwsS3BucketOwnerId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsS3BucketOwnerId,
            context
          )
        : undefined,
    ResourceAwsS3BucketOwnerName:
      output.ResourceAwsS3BucketOwnerName !== undefined &&
      output.ResourceAwsS3BucketOwnerName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceAwsS3BucketOwnerName,
            context
          )
        : undefined,
    ResourceContainerImageId:
      output.ResourceContainerImageId !== undefined &&
      output.ResourceContainerImageId !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceContainerImageId,
            context
          )
        : undefined,
    ResourceContainerImageName:
      output.ResourceContainerImageName !== undefined &&
      output.ResourceContainerImageName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceContainerImageName,
            context
          )
        : undefined,
    ResourceContainerLaunchedAt:
      output.ResourceContainerLaunchedAt !== undefined &&
      output.ResourceContainerLaunchedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ResourceContainerLaunchedAt,
            context
          )
        : undefined,
    ResourceContainerName:
      output.ResourceContainerName !== undefined &&
      output.ResourceContainerName !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceContainerName,
            context
          )
        : undefined,
    ResourceDetailsOther:
      output.ResourceDetailsOther !== undefined &&
      output.ResourceDetailsOther !== null
        ? deserializeAws_restJson1_1MapFilterList(
            output.ResourceDetailsOther,
            context
          )
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? deserializeAws_restJson1_1StringFilterList(output.ResourceId, context)
        : undefined,
    ResourcePartition:
      output.ResourcePartition !== undefined &&
      output.ResourcePartition !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourcePartition,
            context
          )
        : undefined,
    ResourceRegion:
      output.ResourceRegion !== undefined && output.ResourceRegion !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceRegion,
            context
          )
        : undefined,
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_restJson1_1MapFilterList(output.ResourceTags, context)
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ResourceType,
            context
          )
        : undefined,
    SeverityLabel:
      output.SeverityLabel !== undefined && output.SeverityLabel !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.SeverityLabel,
            context
          )
        : undefined,
    SeverityNormalized:
      output.SeverityNormalized !== undefined &&
      output.SeverityNormalized !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.SeverityNormalized,
            context
          )
        : undefined,
    SeverityProduct:
      output.SeverityProduct !== undefined && output.SeverityProduct !== null
        ? deserializeAws_restJson1_1NumberFilterList(
            output.SeverityProduct,
            context
          )
        : undefined,
    SourceUrl:
      output.SourceUrl !== undefined && output.SourceUrl !== null
        ? deserializeAws_restJson1_1StringFilterList(output.SourceUrl, context)
        : undefined,
    ThreatIntelIndicatorCategory:
      output.ThreatIntelIndicatorCategory !== undefined &&
      output.ThreatIntelIndicatorCategory !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ThreatIntelIndicatorCategory,
            context
          )
        : undefined,
    ThreatIntelIndicatorLastObservedAt:
      output.ThreatIntelIndicatorLastObservedAt !== undefined &&
      output.ThreatIntelIndicatorLastObservedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(
            output.ThreatIntelIndicatorLastObservedAt,
            context
          )
        : undefined,
    ThreatIntelIndicatorSource:
      output.ThreatIntelIndicatorSource !== undefined &&
      output.ThreatIntelIndicatorSource !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ThreatIntelIndicatorSource,
            context
          )
        : undefined,
    ThreatIntelIndicatorSourceUrl:
      output.ThreatIntelIndicatorSourceUrl !== undefined &&
      output.ThreatIntelIndicatorSourceUrl !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ThreatIntelIndicatorSourceUrl,
            context
          )
        : undefined,
    ThreatIntelIndicatorType:
      output.ThreatIntelIndicatorType !== undefined &&
      output.ThreatIntelIndicatorType !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ThreatIntelIndicatorType,
            context
          )
        : undefined,
    ThreatIntelIndicatorValue:
      output.ThreatIntelIndicatorValue !== undefined &&
      output.ThreatIntelIndicatorValue !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.ThreatIntelIndicatorValue,
            context
          )
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? deserializeAws_restJson1_1StringFilterList(output.Title, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? deserializeAws_restJson1_1StringFilterList(output.Type, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? deserializeAws_restJson1_1DateFilterList(output.UpdatedAt, context)
        : undefined,
    UserDefinedFields:
      output.UserDefinedFields !== undefined &&
      output.UserDefinedFields !== null
        ? deserializeAws_restJson1_1MapFilterList(
            output.UserDefinedFields,
            context
          )
        : undefined,
    VerificationState:
      output.VerificationState !== undefined &&
      output.VerificationState !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.VerificationState,
            context
          )
        : undefined,
    WorkflowState:
      output.WorkflowState !== undefined && output.WorkflowState !== null
        ? deserializeAws_restJson1_1StringFilterList(
            output.WorkflowState,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsSecurityFindingList = (
  output: any,
  context: __SerdeContext
): AwsSecurityFinding[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsSecurityFinding(entry, context)
  );
};

const deserializeAws_restJson1_1AwsSnsTopicDetails = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicDetails => {
  return {
    __type: "AwsSnsTopicDetails",
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null
        ? output.KmsMasterKeyId
        : undefined,
    Owner:
      output.Owner !== undefined && output.Owner !== null
        ? output.Owner
        : undefined,
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_restJson1_1AwsSnsTopicSubscriptionList(
            output.Subscription,
            context
          )
        : undefined,
    TopicName:
      output.TopicName !== undefined && output.TopicName !== null
        ? output.TopicName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  return {
    __type: "AwsSnsTopicSubscription",
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? output.Endpoint
        : undefined,
    Protocol:
      output.Protocol !== undefined && output.Protocol !== null
        ? output.Protocol
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsSnsTopicSubscriptionList = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsSnsTopicSubscription(entry, context)
  );
};

const deserializeAws_restJson1_1AwsSqsQueueDetails = (
  output: any,
  context: __SerdeContext
): AwsSqsQueueDetails => {
  return {
    __type: "AwsSqsQueueDetails",
    DeadLetterTargetArn:
      output.DeadLetterTargetArn !== undefined &&
      output.DeadLetterTargetArn !== null
        ? output.DeadLetterTargetArn
        : undefined,
    KmsDataKeyReusePeriodSeconds:
      output.KmsDataKeyReusePeriodSeconds !== undefined &&
      output.KmsDataKeyReusePeriodSeconds !== null
        ? output.KmsDataKeyReusePeriodSeconds
        : undefined,
    KmsMasterKeyId:
      output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null
        ? output.KmsMasterKeyId
        : undefined,
    QueueName:
      output.QueueName !== undefined && output.QueueName !== null
        ? output.QueueName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CategoryList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Compliance = (
  output: any,
  context: __SerdeContext
): Compliance => {
  return {
    __type: "Compliance",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ContainerDetails = (
  output: any,
  context: __SerdeContext
): ContainerDetails => {
  return {
    __type: "ContainerDetails",
    ImageId:
      output.ImageId !== undefined && output.ImageId !== null
        ? output.ImageId
        : undefined,
    ImageName:
      output.ImageName !== undefined && output.ImageName !== null
        ? output.ImageName
        : undefined,
    LaunchedAt:
      output.LaunchedAt !== undefined && output.LaunchedAt !== null
        ? output.LaunchedAt
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DateFilter = (
  output: any,
  context: __SerdeContext
): DateFilter => {
  return {
    __type: "DateFilter",
    DateRange:
      output.DateRange !== undefined && output.DateRange !== null
        ? deserializeAws_restJson1_1DateRange(output.DateRange, context)
        : undefined,
    End:
      output.End !== undefined && output.End !== null ? output.End : undefined,
    Start:
      output.Start !== undefined && output.Start !== null
        ? output.Start
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DateFilterList = (
  output: any,
  context: __SerdeContext
): DateFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DateFilter(entry, context)
  );
};

const deserializeAws_restJson1_1DateRange = (
  output: any,
  context: __SerdeContext
): DateRange => {
  return {
    __type: "DateRange",
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FieldMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1ImportFindingsError = (
  output: any,
  context: __SerdeContext
): ImportFindingsError => {
  return {
    __type: "ImportFindingsError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined
  } as any;
};

const deserializeAws_restJson1_1ImportFindingsErrorList = (
  output: any,
  context: __SerdeContext
): ImportFindingsError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImportFindingsError(entry, context)
  );
};

const deserializeAws_restJson1_1Insight = (
  output: any,
  context: __SerdeContext
): Insight => {
  return {
    __type: "Insight",
    Filters:
      output.Filters !== undefined && output.Filters !== null
        ? deserializeAws_restJson1_1AwsSecurityFindingFilters(
            output.Filters,
            context
          )
        : undefined,
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null
        ? output.GroupByAttribute
        : undefined,
    InsightArn:
      output.InsightArn !== undefined && output.InsightArn !== null
        ? output.InsightArn
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InsightList = (
  output: any,
  context: __SerdeContext
): Insight[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Insight(entry, context)
  );
};

const deserializeAws_restJson1_1InsightResultValue = (
  output: any,
  context: __SerdeContext
): InsightResultValue => {
  return {
    __type: "InsightResultValue",
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    GroupByAttributeValue:
      output.GroupByAttributeValue !== undefined &&
      output.GroupByAttributeValue !== null
        ? output.GroupByAttributeValue
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InsightResultValueList = (
  output: any,
  context: __SerdeContext
): InsightResultValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InsightResultValue(entry, context)
  );
};

const deserializeAws_restJson1_1InsightResults = (
  output: any,
  context: __SerdeContext
): InsightResults => {
  return {
    __type: "InsightResults",
    GroupByAttribute:
      output.GroupByAttribute !== undefined && output.GroupByAttribute !== null
        ? output.GroupByAttribute
        : undefined,
    InsightArn:
      output.InsightArn !== undefined && output.InsightArn !== null
        ? output.InsightArn
        : undefined,
    ResultValues:
      output.ResultValues !== undefined && output.ResultValues !== null
        ? deserializeAws_restJson1_1InsightResultValueList(
            output.ResultValues,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Invitation = (
  output: any,
  context: __SerdeContext
): Invitation => {
  return {
    __type: "Invitation",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    InvitationId:
      output.InvitationId !== undefined && output.InvitationId !== null
        ? output.InvitationId
        : undefined,
    InvitedAt:
      output.InvitedAt !== undefined && output.InvitedAt !== null
        ? new Date(output.InvitedAt)
        : undefined,
    MemberStatus:
      output.MemberStatus !== undefined && output.MemberStatus !== null
        ? output.MemberStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InvitationList = (
  output: any,
  context: __SerdeContext
): Invitation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Invitation(entry, context)
  );
};

const deserializeAws_restJson1_1IpFilter = (
  output: any,
  context: __SerdeContext
): IpFilter => {
  return {
    __type: "IpFilter",
    Cidr:
      output.Cidr !== undefined && output.Cidr !== null
        ? output.Cidr
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IpFilterList = (
  output: any,
  context: __SerdeContext
): IpFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IpFilter(entry, context)
  );
};

const deserializeAws_restJson1_1KeywordFilter = (
  output: any,
  context: __SerdeContext
): KeywordFilter => {
  return {
    __type: "KeywordFilter",
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1KeywordFilterList = (
  output: any,
  context: __SerdeContext
): KeywordFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1KeywordFilter(entry, context)
  );
};

const deserializeAws_restJson1_1LoadBalancerState = (
  output: any,
  context: __SerdeContext
): LoadBalancerState => {
  return {
    __type: "LoadBalancerState",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Malware = (
  output: any,
  context: __SerdeContext
): Malware => {
  return {
    __type: "Malware",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MalwareList = (
  output: any,
  context: __SerdeContext
): Malware[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Malware(entry, context)
  );
};

const deserializeAws_restJson1_1MapFilter = (
  output: any,
  context: __SerdeContext
): MapFilter => {
  return {
    __type: "MapFilter",
    Comparison:
      output.Comparison !== undefined && output.Comparison !== null
        ? output.Comparison
        : undefined,
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MapFilterList = (
  output: any,
  context: __SerdeContext
): MapFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MapFilter(entry, context)
  );
};

const deserializeAws_restJson1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  return {
    __type: "Member",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    InvitedAt:
      output.InvitedAt !== undefined && output.InvitedAt !== null
        ? new Date(output.InvitedAt)
        : undefined,
    MasterId:
      output.MasterId !== undefined && output.MasterId !== null
        ? output.MasterId
        : undefined,
    MemberStatus:
      output.MemberStatus !== undefined && output.MemberStatus !== null
        ? output.MemberStatus
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(output.UpdatedAt)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MemberList = (
  output: any,
  context: __SerdeContext
): Member[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Member(entry, context)
  );
};

const deserializeAws_restJson1_1Network = (
  output: any,
  context: __SerdeContext
): Network => {
  return {
    __type: "Network",
    DestinationDomain:
      output.DestinationDomain !== undefined &&
      output.DestinationDomain !== null
        ? output.DestinationDomain
        : undefined,
    DestinationIpV4:
      output.DestinationIpV4 !== undefined && output.DestinationIpV4 !== null
        ? output.DestinationIpV4
        : undefined,
    DestinationIpV6:
      output.DestinationIpV6 !== undefined && output.DestinationIpV6 !== null
        ? output.DestinationIpV6
        : undefined,
    DestinationPort:
      output.DestinationPort !== undefined && output.DestinationPort !== null
        ? output.DestinationPort
        : undefined,
    Direction:
      output.Direction !== undefined && output.Direction !== null
        ? output.Direction
        : undefined,
    Protocol:
      output.Protocol !== undefined && output.Protocol !== null
        ? output.Protocol
        : undefined,
    SourceDomain:
      output.SourceDomain !== undefined && output.SourceDomain !== null
        ? output.SourceDomain
        : undefined,
    SourceIpV4:
      output.SourceIpV4 !== undefined && output.SourceIpV4 !== null
        ? output.SourceIpV4
        : undefined,
    SourceIpV6:
      output.SourceIpV6 !== undefined && output.SourceIpV6 !== null
        ? output.SourceIpV6
        : undefined,
    SourceMac:
      output.SourceMac !== undefined && output.SourceMac !== null
        ? output.SourceMac
        : undefined,
    SourcePort:
      output.SourcePort !== undefined && output.SourcePort !== null
        ? output.SourcePort
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NonEmptyStringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Note = (
  output: any,
  context: __SerdeContext
): Note => {
  return {
    __type: "Note",
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? output.UpdatedAt
        : undefined,
    UpdatedBy:
      output.UpdatedBy !== undefined && output.UpdatedBy !== null
        ? output.UpdatedBy
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NumberFilter = (
  output: any,
  context: __SerdeContext
): NumberFilter => {
  return {
    __type: "NumberFilter",
    Eq: output.Eq !== undefined && output.Eq !== null ? output.Eq : undefined,
    Gte:
      output.Gte !== undefined && output.Gte !== null ? output.Gte : undefined,
    Lte:
      output.Lte !== undefined && output.Lte !== null ? output.Lte : undefined
  } as any;
};

const deserializeAws_restJson1_1NumberFilterList = (
  output: any,
  context: __SerdeContext
): NumberFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NumberFilter(entry, context)
  );
};

const deserializeAws_restJson1_1ProcessDetails = (
  output: any,
  context: __SerdeContext
): ProcessDetails => {
  return {
    __type: "ProcessDetails",
    LaunchedAt:
      output.LaunchedAt !== undefined && output.LaunchedAt !== null
        ? output.LaunchedAt
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ParentPid:
      output.ParentPid !== undefined && output.ParentPid !== null
        ? output.ParentPid
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined,
    Pid:
      output.Pid !== undefined && output.Pid !== null ? output.Pid : undefined,
    TerminatedAt:
      output.TerminatedAt !== undefined && output.TerminatedAt !== null
        ? output.TerminatedAt
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Product = (
  output: any,
  context: __SerdeContext
): Product => {
  return {
    __type: "Product",
    ActivationUrl:
      output.ActivationUrl !== undefined && output.ActivationUrl !== null
        ? output.ActivationUrl
        : undefined,
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1_1CategoryList(output.Categories, context)
        : undefined,
    CompanyName:
      output.CompanyName !== undefined && output.CompanyName !== null
        ? output.CompanyName
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    MarketplaceUrl:
      output.MarketplaceUrl !== undefined && output.MarketplaceUrl !== null
        ? output.MarketplaceUrl
        : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? output.ProductArn
        : undefined,
    ProductName:
      output.ProductName !== undefined && output.ProductName !== null
        ? output.ProductName
        : undefined,
    ProductSubscriptionResourcePolicy:
      output.ProductSubscriptionResourcePolicy !== undefined &&
      output.ProductSubscriptionResourcePolicy !== null
        ? output.ProductSubscriptionResourcePolicy
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProductSubscriptionArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ProductsList = (
  output: any,
  context: __SerdeContext
): Product[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Product(entry, context)
  );
};

const deserializeAws_restJson1_1Recommendation = (
  output: any,
  context: __SerdeContext
): Recommendation => {
  return {
    __type: "Recommendation",
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Url:
      output.Url !== undefined && output.Url !== null ? output.Url : undefined
  } as any;
};

const deserializeAws_restJson1_1RelatedFinding = (
  output: any,
  context: __SerdeContext
): RelatedFinding => {
  return {
    __type: "RelatedFinding",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ProductArn:
      output.ProductArn !== undefined && output.ProductArn !== null
        ? output.ProductArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RelatedFindingList = (
  output: any,
  context: __SerdeContext
): RelatedFinding[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RelatedFinding(entry, context)
  );
};

const deserializeAws_restJson1_1Remediation = (
  output: any,
  context: __SerdeContext
): Remediation => {
  return {
    __type: "Remediation",
    Recommendation:
      output.Recommendation !== undefined && output.Recommendation !== null
        ? deserializeAws_restJson1_1Recommendation(
            output.Recommendation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  return {
    __type: "Resource",
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1_1ResourceDetails(output.Details, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Partition:
      output.Partition !== undefined && output.Partition !== null
        ? output.Partition
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1_1FieldMap(output.Tags, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceDetails = (
  output: any,
  context: __SerdeContext
): ResourceDetails => {
  return {
    __type: "ResourceDetails",
    AwsCloudFrontDistribution:
      output.AwsCloudFrontDistribution !== undefined &&
      output.AwsCloudFrontDistribution !== null
        ? deserializeAws_restJson1_1AwsCloudFrontDistributionDetails(
            output.AwsCloudFrontDistribution,
            context
          )
        : undefined,
    AwsEc2Instance:
      output.AwsEc2Instance !== undefined && output.AwsEc2Instance !== null
        ? deserializeAws_restJson1_1AwsEc2InstanceDetails(
            output.AwsEc2Instance,
            context
          )
        : undefined,
    AwsElbv2LoadBalancer:
      output.AwsElbv2LoadBalancer !== undefined &&
      output.AwsElbv2LoadBalancer !== null
        ? deserializeAws_restJson1_1AwsElbv2LoadBalancerDetails(
            output.AwsElbv2LoadBalancer,
            context
          )
        : undefined,
    AwsIamAccessKey:
      output.AwsIamAccessKey !== undefined && output.AwsIamAccessKey !== null
        ? deserializeAws_restJson1_1AwsIamAccessKeyDetails(
            output.AwsIamAccessKey,
            context
          )
        : undefined,
    AwsIamRole:
      output.AwsIamRole !== undefined && output.AwsIamRole !== null
        ? deserializeAws_restJson1_1AwsIamRoleDetails(
            output.AwsIamRole,
            context
          )
        : undefined,
    AwsKmsKey:
      output.AwsKmsKey !== undefined && output.AwsKmsKey !== null
        ? deserializeAws_restJson1_1AwsKmsKeyDetails(output.AwsKmsKey, context)
        : undefined,
    AwsLambdaFunction:
      output.AwsLambdaFunction !== undefined &&
      output.AwsLambdaFunction !== null
        ? deserializeAws_restJson1_1AwsLambdaFunctionDetails(
            output.AwsLambdaFunction,
            context
          )
        : undefined,
    AwsS3Bucket:
      output.AwsS3Bucket !== undefined && output.AwsS3Bucket !== null
        ? deserializeAws_restJson1_1AwsS3BucketDetails(
            output.AwsS3Bucket,
            context
          )
        : undefined,
    AwsSnsTopic:
      output.AwsSnsTopic !== undefined && output.AwsSnsTopic !== null
        ? deserializeAws_restJson1_1AwsSnsTopicDetails(
            output.AwsSnsTopic,
            context
          )
        : undefined,
    AwsSqsQueue:
      output.AwsSqsQueue !== undefined && output.AwsSqsQueue !== null
        ? deserializeAws_restJson1_1AwsSqsQueueDetails(
            output.AwsSqsQueue,
            context
          )
        : undefined,
    Container:
      output.Container !== undefined && output.Container !== null
        ? deserializeAws_restJson1_1ContainerDetails(output.Container, context)
        : undefined,
    Other:
      output.Other !== undefined && output.Other !== null
        ? deserializeAws_restJson1_1FieldMap(output.Other, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Resource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resource(entry, context)
  );
};

const deserializeAws_restJson1_1Result = (
  output: any,
  context: __SerdeContext
): Result => {
  return {
    __type: "Result",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    ProcessingResult:
      output.ProcessingResult !== undefined && output.ProcessingResult !== null
        ? output.ProcessingResult
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResultList = (
  output: any,
  context: __SerdeContext
): Result[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Result(entry, context)
  );
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Severity = (
  output: any,
  context: __SerdeContext
): Severity => {
  return {
    __type: "Severity",
    Normalized:
      output.Normalized !== undefined && output.Normalized !== null
        ? output.Normalized
        : undefined,
    Product:
      output.Product !== undefined && output.Product !== null
        ? output.Product
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StandardsControl = (
  output: any,
  context: __SerdeContext
): StandardsControl => {
  return {
    __type: "StandardsControl",
    ControlId:
      output.ControlId !== undefined && output.ControlId !== null
        ? output.ControlId
        : undefined,
    ControlStatus:
      output.ControlStatus !== undefined && output.ControlStatus !== null
        ? output.ControlStatus
        : undefined,
    ControlStatusUpdatedAt:
      output.ControlStatusUpdatedAt !== undefined &&
      output.ControlStatusUpdatedAt !== null
        ? new Date(output.ControlStatusUpdatedAt)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    DisabledReason:
      output.DisabledReason !== undefined && output.DisabledReason !== null
        ? output.DisabledReason
        : undefined,
    RemediationUrl:
      output.RemediationUrl !== undefined && output.RemediationUrl !== null
        ? output.RemediationUrl
        : undefined,
    SeverityRating:
      output.SeverityRating !== undefined && output.SeverityRating !== null
        ? output.SeverityRating
        : undefined,
    StandardsControlArn:
      output.StandardsControlArn !== undefined &&
      output.StandardsControlArn !== null
        ? output.StandardsControlArn
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? output.Title
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StandardsControls = (
  output: any,
  context: __SerdeContext
): StandardsControl[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StandardsControl(entry, context)
  );
};

const deserializeAws_restJson1_1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1StandardsSubscription = (
  output: any,
  context: __SerdeContext
): StandardsSubscription => {
  return {
    __type: "StandardsSubscription",
    StandardsArn:
      output.StandardsArn !== undefined && output.StandardsArn !== null
        ? output.StandardsArn
        : undefined,
    StandardsInput:
      output.StandardsInput !== undefined && output.StandardsInput !== null
        ? deserializeAws_restJson1_1StandardsInputParameterMap(
            output.StandardsInput,
            context
          )
        : undefined,
    StandardsStatus:
      output.StandardsStatus !== undefined && output.StandardsStatus !== null
        ? output.StandardsStatus
        : undefined,
    StandardsSubscriptionArn:
      output.StandardsSubscriptionArn !== undefined &&
      output.StandardsSubscriptionArn !== null
        ? output.StandardsSubscriptionArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StandardsSubscriptions = (
  output: any,
  context: __SerdeContext
): StandardsSubscription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StandardsSubscription(entry, context)
  );
};

const deserializeAws_restJson1_1StringFilter = (
  output: any,
  context: __SerdeContext
): StringFilter => {
  return {
    __type: "StringFilter",
    Comparison:
      output.Comparison !== undefined && output.Comparison !== null
        ? output.Comparison
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StringFilterList = (
  output: any,
  context: __SerdeContext
): StringFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StringFilter(entry, context)
  );
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1ThreatIntelIndicator = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator => {
  return {
    __type: "ThreatIntelIndicator",
    Category:
      output.Category !== undefined && output.Category !== null
        ? output.Category
        : undefined,
    LastObservedAt:
      output.LastObservedAt !== undefined && output.LastObservedAt !== null
        ? output.LastObservedAt
        : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? output.Source
        : undefined,
    SourceUrl:
      output.SourceUrl !== undefined && output.SourceUrl !== null
        ? output.SourceUrl
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ThreatIntelIndicatorList = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ThreatIntelIndicator(entry, context)
  );
};

const deserializeAws_restJson1_1TypeList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
