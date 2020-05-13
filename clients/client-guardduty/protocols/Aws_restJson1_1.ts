import {
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput
} from "../commands/AcceptInvitationCommand";
import {
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput
} from "../commands/ArchiveFindingsCommand";
import {
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput
} from "../commands/CreateDetectorCommand";
import {
  CreateFilterCommandInput,
  CreateFilterCommandOutput
} from "../commands/CreateFilterCommand";
import {
  CreateIPSetCommandInput,
  CreateIPSetCommandOutput
} from "../commands/CreateIPSetCommand";
import {
  CreateMembersCommandInput,
  CreateMembersCommandOutput
} from "../commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput
} from "../commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput
} from "../commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput
} from "../commands/CreateThreatIntelSetCommand";
import {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput
} from "../commands/DeclineInvitationsCommand";
import {
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput
} from "../commands/DeleteDetectorCommand";
import {
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput
} from "../commands/DeleteFilterCommand";
import {
  DeleteIPSetCommandInput,
  DeleteIPSetCommandOutput
} from "../commands/DeleteIPSetCommand";
import {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput
} from "../commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput
} from "../commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput
} from "../commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput
} from "../commands/DeleteThreatIntelSetCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput
} from "../commands/DescribePublishingDestinationCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput
} from "../commands/DisassociateMembersCommand";
import {
  GetDetectorCommandInput,
  GetDetectorCommandOutput
} from "../commands/GetDetectorCommand";
import {
  GetFilterCommandInput,
  GetFilterCommandOutput
} from "../commands/GetFilterCommand";
import {
  GetFindingsCommandInput,
  GetFindingsCommandOutput
} from "../commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput
} from "../commands/GetFindingsStatisticsCommand";
import {
  GetIPSetCommandInput,
  GetIPSetCommandOutput
} from "../commands/GetIPSetCommand";
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
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput
} from "../commands/GetThreatIntelSetCommand";
import {
  InviteMembersCommandInput,
  InviteMembersCommandOutput
} from "../commands/InviteMembersCommand";
import {
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput
} from "../commands/ListDetectorsCommand";
import {
  ListFiltersCommandInput,
  ListFiltersCommandOutput
} from "../commands/ListFiltersCommand";
import {
  ListFindingsCommandInput,
  ListFindingsCommandOutput
} from "../commands/ListFindingsCommand";
import {
  ListIPSetsCommandInput,
  ListIPSetsCommandOutput
} from "../commands/ListIPSetsCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "../commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "../commands/ListMembersCommand";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput
} from "../commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput
} from "../commands/ListThreatIntelSetsCommand";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput
} from "../commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput
} from "../commands/StopMonitoringMembersCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput
} from "../commands/UnarchiveFindingsCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput
} from "../commands/UpdateDetectorCommand";
import {
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput
} from "../commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput
} from "../commands/UpdateFindingsFeedbackCommand";
import {
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput
} from "../commands/UpdateIPSetCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput
} from "../commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput
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
  UnprocessedAccount
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.InvitationId !== undefined) {
    bodyParams["invitationId"] = input.InvitationId;
  }
  if (input.MasterId !== undefined) {
    bodyParams["masterId"] = input.MasterId;
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

export const serializeAws_restJson1_1ArchiveFindingsCommand = async (
  input: ArchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/archive";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams["findingIds"] = serializeAws_restJson1_1FindingIds(
      input.FindingIds,
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

export const serializeAws_restJson1_1CreateDetectorCommand = async (
  input: CreateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.Enable !== undefined) {
    bodyParams["enable"] = input.Enable;
  }
  if (input.FindingPublishingFrequency !== undefined) {
    bodyParams["findingPublishingFrequency"] = input.FindingPublishingFrequency;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export const serializeAws_restJson1_1CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["action"] = input.Action;
  }
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.FindingCriteria !== undefined) {
    bodyParams["findingCriteria"] = serializeAws_restJson1_1FindingCriteria(
      input.FindingCriteria,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Rank !== undefined) {
    bodyParams["rank"] = input.Rank;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export const serializeAws_restJson1_1CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams["activate"] = input.Activate;
  }
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.Format !== undefined) {
    bodyParams["format"] = input.Format;
  }
  if (input.Location !== undefined) {
    bodyParams["location"] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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
  let resolvedPath = "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountDetails !== undefined) {
    bodyParams["accountDetails"] = serializeAws_restJson1_1AccountDetails(
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

export const serializeAws_restJson1_1CreatePublishingDestinationCommand = async (
  input: CreatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.DestinationProperties !== undefined) {
    bodyParams[
      "destinationProperties"
    ] = serializeAws_restJson1_1DestinationProperties(
      input.DestinationProperties,
      context
    );
  }
  if (input.DestinationType !== undefined) {
    bodyParams["destinationType"] = input.DestinationType;
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

export const serializeAws_restJson1_1CreateSampleFindingsCommand = async (
  input: CreateSampleFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/create";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingTypes !== undefined) {
    bodyParams["findingTypes"] = serializeAws_restJson1_1FindingTypes(
      input.FindingTypes,
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

export const serializeAws_restJson1_1CreateThreatIntelSetCommand = async (
  input: CreateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams["activate"] = input.Activate;
  }
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.Format !== undefined) {
    bodyParams["format"] = input.Format;
  }
  if (input.Location !== undefined) {
    bodyParams["location"] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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
  let resolvedPath = "/invitation/decline";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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

export const serializeAws_restJson1_1DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
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

export const serializeAws_restJson1_1DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace(
      "{FilterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
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

export const serializeAws_restJson1_1DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IpSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
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
  let resolvedPath = "/invitation/delete";
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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
  let resolvedPath = "/detector/{DetectorId}/member/delete";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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

export const serializeAws_restJson1_1DeletePublishingDestinationCommand = async (
  input: DeletePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DestinationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DestinationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
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

export const serializeAws_restJson1_1DeleteThreatIntelSetCommand = async (
  input: DeleteThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ThreatIntelSetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ThreatIntelSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ThreatIntelSetId."
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

export const serializeAws_restJson1_1DescribePublishingDestinationCommand = async (
  input: DescribePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DestinationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DestinationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
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

export const serializeAws_restJson1_1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/master/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
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
  let resolvedPath = "/detector/{DetectorId}/member/disassociate";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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

export const serializeAws_restJson1_1GetDetectorCommand = async (
  input: GetDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
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

export const serializeAws_restJson1_1GetFilterCommand = async (
  input: GetFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace(
      "{FilterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
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

export const serializeAws_restJson1_1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/get";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams["findingIds"] = serializeAws_restJson1_1FindingIds(
      input.FindingIds,
      context
    );
  }
  if (input.SortCriteria !== undefined) {
    bodyParams["sortCriteria"] = serializeAws_restJson1_1SortCriteria(
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

export const serializeAws_restJson1_1GetFindingsStatisticsCommand = async (
  input: GetFindingsStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/statistics";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingCriteria !== undefined) {
    bodyParams["findingCriteria"] = serializeAws_restJson1_1FindingCriteria(
      input.FindingCriteria,
      context
    );
  }
  if (input.FindingStatisticTypes !== undefined) {
    bodyParams[
      "findingStatisticTypes"
    ] = serializeAws_restJson1_1FindingStatisticTypes(
      input.FindingStatisticTypes,
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

export const serializeAws_restJson1_1GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IpSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
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

export const serializeAws_restJson1_1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/invitation/count";
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
  let resolvedPath = "/detector/{DetectorId}/master";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
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

export const serializeAws_restJson1_1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/member/get";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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

export const serializeAws_restJson1_1GetThreatIntelSetCommand = async (
  input: GetThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ThreatIntelSetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ThreatIntelSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ThreatIntelSetId."
    );
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

export const serializeAws_restJson1_1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/member/invite";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
      input.AccountIds,
      context
    );
  }
  if (input.DisableEmailNotification !== undefined) {
    bodyParams["disableEmailNotification"] = input.DisableEmailNotification;
  }
  if (input.Message !== undefined) {
    bodyParams["message"] = input.Message;
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

export const serializeAws_restJson1_1ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/filter";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingCriteria !== undefined) {
    bodyParams["findingCriteria"] = serializeAws_restJson1_1FindingCriteria(
      input.FindingCriteria,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["maxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["nextToken"] = input.NextToken;
  }
  if (input.SortCriteria !== undefined) {
    bodyParams["sortCriteria"] = serializeAws_restJson1_1SortCriteria(
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

export const serializeAws_restJson1_1ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/ipset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
  let resolvedPath = "/invitation";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
  let resolvedPath = "/detector/{DetectorId}/member";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.OnlyAssociated !== undefined && {
      onlyAssociated: input.OnlyAssociated
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

export const serializeAws_restJson1_1ListPublishingDestinationsCommand = async (
  input: ListPublishingDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/publishingDestination";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListThreatIntelSetsCommand = async (
  input: ListThreatIntelSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector/{DetectorId}/threatintelset";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1StartMonitoringMembersCommand = async (
  input: StartMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/member/start";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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

export const serializeAws_restJson1_1StopMonitoringMembersCommand = async (
  input: StopMonitoringMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/member/stop";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_restJson1_1AccountIds(
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
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export const serializeAws_restJson1_1UnarchiveFindingsCommand = async (
  input: UnarchiveFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/unarchive";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.FindingIds !== undefined) {
    bodyParams["findingIds"] = serializeAws_restJson1_1FindingIds(
      input.FindingIds,
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

export const serializeAws_restJson1_1UpdateDetectorCommand = async (
  input: UpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Enable !== undefined) {
    bodyParams["enable"] = input.Enable;
  }
  if (input.FindingPublishingFrequency !== undefined) {
    bodyParams["findingPublishingFrequency"] = input.FindingPublishingFrequency;
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

export const serializeAws_restJson1_1UpdateFilterCommand = async (
  input: UpdateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.FilterName !== undefined) {
    const labelValue: string = input.FilterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FilterName.");
    }
    resolvedPath = resolvedPath.replace(
      "{FilterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FilterName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["action"] = input.Action;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.FindingCriteria !== undefined) {
    bodyParams["findingCriteria"] = serializeAws_restJson1_1FindingCriteria(
      input.FindingCriteria,
      context
    );
  }
  if (input.Rank !== undefined) {
    bodyParams["rank"] = input.Rank;
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

export const serializeAws_restJson1_1UpdateFindingsFeedbackCommand = async (
  input: UpdateFindingsFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/findings/feedback";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Comments !== undefined) {
    bodyParams["comments"] = input.Comments;
  }
  if (input.Feedback !== undefined) {
    bodyParams["feedback"] = input.Feedback;
  }
  if (input.FindingIds !== undefined) {
    bodyParams["findingIds"] = serializeAws_restJson1_1FindingIds(
      input.FindingIds,
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

export const serializeAws_restJson1_1UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.IpSetId !== undefined) {
    const labelValue: string = input.IpSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IpSetId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IpSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IpSetId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams["activate"] = input.Activate;
  }
  if (input.Location !== undefined) {
    bodyParams["location"] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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

export const serializeAws_restJson1_1UpdatePublishingDestinationCommand = async (
  input: UpdatePublishingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/detector/{DetectorId}/publishingDestination/{DestinationId}";
  if (input.DestinationId !== undefined) {
    const labelValue: string = input.DestinationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DestinationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DestinationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DestinationId.");
  }
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DestinationProperties !== undefined) {
    bodyParams[
      "destinationProperties"
    ] = serializeAws_restJson1_1DestinationProperties(
      input.DestinationProperties,
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

export const serializeAws_restJson1_1UpdateThreatIntelSetCommand = async (
  input: UpdateThreatIntelSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
  if (input.DetectorId !== undefined) {
    const labelValue: string = input.DetectorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DetectorId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DetectorId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DetectorId.");
  }
  if (input.ThreatIntelSetId !== undefined) {
    const labelValue: string = input.ThreatIntelSetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ThreatIntelSetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ThreatIntelSetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ThreatIntelSetId."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Activate !== undefined) {
    bodyParams["activate"] = input.Activate;
  }
  if (input.Location !== undefined) {
    bodyParams["location"] = input.Location;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ArchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ArchiveFindingsCommandError(
      output,
      context
    );
  }
  const contents: ArchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ArchiveFindingsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ArchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDetectorCommandError(
      output,
      context
    );
  }
  const contents: CreateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDetectorResponse",
    DetectorId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorId !== undefined && data.detectorId !== null) {
    contents.DetectorId = data.detectorId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFilterCommandError(output, context);
  }
  const contents: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFilterResponse",
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateIPSetCommandError(output, context);
  }
  const contents: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIPSetResponse",
    IpSetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetId !== undefined && data.ipSetId !== null) {
    contents.IpSetId = data.ipSetId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePublishingDestinationCommandError(
      output,
      context
    );
  }
  const contents: CreatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePublishingDestinationResponse",
    DestinationId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined && data.destinationId !== null) {
    contents.DestinationId = data.destinationId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreateSampleFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSampleFindingsCommandError(
      output,
      context
    );
  }
  const contents: CreateSampleFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSampleFindingsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateSampleFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSampleFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1CreateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateThreatIntelSetCommandError(
      output,
      context
    );
  }
  const contents: CreateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateThreatIntelSetResponse",
    ThreatIntelSetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.threatIntelSetId !== undefined && data.threatIntelSetId !== null) {
    contents.ThreatIntelSetId = data.threatIntelSetId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDetectorCommandError(
      output,
      context
    );
  }
  const contents: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDetectorResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFilterCommandError(output, context);
  }
  const contents: DeleteFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFilterResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteIPSetCommandError(output, context);
  }
  const contents: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIPSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DeletePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePublishingDestinationCommandError(
      output,
      context
    );
  }
  const contents: DeletePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePublishingDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeletePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteThreatIntelSetCommandError(
      output,
      context
    );
  }
  const contents: DeleteThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteThreatIntelSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1DescribePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribePublishingDestinationCommandError(
      output,
      context
    );
  }
  const contents: DescribePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePublishingDestinationResponse",
    DestinationId: undefined,
    DestinationProperties: undefined,
    DestinationType: undefined,
    PublishingFailureStartTimestamp: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinationId !== undefined && data.destinationId !== null) {
    contents.DestinationId = data.destinationId;
  }
  if (
    data.destinationProperties !== undefined &&
    data.destinationProperties !== null
  ) {
    contents.DestinationProperties = deserializeAws_restJson1_1DestinationProperties(
      data.destinationProperties,
      context
    );
  }
  if (data.destinationType !== undefined && data.destinationType !== null) {
    contents.DestinationType = data.destinationType;
  }
  if (
    data.publishingFailureStartTimestamp !== undefined &&
    data.publishingFailureStartTimestamp !== null
  ) {
    contents.PublishingFailureStartTimestamp =
      data.publishingFailureStartTimestamp;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    __type: "DisassociateMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
      context
    );
  }
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1GetDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    UpdatedAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = data.createdAt;
  }
  if (
    data.findingPublishingFrequency !== undefined &&
    data.findingPublishingFrequency !== null
  ) {
    contents.FindingPublishingFrequency = data.findingPublishingFrequency;
  }
  if (data.serviceRole !== undefined && data.serviceRole !== null) {
    contents.ServiceRole = data.serviceRole;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.updatedAt !== undefined && data.updatedAt !== null) {
    contents.UpdatedAt = data.updatedAt;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1GetFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.action !== undefined && data.action !== null) {
    contents.Action = data.action;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
    contents.FindingCriteria = deserializeAws_restJson1_1FindingCriteria(
      data.findingCriteria,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.rank !== undefined && data.rank !== null) {
    contents.Rank = data.rank;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    Findings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.Findings = deserializeAws_restJson1_1Findings(
      data.findings,
      context
    );
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1GetFindingsStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFindingsStatisticsCommandError(
      output,
      context
    );
  }
  const contents: GetFindingsStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingsStatisticsResponse",
    FindingStatistics: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingStatistics !== undefined && data.findingStatistics !== null) {
    contents.FindingStatistics = deserializeAws_restJson1_1FindingStatistics(
      data.findingStatistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFindingsStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIPSetCommandError(output, context);
  }
  const contents: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIPSetResponse",
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined && data.format !== null) {
    contents.Format = data.format;
  }
  if (data.location !== undefined && data.location !== null) {
    contents.Location = data.location;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
    contents.InvitationsCount = data.invitationsCount;
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.master !== undefined && data.master !== null) {
    contents.Master = deserializeAws_restJson1_1Master(data.master, context);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.members !== undefined && data.members !== null) {
    contents.Members = deserializeAws_restJson1_1Members(data.members, context);
  }
  if (
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1GetThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetThreatIntelSetCommandError(
      output,
      context
    );
  }
  const contents: GetThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetThreatIntelSetResponse",
    Format: undefined,
    Location: undefined,
    Name: undefined,
    Status: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined && data.format !== null) {
    contents.Format = data.format;
  }
  if (data.location !== undefined && data.location !== null) {
    contents.Location = data.location;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDetectorsCommandError(output, context);
  }
  const contents: ListDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDetectorsResponse",
    DetectorIds: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorIds !== undefined && data.detectorIds !== null) {
    contents.DetectorIds = deserializeAws_restJson1_1DetectorIds(
      data.detectorIds,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFiltersCommandError(output, context);
  }
  const contents: ListFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFiltersResponse",
    FilterNames: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.filterNames !== undefined && data.filterNames !== null) {
    contents.FilterNames = deserializeAws_restJson1_1FilterNames(
      data.filterNames,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFindingsCommandError(output, context);
  }
  const contents: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFindingsResponse",
    FindingIds: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.findingIds !== undefined && data.findingIds !== null) {
    contents.FindingIds = deserializeAws_restJson1_1FindingIds(
      data.findingIds,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListIPSetsCommandError(output, context);
  }
  const contents: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIPSetsResponse",
    IpSetIds: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ipSetIds !== undefined && data.ipSetIds !== null) {
    contents.IpSetIds = deserializeAws_restJson1_1IpSetIds(
      data.ipSetIds,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.invitations !== undefined && data.invitations !== null) {
    contents.Invitations = deserializeAws_restJson1_1Invitations(
      data.invitations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.members !== undefined && data.members !== null) {
    contents.Members = deserializeAws_restJson1_1Members(data.members, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListPublishingDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPublishingDestinationsCommandError(
      output,
      context
    );
  }
  const contents: ListPublishingDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPublishingDestinationsResponse",
    Destinations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1Destinations(
      data.destinations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListPublishingDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishingDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1ListThreatIntelSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListThreatIntelSetsCommandError(
      output,
      context
    );
  }
  const contents: ListThreatIntelSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListThreatIntelSetsResponse",
    NextToken: undefined,
    ThreatIntelSetIds: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.threatIntelSetIds !== undefined && data.threatIntelSetIds !== null) {
    contents.ThreatIntelSetIds = deserializeAws_restJson1_1ThreatIntelSetIds(
      data.threatIntelSetIds,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListThreatIntelSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThreatIntelSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1StartMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartMonitoringMembersCommandError(
      output,
      context
    );
  }
  const contents: StartMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMonitoringMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1StopMonitoringMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopMonitoringMembersCommandError(
      output,
      context
    );
  }
  const contents: StopMonitoringMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopMonitoringMembersResponse",
    UnprocessedAccounts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.unprocessedAccounts !== undefined &&
    data.unprocessedAccounts !== null
  ) {
    contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccounts(
      data.unprocessedAccounts,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StopMonitoringMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UnarchiveFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UnarchiveFindingsCommandError(
      output,
      context
    );
  }
  const contents: UnarchiveFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnarchiveFindingsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UnarchiveFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
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
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDetectorCommandError(
      output,
      context
    );
  }
  const contents: UpdateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFilterCommandError(output, context);
  }
  const contents: UpdateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFilterResponse",
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFindingsFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFindingsFeedbackCommandError(
      output,
      context
    );
  }
  const contents: UpdateFindingsFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFindingsFeedbackResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFindingsFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateIPSetCommandError(output, context);
  }
  const contents: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIPSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdatePublishingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePublishingDestinationCommandError(
      output,
      context
    );
  }
  const contents: UpdatePublishingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePublishingDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdatePublishingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublishingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateThreatIntelSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateThreatIntelSetCommandError(
      output,
      context
    );
  }
  const contents: UpdateThreatIntelSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateThreatIntelSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateThreatIntelSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThreatIntelSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.guardduty#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.guardduty#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.__type !== undefined && data.__type !== null) {
    contents.Type = data.__type;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.__type !== undefined && data.__type !== null) {
    contents.Type = data.__type;
  }
  return contents;
};

const serializeAws_restJson1_1AccountDetail = (
  input: AccountDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && { accountId: input.AccountId }),
    ...(input.Email !== undefined && { email: input.Email })
  };
};

const serializeAws_restJson1_1AccountDetails = (
  input: AccountDetail[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AccountDetail(entry, context)
  );
};

const serializeAws_restJson1_1AccountIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Eq !== undefined && {
      eq: serializeAws_restJson1_1Eq(input.Eq, context)
    }),
    ...(input.Equals !== undefined && {
      equals: serializeAws_restJson1_1Equals(input.Equals, context)
    }),
    ...(input.GreaterThan !== undefined && { greaterThan: input.GreaterThan }),
    ...(input.GreaterThanOrEqual !== undefined && {
      greaterThanOrEqual: input.GreaterThanOrEqual
    }),
    ...(input.Gt !== undefined && { gt: input.Gt }),
    ...(input.Gte !== undefined && { gte: input.Gte }),
    ...(input.LessThan !== undefined && { lessThan: input.LessThan }),
    ...(input.LessThanOrEqual !== undefined && {
      lessThanOrEqual: input.LessThanOrEqual
    }),
    ...(input.Lt !== undefined && { lt: input.Lt }),
    ...(input.Lte !== undefined && { lte: input.Lte }),
    ...(input.Neq !== undefined && {
      neq: serializeAws_restJson1_1Neq(input.Neq, context)
    }),
    ...(input.NotEquals !== undefined && {
      notEquals: serializeAws_restJson1_1NotEquals(input.NotEquals, context)
    })
  };
};

const serializeAws_restJson1_1Criterion = (
  input: { [key: string]: Condition },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_restJson1_1Condition(input[key], context);
    return acc;
  }, {});
};

