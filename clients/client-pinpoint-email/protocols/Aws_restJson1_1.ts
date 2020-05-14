import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput
} from "../commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput
} from "../commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput
} from "../commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput
} from "../commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput
} from "../commands/DeleteEmailIdentityCommand";
import {
  GetAccountCommandInput,
  GetAccountCommandOutput
} from "../commands/GetAccountCommand";
import {
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput
} from "../commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput
} from "../commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import {
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput
} from "../commands/GetDedicatedIpCommand";
import {
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput
} from "../commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput
} from "../commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput
} from "../commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput
} from "../commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput
} from "../commands/GetDomainStatisticsReportCommand";
import {
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput
} from "../commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput
} from "../commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput
} from "../commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput
} from "../commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput
} from "../commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput
} from "../commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput
} from "../commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput
} from "../commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput
} from "../commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput
} from "../commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput
} from "../commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput
} from "../commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput
} from "../commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput
} from "../commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput
} from "../commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput
} from "../commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput
} from "../commands/PutEmailIdentityMailFromAttributesCommand";
import {
  SendEmailCommandInput,
  SendEmailCommandOutput
} from "../commands/SendEmailCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput
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
  VolumeStatistics
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

export const serializeAws_restJson1_1CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/configuration-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName !== undefined && {
      ConfigurationSetName: input.ConfigurationSetName
    }),
    ...(input.DeliveryOptions !== undefined && {
      DeliveryOptions: serializeAws_restJson1_1DeliveryOptions(
        input.DeliveryOptions,
        context
      )
    }),
    ...(input.ReputationOptions !== undefined && {
      ReputationOptions: serializeAws_restJson1_1ReputationOptions(
        input.ReputationOptions,
        context
      )
    }),
    ...(input.SendingOptions !== undefined && {
      SendingOptions: serializeAws_restJson1_1SendingOptions(
        input.SendingOptions,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagList(input.Tags, context)
    }),
    ...(input.TrackingOptions !== undefined && {
      TrackingOptions: serializeAws_restJson1_1TrackingOptions(
        input.TrackingOptions,
        context
      )
    })
  });
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

export const serializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined && {
      EventDestination: serializeAws_restJson1_1EventDestinationDefinition(
        input.EventDestination,
        context
      )
    }),
    ...(input.EventDestinationName !== undefined && {
      EventDestinationName: input.EventDestinationName
    })
  });
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

