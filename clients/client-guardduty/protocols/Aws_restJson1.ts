import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "../commands/ArchiveFindingsCommand";
import { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "../commands/CreateDetectorCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "../commands/CreateFilterCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "../commands/CreateIPSetCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "../commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "../commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "../commands/CreateThreatIntelSetCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "../commands/DeleteDetectorCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "../commands/DeleteFilterCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "../commands/DeleteIPSetCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "../commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "../commands/DeleteThreatIntelSetCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "../commands/DescribePublishingDestinationCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "../commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "../commands/DisassociateMembersCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import { GetDetectorCommandInput, GetDetectorCommandOutput } from "../commands/GetDetectorCommand";
import { GetFilterCommandInput, GetFilterCommandOutput } from "../commands/GetFilterCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "../commands/GetFindingsStatisticsCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "../commands/GetIPSetCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput } from "../commands/GetMemberDetectorsCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand";
import { GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput } from "../commands/GetThreatIntelSetCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "../commands/GetUsageStatisticsCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "../commands/InviteMembersCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "../commands/ListDetectorsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "../commands/ListThreatIntelSetsCommand";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "../commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "../commands/StopMonitoringMembersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput } from "../commands/UnarchiveFindingsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "../commands/UpdateDetectorCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "../commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "../commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "../commands/UpdateIPSetCommand";
import {
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "../commands/UpdateMemberDetectorsCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "../commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "../commands/UpdateThreatIntelSetCommand";
import {
  AccessControlList,
  AccessKeyDetails,
  AccountDetail,
  AccountLevelPermissions,
  Action,
  AdminAccount,
  AwsApiCallAction,
  BadRequestException,
  BlockPublicAccess,
  BucketLevelPermissions,
  BucketPolicy,
  City,
  CloudTrailConfigurationResult,
  Condition,
  Country,
  DNSLogsConfigurationResult,
  DataSource,
  DataSourceConfigurations,
  DataSourceConfigurationsResult,
  DefaultServerSideEncryption,
  Destination,
  DestinationProperties,
  DnsRequestAction,
  DomainDetails,
  Evidence,
  Finding,
  FindingCriteria,
  FindingStatisticType,
  FindingStatistics,
  FlowLogsConfigurationResult,
  GeoLocation,
  IamInstanceProfile,
  InstanceDetails,
  InternalServerErrorException,
  Invitation,
  LocalIpDetails,
  LocalPortDetails,
  Master,
  Member,
  MemberDataSourceConfiguration,
  NetworkConnectionAction,
  NetworkInterface,
  Organization,
  OrganizationDataSourceConfigurations,
  OrganizationDataSourceConfigurationsResult,
  OrganizationS3LogsConfiguration,
  OrganizationS3LogsConfigurationResult,
  Owner,
  PermissionConfiguration,
  PortProbeAction,
  PortProbeDetail,
  PrivateIpAddressDetails,
  ProductCode,
  PublicAccess,
  RemoteIpDetails,
  RemotePortDetails,
  Resource,
  S3BucketDetail,
  S3LogsConfiguration,
  S3LogsConfigurationResult,
  SecurityGroup,
  Service,
  SortCriteria,
  Tag,
  ThreatIntelligenceDetail,
  Total,
  UnprocessedAccount,
  UsageAccountResult,
  UsageCriteria,
  UsageDataSourceResult,
  UsageResourceResult,
  UsageStatistics,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat as __limitedParseFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId !== undefined && input.InvitationId !== null && { invitationId: input.InvitationId }),
    ...(input.MasterId !== undefined && input.MasterId !== null && { masterId: input.MasterId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ArchiveFindingsCommand = async (
  input: ArchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/archive";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds !== undefined &&
      input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDetectorCommand = async (
  input: CreateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector";
  let body: any;
  body = JSON.stringify({
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataSources !== undefined &&
      input.DataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
      }),
    ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
    ...(input.FindingPublishingFrequency !== undefined &&
      input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined && input.Action !== null && { action: input.Action }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.FindingCriteria !== undefined &&
      input.FindingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Rank !== undefined && input.Rank !== null && { rank: input.Rank }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
    ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails !== undefined &&
      input.AccountDetails !== null && {
        accountDetails: serializeAws_restJson1AccountDetails(input.AccountDetails, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreatePublishingDestinationCommand = async (
  input: CreatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DestinationProperties !== undefined &&
      input.DestinationProperties !== null && {
        destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
      }),
    ...(input.DestinationType !== undefined &&
      input.DestinationType !== null && { destinationType: input.DestinationType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSampleFindingsCommand = async (
  input: CreateSampleFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/create";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingTypes !== undefined &&
      input.FindingTypes !== null && { findingTypes: serializeAws_restJson1FindingTypes(input.FindingTypes, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateThreatIntelSetCommand = async (
  input: CreateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
    clientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
    ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/delete";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeletePublishingDestinationCommand = async (
  input: DeletePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DestinationId.");
    }
    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteThreatIntelSetCommand = async (
  input: DeleteThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
    }
    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/admin";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribePublishingDestinationCommand = async (
  input: DescribePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DestinationId.");
    }
    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/master/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  input: EnableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId !== undefined &&
      input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDetectorCommand = async (
  input: GetDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFilterCommand = async (
  input: GetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/get";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds !== undefined &&
      input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFindingsStatisticsCommand = async (
  input: GetFindingsStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/findings/statistics";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingCriteria !== undefined &&
      input.FindingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
      }),
    ...(input.FindingStatisticTypes !== undefined &&
      input.FindingStatisticTypes !== null && {
        findingStatisticTypes: serializeAws_restJson1FindingStatisticTypes(input.FindingStatisticTypes, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation/count";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMemberDetectorsCommand = async (
  input: GetMemberDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/detector/get";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/get";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetThreatIntelSetCommand = async (
  input: GetThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
    }
    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetUsageStatisticsCommand = async (
  input: GetUsageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/usage/statistics";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
    ...(input.Unit !== undefined && input.Unit !== null && { unit: input.Unit }),
    ...(input.UsageCriteria !== undefined &&
      input.UsageCriteria !== null && {
        usageCriteria: serializeAws_restJson1UsageCriteria(input.UsageCriteria, context),
      }),
    ...(input.UsageStatisticType !== undefined &&
      input.UsageStatisticType !== null && { usageStatisticsType: input.UsageStatisticType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/invite";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
    ...(input.DisableEmailNotification !== undefined &&
      input.DisableEmailNotification !== null && { disableEmailNotification: input.DisableEmailNotification }),
    ...(input.Message !== undefined && input.Message !== null && { message: input.Message }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingCriteria !== undefined &&
      input.FindingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitation";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.OnlyAssociated !== undefined && { onlyAssociated: input.OnlyAssociated }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  input: ListOrganizationAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/admin";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListPublishingDestinationsCommand = async (
  input: ListPublishingDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListThreatIntelSetsCommand = async (
  input: ListThreatIntelSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StartMonitoringMembersCommand = async (
  input: StartMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/start";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopMonitoringMembersCommand = async (
  input: StopMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/member/stop";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UnarchiveFindingsCommand = async (
  input: UnarchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/unarchive";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FindingIds !== undefined &&
      input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateDetectorCommand = async (
  input: UpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DataSources !== undefined &&
      input.DataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
      }),
    ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
    ...(input.FindingPublishingFrequency !== undefined &&
      input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFilterCommand = async (
  input: UpdateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined && input.Action !== null && { action: input.Action }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.FindingCriteria !== undefined &&
      input.FindingCriteria !== null && {
        findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
      }),
    ...(input.Rank !== undefined && input.Rank !== null && { rank: input.Rank }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFindingsFeedbackCommand = async (
  input: UpdateFindingsFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/findings/feedback";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Comments !== undefined && input.Comments !== null && { comments: input.Comments }),
    ...(input.Feedback !== undefined && input.Feedback !== null && { feedback: input.Feedback }),
    ...(input.FindingIds !== undefined &&
      input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
    ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateMemberDetectorsCommand = async (
  input: UpdateMemberDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/member/detector/update";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
    ...(input.DataSources !== undefined &&
      input.DataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector/{DetectorId}/admin";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable }),
    ...(input.DataSources !== undefined &&
      input.DataSources !== null && {
        dataSources: serializeAws_restJson1OrganizationDataSourceConfigurations(input.DataSources, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePublishingDestinationCommand = async (
  input: UpdatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DestinationId.");
    }
    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationProperties !== undefined &&
      input.DestinationProperties !== null && {
        destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateThreatIntelSetCommand = async (
  input: UpdateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
    }
    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
    ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ArchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ArchiveFindingsCommandError(output, context);
  }
  const contents: ArchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ArchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDetectorCommandError(output, context);
  }
  const contents: CreateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    DetectorId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorId !== undefined && data.detectorId !== null) {
    contents.DetectorId = __expectString(data.detectorId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFilterCommandError(output, context);
  }
  const contents: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIPSetCommandError(output, context);
  }
  const contents: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    IpSetId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetId !== undefined && data.ipSetId !== null) {
    contents.IpSetId = __expectString(data.ipSetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMembersCommandError(output, context);
  }
  const contents: CreateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePublishingDestinationCommandError(output, context);
  }
  const contents: CreatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    DestinationId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined && data.destinationId !== null) {
    contents.DestinationId = __expectString(data.destinationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSampleFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSampleFindingsCommandError(output, context);
  }
  const contents: CreateSampleFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSampleFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThreatIntelSetCommandError(output, context);
  }
  const contents: CreateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ThreatIntelSetId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.threatIntelSetId !== undefined && data.threatIntelSetId !== null) {
    contents.ThreatIntelSetId = __expectString(data.threatIntelSetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
  }
  const contents: DeclineInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDetectorCommandError(output, context);
  }
  const contents: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFilterCommandError(output, context);
  }
  const contents: DeleteFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
  }
  const contents: DeleteInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIPSetCommandError(output, context);
  }
  const contents: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMembersCommandError(output, context);
  }
  const contents: DeleteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePublishingDestinationCommandError(output, context);
  }
  const contents: DeletePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThreatIntelSetCommandError(output, context);
  }
  const contents: DeleteThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context);
  }
  const contents: DescribeOrganizationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoEnable: undefined,
    DataSources: undefined,
    MemberAccountLimitReached: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.autoEnable !== undefined && data.autoEnable !== null) {
    contents.AutoEnable = __expectBoolean(data.autoEnable);
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.DataSources = deserializeAws_restJson1OrganizationDataSourceConfigurationsResult(
      data.dataSources,
      context
    );
  }
  if (data.memberAccountLimitReached !== undefined && data.memberAccountLimitReached !== null) {
    contents.MemberAccountLimitReached = __expectBoolean(data.memberAccountLimitReached);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePublishingDestinationCommandError(output, context);
  }
  const contents: DescribePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    DestinationId: undefined,
    DestinationProperties: undefined,
    DestinationType: undefined,
    PublishingFailureStartTimestamp: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined && data.destinationId !== null) {
    contents.DestinationId = __expectString(data.destinationId);
  }
  if (data.destinationProperties !== undefined && data.destinationProperties !== null) {
    contents.DestinationProperties = deserializeAws_restJson1DestinationProperties(data.destinationProperties, context);
  }
  if (data.destinationType !== undefined && data.destinationType !== null) {
    contents.DestinationType = __expectString(data.destinationType);
  }
  if (data.publishingFailureStartTimestamp !== undefined && data.publishingFailureStartTimestamp !== null) {
    contents.PublishingFailureStartTimestamp = __expectInt(data.publishingFailureStartTimestamp);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: DisableOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: EnableOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDetectorCommandError(output, context);
  }
  const contents: GetDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DataSources: undefined,
    FindingPublishingFrequency: undefined,
    ServiceRole: undefined,
    Status: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.DataSources = deserializeAws_restJson1DataSourceConfigurationsResult(data.dataSources, context);
  }
  if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
    contents.FindingPublishingFrequency = __expectString(data.findingPublishingFrequency);
  }
  if (data.serviceRole !== undefined && data.serviceRole !== null) {
    contents.ServiceRole = __expectString(data.serviceRole);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.updatedAt !== undefined && data.updatedAt !== null) {
    contents.UpdatedAt = __expectString(data.updatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFilterCommandError(output, context);
  }
  const contents: GetFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    Action: undefined,
    Description: undefined,
    FindingCriteria: undefined,
    Name: undefined,
    Rank: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.action !== undefined && data.action !== null) {
    contents.Action = __expectString(data.action);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
    contents.FindingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.rank !== undefined && data.rank !== null) {
    contents.Rank = __expectInt(data.rank);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsCommandError(output, context);
  }
  const contents: GetFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Findings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.Findings = deserializeAws_restJson1Findings(data.findings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFindingsStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsStatisticsCommandError(output, context);
  }
  const contents: GetFindingsStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FindingStatistics: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingStatistics !== undefined && data.findingStatistics !== null) {
    contents.FindingStatistics = deserializeAws_restJson1FindingStatistics(data.findingStatistics, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFindingsStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
  }
  const contents: GetInvitationsCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    InvitationsCount: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
    contents.InvitationsCount = __expectInt(data.invitationsCount);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIPSetCommandError(output, context);
  }
  const contents: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined && data.format !== null) {
    contents.Format = __expectString(data.format);
  }
  if (data.location !== undefined && data.location !== null) {
    contents.Location = __expectString(data.location);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
  }
  const contents: GetMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    Master: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.master !== undefined && data.master !== null) {
    contents.Master = deserializeAws_restJson1Master(data.master, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberDetectorsCommandError(output, context);
  }
  const contents: GetMemberDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    MemberDataSourceConfigurations: undefined,
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.members !== undefined && data.members !== null) {
    contents.MemberDataSourceConfigurations = deserializeAws_restJson1MemberDataSourceConfigurations(
      data.members,
      context
    );
  }
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMemberDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMembersCommandError(output, context);
  }
  const contents: GetMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Members: undefined,
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.members !== undefined && data.members !== null) {
    contents.Members = deserializeAws_restJson1Members(data.members, context);
  }
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetThreatIntelSetCommandError(output, context);
  }
  const contents: GetThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined && data.format !== null) {
    contents.Format = __expectString(data.format);
  }
  if (data.location !== undefined && data.location !== null) {
    contents.Location = __expectString(data.location);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetUsageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageStatisticsCommandError(output, context);
  }
  const contents: GetUsageStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    UsageStatistics: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.usageStatistics !== undefined && data.usageStatistics !== null) {
    contents.UsageStatistics = deserializeAws_restJson1UsageStatistics(data.usageStatistics, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUsageStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InviteMembersCommandError(output, context);
  }
  const contents: InviteMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorsCommandError(output, context);
  }
  const contents: ListDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DetectorIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorIds !== undefined && data.detectorIds !== null) {
    contents.DetectorIds = deserializeAws_restJson1DetectorIds(data.detectorIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFiltersCommandError(output, context);
  }
  const contents: ListFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    FilterNames: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.filterNames !== undefined && data.filterNames !== null) {
    contents.FilterNames = deserializeAws_restJson1FilterNames(data.filterNames, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingsCommandError(output, context);
  }
  const contents: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FindingIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingIds !== undefined && data.findingIds !== null) {
    contents.FindingIds = deserializeAws_restJson1FindingIds(data.findingIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Invitations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.invitations !== undefined && data.invitations !== null) {
    contents.Invitations = deserializeAws_restJson1Invitations(data.invitations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIPSetsCommandError(output, context);
  }
  const contents: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    IpSetIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetIds !== undefined && data.ipSetIds !== null) {
    contents.IpSetIds = deserializeAws_restJson1IpSetIds(data.ipSetIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Members: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.members !== undefined && data.members !== null) {
    contents.Members = deserializeAws_restJson1Members(data.members, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context);
  }
  const contents: ListOrganizationAdminAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdminAccounts: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.adminAccounts, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPublishingDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPublishingDestinationsCommandError(output, context);
  }
  const contents: ListPublishingDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Destinations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1Destinations(data.destinations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPublishingDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListThreatIntelSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThreatIntelSetsCommandError(output, context);
  }
  const contents: ListThreatIntelSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ThreatIntelSetIds: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.threatIntelSetIds !== undefined && data.threatIntelSetIds !== null) {
    contents.ThreatIntelSetIds = deserializeAws_restJson1ThreatIntelSetIds(data.threatIntelSetIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListThreatIntelSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMonitoringMembersCommandError(output, context);
  }
  const contents: StartMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StopMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopMonitoringMembersCommandError(output, context);
  }
  const contents: StopMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UnarchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnarchiveFindingsCommandError(output, context);
  }
  const contents: UnarchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UnarchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDetectorCommandError(output, context);
  }
  const contents: UpdateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFilterCommandError(output, context);
  }
  const contents: UpdateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFindingsFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsFeedbackCommandError(output, context);
  }
  const contents: UpdateFindingsFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFindingsFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIPSetCommandError(output, context);
  }
  const contents: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateMemberDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberDetectorsCommandError(output, context);
  }
  const contents: UpdateMemberDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMemberDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context);
  }
  const contents: UpdateOrganizationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePublishingDestinationCommandError(output, context);
  }
  const contents: UpdatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThreatIntelSetCommandError(output, context);
  }
  const contents: UpdateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  if (data.__type !== undefined && data.__type !== null) {
    contents.Type = __expectString(data.__type);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  if (data.__type !== undefined && data.__type !== null) {
    contents.Type = __expectString(data.__type);
  }
  return contents;
};