const serializeAws_restJson1_1DestinationProperties = (
  input: DestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationArn !== undefined && {
      destinationArn: input.DestinationArn
    }),
    ...(input.KmsKeyArn !== undefined && { kmsKeyArn: input.KmsKeyArn })
  };
};

const serializeAws_restJson1_1Eq = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Equals = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1FindingCriteria = (
  input: FindingCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.Criterion !== undefined && {
      criterion: serializeAws_restJson1_1Criterion(input.Criterion, context)
    })
  };
};

const serializeAws_restJson1_1FindingIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1FindingStatisticTypes = (
  input: (FindingStatisticType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1FindingTypes = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Neq = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1NotEquals = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SortCriteria = (
  input: SortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      attributeName: input.AttributeName
    }),
    ...(input.OrderBy !== undefined && { orderBy: input.OrderBy })
  };
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

const deserializeAws_restJson1_1AccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AccessKeyDetails => {
  let contents: any = {
    __type: "AccessKeyDetails",
    AccessKeyId: undefined,
    PrincipalId: undefined,
    UserName: undefined,
    UserType: undefined
  };
  if (output.accessKeyId !== undefined && output.accessKeyId !== null) {
    contents.AccessKeyId = output.accessKeyId;
  }
  if (output.principalId !== undefined && output.principalId !== null) {
    contents.PrincipalId = output.principalId;
  }
  if (output.userName !== undefined && output.userName !== null) {
    contents.UserName = output.userName;
  }
  if (output.userType !== undefined && output.userType !== null) {
    contents.UserType = output.userType;
  }
  return contents;
};

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
    PortProbeAction: undefined
  };
  if (output.actionType !== undefined && output.actionType !== null) {
    contents.ActionType = output.actionType;
  }
  if (
    output.awsApiCallAction !== undefined &&
    output.awsApiCallAction !== null
  ) {
    contents.AwsApiCallAction = deserializeAws_restJson1_1AwsApiCallAction(
      output.awsApiCallAction,
      context
    );
  }
  if (
    output.dnsRequestAction !== undefined &&
    output.dnsRequestAction !== null
  ) {
    contents.DnsRequestAction = deserializeAws_restJson1_1DnsRequestAction(
      output.dnsRequestAction,
      context
    );
  }
  if (
    output.networkConnectionAction !== undefined &&
    output.networkConnectionAction !== null
  ) {
    contents.NetworkConnectionAction = deserializeAws_restJson1_1NetworkConnectionAction(
      output.networkConnectionAction,
      context
    );
  }
  if (output.portProbeAction !== undefined && output.portProbeAction !== null) {
    contents.PortProbeAction = deserializeAws_restJson1_1PortProbeAction(
      output.portProbeAction,
      context
    );
  }
  return contents;
};

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
    ServiceName: undefined
  };
  if (output.api !== undefined && output.api !== null) {
    contents.Api = output.api;
  }
  if (output.callerType !== undefined && output.callerType !== null) {
    contents.CallerType = output.callerType;
  }
  if (output.domainDetails !== undefined && output.domainDetails !== null) {
    contents.DomainDetails = deserializeAws_restJson1_1DomainDetails(
      output.domainDetails,
      context
    );
  }
  if (output.remoteIpDetails !== undefined && output.remoteIpDetails !== null) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(
      output.remoteIpDetails,
      context
    );
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.ServiceName = output.serviceName;
  }
  return contents;
};

