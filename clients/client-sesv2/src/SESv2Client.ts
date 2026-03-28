// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultSESv2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchGetMetricDataCommandInput,
  BatchGetMetricDataCommandOutput,
} from "./commands/BatchGetMetricDataCommand";
import type { CancelExportJobCommandInput, CancelExportJobCommandOutput } from "./commands/CancelExportJobCommand";
import type {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import type {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import type { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import type {
  CreateContactListCommandInput,
  CreateContactListCommandOutput,
} from "./commands/CreateContactListCommand";
import type {
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/CreateCustomVerificationEmailTemplateCommand";
import type {
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "./commands/CreateDedicatedIpPoolCommand";
import type {
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "./commands/CreateDeliverabilityTestReportCommand";
import type {
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "./commands/CreateEmailIdentityCommand";
import type {
  CreateEmailIdentityPolicyCommandInput,
  CreateEmailIdentityPolicyCommandOutput,
} from "./commands/CreateEmailIdentityPolicyCommand";
import type {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "./commands/CreateEmailTemplateCommand";
import type { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "./commands/CreateExportJobCommand";
import type { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "./commands/CreateImportJobCommand";
import type {
  CreateMultiRegionEndpointCommandInput,
  CreateMultiRegionEndpointCommandOutput,
} from "./commands/CreateMultiRegionEndpointCommand";
import type { CreateTenantCommandInput, CreateTenantCommandOutput } from "./commands/CreateTenantCommand";
import type {
  CreateTenantResourceAssociationCommandInput,
  CreateTenantResourceAssociationCommandOutput,
} from "./commands/CreateTenantResourceAssociationCommand";
import type {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import type {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import type { DeleteContactCommandInput, DeleteContactCommandOutput } from "./commands/DeleteContactCommand";
import type {
  DeleteContactListCommandInput,
  DeleteContactListCommandOutput,
} from "./commands/DeleteContactListCommand";
import type {
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import type {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "./commands/DeleteDedicatedIpPoolCommand";
import type {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "./commands/DeleteEmailIdentityCommand";
import type {
  DeleteEmailIdentityPolicyCommandInput,
  DeleteEmailIdentityPolicyCommandOutput,
} from "./commands/DeleteEmailIdentityPolicyCommand";
import type {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "./commands/DeleteEmailTemplateCommand";
import type {
  DeleteMultiRegionEndpointCommandInput,
  DeleteMultiRegionEndpointCommandOutput,
} from "./commands/DeleteMultiRegionEndpointCommand";
import type {
  DeleteSuppressedDestinationCommandInput,
  DeleteSuppressedDestinationCommandOutput,
} from "./commands/DeleteSuppressedDestinationCommand";
import type { DeleteTenantCommandInput, DeleteTenantCommandOutput } from "./commands/DeleteTenantCommand";
import type {
  DeleteTenantResourceAssociationCommandInput,
  DeleteTenantResourceAssociationCommandOutput,
} from "./commands/DeleteTenantResourceAssociationCommand";
import type { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import type {
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "./commands/GetBlacklistReportsCommand";
import type {
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "./commands/GetConfigurationSetCommand";
import type {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import type { GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import type { GetContactListCommandInput, GetContactListCommandOutput } from "./commands/GetContactListCommand";
import type {
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "./commands/GetCustomVerificationEmailTemplateCommand";
import type { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "./commands/GetDedicatedIpCommand";
import type {
  GetDedicatedIpPoolCommandInput,
  GetDedicatedIpPoolCommandOutput,
} from "./commands/GetDedicatedIpPoolCommand";
import type { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "./commands/GetDedicatedIpsCommand";
import type {
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "./commands/GetDeliverabilityDashboardOptionsCommand";
import type {
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "./commands/GetDeliverabilityTestReportCommand";
import type {
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "./commands/GetDomainDeliverabilityCampaignCommand";
import type {
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "./commands/GetDomainStatisticsReportCommand";
import type {
  GetEmailAddressInsightsCommandInput,
  GetEmailAddressInsightsCommandOutput,
} from "./commands/GetEmailAddressInsightsCommand";
import type { GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput } from "./commands/GetEmailIdentityCommand";
import type {
  GetEmailIdentityPoliciesCommandInput,
  GetEmailIdentityPoliciesCommandOutput,
} from "./commands/GetEmailIdentityPoliciesCommand";
import type { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "./commands/GetEmailTemplateCommand";
import type { GetExportJobCommandInput, GetExportJobCommandOutput } from "./commands/GetExportJobCommand";
import type { GetImportJobCommandInput, GetImportJobCommandOutput } from "./commands/GetImportJobCommand";
import type {
  GetMessageInsightsCommandInput,
  GetMessageInsightsCommandOutput,
} from "./commands/GetMessageInsightsCommand";
import type {
  GetMultiRegionEndpointCommandInput,
  GetMultiRegionEndpointCommandOutput,
} from "./commands/GetMultiRegionEndpointCommand";
import type {
  GetReputationEntityCommandInput,
  GetReputationEntityCommandOutput,
} from "./commands/GetReputationEntityCommand";
import type {
  GetSuppressedDestinationCommandInput,
  GetSuppressedDestinationCommandOutput,
} from "./commands/GetSuppressedDestinationCommand";
import type { GetTenantCommandInput, GetTenantCommandOutput } from "./commands/GetTenantCommand";
import type {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import type { ListContactListsCommandInput, ListContactListsCommandOutput } from "./commands/ListContactListsCommand";
import type { ListContactsCommandInput, ListContactsCommandOutput } from "./commands/ListContactsCommand";
import type {
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "./commands/ListCustomVerificationEmailTemplatesCommand";
import type {
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "./commands/ListDedicatedIpPoolsCommand";
import type {
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "./commands/ListDeliverabilityTestReportsCommand";
import type {
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "./commands/ListDomainDeliverabilityCampaignsCommand";
import type {
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "./commands/ListEmailIdentitiesCommand";
import type {
  ListEmailTemplatesCommandInput,
  ListEmailTemplatesCommandOutput,
} from "./commands/ListEmailTemplatesCommand";
import type { ListExportJobsCommandInput, ListExportJobsCommandOutput } from "./commands/ListExportJobsCommand";
import type { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "./commands/ListImportJobsCommand";
import type {
  ListMultiRegionEndpointsCommandInput,
  ListMultiRegionEndpointsCommandOutput,
} from "./commands/ListMultiRegionEndpointsCommand";
import type {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import type {
  ListReputationEntitiesCommandInput,
  ListReputationEntitiesCommandOutput,
} from "./commands/ListReputationEntitiesCommand";
import type {
  ListResourceTenantsCommandInput,
  ListResourceTenantsCommandOutput,
} from "./commands/ListResourceTenantsCommand";
import type {
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "./commands/ListSuppressedDestinationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTenantResourcesCommandInput,
  ListTenantResourcesCommandOutput,
} from "./commands/ListTenantResourcesCommand";
import type { ListTenantsCommandInput, ListTenantsCommandOutput } from "./commands/ListTenantsCommand";
import type {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import type {
  PutAccountDetailsCommandInput,
  PutAccountDetailsCommandOutput,
} from "./commands/PutAccountDetailsCommand";
import type {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "./commands/PutAccountSendingAttributesCommand";
import type {
  PutAccountSuppressionAttributesCommandInput,
  PutAccountSuppressionAttributesCommandOutput,
} from "./commands/PutAccountSuppressionAttributesCommand";
import type {
  PutAccountVdmAttributesCommandInput,
  PutAccountVdmAttributesCommandOutput,
} from "./commands/PutAccountVdmAttributesCommand";
import type {
  PutConfigurationSetArchivingOptionsCommandInput,
  PutConfigurationSetArchivingOptionsCommandOutput,
} from "./commands/PutConfigurationSetArchivingOptionsCommand";
import type {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import type {
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "./commands/PutConfigurationSetReputationOptionsCommand";
import type {
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "./commands/PutConfigurationSetSendingOptionsCommand";
import type {
  PutConfigurationSetSuppressionOptionsCommandInput,
  PutConfigurationSetSuppressionOptionsCommandOutput,
} from "./commands/PutConfigurationSetSuppressionOptionsCommand";
import type {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/PutConfigurationSetTrackingOptionsCommand";
import type {
  PutConfigurationSetVdmOptionsCommandInput,
  PutConfigurationSetVdmOptionsCommandOutput,
} from "./commands/PutConfigurationSetVdmOptionsCommand";
import type {
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "./commands/PutDedicatedIpInPoolCommand";
import type {
  PutDedicatedIpPoolScalingAttributesCommandInput,
  PutDedicatedIpPoolScalingAttributesCommandOutput,
} from "./commands/PutDedicatedIpPoolScalingAttributesCommand";
import type {
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutDedicatedIpWarmupAttributesCommand";
import type {
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "./commands/PutDeliverabilityDashboardOptionCommand";
import type {
  PutEmailIdentityConfigurationSetAttributesCommandInput,
  PutEmailIdentityConfigurationSetAttributesCommandOutput,
} from "./commands/PutEmailIdentityConfigurationSetAttributesCommand";
import type {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimAttributesCommand";
import type {
  PutEmailIdentityDkimSigningAttributesCommandInput,
  PutEmailIdentityDkimSigningAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimSigningAttributesCommand";
import type {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import type {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "./commands/PutEmailIdentityMailFromAttributesCommand";
import type {
  PutSuppressedDestinationCommandInput,
  PutSuppressedDestinationCommandOutput,
} from "./commands/PutSuppressedDestinationCommand";
import type { SendBulkEmailCommandInput, SendBulkEmailCommandOutput } from "./commands/SendBulkEmailCommand";
import type {
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "./commands/SendCustomVerificationEmailCommand";
import type { SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestRenderEmailTemplateCommandInput,
  TestRenderEmailTemplateCommandOutput,
} from "./commands/TestRenderEmailTemplateCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import type { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import type {
  UpdateContactListCommandInput,
  UpdateContactListCommandOutput,
} from "./commands/UpdateContactListCommand";
import type {
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import type {
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
} from "./commands/UpdateEmailIdentityPolicyCommand";
import type {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "./commands/UpdateEmailTemplateCommand";
import type {
  UpdateReputationEntityCustomerManagedStatusCommandInput,
  UpdateReputationEntityCustomerManagedStatusCommandOutput,
} from "./commands/UpdateReputationEntityCustomerManagedStatusCommand";
import type {
  UpdateReputationEntityPolicyCommandInput,
  UpdateReputationEntityPolicyCommandOutput,
} from "./commands/UpdateReputationEntityPolicyCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetMetricDataCommandInput
  | CancelExportJobCommandInput
  | CreateConfigurationSetCommandInput
  | CreateConfigurationSetEventDestinationCommandInput
  | CreateContactCommandInput
  | CreateContactListCommandInput
  | CreateCustomVerificationEmailTemplateCommandInput
  | CreateDedicatedIpPoolCommandInput
  | CreateDeliverabilityTestReportCommandInput
  | CreateEmailIdentityCommandInput
  | CreateEmailIdentityPolicyCommandInput
  | CreateEmailTemplateCommandInput
  | CreateExportJobCommandInput
  | CreateImportJobCommandInput
  | CreateMultiRegionEndpointCommandInput
  | CreateTenantCommandInput
  | CreateTenantResourceAssociationCommandInput
  | DeleteConfigurationSetCommandInput
  | DeleteConfigurationSetEventDestinationCommandInput
  | DeleteContactCommandInput
  | DeleteContactListCommandInput
  | DeleteCustomVerificationEmailTemplateCommandInput
  | DeleteDedicatedIpPoolCommandInput
  | DeleteEmailIdentityCommandInput
  | DeleteEmailIdentityPolicyCommandInput
  | DeleteEmailTemplateCommandInput
  | DeleteMultiRegionEndpointCommandInput
  | DeleteSuppressedDestinationCommandInput
  | DeleteTenantCommandInput
  | DeleteTenantResourceAssociationCommandInput
  | GetAccountCommandInput
  | GetBlacklistReportsCommandInput
  | GetConfigurationSetCommandInput
  | GetConfigurationSetEventDestinationsCommandInput
  | GetContactCommandInput
  | GetContactListCommandInput
  | GetCustomVerificationEmailTemplateCommandInput
  | GetDedicatedIpCommandInput
  | GetDedicatedIpPoolCommandInput
  | GetDedicatedIpsCommandInput
  | GetDeliverabilityDashboardOptionsCommandInput
  | GetDeliverabilityTestReportCommandInput
  | GetDomainDeliverabilityCampaignCommandInput
  | GetDomainStatisticsReportCommandInput
  | GetEmailAddressInsightsCommandInput
  | GetEmailIdentityCommandInput
  | GetEmailIdentityPoliciesCommandInput
  | GetEmailTemplateCommandInput
  | GetExportJobCommandInput
  | GetImportJobCommandInput
  | GetMessageInsightsCommandInput
  | GetMultiRegionEndpointCommandInput
  | GetReputationEntityCommandInput
  | GetSuppressedDestinationCommandInput
  | GetTenantCommandInput
  | ListConfigurationSetsCommandInput
  | ListContactListsCommandInput
  | ListContactsCommandInput
  | ListCustomVerificationEmailTemplatesCommandInput
  | ListDedicatedIpPoolsCommandInput
  | ListDeliverabilityTestReportsCommandInput
  | ListDomainDeliverabilityCampaignsCommandInput
  | ListEmailIdentitiesCommandInput
  | ListEmailTemplatesCommandInput
  | ListExportJobsCommandInput
  | ListImportJobsCommandInput
  | ListMultiRegionEndpointsCommandInput
  | ListRecommendationsCommandInput
  | ListReputationEntitiesCommandInput
  | ListResourceTenantsCommandInput
  | ListSuppressedDestinationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTenantResourcesCommandInput
  | ListTenantsCommandInput
  | PutAccountDedicatedIpWarmupAttributesCommandInput
  | PutAccountDetailsCommandInput
  | PutAccountSendingAttributesCommandInput
  | PutAccountSuppressionAttributesCommandInput
  | PutAccountVdmAttributesCommandInput
  | PutConfigurationSetArchivingOptionsCommandInput
  | PutConfigurationSetDeliveryOptionsCommandInput
  | PutConfigurationSetReputationOptionsCommandInput
  | PutConfigurationSetSendingOptionsCommandInput
  | PutConfigurationSetSuppressionOptionsCommandInput
  | PutConfigurationSetTrackingOptionsCommandInput
  | PutConfigurationSetVdmOptionsCommandInput
  | PutDedicatedIpInPoolCommandInput
  | PutDedicatedIpPoolScalingAttributesCommandInput
  | PutDedicatedIpWarmupAttributesCommandInput
  | PutDeliverabilityDashboardOptionCommandInput
  | PutEmailIdentityConfigurationSetAttributesCommandInput
  | PutEmailIdentityDkimAttributesCommandInput
  | PutEmailIdentityDkimSigningAttributesCommandInput
  | PutEmailIdentityFeedbackAttributesCommandInput
  | PutEmailIdentityMailFromAttributesCommandInput
  | PutSuppressedDestinationCommandInput
  | SendBulkEmailCommandInput
  | SendCustomVerificationEmailCommandInput
  | SendEmailCommandInput
  | TagResourceCommandInput
  | TestRenderEmailTemplateCommandInput
  | UntagResourceCommandInput
  | UpdateConfigurationSetEventDestinationCommandInput
  | UpdateContactCommandInput
  | UpdateContactListCommandInput
  | UpdateCustomVerificationEmailTemplateCommandInput
  | UpdateEmailIdentityPolicyCommandInput
  | UpdateEmailTemplateCommandInput
  | UpdateReputationEntityCustomerManagedStatusCommandInput
  | UpdateReputationEntityPolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetMetricDataCommandOutput
  | CancelExportJobCommandOutput
  | CreateConfigurationSetCommandOutput
  | CreateConfigurationSetEventDestinationCommandOutput
  | CreateContactCommandOutput
  | CreateContactListCommandOutput
  | CreateCustomVerificationEmailTemplateCommandOutput
  | CreateDedicatedIpPoolCommandOutput
  | CreateDeliverabilityTestReportCommandOutput
  | CreateEmailIdentityCommandOutput
  | CreateEmailIdentityPolicyCommandOutput
  | CreateEmailTemplateCommandOutput
  | CreateExportJobCommandOutput
  | CreateImportJobCommandOutput
  | CreateMultiRegionEndpointCommandOutput
  | CreateTenantCommandOutput
  | CreateTenantResourceAssociationCommandOutput
  | DeleteConfigurationSetCommandOutput
  | DeleteConfigurationSetEventDestinationCommandOutput
  | DeleteContactCommandOutput
  | DeleteContactListCommandOutput
  | DeleteCustomVerificationEmailTemplateCommandOutput
  | DeleteDedicatedIpPoolCommandOutput
  | DeleteEmailIdentityCommandOutput
  | DeleteEmailIdentityPolicyCommandOutput
  | DeleteEmailTemplateCommandOutput
  | DeleteMultiRegionEndpointCommandOutput
  | DeleteSuppressedDestinationCommandOutput
  | DeleteTenantCommandOutput
  | DeleteTenantResourceAssociationCommandOutput
  | GetAccountCommandOutput
  | GetBlacklistReportsCommandOutput
  | GetConfigurationSetCommandOutput
  | GetConfigurationSetEventDestinationsCommandOutput
  | GetContactCommandOutput
  | GetContactListCommandOutput
  | GetCustomVerificationEmailTemplateCommandOutput
  | GetDedicatedIpCommandOutput
  | GetDedicatedIpPoolCommandOutput
  | GetDedicatedIpsCommandOutput
  | GetDeliverabilityDashboardOptionsCommandOutput
  | GetDeliverabilityTestReportCommandOutput
  | GetDomainDeliverabilityCampaignCommandOutput
  | GetDomainStatisticsReportCommandOutput
  | GetEmailAddressInsightsCommandOutput
  | GetEmailIdentityCommandOutput
  | GetEmailIdentityPoliciesCommandOutput
  | GetEmailTemplateCommandOutput
  | GetExportJobCommandOutput
  | GetImportJobCommandOutput
  | GetMessageInsightsCommandOutput
  | GetMultiRegionEndpointCommandOutput
  | GetReputationEntityCommandOutput
  | GetSuppressedDestinationCommandOutput
  | GetTenantCommandOutput
  | ListConfigurationSetsCommandOutput
  | ListContactListsCommandOutput
  | ListContactsCommandOutput
  | ListCustomVerificationEmailTemplatesCommandOutput
  | ListDedicatedIpPoolsCommandOutput
  | ListDeliverabilityTestReportsCommandOutput
  | ListDomainDeliverabilityCampaignsCommandOutput
  | ListEmailIdentitiesCommandOutput
  | ListEmailTemplatesCommandOutput
  | ListExportJobsCommandOutput
  | ListImportJobsCommandOutput
  | ListMultiRegionEndpointsCommandOutput
  | ListRecommendationsCommandOutput
  | ListReputationEntitiesCommandOutput
  | ListResourceTenantsCommandOutput
  | ListSuppressedDestinationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTenantResourcesCommandOutput
  | ListTenantsCommandOutput
  | PutAccountDedicatedIpWarmupAttributesCommandOutput
  | PutAccountDetailsCommandOutput
  | PutAccountSendingAttributesCommandOutput
  | PutAccountSuppressionAttributesCommandOutput
  | PutAccountVdmAttributesCommandOutput
  | PutConfigurationSetArchivingOptionsCommandOutput
  | PutConfigurationSetDeliveryOptionsCommandOutput
  | PutConfigurationSetReputationOptionsCommandOutput
  | PutConfigurationSetSendingOptionsCommandOutput
  | PutConfigurationSetSuppressionOptionsCommandOutput
  | PutConfigurationSetTrackingOptionsCommandOutput
  | PutConfigurationSetVdmOptionsCommandOutput
  | PutDedicatedIpInPoolCommandOutput
  | PutDedicatedIpPoolScalingAttributesCommandOutput
  | PutDedicatedIpWarmupAttributesCommandOutput
  | PutDeliverabilityDashboardOptionCommandOutput
  | PutEmailIdentityConfigurationSetAttributesCommandOutput
  | PutEmailIdentityDkimAttributesCommandOutput
  | PutEmailIdentityDkimSigningAttributesCommandOutput
  | PutEmailIdentityFeedbackAttributesCommandOutput
  | PutEmailIdentityMailFromAttributesCommandOutput
  | PutSuppressedDestinationCommandOutput
  | SendBulkEmailCommandOutput
  | SendCustomVerificationEmailCommandOutput
  | SendEmailCommandOutput
  | TagResourceCommandOutput
  | TestRenderEmailTemplateCommandOutput
  | UntagResourceCommandOutput
  | UpdateConfigurationSetEventDestinationCommandOutput
  | UpdateContactCommandOutput
  | UpdateContactListCommandOutput
  | UpdateCustomVerificationEmailTemplateCommandOutput
  | UpdateEmailIdentityPolicyCommandOutput
  | UpdateEmailTemplateCommandOutput
  | UpdateReputationEntityCustomerManagedStatusCommandOutput
  | UpdateReputationEntityPolicyCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SESv2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SESv2Client class constructor that set the region, credentials and other options.
 */
export interface SESv2ClientConfig extends SESv2ClientConfigType {}

/**
 * @public
 */
export type SESv2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SESv2Client class. This is resolved and normalized from the {@link SESv2ClientConfig | constructor configuration interface}.
 */
export interface SESv2ClientResolvedConfig extends SESv2ClientResolvedConfigType {}

/**
 * <fullname>Amazon SES API v2</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that
 *             you can use to send email messages to your customers.</p>
 *          <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
 *                 Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
 *             and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
 * @public
 */
export class SESv2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SESv2ClientResolvedConfig
> {
  /**
   * The resolved configuration of SESv2Client class. This is resolved and normalized from the {@link SESv2ClientConfig | constructor configuration interface}.
   */
  readonly config: SESv2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SESv2ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultSESv2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SESv2ClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
