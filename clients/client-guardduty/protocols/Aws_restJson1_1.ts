import {
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "../commands/AcceptInvitationCommand";
import {
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput,
} from "../commands/ArchiveFindingsCommand";
import {
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
} from "../commands/CreateDetectorCommand";
import {
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "../commands/CreateFilterCommand";
import {
  CreateIPSetCommandInput,
  CreateIPSetCommandOutput,
} from "../commands/CreateIPSetCommand";
import {
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "../commands/CreateMembersCommand";
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
import {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "../commands/DeclineInvitationsCommand";
import {
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
} from "../commands/DeleteDetectorCommand";
import {
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "../commands/DeleteFilterCommand";
import {
  DeleteIPSetCommandInput,
  DeleteIPSetCommandOutput,
} from "../commands/DeleteIPSetCommand";
import {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "../commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "../commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "../commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "../commands/DeleteThreatIntelSetCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "../commands/DescribePublishingDestinationCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "../commands/DisassociateMembersCommand";
import {
  GetDetectorCommandInput,
  GetDetectorCommandOutput,
} from "../commands/GetDetectorCommand";
import {
  GetFilterCommandInput,
  GetFilterCommandOutput,
} from "../commands/GetFilterCommand";
import {
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
} from "../commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "../commands/GetFindingsStatisticsCommand";
import {
  GetIPSetCommandInput,
  GetIPSetCommandOutput,
} from "../commands/GetIPSetCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "../commands/GetMasterAccountCommand";
import {
  GetMembersCommandInput,
  GetMembersCommandOutput,
} from "../commands/GetMembersCommand";
import {
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput,
} from "../commands/GetThreatIntelSetCommand";
import {
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
} from "../commands/InviteMembersCommand";
import {
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "../commands/ListDetectorsCommand";
import {
  ListFiltersCommandInput,
  ListFiltersCommandOutput,
} from "../commands/ListFiltersCommand";
import {
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import {
  ListIPSetsCommandInput,
  ListIPSetsCommandOutput,
} from "../commands/ListIPSetsCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput,
} from "../commands/ListMembersCommand";
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
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
} from "../commands/UnarchiveFindingsCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
import {
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput,
} from "../commands/UpdateDetectorCommand";
import {
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
} from "../commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "../commands/UpdateFindingsFeedbackCommand";
import {
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput,
} from "../commands/UpdateIPSetCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "../commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "../commands/UpdateThreatIntelSetCommand";
import {
  AccessKeyDetails,
  AccountDetail,
  Action,
  AwsApiCallAction,
  BadRequestException,
  City,
  Condition,
  Country,
  Destination,
  DestinationProperties,
  DnsRequestAction,
  DomainDetails,
  Evidence,
  Finding,
  FindingCriteria,
  FindingStatisticType,
  FindingStatistics,
  GeoLocation,
  IamInstanceProfile,
  InstanceDetails,
  InternalServerErrorException,
  Invitation,
  LocalPortDetails,
  Master,
  Member,
  NetworkConnectionAction,
  NetworkInterface,
  Organization,
  PortProbeAction,
  PortProbeDetail,
  PrivateIpAddressDetails,
  ProductCode,
  RemoteIpDetails,
  RemotePortDetails,
  Resource,
  SecurityGroup,
  Service,
  SortCriteria,
  Tag,
  ThreatIntelligenceDetail,
  UnprocessedAccount,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AcceptInvitationCommand(
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.InvitationId !== undefined) {
    bodyParams['invitationId'] = input.InvitationId;
  }
  if (input.MasterId !== undefined) {
    bodyParams['masterId'] = input.MasterId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ArchiveFindingsCommand(
  input: ArchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/archive";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams['findingIds'] = serializeAws_restJson1_1FindingIds(input.FindingIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateDetectorCommand(
  input: CreateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams['clientToken'] = input.ClientToken;
  }
  if (input.Enable !== undefined) {
    bodyParams['enable'] = input.Enable;
  }
  if (input.FindingPublishingFrequency !== undefined) {
    bodyParams['findingPublishingFrequency'] = input.FindingPublishingFrequency;
  }
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateFilterCommand(
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams['action'] = input.Action;
  }
  if (input.ClientToken !== undefined) {
    bodyParams['clientToken'] = input.ClientToken;
  }
  if (input.Description !== undefined) {
    bodyParams['description'] = input.Description;
  }
  if (input.FindingCriteria !== undefined) {
    bodyParams['findingCriteria'] = serializeAws_restJson1_1FindingCriteria(input.FindingCriteria, context);
  }
  if (input.Name !== undefined) {
    bodyParams['name'] = input.Name;
  }
  if (input.Rank !== undefined) {
    bodyParams['rank'] = input.Rank;
  }
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateIPSetCommand(
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams['activate'] = input.Activate;
  }
  if (input.ClientToken !== undefined) {
    bodyParams['clientToken'] = input.ClientToken;
  }
  if (input.Format !== undefined) {
    bodyParams['format'] = input.Format;
  }
  if (input.Location !== undefined) {
    bodyParams['location'] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams['name'] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateMembersCommand(
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountDetails !== undefined) {
    bodyParams['accountDetails'] = serializeAws_restJson1_1AccountDetails(input.AccountDetails, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreatePublishingDestinationCommand(
  input: CreatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams['clientToken'] = input.ClientToken;
  }
  if (input.DestinationProperties !== undefined) {
    bodyParams['destinationProperties'] = serializeAws_restJson1_1DestinationProperties(input.DestinationProperties, context);
  }
  if (input.DestinationType !== undefined) {
    bodyParams['destinationType'] = input.DestinationType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateSampleFindingsCommand(
  input: CreateSampleFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/create";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingTypes !== undefined) {
    bodyParams['findingTypes'] = serializeAws_restJson1_1FindingTypes(input.FindingTypes, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1CreateThreatIntelSetCommand(
  input: CreateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams['activate'] = input.Activate;
  }
  if (input.ClientToken !== undefined) {
    bodyParams['clientToken'] = input.ClientToken;
  }
  if (input.Format !== undefined) {
    bodyParams['format'] = input.Format;
  }
  if (input.Location !== undefined) {
    bodyParams['location'] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams['name'] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeclineInvitationsCommand(
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/invitation/decline";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeleteDetectorCommand(
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DeleteFilterCommand(
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.FilterName !== undefined) {
    const labelValue: any = input.FilterName.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: FilterName.');
    }
    resolvedPath = resolvedPath.replace('{FilterName}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: FilterName.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DeleteIPSetCommand(
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.IpSetId !== undefined) {
    const labelValue: any = input.IpSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: IpSetId.');
    }
    resolvedPath = resolvedPath.replace('{IpSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: IpSetId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DeleteInvitationsCommand(
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/invitation/delete";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeleteMembersCommand(
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/delete";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeletePublishingDestinationCommand(
  input: DeletePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: any = input.DestinationId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DestinationId.');
    }
    resolvedPath = resolvedPath.replace('{DestinationId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DestinationId.');
  }
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DeleteThreatIntelSetCommand(
  input: DeleteThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: any = input.ThreatIntelSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ThreatIntelSetId.');
    }
    resolvedPath = resolvedPath.replace('{ThreatIntelSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ThreatIntelSetId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DescribePublishingDestinationCommand(
  input: DescribePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: any = input.DestinationId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DestinationId.');
    }
    resolvedPath = resolvedPath.replace('{DestinationId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DestinationId.');
  }
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DisassociateFromMasterAccountCommand(
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/master/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DisassociateMembersCommand(
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1GetDetectorCommand(
  input: GetDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetFilterCommand(
  input: GetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.FilterName !== undefined) {
    const labelValue: any = input.FilterName.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: FilterName.');
    }
    resolvedPath = resolvedPath.replace('{FilterName}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: FilterName.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetFindingsCommand(
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/get";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams['findingIds'] = serializeAws_restJson1_1FindingIds(input.FindingIds, context);
  }
  if (input.SortCriteria !== undefined) {
    bodyParams['sortCriteria'] = serializeAws_restJson1_1SortCriteria(input.SortCriteria, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1GetFindingsStatisticsCommand(
  input: GetFindingsStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/statistics";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingCriteria !== undefined) {
    bodyParams['findingCriteria'] = serializeAws_restJson1_1FindingCriteria(input.FindingCriteria, context);
  }
  if (input.FindingStatisticTypes !== undefined) {
    bodyParams['findingStatisticTypes'] = serializeAws_restJson1_1FindingStatisticTypes(input.FindingStatisticTypes, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1GetIPSetCommand(
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.IpSetId !== undefined) {
    const labelValue: any = input.IpSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: IpSetId.');
    }
    resolvedPath = resolvedPath.replace('{IpSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: IpSetId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetInvitationsCountCommand(
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/invitation/count";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetMasterAccountCommand(
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetMembersCommand(
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/get";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1GetThreatIntelSetCommand(
  input: GetThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: any = input.ThreatIntelSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ThreatIntelSetId.');
    }
    resolvedPath = resolvedPath.replace('{ThreatIntelSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ThreatIntelSetId.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1InviteMembersCommand(
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/invite";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  if (input.DisableEmailNotification !== undefined) {
    bodyParams['disableEmailNotification'] = input.DisableEmailNotification;
  }
  if (input.Message !== undefined) {
    bodyParams['message'] = input.Message;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListDetectorsCommand(
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListFiltersCommand(
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListFindingsCommand(
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingCriteria !== undefined) {
    bodyParams['findingCriteria'] = serializeAws_restJson1_1FindingCriteria(input.FindingCriteria, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['maxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['nextToken'] = input.NextToken;
  }
  if (input.SortCriteria !== undefined) {
    bodyParams['sortCriteria'] = serializeAws_restJson1_1SortCriteria(input.SortCriteria, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListIPSetsCommand(
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListInvitationsCommand(
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/invitation";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListMembersCommand(
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  if (input.OnlyAssociated !== undefined) {
    query['onlyAssociated'] = input.OnlyAssociated.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListPublishingDestinationsCommand(
  input: ListPublishingDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1ListThreatIntelSetsCommand(
  input: ListThreatIntelSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['maxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['nextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1StartMonitoringMembersCommand(
  input: StartMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/start";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1StopMonitoringMembersCommand(
  input: StopMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/member/stop";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams['accountIds'] = serializeAws_restJson1_1AccountIds(input.AccountIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UnarchiveFindingsCommand(
  input: UnarchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/unarchive";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams['findingIds'] = serializeAws_restJson1_1FindingIds(input.FindingIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query['tagKeys'] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1UpdateDetectorCommand(
  input: UpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Enable !== undefined) {
    bodyParams['enable'] = input.Enable;
  }
  if (input.FindingPublishingFrequency !== undefined) {
    bodyParams['findingPublishingFrequency'] = input.FindingPublishingFrequency;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdateFilterCommand(
  input: UpdateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.FilterName !== undefined) {
    const labelValue: any = input.FilterName.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: FilterName.');
    }
    resolvedPath = resolvedPath.replace('{FilterName}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: FilterName.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams['action'] = input.Action;
  }
  if (input.Description !== undefined) {
    bodyParams['description'] = input.Description;
  }
  if (input.FindingCriteria !== undefined) {
    bodyParams['findingCriteria'] = serializeAws_restJson1_1FindingCriteria(input.FindingCriteria, context);
  }
  if (input.Rank !== undefined) {
    bodyParams['rank'] = input.Rank;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdateFindingsFeedbackCommand(
  input: UpdateFindingsFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/findings/feedback";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Comments !== undefined) {
    bodyParams['comments'] = input.Comments;
  }
  if (input.Feedback !== undefined) {
    bodyParams['feedback'] = input.Feedback;
  }
  if (input.FindingIds !== undefined) {
    bodyParams['findingIds'] = serializeAws_restJson1_1FindingIds(input.FindingIds, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdateIPSetCommand(
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.IpSetId !== undefined) {
    const labelValue: any = input.IpSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: IpSetId.');
    }
    resolvedPath = resolvedPath.replace('{IpSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: IpSetId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams['activate'] = input.Activate;
  }
  if (input.Location !== undefined) {
    bodyParams['location'] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams['name'] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdatePublishingDestinationCommand(
  input: UpdatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: any = input.DestinationId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DestinationId.');
    }
    resolvedPath = resolvedPath.replace('{DestinationId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DestinationId.');
  }
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.DestinationProperties !== undefined) {
    bodyParams['destinationProperties'] = serializeAws_restJson1_1DestinationProperties(input.DestinationProperties, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdateThreatIntelSetCommand(
  input: UpdateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: any = input.DetectorId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: DetectorId.');
    }
    resolvedPath = resolvedPath.replace('{DetectorId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: DetectorId.');
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: any = input.ThreatIntelSetId.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ThreatIntelSetId.');
    }
    resolvedPath = resolvedPath.replace('{ThreatIntelSetId}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ThreatIntelSetId.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams['activate'] = input.Activate;
  }
  if (input.Location !== undefined) {
    bodyParams['location'] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams['name'] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function deserializeAws_restJson1_1AcceptInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AcceptInvitationCommandError(output, context);
  }
  const contents: AcceptInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptInvitationResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AcceptInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<AcceptInvitationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ArchiveFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ArchiveFindingsCommandError(output, context);
  }
  const contents: ArchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ArchiveFindingsResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ArchiveFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ArchiveFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateDetectorCommandError(output, context);
  }
  const contents: CreateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDetectorResponse",
    DetectorId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorId !== undefined) {
    contents.DetectorId = data.detectorId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateDetectorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateFilterCommandError(output, context);
  }
  const contents: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFilterResponse",
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateFilterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateIPSetCommandError(output, context);
  }
  const contents: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIPSetResponse",
    IpSetId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetId !== undefined) {
    contents.IpSetId = data.ipSetId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateIPSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreatePublishingDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreatePublishingDestinationCommandError(output, context);
  }
  const contents: CreatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePublishingDestinationResponse",
    DestinationId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined) {
    contents.DestinationId = data.destinationId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePublishingDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreatePublishingDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateSampleFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateSampleFindingsCommandError(output, context);
  }
  const contents: CreateSampleFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSampleFindingsResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSampleFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateSampleFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateThreatIntelSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateThreatIntelSetCommandError(output, context);
  }
  const contents: CreateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateThreatIntelSetResponse",
    ThreatIntelSetId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.threatIntelSetId !== undefined) {
    contents.ThreatIntelSetId = data.threatIntelSetId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateThreatIntelSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateThreatIntelSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeclineInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeclineInvitationsCommandError(output, context);
  }
  const contents: DeclineInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeclineInvitationsResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeclineInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeclineInvitationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteDetectorCommandError(output, context);
  }
  const contents: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDetectorResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteDetectorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteFilterCommandError(output, context);
  }
  const contents: DeleteFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFilterResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteFilterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteIPSetCommandError(output, context);
  }
  const contents: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIPSetResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteIPSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteInvitationsCommandError(output, context);
  }
  const contents: DeleteInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInvitationsResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteInvitationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeletePublishingDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeletePublishingDestinationCommandError(output, context);
  }
  const contents: DeletePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePublishingDestinationResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePublishingDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeletePublishingDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteThreatIntelSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteThreatIntelSetCommandError(output, context);
  }
  const contents: DeleteThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteThreatIntelSetResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteThreatIntelSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteThreatIntelSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribePublishingDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribePublishingDestinationCommandError(output, context);
  }
  const contents: DescribePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePublishingDestinationResponse",
    DestinationId: undefined,
    DestinationProperties: undefined,
    DestinationType: undefined,
    PublishingFailureStartTimestamp: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined) {
    contents.DestinationId = data.destinationId;
  }
  if (data.destinationProperties !== undefined) {
    contents.DestinationProperties = deserializeAws_restJson1_1DestinationProperties(data.destinationProperties, context);
  }
  if (data.destinationType !== undefined) {
    contents.DestinationType = data.destinationType;
  }
  if (data.publishingFailureStartTimestamp !== undefined) {
    contents.PublishingFailureStartTimestamp = data.publishingFailureStartTimestamp;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribePublishingDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribePublishingDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: DisassociateFromMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateFromMasterAccountResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateFromMasterAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DisassociateFromMasterAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DisassociateMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisassociateMembersCommandError(output, context);
  }
  const contents: DisassociateMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DisassociateMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDetectorCommandError(output, context);
  }
  const contents: GetDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDetectorResponse",
    CreatedAt: undefined,
    FindingPublishingFrequency: undefined,
    ServiceRole: undefined,
    Status: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.findingPublishingFrequency !== undefined) {
    contents.FindingPublishingFrequency = data.findingPublishingFrequency;
  }
  if (data.serviceRole !== undefined) {
    contents.ServiceRole = data.serviceRole;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.updatedAt !== undefined) {
    contents.UpdatedAt = data.updatedAt;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetDetectorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetFilterCommandError(output, context);
  }
  const contents: GetFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFilterResponse",
    Action: undefined,
    Description: undefined,
    FindingCriteria: undefined,
    Name: undefined,
    Rank: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.action !== undefined) {
    contents.Action = data.action;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.findingCriteria !== undefined) {
    contents.FindingCriteria = deserializeAws_restJson1_1FindingCriteria(data.findingCriteria, context);
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.rank !== undefined) {
    contents.Rank = data.rank;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetFilterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined) {
    contents.Findings = deserializeAws_restJson1_1Findings(data.findings, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetFindingsStatisticsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetFindingsStatisticsCommandError(output, context);
  }
  const contents: GetFindingsStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingsStatisticsResponse",
    FindingStatistics: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingStatistics !== undefined) {
    contents.FindingStatistics = deserializeAws_restJson1_1FindingStatistics(data.findingStatistics, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFindingsStatisticsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetFindingsStatisticsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetIPSetCommandError(output, context);
  }
  const contents: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIPSetResponse",
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined) {
    contents.Format = data.format;
  }
  if (data.location !== undefined) {
    contents.Location = data.location;
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetIPSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetInvitationsCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetInvitationsCountCommandError(output, context);
  }
  const contents: GetInvitationsCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInvitationsCountResponse",
    InvitationsCount: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.invitationsCount !== undefined) {
    contents.InvitationsCount = data.invitationsCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetInvitationsCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetInvitationsCountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetMasterAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetMasterAccountCommandError(output, context);
  }
  const contents: GetMasterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMasterAccountResponse",
    Master: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.master !== undefined) {
    contents.Master = deserializeAws_restJson1_1Master(data.master, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMasterAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetMasterAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.members !== undefined) {
    contents.Members = deserializeAws_restJson1_1Members(data.members, context);
  }
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetThreatIntelSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetThreatIntelSetCommandError(output, context);
  }
  const contents: GetThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetThreatIntelSetResponse",
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined) {
    contents.Format = data.format;
  }
  if (data.location !== undefined) {
    contents.Location = data.location;
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetThreatIntelSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetThreatIntelSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1InviteMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<InviteMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDetectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDetectorsCommandError(output, context);
  }
  const contents: ListDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDetectorsResponse",
    DetectorIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorIds !== undefined) {
    contents.DetectorIds = deserializeAws_restJson1_1DetectorIds(data.detectorIds, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListDetectorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFiltersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFiltersCommandError(output, context);
  }
  const contents: ListFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFiltersResponse",
    FilterNames: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.filterNames !== undefined) {
    contents.FilterNames = deserializeAws_restJson1_1FilterNames(data.filterNames, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFiltersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListFiltersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFindingsCommandError(output, context);
  }
  const contents: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFindingsResponse",
    FindingIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingIds !== undefined) {
    contents.FindingIds = deserializeAws_restJson1_1FindingIds(data.findingIds, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListIPSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListIPSetsCommandError(output, context);
  }
  const contents: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIPSetsResponse",
    IpSetIds: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetIds !== undefined) {
    contents.IpSetIds = deserializeAws_restJson1_1IpSetIds(data.ipSetIds, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListIPSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListIPSetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInvitationsResponse",
    Invitations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.invitations !== undefined) {
    contents.Invitations = deserializeAws_restJson1_1Invitations(data.invitations, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListInvitationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.members !== undefined) {
    contents.Members = deserializeAws_restJson1_1Members(data.members, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPublishingDestinationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPublishingDestinationsCommandError(output, context);
  }
  const contents: ListPublishingDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPublishingDestinationsResponse",
    Destinations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinations !== undefined) {
    contents.Destinations = deserializeAws_restJson1_1Destinations(data.destinations, context);
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPublishingDestinationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListPublishingDestinationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListThreatIntelSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListThreatIntelSetsCommandError(output, context);
  }
  const contents: ListThreatIntelSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListThreatIntelSetsResponse",
    NextToken: undefined,
    ThreatIntelSetIds: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  if (data.threatIntelSetIds !== undefined) {
    contents.ThreatIntelSetIds = deserializeAws_restJson1_1ThreatIntelSetIds(data.threatIntelSetIds, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListThreatIntelSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListThreatIntelSetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartMonitoringMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StartMonitoringMembersCommandError(output, context);
  }
  const contents: StartMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMonitoringMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartMonitoringMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StartMonitoringMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StopMonitoringMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StopMonitoringMembersCommandError(output, context);
  }
  const contents: StopMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopMonitoringMembersResponse",
    UnprocessedAccounts: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedAccounts !== undefined) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(data.unprocessedAccounts, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopMonitoringMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StopMonitoringMembersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UnarchiveFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UnarchiveFindingsCommandError(output, context);
  }
  const contents: UnarchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnarchiveFindingsResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UnarchiveFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UnarchiveFindingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateDetectorCommandError(output, context);
  }
  const contents: UpdateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateDetectorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateFilterCommandError(output, context);
  }
  const contents: UpdateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFilterResponse",
    Name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateFilterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateFindingsFeedbackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateFindingsFeedbackCommandError(output, context);
  }
  const contents: UpdateFindingsFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFindingsFeedbackResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFindingsFeedbackCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateFindingsFeedbackCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateIPSetCommandError(output, context);
  }
  const contents: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIPSetResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateIPSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdatePublishingDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdatePublishingDestinationCommandError(output, context);
  }
  const contents: UpdatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePublishingDestinationResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePublishingDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdatePublishingDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateThreatIntelSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateThreatIntelSetCommandError(output, context);
  }
  const contents: UpdateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateThreatIntelSetResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateThreatIntelSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateThreatIntelSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.guardduty#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    Type: undefined,
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  if (data.__type !== undefined) {
    contents.Type = data.__type;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    __type: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    Type: undefined,
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  if (data.__type !== undefined) {
    contents.Type = data.__type;
  }
  return contents;
};

const serializeAws_restJson1_1AccountDetail = (
  input: AccountDetail,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams['accountId'] = input.AccountId;
  }
  if (input.Email !== undefined) {
    bodyParams['email'] = input.Email;
  }
  return bodyParams;
}

const serializeAws_restJson1_1AccountDetails = (
  input: Array<AccountDetail>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AccountDetail(entry, context)
  );
}

const serializeAws_restJson1_1AccountIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Eq !== undefined) {
    bodyParams['eq'] = serializeAws_restJson1_1Eq(input.Eq, context);
  }
  if (input.Equals !== undefined) {
    bodyParams['equals'] = serializeAws_restJson1_1Equals(input.Equals, context);
  }
  if (input.GreaterThan !== undefined) {
    bodyParams['greaterThan'] = input.GreaterThan;
  }
  if (input.GreaterThanOrEqual !== undefined) {
    bodyParams['greaterThanOrEqual'] = input.GreaterThanOrEqual;
  }
  if (input.Gt !== undefined) {
    bodyParams['gt'] = input.Gt;
  }
  if (input.Gte !== undefined) {
    bodyParams['gte'] = input.Gte;
  }
  if (input.LessThan !== undefined) {
    bodyParams['lessThan'] = input.LessThan;
  }
  if (input.LessThanOrEqual !== undefined) {
    bodyParams['lessThanOrEqual'] = input.LessThanOrEqual;
  }
  if (input.Lt !== undefined) {
    bodyParams['lt'] = input.Lt;
  }
  if (input.Lte !== undefined) {
    bodyParams['lte'] = input.Lte;
  }
  if (input.Neq !== undefined) {
    bodyParams['neq'] = serializeAws_restJson1_1Neq(input.Neq, context);
  }
  if (input.NotEquals !== undefined) {
    bodyParams['notEquals'] = serializeAws_restJson1_1NotEquals(input.NotEquals, context);
  }
  return bodyParams;
}

const serializeAws_restJson1_1Criterion = (
  input: { [key: string]: Condition },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1Condition(input[key], context);
  });
  return mapParams;
}

const serializeAws_restJson1_1DestinationProperties = (
  input: DestinationProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DestinationArn !== undefined) {
    bodyParams['destinationArn'] = input.DestinationArn;
  }
  if (input.KmsKeyArn !== undefined) {
    bodyParams['kmsKeyArn'] = input.KmsKeyArn;
  }
  return bodyParams;
}

const serializeAws_restJson1_1Eq = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1Equals = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1FindingCriteria = (
  input: FindingCriteria,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Criterion !== undefined) {
    bodyParams['criterion'] = serializeAws_restJson1_1Criterion(input.Criterion, context);
  }
  return bodyParams;
}

const serializeAws_restJson1_1FindingIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1FindingStatisticTypes = (
  input: Array<FindingStatisticType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1FindingTypes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1Neq = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1NotEquals = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1SortCriteria = (
  input: SortCriteria,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams['attributeName'] = input.AttributeName;
  }
  if (input.OrderBy !== undefined) {
    bodyParams['orderBy'] = input.OrderBy;
  }
  return bodyParams;
}

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const deserializeAws_restJson1_1AccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AccessKeyDetails => {
  let contents: any = {
    __type: "AccessKeyDetails",
    AccessKeyId: undefined,
    PrincipalId: undefined,
    UserName: undefined,
    UserType: undefined,
  };
  if (output.accessKeyId !== undefined) {
    contents.AccessKeyId = output.accessKeyId;
  }
  if (output.principalId !== undefined) {
    contents.PrincipalId = output.principalId;
  }
  if (output.userName !== undefined) {
    contents.UserName = output.userName;
  }
  if (output.userType !== undefined) {
    contents.UserType = output.userType;
  }
  return contents;
}

const deserializeAws_restJson1_1Action = (
  output: any,
  context: __SerdeContext
): Action => {
  let contents: any = {
    __type: "Action",
    ActionType: undefined,
    AwsApiCallAction: undefined,
    DnsRequestAction: undefined,
    NetworkConnectionAction: undefined,
    PortProbeAction: undefined,
  };
  if (output.actionType !== undefined) {
    contents.ActionType = output.actionType;
  }
  if (output.awsApiCallAction !== undefined) {
    contents.AwsApiCallAction = deserializeAws_restJson1_1AwsApiCallAction(output.awsApiCallAction, context);
  }
  if (output.dnsRequestAction !== undefined) {
    contents.DnsRequestAction = deserializeAws_restJson1_1DnsRequestAction(output.dnsRequestAction, context);
  }
  if (output.networkConnectionAction !== undefined) {
    contents.NetworkConnectionAction = deserializeAws_restJson1_1NetworkConnectionAction(output.networkConnectionAction, context);
  }
  if (output.portProbeAction !== undefined) {
    contents.PortProbeAction = deserializeAws_restJson1_1PortProbeAction(output.portProbeAction, context);
  }
  return contents;
}

const deserializeAws_restJson1_1AwsApiCallAction = (
  output: any,
  context: __SerdeContext
): AwsApiCallAction => {
  let contents: any = {
    __type: "AwsApiCallAction",
    Api: undefined,
    CallerType: undefined,
    DomainDetails: undefined,
    RemoteIpDetails: undefined,
    ServiceName: undefined,
  };
  if (output.api !== undefined) {
    contents.Api = output.api;
  }
  if (output.callerType !== undefined) {
    contents.CallerType = output.callerType;
  }
  if (output.domainDetails !== undefined) {
    contents.DomainDetails = deserializeAws_restJson1_1DomainDetails(output.domainDetails, context);
  }
  if (output.remoteIpDetails !== undefined) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(output.remoteIpDetails, context);
  }
  if (output.serviceName !== undefined) {
    contents.ServiceName = output.serviceName;
  }
  return contents;
}

const deserializeAws_restJson1_1City = (
  output: any,
  context: __SerdeContext
): City => {
  let contents: any = {
    __type: "City",
    CityName: undefined,
  };
  if (output.cityName !== undefined) {
    contents.CityName = output.cityName;
  }
  return contents;
}

const deserializeAws_restJson1_1Condition = (
  output: any,
  context: __SerdeContext
): Condition => {
  let contents: any = {
    __type: "Condition",
    Eq: undefined,
    Equals: undefined,
    GreaterThan: undefined,
    GreaterThanOrEqual: undefined,
    Gt: undefined,
    Gte: undefined,
    LessThan: undefined,
    LessThanOrEqual: undefined,
    Lt: undefined,
    Lte: undefined,
    Neq: undefined,
    NotEquals: undefined,
  };
  if (output.eq !== undefined) {
    contents.Eq = deserializeAws_restJson1_1Eq(output.eq, context);
  }
  if (output.equals !== undefined) {
    contents.Equals = deserializeAws_restJson1_1Equals(output.equals, context);
  }
  if (output.greaterThan !== undefined) {
    contents.GreaterThan = output.greaterThan;
  }
  if (output.greaterThanOrEqual !== undefined) {
    contents.GreaterThanOrEqual = output.greaterThanOrEqual;
  }
  if (output.gt !== undefined) {
    contents.Gt = output.gt;
  }
  if (output.gte !== undefined) {
    contents.Gte = output.gte;
  }
  if (output.lessThan !== undefined) {
    contents.LessThan = output.lessThan;
  }
  if (output.lessThanOrEqual !== undefined) {
    contents.LessThanOrEqual = output.lessThanOrEqual;
  }
  if (output.lt !== undefined) {
    contents.Lt = output.lt;
  }
  if (output.lte !== undefined) {
    contents.Lte = output.lte;
  }
  if (output.neq !== undefined) {
    contents.Neq = deserializeAws_restJson1_1Neq(output.neq, context);
  }
  if (output.notEquals !== undefined) {
    contents.NotEquals = deserializeAws_restJson1_1NotEquals(output.notEquals, context);
  }
  return contents;
}

const deserializeAws_restJson1_1CountBySeverity = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

const deserializeAws_restJson1_1Country = (
  output: any,
  context: __SerdeContext
): Country => {
  let contents: any = {
    __type: "Country",
    CountryCode: undefined,
    CountryName: undefined,
  };
  if (output.countryCode !== undefined) {
    contents.CountryCode = output.countryCode;
  }
  if (output.countryName !== undefined) {
    contents.CountryName = output.countryName;
  }
  return contents;
}

const deserializeAws_restJson1_1Criterion = (
  output: any,
  context: __SerdeContext
): { [key: string]: Condition } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1Condition(output[key], context);
  });
  return mapParams;
}

