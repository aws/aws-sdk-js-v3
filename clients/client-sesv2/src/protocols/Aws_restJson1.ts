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

/**
 * serializeAws_restJson1BatchGetMetricDataCommand
 */
export const se_BatchGetMetricDataCommand = async (
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
    ...(input.Queries != null && { Queries: se_BatchGetMetricDataQueries(input.Queries, context) }),
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

/**
 * serializeAws_restJson1CreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
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
    ...(input.DeliveryOptions != null && { DeliveryOptions: se_DeliveryOptions(input.DeliveryOptions, context) }),
    ...(input.ReputationOptions != null && {
      ReputationOptions: se_ReputationOptions(input.ReputationOptions, context),
    }),
    ...(input.SendingOptions != null && { SendingOptions: se_SendingOptions(input.SendingOptions, context) }),
    ...(input.SuppressionOptions != null && {
      SuppressionOptions: se_SuppressionOptions(input.SuppressionOptions, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TrackingOptions != null && { TrackingOptions: se_TrackingOptions(input.TrackingOptions, context) }),
    ...(input.VdmOptions != null && { VdmOptions: se_VdmOptions(input.VdmOptions, context) }),
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

/**
 * serializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const se_CreateConfigurationSetEventDestinationCommand = async (
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
      EventDestination: se_EventDestinationDefinition(input.EventDestination, context),
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

/**
 * serializeAws_restJson1CreateContactCommand
 */
export const se_CreateContactCommand = async (
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
      TopicPreferences: se_TopicPreferenceList(input.TopicPreferences, context),
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

/**
 * serializeAws_restJson1CreateContactListCommand
 */
export const se_CreateContactListCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Topics != null && { Topics: se_Topics(input.Topics, context) }),
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

/**
 * serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand
 */
export const se_CreateCustomVerificationEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const se_CreateDedicatedIpPoolCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const se_CreateDeliverabilityTestReportCommand = async (
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
    ...(input.Content != null && { Content: se_EmailContent(input.Content, context) }),
    ...(input.FromEmailAddress != null && { FromEmailAddress: input.FromEmailAddress }),
    ...(input.ReportName != null && { ReportName: input.ReportName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateEmailIdentityCommand
 */
export const se_CreateEmailIdentityCommand = async (
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
      DkimSigningAttributes: se_DkimSigningAttributes(input.DkimSigningAttributes, context),
    }),
    ...(input.EmailIdentity != null && { EmailIdentity: input.EmailIdentity }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateEmailIdentityPolicyCommand
 */
export const se_CreateEmailIdentityPolicyCommand = async (
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

/**
 * serializeAws_restJson1CreateEmailTemplateCommand
 */
export const se_CreateEmailTemplateCommand = async (
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
    ...(input.TemplateContent != null && { TemplateContent: se_EmailTemplateContent(input.TemplateContent, context) }),
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

/**
 * serializeAws_restJson1CreateImportJobCommand
 */
export const se_CreateImportJobCommand = async (
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
    ...(input.ImportDataSource != null && { ImportDataSource: se_ImportDataSource(input.ImportDataSource, context) }),
    ...(input.ImportDestination != null && {
      ImportDestination: se_ImportDestination(input.ImportDestination, context),
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

/**
 * serializeAws_restJson1DeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
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

/**
 * serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const se_DeleteConfigurationSetEventDestinationCommand = async (
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

/**
 * serializeAws_restJson1DeleteContactCommand
 */
export const se_DeleteContactCommand = async (
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

/**
 * serializeAws_restJson1DeleteContactListCommand
 */
export const se_DeleteContactListCommand = async (
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

/**
 * serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand
 */
export const se_DeleteCustomVerificationEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const se_DeleteDedicatedIpPoolCommand = async (
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

/**
 * serializeAws_restJson1DeleteEmailIdentityCommand
 */
export const se_DeleteEmailIdentityCommand = async (
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

/**
 * serializeAws_restJson1DeleteEmailIdentityPolicyCommand
 */
export const se_DeleteEmailIdentityPolicyCommand = async (
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

/**
 * serializeAws_restJson1DeleteEmailTemplateCommand
 */
export const se_DeleteEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1DeleteSuppressedDestinationCommand
 */
export const se_DeleteSuppressedDestinationCommand = async (
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

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
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

/**
 * serializeAws_restJson1GetBlacklistReportsCommand
 */
export const se_GetBlacklistReportsCommand = async (
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

/**
 * serializeAws_restJson1GetConfigurationSetCommand
 */
export const se_GetConfigurationSetCommand = async (
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

/**
 * serializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const se_GetConfigurationSetEventDestinationsCommand = async (
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

/**
 * serializeAws_restJson1GetContactCommand
 */
export const se_GetContactCommand = async (
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

/**
 * serializeAws_restJson1GetContactListCommand
 */
export const se_GetContactListCommand = async (
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

/**
 * serializeAws_restJson1GetCustomVerificationEmailTemplateCommand
 */
export const se_GetCustomVerificationEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetDedicatedIpCommand
 */
export const se_GetDedicatedIpCommand = async (
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

/**
 * serializeAws_restJson1GetDedicatedIpPoolCommand
 */
export const se_GetDedicatedIpPoolCommand = async (
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

/**
 * serializeAws_restJson1GetDedicatedIpsCommand
 */
export const se_GetDedicatedIpsCommand = async (
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

/**
 * serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const se_GetDeliverabilityDashboardOptionsCommand = async (
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

/**
 * serializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const se_GetDeliverabilityTestReportCommand = async (
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

/**
 * serializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const se_GetDomainDeliverabilityCampaignCommand = async (
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

/**
 * serializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const se_GetDomainStatisticsReportCommand = async (
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

/**
 * serializeAws_restJson1GetEmailIdentityCommand
 */
export const se_GetEmailIdentityCommand = async (
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

/**
 * serializeAws_restJson1GetEmailIdentityPoliciesCommand
 */
export const se_GetEmailIdentityPoliciesCommand = async (
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

/**
 * serializeAws_restJson1GetEmailTemplateCommand
 */
export const se_GetEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetImportJobCommand
 */
export const se_GetImportJobCommand = async (
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

/**
 * serializeAws_restJson1GetSuppressedDestinationCommand
 */
export const se_GetSuppressedDestinationCommand = async (
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

/**
 * serializeAws_restJson1ListConfigurationSetsCommand
 */
export const se_ListConfigurationSetsCommand = async (
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

/**
 * serializeAws_restJson1ListContactListsCommand
 */
export const se_ListContactListsCommand = async (
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

/**
 * serializeAws_restJson1ListContactsCommand
 */
export const se_ListContactsCommand = async (
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
    ...(input.Filter != null && { Filter: se_ListContactsFilter(input.Filter, context) }),
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

/**
 * serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand
 */
export const se_ListCustomVerificationEmailTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const se_ListDedicatedIpPoolsCommand = async (
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

/**
 * serializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const se_ListDeliverabilityTestReportsCommand = async (
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

/**
 * serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const se_ListDomainDeliverabilityCampaignsCommand = async (
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

/**
 * serializeAws_restJson1ListEmailIdentitiesCommand
 */
export const se_ListEmailIdentitiesCommand = async (
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

/**
 * serializeAws_restJson1ListEmailTemplatesCommand
 */
export const se_ListEmailTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListImportJobsCommand
 */
export const se_ListImportJobsCommand = async (
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

/**
 * serializeAws_restJson1ListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
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
    ...(input.Filter != null && { Filter: se_ListRecommendationsFilter(input.Filter, context) }),
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

/**
 * serializeAws_restJson1ListSuppressedDestinationsCommand
 */
export const se_ListSuppressedDestinationsCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const se_PutAccountDedicatedIpWarmupAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutAccountDetailsCommand
 */
export const se_PutAccountDetailsCommand = async (
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
      AdditionalContactEmailAddresses: se_AdditionalContactEmailAddresses(
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

/**
 * serializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const se_PutAccountSendingAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutAccountSuppressionAttributesCommand
 */
export const se_PutAccountSuppressionAttributesCommand = async (
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
      SuppressedReasons: se_SuppressionListReasons(input.SuppressedReasons, context),
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

/**
 * serializeAws_restJson1PutAccountVdmAttributesCommand
 */
export const se_PutAccountVdmAttributesCommand = async (
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
    ...(input.VdmAttributes != null && { VdmAttributes: se_VdmAttributes(input.VdmAttributes, context) }),
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

/**
 * serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const se_PutConfigurationSetDeliveryOptionsCommand = async (
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

/**
 * serializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const se_PutConfigurationSetReputationOptionsCommand = async (
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

/**
 * serializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const se_PutConfigurationSetSendingOptionsCommand = async (
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

/**
 * serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand
 */
export const se_PutConfigurationSetSuppressionOptionsCommand = async (
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
      SuppressedReasons: se_SuppressionListReasons(input.SuppressedReasons, context),
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

/**
 * serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const se_PutConfigurationSetTrackingOptionsCommand = async (
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

/**
 * serializeAws_restJson1PutConfigurationSetVdmOptionsCommand
 */
export const se_PutConfigurationSetVdmOptionsCommand = async (
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
    ...(input.VdmOptions != null && { VdmOptions: se_VdmOptions(input.VdmOptions, context) }),
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

/**
 * serializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const se_PutDedicatedIpInPoolCommand = async (
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

/**
 * serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const se_PutDedicatedIpWarmupAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const se_PutDeliverabilityDashboardOptionCommand = async (
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
      SubscribedDomains: se_DomainDeliverabilityTrackingOptions(input.SubscribedDomains, context),
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

/**
 * serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand
 */
export const se_PutEmailIdentityConfigurationSetAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const se_PutEmailIdentityDkimAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand
 */
export const se_PutEmailIdentityDkimSigningAttributesCommand = async (
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
      SigningAttributes: se_DkimSigningAttributes(input.SigningAttributes, context),
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

/**
 * serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const se_PutEmailIdentityFeedbackAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const se_PutEmailIdentityMailFromAttributesCommand = async (
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

/**
 * serializeAws_restJson1PutSuppressedDestinationCommand
 */
export const se_PutSuppressedDestinationCommand = async (
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

/**
 * serializeAws_restJson1SendBulkEmailCommand
 */
export const se_SendBulkEmailCommand = async (
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
    ...(input.BulkEmailEntries != null && { BulkEmailEntries: se_BulkEmailEntryList(input.BulkEmailEntries, context) }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.DefaultContent != null && { DefaultContent: se_BulkEmailContent(input.DefaultContent, context) }),
    ...(input.DefaultEmailTags != null && { DefaultEmailTags: se_MessageTagList(input.DefaultEmailTags, context) }),
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
    ...(input.ReplyToAddresses != null && { ReplyToAddresses: se_EmailAddressList(input.ReplyToAddresses, context) }),
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

/**
 * serializeAws_restJson1SendCustomVerificationEmailCommand
 */
export const se_SendCustomVerificationEmailCommand = async (
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

/**
 * serializeAws_restJson1SendEmailCommand
 */
export const se_SendEmailCommand = async (
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
    ...(input.Content != null && { Content: se_EmailContent(input.Content, context) }),
    ...(input.Destination != null && { Destination: se_Destination(input.Destination, context) }),
    ...(input.EmailTags != null && { EmailTags: se_MessageTagList(input.EmailTags, context) }),
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
      ListManagementOptions: se_ListManagementOptions(input.ListManagementOptions, context),
    }),
    ...(input.ReplyToAddresses != null && { ReplyToAddresses: se_EmailAddressList(input.ReplyToAddresses, context) }),
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1TestRenderEmailTemplateCommand
 */
export const se_TestRenderEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const se_UpdateConfigurationSetEventDestinationCommand = async (
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
      EventDestination: se_EventDestinationDefinition(input.EventDestination, context),
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

/**
 * serializeAws_restJson1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
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
      TopicPreferences: se_TopicPreferenceList(input.TopicPreferences, context),
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

/**
 * serializeAws_restJson1UpdateContactListCommand
 */
export const se_UpdateContactListCommand = async (
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
    ...(input.Topics != null && { Topics: se_Topics(input.Topics, context) }),
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

/**
 * serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand
 */
export const se_UpdateCustomVerificationEmailTemplateCommand = async (
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

/**
 * serializeAws_restJson1UpdateEmailIdentityPolicyCommand
 */
export const se_UpdateEmailIdentityPolicyCommand = async (
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

/**
 * serializeAws_restJson1UpdateEmailTemplateCommand
 */
export const se_UpdateEmailTemplateCommand = async (
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
    ...(input.TemplateContent != null && { TemplateContent: se_EmailTemplateContent(input.TemplateContent, context) }),
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

/**
 * deserializeAws_restJson1BatchGetMetricDataCommand
 */
export const de_BatchGetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = de_MetricDataErrorList(data.Errors, context);
  }
  if (data.Results != null) {
    contents.Results = de_MetricDataResultList(data.Results, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetMetricDataCommandError
 */
const de_BatchGetMetricDataCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.sesv2#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetCommandError
 */
const de_CreateConfigurationSetCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError
 */
const de_CreateConfigurationSetEventDestinationCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateContactCommand
 */
export const de_CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactCommandError
 */
const de_CreateContactCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateContactListCommand
 */
export const de_CreateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactListCommandError
 */
const de_CreateContactListCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand
 */
export const de_CreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommandError
 */
const de_CreateCustomVerificationEmailTemplateCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const de_CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDedicatedIpPoolCommandError
 */
const de_CreateDedicatedIpPoolCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const de_CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeliverabilityTestReportCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateDeliverabilityTestReportCommandError
 */
const de_CreateDeliverabilityTestReportCommandError = async (
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
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateEmailIdentityCommand
 */
export const de_CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimAttributes != null) {
    contents.DkimAttributes = de_DkimAttributes(data.DkimAttributes, context);
  }
  if (data.IdentityType != null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.VerifiedForSendingStatus != null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailIdentityCommandError
 */
const de_CreateEmailIdentityCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateEmailIdentityPolicyCommand
 */
export const de_CreateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailIdentityPolicyCommandError
 */
const de_CreateEmailIdentityPolicyCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateEmailTemplateCommand
 */
export const de_CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailTemplateCommandError
 */
const de_CreateEmailTemplateCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateImportJobCommand
 */
export const de_CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateImportJobCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateImportJobCommandError
 */
const de_CreateImportJobCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetCommandError
 */
const de_DeleteConfigurationSetCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError
 */
const de_DeleteConfigurationSetEventDestinationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteContactCommand
 */
export const de_DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactCommandError
 */
const de_DeleteContactCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteContactListCommand
 */
export const de_DeleteContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactListCommandError
 */
const de_DeleteContactListCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand
 */
export const de_DeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommandError
 */
const de_DeleteCustomVerificationEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const de_DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDedicatedIpPoolCommandError
 */
const de_DeleteDedicatedIpPoolCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteEmailIdentityCommand
 */
export const de_DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailIdentityCommandError
 */
const de_DeleteEmailIdentityCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteEmailIdentityPolicyCommand
 */
export const de_DeleteEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailIdentityPolicyCommandError
 */
const de_DeleteEmailIdentityPolicyCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteEmailTemplateCommand
 */
export const de_DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailTemplateCommandError
 */
const de_DeleteEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteSuppressedDestinationCommand
 */
export const de_DeleteSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSuppressedDestinationCommandError
 */
const de_DeleteSuppressedDestinationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpAutoWarmupEnabled != null) {
    contents.DedicatedIpAutoWarmupEnabled = __expectBoolean(data.DedicatedIpAutoWarmupEnabled);
  }
  if (data.Details != null) {
    contents.Details = de_AccountDetails(data.Details, context);
  }
  if (data.EnforcementStatus != null) {
    contents.EnforcementStatus = __expectString(data.EnforcementStatus);
  }
  if (data.ProductionAccessEnabled != null) {
    contents.ProductionAccessEnabled = __expectBoolean(data.ProductionAccessEnabled);
  }
  if (data.SendQuota != null) {
    contents.SendQuota = de_SendQuota(data.SendQuota, context);
  }
  if (data.SendingEnabled != null) {
    contents.SendingEnabled = __expectBoolean(data.SendingEnabled);
  }
  if (data.SuppressionAttributes != null) {
    contents.SuppressionAttributes = de_SuppressionAttributes(data.SuppressionAttributes, context);
  }
  if (data.VdmAttributes != null) {
    contents.VdmAttributes = de_VdmAttributes(data.VdmAttributes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountCommandError
 */
const de_GetAccountCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetBlacklistReportsCommand
 */
export const de_GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBlacklistReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BlacklistReport != null) {
    contents.BlacklistReport = de_BlacklistReport(data.BlacklistReport, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBlacklistReportsCommandError
 */
const de_GetBlacklistReportsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetConfigurationSetCommand
 */
export const de_GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSetName != null) {
    contents.ConfigurationSetName = __expectString(data.ConfigurationSetName);
  }
  if (data.DeliveryOptions != null) {
    contents.DeliveryOptions = de_DeliveryOptions(data.DeliveryOptions, context);
  }
  if (data.ReputationOptions != null) {
    contents.ReputationOptions = de_ReputationOptions(data.ReputationOptions, context);
  }
  if (data.SendingOptions != null) {
    contents.SendingOptions = de_SendingOptions(data.SendingOptions, context);
  }
  if (data.SuppressionOptions != null) {
    contents.SuppressionOptions = de_SuppressionOptions(data.SuppressionOptions, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  if (data.TrackingOptions != null) {
    contents.TrackingOptions = de_TrackingOptions(data.TrackingOptions, context);
  }
  if (data.VdmOptions != null) {
    contents.VdmOptions = de_VdmOptions(data.VdmOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetCommandError
 */
const de_GetConfigurationSetCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const de_GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationSetEventDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventDestinations != null) {
    contents.EventDestinations = de_EventDestinations(data.EventDestinations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError
 */
const de_GetConfigurationSetEventDestinationsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetContactCommand
 */
export const de_GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContactCommandError(output, context);
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
    contents.TopicDefaultPreferences = de_TopicPreferenceList(data.TopicDefaultPreferences, context);
  }
  if (data.TopicPreferences != null) {
    contents.TopicPreferences = de_TopicPreferenceList(data.TopicPreferences, context);
  }
  if (data.UnsubscribeAll != null) {
    contents.UnsubscribeAll = __expectBoolean(data.UnsubscribeAll);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContactCommandError
 */
const de_GetContactCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetContactListCommand
 */
export const de_GetContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContactListCommandError(output, context);
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
    contents.Tags = de_TagList(data.Tags, context);
  }
  if (data.Topics != null) {
    contents.Topics = de_Topics(data.Topics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContactListCommandError
 */
const de_GetContactListCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand
 */
export const de_GetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCustomVerificationEmailTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1GetCustomVerificationEmailTemplateCommandError
 */
const de_GetCustomVerificationEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDedicatedIpCommand
 */
export const de_GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDedicatedIpCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIp != null) {
    contents.DedicatedIp = de_DedicatedIp(data.DedicatedIp, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpCommandError
 */
const de_GetDedicatedIpCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDedicatedIpPoolCommand
 */
export const de_GetDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDedicatedIpPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpPool != null) {
    contents.DedicatedIpPool = de_DedicatedIpPool(data.DedicatedIpPool, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpPoolCommandError
 */
const de_GetDedicatedIpPoolCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDedicatedIpsCommand
 */
export const de_GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDedicatedIpsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIps != null) {
    contents.DedicatedIps = de_DedicatedIpList(data.DedicatedIps, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpsCommandError
 */
const de_GetDedicatedIpsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const de_GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeliverabilityDashboardOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountStatus != null) {
    contents.AccountStatus = __expectString(data.AccountStatus);
  }
  if (data.ActiveSubscribedDomains != null) {
    contents.ActiveSubscribedDomains = de_DomainDeliverabilityTrackingOptions(data.ActiveSubscribedDomains, context);
  }
  if (data.DashboardEnabled != null) {
    contents.DashboardEnabled = __expectBoolean(data.DashboardEnabled);
  }
  if (data.PendingExpirationSubscribedDomains != null) {
    contents.PendingExpirationSubscribedDomains = de_DomainDeliverabilityTrackingOptions(
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

/**
 * deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError
 */
const de_GetDeliverabilityDashboardOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const de_GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeliverabilityTestReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReport != null) {
    contents.DeliverabilityTestReport = de_DeliverabilityTestReport(data.DeliverabilityTestReport, context);
  }
  if (data.IspPlacements != null) {
    contents.IspPlacements = de_IspPlacements(data.IspPlacements, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OverallPlacement != null) {
    contents.OverallPlacement = de_PlacementStatistics(data.OverallPlacement, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeliverabilityTestReportCommandError
 */
const de_GetDeliverabilityTestReportCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const de_GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainDeliverabilityCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaign != null) {
    contents.DomainDeliverabilityCampaign = de_DomainDeliverabilityCampaign(data.DomainDeliverabilityCampaign, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError
 */
const de_GetDomainDeliverabilityCampaignCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const de_GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainStatisticsReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DailyVolumes != null) {
    contents.DailyVolumes = de_DailyVolumes(data.DailyVolumes, context);
  }
  if (data.OverallVolume != null) {
    contents.OverallVolume = de_OverallVolume(data.OverallVolume, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainStatisticsReportCommandError
 */
const de_GetDomainStatisticsReportCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetEmailIdentityCommand
 */
export const de_GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEmailIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSetName != null) {
    contents.ConfigurationSetName = __expectString(data.ConfigurationSetName);
  }
  if (data.DkimAttributes != null) {
    contents.DkimAttributes = de_DkimAttributes(data.DkimAttributes, context);
  }
  if (data.FeedbackForwardingStatus != null) {
    contents.FeedbackForwardingStatus = __expectBoolean(data.FeedbackForwardingStatus);
  }
  if (data.IdentityType != null) {
    contents.IdentityType = __expectString(data.IdentityType);
  }
  if (data.MailFromAttributes != null) {
    contents.MailFromAttributes = de_MailFromAttributes(data.MailFromAttributes, context);
  }
  if (data.Policies != null) {
    contents.Policies = de_PolicyMap(data.Policies, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  if (data.VerificationStatus != null) {
    contents.VerificationStatus = __expectString(data.VerificationStatus);
  }
  if (data.VerifiedForSendingStatus != null) {
    contents.VerifiedForSendingStatus = __expectBoolean(data.VerifiedForSendingStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailIdentityCommandError
 */
const de_GetEmailIdentityCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetEmailIdentityPoliciesCommand
 */
export const de_GetEmailIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEmailIdentityPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policies != null) {
    contents.Policies = de_PolicyMap(data.Policies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailIdentityPoliciesCommandError
 */
const de_GetEmailIdentityPoliciesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetEmailTemplateCommand
 */
export const de_GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TemplateContent != null) {
    contents.TemplateContent = de_EmailTemplateContent(data.TemplateContent, context);
  }
  if (data.TemplateName != null) {
    contents.TemplateName = __expectString(data.TemplateName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailTemplateCommandError
 */
const de_GetEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetImportJobCommand
 */
export const de_GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImportJobCommandError(output, context);
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
    contents.FailureInfo = de_FailureInfo(data.FailureInfo, context);
  }
  if (data.ImportDataSource != null) {
    contents.ImportDataSource = de_ImportDataSource(data.ImportDataSource, context);
  }
  if (data.ImportDestination != null) {
    contents.ImportDestination = de_ImportDestination(data.ImportDestination, context);
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

/**
 * deserializeAws_restJson1GetImportJobCommandError
 */
const de_GetImportJobCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetSuppressedDestinationCommand
 */
export const de_GetSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SuppressedDestination != null) {
    contents.SuppressedDestination = de_SuppressedDestination(data.SuppressedDestination, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSuppressedDestinationCommandError
 */
const de_GetSuppressedDestinationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSets != null) {
    contents.ConfigurationSets = de_ConfigurationSetNameList(data.ConfigurationSets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationSetsCommandError
 */
const de_ListConfigurationSetsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListContactListsCommand
 */
export const de_ListContactListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactLists != null) {
    contents.ContactLists = de_ListOfContactLists(data.ContactLists, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactListsCommandError
 */
const de_ListContactListsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListContactsCommand
 */
export const de_ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Contacts != null) {
    contents.Contacts = de_ListOfContacts(data.Contacts, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactsCommandError
 */
const de_ListContactsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand
 */
export const de_ListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCustomVerificationEmailTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomVerificationEmailTemplates != null) {
    contents.CustomVerificationEmailTemplates = de_CustomVerificationEmailTemplatesList(
      data.CustomVerificationEmailTemplates,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommandError
 */
const de_ListCustomVerificationEmailTemplatesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const de_ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDedicatedIpPoolsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DedicatedIpPools != null) {
    contents.DedicatedIpPools = de_ListOfDedicatedIpPools(data.DedicatedIpPools, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDedicatedIpPoolsCommandError
 */
const de_ListDedicatedIpPoolsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const de_ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeliverabilityTestReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeliverabilityTestReports != null) {
    contents.DeliverabilityTestReports = de_DeliverabilityTestReports(data.DeliverabilityTestReports, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeliverabilityTestReportsCommandError
 */
const de_ListDeliverabilityTestReportsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const de_ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainDeliverabilityCampaignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainDeliverabilityCampaigns != null) {
    contents.DomainDeliverabilityCampaigns = de_DomainDeliverabilityCampaignList(
      data.DomainDeliverabilityCampaigns,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError
 */
const de_ListDomainDeliverabilityCampaignsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListEmailIdentitiesCommand
 */
export const de_ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEmailIdentitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmailIdentities != null) {
    contents.EmailIdentities = de_IdentityInfoList(data.EmailIdentities, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEmailIdentitiesCommandError
 */
const de_ListEmailIdentitiesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListEmailTemplatesCommand
 */
export const de_ListEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEmailTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TemplatesMetadata != null) {
    contents.TemplatesMetadata = de_EmailTemplateMetadataList(data.TemplatesMetadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEmailTemplatesCommandError
 */
const de_ListEmailTemplatesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListImportJobsCommand
 */
export const de_ListImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImportJobs != null) {
    contents.ImportJobs = de_ImportJobSummaryList(data.ImportJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImportJobsCommandError
 */
const de_ListImportJobsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recommendations != null) {
    contents.Recommendations = de_RecommendationsList(data.Recommendations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationsCommandError
 */
const de_ListRecommendationsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListSuppressedDestinationsCommand
 */
export const de_ListSuppressedDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuppressedDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSuppressedDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SuppressedDestinationSummaries != null) {
    contents.SuppressedDestinationSummaries = de_SuppressedDestinationSummaries(
      data.SuppressedDestinationSummaries,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSuppressedDestinationsCommandError
 */
const de_ListSuppressedDestinationsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.sesv2#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const de_PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError
 */
const de_PutAccountDedicatedIpWarmupAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutAccountDetailsCommand
 */
export const de_PutAccountDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountDetailsCommandError
 */
const de_PutAccountDetailsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sesv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const de_PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountSendingAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountSendingAttributesCommandError
 */
const de_PutAccountSendingAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutAccountSuppressionAttributesCommand
 */
export const de_PutAccountSuppressionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSuppressionAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountSuppressionAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountSuppressionAttributesCommandError
 */
const de_PutAccountSuppressionAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutAccountVdmAttributesCommand
 */
export const de_PutAccountVdmAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountVdmAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountVdmAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountVdmAttributesCommandError
 */
const de_PutAccountVdmAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const de_PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetDeliveryOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError
 */
const de_PutConfigurationSetDeliveryOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const de_PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetReputationOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError
 */
const de_PutConfigurationSetReputationOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const de_PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetSendingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError
 */
const de_PutConfigurationSetSendingOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand
 */
export const de_PutConfigurationSetSuppressionOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetSuppressionOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommandError
 */
const de_PutConfigurationSetSuppressionOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const de_PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetTrackingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError
 */
const de_PutConfigurationSetTrackingOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutConfigurationSetVdmOptionsCommand
 */
export const de_PutConfigurationSetVdmOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetVdmOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutConfigurationSetVdmOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetVdmOptionsCommandError
 */
const de_PutConfigurationSetVdmOptionsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const de_PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDedicatedIpInPoolCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDedicatedIpInPoolCommandError
 */
const de_PutDedicatedIpInPoolCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const de_PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDedicatedIpWarmupAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError
 */
const de_PutDedicatedIpWarmupAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const de_PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDeliverabilityDashboardOptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError
 */
const de_PutDeliverabilityDashboardOptionCommandError = async (
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
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand
 */
export const de_PutEmailIdentityConfigurationSetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEmailIdentityConfigurationSetAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommandError
 */
const de_PutEmailIdentityConfigurationSetAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const de_PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEmailIdentityDkimAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError
 */
const de_PutEmailIdentityDkimAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand
 */
export const de_PutEmailIdentityDkimSigningAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEmailIdentityDkimSigningAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DkimStatus != null) {
    contents.DkimStatus = __expectString(data.DkimStatus);
  }
  if (data.DkimTokens != null) {
    contents.DkimTokens = de_DnsTokenList(data.DkimTokens, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommandError
 */
const de_PutEmailIdentityDkimSigningAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const de_PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEmailIdentityFeedbackAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError
 */
const de_PutEmailIdentityFeedbackAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const de_PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEmailIdentityMailFromAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError
 */
const de_PutEmailIdentityMailFromAttributesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutSuppressedDestinationCommand
 */
export const de_PutSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutSuppressedDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutSuppressedDestinationCommandError
 */
const de_PutSuppressedDestinationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SendBulkEmailCommand
 */
export const de_SendBulkEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendBulkEmailCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkEmailEntryResults != null) {
    contents.BulkEmailEntryResults = de_BulkEmailEntryResultList(data.BulkEmailEntryResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SendBulkEmailCommandError
 */
const de_SendBulkEmailCommandError = async (
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
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SendCustomVerificationEmailCommand
 */
export const de_SendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendCustomVerificationEmailCommandError(output, context);
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

/**
 * deserializeAws_restJson1SendCustomVerificationEmailCommandError
 */
const de_SendCustomVerificationEmailCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SendEmailCommand
 */
export const de_SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendEmailCommandError(output, context);
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

/**
 * deserializeAws_restJson1SendEmailCommandError
 */
const de_SendEmailCommandError = async (
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
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.sesv2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1TestRenderEmailTemplateCommand
 */
export const de_TestRenderEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestRenderEmailTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1TestRenderEmailTemplateCommandError
 */
const de_TestRenderEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError
 */
const de_UpdateConfigurationSetEventDestinationCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactCommandError
 */
const de_UpdateContactCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactListCommand
 */
export const de_UpdateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactListCommandError
 */
const de_UpdateContactListCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand
 */
export const de_UpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCustomVerificationEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommandError
 */
const de_UpdateCustomVerificationEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateEmailIdentityPolicyCommand
 */
export const de_UpdateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEmailIdentityPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailIdentityPolicyCommandError
 */
const de_UpdateEmailIdentityPolicyCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateEmailTemplateCommand
 */
export const de_UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailTemplateCommandError
 */
const de_UpdateEmailTemplateCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.sesv2#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sesv2#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1AccountSuspendedExceptionRes
 */
const de_AccountSuspendedExceptionRes = async (
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

/**
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
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

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
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

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
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

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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

/**
 * deserializeAws_restJson1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
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

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1MailFromDomainNotVerifiedExceptionRes
 */
const de_MailFromDomainNotVerifiedExceptionRes = async (
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

/**
 * deserializeAws_restJson1MessageRejectedRes
 */
const de_MessageRejectedRes = async (parsedOutput: any, context: __SerdeContext): Promise<MessageRejected> => {
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

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
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

/**
 * deserializeAws_restJson1SendingPausedExceptionRes
 */
const de_SendingPausedExceptionRes = async (
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

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
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

/**
 * serializeAws_restJson1AdditionalContactEmailAddresses
 */
const se_AdditionalContactEmailAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BatchGetMetricDataQueries
 */
const se_BatchGetMetricDataQueries = (input: BatchGetMetricDataQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetMetricDataQuery(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchGetMetricDataQuery
 */
const se_BatchGetMetricDataQuery = (input: BatchGetMetricDataQuery, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_Dimensions(input.Dimensions, context) }),
    ...(input.EndDate != null && { EndDate: Math.round(input.EndDate.getTime() / 1000) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.StartDate != null && { StartDate: Math.round(input.StartDate.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1Body
 */
const se_Body = (input: Body, context: __SerdeContext): any => {
  return {
    ...(input.Html != null && { Html: se_Content(input.Html, context) }),
    ...(input.Text != null && { Text: se_Content(input.Text, context) }),
  };
};

/**
 * serializeAws_restJson1BulkEmailContent
 */
const se_BulkEmailContent = (input: BulkEmailContent, context: __SerdeContext): any => {
  return {
    ...(input.Template != null && { Template: se_Template(input.Template, context) }),
  };
};

/**
 * serializeAws_restJson1BulkEmailEntry
 */
const se_BulkEmailEntry = (input: BulkEmailEntry, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: se_Destination(input.Destination, context) }),
    ...(input.ReplacementEmailContent != null && {
      ReplacementEmailContent: se_ReplacementEmailContent(input.ReplacementEmailContent, context),
    }),
    ...(input.ReplacementTags != null && { ReplacementTags: se_MessageTagList(input.ReplacementTags, context) }),
  };
};

/**
 * serializeAws_restJson1BulkEmailEntryList
 */
const se_BulkEmailEntryList = (input: BulkEmailEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BulkEmailEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1CloudWatchDestination
 */
const se_CloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  return {
    ...(input.DimensionConfigurations != null && {
      DimensionConfigurations: se_CloudWatchDimensionConfigurations(input.DimensionConfigurations, context),
    }),
  };
};

/**
 * serializeAws_restJson1CloudWatchDimensionConfiguration
 */
const se_CloudWatchDimensionConfiguration = (input: CloudWatchDimensionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DefaultDimensionValue != null && { DefaultDimensionValue: input.DefaultDimensionValue }),
    ...(input.DimensionName != null && { DimensionName: input.DimensionName }),
    ...(input.DimensionValueSource != null && { DimensionValueSource: input.DimensionValueSource }),
  };
};

/**
 * serializeAws_restJson1CloudWatchDimensionConfigurations
 */
const se_CloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CloudWatchDimensionConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ContactListDestination
 */
const se_ContactListDestination = (input: ContactListDestination, context: __SerdeContext): any => {
  return {
    ...(input.ContactListImportAction != null && { ContactListImportAction: input.ContactListImportAction }),
    ...(input.ContactListName != null && { ContactListName: input.ContactListName }),
  };
};

/**
 * serializeAws_restJson1Content
 */
const se_Content = (input: Content, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.Data != null && { Data: input.Data }),
  };
};

/**
 * serializeAws_restJson1DashboardAttributes
 */
const se_DashboardAttributes = (input: DashboardAttributes, context: __SerdeContext): any => {
  return {
    ...(input.EngagementMetrics != null && { EngagementMetrics: input.EngagementMetrics }),
  };
};

/**
 * serializeAws_restJson1DashboardOptions
 */
const se_DashboardOptions = (input: DashboardOptions, context: __SerdeContext): any => {
  return {
    ...(input.EngagementMetrics != null && { EngagementMetrics: input.EngagementMetrics }),
  };
};

/**
 * serializeAws_restJson1DeliveryOptions
 */
const se_DeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingPoolName != null && { SendingPoolName: input.SendingPoolName }),
    ...(input.TlsPolicy != null && { TlsPolicy: input.TlsPolicy }),
  };
};

/**
 * serializeAws_restJson1Destination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.BccAddresses != null && { BccAddresses: se_EmailAddressList(input.BccAddresses, context) }),
    ...(input.CcAddresses != null && { CcAddresses: se_EmailAddressList(input.CcAddresses, context) }),
    ...(input.ToAddresses != null && { ToAddresses: se_EmailAddressList(input.ToAddresses, context) }),
  };
};

/**
 * serializeAws_restJson1Dimensions
 */
const se_Dimensions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [MetricDimensionName | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DkimSigningAttributes
 */
const se_DkimSigningAttributes = (input: DkimSigningAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DomainSigningPrivateKey != null && { DomainSigningPrivateKey: input.DomainSigningPrivateKey }),
    ...(input.DomainSigningSelector != null && { DomainSigningSelector: input.DomainSigningSelector }),
    ...(input.NextSigningKeyLength != null && { NextSigningKeyLength: input.NextSigningKeyLength }),
  };
};

/**
 * serializeAws_restJson1DomainDeliverabilityTrackingOption
 */
const se_DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.InboxPlacementTrackingOption != null && {
      InboxPlacementTrackingOption: se_InboxPlacementTrackingOption(input.InboxPlacementTrackingOption, context),
    }),
    ...(input.SubscriptionStartDate != null && {
      SubscriptionStartDate: Math.round(input.SubscriptionStartDate.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_restJson1DomainDeliverabilityTrackingOptions
 */
const se_DomainDeliverabilityTrackingOptions = (
  input: DomainDeliverabilityTrackingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DomainDeliverabilityTrackingOption(entry, context);
    });
};

/**
 * serializeAws_restJson1EmailAddressList
 */
const se_EmailAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EmailContent
 */
const se_EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.Raw != null && { Raw: se_RawMessage(input.Raw, context) }),
    ...(input.Simple != null && { Simple: se_Message(input.Simple, context) }),
    ...(input.Template != null && { Template: se_Template(input.Template, context) }),
  };
};

/**
 * serializeAws_restJson1EmailTemplateContent
 */
const se_EmailTemplateContent = (input: EmailTemplateContent, context: __SerdeContext): any => {
  return {
    ...(input.Html != null && { Html: input.Html }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_restJson1EventDestinationDefinition
 */
const se_EventDestinationDefinition = (input: EventDestinationDefinition, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchDestination != null && {
      CloudWatchDestination: se_CloudWatchDestination(input.CloudWatchDestination, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
    }),
    ...(input.MatchingEventTypes != null && { MatchingEventTypes: se_EventTypes(input.MatchingEventTypes, context) }),
    ...(input.PinpointDestination != null && {
      PinpointDestination: se_PinpointDestination(input.PinpointDestination, context),
    }),
    ...(input.SnsDestination != null && { SnsDestination: se_SnsDestination(input.SnsDestination, context) }),
  };
};

/**
 * serializeAws_restJson1EventTypes
 */
const se_EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1GuardianAttributes
 */
const se_GuardianAttributes = (input: GuardianAttributes, context: __SerdeContext): any => {
  return {
    ...(input.OptimizedSharedDelivery != null && { OptimizedSharedDelivery: input.OptimizedSharedDelivery }),
  };
};

/**
 * serializeAws_restJson1GuardianOptions
 */
const se_GuardianOptions = (input: GuardianOptions, context: __SerdeContext): any => {
  return {
    ...(input.OptimizedSharedDelivery != null && { OptimizedSharedDelivery: input.OptimizedSharedDelivery }),
  };
};

/**
 * serializeAws_restJson1ImportDataSource
 */
const se_ImportDataSource = (input: ImportDataSource, context: __SerdeContext): any => {
  return {
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.S3Url != null && { S3Url: input.S3Url }),
  };
};

/**
 * serializeAws_restJson1ImportDestination
 */
const se_ImportDestination = (input: ImportDestination, context: __SerdeContext): any => {
  return {
    ...(input.ContactListDestination != null && {
      ContactListDestination: se_ContactListDestination(input.ContactListDestination, context),
    }),
    ...(input.SuppressionListDestination != null && {
      SuppressionListDestination: se_SuppressionListDestination(input.SuppressionListDestination, context),
    }),
  };
};

/**
 * serializeAws_restJson1InboxPlacementTrackingOption
 */
const se_InboxPlacementTrackingOption = (input: InboxPlacementTrackingOption, context: __SerdeContext): any => {
  return {
    ...(input.Global != null && { Global: input.Global }),
    ...(input.TrackedIsps != null && { TrackedIsps: se_IspNameList(input.TrackedIsps, context) }),
  };
};

/**
 * serializeAws_restJson1IspNameList
 */
const se_IspNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KinesisFirehoseDestination
 */
const se_KinesisFirehoseDestination = (input: KinesisFirehoseDestination, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamArn != null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

/**
 * serializeAws_restJson1ListContactsFilter
 */
const se_ListContactsFilter = (input: ListContactsFilter, context: __SerdeContext): any => {
  return {
    ...(input.FilteredStatus != null && { FilteredStatus: input.FilteredStatus }),
    ...(input.TopicFilter != null && { TopicFilter: se_TopicFilter(input.TopicFilter, context) }),
  };
};

/**
 * serializeAws_restJson1ListManagementOptions
 */
const se_ListManagementOptions = (input: ListManagementOptions, context: __SerdeContext): any => {
  return {
    ...(input.ContactListName != null && { ContactListName: input.ContactListName }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_restJson1ListRecommendationsFilter
 */
const se_ListRecommendationsFilter = (input: Record<string, string>, context: __SerdeContext): any => {
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

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: se_Body(input.Body, context) }),
    ...(input.Subject != null && { Subject: se_Content(input.Subject, context) }),
  };
};

/**
 * serializeAws_restJson1MessageTag
 */
const se_MessageTag = (input: MessageTag, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1MessageTagList
 */
const se_MessageTagList = (input: MessageTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MessageTag(entry, context);
    });
};

/**
 * serializeAws_restJson1PinpointDestination
 */
const se_PinpointDestination = (input: PinpointDestination, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
  };
};

/**
 * serializeAws_restJson1RawMessage
 */
const se_RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
  };
};

/**
 * serializeAws_restJson1ReplacementEmailContent
 */
const se_ReplacementEmailContent = (input: ReplacementEmailContent, context: __SerdeContext): any => {
  return {
    ...(input.ReplacementTemplate != null && {
      ReplacementTemplate: se_ReplacementTemplate(input.ReplacementTemplate, context),
    }),
  };
};

/**
 * serializeAws_restJson1ReplacementTemplate
 */
const se_ReplacementTemplate = (input: ReplacementTemplate, context: __SerdeContext): any => {
  return {
    ...(input.ReplacementTemplateData != null && { ReplacementTemplateData: input.ReplacementTemplateData }),
  };
};

/**
 * serializeAws_restJson1ReputationOptions
 */
const se_ReputationOptions = (input: ReputationOptions, context: __SerdeContext): any => {
  return {
    ...(input.LastFreshStart != null && { LastFreshStart: Math.round(input.LastFreshStart.getTime() / 1000) }),
    ...(input.ReputationMetricsEnabled != null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
  };
};

/**
 * serializeAws_restJson1SendingOptions
 */
const se_SendingOptions = (input: SendingOptions, context: __SerdeContext): any => {
  return {
    ...(input.SendingEnabled != null && { SendingEnabled: input.SendingEnabled }),
  };
};

/**
 * serializeAws_restJson1SnsDestination
 */
const se_SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

/**
 * serializeAws_restJson1SuppressionListDestination
 */
const se_SuppressionListDestination = (input: SuppressionListDestination, context: __SerdeContext): any => {
  return {
    ...(input.SuppressionListImportAction != null && {
      SuppressionListImportAction: input.SuppressionListImportAction,
    }),
  };
};

/**
 * serializeAws_restJson1SuppressionListReasons
 */
const se_SuppressionListReasons = (input: (SuppressionListReason | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SuppressionOptions
 */
const se_SuppressionOptions = (input: SuppressionOptions, context: __SerdeContext): any => {
  return {
    ...(input.SuppressedReasons != null && {
      SuppressedReasons: se_SuppressionListReasons(input.SuppressedReasons, context),
    }),
  };
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1Template
 */
const se_Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.TemplateArn != null && { TemplateArn: input.TemplateArn }),
    ...(input.TemplateData != null && { TemplateData: input.TemplateData }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
  };
};

/**
 * serializeAws_restJson1Topic
 */
const se_Topic = (input: Topic, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubscriptionStatus != null && { DefaultSubscriptionStatus: input.DefaultSubscriptionStatus }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_restJson1TopicFilter
 */
const se_TopicFilter = (input: TopicFilter, context: __SerdeContext): any => {
  return {
    ...(input.TopicName != null && { TopicName: input.TopicName }),
    ...(input.UseDefaultIfPreferenceUnavailable != null && {
      UseDefaultIfPreferenceUnavailable: input.UseDefaultIfPreferenceUnavailable,
    }),
  };
};

/**
 * serializeAws_restJson1TopicPreference
 */
const se_TopicPreference = (input: TopicPreference, context: __SerdeContext): any => {
  return {
    ...(input.SubscriptionStatus != null && { SubscriptionStatus: input.SubscriptionStatus }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_restJson1TopicPreferenceList
 */
const se_TopicPreferenceList = (input: TopicPreference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TopicPreference(entry, context);
    });
};

/**
 * serializeAws_restJson1Topics
 */
const se_Topics = (input: Topic[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Topic(entry, context);
    });
};

/**
 * serializeAws_restJson1TrackingOptions
 */
const se_TrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  return {
    ...(input.CustomRedirectDomain != null && { CustomRedirectDomain: input.CustomRedirectDomain }),
  };
};

/**
 * serializeAws_restJson1VdmAttributes
 */
const se_VdmAttributes = (input: VdmAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DashboardAttributes != null && {
      DashboardAttributes: se_DashboardAttributes(input.DashboardAttributes, context),
    }),
    ...(input.GuardianAttributes != null && {
      GuardianAttributes: se_GuardianAttributes(input.GuardianAttributes, context),
    }),
    ...(input.VdmEnabled != null && { VdmEnabled: input.VdmEnabled }),
  };
};

/**
 * serializeAws_restJson1VdmOptions
 */
const se_VdmOptions = (input: VdmOptions, context: __SerdeContext): any => {
  return {
    ...(input.DashboardOptions != null && { DashboardOptions: se_DashboardOptions(input.DashboardOptions, context) }),
    ...(input.GuardianOptions != null && { GuardianOptions: se_GuardianOptions(input.GuardianOptions, context) }),
  };
};

/**
 * deserializeAws_restJson1AccountDetails
 */
const de_AccountDetails = (output: any, context: __SerdeContext): AccountDetails => {
  return {
    AdditionalContactEmailAddresses:
      output.AdditionalContactEmailAddresses != null
        ? de_AdditionalContactEmailAddresses(output.AdditionalContactEmailAddresses, context)
        : undefined,
    ContactLanguage: __expectString(output.ContactLanguage),
    MailType: __expectString(output.MailType),
    ReviewDetails: output.ReviewDetails != null ? de_ReviewDetails(output.ReviewDetails, context) : undefined,
    UseCaseDescription: __expectString(output.UseCaseDescription),
    WebsiteURL: __expectString(output.WebsiteURL),
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalContactEmailAddresses
 */
const de_AdditionalContactEmailAddresses = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1BlacklistEntries
 */
const de_BlacklistEntries = (output: any, context: __SerdeContext): BlacklistEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BlacklistEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BlacklistEntry
 */
const de_BlacklistEntry = (output: any, context: __SerdeContext): BlacklistEntry => {
  return {
    Description: __expectString(output.Description),
    ListingTime:
      output.ListingTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ListingTime)))
        : undefined,
    RblName: __expectString(output.RblName),
  } as any;
};

/**
 * deserializeAws_restJson1BlacklistReport
 */
const de_BlacklistReport = (output: any, context: __SerdeContext): Record<string, BlacklistEntry[]> => {
  return Object.entries(output).reduce((acc: Record<string, BlacklistEntry[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_BlacklistEntries(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BulkEmailEntryResult
 */
const de_BulkEmailEntryResult = (output: any, context: __SerdeContext): BulkEmailEntryResult => {
  return {
    Error: __expectString(output.Error),
    MessageId: __expectString(output.MessageId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1BulkEmailEntryResultList
 */
const de_BulkEmailEntryResultList = (output: any, context: __SerdeContext): BulkEmailEntryResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BulkEmailEntryResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudWatchDestination
 */
const de_CloudWatchDestination = (output: any, context: __SerdeContext): CloudWatchDestination => {
  return {
    DimensionConfigurations:
      output.DimensionConfigurations != null
        ? de_CloudWatchDimensionConfigurations(output.DimensionConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchDimensionConfiguration
 */
const de_CloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  return {
    DefaultDimensionValue: __expectString(output.DefaultDimensionValue),
    DimensionName: __expectString(output.DimensionName),
    DimensionValueSource: __expectString(output.DimensionValueSource),
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchDimensionConfigurations
 */
const de_CloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchDimensionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigurationSetNameList
 */
const de_ConfigurationSetNameList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    TopicDefaultPreferences:
      output.TopicDefaultPreferences != null
        ? de_TopicPreferenceList(output.TopicDefaultPreferences, context)
        : undefined,
    TopicPreferences:
      output.TopicPreferences != null ? de_TopicPreferenceList(output.TopicPreferences, context) : undefined,
    UnsubscribeAll: __expectBoolean(output.UnsubscribeAll),
  } as any;
};

/**
 * deserializeAws_restJson1ContactList
 */
const de_ContactList = (output: any, context: __SerdeContext): ContactList => {
  return {
    ContactListName: __expectString(output.ContactListName),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContactListDestination
 */
const de_ContactListDestination = (output: any, context: __SerdeContext): ContactListDestination => {
  return {
    ContactListImportAction: __expectString(output.ContactListImportAction),
    ContactListName: __expectString(output.ContactListName),
  } as any;
};

/**
 * deserializeAws_restJson1CustomVerificationEmailTemplateMetadata
 */
const de_CustomVerificationEmailTemplateMetadata = (
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

/**
 * deserializeAws_restJson1CustomVerificationEmailTemplatesList
 */
const de_CustomVerificationEmailTemplatesList = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomVerificationEmailTemplateMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DailyVolume
 */
const de_DailyVolume = (output: any, context: __SerdeContext): DailyVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements != null ? de_DomainIspPlacements(output.DomainIspPlacements, context) : undefined,
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    VolumeStatistics:
      output.VolumeStatistics != null ? de_VolumeStatistics(output.VolumeStatistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DailyVolumes
 */
const de_DailyVolumes = (output: any, context: __SerdeContext): DailyVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DailyVolume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DashboardAttributes
 */
const de_DashboardAttributes = (output: any, context: __SerdeContext): DashboardAttributes => {
  return {
    EngagementMetrics: __expectString(output.EngagementMetrics),
  } as any;
};

/**
 * deserializeAws_restJson1DashboardOptions
 */
const de_DashboardOptions = (output: any, context: __SerdeContext): DashboardOptions => {
  return {
    EngagementMetrics: __expectString(output.EngagementMetrics),
  } as any;
};

/**
 * deserializeAws_restJson1DedicatedIp
 */
const de_DedicatedIp = (output: any, context: __SerdeContext): DedicatedIp => {
  return {
    Ip: __expectString(output.Ip),
    PoolName: __expectString(output.PoolName),
    WarmupPercentage: __expectInt32(output.WarmupPercentage),
    WarmupStatus: __expectString(output.WarmupStatus),
  } as any;
};

/**
 * deserializeAws_restJson1DedicatedIpList
 */
const de_DedicatedIpList = (output: any, context: __SerdeContext): DedicatedIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DedicatedIp(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DedicatedIpPool
 */
const de_DedicatedIpPool = (output: any, context: __SerdeContext): DedicatedIpPool => {
  return {
    PoolName: __expectString(output.PoolName),
    ScalingMode: __expectString(output.ScalingMode),
  } as any;
};

/**
 * deserializeAws_restJson1DeliverabilityTestReport
 */
const de_DeliverabilityTestReport = (output: any, context: __SerdeContext): DeliverabilityTestReport => {
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

/**
 * deserializeAws_restJson1DeliverabilityTestReports
 */
const de_DeliverabilityTestReports = (output: any, context: __SerdeContext): DeliverabilityTestReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeliverabilityTestReport(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeliveryOptions
 */
const de_DeliveryOptions = (output: any, context: __SerdeContext): DeliveryOptions => {
  return {
    SendingPoolName: __expectString(output.SendingPoolName),
    TlsPolicy: __expectString(output.TlsPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1DkimAttributes
 */
const de_DkimAttributes = (output: any, context: __SerdeContext): DkimAttributes => {
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
    Tokens: output.Tokens != null ? de_DnsTokenList(output.Tokens, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DnsTokenList
 */
const de_DnsTokenList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaign
 */
const de_DomainDeliverabilityCampaign = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign => {
  return {
    CampaignId: __expectString(output.CampaignId),
    DeleteRate: __limitedParseDouble(output.DeleteRate),
    Esps: output.Esps != null ? de_Esps(output.Esps, context) : undefined,
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
    SendingIps: output.SendingIps != null ? de_IpList(output.SendingIps, context) : undefined,
    SpamCount: __expectLong(output.SpamCount),
    Subject: __expectString(output.Subject),
  } as any;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaignList
 */
const de_DomainDeliverabilityCampaignList = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainDeliverabilityCampaign(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityTrackingOption
 */
const de_DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  return {
    Domain: __expectString(output.Domain),
    InboxPlacementTrackingOption:
      output.InboxPlacementTrackingOption != null
        ? de_InboxPlacementTrackingOption(output.InboxPlacementTrackingOption, context)
        : undefined,
    SubscriptionStartDate:
      output.SubscriptionStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubscriptionStartDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityTrackingOptions
 */
const de_DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainDeliverabilityTrackingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainIspPlacement
 */
const de_DomainIspPlacement = (output: any, context: __SerdeContext): DomainIspPlacement => {
  return {
    InboxPercentage: __limitedParseDouble(output.InboxPercentage),
    InboxRawCount: __expectLong(output.InboxRawCount),
    IspName: __expectString(output.IspName),
    SpamPercentage: __limitedParseDouble(output.SpamPercentage),
    SpamRawCount: __expectLong(output.SpamRawCount),
  } as any;
};

/**
 * deserializeAws_restJson1DomainIspPlacements
 */
const de_DomainIspPlacements = (output: any, context: __SerdeContext): DomainIspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainIspPlacement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EmailTemplateContent
 */
const de_EmailTemplateContent = (output: any, context: __SerdeContext): EmailTemplateContent => {
  return {
    Html: __expectString(output.Html),
    Subject: __expectString(output.Subject),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_restJson1EmailTemplateMetadata
 */
const de_EmailTemplateMetadata = (output: any, context: __SerdeContext): EmailTemplateMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    TemplateName: __expectString(output.TemplateName),
  } as any;
};

/**
 * deserializeAws_restJson1EmailTemplateMetadataList
 */
const de_EmailTemplateMetadataList = (output: any, context: __SerdeContext): EmailTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EmailTemplateMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Esps
 */
const de_Esps = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1EventDestination
 */
const de_EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchDestination:
      output.CloudWatchDestination != null
        ? de_CloudWatchDestination(output.CloudWatchDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination != null
        ? de_KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes != null ? de_EventTypes(output.MatchingEventTypes, context) : undefined,
    Name: __expectString(output.Name),
    PinpointDestination:
      output.PinpointDestination != null ? de_PinpointDestination(output.PinpointDestination, context) : undefined,
    SnsDestination: output.SnsDestination != null ? de_SnsDestination(output.SnsDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventDestinations
 */
const de_EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventTypes
 */
const de_EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
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

/**
 * deserializeAws_restJson1FailureInfo
 */
const de_FailureInfo = (output: any, context: __SerdeContext): FailureInfo => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    FailedRecordsS3Url: __expectString(output.FailedRecordsS3Url),
  } as any;
};

/**
 * deserializeAws_restJson1GuardianAttributes
 */
const de_GuardianAttributes = (output: any, context: __SerdeContext): GuardianAttributes => {
  return {
    OptimizedSharedDelivery: __expectString(output.OptimizedSharedDelivery),
  } as any;
};

/**
 * deserializeAws_restJson1GuardianOptions
 */
const de_GuardianOptions = (output: any, context: __SerdeContext): GuardianOptions => {
  return {
    OptimizedSharedDelivery: __expectString(output.OptimizedSharedDelivery),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityInfo
 */
const de_IdentityInfo = (output: any, context: __SerdeContext): IdentityInfo => {
  return {
    IdentityName: __expectString(output.IdentityName),
    IdentityType: __expectString(output.IdentityType),
    SendingEnabled: __expectBoolean(output.SendingEnabled),
    VerificationStatus: __expectString(output.VerificationStatus),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityInfoList
 */
const de_IdentityInfoList = (output: any, context: __SerdeContext): IdentityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportDataSource
 */
const de_ImportDataSource = (output: any, context: __SerdeContext): ImportDataSource => {
  return {
    DataFormat: __expectString(output.DataFormat),
    S3Url: __expectString(output.S3Url),
  } as any;
};

/**
 * deserializeAws_restJson1ImportDestination
 */
const de_ImportDestination = (output: any, context: __SerdeContext): ImportDestination => {
  return {
    ContactListDestination:
      output.ContactListDestination != null
        ? de_ContactListDestination(output.ContactListDestination, context)
        : undefined,
    SuppressionListDestination:
      output.SuppressionListDestination != null
        ? de_SuppressionListDestination(output.SuppressionListDestination, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobSummary
 */
const de_ImportJobSummary = (output: any, context: __SerdeContext): ImportJobSummary => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    FailedRecordsCount: __expectInt32(output.FailedRecordsCount),
    ImportDestination:
      output.ImportDestination != null ? de_ImportDestination(output.ImportDestination, context) : undefined,
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
    ProcessedRecordsCount: __expectInt32(output.ProcessedRecordsCount),
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobSummaryList
 */
const de_ImportJobSummaryList = (output: any, context: __SerdeContext): ImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InboxPlacementTrackingOption
 */
const de_InboxPlacementTrackingOption = (output: any, context: __SerdeContext): InboxPlacementTrackingOption => {
  return {
    Global: __expectBoolean(output.Global),
    TrackedIsps: output.TrackedIsps != null ? de_IspNameList(output.TrackedIsps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IpList
 */
const de_IpList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1IspNameList
 */
const de_IspNameList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1IspPlacement
 */
const de_IspPlacement = (output: any, context: __SerdeContext): IspPlacement => {
  return {
    IspName: __expectString(output.IspName),
    PlacementStatistics:
      output.PlacementStatistics != null ? de_PlacementStatistics(output.PlacementStatistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IspPlacements
 */
const de_IspPlacements = (output: any, context: __SerdeContext): IspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IspPlacement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KinesisFirehoseDestination
 */
const de_KinesisFirehoseDestination = (output: any, context: __SerdeContext): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1ListOfContactLists
 */
const de_ListOfContactLists = (output: any, context: __SerdeContext): ContactList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfContacts
 */
const de_ListOfContacts = (output: any, context: __SerdeContext): Contact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Contact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfDedicatedIpPools
 */
const de_ListOfDedicatedIpPools = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1MailFromAttributes
 */
const de_MailFromAttributes = (output: any, context: __SerdeContext): MailFromAttributes => {
  return {
    BehaviorOnMxFailure: __expectString(output.BehaviorOnMxFailure),
    MailFromDomain: __expectString(output.MailFromDomain),
    MailFromDomainStatus: __expectString(output.MailFromDomainStatus),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDataError
 */
const de_MetricDataError = (output: any, context: __SerdeContext): MetricDataError => {
  return {
    Code: __expectString(output.Code),
    Id: __expectString(output.Id),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDataErrorList
 */
const de_MetricDataErrorList = (output: any, context: __SerdeContext): MetricDataError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDataError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricDataResult
 */
const de_MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  return {
    Id: __expectString(output.Id),
    Timestamps: output.Timestamps != null ? de_TimestampList(output.Timestamps, context) : undefined,
    Values: output.Values != null ? de_MetricValueList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricDataResultList
 */
const de_MetricDataResultList = (output: any, context: __SerdeContext): MetricDataResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDataResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricValueList
 */
const de_MetricValueList = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_restJson1OverallVolume
 */
const de_OverallVolume = (output: any, context: __SerdeContext): OverallVolume => {
  return {
    DomainIspPlacements:
      output.DomainIspPlacements != null ? de_DomainIspPlacements(output.DomainIspPlacements, context) : undefined,
    ReadRatePercent: __limitedParseDouble(output.ReadRatePercent),
    VolumeStatistics:
      output.VolumeStatistics != null ? de_VolumeStatistics(output.VolumeStatistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PinpointDestination
 */
const de_PinpointDestination = (output: any, context: __SerdeContext): PinpointDestination => {
  return {
    ApplicationArn: __expectString(output.ApplicationArn),
  } as any;
};

/**
 * deserializeAws_restJson1PlacementStatistics
 */
const de_PlacementStatistics = (output: any, context: __SerdeContext): PlacementStatistics => {
  return {
    DkimPercentage: __limitedParseDouble(output.DkimPercentage),
    InboxPercentage: __limitedParseDouble(output.InboxPercentage),
    MissingPercentage: __limitedParseDouble(output.MissingPercentage),
    SpamPercentage: __limitedParseDouble(output.SpamPercentage),
    SpfPercentage: __limitedParseDouble(output.SpfPercentage),
  } as any;
};

/**
 * deserializeAws_restJson1PolicyMap
 */
const de_PolicyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
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

/**
 * deserializeAws_restJson1RecommendationsList
 */
const de_RecommendationsList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReputationOptions
 */
const de_ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  return {
    LastFreshStart:
      output.LastFreshStart != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastFreshStart)))
        : undefined,
    ReputationMetricsEnabled: __expectBoolean(output.ReputationMetricsEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1ReviewDetails
 */
const de_ReviewDetails = (output: any, context: __SerdeContext): ReviewDetails => {
  return {
    CaseId: __expectString(output.CaseId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1SendingOptions
 */
const de_SendingOptions = (output: any, context: __SerdeContext): SendingOptions => {
  return {
    SendingEnabled: __expectBoolean(output.SendingEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1SendQuota
 */
const de_SendQuota = (output: any, context: __SerdeContext): SendQuota => {
  return {
    Max24HourSend: __limitedParseDouble(output.Max24HourSend),
    MaxSendRate: __limitedParseDouble(output.MaxSendRate),
    SentLast24Hours: __limitedParseDouble(output.SentLast24Hours),
  } as any;
};

/**
 * deserializeAws_restJson1SnsDestination
 */
const de_SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

/**
 * deserializeAws_restJson1SuppressedDestination
 */
const de_SuppressedDestination = (output: any, context: __SerdeContext): SuppressedDestination => {
  return {
    Attributes: output.Attributes != null ? de_SuppressedDestinationAttributes(output.Attributes, context) : undefined,
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_restJson1SuppressedDestinationAttributes
 */
const de_SuppressedDestinationAttributes = (output: any, context: __SerdeContext): SuppressedDestinationAttributes => {
  return {
    FeedbackId: __expectString(output.FeedbackId),
    MessageId: __expectString(output.MessageId),
  } as any;
};

/**
 * deserializeAws_restJson1SuppressedDestinationSummaries
 */
const de_SuppressedDestinationSummaries = (output: any, context: __SerdeContext): SuppressedDestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SuppressedDestinationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SuppressedDestinationSummary
 */
const de_SuppressedDestinationSummary = (output: any, context: __SerdeContext): SuppressedDestinationSummary => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_restJson1SuppressionAttributes
 */
const de_SuppressionAttributes = (output: any, context: __SerdeContext): SuppressionAttributes => {
  return {
    SuppressedReasons:
      output.SuppressedReasons != null ? de_SuppressionListReasons(output.SuppressedReasons, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SuppressionListDestination
 */
const de_SuppressionListDestination = (output: any, context: __SerdeContext): SuppressionListDestination => {
  return {
    SuppressionListImportAction: __expectString(output.SuppressionListImportAction),
  } as any;
};

/**
 * deserializeAws_restJson1SuppressionListReasons
 */
const de_SuppressionListReasons = (output: any, context: __SerdeContext): (SuppressionListReason | string)[] => {
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

/**
 * deserializeAws_restJson1SuppressionOptions
 */
const de_SuppressionOptions = (output: any, context: __SerdeContext): SuppressionOptions => {
  return {
    SuppressedReasons:
      output.SuppressedReasons != null ? de_SuppressionListReasons(output.SuppressedReasons, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
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

/**
 * deserializeAws_restJson1Topic
 */
const de_Topic = (output: any, context: __SerdeContext): Topic => {
  return {
    DefaultSubscriptionStatus: __expectString(output.DefaultSubscriptionStatus),
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    TopicName: __expectString(output.TopicName),
  } as any;
};

/**
 * deserializeAws_restJson1TopicPreference
 */
const de_TopicPreference = (output: any, context: __SerdeContext): TopicPreference => {
  return {
    SubscriptionStatus: __expectString(output.SubscriptionStatus),
    TopicName: __expectString(output.TopicName),
  } as any;
};

/**
 * deserializeAws_restJson1TopicPreferenceList
 */
const de_TopicPreferenceList = (output: any, context: __SerdeContext): TopicPreference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TopicPreference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Topics
 */
const de_Topics = (output: any, context: __SerdeContext): Topic[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Topic(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrackingOptions
 */
const de_TrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  return {
    CustomRedirectDomain: __expectString(output.CustomRedirectDomain),
  } as any;
};

/**
 * deserializeAws_restJson1VdmAttributes
 */
const de_VdmAttributes = (output: any, context: __SerdeContext): VdmAttributes => {
  return {
    DashboardAttributes:
      output.DashboardAttributes != null ? de_DashboardAttributes(output.DashboardAttributes, context) : undefined,
    GuardianAttributes:
      output.GuardianAttributes != null ? de_GuardianAttributes(output.GuardianAttributes, context) : undefined,
    VdmEnabled: __expectString(output.VdmEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1VdmOptions
 */
const de_VdmOptions = (output: any, context: __SerdeContext): VdmOptions => {
  return {
    DashboardOptions:
      output.DashboardOptions != null ? de_DashboardOptions(output.DashboardOptions, context) : undefined,
    GuardianOptions: output.GuardianOptions != null ? de_GuardianOptions(output.GuardianOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VolumeStatistics
 */
const de_VolumeStatistics = (output: any, context: __SerdeContext): VolumeStatistics => {
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