export const serializeAws_restJson1_1CreateDedicatedIpPoolCommand = async (
  input: CreateDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/dedicated-ip-pools";
  let body: any;
  body = JSON.stringify({
    ...(input.PoolName !== undefined && { PoolName: input.PoolName }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagList(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1_1CreateDeliverabilityTestReportCommand = async (
  input: CreateDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/deliverability-dashboard/test";
  let body: any;
  body = JSON.stringify({
    ...(input.Content !== undefined && {
      Content: serializeAws_restJson1_1EmailContent(input.Content, context)
    }),
    ...(input.FromEmailAddress !== undefined && {
      FromEmailAddress: input.FromEmailAddress
    }),
    ...(input.ReportName !== undefined && { ReportName: input.ReportName }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagList(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1_1CreateEmailIdentityCommand = async (
  input: CreateEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/identities";
  let body: any;
  body = JSON.stringify({
    ...(input.EmailIdentity !== undefined && {
      EmailIdentity: input.EmailIdentity
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagList(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1_1DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
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

export const serializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EventDestinationName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
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

export const serializeAws_restJson1_1DeleteDedicatedIpPoolCommand = async (
  input: DeleteDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/dedicated-ip-pools/{PoolName}";
  if (input.PoolName !== undefined) {
    const labelValue: string = input.PoolName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PoolName.");
    }
    resolvedPath = resolvedPath.replace(
      "{PoolName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PoolName.");
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

export const serializeAws_restJson1_1DeleteEmailIdentityCommand = async (
  input: DeleteEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/identities/{EmailIdentity}";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EmailIdentity."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EmailIdentity}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
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

export const serializeAws_restJson1_1GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/account";
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

export const serializeAws_restJson1_1GetBlacklistReportsCommand = async (
  input: GetBlacklistReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/deliverability-dashboard/blacklist-report";
  const query: any = {
    ...(input.BlacklistItemNames !== undefined && {
      BlacklistItemNames: (input.BlacklistItemNames || []).map(_entry => _entry)
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

export const serializeAws_restJson1_1GetConfigurationSetCommand = async (
  input: GetConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
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

export const serializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
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

export const serializeAws_restJson1_1GetDedicatedIpCommand = async (
  input: GetDedicatedIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/dedicated-ips/{Ip}";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace(
      "{Ip}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
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

export const serializeAws_restJson1_1GetDedicatedIpsCommand = async (
  input: GetDedicatedIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/dedicated-ips";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && {
      PageSize: input.PageSize.toString()
    }),
    ...(input.PoolName !== undefined && { PoolName: input.PoolName })
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

export const serializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommand = async (
  input: GetDeliverabilityDashboardOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/deliverability-dashboard";
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

export const serializeAws_restJson1_1GetDeliverabilityTestReportCommand = async (
  input: GetDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/deliverability-dashboard/test-reports/{ReportId}";
  if (input.ReportId !== undefined) {
    const labelValue: string = input.ReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReportId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ReportId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ReportId.");
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

export const serializeAws_restJson1_1GetDomainDeliverabilityCampaignCommand = async (
  input: GetDomainDeliverabilityCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/deliverability-dashboard/campaigns/{CampaignId}";
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace(
      "{CampaignId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
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

export const serializeAws_restJson1_1GetDomainStatisticsReportCommand = async (
  input: GetDomainStatisticsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/deliverability-dashboard/statistics-report/{Domain}";
  if (input.Domain !== undefined) {
    const labelValue: string = input.Domain;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Domain.");
    }
    resolvedPath = resolvedPath.replace(
      "{Domain}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Domain.");
  }
  const query: any = {
    ...(input.EndDate !== undefined && {
      EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.StartDate !== undefined && {
      StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString()
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

export const serializeAws_restJson1_1GetEmailIdentityCommand = async (
  input: GetEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/identities/{EmailIdentity}";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EmailIdentity."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EmailIdentity}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
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

export const serializeAws_restJson1_1ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/configuration-sets";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() })
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

export const serializeAws_restJson1_1ListDedicatedIpPoolsCommand = async (
  input: ListDedicatedIpPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/dedicated-ip-pools";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() })
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

export const serializeAws_restJson1_1ListDeliverabilityTestReportsCommand = async (
  input: ListDeliverabilityTestReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/deliverability-dashboard/test-reports";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() })
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

export const serializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand = async (
  input: ListDomainDeliverabilityCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns";
  if (input.SubscribedDomain !== undefined) {
    const labelValue: string = input.SubscribedDomain;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SubscribedDomain."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SubscribedDomain}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: SubscribedDomain."
    );
  }
  const query: any = {
    ...(input.EndDate !== undefined && {
      EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && {
      PageSize: input.PageSize.toString()
    }),
    ...(input.StartDate !== undefined && {
      StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString()
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

export const serializeAws_restJson1_1ListEmailIdentitiesCommand = async (
  input: ListEmailIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/email/identities";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() })
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
  let resolvedPath = "/v1/email/tags";
  const query: any = {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
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

export const serializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommand = async (
  input: PutAccountDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/account/dedicated-ips/warmup";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoWarmupEnabled !== undefined && {
      AutoWarmupEnabled: input.AutoWarmupEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutAccountSendingAttributesCommand = async (
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/account/sending";
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled !== undefined && {
      SendingEnabled: input.SendingEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SendingPoolName !== undefined && {
      SendingPoolName: input.SendingPoolName
    }),
    ...(input.TlsPolicy !== undefined && { TlsPolicy: input.TlsPolicy })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutConfigurationSetReputationOptionsCommand = async (
  input: PutConfigurationSetReputationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ReputationMetricsEnabled !== undefined && {
      ReputationMetricsEnabled: input.ReputationMetricsEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutConfigurationSetSendingOptionsCommand = async (
  input: PutConfigurationSetSendingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/sending";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled !== undefined && {
      SendingEnabled: input.SendingEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommand = async (
  input: PutConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CustomRedirectDomain !== undefined && {
      CustomRedirectDomain: input.CustomRedirectDomain
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutDedicatedIpInPoolCommand = async (
  input: PutDedicatedIpInPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/dedicated-ips/{Ip}/pool";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace(
      "{Ip}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationPoolName !== undefined && {
      DestinationPoolName: input.DestinationPoolName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommand = async (
  input: PutDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/dedicated-ips/{Ip}/warmup";
  if (input.Ip !== undefined) {
    const labelValue: string = input.Ip;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Ip.");
    }
    resolvedPath = resolvedPath.replace(
      "{Ip}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Ip.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.WarmupPercentage !== undefined && {
      WarmupPercentage: input.WarmupPercentage
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutDeliverabilityDashboardOptionCommand = async (
  input: PutDeliverabilityDashboardOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/deliverability-dashboard";
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardEnabled !== undefined && {
      DashboardEnabled: input.DashboardEnabled
    }),
    ...(input.SubscribedDomains !== undefined && {
      SubscribedDomains: serializeAws_restJson1_1DomainDeliverabilityTrackingOptions(
        input.SubscribedDomains,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutEmailIdentityDkimAttributesCommand = async (
  input: PutEmailIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/identities/{EmailIdentity}/dkim";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EmailIdentity."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EmailIdentity}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SigningEnabled !== undefined && {
      SigningEnabled: input.SigningEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand = async (
  input: PutEmailIdentityFeedbackAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/identities/{EmailIdentity}/feedback";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EmailIdentity."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EmailIdentity}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EmailForwardingEnabled !== undefined && {
      EmailForwardingEnabled: input.EmailForwardingEnabled
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommand = async (
  input: PutEmailIdentityMailFromAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/identities/{EmailIdentity}/mail-from";
  if (input.EmailIdentity !== undefined) {
    const labelValue: string = input.EmailIdentity;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EmailIdentity."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EmailIdentity}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EmailIdentity.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BehaviorOnMxFailure !== undefined && {
      BehaviorOnMxFailure: input.BehaviorOnMxFailure
    }),
    ...(input.MailFromDomain !== undefined && {
      MailFromDomain: input.MailFromDomain
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/email/outbound-emails";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName !== undefined && {
      ConfigurationSetName: input.ConfigurationSetName
    }),
    ...(input.Content !== undefined && {
      Content: serializeAws_restJson1_1EmailContent(input.Content, context)
    }),
    ...(input.Destination !== undefined && {
      Destination: serializeAws_restJson1_1Destination(
        input.Destination,
        context
      )
    }),
    ...(input.EmailTags !== undefined && {
      EmailTags: serializeAws_restJson1_1MessageTagList(
        input.EmailTags,
        context
      )
    }),
    ...(input.FeedbackForwardingEmailAddress !== undefined && {
      FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress
    }),
    ...(input.FromEmailAddress !== undefined && {
      FromEmailAddress: input.FromEmailAddress
    }),
    ...(input.ReplyToAddresses !== undefined && {
      ReplyToAddresses: serializeAws_restJson1_1EmailAddressList(
        input.ReplyToAddresses,
        context
      )
    })
  });
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
  let resolvedPath = "/v1/email/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagList(input.Tags, context)
    })
  });
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
  let resolvedPath = "/v1/email/tags";
  const query: any = {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: (input.TagKeys || []).map(_entry => _entry)
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

export const serializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EventDestinationName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined && {
      EventDestination: serializeAws_restJson1_1EventDestinationDefinition(
        input.EventDestination,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDedicatedIpPoolCommandError(
      output,
      context
    );
  }
  const contents: CreateDedicatedIpPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDedicatedIpPoolResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeliverabilityTestReportCommandError(
      output,
      context
    );
  }
  const contents: CreateDeliverabilityTestReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeliverabilityTestReportResponse",
    DeliverabilityTestStatus: undefined,
    ReportId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeliverabilityTestStatus !== undefined &&
    data.DeliverabilityTestStatus !== null
  ) {
    contents.DeliverabilityTestStatus = data.DeliverabilityTestStatus;
  }
  if (data.ReportId !== undefined && data.ReportId !== null) {
    contents.ReportId = data.ReportId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1_1AccountSuspendedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MessageRejected":
    case "com.amazon.bacon.pinpoint.frontend.svc#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1_1MessageRejectedResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SendingPausedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1_1SendingPausedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateEmailIdentityCommandError(
      output,
      context
    );
  }
  const contents: CreateEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEmailIdentityResponse",
    DkimAttributes: undefined,
    IdentityType: undefined,
    VerifiedForSendingStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
    contents.DkimAttributes = deserializeAws_restJson1_1DkimAttributes(
      data.DkimAttributes,
      context
    );
  }
  if (data.IdentityType !== undefined && data.IdentityType !== null) {
    contents.IdentityType = data.IdentityType;
  }
  if (
    data.VerifiedForSendingStatus !== undefined &&
    data.VerifiedForSendingStatus !== null
  ) {
    contents.VerifiedForSendingStatus = data.VerifiedForSendingStatus;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDedicatedIpPoolCommandError(
      output,
      context
    );
  }
  const contents: DeleteDedicatedIpPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDedicatedIpPoolResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteEmailIdentityCommandError(
      output,
      context
    );
  }
  const contents: DeleteEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEmailIdentityResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAccountCommandError(output, context);
  }
  const contents: GetAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountResponse",
    DedicatedIpAutoWarmupEnabled: undefined,
    EnforcementStatus: undefined,
    ProductionAccessEnabled: undefined,
    SendQuota: undefined,
    SendingEnabled: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DedicatedIpAutoWarmupEnabled !== undefined &&
    data.DedicatedIpAutoWarmupEnabled !== null
  ) {
    contents.DedicatedIpAutoWarmupEnabled = data.DedicatedIpAutoWarmupEnabled;
  }
  if (data.EnforcementStatus !== undefined && data.EnforcementStatus !== null) {
    contents.EnforcementStatus = data.EnforcementStatus;
  }
  if (
    data.ProductionAccessEnabled !== undefined &&
    data.ProductionAccessEnabled !== null
  ) {
    contents.ProductionAccessEnabled = data.ProductionAccessEnabled;
  }
  if (data.SendQuota !== undefined && data.SendQuota !== null) {
    contents.SendQuota = deserializeAws_restJson1_1SendQuota(
      data.SendQuota,
      context
    );
  }
  if (data.SendingEnabled !== undefined && data.SendingEnabled !== null) {
    contents.SendingEnabled = data.SendingEnabled;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBlacklistReportsCommandError(
      output,
      context
    );
  }
  const contents: GetBlacklistReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlacklistReportsResponse",
    BlacklistReport: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BlacklistReport !== undefined && data.BlacklistReport !== null) {
    contents.BlacklistReport = deserializeAws_restJson1_1BlacklistReport(
      data.BlacklistReport,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetBlacklistReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigurationSetResponse",
    ConfigurationSetName: undefined,
    DeliveryOptions: undefined,
    ReputationOptions: undefined,
    SendingOptions: undefined,
    Tags: undefined,
    TrackingOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ConfigurationSetName !== undefined &&
    data.ConfigurationSetName !== null
  ) {
    contents.ConfigurationSetName = data.ConfigurationSetName;
  }
  if (data.DeliveryOptions !== undefined && data.DeliveryOptions !== null) {
    contents.DeliveryOptions = deserializeAws_restJson1_1DeliveryOptions(
      data.DeliveryOptions,
      context
    );
  }
  if (data.ReputationOptions !== undefined && data.ReputationOptions !== null) {
    contents.ReputationOptions = deserializeAws_restJson1_1ReputationOptions(
      data.ReputationOptions,
      context
    );
  }
  if (data.SendingOptions !== undefined && data.SendingOptions !== null) {
    contents.SendingOptions = deserializeAws_restJson1_1SendingOptions(
      data.SendingOptions,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
  }
  if (data.TrackingOptions !== undefined && data.TrackingOptions !== null) {
    contents.TrackingOptions = deserializeAws_restJson1_1TrackingOptions(
      data.TrackingOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationSetEventDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigurationSetEventDestinationsResponse",
    EventDestinations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
    contents.EventDestinations = deserializeAws_restJson1_1EventDestinations(
      data.EventDestinations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDedicatedIpCommandError(
      output,
      context
    );
  }
  const contents: GetDedicatedIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDedicatedIpResponse",
    DedicatedIp: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DedicatedIp !== undefined && data.DedicatedIp !== null) {
    contents.DedicatedIp = deserializeAws_restJson1_1DedicatedIp(
      data.DedicatedIp,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDedicatedIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDedicatedIpsCommandError(
      output,
      context
    );
  }
  const contents: GetDedicatedIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDedicatedIpsResponse",
    DedicatedIps: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DedicatedIps !== undefined && data.DedicatedIps !== null) {
    contents.DedicatedIps = deserializeAws_restJson1_1DedicatedIpList(
      data.DedicatedIps,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDedicatedIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommandError(
      output,
      context
    );
  }
  const contents: GetDeliverabilityDashboardOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeliverabilityDashboardOptionsResponse",
    AccountStatus: undefined,
    ActiveSubscribedDomains: undefined,
    DashboardEnabled: undefined,
    PendingExpirationSubscribedDomains: undefined,
    SubscriptionExpiryDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountStatus !== undefined && data.AccountStatus !== null) {
    contents.AccountStatus = data.AccountStatus;
  }
  if (
    data.ActiveSubscribedDomains !== undefined &&
    data.ActiveSubscribedDomains !== null
  ) {
    contents.ActiveSubscribedDomains = deserializeAws_restJson1_1DomainDeliverabilityTrackingOptions(
      data.ActiveSubscribedDomains,
      context
    );
  }
  if (data.DashboardEnabled !== undefined && data.DashboardEnabled !== null) {
    contents.DashboardEnabled = data.DashboardEnabled;
  }
  if (
    data.PendingExpirationSubscribedDomains !== undefined &&
    data.PendingExpirationSubscribedDomains !== null
  ) {
    contents.PendingExpirationSubscribedDomains = deserializeAws_restJson1_1DomainDeliverabilityTrackingOptions(
      data.PendingExpirationSubscribedDomains,
      context
    );
  }
  if (
    data.SubscriptionExpiryDate !== undefined &&
    data.SubscriptionExpiryDate !== null
  ) {
    contents.SubscriptionExpiryDate = new Date(
      Math.round(data.SubscriptionExpiryDate * 1000)
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeliverabilityTestReportCommandError(
      output,
      context
    );
  }
  const contents: GetDeliverabilityTestReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeliverabilityTestReportResponse",
    DeliverabilityTestReport: undefined,
    IspPlacements: undefined,
    Message: undefined,
    OverallPlacement: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeliverabilityTestReport !== undefined &&
    data.DeliverabilityTestReport !== null
  ) {
    contents.DeliverabilityTestReport = deserializeAws_restJson1_1DeliverabilityTestReport(
      data.DeliverabilityTestReport,
      context
    );
  }
  if (data.IspPlacements !== undefined && data.IspPlacements !== null) {
    contents.IspPlacements = deserializeAws_restJson1_1IspPlacements(
      data.IspPlacements,
      context
    );
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.OverallPlacement !== undefined && data.OverallPlacement !== null) {
    contents.OverallPlacement = deserializeAws_restJson1_1PlacementStatistics(
      data.OverallPlacement,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDomainDeliverabilityCampaignCommandError(
      output,
      context
    );
  }
  const contents: GetDomainDeliverabilityCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainDeliverabilityCampaignResponse",
    DomainDeliverabilityCampaign: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DomainDeliverabilityCampaign !== undefined &&
    data.DomainDeliverabilityCampaign !== null
  ) {
    contents.DomainDeliverabilityCampaign = deserializeAws_restJson1_1DomainDeliverabilityCampaign(
      data.DomainDeliverabilityCampaign,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDomainDeliverabilityCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDomainStatisticsReportCommandError(
      output,
      context
    );
  }
  const contents: GetDomainStatisticsReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainStatisticsReportResponse",
    DailyVolumes: undefined,
    OverallVolume: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DailyVolumes !== undefined && data.DailyVolumes !== null) {
    contents.DailyVolumes = deserializeAws_restJson1_1DailyVolumes(
      data.DailyVolumes,
      context
    );
  }
  if (data.OverallVolume !== undefined && data.OverallVolume !== null) {
    contents.OverallVolume = deserializeAws_restJson1_1OverallVolume(
      data.OverallVolume,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDomainStatisticsReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetEmailIdentityCommandError(
      output,
      context
    );
  }
  const contents: GetEmailIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEmailIdentityResponse",
    DkimAttributes: undefined,
    FeedbackForwardingStatus: undefined,
    IdentityType: undefined,
    MailFromAttributes: undefined,
    Tags: undefined,
    VerifiedForSendingStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
    contents.DkimAttributes = deserializeAws_restJson1_1DkimAttributes(
      data.DkimAttributes,
      context
    );
  }
  if (
    data.FeedbackForwardingStatus !== undefined &&
    data.FeedbackForwardingStatus !== null
  ) {
    contents.FeedbackForwardingStatus = data.FeedbackForwardingStatus;
  }
  if (data.IdentityType !== undefined && data.IdentityType !== null) {
    contents.IdentityType = data.IdentityType;
  }
  if (
    data.MailFromAttributes !== undefined &&
    data.MailFromAttributes !== null
  ) {
    contents.MailFromAttributes = deserializeAws_restJson1_1MailFromAttributes(
      data.MailFromAttributes,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
  }
  if (
    data.VerifiedForSendingStatus !== undefined &&
    data.VerifiedForSendingStatus !== null
  ) {
    contents.VerifiedForSendingStatus = data.VerifiedForSendingStatus;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationSetsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationSetsResponse",
    ConfigurationSets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
    contents.ConfigurationSets = deserializeAws_restJson1_1ConfigurationSetNameList(
      data.ConfigurationSets,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDedicatedIpPoolsCommandError(
      output,
      context
    );
  }
  const contents: ListDedicatedIpPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDedicatedIpPoolsResponse",
    DedicatedIpPools: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DedicatedIpPools !== undefined && data.DedicatedIpPools !== null) {
    contents.DedicatedIpPools = deserializeAws_restJson1_1ListOfDedicatedIpPools(
      data.DedicatedIpPools,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDedicatedIpPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDeliverabilityTestReportsCommandError(
      output,
      context
    );
  }
  const contents: ListDeliverabilityTestReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeliverabilityTestReportsResponse",
    DeliverabilityTestReports: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeliverabilityTestReports !== undefined &&
    data.DeliverabilityTestReports !== null
  ) {
    contents.DeliverabilityTestReports = deserializeAws_restJson1_1DeliverabilityTestReports(
      data.DeliverabilityTestReports,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDeliverabilityTestReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommandError(
      output,
      context
    );
  }
  const contents: ListDomainDeliverabilityCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainDeliverabilityCampaignsResponse",
    DomainDeliverabilityCampaigns: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DomainDeliverabilityCampaigns !== undefined &&
    data.DomainDeliverabilityCampaigns !== null
  ) {
    contents.DomainDeliverabilityCampaigns = deserializeAws_restJson1_1DomainDeliverabilityCampaignList(
      data.DomainDeliverabilityCampaigns,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListEmailIdentitiesCommandError(
      output,
      context
    );
  }
  const contents: ListEmailIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEmailIdentitiesResponse",
    EmailIdentities: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EmailIdentities !== undefined && data.EmailIdentities !== null) {
    contents.EmailIdentities = deserializeAws_restJson1_1IdentityInfoList(
      data.EmailIdentities,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListEmailIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
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
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutAccountDedicatedIpWarmupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAccountDedicatedIpWarmupAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutAccountSendingAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutAccountSendingAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAccountSendingAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutAccountSendingAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutConfigurationSetDeliveryOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutConfigurationSetDeliveryOptionsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutConfigurationSetReputationOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutConfigurationSetReputationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutConfigurationSetReputationOptionsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutConfigurationSetReputationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutConfigurationSetSendingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutConfigurationSetSendingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutConfigurationSetSendingOptionsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutConfigurationSetSendingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutConfigurationSetTrackingOptionsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutDedicatedIpInPoolCommandError(
      output,
      context
    );
  }
  const contents: PutDedicatedIpInPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDedicatedIpInPoolResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutDedicatedIpInPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutDedicatedIpWarmupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDedicatedIpWarmupAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutDeliverabilityDashboardOptionCommandError(
      output,
      context
    );
  }
  const contents: PutDeliverabilityDashboardOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDeliverabilityDashboardOptionResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutDeliverabilityDashboardOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutEmailIdentityDkimAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutEmailIdentityDkimAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEmailIdentityDkimAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutEmailIdentityDkimAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutEmailIdentityFeedbackAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEmailIdentityFeedbackAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommandError(
      output,
      context
    );
  }
  const contents: PutEmailIdentityMailFromAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEmailIdentityMailFromAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SendEmailCommandError(output, context);
  }
  const contents: SendEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendEmailResponse",
    MessageId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = data.MessageId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SendEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1_1AccountSuspendedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MessageRejected":
    case "com.amazon.bacon.pinpoint.frontend.svc#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1_1MessageRejectedResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SendingPausedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1_1SendingPausedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1AccountSuspendedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: AccountSuspendedException = {
    name: "AccountSuspendedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const contents: MailFromDomainNotVerifiedException = {
    name: "MailFromDomainNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: MessageRejected = {
    name: "MessageRejected",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SendingPausedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SendingPausedException> => {
  const contents: SendingPausedException = {
    name: "SendingPausedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1Body = (
  input: Body,
  context: __SerdeContext
): any => {
  return {
    ...(input.Html !== undefined && {
      Html: serializeAws_restJson1_1Content(input.Html, context)
    }),
    ...(input.Text !== undefined && {
      Text: serializeAws_restJson1_1Content(input.Text, context)
    })
  };
};

const serializeAws_restJson1_1CloudWatchDestination = (
  input: CloudWatchDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DimensionConfigurations !== undefined && {
      DimensionConfigurations: serializeAws_restJson1_1CloudWatchDimensionConfigurations(
        input.DimensionConfigurations,
        context
      )
    })
  };
};

const serializeAws_restJson1_1CloudWatchDimensionConfiguration = (
  input: CloudWatchDimensionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultDimensionValue !== undefined && {
      DefaultDimensionValue: input.DefaultDimensionValue
    }),
    ...(input.DimensionName !== undefined && {
      DimensionName: input.DimensionName
    }),
    ...(input.DimensionValueSource !== undefined && {
      DimensionValueSource: input.DimensionValueSource
    })
  };
};

const serializeAws_restJson1_1CloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CloudWatchDimensionConfiguration(entry, context)
  );
};

const serializeAws_restJson1_1Content = (
  input: Content,
  context: __SerdeContext
): any => {
  return {
    ...(input.Charset !== undefined && { Charset: input.Charset }),
    ...(input.Data !== undefined && { Data: input.Data })
  };
};

const serializeAws_restJson1_1DeliveryOptions = (
  input: DeliveryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.SendingPoolName !== undefined && {
      SendingPoolName: input.SendingPoolName
    }),
    ...(input.TlsPolicy !== undefined && { TlsPolicy: input.TlsPolicy })
  };
};

const serializeAws_restJson1_1Destination = (
  input: Destination,
  context: __SerdeContext
): any => {
  return {
    ...(input.BccAddresses !== undefined && {
      BccAddresses: serializeAws_restJson1_1EmailAddressList(
        input.BccAddresses,
        context
      )
    }),
    ...(input.CcAddresses !== undefined && {
      CcAddresses: serializeAws_restJson1_1EmailAddressList(
        input.CcAddresses,
        context
      )
    }),
    ...(input.ToAddresses !== undefined && {
      ToAddresses: serializeAws_restJson1_1EmailAddressList(
        input.ToAddresses,
        context
      )
    })
  };
};

const serializeAws_restJson1_1DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain !== undefined && { Domain: input.Domain }),
    ...(input.InboxPlacementTrackingOption !== undefined && {
      InboxPlacementTrackingOption: serializeAws_restJson1_1InboxPlacementTrackingOption(
        input.InboxPlacementTrackingOption,
        context
      )
    }),
    ...(input.SubscriptionStartDate !== undefined && {
      SubscriptionStartDate: Math.round(
        input.SubscriptionStartDate.getTime() / 1000
      )
    })
  };
};

const serializeAws_restJson1_1DomainDeliverabilityTrackingOptions = (
  input: DomainDeliverabilityTrackingOption[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DomainDeliverabilityTrackingOption(entry, context)
  );
};

const serializeAws_restJson1_1EmailAddressList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1EmailContent = (
  input: EmailContent,
  context: __SerdeContext
): any => {
  return {
    ...(input.Raw !== undefined && {
      Raw: serializeAws_restJson1_1RawMessage(input.Raw, context)
    }),
    ...(input.Simple !== undefined && {
      Simple: serializeAws_restJson1_1Message(input.Simple, context)
    }),
    ...(input.Template !== undefined && {
      Template: serializeAws_restJson1_1Template(input.Template, context)
    })
  };
};

const serializeAws_restJson1_1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchDestination !== undefined && {
      CloudWatchDestination: serializeAws_restJson1_1CloudWatchDestination(
        input.CloudWatchDestination,
        context
      )
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination !== undefined && {
      KinesisFirehoseDestination: serializeAws_restJson1_1KinesisFirehoseDestination(
        input.KinesisFirehoseDestination,
        context
      )
    }),
    ...(input.MatchingEventTypes !== undefined && {
      MatchingEventTypes: serializeAws_restJson1_1EventTypes(
        input.MatchingEventTypes,
        context
      )
    }),
    ...(input.PinpointDestination !== undefined && {
      PinpointDestination: serializeAws_restJson1_1PinpointDestination(
        input.PinpointDestination,
        context
      )
    }),
    ...(input.SnsDestination !== undefined && {
      SnsDestination: serializeAws_restJson1_1SnsDestination(
        input.SnsDestination,
        context
      )
    })
  };
};

const serializeAws_restJson1_1EventTypes = (
  input: (EventType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1InboxPlacementTrackingOption = (
  input: InboxPlacementTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Global !== undefined && { Global: input.Global }),
    ...(input.TrackedIsps !== undefined && {
      TrackedIsps: serializeAws_restJson1_1IspNameList(
        input.TrackedIsps,
        context
      )
    })
  };
};

const serializeAws_restJson1_1IspNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamArn !== undefined && {
      DeliveryStreamArn: input.DeliveryStreamArn
    }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn })
  };
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  return {
    ...(input.Body !== undefined && {
      Body: serializeAws_restJson1_1Body(input.Body, context)
    }),
    ...(input.Subject !== undefined && {
      Subject: serializeAws_restJson1_1Content(input.Subject, context)
    })
  };
};

const serializeAws_restJson1_1MessageTag = (
  input: MessageTag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1_1MessageTagList = (
  input: MessageTag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1MessageTag(entry, context));
};

const serializeAws_restJson1_1PinpointDestination = (
  input: PinpointDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationArn !== undefined && {
      ApplicationArn: input.ApplicationArn
    })
  };
};

const serializeAws_restJson1_1RawMessage = (
  input: RawMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Data !== undefined && { Data: context.base64Encoder(input.Data) })
  };
};

const serializeAws_restJson1_1ReputationOptions = (
  input: ReputationOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.LastFreshStart !== undefined && {
      LastFreshStart: Math.round(input.LastFreshStart.getTime() / 1000)
    }),
    ...(input.ReputationMetricsEnabled !== undefined && {
      ReputationMetricsEnabled: input.ReputationMetricsEnabled
    })
  };
};

const serializeAws_restJson1_1SendingOptions = (
  input: SendingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.SendingEnabled !== undefined && {
      SendingEnabled: input.SendingEnabled
    })
  };
};

const serializeAws_restJson1_1SnsDestination = (
  input: SnsDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.TopicArn !== undefined && { TopicArn: input.TopicArn })
  };
};

const serializeAws_restJson1_1Template = (
  input: Template,
  context: __SerdeContext
): any => {
  return {
    ...(input.TemplateArn !== undefined && { TemplateArn: input.TemplateArn }),
    ...(input.TemplateData !== undefined && {
      TemplateData: input.TemplateData
    })
  };
};

const serializeAws_restJson1_1TrackingOptions = (
  input: TrackingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomRedirectDomain !== undefined && {
      CustomRedirectDomain: input.CustomRedirectDomain
    })
  };
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1BlacklistEntries = (
  output: any,
  context: __SerdeContext
): BlacklistEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BlacklistEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BlacklistEntry = (
  output: any,
  context: __SerdeContext
): BlacklistEntry => {
  return {
    __type: "BlacklistEntry",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ListingTime:
      output.ListingTime !== undefined && output.ListingTime !== null
        ? new Date(Math.round(output.ListingTime * 1000))
        : undefined,
    RblName:
      output.RblName !== undefined && output.RblName !== null
        ? output.RblName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BlacklistReport = (
  output: any,
  context: __SerdeContext
): { [key: string]: BlacklistEntry[] } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: BlacklistEntry[] },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_restJson1_1BlacklistEntries(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1_1CloudWatchDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchDestination => {
  return {
    __type: "CloudWatchDestination",
    DimensionConfigurations:
      output.DimensionConfigurations !== undefined &&
      output.DimensionConfigurations !== null
        ? deserializeAws_restJson1_1CloudWatchDimensionConfigurations(
            output.DimensionConfigurations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  return {
    __type: "CloudWatchDimensionConfiguration",
    DefaultDimensionValue:
      output.DefaultDimensionValue !== undefined &&
      output.DefaultDimensionValue !== null
        ? output.DefaultDimensionValue
        : undefined,
    DimensionName:
      output.DimensionName !== undefined && output.DimensionName !== null
        ? output.DimensionName
        : undefined,
    DimensionValueSource:
      output.DimensionValueSource !== undefined &&
      output.DimensionValueSource !== null
        ? output.DimensionValueSource
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CloudWatchDimensionConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1ConfigurationSetNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DailyVolume = (
  output: any,
  context: __SerdeContext
): DailyVolume => {
  return {
    __type: "DailyVolume",
    DomainIspPlacements:
      output.DomainIspPlacements !== undefined &&
      output.DomainIspPlacements !== null
        ? deserializeAws_restJson1_1DomainIspPlacements(
            output.DomainIspPlacements,
            context
          )
        : undefined,
    StartDate:
      output.StartDate !== undefined && output.StartDate !== null
        ? new Date(Math.round(output.StartDate * 1000))
        : undefined,
    VolumeStatistics:
      output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
        ? deserializeAws_restJson1_1VolumeStatistics(
            output.VolumeStatistics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DailyVolumes = (
  output: any,
  context: __SerdeContext
): DailyVolume[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DailyVolume(entry, context)
  );
};

const deserializeAws_restJson1_1DedicatedIp = (
  output: any,
  context: __SerdeContext
): DedicatedIp => {
  return {
    __type: "DedicatedIp",
    Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
    PoolName:
      output.PoolName !== undefined && output.PoolName !== null
        ? output.PoolName
        : undefined,
    WarmupPercentage:
      output.WarmupPercentage !== undefined && output.WarmupPercentage !== null
        ? output.WarmupPercentage
        : undefined,
    WarmupStatus:
      output.WarmupStatus !== undefined && output.WarmupStatus !== null
        ? output.WarmupStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DedicatedIpList = (
  output: any,
  context: __SerdeContext
): DedicatedIp[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DedicatedIp(entry, context)
  );
};

const deserializeAws_restJson1_1DeliverabilityTestReport = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport => {
  return {
    __type: "DeliverabilityTestReport",
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    DeliverabilityTestStatus:
      output.DeliverabilityTestStatus !== undefined &&
      output.DeliverabilityTestStatus !== null
        ? output.DeliverabilityTestStatus
        : undefined,
    FromEmailAddress:
      output.FromEmailAddress !== undefined && output.FromEmailAddress !== null
        ? output.FromEmailAddress
        : undefined,
    ReportId:
      output.ReportId !== undefined && output.ReportId !== null
        ? output.ReportId
        : undefined,
    ReportName:
      output.ReportName !== undefined && output.ReportName !== null
        ? output.ReportName
        : undefined,
    Subject:
      output.Subject !== undefined && output.Subject !== null
        ? output.Subject
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DeliverabilityTestReports = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeliverabilityTestReport(entry, context)
  );
};

const deserializeAws_restJson1_1DeliveryOptions = (
  output: any,
  context: __SerdeContext
): DeliveryOptions => {
  return {
    __type: "DeliveryOptions",
    SendingPoolName:
      output.SendingPoolName !== undefined && output.SendingPoolName !== null
        ? output.SendingPoolName
        : undefined,
    TlsPolicy:
      output.TlsPolicy !== undefined && output.TlsPolicy !== null
        ? output.TlsPolicy
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DkimAttributes = (
  output: any,
  context: __SerdeContext
): DkimAttributes => {
  return {
    __type: "DkimAttributes",
    SigningEnabled:
      output.SigningEnabled !== undefined && output.SigningEnabled !== null
        ? output.SigningEnabled
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Tokens:
      output.Tokens !== undefined && output.Tokens !== null
        ? deserializeAws_restJson1_1DnsTokenList(output.Tokens, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DnsTokenList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DomainDeliverabilityCampaign = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign => {
  return {
    __type: "DomainDeliverabilityCampaign",
    CampaignId:
      output.CampaignId !== undefined && output.CampaignId !== null
        ? output.CampaignId
        : undefined,
    DeleteRate:
      output.DeleteRate !== undefined && output.DeleteRate !== null
        ? output.DeleteRate
        : undefined,
    Esps:
      output.Esps !== undefined && output.Esps !== null
        ? deserializeAws_restJson1_1Esps(output.Esps, context)
        : undefined,
    FirstSeenDateTime:
      output.FirstSeenDateTime !== undefined &&
      output.FirstSeenDateTime !== null
        ? new Date(Math.round(output.FirstSeenDateTime * 1000))
        : undefined,
    FromAddress:
      output.FromAddress !== undefined && output.FromAddress !== null
        ? output.FromAddress
        : undefined,
    ImageUrl:
      output.ImageUrl !== undefined && output.ImageUrl !== null
        ? output.ImageUrl
        : undefined,
    InboxCount:
      output.InboxCount !== undefined && output.InboxCount !== null
        ? output.InboxCount
        : undefined,
    LastSeenDateTime:
      output.LastSeenDateTime !== undefined && output.LastSeenDateTime !== null
        ? new Date(Math.round(output.LastSeenDateTime * 1000))
        : undefined,
    ProjectedVolume:
      output.ProjectedVolume !== undefined && output.ProjectedVolume !== null
        ? output.ProjectedVolume
        : undefined,
    ReadDeleteRate:
      output.ReadDeleteRate !== undefined && output.ReadDeleteRate !== null
        ? output.ReadDeleteRate
        : undefined,
    ReadRate:
      output.ReadRate !== undefined && output.ReadRate !== null
        ? output.ReadRate
        : undefined,
    SendingIps:
      output.SendingIps !== undefined && output.SendingIps !== null
        ? deserializeAws_restJson1_1IpList(output.SendingIps, context)
        : undefined,
    SpamCount:
      output.SpamCount !== undefined && output.SpamCount !== null
        ? output.SpamCount
        : undefined,
    Subject:
      output.Subject !== undefined && output.Subject !== null
        ? output.Subject
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainDeliverabilityCampaignList = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainDeliverabilityCampaign(entry, context)
  );
};

const deserializeAws_restJson1_1DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  return {
    __type: "DomainDeliverabilityTrackingOption",
    Domain:
      output.Domain !== undefined && output.Domain !== null
        ? output.Domain
        : undefined,
    InboxPlacementTrackingOption:
      output.InboxPlacementTrackingOption !== undefined &&
      output.InboxPlacementTrackingOption !== null
        ? deserializeAws_restJson1_1InboxPlacementTrackingOption(
            output.InboxPlacementTrackingOption,
            context
          )
        : undefined,
    SubscriptionStartDate:
      output.SubscriptionStartDate !== undefined &&
      output.SubscriptionStartDate !== null
        ? new Date(Math.round(output.SubscriptionStartDate * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainDeliverabilityTrackingOption(entry, context)
  );
};

const deserializeAws_restJson1_1DomainIspPlacement = (
  output: any,
  context: __SerdeContext
): DomainIspPlacement => {
  return {
    __type: "DomainIspPlacement",
    InboxPercentage:
      output.InboxPercentage !== undefined && output.InboxPercentage !== null
        ? output.InboxPercentage
        : undefined,
    InboxRawCount:
      output.InboxRawCount !== undefined && output.InboxRawCount !== null
        ? output.InboxRawCount
        : undefined,
    IspName:
      output.IspName !== undefined && output.IspName !== null
        ? output.IspName
        : undefined,
    SpamPercentage:
      output.SpamPercentage !== undefined && output.SpamPercentage !== null
        ? output.SpamPercentage
        : undefined,
    SpamRawCount:
      output.SpamRawCount !== undefined && output.SpamRawCount !== null
        ? output.SpamRawCount
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainIspPlacements = (
  output: any,
  context: __SerdeContext
): DomainIspPlacement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainIspPlacement(entry, context)
  );
};

const deserializeAws_restJson1_1Esps = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1EventDestination = (
  output: any,
  context: __SerdeContext
): EventDestination => {
  return {
    __type: "EventDestination",
    CloudWatchDestination:
      output.CloudWatchDestination !== undefined &&
      output.CloudWatchDestination !== null
        ? deserializeAws_restJson1_1CloudWatchDestination(
            output.CloudWatchDestination,
            context
          )
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination !== undefined &&
      output.KinesisFirehoseDestination !== null
        ? deserializeAws_restJson1_1KinesisFirehoseDestination(
            output.KinesisFirehoseDestination,
            context
          )
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes !== undefined &&
      output.MatchingEventTypes !== null
        ? deserializeAws_restJson1_1EventTypes(
            output.MatchingEventTypes,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    PinpointDestination:
      output.PinpointDestination !== undefined &&
      output.PinpointDestination !== null
        ? deserializeAws_restJson1_1PinpointDestination(
            output.PinpointDestination,
            context
          )
        : undefined,
    SnsDestination:
      output.SnsDestination !== undefined && output.SnsDestination !== null
        ? deserializeAws_restJson1_1SnsDestination(
            output.SnsDestination,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EventDestinations = (
  output: any,
  context: __SerdeContext
): EventDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventDestination(entry, context)
  );
};

const deserializeAws_restJson1_1EventTypes = (
  output: any,
  context: __SerdeContext
): (EventType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IdentityInfo = (
  output: any,
  context: __SerdeContext
): IdentityInfo => {
  return {
    __type: "IdentityInfo",
    IdentityName:
      output.IdentityName !== undefined && output.IdentityName !== null
        ? output.IdentityName
        : undefined,
    IdentityType:
      output.IdentityType !== undefined && output.IdentityType !== null
        ? output.IdentityType
        : undefined,
    SendingEnabled:
      output.SendingEnabled !== undefined && output.SendingEnabled !== null
        ? output.SendingEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IdentityInfoList = (
  output: any,
  context: __SerdeContext
): IdentityInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IdentityInfo(entry, context)
  );
};

const deserializeAws_restJson1_1InboxPlacementTrackingOption = (
  output: any,
  context: __SerdeContext
): InboxPlacementTrackingOption => {
  return {
    __type: "InboxPlacementTrackingOption",
    Global:
      output.Global !== undefined && output.Global !== null
        ? output.Global
        : undefined,
    TrackedIsps:
      output.TrackedIsps !== undefined && output.TrackedIsps !== null
        ? deserializeAws_restJson1_1IspNameList(output.TrackedIsps, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IpList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IspNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IspPlacement = (
  output: any,
  context: __SerdeContext
): IspPlacement => {
  return {
    __type: "IspPlacement",
    IspName:
      output.IspName !== undefined && output.IspName !== null
        ? output.IspName
        : undefined,
    PlacementStatistics:
      output.PlacementStatistics !== undefined &&
      output.PlacementStatistics !== null
        ? deserializeAws_restJson1_1PlacementStatistics(
            output.PlacementStatistics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IspPlacements = (
  output: any,
  context: __SerdeContext
): IspPlacement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IspPlacement(entry, context)
  );
};

const deserializeAws_restJson1_1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  return {
    __type: "KinesisFirehoseDestination",
    DeliveryStreamArn:
      output.DeliveryStreamArn !== undefined &&
      output.DeliveryStreamArn !== null
        ? output.DeliveryStreamArn
        : undefined,
    IamRoleArn:
      output.IamRoleArn !== undefined && output.IamRoleArn !== null
        ? output.IamRoleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ListOfDedicatedIpPools = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1MailFromAttributes = (
  output: any,
  context: __SerdeContext
): MailFromAttributes => {
  return {
    __type: "MailFromAttributes",
    BehaviorOnMxFailure:
      output.BehaviorOnMxFailure !== undefined &&
      output.BehaviorOnMxFailure !== null
        ? output.BehaviorOnMxFailure
        : undefined,
    MailFromDomain:
      output.MailFromDomain !== undefined && output.MailFromDomain !== null
        ? output.MailFromDomain
        : undefined,
    MailFromDomainStatus:
      output.MailFromDomainStatus !== undefined &&
      output.MailFromDomainStatus !== null
        ? output.MailFromDomainStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OverallVolume = (
  output: any,
  context: __SerdeContext
): OverallVolume => {
  return {
    __type: "OverallVolume",
    DomainIspPlacements:
      output.DomainIspPlacements !== undefined &&
      output.DomainIspPlacements !== null
        ? deserializeAws_restJson1_1DomainIspPlacements(
            output.DomainIspPlacements,
            context
          )
        : undefined,
    ReadRatePercent:
      output.ReadRatePercent !== undefined && output.ReadRatePercent !== null
        ? output.ReadRatePercent
        : undefined,
    VolumeStatistics:
      output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
        ? deserializeAws_restJson1_1VolumeStatistics(
            output.VolumeStatistics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PinpointDestination = (
  output: any,
  context: __SerdeContext
): PinpointDestination => {
  return {
    __type: "PinpointDestination",
    ApplicationArn:
      output.ApplicationArn !== undefined && output.ApplicationArn !== null
        ? output.ApplicationArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PlacementStatistics = (
  output: any,
  context: __SerdeContext
): PlacementStatistics => {
  return {
    __type: "PlacementStatistics",
    DkimPercentage:
      output.DkimPercentage !== undefined && output.DkimPercentage !== null
        ? output.DkimPercentage
        : undefined,
    InboxPercentage:
      output.InboxPercentage !== undefined && output.InboxPercentage !== null
        ? output.InboxPercentage
        : undefined,
    MissingPercentage:
      output.MissingPercentage !== undefined &&
      output.MissingPercentage !== null
        ? output.MissingPercentage
        : undefined,
    SpamPercentage:
      output.SpamPercentage !== undefined && output.SpamPercentage !== null
        ? output.SpamPercentage
        : undefined,
    SpfPercentage:
      output.SpfPercentage !== undefined && output.SpfPercentage !== null
        ? output.SpfPercentage
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ReputationOptions = (
  output: any,
  context: __SerdeContext
): ReputationOptions => {
  return {
    __type: "ReputationOptions",
    LastFreshStart:
      output.LastFreshStart !== undefined && output.LastFreshStart !== null
        ? new Date(Math.round(output.LastFreshStart * 1000))
        : undefined,
    ReputationMetricsEnabled:
      output.ReputationMetricsEnabled !== undefined &&
      output.ReputationMetricsEnabled !== null
        ? output.ReputationMetricsEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SendQuota = (
  output: any,
  context: __SerdeContext
): SendQuota => {
  return {
    __type: "SendQuota",
    Max24HourSend:
      output.Max24HourSend !== undefined && output.Max24HourSend !== null
        ? output.Max24HourSend
        : undefined,
    MaxSendRate:
      output.MaxSendRate !== undefined && output.MaxSendRate !== null
        ? output.MaxSendRate
        : undefined,
    SentLast24Hours:
      output.SentLast24Hours !== undefined && output.SentLast24Hours !== null
        ? output.SentLast24Hours
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SendingOptions = (
  output: any,
  context: __SerdeContext
): SendingOptions => {
  return {
    __type: "SendingOptions",
    SendingEnabled:
      output.SendingEnabled !== undefined && output.SendingEnabled !== null
        ? output.SendingEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SnsDestination = (
  output: any,
  context: __SerdeContext
): SnsDestination => {
  return {
    __type: "SnsDestination",
    TopicArn:
      output.TopicArn !== undefined && output.TopicArn !== null
        ? output.TopicArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TrackingOptions = (
  output: any,
  context: __SerdeContext
): TrackingOptions => {
  return {
    __type: "TrackingOptions",
    CustomRedirectDomain:
      output.CustomRedirectDomain !== undefined &&
      output.CustomRedirectDomain !== null
        ? output.CustomRedirectDomain
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VolumeStatistics = (
  output: any,
  context: __SerdeContext
): VolumeStatistics => {
  return {
    __type: "VolumeStatistics",
    InboxRawCount:
      output.InboxRawCount !== undefined && output.InboxRawCount !== null
        ? output.InboxRawCount
        : undefined,
    ProjectedInbox:
      output.ProjectedInbox !== undefined && output.ProjectedInbox !== null
        ? output.ProjectedInbox
        : undefined,
    ProjectedSpam:
      output.ProjectedSpam !== undefined && output.ProjectedSpam !== null
        ? output.ProjectedSpam
        : undefined,
    SpamRawCount:
      output.SpamRawCount !== undefined && output.SpamRawCount !== null
        ? output.SpamRawCount
        : undefined
  } as any;
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