const deserializeAws_restJson1_1Destination = (
  output: any,
  context: __SerdeContext
): Destination => {
  let contents: any = {
    __type: "Destination",
    DestinationId: undefined,
    DestinationType: undefined,
    Status: undefined,
  };
  if (output.destinationId !== undefined) {
    contents.DestinationId = output.destinationId;
  }
  if (output.destinationType !== undefined) {
    contents.DestinationType = output.destinationType;
  }
  if (output.status !== undefined) {
    contents.Status = output.status;
  }
  return contents;
}

const deserializeAws_restJson1_1DestinationProperties = (
  output: any,
  context: __SerdeContext
): DestinationProperties => {
  let contents: any = {
    __type: "DestinationProperties",
    DestinationArn: undefined,
    KmsKeyArn: undefined,
  };
  if (output.destinationArn !== undefined) {
    contents.DestinationArn = output.destinationArn;
  }
  if (output.kmsKeyArn !== undefined) {
    contents.KmsKeyArn = output.kmsKeyArn;
  }
  return contents;
}

const deserializeAws_restJson1_1Destinations = (
  output: any,
  context: __SerdeContext
): Array<Destination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Destination(entry, context)
  );
}

const deserializeAws_restJson1_1DetectorIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1DnsRequestAction = (
  output: any,
  context: __SerdeContext
): DnsRequestAction => {
  let contents: any = {
    __type: "DnsRequestAction",
    Domain: undefined,
  };
  if (output.domain !== undefined) {
    contents.Domain = output.domain;
  }
  return contents;
}

