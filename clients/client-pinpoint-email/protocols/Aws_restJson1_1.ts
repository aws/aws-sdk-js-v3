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

export async function serializeAws_restJson1_1CreateConfigurationSetCommand(
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/configuration-sets";
  let body: any;
  const bodyParams: any = {};
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.DeliveryOptions !== undefined) {
    bodyParams["DeliveryOptions"] = serializeAws_restJson1_1DeliveryOptions(
      input.DeliveryOptions,
      context
    );
  }
  if (input.ReputationOptions !== undefined) {
    bodyParams["ReputationOptions"] = serializeAws_restJson1_1ReputationOptions(
      input.ReputationOptions,
      context
    );
  }
  if (input.SendingOptions !== undefined) {
    bodyParams["SendingOptions"] = serializeAws_restJson1_1SendingOptions(
      input.SendingOptions,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
  }
  if (input.TrackingOptions !== undefined) {
    bodyParams["TrackingOptions"] = serializeAws_restJson1_1TrackingOptions(
      input.TrackingOptions,
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

export async function serializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
      context
    );
  }
  if (input.EventDestinationName !== undefined) {
    bodyParams["EventDestinationName"] = input.EventDestinationName;
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

export async function serializeAws_restJson1_1CreateDedicatedIpPoolCommand(
  input: CreateDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/dedicated-ip-pools";
  let body: any;
  const bodyParams: any = {};
  if (input.PoolName !== undefined) {
    bodyParams["PoolName"] = input.PoolName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateDeliverabilityTestReportCommand(
  input: CreateDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/deliverability-dashboard/test";
  let body: any;
  const bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = serializeAws_restJson1_1EmailContent(
      input.Content,
      context
    );
  }
  if (input.FromEmailAddress !== undefined) {
    bodyParams["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.ReportName !== undefined) {
    bodyParams["ReportName"] = input.ReportName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateEmailIdentityCommand(
  input: CreateEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/identities";
  let body: any;
  const bodyParams: any = {};
  if (input.EmailIdentity !== undefined) {
    bodyParams["EmailIdentity"] = input.EmailIdentity;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1DeleteConfigurationSetCommand(
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDedicatedIpPoolCommand(
  input: DeleteDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteEmailIdentityCommand(
  input: DeleteEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetAccountCommand(
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/account";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBlacklistReportsCommand(
  input: GetBlacklistReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/deliverability-dashboard/blacklist-report";
  const query: any = {};
  if (input.BlacklistItemNames !== undefined) {
    query["BlacklistItemNames"] = input.BlacklistItemNames;
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

export async function serializeAws_restJson1_1GetConfigurationSetCommand(
  input: GetConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDedicatedIpCommand(
  input: GetDedicatedIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDedicatedIpsCommand(
  input: GetDedicatedIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/dedicated-ips";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
  }
  if (input.PoolName !== undefined) {
    query["PoolName"] = input.PoolName;
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

export async function serializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommand(
  input: GetDeliverabilityDashboardOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/deliverability-dashboard";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDeliverabilityTestReportCommand(
  input: GetDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDomainDeliverabilityCampaignCommand(
  input: GetDomainDeliverabilityCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDomainStatisticsReportCommand(
  input: GetDomainStatisticsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.EndDate !== undefined) {
    query["EndDate"] = input.EndDate.toISOString().toString();
  }
  if (input.StartDate !== undefined) {
    query["StartDate"] = input.StartDate.toISOString().toString();
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

export async function serializeAws_restJson1_1GetEmailIdentityCommand(
  input: GetEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListConfigurationSetsCommand(
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/configuration-sets";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
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

export async function serializeAws_restJson1_1ListDedicatedIpPoolsCommand(
  input: ListDedicatedIpPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/dedicated-ip-pools";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
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

export async function serializeAws_restJson1_1ListDeliverabilityTestReportsCommand(
  input: ListDeliverabilityTestReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/deliverability-dashboard/test-reports";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
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

export async function serializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand(
  input: ListDomainDeliverabilityCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.EndDate !== undefined) {
    query["EndDate"] = input.EndDate.toISOString().toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
  }
  if (input.StartDate !== undefined) {
    query["StartDate"] = input.StartDate.toISOString().toString();
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

export async function serializeAws_restJson1_1ListEmailIdentitiesCommand(
  input: ListEmailIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/email/identities";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
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
  let resolvedPath = "/v1/email/tags";
  const query: any = {};
  if (input.ResourceArn !== undefined) {
    query["ResourceArn"] = input.ResourceArn;
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

export async function serializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommand(
  input: PutAccountDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/account/dedicated-ips/warmup";
  let body: any;
  const bodyParams: any = {};
  if (input.AutoWarmupEnabled !== undefined) {
    bodyParams["AutoWarmupEnabled"] = input.AutoWarmupEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutAccountSendingAttributesCommand(
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/account/sending";
  let body: any;
  const bodyParams: any = {};
  if (input.SendingEnabled !== undefined) {
    bodyParams["SendingEnabled"] = input.SendingEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommand(
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.SendingPoolName !== undefined) {
    bodyParams["SendingPoolName"] = input.SendingPoolName;
  }
  if (input.TlsPolicy !== undefined) {
    bodyParams["TlsPolicy"] = input.TlsPolicy;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutConfigurationSetReputationOptionsCommand(
  input: PutConfigurationSetReputationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.ReputationMetricsEnabled !== undefined) {
    bodyParams["ReputationMetricsEnabled"] = input.ReputationMetricsEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutConfigurationSetSendingOptionsCommand(
  input: PutConfigurationSetSendingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.SendingEnabled !== undefined) {
    bodyParams["SendingEnabled"] = input.SendingEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommand(
  input: PutConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.CustomRedirectDomain !== undefined) {
    bodyParams["CustomRedirectDomain"] = input.CustomRedirectDomain;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutDedicatedIpInPoolCommand(
  input: PutDedicatedIpInPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.DestinationPoolName !== undefined) {
    bodyParams["DestinationPoolName"] = input.DestinationPoolName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommand(
  input: PutDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.WarmupPercentage !== undefined) {
    bodyParams["WarmupPercentage"] = input.WarmupPercentage;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutDeliverabilityDashboardOptionCommand(
  input: PutDeliverabilityDashboardOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/deliverability-dashboard";
  let body: any;
  const bodyParams: any = {};
  if (input.DashboardEnabled !== undefined) {
    bodyParams["DashboardEnabled"] = input.DashboardEnabled;
  }
  if (input.SubscribedDomains !== undefined) {
    bodyParams[
      "SubscribedDomains"
    ] = serializeAws_restJson1_1DomainDeliverabilityTrackingOptions(
      input.SubscribedDomains,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutEmailIdentityDkimAttributesCommand(
  input: PutEmailIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.SigningEnabled !== undefined) {
    bodyParams["SigningEnabled"] = input.SigningEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand(
  input: PutEmailIdentityFeedbackAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.EmailForwardingEnabled !== undefined) {
    bodyParams["EmailForwardingEnabled"] = input.EmailForwardingEnabled;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommand(
  input: PutEmailIdentityMailFromAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.BehaviorOnMxFailure !== undefined) {
    bodyParams["BehaviorOnMxFailure"] = input.BehaviorOnMxFailure;
  }
  if (input.MailFromDomain !== undefined) {
    bodyParams["MailFromDomain"] = input.MailFromDomain;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SendEmailCommand(
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/outbound-emails";
  let body: any;
  const bodyParams: any = {};
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = serializeAws_restJson1_1EmailContent(
      input.Content,
      context
    );
  }
  if (input.Destination !== undefined) {
    bodyParams["Destination"] = serializeAws_restJson1_1Destination(
      input.Destination,
      context
    );
  }
  if (input.EmailTags !== undefined) {
    bodyParams["EmailTags"] = serializeAws_restJson1_1MessageTagList(
      input.EmailTags,
      context
    );
  }
  if (input.FeedbackForwardingEmailAddress !== undefined) {
    bodyParams["FeedbackForwardingEmailAddress"] =
      input.FeedbackForwardingEmailAddress;
  }
  if (input.FromEmailAddress !== undefined) {
    bodyParams["FromEmailAddress"] = input.FromEmailAddress;
  }
  if (input.ReplyToAddresses !== undefined) {
    bodyParams["ReplyToAddresses"] = serializeAws_restJson1_1EmailAddressList(
      input.ReplyToAddresses,
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/email/tags";
  let body: any;
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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
  let resolvedPath = "/v1/email/tags";
  const query: any = {};
  if (input.ResourceArn !== undefined) {
    query["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    query["TagKeys"] = input.TagKeys;
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

export async function serializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateDedicatedIpPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateDedicatedIpPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateDeliverabilityTestReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateDeliverabilityTestReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1_1AccountSuspendedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MessageRejected":
    case "com.amazon.bacon.pinpoint.frontend.svc#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1_1MessageRejectedResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SendingPausedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1_1SendingPausedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateEmailIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateEmailIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteDedicatedIpPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteDedicatedIpPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteEmailIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteEmailIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetBlacklistReportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetBlacklistReportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDedicatedIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDedicatedIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDedicatedIpsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDedicatedIpsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDeliverabilityDashboardOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDeliverabilityTestReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDeliverabilityTestReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDomainDeliverabilityCampaignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDomainDeliverabilityCampaignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDomainStatisticsReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDomainStatisticsReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetEmailIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetEmailIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListConfigurationSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListConfigurationSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDedicatedIpPoolsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListDedicatedIpPoolsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDeliverabilityTestReportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListDeliverabilityTestReportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListEmailIdentitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListEmailIdentitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
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
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutAccountDedicatedIpWarmupAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutAccountSendingAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutAccountSendingAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutConfigurationSetDeliveryOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutConfigurationSetReputationOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutConfigurationSetReputationOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutConfigurationSetSendingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutConfigurationSetSendingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutConfigurationSetTrackingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutDedicatedIpInPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutDedicatedIpInPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutDedicatedIpWarmupAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutDeliverabilityDashboardOptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutDeliverabilityDashboardOptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutEmailIdentityDkimAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutEmailIdentityDkimAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutEmailIdentityFeedbackAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutEmailIdentityMailFromAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1SendEmailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> {
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
}

async function deserializeAws_restJson1_1SendEmailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#AccountSuspendedException":
      response = {
        ...(await deserializeAws_restJson1_1AccountSuspendedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.bacon.pinpoint.frontend.svc#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailFromDomainNotVerifiedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#MailFromDomainNotVerifiedException":
      response = {
        ...(await deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MessageRejected":
    case "com.amazon.bacon.pinpoint.frontend.svc#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1_1MessageRejectedResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SendingPausedException":
    case "com.amazon.bacon.pinpoint.frontend.svc#SendingPausedException":
      response = {
        ...(await deserializeAws_restJson1_1SendingPausedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazon.bacon.pinpoint.frontend.svc#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.bacon.pinpoint.frontend.svc#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.bacon.pinpoint.frontend.svc#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazon.bacon.pinpoint.frontend.svc#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1AccountSuspendedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: AccountSuspendedException = {
    name: "AccountSuspendedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MailFromDomainNotVerifiedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const contents: MailFromDomainNotVerifiedException = {
    name: "MailFromDomainNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MessageRejectedResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: MessageRejected = {
    name: "MessageRejected",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1SendingPausedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SendingPausedException> => {
  const contents: SendingPausedException = {
    name: "SendingPausedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Body = (
  input: Body,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Html !== undefined) {
    bodyParams["Html"] = serializeAws_restJson1_1Content(input.Html, context);
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = serializeAws_restJson1_1Content(input.Text, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1CloudWatchDestination = (
  input: CloudWatchDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DimensionConfigurations !== undefined) {
    bodyParams[
      "DimensionConfigurations"
    ] = serializeAws_restJson1_1CloudWatchDimensionConfigurations(
      input.DimensionConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CloudWatchDimensionConfiguration = (
  input: CloudWatchDimensionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DefaultDimensionValue !== undefined) {
    bodyParams["DefaultDimensionValue"] = input.DefaultDimensionValue;
  }
  if (input.DimensionName !== undefined) {
    bodyParams["DimensionName"] = input.DimensionName;
  }
  if (input.DimensionValueSource !== undefined) {
    bodyParams["DimensionValueSource"] = input.DimensionValueSource;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CloudWatchDimensionConfigurations = (
  input: Array<CloudWatchDimensionConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1CloudWatchDimensionConfiguration(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1Content = (
  input: Content,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Charset !== undefined) {
    bodyParams["Charset"] = input.Charset;
  }
  if (input.Data !== undefined) {
    bodyParams["Data"] = input.Data;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeliveryOptions = (
  input: DeliveryOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SendingPoolName !== undefined) {
    bodyParams["SendingPoolName"] = input.SendingPoolName;
  }
  if (input.TlsPolicy !== undefined) {
    bodyParams["TlsPolicy"] = input.TlsPolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Destination = (
  input: Destination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BccAddresses !== undefined) {
    bodyParams["BccAddresses"] = serializeAws_restJson1_1EmailAddressList(
      input.BccAddresses,
      context
    );
  }
  if (input.CcAddresses !== undefined) {
    bodyParams["CcAddresses"] = serializeAws_restJson1_1EmailAddressList(
      input.CcAddresses,
      context
    );
  }
  if (input.ToAddresses !== undefined) {
    bodyParams["ToAddresses"] = serializeAws_restJson1_1EmailAddressList(
      input.ToAddresses,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Domain !== undefined) {
    bodyParams["Domain"] = input.Domain;
  }
  if (input.InboxPlacementTrackingOption !== undefined) {
    bodyParams[
      "InboxPlacementTrackingOption"
    ] = serializeAws_restJson1_1InboxPlacementTrackingOption(
      input.InboxPlacementTrackingOption,
      context
    );
  }
  if (input.SubscriptionStartDate !== undefined) {
    bodyParams["SubscriptionStartDate"] = Math.round(
      input.SubscriptionStartDate.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DomainDeliverabilityTrackingOptions = (
  input: Array<DomainDeliverabilityTrackingOption>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1DomainDeliverabilityTrackingOption(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1EmailAddressList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1EmailContent = (
  input: EmailContent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Raw !== undefined) {
    bodyParams["Raw"] = serializeAws_restJson1_1RawMessage(input.Raw, context);
  }
  if (input.Simple !== undefined) {
    bodyParams["Simple"] = serializeAws_restJson1_1Message(
      input.Simple,
      context
    );
  }
  if (input.Template !== undefined) {
    bodyParams["Template"] = serializeAws_restJson1_1Template(
      input.Template,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchDestination !== undefined) {
    bodyParams[
      "CloudWatchDestination"
    ] = serializeAws_restJson1_1CloudWatchDestination(
      input.CloudWatchDestination,
      context
    );
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.KinesisFirehoseDestination !== undefined) {
    bodyParams[
      "KinesisFirehoseDestination"
    ] = serializeAws_restJson1_1KinesisFirehoseDestination(
      input.KinesisFirehoseDestination,
      context
    );
  }
  if (input.MatchingEventTypes !== undefined) {
    bodyParams["MatchingEventTypes"] = serializeAws_restJson1_1EventTypes(
      input.MatchingEventTypes,
      context
    );
  }
  if (input.PinpointDestination !== undefined) {
    bodyParams[
      "PinpointDestination"
    ] = serializeAws_restJson1_1PinpointDestination(
      input.PinpointDestination,
      context
    );
  }
  if (input.SnsDestination !== undefined) {
    bodyParams["SnsDestination"] = serializeAws_restJson1_1SnsDestination(
      input.SnsDestination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventTypes = (
  input: Array<EventType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1InboxPlacementTrackingOption = (
  input: InboxPlacementTrackingOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Global !== undefined) {
    bodyParams["Global"] = input.Global;
  }
  if (input.TrackedIsps !== undefined) {
    bodyParams["TrackedIsps"] = serializeAws_restJson1_1IspNameList(
      input.TrackedIsps,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1IspNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamArn !== undefined) {
    bodyParams["DeliveryStreamArn"] = input.DeliveryStreamArn;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Body !== undefined) {
    bodyParams["Body"] = serializeAws_restJson1_1Body(input.Body, context);
  }
  if (input.Subject !== undefined) {
    bodyParams["Subject"] = serializeAws_restJson1_1Content(
      input.Subject,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MessageTag = (
  input: MessageTag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MessageTagList = (
  input: Array<MessageTag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1MessageTag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1PinpointDestination = (
  input: PinpointDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationArn !== undefined) {
    bodyParams["ApplicationArn"] = input.ApplicationArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RawMessage = (
  input: RawMessage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["Data"] = context.base64Encoder(input.Data);
  }
  return bodyParams;
};

const serializeAws_restJson1_1ReputationOptions = (
  input: ReputationOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LastFreshStart !== undefined) {
    bodyParams["LastFreshStart"] = Math.round(
      input.LastFreshStart.getTime() / 1000
    );
  }
  if (input.ReputationMetricsEnabled !== undefined) {
    bodyParams["ReputationMetricsEnabled"] = input.ReputationMetricsEnabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SendingOptions = (
  input: SendingOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SendingEnabled !== undefined) {
    bodyParams["SendingEnabled"] = input.SendingEnabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SnsDestination = (
  input: SnsDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TopicArn !== undefined) {
    bodyParams["TopicArn"] = input.TopicArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Template = (
  input: Template,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TemplateArn !== undefined) {
    bodyParams["TemplateArn"] = input.TemplateArn;
  }
  if (input.TemplateData !== undefined) {
    bodyParams["TemplateData"] = input.TemplateData;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TrackingOptions = (
  input: TrackingOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomRedirectDomain !== undefined) {
    bodyParams["CustomRedirectDomain"] = input.CustomRedirectDomain;
  }
  return bodyParams;
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
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1BlacklistEntries = (
  output: any,
  context: __SerdeContext
): Array<BlacklistEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BlacklistEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BlacklistEntry = (
  output: any,
  context: __SerdeContext
): BlacklistEntry => {
  let contents: any = {
    __type: "BlacklistEntry",
    Description: undefined,
    ListingTime: undefined,
    RblName: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ListingTime !== undefined && output.ListingTime !== null) {
    contents.ListingTime = new Date(Math.round(output.ListingTime * 1000));
  }
  if (output.RblName !== undefined && output.RblName !== null) {
    contents.RblName = output.RblName;
  }
  return contents;
};

const deserializeAws_restJson1_1BlacklistReport = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<BlacklistEntry> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1BlacklistEntries(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1CloudWatchDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchDestination => {
  let contents: any = {
    __type: "CloudWatchDestination",
    DimensionConfigurations: undefined
  };
  if (
    output.DimensionConfigurations !== undefined &&
    output.DimensionConfigurations !== null
  ) {
    contents.DimensionConfigurations = deserializeAws_restJson1_1CloudWatchDimensionConfigurations(
      output.DimensionConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  let contents: any = {
    __type: "CloudWatchDimensionConfiguration",
    DefaultDimensionValue: undefined,
    DimensionName: undefined,
    DimensionValueSource: undefined
  };
  if (
    output.DefaultDimensionValue !== undefined &&
    output.DefaultDimensionValue !== null
  ) {
    contents.DefaultDimensionValue = output.DefaultDimensionValue;
  }
  if (output.DimensionName !== undefined && output.DimensionName !== null) {
    contents.DimensionName = output.DimensionName;
  }
  if (
    output.DimensionValueSource !== undefined &&
    output.DimensionValueSource !== null
  ) {
    contents.DimensionValueSource = output.DimensionValueSource;
  }
  return contents;
};

const deserializeAws_restJson1_1CloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): Array<CloudWatchDimensionConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CloudWatchDimensionConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1ConfigurationSetNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DailyVolume = (
  output: any,
  context: __SerdeContext
): DailyVolume => {
  let contents: any = {
    __type: "DailyVolume",
    DomainIspPlacements: undefined,
    StartDate: undefined,
    VolumeStatistics: undefined
  };
  if (
    output.DomainIspPlacements !== undefined &&
    output.DomainIspPlacements !== null
  ) {
    contents.DomainIspPlacements = deserializeAws_restJson1_1DomainIspPlacements(
      output.DomainIspPlacements,
      context
    );
  }
  if (output.StartDate !== undefined && output.StartDate !== null) {
    contents.StartDate = new Date(Math.round(output.StartDate * 1000));
  }
  if (
    output.VolumeStatistics !== undefined &&
    output.VolumeStatistics !== null
  ) {
    contents.VolumeStatistics = deserializeAws_restJson1_1VolumeStatistics(
      output.VolumeStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DailyVolumes = (
  output: any,
  context: __SerdeContext
): Array<DailyVolume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DailyVolume(entry, context)
  );
};

const deserializeAws_restJson1_1DedicatedIp = (
  output: any,
  context: __SerdeContext
): DedicatedIp => {
  let contents: any = {
    __type: "DedicatedIp",
    Ip: undefined,
    PoolName: undefined,
    WarmupPercentage: undefined,
    WarmupStatus: undefined
  };
  if (output.Ip !== undefined && output.Ip !== null) {
    contents.Ip = output.Ip;
  }
  if (output.PoolName !== undefined && output.PoolName !== null) {
    contents.PoolName = output.PoolName;
  }
  if (
    output.WarmupPercentage !== undefined &&
    output.WarmupPercentage !== null
  ) {
    contents.WarmupPercentage = output.WarmupPercentage;
  }
  if (output.WarmupStatus !== undefined && output.WarmupStatus !== null) {
    contents.WarmupStatus = output.WarmupStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1DedicatedIpList = (
  output: any,
  context: __SerdeContext
): Array<DedicatedIp> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DedicatedIp(entry, context)
  );
};

const deserializeAws_restJson1_1DeliverabilityTestReport = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport => {
  let contents: any = {
    __type: "DeliverabilityTestReport",
    CreateDate: undefined,
    DeliverabilityTestStatus: undefined,
    FromEmailAddress: undefined,
    ReportId: undefined,
    ReportName: undefined,
    Subject: undefined
  };
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (
    output.DeliverabilityTestStatus !== undefined &&
    output.DeliverabilityTestStatus !== null
  ) {
    contents.DeliverabilityTestStatus = output.DeliverabilityTestStatus;
  }
  if (
    output.FromEmailAddress !== undefined &&
    output.FromEmailAddress !== null
  ) {
    contents.FromEmailAddress = output.FromEmailAddress;
  }
  if (output.ReportId !== undefined && output.ReportId !== null) {
    contents.ReportId = output.ReportId;
  }
  if (output.ReportName !== undefined && output.ReportName !== null) {
    contents.ReportName = output.ReportName;
  }
  if (output.Subject !== undefined && output.Subject !== null) {
    contents.Subject = output.Subject;
  }
  return contents;
};

const deserializeAws_restJson1_1DeliverabilityTestReports = (
  output: any,
  context: __SerdeContext
): Array<DeliverabilityTestReport> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeliverabilityTestReport(entry, context)
  );
};

const deserializeAws_restJson1_1DeliveryOptions = (
  output: any,
  context: __SerdeContext
): DeliveryOptions => {
  let contents: any = {
    __type: "DeliveryOptions",
    SendingPoolName: undefined,
    TlsPolicy: undefined
  };
  if (output.SendingPoolName !== undefined && output.SendingPoolName !== null) {
    contents.SendingPoolName = output.SendingPoolName;
  }
  if (output.TlsPolicy !== undefined && output.TlsPolicy !== null) {
    contents.TlsPolicy = output.TlsPolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1DkimAttributes = (
  output: any,
  context: __SerdeContext
): DkimAttributes => {
  let contents: any = {
    __type: "DkimAttributes",
    SigningEnabled: undefined,
    Status: undefined,
    Tokens: undefined
  };
  if (output.SigningEnabled !== undefined && output.SigningEnabled !== null) {
    contents.SigningEnabled = output.SigningEnabled;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Tokens !== undefined && output.Tokens !== null) {
    contents.Tokens = deserializeAws_restJson1_1DnsTokenList(
      output.Tokens,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DnsTokenList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DomainDeliverabilityCampaign = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign => {
  let contents: any = {
    __type: "DomainDeliverabilityCampaign",
    CampaignId: undefined,
    DeleteRate: undefined,
    Esps: undefined,
    FirstSeenDateTime: undefined,
    FromAddress: undefined,
    ImageUrl: undefined,
    InboxCount: undefined,
    LastSeenDateTime: undefined,
    ProjectedVolume: undefined,
    ReadDeleteRate: undefined,
    ReadRate: undefined,
    SendingIps: undefined,
    SpamCount: undefined,
    Subject: undefined
  };
  if (output.CampaignId !== undefined && output.CampaignId !== null) {
    contents.CampaignId = output.CampaignId;
  }
  if (output.DeleteRate !== undefined && output.DeleteRate !== null) {
    contents.DeleteRate = output.DeleteRate;
  }
  if (output.Esps !== undefined && output.Esps !== null) {
    contents.Esps = deserializeAws_restJson1_1Esps(output.Esps, context);
  }
  if (
    output.FirstSeenDateTime !== undefined &&
    output.FirstSeenDateTime !== null
  ) {
    contents.FirstSeenDateTime = new Date(
      Math.round(output.FirstSeenDateTime * 1000)
    );
  }
  if (output.FromAddress !== undefined && output.FromAddress !== null) {
    contents.FromAddress = output.FromAddress;
  }
  if (output.ImageUrl !== undefined && output.ImageUrl !== null) {
    contents.ImageUrl = output.ImageUrl;
  }
  if (output.InboxCount !== undefined && output.InboxCount !== null) {
    contents.InboxCount = output.InboxCount;
  }
  if (
    output.LastSeenDateTime !== undefined &&
    output.LastSeenDateTime !== null
  ) {
    contents.LastSeenDateTime = new Date(
      Math.round(output.LastSeenDateTime * 1000)
    );
  }
  if (output.ProjectedVolume !== undefined && output.ProjectedVolume !== null) {
    contents.ProjectedVolume = output.ProjectedVolume;
  }
  if (output.ReadDeleteRate !== undefined && output.ReadDeleteRate !== null) {
    contents.ReadDeleteRate = output.ReadDeleteRate;
  }
  if (output.ReadRate !== undefined && output.ReadRate !== null) {
    contents.ReadRate = output.ReadRate;
  }
  if (output.SendingIps !== undefined && output.SendingIps !== null) {
    contents.SendingIps = deserializeAws_restJson1_1IpList(
      output.SendingIps,
      context
    );
  }
  if (output.SpamCount !== undefined && output.SpamCount !== null) {
    contents.SpamCount = output.SpamCount;
  }
  if (output.Subject !== undefined && output.Subject !== null) {
    contents.Subject = output.Subject;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainDeliverabilityCampaignList = (
  output: any,
  context: __SerdeContext
): Array<DomainDeliverabilityCampaign> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainDeliverabilityCampaign(entry, context)
  );
};

const deserializeAws_restJson1_1DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  let contents: any = {
    __type: "DomainDeliverabilityTrackingOption",
    Domain: undefined,
    InboxPlacementTrackingOption: undefined,
    SubscriptionStartDate: undefined
  };
  if (output.Domain !== undefined && output.Domain !== null) {
    contents.Domain = output.Domain;
  }
  if (
    output.InboxPlacementTrackingOption !== undefined &&
    output.InboxPlacementTrackingOption !== null
  ) {
    contents.InboxPlacementTrackingOption = deserializeAws_restJson1_1InboxPlacementTrackingOption(
      output.InboxPlacementTrackingOption,
      context
    );
  }
  if (
    output.SubscriptionStartDate !== undefined &&
    output.SubscriptionStartDate !== null
  ) {
    contents.SubscriptionStartDate = new Date(
      Math.round(output.SubscriptionStartDate * 1000)
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): Array<DomainDeliverabilityTrackingOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainDeliverabilityTrackingOption(entry, context)
  );
};

const deserializeAws_restJson1_1DomainIspPlacement = (
  output: any,
  context: __SerdeContext
): DomainIspPlacement => {
  let contents: any = {
    __type: "DomainIspPlacement",
    InboxPercentage: undefined,
    InboxRawCount: undefined,
    IspName: undefined,
    SpamPercentage: undefined,
    SpamRawCount: undefined
  };
  if (output.InboxPercentage !== undefined && output.InboxPercentage !== null) {
    contents.InboxPercentage = output.InboxPercentage;
  }
  if (output.InboxRawCount !== undefined && output.InboxRawCount !== null) {
    contents.InboxRawCount = output.InboxRawCount;
  }
  if (output.IspName !== undefined && output.IspName !== null) {
    contents.IspName = output.IspName;
  }
  if (output.SpamPercentage !== undefined && output.SpamPercentage !== null) {
    contents.SpamPercentage = output.SpamPercentage;
  }
  if (output.SpamRawCount !== undefined && output.SpamRawCount !== null) {
    contents.SpamRawCount = output.SpamRawCount;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainIspPlacements = (
  output: any,
  context: __SerdeContext
): Array<DomainIspPlacement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainIspPlacement(entry, context)
  );
};

const deserializeAws_restJson1_1Esps = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1EventDestination = (
  output: any,
  context: __SerdeContext
): EventDestination => {
  let contents: any = {
    __type: "EventDestination",
    CloudWatchDestination: undefined,
    Enabled: undefined,
    KinesisFirehoseDestination: undefined,
    MatchingEventTypes: undefined,
    Name: undefined,
    PinpointDestination: undefined,
    SnsDestination: undefined
  };
  if (
    output.CloudWatchDestination !== undefined &&
    output.CloudWatchDestination !== null
  ) {
    contents.CloudWatchDestination = deserializeAws_restJson1_1CloudWatchDestination(
      output.CloudWatchDestination,
      context
    );
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (
    output.KinesisFirehoseDestination !== undefined &&
    output.KinesisFirehoseDestination !== null
  ) {
    contents.KinesisFirehoseDestination = deserializeAws_restJson1_1KinesisFirehoseDestination(
      output.KinesisFirehoseDestination,
      context
    );
  }
  if (
    output.MatchingEventTypes !== undefined &&
    output.MatchingEventTypes !== null
  ) {
    contents.MatchingEventTypes = deserializeAws_restJson1_1EventTypes(
      output.MatchingEventTypes,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.PinpointDestination !== undefined &&
    output.PinpointDestination !== null
  ) {
    contents.PinpointDestination = deserializeAws_restJson1_1PinpointDestination(
      output.PinpointDestination,
      context
    );
  }
  if (output.SnsDestination !== undefined && output.SnsDestination !== null) {
    contents.SnsDestination = deserializeAws_restJson1_1SnsDestination(
      output.SnsDestination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EventDestinations = (
  output: any,
  context: __SerdeContext
): Array<EventDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventDestination(entry, context)
  );
};

const deserializeAws_restJson1_1EventTypes = (
  output: any,
  context: __SerdeContext
): Array<EventType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IdentityInfo = (
  output: any,
  context: __SerdeContext
): IdentityInfo => {
  let contents: any = {
    __type: "IdentityInfo",
    IdentityName: undefined,
    IdentityType: undefined,
    SendingEnabled: undefined
  };
  if (output.IdentityName !== undefined && output.IdentityName !== null) {
    contents.IdentityName = output.IdentityName;
  }
  if (output.IdentityType !== undefined && output.IdentityType !== null) {
    contents.IdentityType = output.IdentityType;
  }
  if (output.SendingEnabled !== undefined && output.SendingEnabled !== null) {
    contents.SendingEnabled = output.SendingEnabled;
  }
  return contents;
};

const deserializeAws_restJson1_1IdentityInfoList = (
  output: any,
  context: __SerdeContext
): Array<IdentityInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IdentityInfo(entry, context)
  );
};

const deserializeAws_restJson1_1InboxPlacementTrackingOption = (
  output: any,
  context: __SerdeContext
): InboxPlacementTrackingOption => {
  let contents: any = {
    __type: "InboxPlacementTrackingOption",
    Global: undefined,
    TrackedIsps: undefined
  };
  if (output.Global !== undefined && output.Global !== null) {
    contents.Global = output.Global;
  }
  if (output.TrackedIsps !== undefined && output.TrackedIsps !== null) {
    contents.TrackedIsps = deserializeAws_restJson1_1IspNameList(
      output.TrackedIsps,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1IpList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IspNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IspPlacement = (
  output: any,
  context: __SerdeContext
): IspPlacement => {
  let contents: any = {
    __type: "IspPlacement",
    IspName: undefined,
    PlacementStatistics: undefined
  };
  if (output.IspName !== undefined && output.IspName !== null) {
    contents.IspName = output.IspName;
  }
  if (
    output.PlacementStatistics !== undefined &&
    output.PlacementStatistics !== null
  ) {
    contents.PlacementStatistics = deserializeAws_restJson1_1PlacementStatistics(
      output.PlacementStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1IspPlacements = (
  output: any,
  context: __SerdeContext
): Array<IspPlacement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IspPlacement(entry, context)
  );
};

const deserializeAws_restJson1_1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  let contents: any = {
    __type: "KinesisFirehoseDestination",
    DeliveryStreamArn: undefined,
    IamRoleArn: undefined
  };
  if (
    output.DeliveryStreamArn !== undefined &&
    output.DeliveryStreamArn !== null
  ) {
    contents.DeliveryStreamArn = output.DeliveryStreamArn;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1ListOfDedicatedIpPools = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1MailFromAttributes = (
  output: any,
  context: __SerdeContext
): MailFromAttributes => {
  let contents: any = {
    __type: "MailFromAttributes",
    BehaviorOnMxFailure: undefined,
    MailFromDomain: undefined,
    MailFromDomainStatus: undefined
  };
  if (
    output.BehaviorOnMxFailure !== undefined &&
    output.BehaviorOnMxFailure !== null
  ) {
    contents.BehaviorOnMxFailure = output.BehaviorOnMxFailure;
  }
  if (output.MailFromDomain !== undefined && output.MailFromDomain !== null) {
    contents.MailFromDomain = output.MailFromDomain;
  }
  if (
    output.MailFromDomainStatus !== undefined &&
    output.MailFromDomainStatus !== null
  ) {
    contents.MailFromDomainStatus = output.MailFromDomainStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1OverallVolume = (
  output: any,
  context: __SerdeContext
): OverallVolume => {
  let contents: any = {
    __type: "OverallVolume",
    DomainIspPlacements: undefined,
    ReadRatePercent: undefined,
    VolumeStatistics: undefined
  };
  if (
    output.DomainIspPlacements !== undefined &&
    output.DomainIspPlacements !== null
  ) {
    contents.DomainIspPlacements = deserializeAws_restJson1_1DomainIspPlacements(
      output.DomainIspPlacements,
      context
    );
  }
  if (output.ReadRatePercent !== undefined && output.ReadRatePercent !== null) {
    contents.ReadRatePercent = output.ReadRatePercent;
  }
  if (
    output.VolumeStatistics !== undefined &&
    output.VolumeStatistics !== null
  ) {
    contents.VolumeStatistics = deserializeAws_restJson1_1VolumeStatistics(
      output.VolumeStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PinpointDestination = (
  output: any,
  context: __SerdeContext
): PinpointDestination => {
  let contents: any = {
    __type: "PinpointDestination",
    ApplicationArn: undefined
  };
  if (output.ApplicationArn !== undefined && output.ApplicationArn !== null) {
    contents.ApplicationArn = output.ApplicationArn;
  }
  return contents;
};

const deserializeAws_restJson1_1PlacementStatistics = (
  output: any,
  context: __SerdeContext
): PlacementStatistics => {
  let contents: any = {
    __type: "PlacementStatistics",
    DkimPercentage: undefined,
    InboxPercentage: undefined,
    MissingPercentage: undefined,
    SpamPercentage: undefined,
    SpfPercentage: undefined
  };
  if (output.DkimPercentage !== undefined && output.DkimPercentage !== null) {
    contents.DkimPercentage = output.DkimPercentage;
  }
  if (output.InboxPercentage !== undefined && output.InboxPercentage !== null) {
    contents.InboxPercentage = output.InboxPercentage;
  }
  if (
    output.MissingPercentage !== undefined &&
    output.MissingPercentage !== null
  ) {
    contents.MissingPercentage = output.MissingPercentage;
  }
  if (output.SpamPercentage !== undefined && output.SpamPercentage !== null) {
    contents.SpamPercentage = output.SpamPercentage;
  }
  if (output.SpfPercentage !== undefined && output.SpfPercentage !== null) {
    contents.SpfPercentage = output.SpfPercentage;
  }
  return contents;
};

const deserializeAws_restJson1_1ReputationOptions = (
  output: any,
  context: __SerdeContext
): ReputationOptions => {
  let contents: any = {
    __type: "ReputationOptions",
    LastFreshStart: undefined,
    ReputationMetricsEnabled: undefined
  };
  if (output.LastFreshStart !== undefined && output.LastFreshStart !== null) {
    contents.LastFreshStart = new Date(
      Math.round(output.LastFreshStart * 1000)
    );
  }
  if (
    output.ReputationMetricsEnabled !== undefined &&
    output.ReputationMetricsEnabled !== null
  ) {
    contents.ReputationMetricsEnabled = output.ReputationMetricsEnabled;
  }
  return contents;
};

const deserializeAws_restJson1_1SendQuota = (
  output: any,
  context: __SerdeContext
): SendQuota => {
  let contents: any = {
    __type: "SendQuota",
    Max24HourSend: undefined,
    MaxSendRate: undefined,
    SentLast24Hours: undefined
  };
  if (output.Max24HourSend !== undefined && output.Max24HourSend !== null) {
    contents.Max24HourSend = output.Max24HourSend;
  }
  if (output.MaxSendRate !== undefined && output.MaxSendRate !== null) {
    contents.MaxSendRate = output.MaxSendRate;
  }
  if (output.SentLast24Hours !== undefined && output.SentLast24Hours !== null) {
    contents.SentLast24Hours = output.SentLast24Hours;
  }
  return contents;
};

const deserializeAws_restJson1_1SendingOptions = (
  output: any,
  context: __SerdeContext
): SendingOptions => {
  let contents: any = {
    __type: "SendingOptions",
    SendingEnabled: undefined
  };
  if (output.SendingEnabled !== undefined && output.SendingEnabled !== null) {
    contents.SendingEnabled = output.SendingEnabled;
  }
  return contents;
};

const deserializeAws_restJson1_1SnsDestination = (
  output: any,
  context: __SerdeContext
): SnsDestination => {
  let contents: any = {
    __type: "SnsDestination",
    TopicArn: undefined
  };
  if (output.TopicArn !== undefined && output.TopicArn !== null) {
    contents.TopicArn = output.TopicArn;
  }
  return contents;
};

const deserializeAws_restJson1_1TrackingOptions = (
  output: any,
  context: __SerdeContext
): TrackingOptions => {
  let contents: any = {
    __type: "TrackingOptions",
    CustomRedirectDomain: undefined
  };
  if (
    output.CustomRedirectDomain !== undefined &&
    output.CustomRedirectDomain !== null
  ) {
    contents.CustomRedirectDomain = output.CustomRedirectDomain;
  }
  return contents;
};

const deserializeAws_restJson1_1VolumeStatistics = (
  output: any,
  context: __SerdeContext
): VolumeStatistics => {
  let contents: any = {
    __type: "VolumeStatistics",
    InboxRawCount: undefined,
    ProjectedInbox: undefined,
    ProjectedSpam: undefined,
    SpamRawCount: undefined
  };
  if (output.InboxRawCount !== undefined && output.InboxRawCount !== null) {
    contents.InboxRawCount = output.InboxRawCount;
  }
  if (output.ProjectedInbox !== undefined && output.ProjectedInbox !== null) {
    contents.ProjectedInbox = output.ProjectedInbox;
  }
  if (output.ProjectedSpam !== undefined && output.ProjectedSpam !== null) {
    contents.ProjectedSpam = output.ProjectedSpam;
  }
  if (output.SpamRawCount !== undefined && output.SpamRawCount !== null) {
    contents.SpamRawCount = output.SpamRawCount;
  }
  return contents;
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
