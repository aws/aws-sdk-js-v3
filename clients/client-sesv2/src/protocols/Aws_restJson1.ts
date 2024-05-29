// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchGetMetricDataCommandInput, BatchGetMetricDataCommandOutput } from "../commands/BatchGetMetricDataCommand";
import { CancelExportJobCommandInput, CancelExportJobCommandOutput } from "../commands/CancelExportJobCommand";
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
import { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "../commands/CreateExportJobCommand";
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
import { GetExportJobCommandInput, GetExportJobCommandOutput } from "../commands/GetExportJobCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import { GetMessageInsightsCommandInput, GetMessageInsightsCommandOutput } from "../commands/GetMessageInsightsCommand";
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
import { ListExportJobsCommandInput, ListExportJobsCommandOutput } from "../commands/ListExportJobsCommand";
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
  PutDedicatedIpPoolScalingAttributesCommandInput,
  PutDedicatedIpPoolScalingAttributesCommandOutput,
} from "../commands/PutDedicatedIpPoolScalingAttributesCommand";
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
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  BatchGetMetricDataQuery,
  BlacklistEntry,
  Body,
  BulkEmailContent,
  BulkEmailEntry,
  CloudWatchDestination,
  CloudWatchDimensionConfiguration,
  ConcurrentModificationException,
  ConflictException,
  Contact,
  ContactList,
  ContactListDestination,
  Content,
  DailyVolume,
  DashboardAttributes,
  DashboardOptions,
  DeliverabilityTestReport,
  DeliveryEventType,
  DeliveryOptions,
  Destination,
  DkimAttributes,
  DkimSigningAttributes,
  DomainDeliverabilityCampaign,
  DomainDeliverabilityTrackingOption,
  DomainIspPlacement,
  EmailContent,
  EmailInsights,
  EmailTemplateContent,
  EmailTemplateMetadata,
  EngagementEventType,
  EventDestinationDefinition,
  EventType,
  ExportDataSource,
  ExportDestination,
  ExportJobSummary,
  ExportMetric,
  GuardianAttributes,
  GuardianOptions,
  ImportDataSource,
  ImportDestination,
  ImportJobSummary,
  InboxPlacementTrackingOption,
  InsightsEvent,
  InternalServiceErrorException,
  InvalidNextTokenException,
  IspPlacement,
  KinesisFirehoseDestination,
  LimitExceededException,
  ListContactsFilter,
  ListManagementOptions,
  ListRecommendationsFilterKey,
  MailFromDomainNotVerifiedException,
  Message,
  MessageHeader,
  MessageInsightsDataSource,
  MessageInsightsFilters,
  MessageRejected,
  MessageTag,
  MetricDataResult,
  MetricDimensionName,
  MetricsDataSource,
  NotFoundException,
  OverallVolume,
  PinpointDestination,
  PlacementStatistics,
  RawMessage,
  Recommendation,
  ReplacementEmailContent,
  ReplacementTemplate,
  ReputationOptions,
  SendingOptions,
  SendingPausedException,
  SendQuota,
  SnsDestination,
  SuppressedDestination,
  SuppressedDestinationSummary,
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
  VerificationInfo,
} from "../models/models_0";
import { SESv2ServiceException as __BaseException } from "../models/SESv2ServiceException";

/**
 * serializeAws_restJson1BatchGetMetricDataCommand
 */