const deserializeAws_restJson1_1DomainDetails = (
  output: any,
  context: __SerdeContext
): DomainDetails => {
  let contents: any = {
    __type: "DomainDetails",
    Domain: undefined,
  };
  if (output.domain !== undefined) {
    contents.Domain = output.domain;
  }
  return contents;
}

const deserializeAws_restJson1_1Eq = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Equals = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Evidence = (
  output: any,
  context: __SerdeContext
): Evidence => {
  let contents: any = {
    __type: "Evidence",
    ThreatIntelligenceDetails: undefined,
  };
  if (output.threatIntelligenceDetails !== undefined) {
    contents.ThreatIntelligenceDetails = deserializeAws_restJson1_1ThreatIntelligenceDetails(output.threatIntelligenceDetails, context);
  }
  return contents;
}

const deserializeAws_restJson1_1FilterNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Finding = (
  output: any,
  context: __SerdeContext
): Finding => {
  let contents: any = {
    __type: "Finding",
    AccountId: undefined,
    Arn: undefined,
    Confidence: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Partition: undefined,
    Region: undefined,
    Resource: undefined,
    SchemaVersion: undefined,
    Service: undefined,
    Severity: undefined,
    Title: undefined,
    Type: undefined,
    UpdatedAt: undefined,
  };
  if (output.accountId !== undefined) {
    contents.AccountId = output.accountId;
  }
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.confidence !== undefined) {
    contents.Confidence = output.confidence;
  }
  if (output.createdAt !== undefined) {
    contents.CreatedAt = output.createdAt;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.partition !== undefined) {
    contents.Partition = output.partition;
  }
  if (output.region !== undefined) {
    contents.Region = output.region;
  }
  if (output.resource !== undefined) {
    contents.Resource = deserializeAws_restJson1_1Resource(output.resource, context);
  }
  if (output.schemaVersion !== undefined) {
    contents.SchemaVersion = output.schemaVersion;
  }
  if (output.service !== undefined) {
    contents.Service = deserializeAws_restJson1_1Service(output.service, context);
  }
  if (output.severity !== undefined) {
    contents.Severity = output.severity;
  }
  if (output.title !== undefined) {
    contents.Title = output.title;
  }
  if (output.type !== undefined) {
    contents.Type = output.type;
  }
  if (output.updatedAt !== undefined) {
    contents.UpdatedAt = output.updatedAt;
  }
  return contents;
}