const deserializeAws_restJson1_1City = (
  output: any,
  context: __SerdeContext
): City => {
  let contents: any = {
    __type: "City",
    CityName: undefined
  };
  if (output.cityName !== undefined && output.cityName !== null) {
    contents.CityName = output.cityName;
  }
  return contents;
};

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
    NotEquals: undefined
  };
  if (output.eq !== undefined && output.eq !== null) {
    contents.Eq = deserializeAws_restJson1_1Eq(output.eq, context);
  }
  if (output.equals !== undefined && output.equals !== null) {
    contents.Equals = deserializeAws_restJson1_1Equals(output.equals, context);
  }
  if (output.greaterThan !== undefined && output.greaterThan !== null) {
    contents.GreaterThan = output.greaterThan;
  }
  if (
    output.greaterThanOrEqual !== undefined &&
    output.greaterThanOrEqual !== null
  ) {
    contents.GreaterThanOrEqual = output.greaterThanOrEqual;
  }
  if (output.gt !== undefined && output.gt !== null) {
    contents.Gt = output.gt;
  }
  if (output.gte !== undefined && output.gte !== null) {
    contents.Gte = output.gte;
  }
  if (output.lessThan !== undefined && output.lessThan !== null) {
    contents.LessThan = output.lessThan;
  }
  if (output.lessThanOrEqual !== undefined && output.lessThanOrEqual !== null) {
    contents.LessThanOrEqual = output.lessThanOrEqual;
  }
  if (output.lt !== undefined && output.lt !== null) {
    contents.Lt = output.lt;
  }
  if (output.lte !== undefined && output.lte !== null) {
    contents.Lte = output.lte;
  }
  if (output.neq !== undefined && output.neq !== null) {
    contents.Neq = deserializeAws_restJson1_1Neq(output.neq, context);
  }
  if (output.notEquals !== undefined && output.notEquals !== null) {
    contents.NotEquals = deserializeAws_restJson1_1NotEquals(
      output.notEquals,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CountBySeverity = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1Country = (
  output: any,
  context: __SerdeContext
): Country => {
  let contents: any = {
    __type: "Country",
    CountryCode: undefined,
    CountryName: undefined
  };
  if (output.countryCode !== undefined && output.countryCode !== null) {
    contents.CountryCode = output.countryCode;
  }
  if (output.countryName !== undefined && output.countryName !== null) {
    contents.CountryName = output.countryName;
  }
  return contents;
};

const deserializeAws_restJson1_1Criterion = (
  output: any,
  context: __SerdeContext
): { [key: string]: Condition } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_restJson1_1Condition(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_restJson1_1Destination = (
  output: any,
  context: __SerdeContext
): Destination => {
  let contents: any = {
    __type: "Destination",
    DestinationId: undefined,
    DestinationType: undefined,
    Status: undefined
  };
  if (output.destinationId !== undefined && output.destinationId !== null) {
    contents.DestinationId = output.destinationId;
  }
  if (output.destinationType !== undefined && output.destinationType !== null) {
    contents.DestinationType = output.destinationType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1DestinationProperties = (
  output: any,
  context: __SerdeContext
): DestinationProperties => {
  let contents: any = {
    __type: "DestinationProperties",
    DestinationArn: undefined,
    KmsKeyArn: undefined
  };
  if (output.destinationArn !== undefined && output.destinationArn !== null) {
    contents.DestinationArn = output.destinationArn;
  }
  if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
    contents.KmsKeyArn = output.kmsKeyArn;
  }
  return contents;
};

const deserializeAws_restJson1_1Destinations = (
  output: any,
  context: __SerdeContext
): Destination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Destination(entry, context)
  );
};

const deserializeAws_restJson1_1DetectorIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DnsRequestAction = (
  output: any,
  context: __SerdeContext
): DnsRequestAction => {
  let contents: any = {
    __type: "DnsRequestAction",
    Domain: undefined
  };
  if (output.domain !== undefined && output.domain !== null) {
    contents.Domain = output.domain;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainDetails = (
  output: any,
  context: __SerdeContext
): DomainDetails => {
  let contents: any = {
    __type: "DomainDetails",
    Domain: undefined
  };
  if (output.domain !== undefined && output.domain !== null) {
    contents.Domain = output.domain;
  }
  return contents;
};

const deserializeAws_restJson1_1Eq = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Equals = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Evidence = (
  output: any,
  context: __SerdeContext
): Evidence => {
  let contents: any = {
    __type: "Evidence",
    ThreatIntelligenceDetails: undefined
  };
  if (
    output.threatIntelligenceDetails !== undefined &&
    output.threatIntelligenceDetails !== null
  ) {
    contents.ThreatIntelligenceDetails = deserializeAws_restJson1_1ThreatIntelligenceDetails(
      output.threatIntelligenceDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FilterNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

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
    UpdatedAt: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.AccountId = output.accountId;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.confidence !== undefined && output.confidence !== null) {
    contents.Confidence = output.confidence;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = output.createdAt;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.partition !== undefined && output.partition !== null) {
    contents.Partition = output.partition;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.Region = output.region;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.Resource = deserializeAws_restJson1_1Resource(
      output.resource,
      context
    );
  }
  if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
    contents.SchemaVersion = output.schemaVersion;
  }
  if (output.service !== undefined && output.service !== null) {
    contents.Service = deserializeAws_restJson1_1Service(
      output.service,
      context
    );
  }
  if (output.severity !== undefined && output.severity !== null) {
    contents.Severity = output.severity;
  }
  if (output.title !== undefined && output.title !== null) {
    contents.Title = output.title;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.UpdatedAt = output.updatedAt;
  }
  return contents;
};

const deserializeAws_restJson1_1FindingCriteria = (
  output: any,
  context: __SerdeContext
): FindingCriteria => {
  let contents: any = {
    __type: "FindingCriteria",
    Criterion: undefined
  };
  if (output.criterion !== undefined && output.criterion !== null) {
    contents.Criterion = deserializeAws_restJson1_1Criterion(
      output.criterion,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FindingIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1FindingStatistics = (
  output: any,
  context: __SerdeContext
): FindingStatistics => {
  let contents: any = {
    __type: "FindingStatistics",
    CountBySeverity: undefined
  };
  if (output.countBySeverity !== undefined && output.countBySeverity !== null) {
    contents.CountBySeverity = deserializeAws_restJson1_1CountBySeverity(
      output.countBySeverity,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Findings = (
  output: any,
  context: __SerdeContext
): Finding[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Finding(entry, context)
  );
};

const deserializeAws_restJson1_1GeoLocation = (
  output: any,
  context: __SerdeContext
): GeoLocation => {
  let contents: any = {
    __type: "GeoLocation",
    Lat: undefined,
    Lon: undefined
  };
  if (output.lat !== undefined && output.lat !== null) {
    contents.Lat = output.lat;
  }
  if (output.lon !== undefined && output.lon !== null) {
    contents.Lon = output.lon;
  }
  return contents;
};

const deserializeAws_restJson1_1IamInstanceProfile = (
  output: any,
  context: __SerdeContext
): IamInstanceProfile => {
  let contents: any = {
    __type: "IamInstanceProfile",
    Arn: undefined,
    Id: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  return contents;
};

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
    Tags: undefined
  };
  if (
    output.availabilityZone !== undefined &&
    output.availabilityZone !== null
  ) {
    contents.AvailabilityZone = output.availabilityZone;
  }
  if (
    output.iamInstanceProfile !== undefined &&
    output.iamInstanceProfile !== null
  ) {
    contents.IamInstanceProfile = deserializeAws_restJson1_1IamInstanceProfile(
      output.iamInstanceProfile,
      context
    );
  }
  if (
    output.imageDescription !== undefined &&
    output.imageDescription !== null
  ) {
    contents.ImageDescription = output.imageDescription;
  }
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.ImageId = output.imageId;
  }
  if (output.instanceId !== undefined && output.instanceId !== null) {
    contents.InstanceId = output.instanceId;
  }
  if (output.instanceState !== undefined && output.instanceState !== null) {
    contents.InstanceState = output.instanceState;
  }
  if (output.instanceType !== undefined && output.instanceType !== null) {
    contents.InstanceType = output.instanceType;
  }
  if (output.launchTime !== undefined && output.launchTime !== null) {
    contents.LaunchTime = output.launchTime;
  }
  if (
    output.networkInterfaces !== undefined &&
    output.networkInterfaces !== null
  ) {
    contents.NetworkInterfaces = deserializeAws_restJson1_1NetworkInterfaces(
      output.networkInterfaces,
      context
    );
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.Platform = output.platform;
  }
  if (output.productCodes !== undefined && output.productCodes !== null) {
    contents.ProductCodes = deserializeAws_restJson1_1ProductCodes(
      output.productCodes,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
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
    RelationshipStatus: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.AccountId = output.accountId;
  }
  if (output.invitationId !== undefined && output.invitationId !== null) {
    contents.InvitationId = output.invitationId;
  }
  if (output.invitedAt !== undefined && output.invitedAt !== null) {
    contents.InvitedAt = output.invitedAt;
  }
  if (
    output.relationshipStatus !== undefined &&
    output.relationshipStatus !== null
  ) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1Invitations = (
  output: any,
  context: __SerdeContext
): Invitation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Invitation(entry, context)
  );
};

const deserializeAws_restJson1_1IpSetIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Ipv6Addresses = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LocalPortDetails = (
  output: any,
  context: __SerdeContext
): LocalPortDetails => {
  let contents: any = {
    __type: "LocalPortDetails",
    Port: undefined,
    PortName: undefined
  };
  if (output.port !== undefined && output.port !== null) {
    contents.Port = output.port;
  }
  if (output.portName !== undefined && output.portName !== null) {
    contents.PortName = output.portName;
  }
  return contents;
};

const deserializeAws_restJson1_1Master = (
  output: any,
  context: __SerdeContext
): Master => {
  let contents: any = {
    __type: "Master",
    AccountId: undefined,
    InvitationId: undefined,
    InvitedAt: undefined,
    RelationshipStatus: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.AccountId = output.accountId;
  }
  if (output.invitationId !== undefined && output.invitationId !== null) {
    contents.InvitationId = output.invitationId;
  }
  if (output.invitedAt !== undefined && output.invitedAt !== null) {
    contents.InvitedAt = output.invitedAt;
  }
  if (
    output.relationshipStatus !== undefined &&
    output.relationshipStatus !== null
  ) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  return contents;
};

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
    UpdatedAt: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.AccountId = output.accountId;
  }
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.DetectorId = output.detectorId;
  }
  if (output.email !== undefined && output.email !== null) {
    contents.Email = output.email;
  }
  if (output.invitedAt !== undefined && output.invitedAt !== null) {
    contents.InvitedAt = output.invitedAt;
  }
  if (output.masterId !== undefined && output.masterId !== null) {
    contents.MasterId = output.masterId;
  }
  if (
    output.relationshipStatus !== undefined &&
    output.relationshipStatus !== null
  ) {
    contents.RelationshipStatus = output.relationshipStatus;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.UpdatedAt = output.updatedAt;
  }
  return contents;
};

const deserializeAws_restJson1_1Members = (
  output: any,
  context: __SerdeContext
): Member[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Member(entry, context)
  );
};

const deserializeAws_restJson1_1Neq = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

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
    RemotePortDetails: undefined
  };
  if (output.blocked !== undefined && output.blocked !== null) {
    contents.Blocked = output.blocked;
  }
  if (
    output.connectionDirection !== undefined &&
    output.connectionDirection !== null
  ) {
    contents.ConnectionDirection = output.connectionDirection;
  }
  if (
    output.localPortDetails !== undefined &&
    output.localPortDetails !== null
  ) {
    contents.LocalPortDetails = deserializeAws_restJson1_1LocalPortDetails(
      output.localPortDetails,
      context
    );
  }
  if (output.protocol !== undefined && output.protocol !== null) {
    contents.Protocol = output.protocol;
  }
  if (output.remoteIpDetails !== undefined && output.remoteIpDetails !== null) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(
      output.remoteIpDetails,
      context
    );
  }
  if (
    output.remotePortDetails !== undefined &&
    output.remotePortDetails !== null
  ) {
    contents.RemotePortDetails = deserializeAws_restJson1_1RemotePortDetails(
      output.remotePortDetails,
      context
    );
  }
  return contents;
};

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
    VpcId: undefined
  };
  if (output.ipv6Addresses !== undefined && output.ipv6Addresses !== null) {
    contents.Ipv6Addresses = deserializeAws_restJson1_1Ipv6Addresses(
      output.ipv6Addresses,
      context
    );
  }
  if (
    output.networkInterfaceId !== undefined &&
    output.networkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = output.networkInterfaceId;
  }
  if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
    contents.PrivateDnsName = output.privateDnsName;
  }
  if (
    output.privateIpAddress !== undefined &&
    output.privateIpAddress !== null
  ) {
    contents.PrivateIpAddress = output.privateIpAddress;
  }
  if (
    output.privateIpAddresses !== undefined &&
    output.privateIpAddresses !== null
  ) {
    contents.PrivateIpAddresses = deserializeAws_restJson1_1PrivateIpAddresses(
      output.privateIpAddresses,
      context
    );
  }
  if (output.publicDnsName !== undefined && output.publicDnsName !== null) {
    contents.PublicDnsName = output.publicDnsName;
  }
  if (output.publicIp !== undefined && output.publicIp !== null) {
    contents.PublicIp = output.publicIp;
  }
  if (output.securityGroups !== undefined && output.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1SecurityGroups(
      output.securityGroups,
      context
    );
  }
  if (output.subnetId !== undefined && output.subnetId !== null) {
    contents.SubnetId = output.subnetId;
  }
  if (output.vpcId !== undefined && output.vpcId !== null) {
    contents.VpcId = output.vpcId;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInterfaces = (
  output: any,
  context: __SerdeContext
): NetworkInterface[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_restJson1_1NotEquals = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Organization = (
  output: any,
  context: __SerdeContext
): Organization => {
  let contents: any = {
    __type: "Organization",
    Asn: undefined,
    AsnOrg: undefined,
    Isp: undefined,
    Org: undefined
  };
  if (output.asn !== undefined && output.asn !== null) {
    contents.Asn = output.asn;
  }
  if (output.asnOrg !== undefined && output.asnOrg !== null) {
    contents.AsnOrg = output.asnOrg;
  }
  if (output.isp !== undefined && output.isp !== null) {
    contents.Isp = output.isp;
  }
  if (output.org !== undefined && output.org !== null) {
    contents.Org = output.org;
  }
  return contents;
};

const deserializeAws_restJson1_1PortProbeAction = (
  output: any,
  context: __SerdeContext
): PortProbeAction => {
  let contents: any = {
    __type: "PortProbeAction",
    Blocked: undefined,
    PortProbeDetails: undefined
  };
  if (output.blocked !== undefined && output.blocked !== null) {
    contents.Blocked = output.blocked;
  }
  if (
    output.portProbeDetails !== undefined &&
    output.portProbeDetails !== null
  ) {
    contents.PortProbeDetails = deserializeAws_restJson1_1PortProbeDetails(
      output.portProbeDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PortProbeDetail = (
  output: any,
  context: __SerdeContext
): PortProbeDetail => {
  let contents: any = {
    __type: "PortProbeDetail",
    LocalPortDetails: undefined,
    RemoteIpDetails: undefined
  };
  if (
    output.localPortDetails !== undefined &&
    output.localPortDetails !== null
  ) {
    contents.LocalPortDetails = deserializeAws_restJson1_1LocalPortDetails(
      output.localPortDetails,
      context
    );
  }
  if (output.remoteIpDetails !== undefined && output.remoteIpDetails !== null) {
    contents.RemoteIpDetails = deserializeAws_restJson1_1RemoteIpDetails(
      output.remoteIpDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PortProbeDetails = (
  output: any,
  context: __SerdeContext
): PortProbeDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PortProbeDetail(entry, context)
  );
};

const deserializeAws_restJson1_1PrivateIpAddressDetails = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails => {
  let contents: any = {
    __type: "PrivateIpAddressDetails",
    PrivateDnsName: undefined,
    PrivateIpAddress: undefined
  };
  if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
    contents.PrivateDnsName = output.privateDnsName;
  }
  if (
    output.privateIpAddress !== undefined &&
    output.privateIpAddress !== null
  ) {
    contents.PrivateIpAddress = output.privateIpAddress;
  }
  return contents;
};

const deserializeAws_restJson1_1PrivateIpAddresses = (
  output: any,
  context: __SerdeContext
): PrivateIpAddressDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PrivateIpAddressDetails(entry, context)
  );
};

const deserializeAws_restJson1_1ProductCode = (
  output: any,
  context: __SerdeContext
): ProductCode => {
  let contents: any = {
    __type: "ProductCode",
    Code: undefined,
    ProductType: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.Code = output.code;
  }
  if (output.productType !== undefined && output.productType !== null) {
    contents.ProductType = output.productType;
  }
  return contents;
};

const deserializeAws_restJson1_1ProductCodes = (
  output: any,
  context: __SerdeContext
): ProductCode[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProductCode(entry, context)
  );
};

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
    Organization: undefined
  };
  if (output.city !== undefined && output.city !== null) {
    contents.City = deserializeAws_restJson1_1City(output.city, context);
  }
  if (output.country !== undefined && output.country !== null) {
    contents.Country = deserializeAws_restJson1_1Country(
      output.country,
      context
    );
  }
  if (output.geoLocation !== undefined && output.geoLocation !== null) {
    contents.GeoLocation = deserializeAws_restJson1_1GeoLocation(
      output.geoLocation,
      context
    );
  }
  if (output.ipAddressV4 !== undefined && output.ipAddressV4 !== null) {
    contents.IpAddressV4 = output.ipAddressV4;
  }
  if (output.organization !== undefined && output.organization !== null) {
    contents.Organization = deserializeAws_restJson1_1Organization(
      output.organization,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RemotePortDetails = (
  output: any,
  context: __SerdeContext
): RemotePortDetails => {
  let contents: any = {
    __type: "RemotePortDetails",
    Port: undefined,
    PortName: undefined
  };
  if (output.port !== undefined && output.port !== null) {
    contents.Port = output.port;
  }
  if (output.portName !== undefined && output.portName !== null) {
    contents.PortName = output.portName;
  }
  return contents;
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    AccessKeyDetails: undefined,
    InstanceDetails: undefined,
    ResourceType: undefined
  };
  if (
    output.accessKeyDetails !== undefined &&
    output.accessKeyDetails !== null
  ) {
    contents.AccessKeyDetails = deserializeAws_restJson1_1AccessKeyDetails(
      output.accessKeyDetails,
      context
    );
  }
  if (output.instanceDetails !== undefined && output.instanceDetails !== null) {
    contents.InstanceDetails = deserializeAws_restJson1_1InstanceDetails(
      output.instanceDetails,
      context
    );
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.ResourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroup = (
  output: any,
  context: __SerdeContext
): SecurityGroup => {
  let contents: any = {
    __type: "SecurityGroup",
    GroupId: undefined,
    GroupName: undefined
  };
  if (output.groupId !== undefined && output.groupId !== null) {
    contents.GroupId = output.groupId;
  }
  if (output.groupName !== undefined && output.groupName !== null) {
    contents.GroupName = output.groupName;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): SecurityGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SecurityGroup(entry, context)
  );
};

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
    UserFeedback: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.Action = deserializeAws_restJson1_1Action(output.action, context);
  }
  if (output.archived !== undefined && output.archived !== null) {
    contents.Archived = output.archived;
  }
  if (output.count !== undefined && output.count !== null) {
    contents.Count = output.count;
  }
  if (output.detectorId !== undefined && output.detectorId !== null) {
    contents.DetectorId = output.detectorId;
  }
  if (output.eventFirstSeen !== undefined && output.eventFirstSeen !== null) {
    contents.EventFirstSeen = output.eventFirstSeen;
  }
  if (output.eventLastSeen !== undefined && output.eventLastSeen !== null) {
    contents.EventLastSeen = output.eventLastSeen;
  }
  if (output.evidence !== undefined && output.evidence !== null) {
    contents.Evidence = deserializeAws_restJson1_1Evidence(
      output.evidence,
      context
    );
  }
  if (output.resourceRole !== undefined && output.resourceRole !== null) {
    contents.ResourceRole = output.resourceRole;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.ServiceName = output.serviceName;
  }
  if (output.userFeedback !== undefined && output.userFeedback !== null) {
    contents.UserFeedback = output.userFeedback;
  }
  return contents;
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.Key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.Value = output.value;
  }
  return contents;
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

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1ThreatIntelSetIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ThreatIntelligenceDetail = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail => {
  let contents: any = {
    __type: "ThreatIntelligenceDetail",
    ThreatListName: undefined,
    ThreatNames: undefined
  };
  if (output.threatListName !== undefined && output.threatListName !== null) {
    contents.ThreatListName = output.threatListName;
  }
  if (output.threatNames !== undefined && output.threatNames !== null) {
    contents.ThreatNames = deserializeAws_restJson1_1ThreatNames(
      output.threatNames,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ThreatIntelligenceDetails = (
  output: any,
  context: __SerdeContext
): ThreatIntelligenceDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ThreatIntelligenceDetail(entry, context)
  );
};

const deserializeAws_restJson1_1ThreatNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1UnprocessedAccount = (
  output: any,
  context: __SerdeContext
): UnprocessedAccount => {
  let contents: any = {
    __type: "UnprocessedAccount",
    AccountId: undefined,
    Result: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.AccountId = output.accountId;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.Result = output.result;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessedAccounts = (
  output: any,
  context: __SerdeContext
): UnprocessedAccount[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UnprocessedAccount(entry, context)
  );
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
