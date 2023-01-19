// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchGetMetricDataCommandInput, BatchGetMetricDataCommandOutput } from "../commands/BatchGetMetricDataCommand";
import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "../commands/CreateContactCommand";
import { CreateContactListCommandInput, CreateContactListCommandOutput } from "../commands/CreateContactListCommand";
import {
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "../commands/CreateCustomVerificationEmailTemplateCommand";
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
  CreateEmailIdentityPolicyCommandInput,
  CreateEmailIdentityPolicyCommandOutput,
} from "../commands/CreateEmailIdentityPolicyCommand";
import {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "../commands/CreateEmailTemplateCommand";
import { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "../commands/CreateImportJobCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "../commands/DeleteContactCommand";
import { DeleteContactListCommandInput, DeleteContactListCommandOutput } from "../commands/DeleteContactListCommand";
import {
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "../commands/DeleteCustomVerificationEmailTemplateCommand";
import {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "../commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "../commands/DeleteEmailIdentityCommand";
import {
  DeleteEmailIdentityPolicyCommandInput,
  DeleteEmailIdentityPolicyCommandOutput,
} from "../commands/DeleteEmailIdentityPolicyCommand";
import {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "../commands/DeleteEmailTemplateCommand";
import {
  DeleteSuppressedDestinationCommandInput,
  DeleteSuppressedDestinationCommandOutput,
} from "../commands/DeleteSuppressedDestinationCommand";
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
import { GetContactCommandInput, GetContactCommandOutput } from "../commands/GetContactCommand";
import { GetContactListCommandInput, GetContactListCommandOutput } from "../commands/GetContactListCommand";
import {
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "../commands/GetCustomVerificationEmailTemplateCommand";
import { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "../commands/GetDedicatedIpCommand";
import { GetDedicatedIpPoolCommandInput, GetDedicatedIpPoolCommandOutput } from "../commands/GetDedicatedIpPoolCommand";
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
  GetEmailIdentityPoliciesCommandInput,
  GetEmailIdentityPoliciesCommandOutput,
} from "../commands/GetEmailIdentityPoliciesCommand";
import { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "../commands/GetEmailTemplateCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import {
  GetSuppressedDestinationCommandInput,
  GetSuppressedDestinationCommandOutput,
} from "../commands/GetSuppressedDestinationCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { ListContactListsCommandInput, ListContactListsCommandOutput } from "../commands/ListContactListsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import {
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
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
import { ListEmailTemplatesCommandInput, ListEmailTemplatesCommandOutput } from "../commands/ListEmailTemplatesCommand";
import { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "../commands/ListImportJobsCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import {
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "../commands/ListSuppressedDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "../commands/PutAccountDedicatedIpWarmupAttributesCommand";
import { PutAccountDetailsCommandInput, PutAccountDetailsCommandOutput } from "../commands/PutAccountDetailsCommand";
import {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "../commands/PutAccountSendingAttributesCommand";
import {
  PutAccountSuppressionAttributesCommandInput,
  PutAccountSuppressionAttributesCommandOutput,
} from "../commands/PutAccountSuppressionAttributesCommand";
import {
  PutAccountVdmAttributesCommandInput,
  PutAccountVdmAttributesCommandOutput,
} from "../commands/PutAccountVdmAttributesCommand";
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
  PutConfigurationSetSuppressionOptionsCommandInput,
  PutConfigurationSetSuppressionOptionsCommandOutput,
} from "../commands/PutConfigurationSetSuppressionOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutConfigurationSetVdmOptionsCommandInput,
  PutConfigurationSetVdmOptionsCommandOutput,
} from "../commands/PutConfigurationSetVdmOptionsCommand";
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
  PutEmailIdentityConfigurationSetAttributesCommandInput,
  PutEmailIdentityConfigurationSetAttributesCommandOutput,
} from "../commands/PutEmailIdentityConfigurationSetAttributesCommand";
import {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "../commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityDkimSigningAttributesCommandInput,
  PutEmailIdentityDkimSigningAttributesCommandOutput,
} from "../commands/PutEmailIdentityDkimSigningAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "../commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "../commands/PutEmailIdentityMailFromAttributesCommand";
import {
  PutSuppressedDestinationCommandInput,
  PutSuppressedDestinationCommandOutput,
} from "../commands/PutSuppressedDestinationCommand";
import { SendBulkEmailCommandInput, SendBulkEmailCommandOutput } from "../commands/SendBulkEmailCommand";
import {
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "../commands/SendCustomVerificationEmailCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "../commands/SendEmailCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestRenderEmailTemplateCommandInput,
  TestRenderEmailTemplateCommandOutput,
} from "../commands/TestRenderEmailTemplateCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import { UpdateContactListCommandInput, UpdateContactListCommandOutput } from "../commands/UpdateContactListCommand";
import {
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "../commands/UpdateCustomVerificationEmailTemplateCommand";
import {
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
} from "../commands/UpdateEmailIdentityPolicyCommand";
import {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "../commands/UpdateEmailTemplateCommand";
import {
  AccountDetails,
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  BatchGetMetricDataQuery,
  BlacklistEntry,
  Body,
  BulkEmailContent,
  BulkEmailEntry,
  BulkEmailEntryResult,
  CloudWatchDestination,
  CloudWatchDimensionConfiguration,
  ConcurrentModificationException,
  ConflictException,
  Contact,
  ContactList,
  ContactListDestination,
  Content,
  CustomVerificationEmailTemplateMetadata,
  DailyVolume,
  DashboardAttributes,
  DashboardOptions,
  DedicatedIp,
  DedicatedIpPool,
  DeliverabilityTestReport,
  DeliveryOptions,
  Destination,
  DkimAttributes,
  DkimSigningAttributes,
  DomainDeliverabilityCampaign,
  DomainDeliverabilityTrackingOption,
  DomainIspPlacement,
  EmailContent,
  EmailTemplateContent,
  EmailTemplateMetadata,
  EventDestination,
  EventDestinationDefinition,
  EventType,
  FailureInfo,
  GuardianAttributes,
  GuardianOptions,
  IdentityInfo,
  ImportDataSource,
  ImportDestination,
  ImportJobSummary,
  InboxPlacementTrackingOption,
  InternalServiceErrorException,
  InvalidNextTokenException,
  IspPlacement,
  KinesisFirehoseDestination,
  LimitExceededException,
  ListContactsFilter,
  ListManagementOptions,
  ListRecommendationsFilterKey,
  MailFromAttributes,
  MailFromDomainNotVerifiedException,
  Message,
  MessageRejected,
  MessageTag,
  MetricDataError,
  MetricDataResult,
  MetricDimensionName,
  NotFoundException,
  OverallVolume,
  PinpointDestination,
  PlacementStatistics,
  RawMessage,
  Recommendation,
  ReplacementEmailContent,
  ReplacementTemplate,
  ReputationOptions,
  ReviewDetails,
  SendingOptions,
  SendingPausedException,
  SendQuota,
  SnsDestination,
  SuppressedDestination,
  SuppressedDestinationAttributes,
  SuppressedDestinationSummary,
  SuppressionAttributes,
  SuppressionListDestination,
  SuppressionListReason,
  SuppressionOptions,
  Tag,
  Template,
  TooManyRequestsException,
  Topic,
  TopicFilter,
  TopicPreference,
  TrackingOptions,
  VdmAttributes,
  VdmOptions,
  VolumeStatistics,
} from "../models/models_0";
import { SESv2ServiceException as __BaseException } from "../models/SESv2ServiceException";

export const serializeAws_restJson1BatchGetMetricDataCommand = async (
  input: BatchGetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/metrics/batch";
  let body: any;
  body = JSON.stringify({
    ...(input.Queries != null && { Queries: serializeAws_restJson1BatchGetMetricDataQueries(input.Queries, context) }),
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

export const serializeAws_restJson1CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/configuration-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.DeliveryOptions != null && {
      DeliveryOptions: serializeAws_restJson1DeliveryOptions(input.DeliveryOptions, context),
    }),
    ...(input.ReputationOptions != null && {
      ReputationOptions: serializeAws_restJson1ReputationOptions(input.ReputationOptions, context),
    }),
    ...(input.SendingOptions != null && {
      SendingOptions: serializeAws_restJson1SendingOptions(input.SendingOptions, context),
    }),
    ...(input.SuppressionOptions != null && {
      SuppressionOptions: serializeAws_restJson1SuppressionOptions(input.SuppressionOptions, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TrackingOptions != null && {
      TrackingOptions: serializeAws_restJson1TrackingOptions(input.TrackingOptions, context),
    }),
    ...(input.VdmOptions != null && { VdmOptions: serializeAws_restJson1VdmOptions(input.VdmOptions, context) }),
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination != null && {
      EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
    }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
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

export const serializeAws_restJson1CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/contact-lists/{ContactListName}/contacts";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AttributesData != null && { AttributesData: input.AttributesData }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.TopicPreferences != null && {
      TopicPreferences: serializeAws_restJson1TopicPreferenceList(input.TopicPreferences, context),
    }),
    ...(input.UnsubscribeAll != null && { UnsubscribeAll: input.UnsubscribeAll }),
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

export const serializeAws_restJson1CreateContactListCommand = async (
  input: CreateContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/contact-lists";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactListName != null && { ContactListName: input.ContactListName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Topics != null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
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

export const serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = async (
  input: CreateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/custom-verification-email-templates";
  let body: any;
  body = JSON.stringify({
    ...(input.FailureRedirectionURL != null && { FailureRedirectionURL: input.FailureRedirectionURL }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.SuccessRedirectionURL != null && { SuccessRedirectionURL: input.SuccessRedirectionURL }),
    ...(input.TemplateContent != null && { TemplateContent: input.TemplateContent }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateSubject != null && { TemplateSubject: input.TemplateSubject }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ip-pools";
  let body: any;
  body = JSON.stringify({
    ...(input.PoolName != null && { PoolName: input.PoolName }),
    ...(input.ScalingMode != null && { ScalingMode: input.ScalingMode }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/deliverability-dashboard/test";
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.ReportName != null && { ReportName: input.ReportName }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/identities";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.DkimSigningAttributes != null && {
      DkimSigningAttributes: serializeAws_restJson1DkimSigningAttributes(input.DkimSigningAttributes, context),
    }),
    ...(input.EmailIdentity != null && { EmailIdentity: input.EmailIdentity }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateEmailIdentityPolicyCommand = async (
  input: CreateEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyName", () => input.PolicyName!, "{PolicyName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: input.Policy }),
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

export const serializeAws_restJson1CreateEmailTemplateCommand = async (
  input: CreateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates";
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateContent != null && {
      TemplateContent: serializeAws_restJson1EmailTemplateContent(input.TemplateContent, context),
    }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
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

export const serializeAws_restJson1CreateImportJobCommand = async (
  input: CreateImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/import-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.ImportDataSource != null && {
      ImportDataSource: serializeAws_restJson1ImportDataSource(input.ImportDataSource, context),
    }),
    ...(input.ImportDestination != null && {
      ImportDestination: serializeAws_restJson1ImportDestination(input.ImportDestination, context),
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

export const serializeAws_restJson1DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/configuration-sets/{ConfigurationSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventDestinationName",
    () => input.EventDestinationName!,
    "{EventDestinationName}",
    false
  );
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

export const serializeAws_restJson1DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailAddress",
    () => input.EmailAddress!,
    "{EmailAddress}",
    false
  );
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

export const serializeAws_restJson1DeleteContactListCommand = async (
  input: DeleteContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/contact-lists/{ContactListName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
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

export const serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = async (
  input: DeleteCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/custom-verification-email-templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ip-pools/{PoolName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PoolName", () => input.PoolName!, "{PoolName}", false);
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/identities/{EmailIdentity}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
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

export const serializeAws_restJson1DeleteEmailIdentityPolicyCommand = async (
  input: DeleteEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyName", () => input.PolicyName!, "{PolicyName}", false);
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

export const serializeAws_restJson1DeleteEmailTemplateCommand = async (
  input: DeleteEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
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

export const serializeAws_restJson1DeleteSuppressedDestinationCommand = async (
  input: DeleteSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/suppression/addresses/{EmailAddress}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailAddress",
    () => input.EmailAddress!,
    "{EmailAddress}",
    false
  );
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account";
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/deliverability-dashboard/blacklist-report";
  const query: any = map({
    BlacklistItemNames: [
      __expectNonNull(input.BlacklistItemNames, `BlacklistItemNames`) != null,
      () => (input.BlacklistItemNames! || []).map((_entry) => _entry as any),
    ],
  });
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
    "/v2/email/configuration-sets/{ConfigurationSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
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

export const serializeAws_restJson1GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailAddress",
    () => input.EmailAddress!,
    "{EmailAddress}",
    false
  );
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

export const serializeAws_restJson1GetContactListCommand = async (
  input: GetContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/contact-lists/{ContactListName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
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

export const serializeAws_restJson1GetCustomVerificationEmailTemplateCommand = async (
  input: GetCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/custom-verification-email-templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ips/{Ip}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Ip", () => input.Ip!, "{Ip}", false);
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

export const serializeAws_restJson1GetDedicatedIpPoolCommand = async (
  input: GetDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ip-pools/{PoolName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PoolName", () => input.PoolName!, "{PoolName}", false);
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ips";
  const query: any = map({
    PoolName: [, input.PoolName!],
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/deliverability-dashboard";
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
    "/v2/email/deliverability-dashboard/test-reports/{ReportId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ReportId", () => input.ReportId!, "{ReportId}", false);
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
    "/v2/email/deliverability-dashboard/campaigns/{CampaignId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
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
    "/v2/email/deliverability-dashboard/statistics-report/{Domain}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Domain", () => input.Domain!, "{Domain}", false);
  const query: any = map({
    StartDate: [
      __expectNonNull(input.StartDate, `StartDate`) != null,
      () => (input.StartDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    EndDate: [
      __expectNonNull(input.EndDate, `EndDate`) != null,
      () => (input.EndDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/identities/{EmailIdentity}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
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

export const serializeAws_restJson1GetEmailIdentityPoliciesCommand = async (
  input: GetEmailIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/identities/{EmailIdentity}/policies";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
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

export const serializeAws_restJson1GetEmailTemplateCommand = async (
  input: GetEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
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

export const serializeAws_restJson1GetImportJobCommand = async (
  input: GetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/import-jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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

export const serializeAws_restJson1GetSuppressedDestinationCommand = async (
  input: GetSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/suppression/addresses/{EmailAddress}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailAddress",
    () => input.EmailAddress!,
    "{EmailAddress}",
    false
  );
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/configuration-sets";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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

export const serializeAws_restJson1ListContactListsCommand = async (
  input: ListContactListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/contact-lists";
  const query: any = map({
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
    NextToken: [, input.NextToken!],
  });
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

export const serializeAws_restJson1ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/contact-lists/{ContactListName}/contacts";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  const query: any = map({
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Filter != null && { Filter: serializeAws_restJson1ListContactsFilter(input.Filter, context) }),
  });
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

export const serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = async (
  input: ListCustomVerificationEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/custom-verification-email-templates";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ip-pools";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/deliverability-dashboard/test-reports";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
    "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscribedDomain",
    () => input.SubscribedDomain!,
    "{SubscribedDomain}",
    false
  );
  const query: any = map({
    StartDate: [
      __expectNonNull(input.StartDate, `StartDate`) != null,
      () => (input.StartDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    EndDate: [
      __expectNonNull(input.EndDate, `EndDate`) != null,
      () => (input.EndDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/identities";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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

export const serializeAws_restJson1ListEmailTemplatesCommand = async (
  input: ListEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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

export const serializeAws_restJson1ListImportJobsCommand = async (
  input: ListImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/import-jobs";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ImportDestinationType != null && { ImportDestinationType: input.ImportDestinationType }),
  });
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

export const serializeAws_restJson1ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/vdm/recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.Filter != null && { Filter: serializeAws_restJson1ListRecommendationsFilter(input.Filter, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
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

export const serializeAws_restJson1ListSuppressedDestinationsCommand = async (
  input: ListSuppressedDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/suppression/addresses";
  const query: any = map({
    Reason: [() => input.Reasons !== void 0, () => (input.Reasons! || []).map((_entry) => _entry as any)],
    StartDate: [
      () => input.StartDate !== void 0,
      () => (input.StartDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    EndDate: [() => input.EndDate !== void 0, () => (input.EndDate!.toISOString().split(".")[0] + "Z").toString()],
    NextToken: [, input.NextToken!],
    PageSize: [() => input.PageSize !== void 0, () => input.PageSize!.toString()],
  });
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/tags";
  const query: any = map({
    ResourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
  });
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account/dedicated-ips/warmup";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoWarmupEnabled != null && { AutoWarmupEnabled: input.AutoWarmupEnabled }),
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

export const serializeAws_restJson1PutAccountDetailsCommand = async (
  input: PutAccountDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account/details";
  let body: any;
  body = JSON.stringify({
    ...(input.AdditionalContactEmailAddresses != null && {
      AdditionalContactEmailAddresses: serializeAws_restJson1AdditionalContactEmailAddresses(
        input.AdditionalContactEmailAddresses,
        context
      ),
    }),
    ...(input.ContactLanguage != null && { ContactLanguage: input.ContactLanguage }),
    ...(input.MailType != null && { MailType: input.MailType }),
    ...(input.ProductionAccessEnabled != null && { ProductionAccessEnabled: input.ProductionAccessEnabled }),
    ...(input.UseCaseDescription != null && { UseCaseDescription: input.UseCaseDescription }),
    ...(input.WebsiteURL != null && { WebsiteURL: input.WebsiteURL }),
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

export const serializeAws_restJson1PutAccountSendingAttributesCommand = async (
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account/sending";
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled != null && { SendingEnabled: input.SendingEnabled }),
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

export const serializeAws_restJson1PutAccountSuppressionAttributesCommand = async (
  input: PutAccountSuppressionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account/suppression";
  let body: any;
  body = JSON.stringify({
    ...(input.SuppressedReasons != null && {
      SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
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

export const serializeAws_restJson1PutAccountVdmAttributesCommand = async (
  input: PutAccountVdmAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/account/vdm";
  let body: any;
  body = JSON.stringify({
    ...(input.VdmAttributes != null && {
      VdmAttributes: serializeAws_restJson1VdmAttributes(input.VdmAttributes, context),
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SendingPoolName != null && { SendingPoolName: input.SendingPoolName }),
    ...(input.TlsPolicy != null && { TlsPolicy: input.TlsPolicy }),
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ReputationMetricsEnabled != null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/sending";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SendingEnabled != null && { SendingEnabled: input.SendingEnabled }),
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

export const serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = async (
  input: PutConfigurationSetSuppressionOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SuppressedReasons != null && {
      SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.CustomRedirectDomain != null && { CustomRedirectDomain: input.CustomRedirectDomain }),
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

export const serializeAws_restJson1PutConfigurationSetVdmOptionsCommand = async (
  input: PutConfigurationSetVdmOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.VdmOptions != null && { VdmOptions: serializeAws_restJson1VdmOptions(input.VdmOptions, context) }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ips/{Ip}/pool";
  resolvedPath = __resolvedPath(resolvedPath, input, "Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationPoolName != null && { DestinationPoolName: input.DestinationPoolName }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/dedicated-ips/{Ip}/warmup";
  resolvedPath = __resolvedPath(resolvedPath, input, "Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.WarmupPercentage != null && { WarmupPercentage: input.WarmupPercentage }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/deliverability-dashboard";
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardEnabled != null && { DashboardEnabled: input.DashboardEnabled }),
    ...(input.SubscribedDomains != null && {
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

export const serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = async (
  input: PutEmailIdentityConfigurationSetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/identities/{EmailIdentity}/configuration-set";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/identities/{EmailIdentity}/dkim";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SigningEnabled != null && { SigningEnabled: input.SigningEnabled }),
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

export const serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = async (
  input: PutEmailIdentityDkimSigningAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/email/identities/{EmailIdentity}/dkim/signing";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SigningAttributes != null && {
      SigningAttributes: serializeAws_restJson1DkimSigningAttributes(input.SigningAttributes, context),
    }),
    ...(input.SigningAttributesOrigin != null && { SigningAttributesOrigin: input.SigningAttributesOrigin }),
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
    "/v2/email/identities/{EmailIdentity}/feedback";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EmailForwardingEnabled != null && { EmailForwardingEnabled: input.EmailForwardingEnabled }),
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
    "/v2/email/identities/{EmailIdentity}/mail-from";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.BehaviorOnMxFailure != null && { BehaviorOnMxFailure: input.BehaviorOnMxFailure }),
    ...(input.MailFromDomain != null && { MailFromDomain: input.MailFromDomain }),
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

export const serializeAws_restJson1PutSuppressedDestinationCommand = async (
  input: PutSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/suppression/addresses";
  let body: any;
  body = JSON.stringify({
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.Reason != null && { Reason: input.Reason }),
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

export const serializeAws_restJson1SendBulkEmailCommand = async (
  input: SendBulkEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/outbound-bulk-emails";
  let body: any;
  body = JSON.stringify({
    ...(input.BulkEmailEntries != null && {
      BulkEmailEntries: serializeAws_restJson1BulkEmailEntryList(input.BulkEmailEntries, context),
    }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.DefaultContent != null && {
      DefaultContent: serializeAws_restJson1BulkEmailContent(input.DefaultContent, context),
    }),
    ...(input.DefaultEmailTags != null && {
      DefaultEmailTags: serializeAws_restJson1MessageTagList(input.DefaultEmailTags, context),
    }),
    ...(input.FeedbackForwardingEmailAddress != null && {
      FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress,
    }),
    ...(input.FeedbackForwardingEmailAddressIdentityArn != null && {
      FeedbackForwardingEmailAddressIdentityArn: input.FeedbackForwardingEmailAddressIdentityArn,
    }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.FromEmailAddressIdentityArn != null && {
      FromEmailAddressIdentityArn: input.FromEmailAddressIdentityArn,
    }),
    ...(input.ReplyToAddresses != null && {
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

export const serializeAws_restJson1SendCustomVerificationEmailCommand = async (
  input: SendCustomVerificationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/outbound-custom-verification-emails";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
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

export const serializeAws_restJson1SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/outbound-emails";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Content != null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
    ...(input.Destination != null && { Destination: serializeAws_restJson1Destination(input.Destination, context) }),
    ...(input.EmailTags != null && { EmailTags: serializeAws_restJson1MessageTagList(input.EmailTags, context) }),
    ...(input.FeedbackForwardingEmailAddress != null && {
      FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress,
    }),
    ...(input.FeedbackForwardingEmailAddressIdentityArn != null && {
      FeedbackForwardingEmailAddressIdentityArn: input.FeedbackForwardingEmailAddressIdentityArn,
    }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.FromEmailAddressIdentityArn != null && {
      FromEmailAddressIdentityArn: input.FromEmailAddressIdentityArn,
    }),
    ...(input.ListManagementOptions != null && {
      ListManagementOptions: serializeAws_restJson1ListManagementOptions(input.ListManagementOptions, context),
    }),
    ...(input.ReplyToAddresses != null && {
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1TestRenderEmailTemplateCommand = async (
  input: TestRenderEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates/{TemplateName}/render";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateData != null && { TemplateData: input.TemplateData }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/tags";
  const query: any = map({
    ResourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
    TagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
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
    "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventDestinationName",
    () => input.EventDestinationName!,
    "{EventDestinationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination != null && {
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

export const serializeAws_restJson1UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailAddress",
    () => input.EmailAddress!,
    "{EmailAddress}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AttributesData != null && { AttributesData: input.AttributesData }),
    ...(input.TopicPreferences != null && {
      TopicPreferences: serializeAws_restJson1TopicPreferenceList(input.TopicPreferences, context),
    }),
    ...(input.UnsubscribeAll != null && { UnsubscribeAll: input.UnsubscribeAll }),
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

export const serializeAws_restJson1UpdateContactListCommand = async (
  input: UpdateContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/contact-lists/{ContactListName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactListName",
    () => input.ContactListName!,
    "{ContactListName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Topics != null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
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

export const serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = async (
  input: UpdateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/custom-verification-email-templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.FailureRedirectionURL != null && { FailureRedirectionURL: input.FailureRedirectionURL }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.SuccessRedirectionURL != null && { SuccessRedirectionURL: input.SuccessRedirectionURL }),
    ...(input.TemplateContent != null && { TemplateContent: input.TemplateContent }),
    ...(input.TemplateSubject != null && { TemplateSubject: input.TemplateSubject }),
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

export const serializeAws_restJson1UpdateEmailIdentityPolicyCommand = async (
  input: UpdateEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EmailIdentity",
    () => input.EmailIdentity!,
    "{EmailIdentity}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "PolicyName", () => input.PolicyName!, "{PolicyName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: input.Policy }),
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

export const serializeAws_restJson1UpdateEmailTemplateCommand = async (
  input: UpdateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v2/email/templates/{TemplateName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateContent != null && {
      TemplateContent: serializeAws_restJson1EmailTemplateContent(input.TemplateContent, context),
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

export const deserializeAws_restJson1BatchGetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1MetricDataErrorList(data.Errors, context);
  }
  if (data.Results != null) {
    contents.Results = deserializeAws_restJson1MetricDataResultList(data.Results, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.sesv2#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateContactListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeliverabilityTestReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestStatus != null) {
    contents.DeliverabilityTestStatus = __expectString(data.DeliverabilityTestStatus);
  }
  if (data.ReportId != null) {
    contents.ReportId = __expectString(data.ReportId);
  }
  return contents;
};

const deserializeAws_restJson1CreateDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazonaws.sesv2#AccountSuspendedException":
      throw await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimAttributes != null) {
    contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
  }
  if (data.IdentityType != null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.VerifiedForSendingStatus != null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return contents;
};

const deserializeAws_restJson1CreateEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateEmailIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  return contents;
};

const deserializeAws_restJson1CreateImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteContactListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEmailIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSuppressedDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuppressedDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpAutoWarmupEnabled != null) {
    contents.DedicatedIpAutoWarmupEnabled = __expectBoolean(data.DedicatedIpAutoWarmupEnabled);
  }
  if (data.Details != null) {
    contents.Details = deserializeAws_restJson1AccountDetails(data.Details, context);
  }
  if (data.EnforcementStatus != null) {
    contents.EnforcementStatus = __expectString(data.EnforcementStatus);
  }
  if (data.ProductionAccessEnabled != null) {
    contents.ProductionAccessEnabled = __expectBoolean(data.ProductionAccessEnabled);
  }
  if (data.SendQuota != null) {
    contents.SendQuota = deserializeAws_restJson1SendQuota(data.SendQuota, context);
  }
  if (data.SendingEnabled != null) {
    contents.SendingEnabled = __expectBoolean(data.SendingEnabled);
  }
  if (data.SuppressionAttributes != null) {
    contents.SuppressionAttributes = deserializeAws_restJson1SuppressionAttributes(data.SuppressionAttributes, context);
  }
  if (data.VdmAttributes != null) {
    contents.VdmAttributes = deserializeAws_restJson1VdmAttributes(data.VdmAttributes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBlacklistReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlacklistReport != null) {
    contents.BlacklistReport = deserializeAws_restJson1BlacklistReport(data.BlacklistReport, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBlacklistReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSetName != null) {
    contents.ConfigurationSetName = __expectString(data.ConfigurationSetName);
  }
  if (data.DeliveryOptions != null) {
    contents.DeliveryOptions = deserializeAws_restJson1DeliveryOptions(data.DeliveryOptions, context);
  }
  if (data.ReputationOptions != null) {
    contents.ReputationOptions = deserializeAws_restJson1ReputationOptions(data.ReputationOptions, context);
  }
  if (data.SendingOptions != null) {
    contents.SendingOptions = deserializeAws_restJson1SendingOptions(data.SendingOptions, context);
  }
  if (data.SuppressionOptions != null) {
    contents.SuppressionOptions = deserializeAws_restJson1SuppressionOptions(data.SuppressionOptions, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (data.TrackingOptions != null) {
    contents.TrackingOptions = deserializeAws_restJson1TrackingOptions(data.TrackingOptions, context);
  }
  if (data.VdmOptions != null) {
    contents.VdmOptions = deserializeAws_restJson1VdmOptions(data.VdmOptions, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventDestinations != null) {
    contents.EventDestinations = deserializeAws_restJson1EventDestinations(data.EventDestinations, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AttributesData != null) {
    contents.AttributesData = __expectString(data.AttributesData);
  }
  if (data.ContactListName != null) {
    contents.ContactListName = __expectString(data.ContactListName);
  }
  if (data.CreatedTimestamp != null) {
    contents.CreatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTimestamp)));
  }
  if (data.EmailAddress != null) {
    contents.EmailAddress = __expectString(data.EmailAddress);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTimestamp)));
  }
  if (data.TopicDefaultPreferences != null) {
    contents.TopicDefaultPreferences = deserializeAws_restJson1TopicPreferenceList(
      data.TopicDefaultPreferences,
      context
    );
  }
  if (data.TopicPreferences != null) {
    contents.TopicPreferences = deserializeAws_restJson1TopicPreferenceList(data.TopicPreferences, context);
  }
  if (data.UnsubscribeAll != null) {
    contents.UnsubscribeAll = __expectBoolean(data.UnsubscribeAll);
  }
  return contents;
};

const deserializeAws_restJson1GetContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactListName != null) {
    contents.ContactListName = __expectString(data.ContactListName);
  }
  if (data.CreatedTimestamp != null) {
    contents.CreatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTimestamp)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastUpdatedTimestamp != null) {
    contents.LastUpdatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTimestamp)));
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (data.Topics != null) {
    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
  }
  return contents;
};

const deserializeAws_restJson1GetContactListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FailureRedirectionURL != null) {
    contents.FailureRedirectionURL = __expectString(data.FailureRedirectionURL);
  }
  if (data.FromEmailAddress != null) {
    contents.FromEmailAddress = __expectString(data.FromEmailAddress);
  }
  if (data.SuccessRedirectionURL != null) {
    contents.SuccessRedirectionURL = __expectString(data.SuccessRedirectionURL);
  }
  if (data.TemplateContent != null) {
    contents.TemplateContent = __expectString(data.TemplateContent);
  }
  if (data.TemplateName != null) {
    contents.TemplateName = __expectString(data.TemplateName);
  }
  if (data.TemplateSubject != null) {
    contents.TemplateSubject = __expectString(data.TemplateSubject);
  }
  return contents;
};

const deserializeAws_restJson1GetCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDedicatedIpCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIp != null) {
    contents.DedicatedIp = deserializeAws_restJson1DedicatedIp(data.DedicatedIp, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDedicatedIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpPool != null) {
    contents.DedicatedIpPool = deserializeAws_restJson1DedicatedIpPool(data.DedicatedIpPool, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDedicatedIpPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDedicatedIpsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIps != null) {
    contents.DedicatedIps = deserializeAws_restJson1DedicatedIpList(data.DedicatedIps, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetDedicatedIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountStatus != null) {
    contents.AccountStatus = __expectString(data.AccountStatus);
  }
  if (data.ActiveSubscribedDomains != null) {
    contents.ActiveSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(
      data.ActiveSubscribedDomains,
      context
    );
  }
  if (data.DashboardEnabled != null) {
    contents.DashboardEnabled = __expectBoolean(data.DashboardEnabled);
  }
  if (data.PendingExpirationSubscribedDomains != null) {
    contents.PendingExpirationSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(
      data.PendingExpirationSubscribedDomains,
      context
    );
  }
  if (data.SubscriptionExpiryDate != null) {
    contents.SubscriptionExpiryDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.SubscriptionExpiryDate))
    );
  }
  return contents;
};

const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeliverabilityTestReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReport != null) {
    contents.DeliverabilityTestReport = deserializeAws_restJson1DeliverabilityTestReport(
      data.DeliverabilityTestReport,
      context
    );
  }
  if (data.IspPlacements != null) {
    contents.IspPlacements = deserializeAws_restJson1IspPlacements(data.IspPlacements, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OverallPlacement != null) {
    contents.OverallPlacement = deserializeAws_restJson1PlacementStatistics(data.OverallPlacement, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDeliverabilityTestReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaign != null) {
    contents.DomainDeliverabilityCampaign = deserializeAws_restJson1DomainDeliverabilityCampaign(
      data.DomainDeliverabilityCampaign,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainStatisticsReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DailyVolumes != null) {
    contents.DailyVolumes = deserializeAws_restJson1DailyVolumes(data.DailyVolumes, context);
  }
  if (data.OverallVolume != null) {
    contents.OverallVolume = deserializeAws_restJson1OverallVolume(data.OverallVolume, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDomainStatisticsReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSetName != null) {
    contents.ConfigurationSetName = __expectString(data.ConfigurationSetName);
  }
  if (data.DkimAttributes != null) {
    contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
  }
  if (data.FeedbackForwardingStatus != null) {
    contents.FeedbackForwardingStatus = __expectBoolean(data.FeedbackForwardingStatus);
  }
  if (data.IdentityType != null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.MailFromAttributes != null) {
    contents.MailFromAttributes = deserializeAws_restJson1MailFromAttributes(data.MailFromAttributes, context);
  }
  if (data.Policies != null) {
    contents.Policies = deserializeAws_restJson1PolicyMap(data.Policies, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (data.VerificationStatus != null) {
    contents.VerificationStatus = __expectString(data.VerificationStatus);
  }
  if (data.VerifiedForSendingStatus != null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return contents;
};

const deserializeAws_restJson1GetEmailIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetEmailIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailIdentityPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policies != null) {
    contents.Policies = deserializeAws_restJson1PolicyMap(data.Policies, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEmailIdentityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TemplateContent != null) {
    contents.TemplateContent = deserializeAws_restJson1EmailTemplateContent(data.TemplateContent, context);
  }
  if (data.TemplateName != null) {
    contents.TemplateName = __expectString(data.TemplateName);
  }
  return contents;
};

const deserializeAws_restJson1GetEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompletedTimestamp != null) {
    contents.CompletedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletedTimestamp)));
  }
  if (data.CreatedTimestamp != null) {
    contents.CreatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTimestamp)));
  }
  if (data.FailedRecordsCount != null) {
    contents.FailedRecordsCount = __expectInt32(data.FailedRecordsCount);
  }
  if (data.FailureInfo != null) {
    contents.FailureInfo = deserializeAws_restJson1FailureInfo(data.FailureInfo, context);
  }
  if (data.ImportDataSource != null) {
    contents.ImportDataSource = deserializeAws_restJson1ImportDataSource(data.ImportDataSource, context);
  }
  if (data.ImportDestination != null) {
    contents.ImportDestination = deserializeAws_restJson1ImportDestination(data.ImportDestination, context);
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobStatus != null) {
    contents.JobStatus = __expectString(data.JobStatus);
  }
  if (data.ProcessedRecordsCount != null) {
    contents.ProcessedRecordsCount = __expectInt32(data.ProcessedRecordsCount);
  }
  return contents;
};

const deserializeAws_restJson1GetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SuppressedDestination != null) {
    contents.SuppressedDestination = deserializeAws_restJson1SuppressedDestination(data.SuppressedDestination, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSuppressedDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuppressedDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSets != null) {
    contents.ConfigurationSets = deserializeAws_restJson1ConfigurationSetNameList(data.ConfigurationSets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListContactListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactLists != null) {
    contents.ContactLists = deserializeAws_restJson1ListOfContactLists(data.ContactLists, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListContactListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Contacts != null) {
    contents.Contacts = deserializeAws_restJson1ListOfContacts(data.Contacts, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomVerificationEmailTemplates != null) {
    contents.CustomVerificationEmailTemplates = deserializeAws_restJson1CustomVerificationEmailTemplatesList(
      data.CustomVerificationEmailTemplates,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDedicatedIpPoolsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpPools != null) {
    contents.DedicatedIpPools = deserializeAws_restJson1ListOfDedicatedIpPools(data.DedicatedIpPools, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDedicatedIpPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeliverabilityTestReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReports != null) {
    contents.DeliverabilityTestReports = deserializeAws_restJson1DeliverabilityTestReports(
      data.DeliverabilityTestReports,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeliverabilityTestReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaigns != null) {
    contents.DomainDeliverabilityCampaigns = deserializeAws_restJson1DomainDeliverabilityCampaignList(
      data.DomainDeliverabilityCampaigns,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEmailIdentitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmailIdentities != null) {
    contents.EmailIdentities = deserializeAws_restJson1IdentityInfoList(data.EmailIdentities, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEmailIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEmailTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TemplatesMetadata != null) {
    contents.TemplatesMetadata = deserializeAws_restJson1EmailTemplateMetadataList(data.TemplatesMetadata, context);
  }
  return contents;
};

const deserializeAws_restJson1ListEmailTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImportJobs != null) {
    contents.ImportJobs = deserializeAws_restJson1ImportJobSummaryList(data.ImportJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recommendations != null) {
    contents.Recommendations = deserializeAws_restJson1RecommendationsList(data.Recommendations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSuppressedDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuppressedDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSuppressedDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SuppressedDestinationSummaries != null) {
    contents.SuppressedDestinationSummaries = deserializeAws_restJson1SuppressedDestinationSummaries(
      data.SuppressedDestinationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSuppressedDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuppressedDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.sesv2#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAccountDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutAccountDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sesv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountSendingAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutAccountSendingAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAccountSuppressionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSuppressionAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountSuppressionAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutAccountSuppressionAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSuppressionAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAccountVdmAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountVdmAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountVdmAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutAccountVdmAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountVdmAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutConfigurationSetVdmOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetVdmOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutConfigurationSetVdmOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutConfigurationSetVdmOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetVdmOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDedicatedIpInPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutDedicatedIpInPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimStatus != null) {
    contents.DkimStatus = __expectString(data.DkimStatus);
  }
  if (data.DkimTokens != null) {
    contents.DkimTokens = deserializeAws_restJson1DnsTokenList(data.DkimTokens, context);
  }
  return contents;
};

const deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutSuppressedDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSuppressedDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SendBulkEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendBulkEmailCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkEmailEntryResults != null) {
    contents.BulkEmailEntryResults = deserializeAws_restJson1BulkEmailEntryResultList(
      data.BulkEmailEntryResults,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1SendBulkEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazonaws.sesv2#AccountSuspendedException":
      throw await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendCustomVerificationEmailCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

const deserializeAws_restJson1SendCustomVerificationEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendEmailCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

const deserializeAws_restJson1SendEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountSuspendedException":
    case "com.amazonaws.sesv2#AccountSuspendedException":
      throw await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TestRenderEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestRenderEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RenderedTemplate != null) {
    contents.RenderedTemplate = __expectString(data.RenderedTemplate);
  }
  return contents;
};

const deserializeAws_restJson1TestRenderEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateEmailIdentityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailIdentityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccountSuspendedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccountSuspendedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MailFromDomainNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MessageRejected({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SendingPausedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SendingPausedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AdditionalContactEmailAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1BatchGetMetricDataQueries = (
  input: BatchGetMetricDataQuery[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchGetMetricDataQuery(entry, context);
    });
};

const serializeAws_restJson1BatchGetMetricDataQuery = (
  input: BatchGetMetricDataQuery,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1Dimensions(input.Dimensions, context) }),
    ...(input.EndDate != null && { EndDate: Math.round(input.EndDate.getTime() / 1000) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.StartDate != null && { StartDate: Math.round(input.StartDate.getTime() / 1000) }),
  };
};

const serializeAws_restJson1Body = (input: Body, context: __SerdeContext): any => {
  return {
    ...(input.Html != null && { Html: serializeAws_restJson1Content(input.Html, context) }),
    ...(input.Text != null && { Text: serializeAws_restJson1Content(input.Text, context) }),
  };
};

const serializeAws_restJson1BulkEmailContent = (input: BulkEmailContent, context: __SerdeContext): any => {
  return {
    ...(input.Template != null && { Template: serializeAws_restJson1Template(input.Template, context) }),
  };
};

const serializeAws_restJson1BulkEmailEntry = (input: BulkEmailEntry, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: serializeAws_restJson1Destination(input.Destination, context) }),
    ...(input.ReplacementEmailContent != null && {
      ReplacementEmailContent: serializeAws_restJson1ReplacementEmailContent(input.ReplacementEmailContent, context),
    }),
    ...(input.ReplacementTags != null && {
      ReplacementTags: serializeAws_restJson1MessageTagList(input.ReplacementTags, context),
    }),
  };
};

const serializeAws_restJson1BulkEmailEntryList = (input: BulkEmailEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BulkEmailEntry(entry, context);
    });
};

const serializeAws_restJson1CloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  return {
    ...(input.DimensionConfigurations != null && {
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
    ...(input.DefaultDimensionValue != null && { DefaultDimensionValue: input.DefaultDimensionValue }),
    ...(input.DimensionName != null && { DimensionName: input.DimensionName }),
    ...(input.DimensionValueSource != null && { DimensionValueSource: input.DimensionValueSource }),
  };
};

const serializeAws_restJson1CloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
};

const serializeAws_restJson1ContactListDestination = (input: ContactListDestination, context: __SerdeContext): any => {
  return {
    ...(input.ContactListImportAction != null && { ContactListImportAction: input.ContactListImportAction }),
    ...(input.ContactListName != null && { ContactListName: input.ContactListName }),
  };
};

const serializeAws_restJson1Content = (input: Content, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.Data != null && { Data: input.Data }),
  };
};

const serializeAws_restJson1DashboardAttributes = (input: DashboardAttributes, context: __SerdeContext): any => {
  return {
    ...(input.EngagementMetrics != null && { EngagementMetrics: input.EngagementMetrics }),
  };
};

const serializeAws_restJson1DashboardOptions = (input: DashboardOptions, context: __SerdeContext): any => {
  return {
    ...(input.EngagementMetrics != null && { EngagementMetrics: input.EngagementMetrics }),
  };
};

const serializeAws_restJson1DeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingPoolName != null && { SendingPoolName: input.SendingPoolName }),
    ...(input.TlsPolicy != null && { TlsPolicy: input.TlsPolicy }),
  };
};

const serializeAws_restJson1Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.BccAddresses != null && {
      BccAddresses: serializeAws_restJson1EmailAddressList(input.BccAddresses, context),
    }),
    ...(input.CcAddresses != null && {
      CcAddresses: serializeAws_restJson1EmailAddressList(input.CcAddresses, context),
    }),
    ...(input.ToAddresses != null && {
      ToAddresses: serializeAws_restJson1EmailAddressList(input.ToAddresses, context),
    }),
  };
};

const serializeAws_restJson1Dimensions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [MetricDimensionName | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1DkimSigningAttributes = (input: DkimSigningAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DomainSigningPrivateKey != null && { DomainSigningPrivateKey: input.DomainSigningPrivateKey }),
    ...(input.DomainSigningSelector != null && { DomainSigningSelector: input.DomainSigningSelector }),
    ...(input.NextSigningKeyLength != null && { NextSigningKeyLength: input.NextSigningKeyLength }),
  };
};

const serializeAws_restJson1DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.InboxPlacementTrackingOption != null && {
      InboxPlacementTrackingOption: serializeAws_restJson1InboxPlacementTrackingOption(
        input.InboxPlacementTrackingOption,
        context
      ),
    }),
    ...(input.SubscriptionStartDate != null && {
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
      return serializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
};

const serializeAws_restJson1EmailAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.Raw != null && { Raw: serializeAws_restJson1RawMessage(input.Raw, context) }),
    ...(input.Simple != null && { Simple: serializeAws_restJson1Message(input.Simple, context) }),
    ...(input.Template != null && { Template: serializeAws_restJson1Template(input.Template, context) }),
  };
};

const serializeAws_restJson1EmailTemplateContent = (input: EmailTemplateContent, context: __SerdeContext): any => {
  return {
    ...(input.Html != null && { Html: input.Html }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_restJson1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchDestination != null && {
      CloudWatchDestination: serializeAws_restJson1CloudWatchDestination(input.CloudWatchDestination, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: serializeAws_restJson1KinesisFirehoseDestination(
        input.KinesisFirehoseDestination,
        context
      ),
    }),
    ...(input.MatchingEventTypes != null && {
      MatchingEventTypes: serializeAws_restJson1EventTypes(input.MatchingEventTypes, context),
    }),
    ...(input.PinpointDestination != null && {
      PinpointDestination: serializeAws_restJson1PinpointDestination(input.PinpointDestination, context),
    }),
    ...(input.SnsDestination != null && {
      SnsDestination: serializeAws_restJson1SnsDestination(input.SnsDestination, context),
    }),
  };
};

const serializeAws_restJson1EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GuardianAttributes = (input: GuardianAttributes, context: __SerdeContext): any => {
  return {
    ...(input.OptimizedSharedDelivery != null && { OptimizedSharedDelivery: input.OptimizedSharedDelivery }),
  };
};

const serializeAws_restJson1GuardianOptions = (input: GuardianOptions, context: __SerdeContext): any => {
  return {
    ...(input.OptimizedSharedDelivery != null && { OptimizedSharedDelivery: input.OptimizedSharedDelivery }),
  };
};

const serializeAws_restJson1ImportDataSource = (input: ImportDataSource, context: __SerdeContext): any => {
  return {
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.S3Url != null && { S3Url: input.S3Url }),
  };
};

const serializeAws_restJson1ImportDestination = (input: ImportDestination, context: __SerdeContext): any => {
  return {
    ...(input.ContactListDestination != null && {
      ContactListDestination: serializeAws_restJson1ContactListDestination(input.ContactListDestination, context),
    }),
    ...(input.SuppressionListDestination != null && {
      SuppressionListDestination: serializeAws_restJson1SuppressionListDestination(
        input.SuppressionListDestination,
        context
      ),
    }),
  };
};

const serializeAws_restJson1InboxPlacementTrackingOption = (
  input: InboxPlacementTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Global != null && { Global: input.Global }),
    ...(input.TrackedIsps != null && { TrackedIsps: serializeAws_restJson1IspNameList(input.TrackedIsps, context) }),
  };
};

const serializeAws_restJson1IspNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamArn != null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_restJson1ListContactsFilter = (input: ListContactsFilter, context: __SerdeContext): any => {
  return {
    ...(input.FilteredStatus != null && { FilteredStatus: input.FilteredStatus }),
    ...(input.TopicFilter != null && { TopicFilter: serializeAws_restJson1TopicFilter(input.TopicFilter, context) }),
  };
};

const serializeAws_restJson1ListManagementOptions = (input: ListManagementOptions, context: __SerdeContext): any => {
  return {
    ...(input.ContactListName != null && { ContactListName: input.ContactListName }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1ListRecommendationsFilter = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ListRecommendationsFilterKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: serializeAws_restJson1Body(input.Body, context) }),
    ...(input.Subject != null && { Subject: serializeAws_restJson1Content(input.Subject, context) }),
  };
};

const serializeAws_restJson1MessageTag = (input: MessageTag, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1MessageTagList = (input: MessageTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MessageTag(entry, context);
    });
};

const serializeAws_restJson1PinpointDestination = (input: PinpointDestination, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
  };
};

const serializeAws_restJson1RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_restJson1ReplacementEmailContent = (
  input: ReplacementEmailContent,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplacementTemplate != null && {
      ReplacementTemplate: serializeAws_restJson1ReplacementTemplate(input.ReplacementTemplate, context),
    }),
  };
};

const serializeAws_restJson1ReplacementTemplate = (input: ReplacementTemplate, context: __SerdeContext): any => {
  return {
    ...(input.ReplacementTemplateData != null && { ReplacementTemplateData: input.ReplacementTemplateData }),
  };
};

const serializeAws_restJson1ReputationOptions = (input: ReputationOptions, context: __SerdeContext): any => {
  return {
    ...(input.LastFreshStart != null && { LastFreshStart: Math.round(input.LastFreshStart.getTime() / 1000) }),
    ...(input.ReputationMetricsEnabled != null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
  };
};

const serializeAws_restJson1SendingOptions = (input: SendingOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingEnabled != null && { SendingEnabled: input.SendingEnabled }),
  };
};

const serializeAws_restJson1SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_restJson1SuppressionListDestination = (
  input: SuppressionListDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.SuppressionListImportAction != null && {
      SuppressionListImportAction: input.SuppressionListImportAction,
    }),
  };
};

const serializeAws_restJson1SuppressionListReasons = (
  input: (SuppressionListReason | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SuppressionOptions = (input: SuppressionOptions, context: __SerdeContext): any => {
  return {
    ...(input.SuppressedReasons != null && {
      SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
    }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.TemplateArn != null && { TemplateArn: input.TemplateArn }),
    ...(input.TemplateData != null && { TemplateData: input.TemplateData }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
  };
};

const serializeAws_restJson1Topic = (input: Topic, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubscriptionStatus != null && { DefaultSubscriptionStatus: input.DefaultSubscriptionStatus }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1TopicFilter = (input: TopicFilter, context: __SerdeContext): any => {
  return {
    ...(input.TopicName != null && { TopicName: input.TopicName }),
    ...(input.UseDefaultIfPreferenceUnavailable != null && {
      UseDefaultIfPreferenceUnavailable: input.UseDefaultIfPreferenceUnavailable,
    }),
  };
};

const serializeAws_restJson1TopicPreference = (input: TopicPreference, context: __SerdeContext): any => {
  return {
    ...(input.SubscriptionStatus != null && { SubscriptionStatus: input.SubscriptionStatus }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1TopicPreferenceList = (input: TopicPreference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TopicPreference(entry, context);
    });
};

const serializeAws_restJson1Topics = (input: Topic[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Topic(entry, context);
    });
};

const serializeAws_restJson1TrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  return {
    ...(input.CustomRedirectDomain != null && { CustomRedirectDomain: input.CustomRedirectDomain }),
  };
};

const serializeAws_restJson1VdmAttributes = (input: VdmAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DashboardAttributes != null && {
      DashboardAttributes: serializeAws_restJson1DashboardAttributes(input.DashboardAttributes, context),
    }),
    ...(input.GuardianAttributes != null && {
      GuardianAttributes: serializeAws_restJson1GuardianAttributes(input.GuardianAttributes, context),
    }),
    ...(input.VdmEnabled != null && { VdmEnabled: input.VdmEnabled }),
  };
};

const serializeAws_restJson1VdmOptions = (input: VdmOptions, context: __SerdeContext): any => {
  return {
    ...(input.DashboardOptions != null && {
      DashboardOptions: serializeAws_restJson1DashboardOptions(input.DashboardOptions, context),
    }),
    ...(input.GuardianOptions != null && {
      GuardianOptions: serializeAws_restJson1GuardianOptions(input.GuardianOptions, context),
    }),
  };
};

const deserializeAws_restJson1AccountDetails = (output: any, context: __SerdeContext): AccountDetails => {
  return {
    AdditionalContactEmailAddresses:
      output.AdditionalContactEmailAddresses != null
        ? deserializeAws_restJson1AdditionalContactEmailAddresses(output.AdditionalContactEmailAddresses, context)
        : undefined,
    ContactLanguage: __expectString(output.ContactLanguage),
    MailType: __expectString(output.MailType),
    ReviewDetails:
      output.ReviewDetails != null ? deserializeAws_restJson1ReviewDetails(output.ReviewDetails, context) : undefined,
    UseCaseDescription: __expectString(output.UseCaseDescription),
    WebsiteURL: __expectString(output.WebsiteURL),
  } as any;
};

const deserializeAws_restJson1AdditionalContactEmailAddresses = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1BlacklistEntries = (output: any, context: __SerdeContext): BlacklistEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BlacklistEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BlacklistEntry = (output: any, context: __SerdeContext): BlacklistEntry => {
  return {
    Description: __expectString(output.Description),
    ListingTime:
      output.ListingTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ListingTime)))
        : undefined,
    RblName: __expectString(output.RblName),
  } as any;
};

const deserializeAws_restJson1BlacklistReport = (
  output: any,
  context: __SerdeContext
): Record<string, BlacklistEntry[]> => {
  return Object.entries(output).reduce((acc: Record<string, BlacklistEntry[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1BlacklistEntries(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1BulkEmailEntryResult = (output: any, context: __SerdeContext): BulkEmailEntryResult => {
  return {
    Error: __expectString(output.Error),
    MessageId: __expectString(output.MessageId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1BulkEmailEntryResultList = (
  output: any,
  context: __SerdeContext
): BulkEmailEntryResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BulkEmailEntryResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudWatchDestination = (output: any, context: __SerdeContext): CloudWatchDestination => {
  return {
    DimensionConfigurations:
      output.DimensionConfigurations != null
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigurationSetNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    TopicDefaultPreferences:
      output.TopicDefaultPreferences != null
        ? deserializeAws_restJson1TopicPreferenceList(output.TopicDefaultPreferences, context)
        : undefined,
    TopicPreferences:
      output.TopicPreferences != null
        ? deserializeAws_restJson1TopicPreferenceList(output.TopicPreferences, context)
        : undefined,
    UnsubscribeAll: __expectBoolean(output.UnsubscribeAll),
  } as any;
};

const deserializeAws_restJson1ContactList = (output: any, context: __SerdeContext): ContactList => {
  return {
    ContactListName: __expectString(output.ContactListName),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContactListDestination = (
  output: any,
  context: __SerdeContext
): ContactListDestination => {
  return {
    ContactListImportAction: __expectString(output.ContactListImportAction),
    ContactListName: __expectString(output.ContactListName),
  } as any;
};

const deserializeAws_restJson1CustomVerificationEmailTemplateMetadata = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateMetadata => {
  return {
    FailureRedirectionURL: __expectString(output.FailureRedirectionURL),
    FromEmailAddress: __expectString(output.FromEmailAddress),
    SuccessRedirectionURL: __expectString(output.SuccessRedirectionURL),
    TemplateName: __expectString(output.TemplateName),
    TemplateSubject: __expectString(output.TemplateSubject),
  } as any;
};

const deserializeAws_restJson1CustomVerificationEmailTemplatesList = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomVerificationEmailTemplateMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DailyVolume = (output: any, context: __SerdeContext): DailyVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements != null
        ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
        : undefined,
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    VolumeStatistics:
      output.VolumeStatistics != null
        ? deserializeAws_restJson1VolumeStatistics(output.VolumeStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DailyVolumes = (output: any, context: __SerdeContext): DailyVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DailyVolume(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DashboardAttributes = (output: any, context: __SerdeContext): DashboardAttributes => {
  return {
    EngagementMetrics: __expectString(output.EngagementMetrics),
  } as any;
};

const deserializeAws_restJson1DashboardOptions = (output: any, context: __SerdeContext): DashboardOptions => {
  return {
    EngagementMetrics: __expectString(output.EngagementMetrics),
  } as any;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DedicatedIp(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DedicatedIpPool = (output: any, context: __SerdeContext): DedicatedIpPool => {
  return {
    PoolName: __expectString(output.PoolName),
    ScalingMode: __expectString(output.ScalingMode),
  } as any;
};

const deserializeAws_restJson1DeliverabilityTestReport = (
  output: any,
  context: __SerdeContext
): DeliverabilityTestReport => {
  return {
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeliverabilityTestReport(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeliveryOptions = (output: any, context: __SerdeContext): DeliveryOptions => {
  return {
    SendingPoolName: __expectString(output.SendingPoolName),
    TlsPolicy: __expectString(output.TlsPolicy),
  } as any;
};

const deserializeAws_restJson1DkimAttributes = (output: any, context: __SerdeContext): DkimAttributes => {
  return {
    CurrentSigningKeyLength: __expectString(output.CurrentSigningKeyLength),
    LastKeyGenerationTimestamp:
      output.LastKeyGenerationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastKeyGenerationTimestamp)))
        : undefined,
    NextSigningKeyLength: __expectString(output.NextSigningKeyLength),
    SigningAttributesOrigin: __expectString(output.SigningAttributesOrigin),
    SigningEnabled: __expectBoolean(output.SigningEnabled),
    Status: __expectString(output.Status),
    Tokens: output.Tokens != null ? deserializeAws_restJson1DnsTokenList(output.Tokens, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DnsTokenList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1DomainDeliverabilityCampaign = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign => {
  return {
    CampaignId: __expectString(output.CampaignId),
    DeleteRate: __limitedParseDouble(output.DeleteRate),
    Esps: output.Esps != null ? deserializeAws_restJson1Esps(output.Esps, context) : undefined,
    FirstSeenDateTime:
      output.FirstSeenDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FirstSeenDateTime)))
        : undefined,
    FromAddress: __expectString(output.FromAddress),
    ImageUrl: __expectString(output.ImageUrl),
    InboxCount: __expectLong(output.InboxCount),
    LastSeenDateTime:
      output.LastSeenDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSeenDateTime)))
        : undefined,
    ProjectedVolume: __expectLong(output.ProjectedVolume),
    ReadDeleteRate: __limitedParseDouble(output.ReadDeleteRate),
    ReadRate: __limitedParseDouble(output.ReadRate),
    SendingIps: output.SendingIps != null ? deserializeAws_restJson1IpList(output.SendingIps, context) : undefined,
    SpamCount: __expectLong(output.SpamCount),
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_restJson1DomainDeliverabilityCampaignList = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainDeliverabilityCampaign(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  return {
    Domain: __expectString(output.Domain),
    InboxPlacementTrackingOption:
      output.InboxPlacementTrackingOption != null
        ? deserializeAws_restJson1InboxPlacementTrackingOption(output.InboxPlacementTrackingOption, context)
        : undefined,
    SubscriptionStartDate:
      output.SubscriptionStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubscriptionStartDate)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainIspPlacement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EmailTemplateContent = (output: any, context: __SerdeContext): EmailTemplateContent => {
  return {
    Html: __expectString(output.Html),
    Subject: __expectString(output.Subject),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_restJson1EmailTemplateMetadata = (output: any, context: __SerdeContext): EmailTemplateMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    TemplateName: __expectString(output.TemplateName),
  } as any;
};

const deserializeAws_restJson1EmailTemplateMetadataList = (
  output: any,
  context: __SerdeContext
): EmailTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EmailTemplateMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Esps = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchDestination:
      output.CloudWatchDestination != null
        ? deserializeAws_restJson1CloudWatchDestination(output.CloudWatchDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination != null
        ? deserializeAws_restJson1KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes != null
        ? deserializeAws_restJson1EventTypes(output.MatchingEventTypes, context)
        : undefined,
    Name: __expectString(output.Name),
    PinpointDestination:
      output.PinpointDestination != null
        ? deserializeAws_restJson1PinpointDestination(output.PinpointDestination, context)
        : undefined,
    SnsDestination:
      output.SnsDestination != null
        ? deserializeAws_restJson1SnsDestination(output.SnsDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1FailureInfo = (output: any, context: __SerdeContext): FailureInfo => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    FailedRecordsS3Url: __expectString(output.FailedRecordsS3Url),
  } as any;
};

const deserializeAws_restJson1GuardianAttributes = (output: any, context: __SerdeContext): GuardianAttributes => {
  return {
    OptimizedSharedDelivery: __expectString(output.OptimizedSharedDelivery),
  } as any;
};

const deserializeAws_restJson1GuardianOptions = (output: any, context: __SerdeContext): GuardianOptions => {
  return {
    OptimizedSharedDelivery: __expectString(output.OptimizedSharedDelivery),
  } as any;
};

const deserializeAws_restJson1IdentityInfo = (output: any, context: __SerdeContext): IdentityInfo => {
  return {
    IdentityName: __expectString(output.IdentityName),
    IdentityType: __expectString(output.IdentityType),
    SendingEnabled: __expectBoolean(output.SendingEnabled),
    VerificationStatus: __expectString(output.VerificationStatus),
  } as any;
};

const deserializeAws_restJson1IdentityInfoList = (output: any, context: __SerdeContext): IdentityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImportDataSource = (output: any, context: __SerdeContext): ImportDataSource => {
  return {
    DataFormat: __expectString(output.DataFormat),
    S3Url: __expectString(output.S3Url),
  } as any;
};

const deserializeAws_restJson1ImportDestination = (output: any, context: __SerdeContext): ImportDestination => {
  return {
    ContactListDestination:
      output.ContactListDestination != null
        ? deserializeAws_restJson1ContactListDestination(output.ContactListDestination, context)
        : undefined,
    SuppressionListDestination:
      output.SuppressionListDestination != null
        ? deserializeAws_restJson1SuppressionListDestination(output.SuppressionListDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportJobSummary = (output: any, context: __SerdeContext): ImportJobSummary => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    FailedRecordsCount: __expectInt32(output.FailedRecordsCount),
    ImportDestination:
      output.ImportDestination != null
        ? deserializeAws_restJson1ImportDestination(output.ImportDestination, context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
    ProcessedRecordsCount: __expectInt32(output.ProcessedRecordsCount),
  } as any;
};

const deserializeAws_restJson1ImportJobSummaryList = (output: any, context: __SerdeContext): ImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InboxPlacementTrackingOption = (
  output: any,
  context: __SerdeContext
): InboxPlacementTrackingOption => {
  return {
    Global: __expectBoolean(output.Global),
    TrackedIsps:
      output.TrackedIsps != null ? deserializeAws_restJson1IspNameList(output.TrackedIsps, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IpList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1IspNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1IspPlacement = (output: any, context: __SerdeContext): IspPlacement => {
  return {
    IspName: __expectString(output.IspName),
    PlacementStatistics:
      output.PlacementStatistics != null
        ? deserializeAws_restJson1PlacementStatistics(output.PlacementStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IspPlacements = (output: any, context: __SerdeContext): IspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IspPlacement(entry, context);
    });
  return retVal;
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

const deserializeAws_restJson1ListOfContactLists = (output: any, context: __SerdeContext): ContactList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContactList(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfContacts = (output: any, context: __SerdeContext): Contact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Contact(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfDedicatedIpPools = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1MailFromAttributes = (output: any, context: __SerdeContext): MailFromAttributes => {
  return {
    BehaviorOnMxFailure: __expectString(output.BehaviorOnMxFailure),
    MailFromDomain: __expectString(output.MailFromDomain),
    MailFromDomainStatus: __expectString(output.MailFromDomainStatus),
  } as any;
};

const deserializeAws_restJson1MetricDataError = (output: any, context: __SerdeContext): MetricDataError => {
  return {
    Code: __expectString(output.Code),
    Id: __expectString(output.Id),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1MetricDataErrorList = (output: any, context: __SerdeContext): MetricDataError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricDataError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  return {
    Id: __expectString(output.Id),
    Timestamps:
      output.Timestamps != null ? deserializeAws_restJson1TimestampList(output.Timestamps, context) : undefined,
    Values: output.Values != null ? deserializeAws_restJson1MetricValueList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MetricDataResultList = (output: any, context: __SerdeContext): MetricDataResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricDataResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1OverallVolume = (output: any, context: __SerdeContext): OverallVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements != null
        ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
        : undefined,
    ReadRatePercent: __limitedParseDouble(output.ReadRatePercent),
    VolumeStatistics:
      output.VolumeStatistics != null
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

const deserializeAws_restJson1PolicyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Description: __expectString(output.Description),
    Impact: __expectString(output.Impact),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1RecommendationsList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  return {
    LastFreshStart:
      output.LastFreshStart != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastFreshStart)))
        : undefined,
    ReputationMetricsEnabled: __expectBoolean(output.ReputationMetricsEnabled),
  } as any;
};

const deserializeAws_restJson1ReviewDetails = (output: any, context: __SerdeContext): ReviewDetails => {
  return {
    CaseId: __expectString(output.CaseId),
    Status: __expectString(output.Status),
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

const deserializeAws_restJson1SuppressedDestination = (output: any, context: __SerdeContext): SuppressedDestination => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1SuppressedDestinationAttributes(output.Attributes, context)
        : undefined,
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1SuppressedDestinationAttributes = (
  output: any,
  context: __SerdeContext
): SuppressedDestinationAttributes => {
  return {
    FeedbackId: __expectString(output.FeedbackId),
    MessageId: __expectString(output.MessageId),
  } as any;
};

const deserializeAws_restJson1SuppressedDestinationSummaries = (
  output: any,
  context: __SerdeContext
): SuppressedDestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuppressedDestinationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SuppressedDestinationSummary = (
  output: any,
  context: __SerdeContext
): SuppressedDestinationSummary => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1SuppressionAttributes = (output: any, context: __SerdeContext): SuppressionAttributes => {
  return {
    SuppressedReasons:
      output.SuppressedReasons != null
        ? deserializeAws_restJson1SuppressionListReasons(output.SuppressedReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuppressionListDestination = (
  output: any,
  context: __SerdeContext
): SuppressionListDestination => {
  return {
    SuppressionListImportAction: __expectString(output.SuppressionListImportAction),
  } as any;
};

const deserializeAws_restJson1SuppressionListReasons = (
  output: any,
  context: __SerdeContext
): (SuppressionListReason | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SuppressionOptions = (output: any, context: __SerdeContext): SuppressionOptions => {
  return {
    SuppressedReasons:
      output.SuppressedReasons != null
        ? deserializeAws_restJson1SuppressionListReasons(output.SuppressedReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

const deserializeAws_restJson1Topic = (output: any, context: __SerdeContext): Topic => {
  return {
    DefaultSubscriptionStatus: __expectString(output.DefaultSubscriptionStatus),
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_restJson1TopicPreference = (output: any, context: __SerdeContext): TopicPreference => {
  return {
    SubscriptionStatus: __expectString(output.SubscriptionStatus),
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_restJson1TopicPreferenceList = (output: any, context: __SerdeContext): TopicPreference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TopicPreference(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Topics = (output: any, context: __SerdeContext): Topic[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Topic(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  return {
    CustomRedirectDomain: __expectString(output.CustomRedirectDomain),
  } as any;
};

const deserializeAws_restJson1VdmAttributes = (output: any, context: __SerdeContext): VdmAttributes => {
  return {
    DashboardAttributes:
      output.DashboardAttributes != null
        ? deserializeAws_restJson1DashboardAttributes(output.DashboardAttributes, context)
        : undefined,
    GuardianAttributes:
      output.GuardianAttributes != null
        ? deserializeAws_restJson1GuardianAttributes(output.GuardianAttributes, context)
        : undefined,
    VdmEnabled: __expectString(output.VdmEnabled),
  } as any;
};

const deserializeAws_restJson1VdmOptions = (output: any, context: __SerdeContext): VdmOptions => {
  return {
    DashboardOptions:
      output.DashboardOptions != null
        ? deserializeAws_restJson1DashboardOptions(output.DashboardOptions, context)
        : undefined,
    GuardianOptions:
      output.GuardianOptions != null
        ? deserializeAws_restJson1GuardianOptions(output.GuardianOptions, context)
        : undefined,
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
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
