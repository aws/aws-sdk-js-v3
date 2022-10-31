// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchGetMetricDataCommand,
  BatchGetMetricDataCommandInput,
  BatchGetMetricDataCommandOutput,
} from "./commands/BatchGetMetricDataCommand";
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
  GetImportJobCommand,
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
} from "./commands/GetImportJobCommand";
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
import { SESv2Client } from "./SESv2Client";

/**
 * <fullname>Amazon SES API v2</fullname>
 *
 *         <p>
 *             <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that
 *             you can use to send email messages to your customers.</p>
 *         <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
 *                 Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
 *             and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
 */
export class SESv2 extends SESv2Client {
  /**
   * <p>Retrieves batches of metric data collected based on your sending activity.</p>
   *         <p>You can execute this operation no more than 16 times per second,
   *             and with at most 160 queries from the batches per second (cumulative).</p>
   */
  public batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMetricDataCommandOutput>;
  public batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    cb: (err: any, data?: BatchGetMetricDataCommandOutput) => void
  ): void;
  public batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMetricDataCommandOutput) => void
  ): void;
  public batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetMetricDataCommandOutput) => void),
    cb?: (err: any, data?: BatchGetMetricDataCommandOutput) => void
  ): Promise<BatchGetMetricDataCommandOutput> | void {
    const command = new BatchGetMetricDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a configuration set. <i>Configuration sets</i> are groups of
   *             rules that you can apply to the emails that you send. You apply a configuration set to
   *             an email by specifying the name of the configuration set when you call the Amazon SES API v2. When
   *             you apply a configuration set to an email, all of the rules in that configuration set
   *             are applied to the email. </p>
   */
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): Promise<CreateConfigurationSetCommandOutput> | void {
    const command = new CreateConfigurationSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create an event destination. <i>Events</i> include message sends,
   *             deliveries, opens, clicks, bounces, and complaints. <i>Event
   *                 destinations</i> are places that you can send information about these events
   *             to. For example, you can send event data to Amazon SNS to receive notifications when you
   *             receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term
   *             storage.</p>
   *         <p>A single configuration set can include more than one event destination.</p>
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new CreateConfigurationSetEventDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a contact, which is an end-user who is receiving the email, and adds them to a
   *             contact list.</p>
   */
  public createContact(
    args: CreateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactCommandOutput>;
  public createContact(
    args: CreateContactCommandInput,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactCommandOutput) => void),
    cb?: (err: any, data?: CreateContactCommandOutput) => void
  ): Promise<CreateContactCommandOutput> | void {
    const command = new CreateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a contact list.</p>
   */
  public createContactList(
    args: CreateContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactListCommandOutput>;
  public createContactList(
    args: CreateContactListCommandInput,
    cb: (err: any, data?: CreateContactListCommandOutput) => void
  ): void;
  public createContactList(
    args: CreateContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactListCommandOutput) => void
  ): void;
  public createContactList(
    args: CreateContactListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactListCommandOutput) => void),
    cb?: (err: any, data?: CreateContactListCommandOutput) => void
  ): Promise<CreateContactListCommandOutput> | void {
    const command = new CreateContactListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new custom verification email template.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomVerificationEmailTemplateCommandOutput>;
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): Promise<CreateCustomVerificationEmailTemplateCommandOutput> | void {
    const command = new CreateCustomVerificationEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
   *             IP addresses that are associated with your Amazon Web Services account. You can associate a pool with
   *             a configuration set. When you send an email that uses that configuration set, the
   *             message is sent from one of the addresses in the associated pool.</p>
   */
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDedicatedIpPoolCommandOutput>;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  public createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDedicatedIpPoolCommandOutput) => void),
    cb?: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): Promise<CreateDedicatedIpPoolCommandOutput> | void {
    const command = new CreateDedicatedIpPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
   *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
   *             sample message that contains the content that you plan to send to your customers. Amazon SES
   *             then sends that message to special email addresses spread across several major email
   *             providers. After about 24 hours, the test is complete, and you can use the
   *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
   *             test.</p>
   */
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliverabilityTestReportCommandOutput>;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  public createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void),
    cb?: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): Promise<CreateDeliverabilityTestReportCommandOutput> | void {
    const command = new CreateDeliverabilityTestReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the process of verifying an email identity. An <i>identity</i> is
   *             an email address or domain that you use when you send email. Before you can use an
   *             identity to send email, you first have to verify it. By verifying an identity, you
   *             demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
   *             permission to send email from the identity.</p>
   *         <p>When you verify an email address, Amazon SES sends an email to the address. Your email
   *             address is verified as soon as you follow the link in the verification email.
   *
   *         </p>
   *         <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code>
   *             object, this operation provides a set of DKIM tokens. You can convert these tokens into
   *             CNAME records, which you then add to the DNS configuration for your domain. Your domain
   *             is verified when Amazon SES detects these records in the DNS configuration for your domain.
   *             This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
   *         <p>Alternatively, you can perform the verification process by providing your own
   *             public-private key pair. This verification method is known as Bring Your Own DKIM
   *             (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation
   *             has to include the <code>DkimSigningAttributes</code> object. When you specify this
   *             object, you provide a selector (a component of the DNS record name that identifies the
   *             public key to use for DKIM authentication) and a private key.</p>
   *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
   *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
   *             domain. Your domain is verified when Amazon SES detects these records in the DNS
   *             configuration for your domain. For some DNS providers, it can take 72 hours or more to
   *             complete the domain verification process.</p>
   *         <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
   */
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityCommandOutput>;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  public createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): Promise<CreateEmailIdentityCommandOutput> | void {
    const command = new CreateEmailIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the specified sending authorization policy for the given identity (an email
   *         address or a domain).</p>
   *         <note>
   *             <p>This API is for the identity owner only. If you have not verified the identity,
   *                 this API will return an error.</p>
   *         </note>
   *         <p>Sending authorization is a feature that enables an identity owner to authorize other
   *             senders to use its identities. For information about using sending authorization, see
   *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityPolicyCommandOutput>;
  public createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void
  ): void;
  public createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void
  ): void;
  public createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateEmailIdentityPolicyCommandOutput) => void
  ): Promise<CreateEmailIdentityPolicyCommandOutput> | void {
    const command = new CreateEmailIdentityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an email template. Email templates enable you to send personalized email to
   *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailTemplateCommandOutput>;
  public createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;
  public createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;
  public createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): Promise<CreateEmailTemplateCommandOutput> | void {
    const command = new CreateEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an import job for a data destination.</p>
   */
  public createImportJob(
    args: CreateImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImportJobCommandOutput>;
  public createImportJob(
    args: CreateImportJobCommandInput,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;
  public createImportJob(
    args: CreateImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;
  public createImportJob(
    args: CreateImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateImportJobCommandOutput) => void
  ): Promise<CreateImportJobCommandOutput> | void {
    const command = new CreateImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an existing configuration set.</p>
   *         <p>
   *             <i>Configuration sets</i> are groups of rules that you can apply to the
   *             emails you send. You apply a configuration set to an email by including a reference to
   *             the configuration set in the headers of the email. When you apply a configuration set to
   *             an email, all of the rules in that configuration set are applied to the email.</p>
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): Promise<DeleteConfigurationSetCommandOutput> | void {
    const command = new DeleteConfigurationSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an event destination.</p>
   *         <p>
   *             <i>Events</i> include message sends, deliveries, opens, clicks, bounces,
   *             and complaints. <i>Event destinations</i> are places that you can send
   *             information about these events to. For example, you can send event data to Amazon SNS to
   *             receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to
   *             stream data to Amazon S3 for long-term storage.</p>
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> | void {
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a contact from a contact list.</p>
   */
  public deleteContact(
    args: DeleteContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactCommandOutput>;
  public deleteContact(
    args: DeleteContactCommandInput,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContactCommandOutput) => void),
    cb?: (err: any, data?: DeleteContactCommandOutput) => void
  ): Promise<DeleteContactCommandOutput> | void {
    const command = new DeleteContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a contact list and all of the contacts on that list.</p>
   */
  public deleteContactList(
    args: DeleteContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactListCommandOutput>;
  public deleteContactList(
    args: DeleteContactListCommandInput,
    cb: (err: any, data?: DeleteContactListCommandOutput) => void
  ): void;
  public deleteContactList(
    args: DeleteContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactListCommandOutput) => void
  ): void;
  public deleteContactList(
    args: DeleteContactListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContactListCommandOutput) => void),
    cb?: (err: any, data?: DeleteContactListCommandOutput) => void
  ): Promise<DeleteContactListCommandOutput> | void {
    const command = new DeleteContactListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing custom verification email template.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomVerificationEmailTemplateCommandOutput>;
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> | void {
    const command = new DeleteCustomVerificationEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a dedicated IP pool.</p>
   */
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDedicatedIpPoolCommandOutput>;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  public deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void),
    cb?: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): Promise<DeleteDedicatedIpPoolCommandOutput> | void {
    const command = new DeleteDedicatedIpPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an email identity. An identity can be either an email address or a domain
   *             name.</p>
   */
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityCommandOutput>;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  public deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): Promise<DeleteEmailIdentityCommandOutput> | void {
    const command = new DeleteEmailIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified sending authorization policy for the given identity (an email
   *             address or a domain). This API returns successfully even if a policy with the specified
   *             name does not exist.</p>
   *         <note>
   *             <p>This API is for the identity owner only. If you have not verified the identity,
   *                 this API will return an error.</p>
   *         </note>
   *         <p>Sending authorization is a feature that enables an identity owner to authorize other
   *             senders to use its identities. For information about using sending authorization, see
   *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityPolicyCommandOutput>;
  public deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void
  ): void;
  public deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void
  ): void;
  public deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteEmailIdentityPolicyCommandOutput) => void
  ): Promise<DeleteEmailIdentityPolicyCommandOutput> | void {
    const command = new DeleteEmailIdentityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an email template.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailTemplateCommandOutput>;
  public deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;
  public deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;
  public deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): Promise<DeleteEmailTemplateCommandOutput> | void {
    const command = new DeleteEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an email address from the suppression list for your account.</p>
   */
  public deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuppressedDestinationCommandOutput>;
  public deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    cb: (err: any, data?: DeleteSuppressedDestinationCommandOutput) => void
  ): void;
  public deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuppressedDestinationCommandOutput) => void
  ): void;
  public deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSuppressedDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSuppressedDestinationCommandOutput) => void
  ): Promise<DeleteSuppressedDestinationCommandOutput> | void {
    const command = new DeleteSuppressedDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Obtain information about the email-sending status and capabilities of your Amazon SES
   *             account in the current Amazon Web Services Region.</p>
   */
  public getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  public getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  public getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAccountCommandOutput) => void
  ): Promise<GetAccountCommandOutput> | void {
    const command = new GetAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
   */
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlacklistReportsCommandOutput>;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  public getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlacklistReportsCommandOutput) => void),
    cb?: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): Promise<GetBlacklistReportsCommandOutput> | void {
    const command = new GetBlacklistReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about an existing configuration set, including the dedicated IP pool
   *             that it's associated with, whether or not it's enabled for sending email, and
   *             more.</p>
   *         <p>
   *             <i>Configuration sets</i> are groups of rules that you can apply to the
   *             emails you send. You apply a configuration set to an email by including a reference to
   *             the configuration set in the headers of the email. When you apply a configuration set to
   *             an email, all of the rules in that configuration set are applied to the email.</p>
   */
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetCommandOutput>;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  public getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): Promise<GetConfigurationSetCommandOutput> | void {
    const command = new GetConfigurationSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve a list of event destinations that are associated with a configuration
   *             set.</p>
   *         <p>
   *             <i>Events</i> include message sends, deliveries, opens, clicks, bounces,
   *             and complaints. <i>Event destinations</i> are places that you can send
   *             information about these events to. For example, you can send event data to Amazon SNS to
   *             receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to
   *             stream data to Amazon S3 for long-term storage.</p>
   */
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> | void {
    const command = new GetConfigurationSetEventDestinationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a contact from a contact list.</p>
   */
  public getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  public getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  public getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;
  public getContact(
    args: GetContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactCommandOutput) => void),
    cb?: (err: any, data?: GetContactCommandOutput) => void
  ): Promise<GetContactCommandOutput> | void {
    const command = new GetContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns contact list metadata. It does not return any information about the contacts
   *             present in the list.</p>
   */
  public getContactList(
    args: GetContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactListCommandOutput>;
  public getContactList(
    args: GetContactListCommandInput,
    cb: (err: any, data?: GetContactListCommandOutput) => void
  ): void;
  public getContactList(
    args: GetContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactListCommandOutput) => void
  ): void;
  public getContactList(
    args: GetContactListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactListCommandOutput) => void),
    cb?: (err: any, data?: GetContactListCommandOutput) => void
  ): Promise<GetContactListCommandOutput> | void {
    const command = new GetContactListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the custom email verification template for the template name you
   *             specify.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput>;
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput> | void {
    const command = new GetCustomVerificationEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about a dedicated IP address, including the name of the dedicated IP
   *             pool that it's associated with, as well information about the automatic warm-up process
   *             for the address.</p>
   */
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpCommandOutput>;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;
  public getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDedicatedIpCommandOutput) => void),
    cb?: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): Promise<GetDedicatedIpCommandOutput> | void {
    const command = new GetDedicatedIpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve information about the dedicated pool.</p>
   */
  public getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpPoolCommandOutput>;
  public getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    cb: (err: any, data?: GetDedicatedIpPoolCommandOutput) => void
  ): void;
  public getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpPoolCommandOutput) => void
  ): void;
  public getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDedicatedIpPoolCommandOutput) => void),
    cb?: (err: any, data?: GetDedicatedIpPoolCommandOutput) => void
  ): Promise<GetDedicatedIpPoolCommandOutput> | void {
    const command = new GetDedicatedIpPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the dedicated IP addresses that are associated with your Amazon Web Services
   *             account.</p>
   */
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpsCommandOutput>;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;
  public getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDedicatedIpsCommandOutput) => void),
    cb?: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): Promise<GetDedicatedIpsCommandOutput> | void {
    const command = new GetDedicatedIpsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve information about the status of the Deliverability dashboard for your account. When
   *             the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other
   *             metrics for the domains that you use to send email. You also gain the ability to perform
   *             predictive inbox placement tests.</p>
   *
   *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
   *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
   *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
   */
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput>;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  public getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput> | void {
    const command = new GetDeliverabilityDashboardOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve the results of a predictive inbox placement test.</p>
   */
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityTestReportCommandOutput>;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  public getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeliverabilityTestReportCommandOutput) => void),
    cb?: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): Promise<GetDeliverabilityTestReportCommandOutput> | void {
    const command = new GetDeliverabilityTestReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve all the deliverability data for a specific campaign. This data is available
   *             for a campaign only if the campaign sent email by using a domain that the
   *             Deliverability dashboard is enabled for.</p>
   */
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput>;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  public getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void),
    cb?: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput> | void {
    const command = new GetDomainDeliverabilityCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
   *             email.</p>
   */
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainStatisticsReportCommandOutput>;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  public getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainStatisticsReportCommandOutput) => void),
    cb?: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): Promise<GetDomainStatisticsReportCommandOutput> | void {
    const command = new GetDomainStatisticsReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides information about a specific identity, including the identity's verification
   *             status, sending authorization policies, its DKIM authentication status, and its custom
   *             Mail-From settings.</p>
   */
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityCommandOutput>;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  public getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): Promise<GetEmailIdentityCommandOutput> | void {
    const command = new GetEmailIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the requested sending authorization policies for the given identity (an email
   *             address or a domain). The policies are returned as a map of policy names to policy
   *             contents. You can retrieve a maximum of 20 policies at a time.</p>
   *         <note>
   *             <p>This API is for the identity owner only. If you have not verified the identity,
   *                 this API will return an error.</p>
   *         </note>
   *         <p>Sending authorization is a feature that enables an identity owner to authorize other
   *             senders to use its identities. For information about using sending authorization, see
   *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityPoliciesCommandOutput>;
  public getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    cb: (err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void
  ): void;
  public getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void
  ): void;
  public getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetEmailIdentityPoliciesCommandOutput) => void
  ): Promise<GetEmailIdentityPoliciesCommandOutput> | void {
    const command = new GetEmailIdentityPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays the template object (which includes the subject line, HTML part and text
   *             part) for the template you specify.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailTemplateCommandOutput>;
  public getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;
  public getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;
  public getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): Promise<GetEmailTemplateCommandOutput> | void {
    const command = new GetEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides information about an import job.</p>
   */
  public getImportJob(
    args: GetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportJobCommandOutput>;
  public getImportJob(args: GetImportJobCommandInput, cb: (err: any, data?: GetImportJobCommandOutput) => void): void;
  public getImportJob(
    args: GetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;
  public getImportJob(
    args: GetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImportJobCommandOutput) => void),
    cb?: (err: any, data?: GetImportJobCommandOutput) => void
  ): Promise<GetImportJobCommandOutput> | void {
    const command = new GetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a specific email address that's on the suppression list
   *             for your account.</p>
   */
  public getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuppressedDestinationCommandOutput>;
  public getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    cb: (err: any, data?: GetSuppressedDestinationCommandOutput) => void
  ): void;
  public getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuppressedDestinationCommandOutput) => void
  ): void;
  public getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSuppressedDestinationCommandOutput) => void),
    cb?: (err: any, data?: GetSuppressedDestinationCommandOutput) => void
  ): Promise<GetSuppressedDestinationCommandOutput> | void {
    const command = new GetSuppressedDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all of the configuration sets associated with your account in the current
   *             region.</p>
   *         <p>
   *             <i>Configuration sets</i> are groups of rules that you can apply to the
   *             emails you send. You apply a configuration set to an email by including a reference to
   *             the configuration set in the headers of the email. When you apply a configuration set to
   *             an email, all of the rules in that configuration set are applied to the email.</p>
   */
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationSetsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): Promise<ListConfigurationSetsCommandOutput> | void {
    const command = new ListConfigurationSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the contact lists available.</p>
   */
  public listContactLists(
    args: ListContactListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactListsCommandOutput>;
  public listContactLists(
    args: ListContactListsCommandInput,
    cb: (err: any, data?: ListContactListsCommandOutput) => void
  ): void;
  public listContactLists(
    args: ListContactListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactListsCommandOutput) => void
  ): void;
  public listContactLists(
    args: ListContactListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactListsCommandOutput) => void),
    cb?: (err: any, data?: ListContactListsCommandOutput) => void
  ): Promise<ListContactListsCommandOutput> | void {
    const command = new ListContactListsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the contacts present in a specific contact list.</p>
   */
  public listContacts(
    args: ListContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactsCommandOutput>;
  public listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  public listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;
  public listContacts(
    args: ListContactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactsCommandOutput) => void),
    cb?: (err: any, data?: ListContactsCommandOutput) => void
  ): Promise<ListContactsCommandOutput> | void {
    const command = new ListContactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the existing custom verification email templates for your account in the current
   *                 Amazon Web Services Region.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput>;
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput> | void {
    const command = new ListCustomVerificationEmailTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all of the dedicated IP pools that exist in your Amazon Web Services account in the current
   *             Region.</p>
   */
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDedicatedIpPoolsCommandOutput>;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  public listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDedicatedIpPoolsCommandOutput) => void),
    cb?: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): Promise<ListDedicatedIpPoolsCommandOutput> | void {
    const command = new ListDedicatedIpPoolsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
   *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
   *             operation to view the results.</p>
   */
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeliverabilityTestReportsCommandOutput>;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  public listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void),
    cb?: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): Promise<ListDeliverabilityTestReportsCommandOutput> | void {
    const command = new ListDeliverabilityTestReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
   *             email during a specified time range. This data is available for a domain only if you
   *             enabled the Deliverability dashboard for the domain.</p>
   */
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput>;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  public listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput> | void {
    const command = new ListDomainDeliverabilityCampaignsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all of the email identities that are associated with your Amazon Web Services
   *             account. An identity can be either an email address or a domain. This operation returns
   *             identities that are verified as well as those that aren't. This operation returns
   *             identities that are associated with Amazon SES and Amazon Pinpoint.</p>
   */
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailIdentitiesCommandOutput>;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  public listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEmailIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): Promise<ListEmailIdentitiesCommandOutput> | void {
    const command = new ListEmailIdentitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services
   *             Region.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailTemplatesCommandOutput>;
  public listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    cb: (err: any, data?: ListEmailTemplatesCommandOutput) => void
  ): void;
  public listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailTemplatesCommandOutput) => void
  ): void;
  public listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEmailTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListEmailTemplatesCommandOutput) => void
  ): Promise<ListEmailTemplatesCommandOutput> | void {
    const command = new ListEmailTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the import jobs.</p>
   */
  public listImportJobs(
    args: ListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportJobsCommandOutput>;
  public listImportJobs(
    args: ListImportJobsCommandInput,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;
  public listImportJobs(
    args: ListImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;
  public listImportJobs(
    args: ListImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListImportJobsCommandOutput) => void
  ): Promise<ListImportJobsCommandOutput> | void {
    const command = new ListImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): Promise<ListRecommendationsCommandOutput> | void {
    const command = new ListRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of email addresses that are on the suppression list for your
   *             account.</p>
   */
  public listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuppressedDestinationsCommandOutput>;
  public listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    cb: (err: any, data?: ListSuppressedDestinationsCommandOutput) => void
  ): void;
  public listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuppressedDestinationsCommandOutput) => void
  ): void;
  public listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSuppressedDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListSuppressedDestinationsCommandOutput) => void
  ): Promise<ListSuppressedDestinationsCommandOutput> | void {
    const command = new ListSuppressedDestinationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
   *             resource. A <i>tag</i> is a label that you optionally define and associate
   *             with a resource. Each tag consists of a required <i>tag key</i> and an
   *             optional associated <i>tag value</i>. A tag key is a general label that
   *             acts as a category for more specific tag values. A tag value acts as a descriptor within
   *             a tag key.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
   */
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput>;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> | void {
    const command = new PutAccountDedicatedIpWarmupAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update your Amazon SES account details.</p>
   */
  public putAccountDetails(
    args: PutAccountDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDetailsCommandOutput>;
  public putAccountDetails(
    args: PutAccountDetailsCommandInput,
    cb: (err: any, data?: PutAccountDetailsCommandOutput) => void
  ): void;
  public putAccountDetails(
    args: PutAccountDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDetailsCommandOutput) => void
  ): void;
  public putAccountDetails(
    args: PutAccountDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountDetailsCommandOutput) => void),
    cb?: (err: any, data?: PutAccountDetailsCommandOutput) => void
  ): Promise<PutAccountDetailsCommandOutput> | void {
    const command = new PutAccountDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable or disable the ability of your account to send email.</p>
   */
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSendingAttributesCommandOutput>;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  public putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountSendingAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): Promise<PutAccountSendingAttributesCommandOutput> | void {
    const command = new PutAccountSendingAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Change the settings for the account-level suppression list.</p>
   */
  public putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSuppressionAttributesCommandOutput>;
  public putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    cb: (err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void
  ): void;
  public putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void
  ): void;
  public putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountSuppressionAttributesCommandOutput) => void
  ): Promise<PutAccountSuppressionAttributesCommandOutput> | void {
    const command = new PutAccountSuppressionAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update your Amazon SES account VDM attributes.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountVdmAttributesCommandOutput>;
  public putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    cb: (err: any, data?: PutAccountVdmAttributesCommandOutput) => void
  ): void;
  public putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountVdmAttributesCommandOutput) => void
  ): void;
  public putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountVdmAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountVdmAttributesCommandOutput) => void
  ): Promise<PutAccountVdmAttributesCommandOutput> | void {
    const command = new PutAccountVdmAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
   *             to create groups of dedicated IP addresses for sending specific types of email.</p>
   */
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> | void {
    const command = new PutConfigurationSetDeliveryOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable or disable collection of reputation metrics for emails that you send using a
   *             particular configuration set in a specific Amazon Web Services Region.</p>
   */
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput>;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput> | void {
    const command = new PutConfigurationSetReputationOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable or disable email sending for messages that use a particular configuration set
   *             in a specific Amazon Web Services Region.</p>
   */
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput>;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput> | void {
    const command = new PutConfigurationSetSendingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specify the account suppression list preferences for a configuration set.</p>
   */
  public putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSuppressionOptionsCommandOutput>;
  public putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetSuppressionOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> | void {
    const command = new PutConfigurationSetSuppressionOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specify a custom domain to use for open and click tracking elements in email that you
   *             send.</p>
   */
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput>;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput> | void {
    const command = new PutConfigurationSetTrackingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specify VDM preferences for email that you send using the configuration set.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetVdmOptionsCommandOutput>;
  public putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void
  ): void;
  public putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationSetVdmOptionsCommandOutput) => void
  ): Promise<PutConfigurationSetVdmOptionsCommandOutput> | void {
    const command = new PutConfigurationSetVdmOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
   *         <note>
   *             <p>The dedicated IP address that you specify must already exist, and must be
   *                 associated with your Amazon Web Services account.
   *
   *             </p>
   *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
   *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
   *
   *         </note>
   */
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpInPoolCommandOutput>;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  public putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDedicatedIpInPoolCommandOutput) => void),
    cb?: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): Promise<PutDedicatedIpInPoolCommandOutput> | void {
    const command = new PutDedicatedIpInPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p></p>
   */
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput>;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  public putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput> | void {
    const command = new PutDedicatedIpWarmupAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
   *             access to reputation, deliverability, and other metrics for the domains that you use to
   *             send email. You also gain the ability to perform predictive inbox placement tests.</p>
   *
   *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
   *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
   *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
   */
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput>;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  public putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void),
    cb?: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput> | void {
    const command = new PutDeliverabilityDashboardOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to associate a configuration set with an email identity.</p>
   */
  public putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput>;
  public putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityConfigurationSetAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityConfigurationSetAttributesCommandOutput> | void {
    const command = new PutEmailIdentityConfigurationSetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to enable or disable DKIM authentication for an email identity.</p>
   */
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput>;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput> | void {
    const command = new PutEmailIdentityDkimAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to configure or change the DKIM authentication settings for an email domain
   *             identity. You can use this operation to do any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Update the signing attributes for an identity that uses Bring Your Own DKIM
   *                     (BYODKIM).</p>
   *             </li>
   *             <li>
   *                 <p>Update the key length that should be used for Easy DKIM.</p>
   *             </li>
   *             <li>
   *                 <p>Change from using no DKIM authentication to using Easy DKIM.</p>
   *             </li>
   *             <li>
   *                 <p>Change from using no DKIM authentication to using BYODKIM.</p>
   *             </li>
   *             <li>
   *                 <p>Change from using Easy DKIM to using BYODKIM.</p>
   *             </li>
   *             <li>
   *                 <p>Change from using BYODKIM to using Easy DKIM.</p>
   *             </li>
   *          </ul>
   */
  public putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput>;
  public putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityDkimSigningAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityDkimSigningAttributesCommandOutput> | void {
    const command = new PutEmailIdentityDkimSigningAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
   *             what happens when an identity is used to send an email that results in a bounce or
   *             complaint event.</p>
   *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput>;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> | void {
    const command = new PutEmailIdentityFeedbackAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to enable or disable the custom Mail-From domain configuration for an email
   *             identity.</p>
   */
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput>;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  public putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput> | void {
    const command = new PutEmailIdentityMailFromAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an email address to the suppression list for your account.</p>
   */
  public putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSuppressedDestinationCommandOutput>;
  public putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    cb: (err: any, data?: PutSuppressedDestinationCommandOutput) => void
  ): void;
  public putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSuppressedDestinationCommandOutput) => void
  ): void;
  public putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSuppressedDestinationCommandOutput) => void),
    cb?: (err: any, data?: PutSuppressedDestinationCommandOutput) => void
  ): Promise<PutSuppressedDestinationCommandOutput> | void {
    const command = new PutSuppressedDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Composes an email message to multiple destinations.</p>
   */
  public sendBulkEmail(
    args: SendBulkEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendBulkEmailCommandOutput>;
  public sendBulkEmail(
    args: SendBulkEmailCommandInput,
    cb: (err: any, data?: SendBulkEmailCommandOutput) => void
  ): void;
  public sendBulkEmail(
    args: SendBulkEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBulkEmailCommandOutput) => void
  ): void;
  public sendBulkEmail(
    args: SendBulkEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendBulkEmailCommandOutput) => void),
    cb?: (err: any, data?: SendBulkEmailCommandOutput) => void
  ): Promise<SendBulkEmailCommandOutput> | void {
    const command = new SendBulkEmailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an email address to the list of identities for your Amazon SES account in the current
   *                 Amazon Web Services Region and attempts to verify it. As a result of executing this
   *             operation, a customized verification email is sent to the specified address.</p>
   *         <p>To use this operation, you must first create a custom verification email template. For
   *             more information about creating and using custom verification email templates, see
   *                 <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCustomVerificationEmailCommandOutput>;
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendCustomVerificationEmailCommandOutput) => void),
    cb?: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): Promise<SendCustomVerificationEmailCommandOutput> | void {
    const command = new SendCustomVerificationEmailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of
   *             messages:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Simple</b> – A standard email message. When
   *                     you create this type of message, you specify the sender, the recipient, and the
   *                     message body, and Amazon SES assembles the message for you.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Raw</b> – A raw, MIME-formatted email
   *                     message. When you send this type of email, you have to specify all of the
   *                     message headers, as well as the message body. You can use this message type to
   *                     send messages that contain attachments. The message that you specify has to be a
   *                     valid MIME message.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Templated</b> – A message that contains
   *                     personalization tags. When you send this type of email, Amazon SES API v2 automatically
   *                     replaces the tags with values that you specify.</p>
   *             </li>
   *          </ul>
   */
  public sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
  public sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
  public sendEmail(
    args: SendEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEmailCommandOutput) => void
  ): void;
  public sendEmail(
    args: SendEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendEmailCommandOutput) => void),
    cb?: (err: any, data?: SendEmailCommandOutput) => void
  ): Promise<SendEmailCommandOutput> | void {
    const command = new SendEmailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add one or more tags (keys and values) to a specified resource. A
   *                 <i>tag</i> is a label that you optionally define and associate with a
   *             resource. Tags can help you categorize and manage resources in different ways, such as
   *             by purpose, owner, environment, or other criteria. A resource can have as many as 50
   *             tags.</p>
   *         <p>Each tag consists of a required <i>tag key</i> and an
   *                 associated <i>tag value</i>, both of which you define. A tag key is a
   *             general label that acts as a category for more specific tag values. A tag value acts as
   *             a descriptor within a tag key.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a preview of the MIME content of an email when provided with a template and a
   *             set of replacement data.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRenderEmailTemplateCommandOutput>;
  public testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    cb: (err: any, data?: TestRenderEmailTemplateCommandOutput) => void
  ): void;
  public testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRenderEmailTemplateCommandOutput) => void
  ): void;
  public testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestRenderEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: TestRenderEmailTemplateCommandOutput) => void
  ): Promise<TestRenderEmailTemplateCommandOutput> | void {
    const command = new TestRenderEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove one or more tags (keys and values) from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the configuration of an event destination for a configuration set.</p>
   *         <p>
   *             <i>Events</i> include message sends, deliveries, opens, clicks, bounces,
   *             and complaints. <i>Event destinations</i> are places that you can send
   *             information about these events to. For example, you can send event data to Amazon SNS to
   *             receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to
   *             stream data to Amazon S3 for long-term storage.</p>
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a contact's preferences for a list. It is not necessary to specify all
   *             existing topic preferences in the TopicPreferences object, just the ones that need
   *             updating.</p>
   */
  public updateContact(
    args: UpdateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactCommandOutput>;
  public updateContact(
    args: UpdateContactCommandInput,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactCommandOutput) => void
  ): Promise<UpdateContactCommandOutput> | void {
    const command = new UpdateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates contact list metadata. This operation does a complete replacement.</p>
   */
  public updateContactList(
    args: UpdateContactListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactListCommandOutput>;
  public updateContactList(
    args: UpdateContactListCommandInput,
    cb: (err: any, data?: UpdateContactListCommandOutput) => void
  ): void;
  public updateContactList(
    args: UpdateContactListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactListCommandOutput) => void
  ): void;
  public updateContactList(
    args: UpdateContactListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactListCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactListCommandOutput) => void
  ): Promise<UpdateContactListCommandOutput> | void {
    const command = new UpdateContactListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing custom verification email template.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
   *                 custom verification email templates</a> in the <i>Amazon SES Developer
   *                 Guide</i>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomVerificationEmailTemplateCommandOutput>;
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> | void {
    const command = new UpdateCustomVerificationEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified sending authorization policy for the given identity (an email
   *             address or a domain). This API returns successfully even if a policy with the specified
   *             name does not exist.</p>
   *         <note>
   *             <p>This API is for the identity owner only. If you have not verified the identity,
   *                 this API will return an error.</p>
   *         </note>
   *         <p>Sending authorization is a feature that enables an identity owner to authorize other
   *             senders to use its identities. For information about using sending authorization, see
   *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailIdentityPolicyCommandOutput>;
  public updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    cb: (err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void
  ): void;
  public updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void
  ): void;
  public updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateEmailIdentityPolicyCommandOutput) => void
  ): Promise<UpdateEmailIdentityPolicyCommandOutput> | void {
    const command = new UpdateEmailIdentityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an email template. Email templates enable you to send personalized email to
   *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailTemplateCommandOutput>;
  public updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
  public updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
  public updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEmailTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): Promise<UpdateEmailTemplateCommandOutput> | void {
    const command = new UpdateEmailTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