const deserializeAws_restJson1_1FindingCriteria = (
  output: any,
  context: __SerdeContext
): FindingCriteria => {
  let contents: any = {
    __type: "FindingCriteria",
    Criterion: undefined,
  };
  if (output.criterion !== undefined) {
    contents.Criterion = deserializeAws_restJson1_1Criterion(output.criterion, context);
  }
  return contents;
}

const deserializeAws_restJson1_1FindingIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1FindingStatistics = (
  output: any,
  context: __SerdeContext
): FindingStatistics => {
  let contents: any = {
    __type: "FindingStatistics",
    CountBySeverity: undefined,
  };
  if (output.countBySeverity !== undefined) {
    contents.CountBySeverity = deserializeAws_restJson1_1CountBySeverity(output.countBySeverity, context);
  }
  return contents;
}

const deserializeAws_restJson1_1Findings = (
  output: any,
  context: __SerdeContext
): Array<Finding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Finding(entry, context)
  );
}

const deserializeAws_restJson1_1GeoLocation = (
  output: any,
  context: __SerdeContext
): GeoLocation => {
  let contents: any = {
    __type: "GeoLocation",
    Lat: undefined,
    Lon: undefined,
  };
  if (output.lat !== undefined) {
    contents.Lat = output.lat;
  }
  if (output.lon !== undefined) {
    contents.Lon = output.lon;
  }
  return contents;
}

