// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetMetricDataCommand,
  BatchGetMetricDataCommandInput,
  BatchGetMetricDataCommandOutput,
} from "./commands/BatchGetMetricDataCommand";
import {
  CancelExportJobCommand,
  CancelExportJobCommandInput,
  CancelExportJobCommandOutput,
} from "./commands/CancelExportJobCommand";
import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateContactCommand,
  CreateContactCommandInput,
  CreateContactCommandOutput,
} from "./commands/CreateContactCommand";
import {
  CreateContactListCommand,
  CreateContactListCommandInput,
  CreateContactListCommandOutput,
} from "./commands/CreateContactListCommand";
import {
  CreateCustomVerificationEmailTemplateCommand,
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/CreateCustomVerificationEmailTemplateCommand";
import {
  CreateDedicatedIpPoolCommand,
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "./commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommand,
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "./commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommand,
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "./commands/CreateEmailIdentityCommand";
import {
  CreateEmailIdentityPolicyCommand,
  CreateEmailIdentityPolicyCommandInput,
  CreateEmailIdentityPolicyCommandOutput,
} from "./commands/CreateEmailIdentityPolicyCommand";
import {
  CreateEmailTemplateCommand,
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "./commands/CreateEmailTemplateCommand";
import {
  CreateExportJobCommand,
  CreateExportJobCommandInput,
  CreateExportJobCommandOutput,
} from "./commands/CreateExportJobCommand";
import {
  CreateImportJobCommand,
  CreateImportJobCommandInput,
  CreateImportJobCommandOutput,
} from "./commands/CreateImportJobCommand";
import {
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteContactCommand,
  DeleteContactCommandInput,
  DeleteContactCommandOutput,
} from "./commands/DeleteContactCommand";
import {
  DeleteContactListCommand,
  DeleteContactListCommandInput,
  DeleteContactListCommandOutput,
} from "./commands/DeleteContactListCommand";
import {
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import {
  DeleteDedicatedIpPoolCommand,
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "./commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "./commands/DeleteEmailIdentityCommand";
import {
  DeleteEmailIdentityPolicyCommand,
  DeleteEmailIdentityPolicyCommandInput,
  DeleteEmailIdentityPolicyCommandOutput,
} from "./commands/DeleteEmailIdentityPolicyCommand";
import {
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "./commands/DeleteEmailTemplateCommand";
import {
  DeleteSuppressedDestinationCommand,
  DeleteSuppressedDestinationCommandInput,
  DeleteSuppressedDestinationCommandOutput,
} from "./commands/DeleteSuppressedDestinationCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import {
  GetBlacklistReportsCommand,
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "./commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommand,
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "./commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetContactCommand, GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import {
  GetContactListCommand,
  GetContactListCommandInput,
  GetContactListCommandOutput,
} from "./commands/GetContactListCommand";
import {
  GetCustomVerificationEmailTemplateCommand,
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "./commands/GetCustomVerificationEmailTemplateCommand";
import {
  GetDedicatedIpCommand,
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput,
} from "./commands/GetDedicatedIpCommand";
import {
  GetDedicatedIpPoolCommand,
  GetDedicatedIpPoolCommandInput,
  GetDedicatedIpPoolCommandOutput,
} from "./commands/GetDedicatedIpPoolCommand";
import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "./commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "./commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommand,
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "./commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommand,
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "./commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommand,
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "./commands/GetDomainStatisticsReportCommand";
import {
  GetEmailIdentityCommand,
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput,
} from "./commands/GetEmailIdentityCommand";
import {
  GetEmailIdentityPoliciesCommand,
  GetEmailIdentityPoliciesCommandInput,
  GetEmailIdentityPoliciesCommandOutput,
} from "./commands/GetEmailIdentityPoliciesCommand";
import {
  GetEmailTemplateCommand,
  GetEmailTemplateCommandInput,
  GetEmailTemplateCommandOutput,
} from "./commands/GetEmailTemplateCommand";
import {
  GetExportJobCommand,
  GetExportJobCommandInput,
  GetExportJobCommandOutput,
} from "./commands/GetExportJobCommand";
import {
  GetImportJobCommand,
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
} from "./commands/GetImportJobCommand";
import {
  GetMessageInsightsCommand,
  GetMessageInsightsCommandInput,
  GetMessageInsightsCommandOutput,
} from "./commands/GetMessageInsightsCommand";
import {
  GetSuppressedDestinationCommand,
  GetSuppressedDestinationCommandInput,
  GetSuppressedDestinationCommandOutput,
} from "./commands/GetSuppressedDestinationCommand";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListContactListsCommand,
  ListContactListsCommandInput,
  ListContactListsCommandOutput,
} from "./commands/ListContactListsCommand";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "./commands/ListContactsCommand";
import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "./commands/ListCustomVerificationEmailTemplatesCommand";
import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "./commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "./commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "./commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "./commands/ListEmailIdentitiesCommand";
import {
  ListEmailTemplatesCommand,
  ListEmailTemplatesCommandInput,
  ListEmailTemplatesCommandOutput,
} from "./commands/ListEmailTemplatesCommand";
import {
  ListExportJobsCommand,
  ListExportJobsCommandInput,
  ListExportJobsCommandOutput,
} from "./commands/ListExportJobsCommand";
import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "./commands/ListImportJobsCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  ListSuppressedDestinationsCommand,
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "./commands/ListSuppressedDestinationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountDetailsCommand,
  PutAccountDetailsCommandInput,
  PutAccountDetailsCommandOutput,
} from "./commands/PutAccountDetailsCommand";
import {
  PutAccountSendingAttributesCommand,
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "./commands/PutAccountSendingAttributesCommand";
import {
  PutAccountSuppressionAttributesCommand,
  PutAccountSuppressionAttributesCommandInput,
  PutAccountSuppressionAttributesCommandOutput,
} from "./commands/PutAccountSuppressionAttributesCommand";
import {
  PutAccountVdmAttributesCommand,
  PutAccountVdmAttributesCommandInput,
  PutAccountVdmAttributesCommandOutput,
} from "./commands/PutAccountVdmAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "./commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "./commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetSuppressionOptionsCommand,
  PutConfigurationSetSuppressionOptionsCommandInput,
  PutConfigurationSetSuppressionOptionsCommandOutput,
} from "./commands/PutConfigurationSetSuppressionOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutConfigurationSetVdmOptionsCommand,
  PutConfigurationSetVdmOptionsCommandInput,
  PutConfigurationSetVdmOptionsCommandOutput,
} from "./commands/PutConfigurationSetVdmOptionsCommand";
import {
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "./commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpPoolScalingAttributesCommand,
  PutDedicatedIpPoolScalingAttributesCommandInput,
  PutDedicatedIpPoolScalingAttributesCommandOutput,
} from "./commands/PutDedicatedIpPoolScalingAttributesCommand";
import {
  PutDedicatedIpWarmupAttributesCommand,
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommand,
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "./commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityConfigurationSetAttributesCommand,
  PutEmailIdentityConfigurationSetAttributesCommandInput,
  PutEmailIdentityConfigurationSetAttributesCommandOutput,
} from "./commands/PutEmailIdentityConfigurationSetAttributesCommand";
import {
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityDkimSigningAttributesCommand,
  PutEmailIdentityDkimSigningAttributesCommandInput,
  PutEmailIdentityDkimSigningAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimSigningAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommand,
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "./commands/PutEmailIdentityMailFromAttributesCommand";
import {
  PutSuppressedDestinationCommand,
  PutSuppressedDestinationCommandInput,
  PutSuppressedDestinationCommandOutput,
} from "./commands/PutSuppressedDestinationCommand";
import {
  SendBulkEmailCommand,
  SendBulkEmailCommandInput,
  SendBulkEmailCommandOutput,
} from "./commands/SendBulkEmailCommand";
import {
  SendCustomVerificationEmailCommand,
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestRenderEmailTemplateCommand,
  TestRenderEmailTemplateCommandInput,
  TestRenderEmailTemplateCommandOutput,
} from "./commands/TestRenderEmailTemplateCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import {
  UpdateContactCommand,
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
} from "./commands/UpdateContactCommand";
import {
  UpdateContactListCommand,
  UpdateContactListCommandInput,
  UpdateContactListCommandOutput,
} from "./commands/UpdateContactListCommand";
import {
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import {
  UpdateEmailIdentityPolicyCommand,
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
} from "./commands/UpdateEmailIdentityPolicyCommand";
import {
  UpdateEmailTemplateCommand,
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "./commands/UpdateEmailTemplateCommand";
import { SESv2Client, SESv2ClientConfig } from "./SESv2Client";

const commands = {
  BatchGetMetricDataCommand,
  CancelExportJobCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateContactCommand,
  CreateContactListCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateDedicatedIpPoolCommand,
  CreateDeliverabilityTestReportCommand,
  CreateEmailIdentityCommand,
  CreateEmailIdentityPolicyCommand,
  CreateEmailTemplateCommand,
  CreateExportJobCommand,
  CreateImportJobCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteContactCommand,
  DeleteContactListCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteDedicatedIpPoolCommand,
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityPolicyCommand,
  DeleteEmailTemplateCommand,
  DeleteSuppressedDestinationCommand,
  GetAccountCommand,
  GetBlacklistReportsCommand,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinationsCommand,
  GetContactCommand,
  GetContactListCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetDedicatedIpCommand,
  GetDedicatedIpPoolCommand,
  GetDedicatedIpsCommand,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityTestReportCommand,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainStatisticsReportCommand,
  GetEmailIdentityCommand,
  GetEmailIdentityPoliciesCommand,
  GetEmailTemplateCommand,
  GetExportJobCommand,
  GetImportJobCommand,
  GetMessageInsightsCommand,
  GetSuppressedDestinationCommand,
  ListConfigurationSetsCommand,
  ListContactListsCommand,
  ListContactsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListDedicatedIpPoolsCommand,
  ListDeliverabilityTestReportsCommand,
  ListDomainDeliverabilityCampaignsCommand,
  ListEmailIdentitiesCommand,
  ListEmailTemplatesCommand,
  ListExportJobsCommand,
  ListImportJobsCommand,
  ListRecommendationsCommand,
  ListSuppressedDestinationsCommand,
  ListTagsForResourceCommand,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDetailsCommand,
  PutAccountSendingAttributesCommand,
  PutAccountSuppressionAttributesCommand,
  PutAccountVdmAttributesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSuppressionOptionsCommand,
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetVdmOptionsCommand,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpPoolScalingAttributesCommand,
  PutDedicatedIpWarmupAttributesCommand,
  PutDeliverabilityDashboardOptionCommand,
  PutEmailIdentityConfigurationSetAttributesCommand,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimSigningAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityMailFromAttributesCommand,
  PutSuppressedDestinationCommand,
  SendBulkEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  TagResourceCommand,
  TestRenderEmailTemplateCommand,
  UntagResourceCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateContactCommand,
  UpdateContactListCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateEmailIdentityPolicyCommand,
  UpdateEmailTemplateCommand,
};

export interface SESv2 {
  /**
   * @see {@link BatchGetMetricDataCommand}
   */
  batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMetricDataCommandOutput>;
  batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    cb: (err: any, data?: BatchGetMetricDataCommandOutput) => void
  ): void;
  batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportJobCommand}
   */
  cancelExportJob(
    args: CancelExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportJobCommandOutput>;
  cancelExportJob(args: CancelExportJobCommandInput, cb: (err: any, data?: CancelExportJobCommandOutput) => void): void;
  cancelExportJob(
    args: CancelExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactCommand}
   */
  createContact(args: CreateContactCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactCommandOutput>;
  createContact(args: CreateContactCommandInput, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
  createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactListCommand}
   */
  createContactList(
    args: CreateContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactListCommandOutput>;
  createContactList(
    args: CreateContactListCommandInput,
    cb: (err: any, data?: CreateContactListCommandOutput) => void
  ): void;
  createContactList(
    args: CreateContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomVerificationEmailTemplateCommand}
   */
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomVerificationEmailTemplateCommandOutput>;
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDedicatedIpPoolCommand}
   */
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDedicatedIpPoolCommandOutput>;
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeliverabilityTestReportCommand}
   */
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliverabilityTestReportCommandOutput>;
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailIdentityCommand}
   */
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityCommandOutput>;
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailIdentityPolicyCommand}
   */
  createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityPolicyCommandOutput>;
  createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void
  ): void;
  createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailTemplateCommand}
   */
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailTemplateCommandOutput>;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportJobCommand}
   */
  createExportJob(
    args: CreateExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportJobCommandOutput>;
  createExportJob(args: CreateExportJobCommandInput, cb: (err: any, data?: CreateExportJobCommandOutput) => void): void;
  createExportJob(
    args: CreateExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportJobCommand}
   */
  createImportJob(
    args: CreateImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImportJobCommandOutput>;
  createImportJob(args: CreateImportJobCommandInput, cb: (err: any, data?: CreateImportJobCommandOutput) => void): void;
  createImportJob(
    args: CreateImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactCommand}
   */
  deleteContact(args: DeleteContactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactCommandOutput>;
  deleteContact(args: DeleteContactCommandInput, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
  deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactListCommand}
   */
  deleteContactList(
    args: DeleteContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactListCommandOutput>;
  deleteContactList(
    args: DeleteContactListCommandInput,
    cb: (err: any, data?: DeleteContactListCommandOutput) => void
  ): void;
  deleteContactList(
    args: DeleteContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomVerificationEmailTemplateCommand}
   */
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomVerificationEmailTemplateCommandOutput>;
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDedicatedIpPoolCommand}
   */
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDedicatedIpPoolCommandOutput>;
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailIdentityCommand}
   */
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityCommandOutput>;
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailIdentityPolicyCommand}
   */
  deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityPolicyCommandOutput>;
  deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void
  ): void;
  deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailTemplateCommand}
   */
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailTemplateCommandOutput>;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSuppressedDestinationCommand}
   */
  deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuppressedDestinationCommandOutput>;
  deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    cb: (err: any, data?: DeleteSuppressedDestinationCommandOutput) => void
  ): void;
  deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuppressedDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlacklistReportsCommand}
   */
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlacklistReportsCommandOutput>;
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetCommand}
   */
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetCommandOutput>;
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetEventDestinationsCommand}
   */
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactCommand}
   */
  getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactListCommand}
   */
  getContactList(
    args: GetContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactListCommandOutput>;
  getContactList(args: GetContactListCommandInput, cb: (err: any, data?: GetContactListCommandOutput) => void): void;
  getContactList(
    args: GetContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomVerificationEmailTemplateCommand}
   */
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput>;
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDedicatedIpCommand}
   */
  getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpCommandOutput>;
  getDedicatedIp(args: GetDedicatedIpCommandInput, cb: (err: any, data?: GetDedicatedIpCommandOutput) => void): void;
  getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDedicatedIpPoolCommand}
   */
  getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpPoolCommandOutput>;
  getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    cb: (err: any, data?: GetDedicatedIpPoolCommandOutput) => void
  ): void;
  getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDedicatedIpsCommand}
   */
  getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpsCommandOutput>;
  getDedicatedIps(args: GetDedicatedIpsCommandInput, cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void): void;
  getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverabilityDashboardOptionsCommand}
   */
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput>;
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverabilityTestReportCommand}
   */
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityTestReportCommandOutput>;
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainDeliverabilityCampaignCommand}
   */
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput>;
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainStatisticsReportCommand}
   */
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainStatisticsReportCommandOutput>;
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailIdentityCommand}
   */
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityCommandOutput>;
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailIdentityPoliciesCommand}
   */
  getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityPoliciesCommandOutput>;
  getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    cb: (err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void
  ): void;
  getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailTemplateCommand}
   */
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailTemplateCommandOutput>;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportJobCommand}
   */
  getExportJob(args: GetExportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetExportJobCommandOutput>;
  getExportJob(args: GetExportJobCommandInput, cb: (err: any, data?: GetExportJobCommandOutput) => void): void;
  getExportJob(
    args: GetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobCommand}
   */
  getImportJob(args: GetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetImportJobCommandOutput>;
  getImportJob(args: GetImportJobCommandInput, cb: (err: any, data?: GetImportJobCommandOutput) => void): void;
  getImportJob(
    args: GetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMessageInsightsCommand}
   */
  getMessageInsights(
    args: GetMessageInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessageInsightsCommandOutput>;
  getMessageInsights(
    args: GetMessageInsightsCommandInput,
    cb: (err: any, data?: GetMessageInsightsCommandOutput) => void
  ): void;
  getMessageInsights(
    args: GetMessageInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessageInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuppressedDestinationCommand}
   */
  getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuppressedDestinationCommandOutput>;
  getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    cb: (err: any, data?: GetSuppressedDestinationCommandOutput) => void
  ): void;
  getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuppressedDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactListsCommand}
   */
  listContactLists(
    args: ListContactListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactListsCommandOutput>;
  listContactLists(
    args: ListContactListsCommandInput,
    cb: (err: any, data?: ListContactListsCommandOutput) => void
  ): void;
  listContactLists(
    args: ListContactListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactsCommand}
   */
  listContacts(args: ListContactsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactsCommandOutput>;
  listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomVerificationEmailTemplatesCommand}
   */
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput>;
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDedicatedIpPoolsCommand}
   */
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDedicatedIpPoolsCommandOutput>;
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeliverabilityTestReportsCommand}
   */
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeliverabilityTestReportsCommandOutput>;
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainDeliverabilityCampaignsCommand}
   */
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput>;
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEmailIdentitiesCommand}
   */
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailIdentitiesCommandOutput>;
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEmailTemplatesCommand}
   */
  listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailTemplatesCommandOutput>;
  listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    cb: (err: any, data?: ListEmailTemplatesCommandOutput) => void
  ): void;
  listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportJobsCommand}
   */
  listExportJobs(
    args: ListExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportJobsCommandOutput>;
  listExportJobs(args: ListExportJobsCommandInput, cb: (err: any, data?: ListExportJobsCommandOutput) => void): void;
  listExportJobs(
    args: ListExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportJobsCommand}
   */
  listImportJobs(
    args: ListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportJobsCommandOutput>;
  listImportJobs(args: ListImportJobsCommandInput, cb: (err: any, data?: ListImportJobsCommandOutput) => void): void;
  listImportJobs(
    args: ListImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuppressedDestinationsCommand}
   */
  listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuppressedDestinationsCommandOutput>;
  listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    cb: (err: any, data?: ListSuppressedDestinationsCommandOutput) => void
  ): void;
  listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuppressedDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountDedicatedIpWarmupAttributesCommand}
   */
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput>;
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountDetailsCommand}
   */
  putAccountDetails(
    args: PutAccountDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDetailsCommandOutput>;
  putAccountDetails(
    args: PutAccountDetailsCommandInput,
    cb: (err: any, data?: PutAccountDetailsCommandOutput) => void
  ): void;
  putAccountDetails(
    args: PutAccountDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSendingAttributesCommand}
   */
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSendingAttributesCommandOutput>;
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSuppressionAttributesCommand}
   */
  putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSuppressionAttributesCommandOutput>;
  putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    cb: (err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void
  ): void;
  putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountVdmAttributesCommand}
   */
  putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountVdmAttributesCommandOutput>;
  putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    cb: (err: any, data?: PutAccountVdmAttributesCommandOutput) => void
  ): void;
  putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountVdmAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetDeliveryOptionsCommand}
   */
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetReputationOptionsCommand}
   */
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput>;
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetSendingOptionsCommand}
   */
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput>;
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetSuppressionOptionsCommand}
   */
  putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSuppressionOptionsCommandOutput>;
  putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void
  ): void;
  putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetTrackingOptionsCommand}
   */
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput>;
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetVdmOptionsCommand}
   */
  putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetVdmOptionsCommandOutput>;
  putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void
  ): void;
  putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDedicatedIpInPoolCommand}
   */
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpInPoolCommandOutput>;
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDedicatedIpPoolScalingAttributesCommand}
   */
  putDedicatedIpPoolScalingAttributes(
    args: PutDedicatedIpPoolScalingAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpPoolScalingAttributesCommandOutput>;
  putDedicatedIpPoolScalingAttributes(
    args: PutDedicatedIpPoolScalingAttributesCommandInput,
    cb: (err: any, data?: PutDedicatedIpPoolScalingAttributesCommandOutput) => void
  ): void;
  putDedicatedIpPoolScalingAttributes(
    args: PutDedicatedIpPoolScalingAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpPoolScalingAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDedicatedIpWarmupAttributesCommand}
   */
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput>;
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliverabilityDashboardOptionCommand}
   */
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput>;
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityConfigurationSetAttributesCommand}
   */
  putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput>;
  putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void
  ): void;
  putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityDkimAttributesCommand}
   */
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput>;
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityDkimSigningAttributesCommand}
   */
  putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput>;
  putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void
  ): void;
  putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityFeedbackAttributesCommand}
   */
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput>;
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityMailFromAttributesCommand}
   */
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput>;
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSuppressedDestinationCommand}
   */
  putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSuppressedDestinationCommandOutput>;
  putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    cb: (err: any, data?: PutSuppressedDestinationCommandOutput) => void
  ): void;
  putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSuppressedDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBulkEmailCommand}
   */
  sendBulkEmail(args: SendBulkEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendBulkEmailCommandOutput>;
  sendBulkEmail(args: SendBulkEmailCommandInput, cb: (err: any, data?: SendBulkEmailCommandOutput) => void): void;
  sendBulkEmail(
    args: SendBulkEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBulkEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendCustomVerificationEmailCommand}
   */
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCustomVerificationEmailCommandOutput>;
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEmailCommand}
   */
  sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
  sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
  sendEmail(
    args: SendEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestRenderEmailTemplateCommand}
   */
  testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRenderEmailTemplateCommandOutput>;
  testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    cb: (err: any, data?: TestRenderEmailTemplateCommandOutput) => void
  ): void;
  testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRenderEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
  updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
  updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactListCommand}
   */
  updateContactList(
    args: UpdateContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactListCommandOutput>;
  updateContactList(
    args: UpdateContactListCommandInput,
    cb: (err: any, data?: UpdateContactListCommandOutput) => void
  ): void;
  updateContactList(
    args: UpdateContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomVerificationEmailTemplateCommand}
   */
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomVerificationEmailTemplateCommandOutput>;
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailIdentityPolicyCommand}
   */
  updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailIdentityPolicyCommandOutput>;
  updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void
  ): void;
  updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailTemplateCommand}
   */
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailTemplateCommandOutput>;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon SES API v2</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that
 *             you can use to send email messages to your customers.</p>
 *          <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
 *                 Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
 *             and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
 */
export class SESv2 extends SESv2Client implements SESv2 {}
createAggregatedClient(commands, SESv2);