const serializeAws_restJson1AccountDetail = (input: AccountDetail, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { accountId: input.AccountId }),
    ...(input.Email !== undefined && input.Email !== null && { email: input.Email }),
  };
};

const serializeAws_restJson1AccountDetails = (input: AccountDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AccountDetail(entry, context);
    });
};

const serializeAws_restJson1AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Eq !== undefined && input.Eq !== null && { eq: serializeAws_restJson1Eq(input.Eq, context) }),
    ...(input.Equals !== undefined &&
      input.Equals !== null && { equals: serializeAws_restJson1Equals(input.Equals, context) }),
    ...(input.GreaterThan !== undefined && input.GreaterThan !== null && { greaterThan: input.GreaterThan }),
    ...(input.GreaterThanOrEqual !== undefined &&
      input.GreaterThanOrEqual !== null && { greaterThanOrEqual: input.GreaterThanOrEqual }),
    ...(input.Gt !== undefined && input.Gt !== null && { gt: input.Gt }),
    ...(input.Gte !== undefined && input.Gte !== null && { gte: input.Gte }),
    ...(input.LessThan !== undefined && input.LessThan !== null && { lessThan: input.LessThan }),
    ...(input.LessThanOrEqual !== undefined &&
      input.LessThanOrEqual !== null && { lessThanOrEqual: input.LessThanOrEqual }),
    ...(input.Lt !== undefined && input.Lt !== null && { lt: input.Lt }),
    ...(input.Lte !== undefined && input.Lte !== null && { lte: input.Lte }),
    ...(input.Neq !== undefined && input.Neq !== null && { neq: serializeAws_restJson1Neq(input.Neq, context) }),
    ...(input.NotEquals !== undefined &&
      input.NotEquals !== null && { notEquals: serializeAws_restJson1NotEquals(input.NotEquals, context) }),
  };
};