const deserializeAws_restJson1_1IamInstanceProfile = (
  output: any,
  context: __SerdeContext
): IamInstanceProfile => {
  let contents: any = {
    __type: "IamInstanceProfile",
    Arn: undefined,
    Id: undefined,
  };
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  return contents;
}

const deserializeAws_restJson1_1InstanceDetails = (
  output: any,
  context: __SerdeContext
): InstanceDetails => {
  let contents: any = {
    __type: "InstanceDetails",
    AvailabilityZone: undefined,
    IamInstanceProfile: undefined,
    ImageDescription: undefined,
    ImageId: undefined,
    InstanceId: undefined,
    InstanceState: undefined,
    InstanceType: undefined,
    LaunchTime: undefined,
    NetworkInterfaces: undefined,
    Platform: undefined,
    ProductCodes: undefined,
    Tags: undefined,
  };
  if (output.availabilityZone !== undefined) {
    contents.AvailabilityZone = output.availabilityZone;
  }
  if (output.iamInstanceProfile !== undefined) {
    contents.IamInstanceProfile = deserializeAws_restJson1_1IamInstanceProfile(output.iamInstanceProfile, context);
  }
  if (output.imageDescription !== undefined) {
    contents.ImageDescription = output.imageDescription;
  }
  if (output.imageId !== undefined) {
    contents.ImageId = output.imageId;
  }
  if (output.instanceId !== undefined) {
    contents.InstanceId = output.instanceId;
  }
  if (output.instanceState !== undefined) {
    contents.InstanceState = output.instanceState;
  }
  if (output.instanceType !== undefined) {
    contents.InstanceType = output.instanceType;
  }
  if (output.launchTime !== undefined) {
    contents.LaunchTime = output.launchTime;
  }
  if (output.networkInterfaces !== undefined) {
    contents.NetworkInterfaces = deserializeAws_restJson1_1NetworkInterfaces(output.networkInterfaces, context);
  }
  if (output.platform !== undefined) {
    contents.Platform = output.platform;
  }
  if (output.productCodes !== undefined) {
    contents.ProductCodes = deserializeAws_restJson1_1ProductCodes(output.productCodes, context);
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
}

const deserializeAws_restJson1_1Invitation = (
  output: any,
  context: __SerdeContext
): Invitation => {
  let contents: any = {
    __type: "Invitation",
    AccountId: undefined,
    InvitationId: undefined,
    InvitedAt: undefined,
    RelationshipStatus: undefined,
  };
  if (output.accountId !== undefined) {
    contents.AccountId = output.accountId;
  }
  if (output.invitationId !== undefined) {
    contents.InvitationId = output.invitationId;
  }
  if (output.invitedAt !== undefined) {
    contents.InvitedAt = output.invitedAt;
  }
  if (output.relationshipStatus !== undefined) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  return contents;
}

const deserializeAws_restJson1_1Invitations = (
  output: any,
  context: __SerdeContext
): Array<Invitation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Invitation(entry, context)
  );
}