export const se_BatchGetMetricDataCommand = async (
  input: BatchGetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/metrics/batch");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Queries: (_) => se_BatchGetMetricDataQueries(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelExportJobCommand
 */
export const se_CancelExportJobCommand = async (
  input: CancelExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/export-jobs/{JobId}/cancel");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      DeliveryOptions: (_) => _json(_),
      ReputationOptions: (_) => se_ReputationOptions(_, context),
      SendingOptions: (_) => _json(_),
      SuppressionOptions: (_) => _json(_),
      Tags: (_) => _json(_),
      TrackingOptions: (_) => _json(_),
      VdmOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const se_CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EventDestination: (_) => _json(_),
      EventDestinationName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactCommand
 */
export const se_CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/contact-lists/{ContactListName}/contacts");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributesData: [],
      EmailAddress: [],
      TopicPreferences: (_) => _json(_),
      UnsubscribeAll: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactListCommand
 */
export const se_CreateContactListCommand = async (
  input: CreateContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/contact-lists");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactListName: [],
      Description: [],
      Tags: (_) => _json(_),
      Topics: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand
 */
export const se_CreateCustomVerificationEmailTemplateCommand = async (
  input: CreateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/custom-verification-email-templates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      FailureRedirectionURL: [],
      FromEmailAddress: [],
      SuccessRedirectionURL: [],
      TemplateContent: [],
      TemplateName: [],
      TemplateSubject: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const se_CreateDedicatedIpPoolCommand = async (
  input: CreateDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/dedicated-ip-pools");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PoolName: [],
      ScalingMode: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const se_CreateDeliverabilityTestReportCommand = async (
  input: CreateDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/deliverability-dashboard/test");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: (_) => se_EmailContent(_, context),
      FromEmailAddress: [],
      ReportName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEmailIdentityCommand
 */
export const se_CreateEmailIdentityCommand = async (
  input: CreateEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      DkimSigningAttributes: (_) => _json(_),
      EmailIdentity: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEmailIdentityPolicyCommand
 */
export const se_CreateEmailIdentityPolicyCommand = async (
  input: CreateEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/policies/{PolicyName}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  b.p("PolicyName", () => input.PolicyName!, "{PolicyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEmailTemplateCommand
 */
export const se_CreateEmailTemplateCommand = async (
  input: CreateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/templates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      TemplateContent: (_) => _json(_),
      TemplateName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateExportJobCommand
 */
export const se_CreateExportJobCommand = async (
  input: CreateExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/export-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExportDataSource: (_) => se_ExportDataSource(_, context),
      ExportDestination: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateImportJobCommand
 */
export const se_CreateImportJobCommand = async (
  input: CreateImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/import-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ImportDataSource: (_) => _json(_),
      ImportDestination: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const se_DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  b.p("EventDestinationName", () => input.EventDestinationName!, "{EventDestinationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContactCommand
 */
export const se_DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  b.p("EmailAddress", () => input.EmailAddress!, "{EmailAddress}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContactListCommand
 */
export const se_DeleteContactListCommand = async (
  input: DeleteContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/contact-lists/{ContactListName}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand
 */
export const se_DeleteCustomVerificationEmailTemplateCommand = async (
  input: DeleteCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/custom-verification-email-templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const se_DeleteDedicatedIpPoolCommand = async (
  input: DeleteDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/dedicated-ip-pools/{PoolName}");
  b.p("PoolName", () => input.PoolName!, "{PoolName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEmailIdentityCommand
 */
export const se_DeleteEmailIdentityCommand = async (
  input: DeleteEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/identities/{EmailIdentity}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEmailIdentityPolicyCommand
 */
export const se_DeleteEmailIdentityPolicyCommand = async (
  input: DeleteEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/identities/{EmailIdentity}/policies/{PolicyName}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  b.p("PolicyName", () => input.PolicyName!, "{PolicyName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEmailTemplateCommand
 */
export const se_DeleteEmailTemplateCommand = async (
  input: DeleteEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSuppressedDestinationCommand
 */
export const se_DeleteSuppressedDestinationCommand = async (
  input: DeleteSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/suppression/addresses/{EmailAddress}");
  b.p("EmailAddress", () => input.EmailAddress!, "{EmailAddress}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBlacklistReportsCommand
 */
export const se_GetBlacklistReportsCommand = async (
  input: GetBlacklistReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/blacklist-report");
  const query: any = map({
    [_BIN]: [
      __expectNonNull(input.BlacklistItemNames, `BlacklistItemNames`) != null,
      () => (input[_BIN]! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationSetCommand
 */
export const se_GetConfigurationSetCommand = async (
  input: GetConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const se_GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContactCommand
 */
export const se_GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  b.p("EmailAddress", () => input.EmailAddress!, "{EmailAddress}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContactListCommand
 */
export const se_GetContactListCommand = async (
  input: GetContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/contact-lists/{ContactListName}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomVerificationEmailTemplateCommand
 */
export const se_GetCustomVerificationEmailTemplateCommand = async (
  input: GetCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/custom-verification-email-templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDedicatedIpCommand
 */
export const se_GetDedicatedIpCommand = async (
  input: GetDedicatedIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/dedicated-ips/{Ip}");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDedicatedIpPoolCommand
 */
export const se_GetDedicatedIpPoolCommand = async (
  input: GetDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/dedicated-ip-pools/{PoolName}");
  b.p("PoolName", () => input.PoolName!, "{PoolName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDedicatedIpsCommand
 */
export const se_GetDedicatedIpsCommand = async (
  input: GetDedicatedIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/dedicated-ips");
  const query: any = map({
    [_PN]: [, input[_PN]!],
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const se_GetDeliverabilityDashboardOptionsCommand = async (
  input: GetDeliverabilityDashboardOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/deliverability-dashboard");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const se_GetDeliverabilityTestReportCommand = async (
  input: GetDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/test-reports/{ReportId}");
  b.p("ReportId", () => input.ReportId!, "{ReportId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const se_GetDomainDeliverabilityCampaignCommand = async (
  input: GetDomainDeliverabilityCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/campaigns/{CampaignId}");
  b.p("CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const se_GetDomainStatisticsReportCommand = async (
  input: GetDomainStatisticsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/statistics-report/{Domain}");
  b.p("Domain", () => input.Domain!, "{Domain}", false);
  const query: any = map({
    [_SD]: [
      __expectNonNull(input.StartDate, `StartDate`) != null,
      () => (input[_SD]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_ED]: [
      __expectNonNull(input.EndDate, `EndDate`) != null,
      () => (input[_ED]!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEmailIdentityCommand
 */
export const se_GetEmailIdentityCommand = async (
  input: GetEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/identities/{EmailIdentity}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEmailIdentityPoliciesCommand
 */
export const se_GetEmailIdentityPoliciesCommand = async (
  input: GetEmailIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/identities/{EmailIdentity}/policies");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEmailTemplateCommand
 */
export const se_GetEmailTemplateCommand = async (
  input: GetEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetExportJobCommand
 */
export const se_GetExportJobCommand = async (
  input: GetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/export-jobs/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImportJobCommand
 */
export const se_GetImportJobCommand = async (
  input: GetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/import-jobs/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMessageInsightsCommand
 */
export const se_GetMessageInsightsCommand = async (
  input: GetMessageInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/insights/{MessageId}");
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSuppressedDestinationCommand
 */
export const se_GetSuppressedDestinationCommand = async (
  input: GetSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/suppression/addresses/{EmailAddress}");
  b.p("EmailAddress", () => input.EmailAddress!, "{EmailAddress}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfigurationSetsCommand
 */
export const se_ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/configuration-sets");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactListsCommand
 */
export const se_ListContactListsCommand = async (
  input: ListContactListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/contact-lists");
  const query: any = map({
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactsCommand
 */
export const se_ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/contact-lists/{ContactListName}/contacts/list");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filter: (_) => _json(_),
      NextToken: [],
      PageSize: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand
 */
export const se_ListCustomVerificationEmailTemplatesCommand = async (
  input: ListCustomVerificationEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/custom-verification-email-templates");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const se_ListDedicatedIpPoolsCommand = async (
  input: ListDedicatedIpPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/dedicated-ip-pools");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const se_ListDeliverabilityTestReportsCommand = async (
  input: ListDeliverabilityTestReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/test-reports");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const se_ListDomainDeliverabilityCampaignsCommand = async (
  input: ListDomainDeliverabilityCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns");
  b.p("SubscribedDomain", () => input.SubscribedDomain!, "{SubscribedDomain}", false);
  const query: any = map({
    [_SD]: [
      __expectNonNull(input.StartDate, `StartDate`) != null,
      () => (input[_SD]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_ED]: [
      __expectNonNull(input.EndDate, `EndDate`) != null,
      () => (input[_ED]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEmailIdentitiesCommand
 */
export const se_ListEmailIdentitiesCommand = async (
  input: ListEmailIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/identities");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEmailTemplatesCommand
 */
export const se_ListEmailTemplatesCommand = async (
  input: ListEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/templates");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExportJobsCommand
 */
export const se_ListExportJobsCommand = async (
  input: ListExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/list-export-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExportSourceType: [],
      JobStatus: [],
      NextToken: [],
      PageSize: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportJobsCommand
 */
export const se_ListImportJobsCommand = async (
  input: ListImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/import-jobs/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ImportDestinationType: [],
      NextToken: [],
      PageSize: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/vdm/recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filter: (_) => _json(_),
      NextToken: [],
      PageSize: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSuppressedDestinationsCommand
 */
export const se_ListSuppressedDestinationsCommand = async (
  input: ListSuppressedDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/suppression/addresses");
  const query: any = map({
    [_Re]: [() => input.Reasons !== void 0, () => (input[_R]! || []).map((_entry) => _entry as any)],
    [_SD]: [() => input.StartDate !== void 0, () => (input[_SD]!.toISOString().split(".")[0] + "Z").toString()],
    [_ED]: [() => input.EndDate !== void 0, () => (input[_ED]!.toISOString().split(".")[0] + "Z").toString()],
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/tags");
  const query: any = map({
    [_RA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const se_PutAccountDedicatedIpWarmupAttributesCommand = async (
  input: PutAccountDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account/dedicated-ips/warmup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoWarmupEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountDetailsCommand
 */
export const se_PutAccountDetailsCommand = async (
  input: PutAccountDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account/details");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalContactEmailAddresses: (_) => _json(_),
      ContactLanguage: [],
      MailType: [],
      ProductionAccessEnabled: [],
      UseCaseDescription: [],
      WebsiteURL: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const se_PutAccountSendingAttributesCommand = async (
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account/sending");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountSuppressionAttributesCommand
 */
export const se_PutAccountSuppressionAttributesCommand = async (
  input: PutAccountSuppressionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account/suppression");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SuppressedReasons: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountVdmAttributesCommand
 */
export const se_PutAccountVdmAttributesCommand = async (
  input: PutAccountVdmAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/account/vdm");
  let body: any;
  body = JSON.stringify(
    take(input, {
      VdmAttributes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const se_PutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingPoolName: [],
      TlsPolicy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const se_PutConfigurationSetReputationOptionsCommand = async (
  input: PutConfigurationSetReputationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ReputationMetricsEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const se_PutConfigurationSetSendingOptionsCommand = async (
  input: PutConfigurationSetSendingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/sending");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand
 */
export const se_PutConfigurationSetSuppressionOptionsCommand = async (
  input: PutConfigurationSetSuppressionOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SuppressedReasons: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const se_PutConfigurationSetTrackingOptionsCommand = async (
  input: PutConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomRedirectDomain: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetVdmOptionsCommand
 */
export const se_PutConfigurationSetVdmOptionsCommand = async (
  input: PutConfigurationSetVdmOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      VdmOptions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const se_PutDedicatedIpInPoolCommand = async (
  input: PutDedicatedIpInPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/dedicated-ips/{Ip}/pool");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationPoolName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDedicatedIpPoolScalingAttributesCommand
 */
export const se_PutDedicatedIpPoolScalingAttributesCommand = async (
  input: PutDedicatedIpPoolScalingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/dedicated-ip-pools/{PoolName}/scaling");
  b.p("PoolName", () => input.PoolName!, "{PoolName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ScalingMode: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const se_PutDedicatedIpWarmupAttributesCommand = async (
  input: PutDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/dedicated-ips/{Ip}/warmup");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      WarmupPercentage: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const se_PutDeliverabilityDashboardOptionCommand = async (
  input: PutDeliverabilityDashboardOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/deliverability-dashboard");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DashboardEnabled: [],
      SubscribedDomains: (_) => se_DomainDeliverabilityTrackingOptions(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand
 */
export const se_PutEmailIdentityConfigurationSetAttributesCommand = async (
  input: PutEmailIdentityConfigurationSetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/configuration-set");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const se_PutEmailIdentityDkimAttributesCommand = async (
  input: PutEmailIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/dkim");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SigningEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand
 */
export const se_PutEmailIdentityDkimSigningAttributesCommand = async (
  input: PutEmailIdentityDkimSigningAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/identities/{EmailIdentity}/dkim/signing");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SigningAttributes: (_) => _json(_),
      SigningAttributesOrigin: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const se_PutEmailIdentityFeedbackAttributesCommand = async (
  input: PutEmailIdentityFeedbackAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/feedback");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmailForwardingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const se_PutEmailIdentityMailFromAttributesCommand = async (
  input: PutEmailIdentityMailFromAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/mail-from");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BehaviorOnMxFailure: [],
      MailFromDomain: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSuppressedDestinationCommand
 */
export const se_PutSuppressedDestinationCommand = async (
  input: PutSuppressedDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/suppression/addresses");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmailAddress: [],
      Reason: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendBulkEmailCommand
 */
export const se_SendBulkEmailCommand = async (
  input: SendBulkEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/outbound-bulk-emails");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BulkEmailEntries: (_) => _json(_),
      ConfigurationSetName: [],
      DefaultContent: (_) => _json(_),
      DefaultEmailTags: (_) => _json(_),
      FeedbackForwardingEmailAddress: [],
      FeedbackForwardingEmailAddressIdentityArn: [],
      FromEmailAddress: [],
      FromEmailAddressIdentityArn: [],
      ReplyToAddresses: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendCustomVerificationEmailCommand
 */
export const se_SendCustomVerificationEmailCommand = async (
  input: SendCustomVerificationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/outbound-custom-verification-emails");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      EmailAddress: [],
      TemplateName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendEmailCommand
 */
export const se_SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/outbound-emails");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      Content: (_) => se_EmailContent(_, context),
      Destination: (_) => _json(_),
      EmailTags: (_) => _json(_),
      FeedbackForwardingEmailAddress: [],
      FeedbackForwardingEmailAddressIdentityArn: [],
      FromEmailAddress: [],
      FromEmailAddressIdentityArn: [],
      ListManagementOptions: (_) => _json(_),
      ReplyToAddresses: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestRenderEmailTemplateCommand
 */
export const se_TestRenderEmailTemplateCommand = async (
  input: TestRenderEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/templates/{TemplateName}/render");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TemplateData: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/email/tags");
  const query: any = map({
    [_RA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
    [_TK]: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input[_TK]! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const se_UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  b.p("EventDestinationName", () => input.EventDestinationName!, "{EventDestinationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EventDestination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  b.p("EmailAddress", () => input.EmailAddress!, "{EmailAddress}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributesData: [],
      TopicPreferences: (_) => _json(_),
      UnsubscribeAll: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactListCommand
 */
export const se_UpdateContactListCommand = async (
  input: UpdateContactListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/contact-lists/{ContactListName}");
  b.p("ContactListName", () => input.ContactListName!, "{ContactListName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Topics: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand
 */
export const se_UpdateCustomVerificationEmailTemplateCommand = async (
  input: UpdateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/custom-verification-email-templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FailureRedirectionURL: [],
      FromEmailAddress: [],
      SuccessRedirectionURL: [],
      TemplateContent: [],
      TemplateSubject: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEmailIdentityPolicyCommand
 */
export const se_UpdateEmailIdentityPolicyCommand = async (
  input: UpdateEmailIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/identities/{EmailIdentity}/policies/{PolicyName}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  b.p("PolicyName", () => input.PolicyName!, "{PolicyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEmailTemplateCommand
 */
export const se_UpdateEmailTemplateCommand = async (
  input: UpdateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/email/templates/{TemplateName}");
  b.p("TemplateName", () => input.TemplateName!, "{TemplateName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TemplateContent: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetMetricDataCommand
 */
export const de_BatchGetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Results: (_) => de_MetricDataResultList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelExportJobCommand
 */
export const de_CancelExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactCommand
 */
export const de_CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactListCommand
 */
export const de_CreateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand
 */
export const de_CreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const de_CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const de_CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestStatus: __expectString,
    ReportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailIdentityCommand
 */
export const de_CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DkimAttributes: (_) => de_DkimAttributes(_, context),
    IdentityType: __expectString,
    VerifiedForSendingStatus: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailIdentityPolicyCommand
 */
export const de_CreateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailTemplateCommand
 */
export const de_CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateExportJobCommand
 */
export const de_CreateExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateImportJobCommand
 */
export const de_CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactCommand
 */
export const de_DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactListCommand
 */
export const de_DeleteContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand
 */
export const de_DeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const de_DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailIdentityCommand
 */
export const de_DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailIdentityPolicyCommand
 */
export const de_DeleteEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailTemplateCommand
 */
export const de_DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSuppressedDestinationCommand
 */
export const de_DeleteSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIpAutoWarmupEnabled: __expectBoolean,
    Details: _json,
    EnforcementStatus: __expectString,
    ProductionAccessEnabled: __expectBoolean,
    SendQuota: (_) => de_SendQuota(_, context),
    SendingEnabled: __expectBoolean,
    SuppressionAttributes: _json,
    VdmAttributes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBlacklistReportsCommand
 */
export const de_GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlacklistReport: (_) => de_BlacklistReport(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetCommand
 */
export const de_GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfigurationSetName: __expectString,
    DeliveryOptions: _json,
    ReputationOptions: (_) => de_ReputationOptions(_, context),
    SendingOptions: _json,
    SuppressionOptions: _json,
    Tags: _json,
    TrackingOptions: _json,
    VdmOptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const de_GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventDestinations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContactCommand
 */
export const de_GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttributesData: __expectString,
    ContactListName: __expectString,
    CreatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EmailAddress: __expectString,
    LastUpdatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TopicDefaultPreferences: _json,
    TopicPreferences: _json,
    UnsubscribeAll: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContactListCommand
 */
export const de_GetContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactListName: __expectString,
    CreatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
    Topics: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand
 */
export const de_GetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailureRedirectionURL: __expectString,
    FromEmailAddress: __expectString,
    SuccessRedirectionURL: __expectString,
    TemplateContent: __expectString,
    TemplateName: __expectString,
    TemplateSubject: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpCommand
 */
export const de_GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIp: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpPoolCommand
 */
export const de_GetDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIpPool: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpsCommand
 */
export const de_GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIps: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const de_GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountStatus: __expectString,
    ActiveSubscribedDomains: (_) => de_DomainDeliverabilityTrackingOptions(_, context),
    DashboardEnabled: __expectBoolean,
    PendingExpirationSubscribedDomains: (_) => de_DomainDeliverabilityTrackingOptions(_, context),
    SubscriptionExpiryDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const de_GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestReport: (_) => de_DeliverabilityTestReport(_, context),
    IspPlacements: (_) => de_IspPlacements(_, context),
    Message: __expectString,
    OverallPlacement: (_) => de_PlacementStatistics(_, context),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const de_GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainDeliverabilityCampaign: (_) => de_DomainDeliverabilityCampaign(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const de_GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DailyVolumes: (_) => de_DailyVolumes(_, context),
    OverallVolume: (_) => de_OverallVolume(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailIdentityCommand
 */
export const de_GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfigurationSetName: __expectString,
    DkimAttributes: (_) => de_DkimAttributes(_, context),
    FeedbackForwardingStatus: __expectBoolean,
    IdentityType: __expectString,
    MailFromAttributes: _json,
    Policies: _json,
    Tags: _json,
    VerificationInfo: (_) => de_VerificationInfo(_, context),
    VerificationStatus: __expectString,
    VerifiedForSendingStatus: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailIdentityPoliciesCommand
 */
export const de_GetEmailIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailTemplateCommand
 */
export const de_GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TemplateContent: _json,
    TemplateName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExportJobCommand
 */
export const de_GetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompletedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportDataSource: (_) => de_ExportDataSource(_, context),
    ExportDestination: _json,
    ExportSourceType: __expectString,
    FailureInfo: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    Statistics: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportJobCommand
 */
export const de_GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompletedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailedRecordsCount: __expectInt32,
    FailureInfo: _json,
    ImportDataSource: _json,
    ImportDestination: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    ProcessedRecordsCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMessageInsightsCommand
 */
export const de_GetMessageInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessageInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmailTags: _json,
    FromEmailAddress: __expectString,
    Insights: (_) => de_EmailInsightsList(_, context),
    MessageId: __expectString,
    Subject: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSuppressedDestinationCommand
 */
export const de_GetSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SuppressedDestination: (_) => de_SuppressedDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfigurationSets: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactListsCommand
 */
export const de_ListContactListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactLists: (_) => de_ListOfContactLists(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactsCommand
 */
export const de_ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Contacts: (_) => de_ListOfContacts(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand
 */
export const de_ListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomVerificationEmailTemplates: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const de_ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIpPools: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const de_ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestReports: (_) => de_DeliverabilityTestReports(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const de_ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainDeliverabilityCampaigns: (_) => de_DomainDeliverabilityCampaignList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEmailIdentitiesCommand
 */
export const de_ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmailIdentities: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEmailTemplatesCommand
 */
export const de_ListEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TemplatesMetadata: (_) => de_EmailTemplateMetadataList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExportJobsCommand
 */
export const de_ListExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExportJobs: (_) => de_ExportJobSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportJobsCommand
 */
export const de_ListImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ImportJobs: (_) => de_ImportJobSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Recommendations: (_) => de_RecommendationsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSuppressedDestinationsCommand
 */
export const de_ListSuppressedDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuppressedDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SuppressedDestinationSummaries: (_) => de_SuppressedDestinationSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const de_PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountDetailsCommand
 */
export const de_PutAccountDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const de_PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountSuppressionAttributesCommand
 */
export const de_PutAccountSuppressionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSuppressionAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountVdmAttributesCommand
 */
export const de_PutAccountVdmAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountVdmAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const de_PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const de_PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const de_PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand
 */
export const de_PutConfigurationSetSuppressionOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const de_PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationSetVdmOptionsCommand
 */
export const de_PutConfigurationSetVdmOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetVdmOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const de_PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDedicatedIpPoolScalingAttributesCommand
 */
export const de_PutDedicatedIpPoolScalingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpPoolScalingAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const de_PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const de_PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand
 */
export const de_PutEmailIdentityConfigurationSetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const de_PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand
 */
export const de_PutEmailIdentityDkimSigningAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DkimStatus: __expectString,
    DkimTokens: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const de_PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const de_PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutSuppressedDestinationCommand
 */
export const de_PutSuppressedDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSuppressedDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SendBulkEmailCommand
 */
export const de_SendBulkEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BulkEmailEntryResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendCustomVerificationEmailCommand
 */
export const de_SendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendEmailCommand
 */
export const de_SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TestRenderEmailTemplateCommand
 */
export const de_TestRenderEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RenderedTemplate: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactListCommand
 */
export const de_UpdateContactListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand
 */
export const de_UpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailIdentityPolicyCommand
 */
export const de_UpdateEmailIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailIdentityPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailTemplateCommand
 */
export const de_UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "AlreadyExistsException":
    case "com.amazonaws.sesv2#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.sesv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.sesv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "AccountSuspendedException":
    case "com.amazonaws.sesv2#AccountSuspendedException":
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.sesv2#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.sesv2#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.sesv2#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sesv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccountSuspendedExceptionRes
 */
const de_AccountSuspendedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AdditionalContactEmailAddresses omitted.

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
  return take(input, {
    Dimensions: _json,
    EndDate: (_) => Math.round(_.getTime() / 1000),
    Id: [],
    Metric: [],
    Namespace: [],
    StartDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_Body omitted.

// se_BulkEmailContent omitted.

// se_BulkEmailEntry omitted.

// se_BulkEmailEntryList omitted.

// se_CloudWatchDestination omitted.

// se_CloudWatchDimensionConfiguration omitted.

// se_CloudWatchDimensionConfigurations omitted.

// se_ContactListDestination omitted.

// se_Content omitted.

// se_DashboardAttributes omitted.

// se_DashboardOptions omitted.

// se_DeliveryOptions omitted.

// se_Destination omitted.

// se_Dimensions omitted.

// se_DkimSigningAttributes omitted.

/**
 * serializeAws_restJson1DomainDeliverabilityTrackingOption
 */
const se_DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return take(input, {
    Domain: [],
    InboxPlacementTrackingOption: _json,
    SubscriptionStartDate: (_) => Math.round(_.getTime() / 1000),
  });
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

// se_EmailAddressFilterList omitted.

// se_EmailAddressList omitted.

/**
 * serializeAws_restJson1EmailContent
 */
const se_EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return take(input, {
    Raw: (_) => se_RawMessage(_, context),
    Simple: _json,
    Template: _json,
  });
};

// se_EmailSubjectFilterList omitted.

// se_EmailTemplateContent omitted.

// se_EventDestinationDefinition omitted.

// se_EventTypes omitted.

/**
 * serializeAws_restJson1ExportDataSource
 */
const se_ExportDataSource = (input: ExportDataSource, context: __SerdeContext): any => {
  return take(input, {
    MessageInsightsDataSource: (_) => se_MessageInsightsDataSource(_, context),
    MetricsDataSource: (_) => se_MetricsDataSource(_, context),
  });
};

// se_ExportDestination omitted.

// se_ExportDimensions omitted.

// se_ExportDimensionValue omitted.

// se_ExportMetric omitted.

// se_ExportMetrics omitted.

// se_GuardianAttributes omitted.

// se_GuardianOptions omitted.

// se_ImportDataSource omitted.

// se_ImportDestination omitted.

// se_InboxPlacementTrackingOption omitted.

// se_IspFilterList omitted.

// se_IspNameList omitted.

// se_KinesisFirehoseDestination omitted.

// se_LastDeliveryEventList omitted.

// se_LastEngagementEventList omitted.

// se_ListContactsFilter omitted.

// se_ListManagementOptions omitted.

// se_ListRecommendationsFilter omitted.

// se_Message omitted.

// se_MessageHeader omitted.

// se_MessageHeaderList omitted.

/**
 * serializeAws_restJson1MessageInsightsDataSource
 */
const se_MessageInsightsDataSource = (input: MessageInsightsDataSource, context: __SerdeContext): any => {
  return take(input, {
    EndDate: (_) => Math.round(_.getTime() / 1000),
    Exclude: _json,
    Include: _json,
    MaxResults: [],
    StartDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_MessageInsightsFilters omitted.

// se_MessageTag omitted.

// se_MessageTagList omitted.

/**
 * serializeAws_restJson1MetricsDataSource
 */
const se_MetricsDataSource = (input: MetricsDataSource, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: _json,
    EndDate: (_) => Math.round(_.getTime() / 1000),
    Metrics: _json,
    Namespace: [],
    StartDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_PinpointDestination omitted.

/**
 * serializeAws_restJson1RawMessage
 */
const se_RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
  });
};

// se_ReplacementEmailContent omitted.

// se_ReplacementTemplate omitted.

/**
 * serializeAws_restJson1ReputationOptions
 */
const se_ReputationOptions = (input: ReputationOptions, context: __SerdeContext): any => {
  return take(input, {
    LastFreshStart: (_) => Math.round(_.getTime() / 1000),
    ReputationMetricsEnabled: [],
  });
};

// se_SendingOptions omitted.

// se_SnsDestination omitted.

// se_SuppressionListDestination omitted.

// se_SuppressionListReasons omitted.

// se_SuppressionOptions omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_Template omitted.

// se_Topic omitted.

// se_TopicFilter omitted.

// se_TopicPreference omitted.

// se_TopicPreferenceList omitted.

// se_Topics omitted.

// se_TrackingOptions omitted.

// se_VdmAttributes omitted.

// se_VdmOptions omitted.

// de_AccountDetails omitted.

// de_AdditionalContactEmailAddresses omitted.

/**
 * deserializeAws_restJson1BlacklistEntries
 */
const de_BlacklistEntries = (output: any, context: __SerdeContext): BlacklistEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlacklistEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BlacklistEntry
 */
const de_BlacklistEntry = (output: any, context: __SerdeContext): BlacklistEntry => {
  return take(output, {
    Description: __expectString,
    ListingTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RblName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BlacklistReport
 */
const de_BlacklistReport = (output: any, context: __SerdeContext): Record<string, BlacklistEntry[]> => {
  return Object.entries(output).reduce((acc: Record<string, BlacklistEntry[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_BlacklistEntries(value, context);
    return acc;
  }, {} as Record<string, BlacklistEntry[]>);
};

// de_Bounce omitted.

// de_BulkEmailEntryResult omitted.

// de_BulkEmailEntryResultList omitted.

// de_CloudWatchDestination omitted.

// de_CloudWatchDimensionConfiguration omitted.

// de_CloudWatchDimensionConfigurations omitted.

// de_Complaint omitted.

// de_ConfigurationSetNameList omitted.

/**
 * deserializeAws_restJson1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return take(output, {
    EmailAddress: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TopicDefaultPreferences: _json,
    TopicPreferences: _json,
    UnsubscribeAll: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ContactList
 */
const de_ContactList = (output: any, context: __SerdeContext): ContactList => {
  return take(output, {
    ContactListName: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ContactListDestination omitted.

// de_CustomVerificationEmailTemplateMetadata omitted.

// de_CustomVerificationEmailTemplatesList omitted.

/**
 * deserializeAws_restJson1DailyVolume
 */
const de_DailyVolume = (output: any, context: __SerdeContext): DailyVolume => {
  return take(output, {
    DomainIspPlacements: (_: any) => de_DomainIspPlacements(_, context),
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeStatistics: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DailyVolumes
 */
const de_DailyVolumes = (output: any, context: __SerdeContext): DailyVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DailyVolume(entry, context);
    });
  return retVal;
};

// de_DashboardAttributes omitted.

// de_DashboardOptions omitted.

// de_DedicatedIp omitted.

// de_DedicatedIpList omitted.

// de_DedicatedIpPool omitted.

/**
 * deserializeAws_restJson1DeliverabilityTestReport
 */
const de_DeliverabilityTestReport = (output: any, context: __SerdeContext): DeliverabilityTestReport => {
  return take(output, {
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeliverabilityTestStatus: __expectString,
    FromEmailAddress: __expectString,
    ReportId: __expectString,
    ReportName: __expectString,
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeliverabilityTestReports
 */
const de_DeliverabilityTestReports = (output: any, context: __SerdeContext): DeliverabilityTestReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeliverabilityTestReport(entry, context);
    });
  return retVal;
};

// de_DeliveryOptions omitted.

/**
 * deserializeAws_restJson1DkimAttributes
 */
const de_DkimAttributes = (output: any, context: __SerdeContext): DkimAttributes => {
  return take(output, {
    CurrentSigningKeyLength: __expectString,
    LastKeyGenerationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextSigningKeyLength: __expectString,
    SigningAttributesOrigin: __expectString,
    SigningEnabled: __expectBoolean,
    Status: __expectString,
    Tokens: _json,
  }) as any;
};

// de_DnsTokenList omitted.

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaign
 */
const de_DomainDeliverabilityCampaign = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign => {
  return take(output, {
    CampaignId: __expectString,
    DeleteRate: __limitedParseDouble,
    Esps: _json,
    FirstSeenDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FromAddress: __expectString,
    ImageUrl: __expectString,
    InboxCount: __expectLong,
    LastSeenDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectedVolume: __expectLong,
    ReadDeleteRate: __limitedParseDouble,
    ReadRate: __limitedParseDouble,
    SendingIps: _json,
    SpamCount: __expectLong,
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaignList
 */
const de_DomainDeliverabilityCampaignList = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    Domain: __expectString,
    InboxPlacementTrackingOption: _json,
    SubscriptionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
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
      return de_DomainDeliverabilityTrackingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainIspPlacement
 */
const de_DomainIspPlacement = (output: any, context: __SerdeContext): DomainIspPlacement => {
  return take(output, {
    InboxPercentage: __limitedParseDouble,
    InboxRawCount: __expectLong,
    IspName: __expectString,
    SpamPercentage: __limitedParseDouble,
    SpamRawCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainIspPlacements
 */
const de_DomainIspPlacements = (output: any, context: __SerdeContext): DomainIspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainIspPlacement(entry, context);
    });
  return retVal;
};

// de_EmailAddressFilterList omitted.

/**
 * deserializeAws_restJson1EmailInsights
 */
const de_EmailInsights = (output: any, context: __SerdeContext): EmailInsights => {
  return take(output, {
    Destination: __expectString,
    Events: (_: any) => de_InsightsEvents(_, context),
    Isp: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EmailInsightsList
 */
const de_EmailInsightsList = (output: any, context: __SerdeContext): EmailInsights[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EmailInsights(entry, context);
    });
  return retVal;
};

// de_EmailSubjectFilterList omitted.

// de_EmailTemplateContent omitted.

/**
 * deserializeAws_restJson1EmailTemplateMetadata
 */
const de_EmailTemplateMetadata = (output: any, context: __SerdeContext): EmailTemplateMetadata => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TemplateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EmailTemplateMetadataList
 */
const de_EmailTemplateMetadataList = (output: any, context: __SerdeContext): EmailTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EmailTemplateMetadata(entry, context);
    });
  return retVal;
};

// de_Esps omitted.

// de_EventDestination omitted.

// de_EventDestinations omitted.

// de_EventDetails omitted.

// de_EventTypes omitted.

/**
 * deserializeAws_restJson1ExportDataSource
 */
const de_ExportDataSource = (output: any, context: __SerdeContext): ExportDataSource => {
  return take(output, {
    MessageInsightsDataSource: (_: any) => de_MessageInsightsDataSource(_, context),
    MetricsDataSource: (_: any) => de_MetricsDataSource(_, context),
  }) as any;
};

// de_ExportDestination omitted.

// de_ExportDimensions omitted.

// de_ExportDimensionValue omitted.

/**
 * deserializeAws_restJson1ExportJobSummary
 */
const de_ExportJobSummary = (output: any, context: __SerdeContext): ExportJobSummary => {
  return take(output, {
    CompletedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportSourceType: __expectString,
    JobId: __expectString,
    JobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExportJobSummaryList
 */
const de_ExportJobSummaryList = (output: any, context: __SerdeContext): ExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportJobSummary(entry, context);
    });
  return retVal;
};

// de_ExportMetric omitted.

// de_ExportMetrics omitted.

// de_ExportStatistics omitted.

// de_FailureInfo omitted.

// de_GuardianAttributes omitted.

// de_GuardianOptions omitted.

// de_IdentityInfo omitted.

// de_IdentityInfoList omitted.

// de_ImportDataSource omitted.

// de_ImportDestination omitted.

/**
 * deserializeAws_restJson1ImportJobSummary
 */
const de_ImportJobSummary = (output: any, context: __SerdeContext): ImportJobSummary => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailedRecordsCount: __expectInt32,
    ImportDestination: _json,
    JobId: __expectString,
    JobStatus: __expectString,
    ProcessedRecordsCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportJobSummaryList
 */
const de_ImportJobSummaryList = (output: any, context: __SerdeContext): ImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportJobSummary(entry, context);
    });
  return retVal;
};

// de_InboxPlacementTrackingOption omitted.

/**
 * deserializeAws_restJson1InsightsEvent
 */
const de_InsightsEvent = (output: any, context: __SerdeContext): InsightsEvent => {
  return take(output, {
    Details: _json,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightsEvents
 */
const de_InsightsEvents = (output: any, context: __SerdeContext): InsightsEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightsEvent(entry, context);
    });
  return retVal;
};

// de_IpList omitted.

// de_IspFilterList omitted.

// de_IspNameList omitted.

/**
 * deserializeAws_restJson1IspPlacement
 */
const de_IspPlacement = (output: any, context: __SerdeContext): IspPlacement => {
  return take(output, {
    IspName: __expectString,
    PlacementStatistics: (_: any) => de_PlacementStatistics(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1IspPlacements
 */
const de_IspPlacements = (output: any, context: __SerdeContext): IspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IspPlacement(entry, context);
    });
  return retVal;
};

// de_KinesisFirehoseDestination omitted.

// de_LastDeliveryEventList omitted.

// de_LastEngagementEventList omitted.

/**
 * deserializeAws_restJson1ListOfContactLists
 */
const de_ListOfContactLists = (output: any, context: __SerdeContext): ContactList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Contact(entry, context);
    });
  return retVal;
};

// de_ListOfDedicatedIpPools omitted.

// de_MailFromAttributes omitted.

/**
 * deserializeAws_restJson1MessageInsightsDataSource
 */
const de_MessageInsightsDataSource = (output: any, context: __SerdeContext): MessageInsightsDataSource => {
  return take(output, {
    EndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Exclude: _json,
    Include: _json,
    MaxResults: __expectInt32,
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MessageInsightsFilters omitted.

// de_MessageTag omitted.

// de_MessageTagList omitted.

// de_MetricDataError omitted.

// de_MetricDataErrorList omitted.

/**
 * deserializeAws_restJson1MetricDataResult
 */
const de_MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  return take(output, {
    Id: __expectString,
    Timestamps: (_: any) => de_TimestampList(_, context),
    Values: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MetricDataResultList
 */
const de_MetricDataResultList = (output: any, context: __SerdeContext): MetricDataResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricsDataSource
 */
const de_MetricsDataSource = (output: any, context: __SerdeContext): MetricsDataSource => {
  return take(output, {
    Dimensions: _json,
    EndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: _json,
    Namespace: __expectString,
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MetricValueList omitted.

/**
 * deserializeAws_restJson1OverallVolume
 */
const de_OverallVolume = (output: any, context: __SerdeContext): OverallVolume => {
  return take(output, {
    DomainIspPlacements: (_: any) => de_DomainIspPlacements(_, context),
    ReadRatePercent: __limitedParseDouble,
    VolumeStatistics: _json,
  }) as any;
};

// de_PinpointDestination omitted.

/**
 * deserializeAws_restJson1PlacementStatistics
 */
const de_PlacementStatistics = (output: any, context: __SerdeContext): PlacementStatistics => {
  return take(output, {
    DkimPercentage: __limitedParseDouble,
    InboxPercentage: __limitedParseDouble,
    MissingPercentage: __limitedParseDouble,
    SpamPercentage: __limitedParseDouble,
    SpfPercentage: __limitedParseDouble,
  }) as any;
};

// de_PolicyMap omitted.

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Impact: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecommendationsList
 */
const de_RecommendationsList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReputationOptions
 */
const de_ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  return take(output, {
    LastFreshStart: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReputationMetricsEnabled: __expectBoolean,
  }) as any;
};

// de_ReviewDetails omitted.

// de_SendingOptions omitted.

/**
 * deserializeAws_restJson1SendQuota
 */
const de_SendQuota = (output: any, context: __SerdeContext): SendQuota => {
  return take(output, {
    Max24HourSend: __limitedParseDouble,
    MaxSendRate: __limitedParseDouble,
    SentLast24Hours: __limitedParseDouble,
  }) as any;
};

// de_SnsDestination omitted.

// de_SOARecord omitted.

/**
 * deserializeAws_restJson1SuppressedDestination
 */
const de_SuppressedDestination = (output: any, context: __SerdeContext): SuppressedDestination => {
  return take(output, {
    Attributes: _json,
    EmailAddress: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Reason: __expectString,
  }) as any;
};

// de_SuppressedDestinationAttributes omitted.

/**
 * deserializeAws_restJson1SuppressedDestinationSummaries
 */
const de_SuppressedDestinationSummaries = (output: any, context: __SerdeContext): SuppressedDestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuppressedDestinationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SuppressedDestinationSummary
 */
const de_SuppressedDestinationSummary = (output: any, context: __SerdeContext): SuppressedDestinationSummary => {
  return take(output, {
    EmailAddress: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Reason: __expectString,
  }) as any;
};

// de_SuppressionAttributes omitted.

// de_SuppressionListDestination omitted.

// de_SuppressionListReasons omitted.

// de_SuppressionOptions omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_Topic omitted.

// de_TopicPreference omitted.

// de_TopicPreferenceList omitted.

// de_Topics omitted.

// de_TrackingOptions omitted.

// de_VdmAttributes omitted.

// de_VdmOptions omitted.

/**
 * deserializeAws_restJson1VerificationInfo
 */
const de_VerificationInfo = (output: any, context: __SerdeContext): VerificationInfo => {
  return take(output, {
    ErrorType: __expectString,
    LastCheckedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SOARecord: _json,
  }) as any;
};

// de_VolumeStatistics omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _BIN = "BlacklistItemNames";
const _ED = "EndDate";
const _NT = "NextToken";
const _PN = "PoolName";
const _PS = "PageSize";
const _R = "Reasons";
const _RA = "ResourceArn";
const _Re = "Reason";
const _SD = "StartDate";
const _TK = "TagKeys";