const serializeAws_restJson1Criterion = (input: { [key: string]: Condition }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Condition(value, context),
    };
  }, {});
};

const serializeAws_restJson1DataSourceConfigurations = (
  input: DataSourceConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Logs !== undefined &&
      input.S3Logs !== null && { s3Logs: serializeAws_restJson1S3LogsConfiguration(input.S3Logs, context) }),
  };
};

const serializeAws_restJson1DataSourceList = (input: (DataSource | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DestinationProperties = (input: DestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn !== undefined &&
      input.DestinationArn !== null && { destinationArn: input.DestinationArn }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { kmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_restJson1Eq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Equals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FindingCriteria = (input: FindingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Criterion !== undefined &&
      input.Criterion !== null && { criterion: serializeAws_restJson1Criterion(input.Criterion, context) }),
  };
};

const serializeAws_restJson1FindingIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FindingStatisticTypes = (
  input: (FindingStatisticType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FindingTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Neq = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1NotEquals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OrganizationDataSourceConfigurations = (
  input: OrganizationDataSourceConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Logs !== undefined &&
      input.S3Logs !== null && {
        s3Logs: serializeAws_restJson1OrganizationS3LogsConfiguration(input.S3Logs, context),
      }),
  };
};

const serializeAws_restJson1OrganizationS3LogsConfiguration = (
  input: OrganizationS3LogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable }),
  };
};