const deserializeAws_restJson1_1IpSetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Ipv6Addresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1LocalPortDetails = (
  output: any,
  context: __SerdeContext
): LocalPortDetails => {
  let contents: any = {
    __type: "LocalPortDetails",
    Port: undefined,
    PortName: undefined,
  };
  if (output.port !== undefined) {
    contents.Port = output.port;
  }
  if (output.portName !== undefined) {
    contents.PortName = output.portName;
  }
  return contents;
}

const deserializeAws_restJson1_1Master = (
  output: any,
  context: __SerdeContext
): Master => {
  let contents: any = {
    __type: "Master",
    AccountId: undefined,
    InvitationId: undefined,
    InvitedAt: undefined,
    RelationshipStatus: undefined,
  };
  if (output.accountId !== undefined) {
    contents.AccountId = output.accountId;
  }
  if (output.invitationId !== undefined) {
    contents.InvitationId = output.invitationId;
  }
  if (output.invitedAt !== undefined) {
    contents.InvitedAt = output.invitedAt;
  }
  if (output.relationshipStatus !== undefined) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  return contents;
}

const deserializeAws_restJson1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  let contents: any = {
    __type: "Member",
    AccountId: undefined,
    DetectorId: undefined,
    Email: undefined,
    InvitedAt: undefined,
    MasterId: undefined,
    RelationshipStatus: undefined,
    UpdatedAt: undefined,
  };
  if (output.accountId !== undefined) {
    contents.AccountId = output.accountId;
  }
  if (output.detectorId !== undefined) {
    contents.DetectorId = output.detectorId;
  }
  if (output.email !== undefined) {
    contents.Email = output.email;
  }
  if (output.invitedAt !== undefined) {
    contents.InvitedAt = output.invitedAt;
  }
  if (output.masterId !== undefined) {
    contents.MasterId = output.masterId;
  }
  if (output.relationshipStatus !== undefined) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  if (output.updatedAt !== undefined) {
    contents.UpdatedAt = output.updatedAt;
  }
  return contents;
}

