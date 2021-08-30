import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "../commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "../commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "../commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "../commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "../commands/DeleteEmailIdentityCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "../commands/GetAccountCommand";
import {
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "../commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "../commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "../commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "../commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "../commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "../commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "../commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "../commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput } from "../commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "../commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "../commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "../commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "../commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "../commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "../commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "../commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "../commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "../commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "../commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "../commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "../commands/SendEmailCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  BlacklistEntry,
  Body,
  CloudWatchDestination,
  CloudWatchDimensionConfiguration,
  ConcurrentModificationException,
  Content,
  DailyVolume,
  DedicatedIp,
  DeliverabilityTestReport,
  DeliveryOptions,
  Destination,
  DkimAttributes,
  DomainDeliverabilityCampaign,
  DomainDeliverabilityTrackingOption,
  DomainIspPlacement,
  EmailContent,
  EventDestination,
  EventDestinationDefinition,
  EventType,
  IdentityInfo,
  InboxPlacementTrackingOption,
  IspPlacement,
  KinesisFirehoseDestination,
  LimitExceededException,
  MailFromAttributes,
  MailFromDomainNotVerifiedException,
  Message,
  MessageRejected,
  MessageTag,
  NotFoundException,
  OverallVolume,
  PinpointDestination,
  PlacementStatistics,
  RawMessage,
  ReputationOptions,
  SendQuota,
  SendingOptions,
  SendingPausedException,
  SnsDestination,
  Tag,
  Template,
  TooManyRequestsException,
  TrackingOptions,
  VolumeStatistics,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/configuration-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName !== undefined &&
      input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.DeliveryOptions !== undefined &&
      input.DeliveryOptions !== null && {
        DeliveryOptions: serializeAws_restJson1DeliveryOptions(input.DeliveryOptions, context),
      }),
    ...(input.ReputationOptions !== undefined &&
      input.ReputationOptions !== null && {
        ReputationOptions: serializeAws_restJson1ReputationOptions(input.ReputationOptions, context),
      }),
    ...(input.SendingOptions !== undefined &&
      input.SendingOptions !== null && {
        SendingOptions: serializeAws_restJson1SendingOptions(input.SendingOptions, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TrackingOptions !== undefined &&
      input.TrackingOptions !== null && {
        TrackingOptions: serializeAws_restJson1TrackingOptions(input.TrackingOptions, context),
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

export const serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined &&
      input.EventDestination !== null && {
        EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
      }),
    ...(input.EventDestinationName !== undefined &&
      input.EventDestinationName !== null && { EventDestinationName: input.EventDestinationName }),
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

export const serializeAws_restJson1CreateDedicatedIpPoolCommand = async (
  input: CreateDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ip-pools";
  let body: any;
  body = JSON.stringify({
    ...(input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateDeliverabilityTestReportCommand = async (
  input: CreateDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/deliverability-dashboard/test";
  let body: any;
  body = JSON.stringify({
    ...(input.Content !== undefined &&
      input.Content !== null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
    ...(input.FromEmailAddress !== undefined &&
      input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.ReportName !== undefined && input.ReportName !== null && { ReportName: input.ReportName }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateEmailIdentityCommand = async (
  input: CreateEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/identities";
  let body: any;
  body = JSON.stringify({
    ...(input.EmailIdentity !== undefined && input.EmailIdentity !== null && { EmailIdentity: input.EmailIdentity }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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

export const serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EventDestinationName.");
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

export const serializeAws_restJson1DeleteDedicatedIpPoolCommand = async (
  input: DeleteDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ip-pools/{PoolName}";
  if (input.PoolName !== undefined) {
    const labelValue: string = input.PoolName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PoolName.");
    }
    resolvedPath = resolvedPath.replace("{PoolName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PoolName.");
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

export const serializeAws_restJson1DeleteEmailIdentityCommand = async (
  input: DeleteEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/identities/{EmailIdentity}";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
    }
    resolvedPath = resolvedPath.replace("{EmailIdentity}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
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

export const serializeAws_restJson1GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/account";
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

export const serializeAws_restJson1GetBlacklistReportsCommand = async (
  input: GetBlacklistReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/blacklist-report";
  const query: any = {
    ...(input.BlacklistItemNames !== undefined && {
      BlacklistItemNames: (input.BlacklistItemNames || []).map((_entry) => _entry as any),
    }),
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

export const serializeAws_restJson1GetConfigurationSetCommand = async (
  input: GetConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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

export const serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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

export const serializeAws_restJson1GetDedicatedIpCommand = async (
  input: GetDedicatedIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ips/{Ip}";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace("{Ip}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
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

export const serializeAws_restJson1GetDedicatedIpsCommand = async (
  input: GetDedicatedIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ips";
  const query: any = {
    ...(input.PoolName !== undefined && { PoolName: input.PoolName }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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

export const serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = async (
  input: GetDeliverabilityDashboardOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/deliverability-dashboard";
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

export const serializeAws_restJson1GetDeliverabilityTestReportCommand = async (
  input: GetDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/test-reports/{ReportId}";
  if (input.ReportId !== undefined) {
    const labelValue: string = input.ReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReportId.");
    }
    resolvedPath = resolvedPath.replace("{ReportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReportId.");
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

export const serializeAws_restJson1GetDomainDeliverabilityCampaignCommand = async (
  input: GetDomainDeliverabilityCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/campaigns/{CampaignId}";
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
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

export const serializeAws_restJson1GetDomainStatisticsReportCommand = async (
  input: GetDomainStatisticsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/statistics-report/{Domain}";
  if (input.Domain !== undefined) {
    const labelValue: string = input.Domain;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Domain.");
    }
    resolvedPath = resolvedPath.replace("{Domain}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Domain.");
  }
  const query: any = {
    ...(input.StartDate !== undefined && { StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.EndDate !== undefined && { EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString() }),
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

export const serializeAws_restJson1GetEmailIdentityCommand = async (
  input: GetEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/identities/{EmailIdentity}";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
    }
    resolvedPath = resolvedPath.replace("{EmailIdentity}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
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

export const serializeAws_restJson1ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/configuration-sets";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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

export const serializeAws_restJson1ListDedicatedIpPoolsCommand = async (
  input: ListDedicatedIpPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ip-pools";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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

export const serializeAws_restJson1ListDeliverabilityTestReportsCommand = async (
  input: ListDeliverabilityTestReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/test-reports";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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

export const serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = async (
  input: ListDomainDeliverabilityCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns";
  if (input.SubscribedDomain !== undefined) {
    const labelValue: string = input.SubscribedDomain;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SubscribedDomain.");
    }
    resolvedPath = resolvedPath.replace("{SubscribedDomain}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SubscribedDomain.");
  }
  const query: any = {
    ...(input.StartDate !== undefined && { StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.EndDate !== undefined && { EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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

export const serializeAws_restJson1ListEmailIdentitiesCommand = async (
  input: ListEmailIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/identities";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/tags";
  const query: any = {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = async (
  input: PutAccountDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/account/dedicated-ips/warmup";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoWarmupEnabled !== undefined &&
      input.AutoWarmupEnabled !== null && { AutoWarmupEnabled: input.AutoWarmupEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutAccountSendingAttributesCommand = async (
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/account/sending";
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled !== undefined &&
      input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SendingPoolName !== undefined &&
      input.SendingPoolName !== null && { SendingPoolName: input.SendingPoolName }),
    ...(input.TlsPolicy !== undefined && input.TlsPolicy !== null && { TlsPolicy: input.TlsPolicy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutConfigurationSetReputationOptionsCommand = async (
  input: PutConfigurationSetReputationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ReputationMetricsEnabled !== undefined &&
      input.ReputationMetricsEnabled !== null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutConfigurationSetSendingOptionsCommand = async (
  input: PutConfigurationSetSendingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/sending";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled !== undefined &&
      input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = async (
  input: PutConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CustomRedirectDomain !== undefined &&
      input.CustomRedirectDomain !== null && { CustomRedirectDomain: input.CustomRedirectDomain }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutDedicatedIpInPoolCommand = async (
  input: PutDedicatedIpInPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ips/{Ip}/pool";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace("{Ip}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationPoolName !== undefined &&
      input.DestinationPoolName !== null && { DestinationPoolName: input.DestinationPoolName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = async (
  input: PutDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/dedicated-ips/{Ip}/warmup";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace("{Ip}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.WarmupPercentage !== undefined &&
      input.WarmupPercentage !== null && { WarmupPercentage: input.WarmupPercentage }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutDeliverabilityDashboardOptionCommand = async (
  input: PutDeliverabilityDashboardOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/deliverability-dashboard";
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardEnabled !== undefined &&
      input.DashboardEnabled !== null && { DashboardEnabled: input.DashboardEnabled }),
    ...(input.SubscribedDomains !== undefined &&
      input.SubscribedDomains !== null && {
        SubscribedDomains: serializeAws_restJson1DomainDeliverabilityTrackingOptions(input.SubscribedDomains, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEmailIdentityDkimAttributesCommand = async (
  input: PutEmailIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/identities/{EmailIdentity}/dkim";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
    }
    resolvedPath = resolvedPath.replace("{EmailIdentity}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SigningEnabled !== undefined &&
      input.SigningEnabled !== null && { SigningEnabled: input.SigningEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = async (
  input: PutEmailIdentityFeedbackAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/identities/{EmailIdentity}/feedback";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
    }
    resolvedPath = resolvedPath.replace("{EmailIdentity}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EmailForwardingEnabled !== undefined &&
      input.EmailForwardingEnabled !== null && { EmailForwardingEnabled: input.EmailForwardingEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = async (
  input: PutEmailIdentityMailFromAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/identities/{EmailIdentity}/mail-from";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
    }
    resolvedPath = resolvedPath.replace("{EmailIdentity}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BehaviorOnMxFailure !== undefined &&
      input.BehaviorOnMxFailure !== null && { BehaviorOnMxFailure: input.BehaviorOnMxFailure }),
    ...(input.MailFromDomain !== undefined &&
      input.MailFromDomain !== null && { MailFromDomain: input.MailFromDomain }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/outbound-emails";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName !== undefined &&
      input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Content !== undefined &&
      input.Content !== null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_restJson1Destination(input.Destination, context) }),
    ...(input.EmailTags !== undefined &&
      input.EmailTags !== null && { EmailTags: serializeAws_restJson1MessageTagList(input.EmailTags, context) }),
    ...(input.FeedbackForwardingEmailAddress !== undefined &&
      input.FeedbackForwardingEmailAddress !== null && {
        FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress,
      }),
    ...(input.FromEmailAddress !== undefined &&
      input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.ReplyToAddresses !== undefined &&
      input.ReplyToAddresses !== null && {
        ReplyToAddresses: serializeAws_restJson1EmailAddressList(input.ReplyToAddresses, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/email/tags";
  const query: any = {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && { TagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EventDestinationName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined &&
      input.EventDestination !== null && {
        EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetCommandError(output, context);
  }
  const contents: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointemail#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointemail#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDedicatedIpPoolCommandError(output, context);
  }
  const contents: CreateDedicatedIpPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointemail#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeliverabilityTestReportCommandError(output, context);
  }
  const contents: CreateDeliverabilityTestReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeliverabilityTestStatus: undefined,
    ReportId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestStatus !== undefined && data.DeliverabilityTestStatus !== null) {
    contents.DeliverabilityTestStatus = __expectString(data.DeliverabilityTestStatus);
  }
  if (data.ReportId !== undefined && data.ReportId !== null) {
    contents.ReportId = __expectString(data.ReportId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazonaws.pinpointemail#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.pinpointemail#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.pinpointemail#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SendingPausedException":
    case "com.amazonaws.pinpointemail#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailIdentityCommandError(output, context);
  }
  const contents: CreateEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    DkimAttributes: undefined,
    IdentityType: undefined,
    VerifiedForSendingStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
    contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
  }
  if (data.IdentityType !== undefined && data.IdentityType !== null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.VerifiedForSendingStatus !== undefined && data.VerifiedForSendingStatus !== null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetCommandError(output, context);
  }
  const contents: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDedicatedIpPoolCommandError(output, context);
  }
  const contents: DeleteDedicatedIpPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailIdentityCommandError(output, context);
  }
  const contents: DeleteEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountCommandError(output, context);
  }
  const contents: GetAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    DedicatedIpAutoWarmupEnabled: undefined,
    EnforcementStatus: undefined,
    ProductionAccessEnabled: undefined,
    SendQuota: undefined,
    SendingEnabled: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpAutoWarmupEnabled !== undefined && data.DedicatedIpAutoWarmupEnabled !== null) {
    contents.DedicatedIpAutoWarmupEnabled = __expectBoolean(data.DedicatedIpAutoWarmupEnabled);
  }
  if (data.EnforcementStatus !== undefined && data.EnforcementStatus !== null) {
    contents.EnforcementStatus = __expectString(data.EnforcementStatus);
  }
  if (data.ProductionAccessEnabled !== undefined && data.ProductionAccessEnabled !== null) {
    contents.ProductionAccessEnabled = __expectBoolean(data.ProductionAccessEnabled);
  }
  if (data.SendQuota !== undefined && data.SendQuota !== null) {
    contents.SendQuota = deserializeAws_restJson1SendQuota(data.SendQuota, context);
  }
  if (data.SendingEnabled !== undefined && data.SendingEnabled !== null) {
    contents.SendingEnabled = __expectBoolean(data.SendingEnabled);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBlacklistReportsCommandError(output, context);
  }
  const contents: GetBlacklistReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BlacklistReport: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlacklistReport !== undefined && data.BlacklistReport !== null) {
    contents.BlacklistReport = deserializeAws_restJson1BlacklistReport(data.BlacklistReport, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBlacklistReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationSetCommandError(output, context);
  }
  const contents: GetConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationSetName: undefined,
    DeliveryOptions: undefined,
    ReputationOptions: undefined,
    SendingOptions: undefined,
    Tags: undefined,
    TrackingOptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSetName !== undefined && data.ConfigurationSetName !== null) {
    contents.ConfigurationSetName = __expectString(data.ConfigurationSetName);
  }
  if (data.DeliveryOptions !== undefined && data.DeliveryOptions !== null) {
    contents.DeliveryOptions = deserializeAws_restJson1DeliveryOptions(data.DeliveryOptions, context);
  }
  if (data.ReputationOptions !== undefined && data.ReputationOptions !== null) {
    contents.ReputationOptions = deserializeAws_restJson1ReputationOptions(data.ReputationOptions, context);
  }
  if (data.SendingOptions !== undefined && data.SendingOptions !== null) {
    contents.SendingOptions = deserializeAws_restJson1SendingOptions(data.SendingOptions, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (data.TrackingOptions !== undefined && data.TrackingOptions !== null) {
    contents.TrackingOptions = deserializeAws_restJson1TrackingOptions(data.TrackingOptions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError(output, context);
  }
  const contents: GetConfigurationSetEventDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventDestinations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
    contents.EventDestinations = deserializeAws_restJson1EventDestinations(data.EventDestinations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDedicatedIpCommandError(output, context);
  }
  const contents: GetDedicatedIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    DedicatedIp: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIp !== undefined && data.DedicatedIp !== null) {
    contents.DedicatedIp = deserializeAws_restJson1DedicatedIp(data.DedicatedIp, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDedicatedIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDedicatedIpsCommandError(output, context);
  }
  const contents: GetDedicatedIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DedicatedIps: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIps !== undefined && data.DedicatedIps !== null) {
    contents.DedicatedIps = deserializeAws_restJson1DedicatedIpList(data.DedicatedIps, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDedicatedIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError(output, context);
  }
  const contents: GetDeliverabilityDashboardOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountStatus: undefined,
    ActiveSubscribedDomains: undefined,
    DashboardEnabled: undefined,
    PendingExpirationSubscribedDomains: undefined,
    SubscriptionExpiryDate: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountStatus !== undefined && data.AccountStatus !== null) {
    contents.AccountStatus = __expectString(data.AccountStatus);
  }
  if (data.ActiveSubscribedDomains !== undefined && data.ActiveSubscribedDomains !== null) {
    contents.ActiveSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(
      data.ActiveSubscribedDomains,
      context
    );
  }
  if (data.DashboardEnabled !== undefined && data.DashboardEnabled !== null) {
    contents.DashboardEnabled = __expectBoolean(data.DashboardEnabled);
  }
  if (data.PendingExpirationSubscribedDomains !== undefined && data.PendingExpirationSubscribedDomains !== null) {
    contents.PendingExpirationSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(
      data.PendingExpirationSubscribedDomains,
      context
    );
  }
  if (data.SubscriptionExpiryDate !== undefined && data.SubscriptionExpiryDate !== null) {
    contents.SubscriptionExpiryDate = new Date(Math.round(data.SubscriptionExpiryDate * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeliverabilityTestReportCommandError(output, context);
  }
  const contents: GetDeliverabilityTestReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeliverabilityTestReport: undefined,
    IspPlacements: undefined,
    Message: undefined,
    OverallPlacement: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReport !== undefined && data.DeliverabilityTestReport !== null) {
    contents.DeliverabilityTestReport = deserializeAws_restJson1DeliverabilityTestReport(
      data.DeliverabilityTestReport,
      context
    );
  }
  if (data.IspPlacements !== undefined && data.IspPlacements !== null) {
    contents.IspPlacements = deserializeAws_restJson1IspPlacements(data.IspPlacements, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OverallPlacement !== undefined && data.OverallPlacement !== null) {
    contents.OverallPlacement = deserializeAws_restJson1PlacementStatistics(data.OverallPlacement, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError(output, context);
  }
  const contents: GetDomainDeliverabilityCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainDeliverabilityCampaign: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaign !== undefined && data.DomainDeliverabilityCampaign !== null) {
    contents.DomainDeliverabilityCampaign = deserializeAws_restJson1DomainDeliverabilityCampaign(
      data.DomainDeliverabilityCampaign,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainStatisticsReportCommandError(output, context);
  }
  const contents: GetDomainStatisticsReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    DailyVolumes: undefined,
    OverallVolume: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DailyVolumes !== undefined && data.DailyVolumes !== null) {
    contents.DailyVolumes = deserializeAws_restJson1DailyVolumes(data.DailyVolumes, context);
  }
  if (data.OverallVolume !== undefined && data.OverallVolume !== null) {
    contents.OverallVolume = deserializeAws_restJson1OverallVolume(data.OverallVolume, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainStatisticsReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailIdentityCommandError(output, context);
  }
  const contents: GetEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    DkimAttributes: undefined,
    FeedbackForwardingStatus: undefined,
    IdentityType: undefined,
    MailFromAttributes: undefined,
    Tags: undefined,
    VerifiedForSendingStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
    contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
  }
  if (data.FeedbackForwardingStatus !== undefined && data.FeedbackForwardingStatus !== null) {
    contents.FeedbackForwardingStatus = __expectBoolean(data.FeedbackForwardingStatus);
  }
  if (data.IdentityType !== undefined && data.IdentityType !== null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.MailFromAttributes !== undefined && data.MailFromAttributes !== null) {
    contents.MailFromAttributes = deserializeAws_restJson1MailFromAttributes(data.MailFromAttributes, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (data.VerifiedForSendingStatus !== undefined && data.VerifiedForSendingStatus !== null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationSetsCommandError(output, context);
  }
  const contents: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationSets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
    contents.ConfigurationSets = deserializeAws_restJson1ConfigurationSetNameList(data.ConfigurationSets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDedicatedIpPoolsCommandError(output, context);
  }
  const contents: ListDedicatedIpPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DedicatedIpPools: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpPools !== undefined && data.DedicatedIpPools !== null) {
    contents.DedicatedIpPools = deserializeAws_restJson1ListOfDedicatedIpPools(data.DedicatedIpPools, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDedicatedIpPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeliverabilityTestReportsCommandError(output, context);
  }
  const contents: ListDeliverabilityTestReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeliverabilityTestReports: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReports !== undefined && data.DeliverabilityTestReports !== null) {
    contents.DeliverabilityTestReports = deserializeAws_restJson1DeliverabilityTestReports(
      data.DeliverabilityTestReports,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeliverabilityTestReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError(output, context);
  }
  const contents: ListDomainDeliverabilityCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainDeliverabilityCampaigns: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaigns !== undefined && data.DomainDeliverabilityCampaigns !== null) {
    contents.DomainDeliverabilityCampaigns = deserializeAws_restJson1DomainDeliverabilityCampaignList(
      data.DomainDeliverabilityCampaigns,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEmailIdentitiesCommandError(output, context);
  }
  const contents: ListEmailIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmailIdentities: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmailIdentities !== undefined && data.EmailIdentities !== null) {
    contents.EmailIdentities = deserializeAws_restJson1IdentityInfoList(data.EmailIdentities, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEmailIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: PutAccountDedicatedIpWarmupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountSendingAttributesCommandError(output, context);
  }
  const contents: PutAccountSendingAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutAccountSendingAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError(output, context);
  }
  const contents: PutConfigurationSetDeliveryOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError(output, context);
  }
  const contents: PutConfigurationSetReputationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError(output, context);
  }
  const contents: PutConfigurationSetSendingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const contents: PutConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDedicatedIpInPoolCommandError(output, context);
  }
  const contents: PutDedicatedIpInPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDedicatedIpInPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: PutDedicatedIpWarmupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError(output, context);
  }
  const contents: PutDeliverabilityDashboardOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointemail#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError(output, context);
  }
  const contents: PutEmailIdentityDkimAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError(output, context);
  }
  const contents: PutEmailIdentityFeedbackAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError(output, context);
  }
  const contents: PutEmailIdentityMailFromAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendEmailCommandError(output, context);
  }
  const contents: SendEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazonaws.pinpointemail#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.pinpointemail#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.pinpointemail#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SendingPausedException":
    case "com.amazonaws.pinpointemail#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccountSuspendedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: AccountSuspendedException = {
    name: "AccountSuspendedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const contents: MailFromDomainNotVerifiedException = {
    name: "MailFromDomainNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1MessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: MessageRejected = {
    name: "MessageRejected",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1SendingPausedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SendingPausedException> => {
  const contents: SendingPausedException = {
    name: "SendingPausedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1Body = (input: Body, context: __SerdeContext): any => {
  return {
    ...(input.Html !== undefined &&
      input.Html !== null && { Html: serializeAws_restJson1Content(input.Html, context) }),
    ...(input.Text !== undefined &&
      input.Text !== null && { Text: serializeAws_restJson1Content(input.Text, context) }),
  };
};

const serializeAws_restJson1CloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  return {
    ...(input.DimensionConfigurations !== undefined &&
      input.DimensionConfigurations !== null && {
        DimensionConfigurations: serializeAws_restJson1CloudWatchDimensionConfigurations(
          input.DimensionConfigurations,
          context
        ),
      }),
  };
};

const serializeAws_restJson1CloudWatchDimensionConfiguration = (
  input: CloudWatchDimensionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultDimensionValue !== undefined &&
      input.DefaultDimensionValue !== null && { DefaultDimensionValue: input.DefaultDimensionValue }),
    ...(input.DimensionName !== undefined && input.DimensionName !== null && { DimensionName: input.DimensionName }),
    ...(input.DimensionValueSource !== undefined &&
      input.DimensionValueSource !== null && { DimensionValueSource: input.DimensionValueSource }),
  };
};

const serializeAws_restJson1CloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
};

const serializeAws_restJson1Content = (input: Content, context: __SerdeContext): any => {
  return {
    ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
    ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
  };
};

const serializeAws_restJson1DeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingPoolName !== undefined &&
      input.SendingPoolName !== null && { SendingPoolName: input.SendingPoolName }),
    ...(input.TlsPolicy !== undefined && input.TlsPolicy !== null && { TlsPolicy: input.TlsPolicy }),
  };
};

const serializeAws_restJson1Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.BccAddresses !== undefined &&
      input.BccAddresses !== null && {
        BccAddresses: serializeAws_restJson1EmailAddressList(input.BccAddresses, context),
      }),
    ...(input.CcAddresses !== undefined &&
      input.CcAddresses !== null && {
        CcAddresses: serializeAws_restJson1EmailAddressList(input.CcAddresses, context),
      }),
    ...(input.ToAddresses !== undefined &&
      input.ToAddresses !== null && {
        ToAddresses: serializeAws_restJson1EmailAddressList(input.ToAddresses, context),
      }),
  };
};

const serializeAws_restJson1DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.InboxPlacementTrackingOption !== undefined &&
      input.InboxPlacementTrackingOption !== null && {
        InboxPlacementTrackingOption: serializeAws_restJson1InboxPlacementTrackingOption(
          input.InboxPlacementTrackingOption,
          context
        ),
      }),
    ...(input.SubscriptionStartDate !== undefined &&
      input.SubscriptionStartDate !== null && {
        SubscriptionStartDate: Math.round(input.SubscriptionStartDate.getTime() / 1000),
      }),
  };
};

const serializeAws_restJson1DomainDeliverabilityTrackingOptions = (
  input: DomainDeliverabilityTrackingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
};

const serializeAws_restJson1EmailAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.Raw !== undefined && input.Raw !== null && { Raw: serializeAws_restJson1RawMessage(input.Raw, context) }),
    ...(input.Simple !== undefined &&
      input.Simple !== null && { Simple: serializeAws_restJson1Message(input.Simple, context) }),
    ...(input.Template !== undefined &&
      input.Template !== null && { Template: serializeAws_restJson1Template(input.Template, context) }),
  };
};

const serializeAws_restJson1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchDestination !== undefined &&
      input.CloudWatchDestination !== null && {
        CloudWatchDestination: serializeAws_restJson1CloudWatchDestination(input.CloudWatchDestination, context),
      }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination !== undefined &&
      input.KinesisFirehoseDestination !== null && {
        KinesisFirehoseDestination: serializeAws_restJson1KinesisFirehoseDestination(
          input.KinesisFirehoseDestination,
          context
        ),
      }),
    ...(input.MatchingEventTypes !== undefined &&
      input.MatchingEventTypes !== null && {
        MatchingEventTypes: serializeAws_restJson1EventTypes(input.MatchingEventTypes, context),
      }),
    ...(input.PinpointDestination !== undefined &&
      input.PinpointDestination !== null && {
        PinpointDestination: serializeAws_restJson1PinpointDestination(input.PinpointDestination, context),
      }),
    ...(input.SnsDestination !== undefined &&
      input.SnsDestination !== null && {
        SnsDestination: serializeAws_restJson1SnsDestination(input.SnsDestination, context),
      }),
  };
};

const serializeAws_restJson1EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1InboxPlacementTrackingOption = (
  input: InboxPlacementTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Global !== undefined && input.Global !== null && { Global: input.Global }),
    ...(input.TrackedIsps !== undefined &&
      input.TrackedIsps !== null && { TrackedIsps: serializeAws_restJson1IspNameList(input.TrackedIsps, context) }),
  };
};

const serializeAws_restJson1IspNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamArn !== undefined &&
      input.DeliveryStreamArn !== null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && input.Body !== null && { Body: serializeAws_restJson1Body(input.Body, context) }),
    ...(input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_restJson1Content(input.Subject, context) }),
  };
};

const serializeAws_restJson1MessageTag = (input: MessageTag, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1MessageTagList = (input: MessageTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MessageTag(entry, context);
    });
};

const serializeAws_restJson1PinpointDestination = (input: PinpointDestination, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArn !== undefined &&
      input.ApplicationArn !== null && { ApplicationArn: input.ApplicationArn }),
  };
};

const serializeAws_restJson1RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && input.Data !== null && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_restJson1ReputationOptions = (input: ReputationOptions, context: __SerdeContext): any => {
  return {
    ...(input.LastFreshStart !== undefined &&
      input.LastFreshStart !== null && { LastFreshStart: Math.round(input.LastFreshStart.getTime() / 1000) }),
    ...(input.ReputationMetricsEnabled !== undefined &&
      input.ReputationMetricsEnabled !== null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
  };
};

const serializeAws_restJson1SendingOptions = (input: SendingOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingEnabled !== undefined &&
      input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
  };
};

const serializeAws_restJson1SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.TemplateArn !== undefined && input.TemplateArn !== null && { TemplateArn: input.TemplateArn }),
    ...(input.TemplateData !== undefined && input.TemplateData !== null && { TemplateData: input.TemplateData }),
  };
};

const serializeAws_restJson1TrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  return {
    ...(input.CustomRedirectDomain !== undefined &&
      input.CustomRedirectDomain !== null && { CustomRedirectDomain: input.CustomRedirectDomain }),
  };
};

const deserializeAws_restJson1BlacklistEntries = (output: any, context: __SerdeContext): BlacklistEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BlacklistEntry(entry, context);
    });
};

const deserializeAws_restJson1BlacklistEntry = (output: any, context: __SerdeContext): BlacklistEntry => {
  return {
    Description: __expectString(output.Description),
    ListingTime:
      output.ListingTime !== undefined && output.ListingTime !== null
        ? new Date(Math.round(output.ListingTime * 1000))
        : undefined,
    RblName: __expectString(output.RblName),
  } as any;
};

const deserializeAws_restJson1BlacklistReport = (
  output: any,
  context: __SerdeContext
): { [key: string]: BlacklistEntry[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: BlacklistEntry[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1BlacklistEntries(value, context),
    };
  }, {});
};

const deserializeAws_restJson1CloudWatchDestination = (output: any, context: __SerdeContext): CloudWatchDestination => {
  return {
    DimensionConfigurations:
      output.DimensionConfigurations !== undefined && output.DimensionConfigurations !== null
        ? deserializeAws_restJson1CloudWatchDimensionConfigurations(output.DimensionConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  return {
    DefaultDimensionValue: __expectString(output.DefaultDimensionValue),
    DimensionName: __expectString(output.DimensionName),
    DimensionValueSource: __expectString(output.DimensionValueSource),
  } as any;
};

const deserializeAws_restJson1CloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
};

const deserializeAws_restJson1ConfigurationSetNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1DailyVolume = (output: any, context: __SerdeContext): DailyVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements !== undefined && output.DomainIspPlacements !== null
        ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
        : undefined,
    StartDate:
      output.StartDate !== undefined && output.StartDate !== null
        ? new Date(Math.round(output.StartDate * 1000))
        : undefined,
    VolumeStatistics:
      output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
        ? deserializeAws_restJson1VolumeStatistics(output.VolumeStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DailyVolumes = (output: any, context: __SerdeContext): DailyVolume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DailyVolume(entry, context);
    });
};

const deserializeAws_restJson1DedicatedIp = (output: any, context: __SerdeContext): DedicatedIp => {
  return {
    Ip: __expectString(output.Ip),
    PoolName: __expectString(output.PoolName),
    WarmupPercentage: __expectInt32(output.WarmupPercentage),
    WarmupStatus: __expectString(output.WarmupStatus),
  } as any;
};

const deserializeAws_restJson1DedicatedIpList = (output: any, context: __SerdeContext): DedicatedIp[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DedicatedIp(entry, context);
    });
};

const deserializeAws_restJson1DeliverabilityTestReport = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport => {
  return {
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    DeliverabilityTestStatus: __expectString(output.DeliverabilityTestStatus),
    FromEmailAddress: __expectString(output.FromEmailAddress),
    ReportId: __expectString(output.ReportId),
    ReportName: __expectString(output.ReportName),
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_restJson1DeliverabilityTestReports = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeliverabilityTestReport(entry, context);
    });
};

const deserializeAws_restJson1DeliveryOptions = (output: any, context: __SerdeContext): DeliveryOptions => {
  return {
    SendingPoolName: __expectString(output.SendingPoolName),
    TlsPolicy: __expectString(output.TlsPolicy),
  } as any;
};

const deserializeAws_restJson1DkimAttributes = (output: any, context: __SerdeContext): DkimAttributes => {
  return {
    SigningEnabled: __expectBoolean(output.SigningEnabled),
    Status: __expectString(output.Status),
    Tokens:
      output.Tokens !== undefined && output.Tokens !== null
        ? deserializeAws_restJson1DnsTokenList(output.Tokens, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DnsTokenList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1DomainDeliverabilityCampaign = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign => {
  return {
    CampaignId: __expectString(output.CampaignId),
    DeleteRate: __limitedParseDouble(output.DeleteRate),
    Esps:
      output.Esps !== undefined && output.Esps !== null
        ? deserializeAws_restJson1Esps(output.Esps, context)
        : undefined,
    FirstSeenDateTime:
      output.FirstSeenDateTime !== undefined && output.FirstSeenDateTime !== null
        ? new Date(Math.round(output.FirstSeenDateTime * 1000))
        : undefined,
    FromAddress: __expectString(output.FromAddress),
    ImageUrl: __expectString(output.ImageUrl),
    InboxCount: __expectLong(output.InboxCount),
    LastSeenDateTime:
      output.LastSeenDateTime !== undefined && output.LastSeenDateTime !== null
        ? new Date(Math.round(output.LastSeenDateTime * 1000))
        : undefined,
    ProjectedVolume: __expectLong(output.ProjectedVolume),
    ReadDeleteRate: __limitedParseDouble(output.ReadDeleteRate),
    ReadRate: __limitedParseDouble(output.ReadRate),
    SendingIps:
      output.SendingIps !== undefined && output.SendingIps !== null
        ? deserializeAws_restJson1IpList(output.SendingIps, context)
        : undefined,
    SpamCount: __expectLong(output.SpamCount),
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_restJson1DomainDeliverabilityCampaignList = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainDeliverabilityCampaign(entry, context);
    });
};

const deserializeAws_restJson1DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  return {
    Domain: __expectString(output.Domain),
    InboxPlacementTrackingOption:
      output.InboxPlacementTrackingOption !== undefined && output.InboxPlacementTrackingOption !== null
        ? deserializeAws_restJson1InboxPlacementTrackingOption(output.InboxPlacementTrackingOption, context)
        : undefined,
    SubscriptionStartDate:
      output.SubscriptionStartDate !== undefined && output.SubscriptionStartDate !== null
        ? new Date(Math.round(output.SubscriptionStartDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
};

const deserializeAws_restJson1DomainIspPlacement = (output: any, context: __SerdeContext): DomainIspPlacement => {
  return {
    InboxPercentage: __limitedParseDouble(output.InboxPercentage),
    InboxRawCount: __expectLong(output.InboxRawCount),
    IspName: __expectString(output.IspName),
    SpamPercentage: __limitedParseDouble(output.SpamPercentage),
    SpamRawCount: __expectLong(output.SpamRawCount),
  } as any;
};

const deserializeAws_restJson1DomainIspPlacements = (output: any, context: __SerdeContext): DomainIspPlacement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainIspPlacement(entry, context);
    });
};

const deserializeAws_restJson1Esps = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchDestination:
      output.CloudWatchDestination !== undefined && output.CloudWatchDestination !== null
        ? deserializeAws_restJson1CloudWatchDestination(output.CloudWatchDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination !== undefined && output.KinesisFirehoseDestination !== null
        ? deserializeAws_restJson1KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes !== undefined && output.MatchingEventTypes !== null
        ? deserializeAws_restJson1EventTypes(output.MatchingEventTypes, context)
        : undefined,
    Name: __expectString(output.Name),
    PinpointDestination:
      output.PinpointDestination !== undefined && output.PinpointDestination !== null
        ? deserializeAws_restJson1PinpointDestination(output.PinpointDestination, context)
        : undefined,
    SnsDestination:
      output.SnsDestination !== undefined && output.SnsDestination !== null
        ? deserializeAws_restJson1SnsDestination(output.SnsDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventDestination(entry, context);
    });
};

const deserializeAws_restJson1EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1IdentityInfo = (output: any, context: __SerdeContext): IdentityInfo => {
  return {
    IdentityName: __expectString(output.IdentityName),
    IdentityType: __expectString(output.IdentityType),
    SendingEnabled: __expectBoolean(output.SendingEnabled),
  } as any;
};

const deserializeAws_restJson1IdentityInfoList = (output: any, context: __SerdeContext): IdentityInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityInfo(entry, context);
    });
};

const deserializeAws_restJson1InboxPlacementTrackingOption = (
  output: any,
  context: __SerdeContext
): InboxPlacementTrackingOption => {
  return {
    Global: __expectBoolean(output.Global),
    TrackedIsps:
      output.TrackedIsps !== undefined && output.TrackedIsps !== null
        ? deserializeAws_restJson1IspNameList(output.TrackedIsps, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IpList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1IspNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1IspPlacement = (output: any, context: __SerdeContext): IspPlacement => {
  return {
    IspName: __expectString(output.IspName),
    PlacementStatistics:
      output.PlacementStatistics !== undefined && output.PlacementStatistics !== null
        ? deserializeAws_restJson1PlacementStatistics(output.PlacementStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IspPlacements = (output: any, context: __SerdeContext): IspPlacement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IspPlacement(entry, context);
    });
};

const deserializeAws_restJson1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

const deserializeAws_restJson1ListOfDedicatedIpPools = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1MailFromAttributes = (output: any, context: __SerdeContext): MailFromAttributes => {
  return {
    BehaviorOnMxFailure: __expectString(output.BehaviorOnMxFailure),
    MailFromDomain: __expectString(output.MailFromDomain),
    MailFromDomainStatus: __expectString(output.MailFromDomainStatus),
  } as any;
};

const deserializeAws_restJson1OverallVolume = (output: any, context: __SerdeContext): OverallVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements !== undefined && output.DomainIspPlacements !== null
        ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
        : undefined,
    ReadRatePercent: __limitedParseDouble(output.ReadRatePercent),
    VolumeStatistics:
      output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
        ? deserializeAws_restJson1VolumeStatistics(output.VolumeStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PinpointDestination = (output: any, context: __SerdeContext): PinpointDestination => {
  return {
    ApplicationArn: __expectString(output.ApplicationArn),
  } as any;
};

const deserializeAws_restJson1PlacementStatistics = (output: any, context: __SerdeContext): PlacementStatistics => {
  return {
    DkimPercentage: __limitedParseDouble(output.DkimPercentage),
    InboxPercentage: __limitedParseDouble(output.InboxPercentage),
    MissingPercentage: __limitedParseDouble(output.MissingPercentage),
    SpamPercentage: __limitedParseDouble(output.SpamPercentage),
    SpfPercentage: __limitedParseDouble(output.SpfPercentage),
  } as any;
};

const deserializeAws_restJson1ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  return {
    LastFreshStart:
      output.LastFreshStart !== undefined && output.LastFreshStart !== null
        ? new Date(Math.round(output.LastFreshStart * 1000))
        : undefined,
    ReputationMetricsEnabled: __expectBoolean(output.ReputationMetricsEnabled),
  } as any;
};

const deserializeAws_restJson1SendingOptions = (output: any, context: __SerdeContext): SendingOptions => {
  return {
    SendingEnabled: __expectBoolean(output.SendingEnabled),
  } as any;
};

const deserializeAws_restJson1SendQuota = (output: any, context: __SerdeContext): SendQuota => {
  return {
    Max24HourSend: __limitedParseDouble(output.Max24HourSend),
    MaxSendRate: __limitedParseDouble(output.MaxSendRate),
    SentLast24Hours: __limitedParseDouble(output.SentLast24Hours),
  } as any;
};

const deserializeAws_restJson1SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1TrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  return {
    CustomRedirectDomain: __expectString(output.CustomRedirectDomain),
  } as any;
};

const deserializeAws_restJson1VolumeStatistics = (output: any, context: __SerdeContext): VolumeStatistics => {
  return {
    InboxRawCount: __expectLong(output.InboxRawCount),
    ProjectedInbox: __expectLong(output.ProjectedInbox),
    ProjectedSpam: __expectLong(output.ProjectedSpam),
    SpamRawCount: __expectLong(output.SpamRawCount),
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