const serializeAws_restJson1ResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1S3LogsConfiguration = (input: S3LogsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
  };
};

const serializeAws_restJson1SortCriteria = (input: SortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { attributeName: input.AttributeName }),
    ...(input.OrderBy !== undefined && input.OrderBy !== null && { orderBy: input.OrderBy }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1UsageCriteria = (input: UsageCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
    ...(input.DataSources !== undefined &&
      input.DataSources !== null && { dataSources: serializeAws_restJson1DataSourceList(input.DataSources, context) }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
  };
};

const deserializeAws_restJson1AccessControlList = (output: any, context: __SerdeContext): AccessControlList => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1AccessKeyDetails = (output: any, context: __SerdeContext): AccessKeyDetails => {
  return {
    AccessKeyId: __expectString(output.accessKeyId),
    PrincipalId: __expectString(output.principalId),
    UserName: __expectString(output.userName),
    UserType: __expectString(output.userType),
  } as any;
};

const deserializeAws_restJson1AccountLevelPermissions = (
  output: any,
  context: __SerdeContext
): AccountLevelPermissions => {
  return {
    BlockPublicAccess:
      output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionType: __expectString(output.actionType),
    AwsApiCallAction:
      output.awsApiCallAction !== undefined && output.awsApiCallAction !== null
        ? deserializeAws_restJson1AwsApiCallAction(output.awsApiCallAction, context)
        : undefined,
    DnsRequestAction:
      output.dnsRequestAction !== undefined && output.dnsRequestAction !== null
        ? deserializeAws_restJson1DnsRequestAction(output.dnsRequestAction, context)
        : undefined,
    NetworkConnectionAction:
      output.networkConnectionAction !== undefined && output.networkConnectionAction !== null
        ? deserializeAws_restJson1NetworkConnectionAction(output.networkConnectionAction, context)
        : undefined,
    PortProbeAction:
      output.portProbeAction !== undefined && output.portProbeAction !== null
        ? deserializeAws_restJson1PortProbeAction(output.portProbeAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AdminAccountId: __expectString(output.adminAccountId),
    AdminStatus: __expectString(output.adminStatus),
  } as any;
};

const deserializeAws_restJson1AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdminAccount(entry, context);
    });
};