const deserializeAws_restJson1_1Members = (
  output: any,
  context: __SerdeContext
): Array<Member> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Member(entry, context)
  );
}

const deserializeAws_restJson1_1Neq = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1NetworkConnectionAction = (
  output: any,
  context: __SerdeContext
): NetworkConnectionAction => {
  let contents: any = {
    __type: "NetworkConnectionAction",
    Blocked: undefined,
    ConnectionDirection: undefined,
    LocalPortDetails: undefined,
    Protocol: undefined,
    RemoteIpDetails: undefined,
    RemotePortDetails: undefined,
  };
  if (output.blocked !== undefined) {
    contents.Blocked = output.blocked;
  }
  if (output.connectionDirection !== undefined) {
    contents.ConnectionDirection = output.connectionDirection;
  }
  if (output.localPortDetails !== undefined) {
    contents.LocalPortDetails = deserializeAws_restJson1_1LocalPortDetails(output.localPortDetails, context);
  }
  if (output.protocol !== undefined) {
    contents.Protocol = output.protocol;
  }
  if (output.remoteIpDetails !== undefined) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(output.remoteIpDetails, context);
  }
  if (output.remotePortDetails !== undefined) {
    contents.RemotePortDetails = deserializeAws_restJson1_1RemotePortDetails(output.remotePortDetails, context);
  }
  return contents;
}

const deserializeAws_restJson1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    Ipv6Addresses: undefined,
    NetworkInterfaceId: undefined,
    PrivateDnsName: undefined,
    PrivateIpAddress: undefined,
    PrivateIpAddresses: undefined,
    PublicDnsName: undefined,
    PublicIp: undefined,
    SecurityGroups: undefined,
    SubnetId: undefined,
    VpcId: undefined,
  };
  if (output.ipv6Addresses !== undefined) {
    contents.Ipv6Addresses = deserializeAws_restJson1_1Ipv6Addresses(output.ipv6Addresses, context);
  }
  if (output.networkInterfaceId !== undefined) {
    contents.NetworkInterfaceId = output.networkInterfaceId;
  }
  if (output.privateDnsName !== undefined) {
    contents.PrivateDnsName = output.privateDnsName;
  }
  if (output.privateIpAddress !== undefined) {
    contents.PrivateIpAddress = output.privateIpAddress;
  }
  if (output.privateIpAddresses !== undefined) {
    contents.PrivateIpAddresses = deserializeAws_restJson1_1PrivateIpAddresses(output.privateIpAddresses, context);
  }
  if (output.publicDnsName !== undefined) {
    contents.PublicDnsName = output.publicDnsName;
  }
  if (output.publicIp !== undefined) {
    contents.PublicIp = output.publicIp;
  }
  if (output.securityGroups !== undefined) {
    contents.SecurityGroups = deserializeAws_restJson1_1SecurityGroups(output.securityGroups, context);
  }
  if (output.subnetId !== undefined) {
    contents.SubnetId = output.subnetId;
  }
  if (output.vpcId !== undefined) {
    contents.VpcId = output.vpcId;
  }
  return contents;
}

const deserializeAws_restJson1_1NetworkInterfaces = (
  output: any,
  context: __SerdeContext
): Array<NetworkInterface> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NetworkInterface(entry, context)
  );
}

const deserializeAws_restJson1_1NotEquals = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Organization = (
  output: any,
  context: __SerdeContext
): Organization => {
  let contents: any = {
    __type: "Organization",
    Asn: undefined,
    AsnOrg: undefined,
    Isp: undefined,
    Org: undefined,
  };
  if (output.asn !== undefined) {
    contents.Asn = output.asn;
  }
  if (output.asnOrg !== undefined) {
    contents.AsnOrg = output.asnOrg;
  }
  if (output.isp !== undefined) {
    contents.Isp = output.isp;
  }
  if (output.org !== undefined) {
    contents.Org = output.org;
  }
  return contents;
}

const deserializeAws_restJson1_1PortProbeAction = (
  output: any,
  context: __SerdeContext
): PortProbeAction => {
  let contents: any = {
    __type: "PortProbeAction",
    Blocked: undefined,
    PortProbeDetails: undefined,
  };
  if (output.blocked !== undefined) {
    contents.Blocked = output.blocked;
  }
  if (output.portProbeDetails !== undefined) {
    contents.PortProbeDetails = deserializeAws_restJson1_1PortProbeDetails(output.portProbeDetails, context);
  }
  return contents;
}

const deserializeAws_restJson1_1PortProbeDetail = (
  output: any,
  context: __SerdeContext
): PortProbeDetail => {
  let contents: any = {
    __type: "PortProbeDetail",
    LocalPortDetails: undefined,
    RemoteIpDetails: undefined,
  };
  if (output.localPortDetails !== undefined) {
    contents.LocalPortDetails = deserializeAws_restJson1_1LocalPortDetails(output.localPortDetails, context);
  }
  if (output.remoteIpDetails !== undefined) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(output.remoteIpDetails, context);
  }
  return contents;
}

const deserializeAws_restJson1_1PortProbeDetails = (
  output: any,
  context: __SerdeContext
): Array<PortProbeDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PortProbeDetail(entry, context)
  );
}