const deserializeAws_restJson1AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return {
    Api: __expectString(output.api),
    CallerType: __expectString(output.callerType),
    DomainDetails:
      output.domainDetails !== undefined && output.domainDetails !== null
        ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
        : undefined,
    ErrorCode: __expectString(output.errorCode),
    RemoteIpDetails:
      output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
    ServiceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1BlockPublicAccess = (output: any, context: __SerdeContext): BlockPublicAccess => {
  return {
    BlockPublicAcls: __expectBoolean(output.blockPublicAcls),
    BlockPublicPolicy: __expectBoolean(output.blockPublicPolicy),
    IgnorePublicAcls: __expectBoolean(output.ignorePublicAcls),
    RestrictPublicBuckets: __expectBoolean(output.restrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1BucketLevelPermissions = (
  output: any,
  context: __SerdeContext
): BucketLevelPermissions => {
  return {
    AccessControlList:
      output.accessControlList !== undefined && output.accessControlList !== null
        ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
        : undefined,
    BlockPublicAccess:
      output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
        ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
        : undefined,
    BucketPolicy:
      output.bucketPolicy !== undefined && output.bucketPolicy !== null
        ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BucketPolicy = (output: any, context: __SerdeContext): BucketPolicy => {
  return {
    AllowsPublicReadAccess: __expectBoolean(output.allowsPublicReadAccess),
    AllowsPublicWriteAccess: __expectBoolean(output.allowsPublicWriteAccess),
  } as any;
};

const deserializeAws_restJson1City = (output: any, context: __SerdeContext): City => {
  return {
    CityName: __expectString(output.cityName),
  } as any;
};

const deserializeAws_restJson1CloudTrailConfigurationResult = (
  output: any,
  context: __SerdeContext
): CloudTrailConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Eq: output.eq !== undefined && output.eq !== null ? deserializeAws_restJson1Eq(output.eq, context) : undefined,
    Equals:
      output.equals !== undefined && output.equals !== null
        ? deserializeAws_restJson1Equals(output.equals, context)
        : undefined,
    GreaterThan: __expectInt(output.greaterThan),
    GreaterThanOrEqual: __expectInt(output.greaterThanOrEqual),
    Gt: __expectInt(output.gt),
    Gte: __expectInt(output.gte),
    LessThan: __expectInt(output.lessThan),
    LessThanOrEqual: __expectInt(output.lessThanOrEqual),
    Lt: __expectInt(output.lt),
    Lte: __expectInt(output.lte),
    Neq: output.neq !== undefined && output.neq !== null ? deserializeAws_restJson1Neq(output.neq, context) : undefined,
    NotEquals:
      output.notEquals !== undefined && output.notEquals !== null
        ? deserializeAws_restJson1NotEquals(output.notEquals, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CountBySeverity = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Country = (output: any, context: __SerdeContext): Country => {
  return {
    CountryCode: __expectString(output.countryCode),
    CountryName: __expectString(output.countryName),
  } as any;
};

const deserializeAws_restJson1Criterion = (output: any, context: __SerdeContext): { [key: string]: Condition } => {
  return Object.entries(output).reduce((acc: { [key: string]: Condition }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Condition(value, context),
    };
  }, {});
};

const deserializeAws_restJson1DataSourceConfigurationsResult = (
  output: any,
  context: __SerdeContext
): DataSourceConfigurationsResult => {
  return {
    CloudTrail:
      output.cloudTrail !== undefined && output.cloudTrail !== null
        ? deserializeAws_restJson1CloudTrailConfigurationResult(output.cloudTrail, context)
        : undefined,
    DNSLogs:
      output.dnsLogs !== undefined && output.dnsLogs !== null
        ? deserializeAws_restJson1DNSLogsConfigurationResult(output.dnsLogs, context)
        : undefined,
    FlowLogs:
      output.flowLogs !== undefined && output.flowLogs !== null
        ? deserializeAws_restJson1FlowLogsConfigurationResult(output.flowLogs, context)
        : undefined,
    S3Logs:
      output.s3Logs !== undefined && output.s3Logs !== null
        ? deserializeAws_restJson1S3LogsConfigurationResult(output.s3Logs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DefaultServerSideEncryption = (
  output: any,
  context: __SerdeContext
): DefaultServerSideEncryption => {
  return {
    EncryptionType: __expectString(output.encryptionType),
    KmsMasterKeyArn: __expectString(output.kmsMasterKeyArn),
  } as any;
};

const deserializeAws_restJson1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    DestinationId: __expectString(output.destinationId),
    DestinationType: __expectString(output.destinationType),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DestinationProperties = (output: any, context: __SerdeContext): DestinationProperties => {
  return {
    DestinationArn: __expectString(output.destinationArn),
    KmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1Destinations = (output: any, context: __SerdeContext): Destination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Destination(entry, context);
    });
};

const deserializeAws_restJson1DetectorIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1DNSLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): DNSLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return {
    Domain: __expectString(output.domain),
  } as any;
};

const deserializeAws_restJson1DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return {
    Domain: __expectString(output.domain),
  } as any;
};

const deserializeAws_restJson1Eq = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Equals = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Evidence = (output: any, context: __SerdeContext): Evidence => {
  return {
    ThreatIntelligenceDetails:
      output.threatIntelligenceDetails !== undefined && output.threatIntelligenceDetails !== null
        ? deserializeAws_restJson1ThreatIntelligenceDetails(output.threatIntelligenceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilterNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    AccountId: __expectString(output.accountId),
    Arn: __expectString(output.arn),
    Confidence: __limitedParseFloat(output.confidence),
    CreatedAt: __expectString(output.createdAt),
    Description: __expectString(output.description),
    Id: __expectString(output.id),
    Partition: __expectString(output.partition),
    Region: __expectString(output.region),
    Resource:
      output.resource !== undefined && output.resource !== null
        ? deserializeAws_restJson1Resource(output.resource, context)
        : undefined,
    SchemaVersion: __expectString(output.schemaVersion),
    Service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_restJson1Service(output.service, context)
        : undefined,
    Severity: __limitedParseFloat(output.severity),
    Title: __expectString(output.title),
    Type: __expectString(output.type),
    UpdatedAt: __expectString(output.updatedAt),
  } as any;
};

const deserializeAws_restJson1FindingCriteria = (output: any, context: __SerdeContext): FindingCriteria => {
  return {
    Criterion:
      output.criterion !== undefined && output.criterion !== null
        ? deserializeAws_restJson1Criterion(output.criterion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FindingIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Findings = (output: any, context: __SerdeContext): Finding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Finding(entry, context);
    });
};

const deserializeAws_restJson1FindingStatistics = (output: any, context: __SerdeContext): FindingStatistics => {
  return {
    CountBySeverity:
      output.countBySeverity !== undefined && output.countBySeverity !== null
        ? deserializeAws_restJson1CountBySeverity(output.countBySeverity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FlowLogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): FlowLogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return {
    Lat: __limitedParseFloat(output.lat),
    Lon: __limitedParseFloat(output.lon),
  } as any;
};

const deserializeAws_restJson1IamInstanceProfile = (output: any, context: __SerdeContext): IamInstanceProfile => {
  return {
    Arn: __expectString(output.arn),
    Id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    IamInstanceProfile:
      output.iamInstanceProfile !== undefined && output.iamInstanceProfile !== null
        ? deserializeAws_restJson1IamInstanceProfile(output.iamInstanceProfile, context)
        : undefined,
    ImageDescription: __expectString(output.imageDescription),
    ImageId: __expectString(output.imageId),
    InstanceId: __expectString(output.instanceId),
    InstanceState: __expectString(output.instanceState),
    InstanceType: __expectString(output.instanceType),
    LaunchTime: __expectString(output.launchTime),
    NetworkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    OutpostArn: __expectString(output.outpostArn),
    Platform: __expectString(output.platform),
    ProductCodes:
      output.productCodes !== undefined && output.productCodes !== null
        ? deserializeAws_restJson1ProductCodes(output.productCodes, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1Invitations = (output: any, context: __SerdeContext): Invitation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
};

const deserializeAws_restJson1IpSetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Ipv6Addresses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1LocalIpDetails = (output: any, context: __SerdeContext): LocalIpDetails => {
  return {
    IpAddressV4: __expectString(output.ipAddressV4),
  } as any;
};

const deserializeAws_restJson1LocalPortDetails = (output: any, context: __SerdeContext): LocalPortDetails => {
  return {
    Port: __expectInt(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

const deserializeAws_restJson1Master = (output: any, context: __SerdeContext): Master => {
  return {
    AccountId: __expectString(output.accountId),
    InvitationId: __expectString(output.invitationId),
    InvitedAt: __expectString(output.invitedAt),
    RelationshipStatus: __expectString(output.relationshipStatus),
  } as any;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    AccountId: __expectString(output.accountId),
    DetectorId: __expectString(output.detectorId),
    Email: __expectString(output.email),
    InvitedAt: __expectString(output.invitedAt),
    MasterId: __expectString(output.masterId),
    RelationshipStatus: __expectString(output.relationshipStatus),
    UpdatedAt: __expectString(output.updatedAt),
  } as any;
};

const deserializeAws_restJson1MemberDataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MemberDataSourceConfiguration => {
  return {
    AccountId: __expectString(output.accountId),
    DataSources:
      output.dataSources !== undefined && output.dataSources !== null
        ? deserializeAws_restJson1DataSourceConfigurationsResult(output.dataSources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberDataSourceConfigurations = (
  output: any,
  context: __SerdeContext
): MemberDataSourceConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberDataSourceConfiguration(entry, context);
    });
};

const deserializeAws_restJson1Members = (output: any, context: __SerdeContext): Member[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Member(entry, context);
    });
};

const deserializeAws_restJson1Neq = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1NetworkConnectionAction = (
  output: any,
  context: __SerdeContext
): NetworkConnectionAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    ConnectionDirection: __expectString(output.connectionDirection),
    LocalIpDetails:
      output.localIpDetails !== undefined && output.localIpDetails !== null
        ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.localPortDetails !== undefined && output.localPortDetails !== null
        ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
        : undefined,
    Protocol: __expectString(output.protocol),
    RemoteIpDetails:
      output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
    RemotePortDetails:
      output.remotePortDetails !== undefined && output.remotePortDetails !== null
        ? deserializeAws_restJson1RemotePortDetails(output.remotePortDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    Ipv6Addresses:
      output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
        ? deserializeAws_restJson1Ipv6Addresses(output.ipv6Addresses, context)
        : undefined,
    NetworkInterfaceId: __expectString(output.networkInterfaceId),
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
    PrivateIpAddresses:
      output.privateIpAddresses !== undefined && output.privateIpAddresses !== null
        ? deserializeAws_restJson1PrivateIpAddresses(output.privateIpAddresses, context)
        : undefined,
    PublicDnsName: __expectString(output.publicDnsName),
    PublicIp: __expectString(output.publicIp),
    SecurityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    SubnetId: __expectString(output.subnetId),
    VpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};

const deserializeAws_restJson1NotEquals = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Organization = (output: any, context: __SerdeContext): Organization => {
  return {
    Asn: __expectString(output.asn),
    AsnOrg: __expectString(output.asnOrg),
    Isp: __expectString(output.isp),
    Org: __expectString(output.org),
  } as any;
};

const deserializeAws_restJson1OrganizationDataSourceConfigurationsResult = (
  output: any,
  context: __SerdeContext
): OrganizationDataSourceConfigurationsResult => {
  return {
    S3Logs:
      output.s3Logs !== undefined && output.s3Logs !== null
        ? deserializeAws_restJson1OrganizationS3LogsConfigurationResult(output.s3Logs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrganizationS3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): OrganizationS3LogsConfigurationResult => {
  return {
    AutoEnable: __expectBoolean(output.autoEnable),
  } as any;
};

const deserializeAws_restJson1Owner = (output: any, context: __SerdeContext): Owner => {
  return {
    Id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1PermissionConfiguration = (
  output: any,
  context: __SerdeContext
): PermissionConfiguration => {
  return {
    AccountLevelPermissions:
      output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
        ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
        : undefined,
    BucketLevelPermissions:
      output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
        ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return {
    Blocked: __expectBoolean(output.blocked),
    PortProbeDetails:
      output.portProbeDetails !== undefined && output.portProbeDetails !== null
        ? deserializeAws_restJson1PortProbeDetails(output.portProbeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return {
    LocalIpDetails:
      output.localIpDetails !== undefined && output.localIpDetails !== null
        ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.localPortDetails !== undefined && output.localPortDetails !== null
        ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
        : undefined,
    RemoteIpDetails:
      output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
        ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetails = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
};

const deserializeAws_restJson1PrivateIpAddressDetails = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails => {
  return {
    PrivateDnsName: __expectString(output.privateDnsName),
    PrivateIpAddress: __expectString(output.privateIpAddress),
  } as any;
};

const deserializeAws_restJson1PrivateIpAddresses = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PrivateIpAddressDetails(entry, context);
    });
};

const deserializeAws_restJson1ProductCode = (output: any, context: __SerdeContext): ProductCode => {
  return {
    Code: __expectString(output.code),
    ProductType: __expectString(output.productType),
  } as any;
};

const deserializeAws_restJson1ProductCodes = (output: any, context: __SerdeContext): ProductCode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProductCode(entry, context);
    });
};

const deserializeAws_restJson1PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return {
    EffectivePermission: __expectString(output.effectivePermission),
    PermissionConfiguration:
      output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
        ? deserializeAws_restJson1PermissionConfiguration(output.permissionConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RemoteIpDetails = (output: any, context: __SerdeContext): RemoteIpDetails => {
  return {
    City:
      output.city !== undefined && output.city !== null
        ? deserializeAws_restJson1City(output.city, context)
        : undefined,
    Country:
      output.country !== undefined && output.country !== null
        ? deserializeAws_restJson1Country(output.country, context)
        : undefined,
    GeoLocation:
      output.geoLocation !== undefined && output.geoLocation !== null
        ? deserializeAws_restJson1GeoLocation(output.geoLocation, context)
        : undefined,
    IpAddressV4: __expectString(output.ipAddressV4),
    Organization:
      output.organization !== undefined && output.organization !== null
        ? deserializeAws_restJson1Organization(output.organization, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RemotePortDetails = (output: any, context: __SerdeContext): RemotePortDetails => {
  return {
    Port: __expectInt(output.port),
    PortName: __expectString(output.portName),
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    AccessKeyDetails:
      output.accessKeyDetails !== undefined && output.accessKeyDetails !== null
        ? deserializeAws_restJson1AccessKeyDetails(output.accessKeyDetails, context)
        : undefined,
    InstanceDetails:
      output.instanceDetails !== undefined && output.instanceDetails !== null
        ? deserializeAws_restJson1InstanceDetails(output.instanceDetails, context)
        : undefined,
    ResourceType: __expectString(output.resourceType),
    S3BucketDetails:
      output.s3BucketDetails !== undefined && output.s3BucketDetails !== null
        ? deserializeAws_restJson1S3BucketDetails(output.s3BucketDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketDetail = (output: any, context: __SerdeContext): S3BucketDetail => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    DefaultServerSideEncryption:
      output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
        ? deserializeAws_restJson1DefaultServerSideEncryption(output.defaultServerSideEncryption, context)
        : undefined,
    Name: __expectString(output.name),
    Owner:
      output.owner !== undefined && output.owner !== null
        ? deserializeAws_restJson1Owner(output.owner, context)
        : undefined,
    PublicAccess:
      output.publicAccess !== undefined && output.publicAccess !== null
        ? deserializeAws_restJson1PublicAccess(output.publicAccess, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1S3BucketDetails = (output: any, context: __SerdeContext): S3BucketDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3BucketDetail(entry, context);
    });
};

const deserializeAws_restJson1S3LogsConfigurationResult = (
  output: any,
  context: __SerdeContext
): S3LogsConfigurationResult => {
  return {
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return {
    GroupId: __expectString(output.groupId),
    GroupName: __expectString(output.groupName),
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityGroup(entry, context);
    });
};

const deserializeAws_restJson1Service = (output: any, context: __SerdeContext): Service => {
  return {
    Action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1Action(output.action, context)
        : undefined,
    Archived: __expectBoolean(output.archived),
    Count: __expectInt(output.count),
    DetectorId: __expectString(output.detectorId),
    EventFirstSeen: __expectString(output.eventFirstSeen),
    EventLastSeen: __expectString(output.eventLastSeen),
    Evidence:
      output.evidence !== undefined && output.evidence !== null
        ? deserializeAws_restJson1Evidence(output.evidence, context)
        : undefined,
    ResourceRole: __expectString(output.resourceRole),
    ServiceName: __expectString(output.serviceName),
    UserFeedback: __expectString(output.userFeedback),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.key),
    Value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1ThreatIntelligenceDetail = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail => {
  return {
    ThreatListName: __expectString(output.threatListName),
    ThreatNames:
      output.threatNames !== undefined && output.threatNames !== null
        ? deserializeAws_restJson1ThreatNames(output.threatNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ThreatIntelligenceDetails = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThreatIntelligenceDetail(entry, context);
    });
};

const deserializeAws_restJson1ThreatIntelSetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ThreatNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Total = (output: any, context: __SerdeContext): Total => {
  return {
    Amount: __expectString(output.amount),
    Unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_restJson1UnprocessedAccount = (output: any, context: __SerdeContext): UnprocessedAccount => {
  return {
    AccountId: __expectString(output.accountId),
    Result: __expectString(output.result),
  } as any;
};

const deserializeAws_restJson1UnprocessedAccounts = (output: any, context: __SerdeContext): UnprocessedAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};

const deserializeAws_restJson1UsageAccountResult = (output: any, context: __SerdeContext): UsageAccountResult => {
  return {
    AccountId: __expectString(output.accountId),
    Total:
      output.total !== undefined && output.total !== null
        ? deserializeAws_restJson1Total(output.total, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UsageAccountResultList = (output: any, context: __SerdeContext): UsageAccountResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageAccountResult(entry, context);
    });
};

const deserializeAws_restJson1UsageDataSourceResult = (output: any, context: __SerdeContext): UsageDataSourceResult => {
  return {
    DataSource: __expectString(output.dataSource),
    Total:
      output.total !== undefined && output.total !== null
        ? deserializeAws_restJson1Total(output.total, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UsageDataSourceResultList = (
  output: any,
  context: __SerdeContext
): UsageDataSourceResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageDataSourceResult(entry, context);
    });
};

const deserializeAws_restJson1UsageResourceResult = (output: any, context: __SerdeContext): UsageResourceResult => {
  return {
    Resource: __expectString(output.resource),
    Total:
      output.total !== undefined && output.total !== null
        ? deserializeAws_restJson1Total(output.total, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UsageResourceResultList = (
  output: any,
  context: __SerdeContext
): UsageResourceResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UsageResourceResult(entry, context);
    });
};

const deserializeAws_restJson1UsageStatistics = (output: any, context: __SerdeContext): UsageStatistics => {
  return {
    SumByAccount:
      output.sumByAccount !== undefined && output.sumByAccount !== null
        ? deserializeAws_restJson1UsageAccountResultList(output.sumByAccount, context)
        : undefined,
    SumByDataSource:
      output.sumByDataSource !== undefined && output.sumByDataSource !== null
        ? deserializeAws_restJson1UsageDataSourceResultList(output.sumByDataSource, context)
        : undefined,
    SumByResource:
      output.sumByResource !== undefined && output.sumByResource !== null
        ? deserializeAws_restJson1UsageResourceResultList(output.sumByResource, context)
        : undefined,
    TopResources:
      output.topResources !== undefined && output.topResources !== null
        ? deserializeAws_restJson1UsageResourceResultList(output.topResources, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