const deserializeAws_restJson1_1PrivateIpAddressDetails = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails => {
  let contents: any = {
    __type: "PrivateIpAddressDetails",
    PrivateDnsName: undefined,
    PrivateIpAddress: undefined,
  };
  if (output.privateDnsName !== undefined) {
    contents.PrivateDnsName = output.privateDnsName;
  }
  if (output.privateIpAddress !== undefined) {
    contents.PrivateIpAddress = output.privateIpAddress;
  }
  return contents;
}

const deserializeAws_restJson1_1PrivateIpAddresses = (
  output: any,
  context: __SerdeContext
): Array<PrivateIpAddressDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PrivateIpAddressDetails(entry, context)
  );
}

const deserializeAws_restJson1_1ProductCode = (
  output: any,
  context: __SerdeContext
): ProductCode => {
  let contents: any = {
    __type: "ProductCode",
    Code: undefined,
    ProductType: undefined,
  };
  if (output.code !== undefined) {
    contents.Code = output.code;
  }
  if (output.productType !== undefined) {
    contents.ProductType = output.productType;
  }
  return contents;
}

const deserializeAws_restJson1_1ProductCodes = (
  output: any,
  context: __SerdeContext
): Array<ProductCode> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProductCode(entry, context)
  );
}

const deserializeAws_restJson1_1RemoteIpDetails = (
  output: any,
  context: __SerdeContext
): RemoteIpDetails => {
  let contents: any = {
    __type: "RemoteIpDetails",
    City: undefined,
    Country: undefined,
    GeoLocation: undefined,
    IpAddressV4: undefined,
    Organization: undefined,
  };
  if (output.city !== undefined) {
    contents.City = deserializeAws_restJson1_1City(output.city, context);
  }
  if (output.country !== undefined) {
    contents.Country = deserializeAws_restJson1_1Country(output.country, context);
  }
  if (output.geoLocation !== undefined) {
    contents.GeoLocation = deserializeAws_restJson1_1GeoLocation(output.geoLocation, context);
  }
  if (output.ipAddressV4 !== undefined) {
    contents.IpAddressV4 = output.ipAddressV4;
  }
  if (output.organization !== undefined) {
    contents.Organization = deserializeAws_restJson1_1Organization(output.organization, context);
  }
  return contents;
}

const deserializeAws_restJson1_1RemotePortDetails = (
  output: any,
  context: __SerdeContext
): RemotePortDetails => {
  let contents: any = {
    __type: "RemotePortDetails",
    Port: undefined,
    PortName: undefined,
  };
  if (output.port !== undefined) {
    contents.Port = output.port;
  }
  if (output.portName !== undefined) {
    contents.PortName = output.portName;
  }
  return contents;
}

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    AccessKeyDetails: undefined,
    InstanceDetails: undefined,
    ResourceType: undefined,
  };
  if (output.accessKeyDetails !== undefined) {
    contents.AccessKeyDetails = deserializeAws_restJson1_1AccessKeyDetails(output.accessKeyDetails, context);
  }
  if (output.instanceDetails !== undefined) {
    contents.InstanceDetails = deserializeAws_restJson1_1InstanceDetails(output.instanceDetails, context);
  }
  if (output.resourceType !== undefined) {
    contents.ResourceType = output.resourceType;
  }
  return contents;
}

const deserializeAws_restJson1_1SecurityGroup = (
  output: any,
  context: __SerdeContext
): SecurityGroup => {
  let contents: any = {
    __type: "SecurityGroup",
    GroupId: undefined,
    GroupName: undefined,
  };
  if (output.groupId !== undefined) {
    contents.GroupId = output.groupId;
  }
  if (output.groupName !== undefined) {
    contents.GroupName = output.groupName;
  }
  return contents;
}

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<SecurityGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SecurityGroup(entry, context)
  );
}

const deserializeAws_restJson1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
    __type: "Service",
    Action: undefined,
    Archived: undefined,
    Count: undefined,
    DetectorId: undefined,
    EventFirstSeen: undefined,
    EventLastSeen: undefined,
    Evidence: undefined,
    ResourceRole: undefined,
    ServiceName: undefined,
    UserFeedback: undefined,
  };
  if (output.action !== undefined) {
    contents.Action = deserializeAws_restJson1_1Action(output.action, context);
  }
  if (output.archived !== undefined) {
    contents.Archived = output.archived;
  }
  if (output.count !== undefined) {
    contents.Count = output.count;
  }
  if (output.detectorId !== undefined) {
    contents.DetectorId = output.detectorId;
  }
  if (output.eventFirstSeen !== undefined) {
    contents.EventFirstSeen = output.eventFirstSeen;
  }
  if (output.eventLastSeen !== undefined) {
    contents.EventLastSeen = output.eventLastSeen;
  }
  if (output.evidence !== undefined) {
    contents.Evidence = deserializeAws_restJson1_1Evidence(output.evidence, context);
  }
  if (output.resourceRole !== undefined) {
    contents.ResourceRole = output.resourceRole;
  }
  if (output.serviceName !== undefined) {
    contents.ServiceName = output.serviceName;
  }
  if (output.userFeedback !== undefined) {
    contents.UserFeedback = output.userFeedback;
  }
  return contents;
}

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined,
  };
  if (output.key !== undefined) {
    contents.Key = output.key;
  }
  if (output.value !== undefined) {
    contents.Value = output.value;
  }
  return contents;
}

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
}

const deserializeAws_restJson1_1ThreatIntelSetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1ThreatIntelligenceDetail = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail => {
  let contents: any = {
    __type: "ThreatIntelligenceDetail",
    ThreatListName: undefined,
    ThreatNames: undefined,
  };
  if (output.threatListName !== undefined) {
    contents.ThreatListName = output.threatListName;
  }
  if (output.threatNames !== undefined) {
    contents.ThreatNames = deserializeAws_restJson1_1ThreatNames(output.threatNames, context);
  }
  return contents;
}

const deserializeAws_restJson1_1ThreatIntelligenceDetails = (
  output: any,
  context: __SerdeContext
): Array<ThreatIntelligenceDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ThreatIntelligenceDetail(entry, context)
  );
}

const deserializeAws_restJson1_1ThreatNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1UnprocessedAccount = (
  output: any,
  context: __SerdeContext
): UnprocessedAccount => {
  let contents: any = {
    __type: "UnprocessedAccount",
    AccountId: undefined,
    Result: undefined,
  };
  if (output.accountId !== undefined) {
    contents.AccountId = output.accountId;
  }
  if (output.result !== undefined) {
    contents.Result = output.result;
  }
  return contents;
}

const deserializeAws_restJson1_1UnprocessedAccounts = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedAccount> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UnprocessedAccount(entry, context)
  );
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
