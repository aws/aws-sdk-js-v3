import { SESClient } from "./SESClient";
import {
  CloneReceiptRuleSetCommand,
  CloneReceiptRuleSetCommandInput,
  CloneReceiptRuleSetCommandOutput,
} from "./commands/CloneReceiptRuleSetCommand";
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
  CreateConfigurationSetTrackingOptionsCommand,
  CreateConfigurationSetTrackingOptionsCommandInput,
  CreateConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import {
  CreateCustomVerificationEmailTemplateCommand,
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/CreateCustomVerificationEmailTemplateCommand";
import {
  CreateReceiptFilterCommand,
  CreateReceiptFilterCommandInput,
  CreateReceiptFilterCommandOutput,
} from "./commands/CreateReceiptFilterCommand";
import {
  CreateReceiptRuleCommand,
  CreateReceiptRuleCommandInput,
  CreateReceiptRuleCommandOutput,
} from "./commands/CreateReceiptRuleCommand";
import {
  CreateReceiptRuleSetCommand,
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
} from "./commands/CreateReceiptRuleSetCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
} from "./commands/CreateTemplateCommand";
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
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteConfigurationSetTrackingOptionsCommandInput,
  DeleteConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import {
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import {
  DeleteIdentityCommand,
  DeleteIdentityCommandInput,
  DeleteIdentityCommandOutput,
} from "./commands/DeleteIdentityCommand";
import {
  DeleteIdentityPolicyCommand,
  DeleteIdentityPolicyCommandInput,
  DeleteIdentityPolicyCommandOutput,
} from "./commands/DeleteIdentityPolicyCommand";
import {
  DeleteReceiptFilterCommand,
  DeleteReceiptFilterCommandInput,
  DeleteReceiptFilterCommandOutput,
} from "./commands/DeleteReceiptFilterCommand";
import {
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleCommandInput,
  DeleteReceiptRuleCommandOutput,
} from "./commands/DeleteReceiptRuleCommand";
import {
  DeleteReceiptRuleSetCommand,
  DeleteReceiptRuleSetCommandInput,
  DeleteReceiptRuleSetCommandOutput,
} from "./commands/DeleteReceiptRuleSetCommand";
import {
  DeleteTemplateCommand,
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
} from "./commands/DeleteTemplateCommand";
import {
  DeleteVerifiedEmailAddressCommand,
  DeleteVerifiedEmailAddressCommandInput,
  DeleteVerifiedEmailAddressCommandOutput,
} from "./commands/DeleteVerifiedEmailAddressCommand";
import {
  DescribeActiveReceiptRuleSetCommand,
  DescribeActiveReceiptRuleSetCommandInput,
  DescribeActiveReceiptRuleSetCommandOutput,
} from "./commands/DescribeActiveReceiptRuleSetCommand";
import {
  DescribeConfigurationSetCommand,
  DescribeConfigurationSetCommandInput,
  DescribeConfigurationSetCommandOutput,
} from "./commands/DescribeConfigurationSetCommand";
import {
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleCommandInput,
  DescribeReceiptRuleCommandOutput,
} from "./commands/DescribeReceiptRuleCommand";
import {
  DescribeReceiptRuleSetCommand,
  DescribeReceiptRuleSetCommandInput,
  DescribeReceiptRuleSetCommandOutput,
} from "./commands/DescribeReceiptRuleSetCommand";
import {
  GetAccountSendingEnabledCommand,
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
} from "./commands/GetAccountSendingEnabledCommand";
import {
  GetCustomVerificationEmailTemplateCommand,
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "./commands/GetCustomVerificationEmailTemplateCommand";
import {
  GetIdentityDkimAttributesCommand,
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
} from "./commands/GetIdentityDkimAttributesCommand";
import {
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
} from "./commands/GetIdentityMailFromDomainAttributesCommand";
import {
  GetIdentityNotificationAttributesCommand,
  GetIdentityNotificationAttributesCommandInput,
  GetIdentityNotificationAttributesCommandOutput,
} from "./commands/GetIdentityNotificationAttributesCommand";
import {
  GetIdentityPoliciesCommand,
  GetIdentityPoliciesCommandInput,
  GetIdentityPoliciesCommandOutput,
} from "./commands/GetIdentityPoliciesCommand";
import {
  GetIdentityVerificationAttributesCommand,
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
} from "./commands/GetIdentityVerificationAttributesCommand";
import {
  GetSendQuotaCommand,
  GetSendQuotaCommandInput,
  GetSendQuotaCommandOutput,
} from "./commands/GetSendQuotaCommand";
import {
  GetSendStatisticsCommand,
  GetSendStatisticsCommandInput,
  GetSendStatisticsCommandOutput,
} from "./commands/GetSendStatisticsCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "./commands/ListCustomVerificationEmailTemplatesCommand";
import {
  ListIdentitiesCommand,
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "./commands/ListIdentitiesCommand";
import {
  ListIdentityPoliciesCommand,
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
} from "./commands/ListIdentityPoliciesCommand";
import {
  ListReceiptFiltersCommand,
  ListReceiptFiltersCommandInput,
  ListReceiptFiltersCommandOutput,
} from "./commands/ListReceiptFiltersCommand";
import {
  ListReceiptRuleSetsCommand,
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
} from "./commands/ListReceiptRuleSetsCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  ListVerifiedEmailAddressesCommand,
  ListVerifiedEmailAddressesCommandInput,
  ListVerifiedEmailAddressesCommandOutput,
} from "./commands/ListVerifiedEmailAddressesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutIdentityPolicyCommand,
  PutIdentityPolicyCommandInput,
  PutIdentityPolicyCommandOutput,
} from "./commands/PutIdentityPolicyCommand";
import {
  ReorderReceiptRuleSetCommand,
  ReorderReceiptRuleSetCommandInput,
  ReorderReceiptRuleSetCommandOutput,
} from "./commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommand, SendBounceCommandInput, SendBounceCommandOutput } from "./commands/SendBounceCommand";
import {
  SendBulkTemplatedEmailCommand,
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
} from "./commands/SendBulkTemplatedEmailCommand";
import {
  SendCustomVerificationEmailCommand,
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import {
  SendRawEmailCommand,
  SendRawEmailCommandInput,
  SendRawEmailCommandOutput,
} from "./commands/SendRawEmailCommand";
import {
  SendTemplatedEmailCommand,
  SendTemplatedEmailCommandInput,
  SendTemplatedEmailCommandOutput,
} from "./commands/SendTemplatedEmailCommand";
import {
  SetActiveReceiptRuleSetCommand,
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
} from "./commands/SetActiveReceiptRuleSetCommand";
import {
  SetIdentityDkimEnabledCommand,
  SetIdentityDkimEnabledCommandInput,
  SetIdentityDkimEnabledCommandOutput,
} from "./commands/SetIdentityDkimEnabledCommand";
import {
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
} from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import {
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommandInput,
  SetIdentityHeadersInNotificationsEnabledCommandOutput,
} from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import {
  SetIdentityMailFromDomainCommand,
  SetIdentityMailFromDomainCommandInput,
  SetIdentityMailFromDomainCommandOutput,
} from "./commands/SetIdentityMailFromDomainCommand";
import {
  SetIdentityNotificationTopicCommand,
  SetIdentityNotificationTopicCommandInput,
  SetIdentityNotificationTopicCommandOutput,
} from "./commands/SetIdentityNotificationTopicCommand";
import {
  SetReceiptRulePositionCommand,
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
} from "./commands/SetReceiptRulePositionCommand";
import {
  TestRenderTemplateCommand,
  TestRenderTemplateCommandInput,
  TestRenderTemplateCommandOutput,
} from "./commands/TestRenderTemplateCommand";
import {
  UpdateAccountSendingEnabledCommand,
  UpdateAccountSendingEnabledCommandInput,
  UpdateAccountSendingEnabledCommandOutput,
} from "./commands/UpdateAccountSendingEnabledCommand";
import {
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import {
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
} from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import {
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
} from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import {
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import {
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import {
  UpdateReceiptRuleCommand,
  UpdateReceiptRuleCommandInput,
  UpdateReceiptRuleCommandOutput,
} from "./commands/UpdateReceiptRuleCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
} from "./commands/UpdateTemplateCommand";
import {
  VerifyDomainDkimCommand,
  VerifyDomainDkimCommandInput,
  VerifyDomainDkimCommandOutput,
} from "./commands/VerifyDomainDkimCommand";
import {
  VerifyDomainIdentityCommand,
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
} from "./commands/VerifyDomainIdentityCommand";
import {
  VerifyEmailAddressCommand,
  VerifyEmailAddressCommandInput,
  VerifyEmailAddressCommandOutput,
} from "./commands/VerifyEmailAddressCommand";
import {
  VerifyEmailIdentityCommand,
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
} from "./commands/VerifyEmailIdentityCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Simple Email Service</fullname>
 *         <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version
 *             2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>. </p>
 *         <note>
 *             <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and
 *                     Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         </note>
 */
export class SES extends SESClient {
  /**
   * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and
   *             configurations are copied to the new receipt rule set and are completely independent of
   *             the source rule set.</p>
   *         <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloneReceiptRuleSetCommandOutput>;
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): void;
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): void;
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CloneReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): Promise<CloneReceiptRuleSetCommandOutput> | void {
    const command = new CloneReceiptRuleSetCommand(args);
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
   * <p>Creates a configuration set.</p>
   *         <p>Configuration sets enable you to publish email sending events. For information about
   *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
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
   * <p>Creates a configuration set event destination.</p>
   *         <note>
   *             <p>When you create or update an event destination, you must provide one, and only
   *                 one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p>
   *         </note>
   *         <p>An event destination is the AWS service to which Amazon SES publishes the email sending
   *             events associated with a configuration set. For information about using configuration
   *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
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
   * <p>Creates an association between a configuration set and a custom domain for open and
   *             click event tracking. </p>
   *         <p>By default, images and links used for tracking open and click events are hosted on
   *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
   *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
   */
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetTrackingOptionsCommandOutput>;
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> | void {
    const command = new CreateConfigurationSetTrackingOptionsCommand(args);
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
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Creates a new IP address filter.</p>
   *         <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptFilterCommandOutput>;
  public createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;
  public createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;
  public createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReceiptFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): Promise<CreateReceiptFilterCommandOutput> | void {
    const command = new CreateReceiptFilterCommand(args);
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
   * <p>Creates a receipt rule.</p>
   *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptRuleCommandOutput>;
  public createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;
  public createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;
  public createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReceiptRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): Promise<CreateReceiptRuleCommandOutput> | void {
    const command = new CreateReceiptRuleCommand(args);
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
   * <p>Creates an empty receipt rule set.</p>
   *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptRuleSetCommandOutput>;
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): Promise<CreateReceiptRuleSetCommandOutput> | void {
    const command = new CreateReceiptRuleSetCommand(args);
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
  public createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  public createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateCommandOutput) => void
  ): Promise<CreateTemplateCommandOutput> | void {
    const command = new CreateTemplateCommand(args);
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
   * <p>Deletes a configuration set. Configuration sets enable you to publish email sending
   *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
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
   * <p>Deletes a configuration set event destination. Configuration set event destinations
   *             are associated with configuration sets, which enable you to publish email sending
   *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
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
   * <p>Deletes an association between a configuration set and a custom domain for open and
   *             click event tracking.</p>
   *         <p>By default, images and links used for tracking open and click events are hosted on
   *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
   *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
   *         <note>
   *             <p>Deleting this kind of association will result in emails sent using the specified
   *                 configuration set to capture open and click events using the standard,
   *                 Amazon SES-operated domains.</p>
   *         </note>
   */
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput>;
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> | void {
    const command = new DeleteConfigurationSetTrackingOptionsCommand(args);
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
   * <p>Deletes an existing custom verification email template. </p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Deletes the specified identity (an email address or a domain) from the list of
   *             verified identities.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteIdentity(
    args: DeleteIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityCommandOutput>;
  public deleteIdentity(
    args: DeleteIdentityCommandInput,
    cb: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): void;
  public deleteIdentity(
    args: DeleteIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): void;
  public deleteIdentity(
    args: DeleteIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIdentityCommandOutput) => void),
    cb?: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): Promise<DeleteIdentityCommandOutput> | void {
    const command = new DeleteIdentityCommand(args);
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
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityPolicyCommandOutput>;
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIdentityPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): Promise<DeleteIdentityPolicyCommandOutput> | void {
    const command = new DeleteIdentityPolicyCommand(args);
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
   * <p>Deletes the specified IP address filter.</p>
   *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptFilterCommandOutput>;
  public deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;
  public deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;
  public deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReceiptFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): Promise<DeleteReceiptFilterCommandOutput> | void {
    const command = new DeleteReceiptFilterCommand(args);
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
   * <p>Deletes the specified receipt rule.</p>
   *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptRuleCommandOutput>;
  public deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;
  public deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;
  public deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReceiptRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): Promise<DeleteReceiptRuleCommandOutput> | void {
    const command = new DeleteReceiptRuleCommand(args);
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
   * <p>Deletes the specified receipt rule set and all of the receipt rules it
   *             contains.</p>
   *         <note>
   *             <p>The currently active rule set cannot be deleted.</p>
   *         </note>
   *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptRuleSetCommandOutput>;
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): Promise<DeleteReceiptRuleSetCommandOutput> | void {
    const command = new DeleteReceiptRuleSetCommand(args);
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
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): Promise<DeleteTemplateCommandOutput> | void {
    const command = new DeleteTemplateCommand(args);
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
   * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
   *             and domains.</p>
   */
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedEmailAddressCommandOutput>;
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void),
    cb?: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): Promise<DeleteVerifiedEmailAddressCommandOutput> | void {
    const command = new DeleteVerifiedEmailAddressCommand(args);
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
   * <p>Returns the metadata and receipt rules for the receipt rule set that is currently
   *             active.</p>
   *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActiveReceiptRuleSetCommandOutput>;
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): Promise<DescribeActiveReceiptRuleSetCommandOutput> | void {
    const command = new DescribeActiveReceiptRuleSetCommand(args);
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
   * <p>Returns the details of the specified configuration set. For information about using
   *             configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSetCommandOutput>;
  public describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;
  public describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;
  public describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): Promise<DescribeConfigurationSetCommandOutput> | void {
    const command = new DescribeConfigurationSetCommand(args);
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
   * <p>Returns the details of the specified receipt rule.</p>
   *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReceiptRuleCommandOutput>;
  public describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;
  public describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;
  public describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReceiptRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): Promise<DescribeReceiptRuleCommandOutput> | void {
    const command = new DescribeReceiptRuleCommand(args);
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
   * <p>Returns the details of the specified receipt rule set.</p>
   *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReceiptRuleSetCommandOutput>;
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): Promise<DescribeReceiptRuleSetCommandOutput> | void {
    const command = new DescribeReceiptRuleSetCommand(args);
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
   * <p>Returns the email sending status of the Amazon SES account for the current region.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSendingEnabledCommandOutput>;
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): void;
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): void;
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSendingEnabledCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): Promise<GetAccountSendingEnabledCommandOutput> | void {
    const command = new GetAccountSendingEnabledCommand(args);
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
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Returns the current status of Easy DKIM signing for an entity. For domain name
   *             identities, this operation also returns the DKIM tokens that are required for Easy DKIM
   *             signing, and whether Amazon SES has successfully verified that these tokens have been
   *             published.</p>
   *         <p>This operation takes a list of identities as input and returns the following
   *             information for each:</p>
   *         <ul>
   *             <li>
   *                 <p>Whether Easy DKIM signing is enabled or disabled.</p>
   *             </li>
   *             <li>
   *                 <p>A set of DKIM tokens that represent the identity. If the identity is an email
   *                     address, the tokens represent the domain of that address.</p>
   *             </li>
   *             <li>
   *                 <p>Whether Amazon SES has successfully verified the DKIM tokens published in the
   *                     domain's DNS. This information is only returned for domain name identities, not
   *                     for email addresses.</p>
   *             </li>
   *          </ul>
   *         <p>This operation is throttled at one request per second and can only get DKIM attributes
   *             for up to 100 identities at a time.</p>
   *         <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>
   */
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityDkimAttributesCommandOutput>;
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityDkimAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): Promise<GetIdentityDkimAttributesCommandOutput> | void {
    const command = new GetIdentityDkimAttributesCommand(args);
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
   * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
   *             domains).</p>
   *         <p>This operation is throttled at one request per second and can only get custom MAIL
   *             FROM attributes for up to 100 identities at a time.</p>
   */
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput>;
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput> | void {
    const command = new GetIdentityMailFromDomainAttributesCommand(args);
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
   * <p>Given a list of verified identities (email addresses and/or domains), returns a
   *             structure describing identity notification attributes.</p>
   *         <p>This operation is throttled at one request per second and can only get notification
   *             attributes for up to 100 identities at a time.</p>
   *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
   *                 Developer Guide</a>.</p>
   */
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityNotificationAttributesCommandOutput>;
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): Promise<GetIdentityNotificationAttributesCommandOutput> | void {
    const command = new GetIdentityNotificationAttributesCommand(args);
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
  public getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityPoliciesCommandOutput>;
  public getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;
  public getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;
  public getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): Promise<GetIdentityPoliciesCommandOutput> | void {
    const command = new GetIdentityPoliciesCommand(args);
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
   * <p>Given a list of identities (email addresses and/or domains), returns the verification
   *             status and (for domain identities) the verification token for each identity.</p>
   *         <p>The verification status of an email address is "Pending" until the email address owner
   *             clicks the link within the verification email that Amazon SES sent to that address. If the
   *             email address owner clicks the link within 24 hours, the verification status of the
   *             email address changes to "Success". If the link is not clicked within 24 hours, the
   *             verification status changes to "Failed." In that case, if you still want to verify the
   *             email address, you must restart the verification process from the beginning.</p>
   *         <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches
   *             for the required TXT record in the DNS settings of the domain. When Amazon SES detects the
   *             record, the domain's verification status changes to "Success". If Amazon SES is unable to
   *             detect the record within 72 hours, the domain's verification status changes to "Failed."
   *             In that case, if you still want to verify the domain, you must restart the verification
   *             process from the beginning.</p>
   *         <p>This operation is throttled at one request per second and can only get verification
   *             attributes for up to 100 identities at a time.</p>
   */
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityVerificationAttributesCommandOutput>;
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): Promise<GetIdentityVerificationAttributesCommandOutput> | void {
    const command = new GetIdentityVerificationAttributesCommand(args);
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
   * <p>Provides the sending limits for the Amazon SES account. </p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getSendQuota(
    args: GetSendQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSendQuotaCommandOutput>;
  public getSendQuota(args: GetSendQuotaCommandInput, cb: (err: any, data?: GetSendQuotaCommandOutput) => void): void;
  public getSendQuota(
    args: GetSendQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSendQuotaCommandOutput) => void
  ): void;
  public getSendQuota(
    args: GetSendQuotaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSendQuotaCommandOutput) => void),
    cb?: (err: any, data?: GetSendQuotaCommandOutput) => void
  ): Promise<GetSendQuotaCommandOutput> | void {
    const command = new GetSendQuotaCommand(args);
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
   * <p>Provides sending statistics for the current AWS Region. The result is a list of data
   *             points, representing the last two weeks of sending activity. Each data point in the list
   *             contains statistics for a 15-minute period of time.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSendStatisticsCommandOutput>;
  public getSendStatistics(
    args: GetSendStatisticsCommandInput,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;
  public getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;
  public getSendStatistics(
    args: GetSendStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSendStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): Promise<GetSendStatisticsCommandOutput> | void {
    const command = new GetSendStatisticsCommand(args);
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
   * <p>Displays the template object (which includes the Subject line, HTML part and text
   *             part) for the template you specify.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  public getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateCommandOutput) => void
  ): Promise<GetTemplateCommandOutput> | void {
    const command = new GetTemplateCommand(args);
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
   * <p>Provides a list of the configuration sets associated with your Amazon SES account in the
   *             current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer
   *                 Guide.</i>
   *          </p>
   *         <p>You can execute this operation no more than once per second. This operation will
   *             return up to 1,000 configuration sets each time it is run. If your Amazon SES account has
   *             more than 1,000 configuration sets, this operation will also return a NextToken element.
   *             You can then execute the <code>ListConfigurationSets</code> operation again, passing the
   *                 <code>NextToken</code> parameter and the value of the NextToken element to retrieve
   *             additional results.</p>
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
   * <p>Lists the existing custom verification email templates for your account in the current
   *             AWS Region.</p>
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Returns a list containing all of the identities (email addresses and domains) for your
   *             AWS account in the current AWS Region, regardless of verification status.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listIdentities(
    args: ListIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentitiesCommandOutput>;
  public listIdentities(
    args: ListIdentitiesCommandInput,
    cb: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): void;
  public listIdentities(
    args: ListIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): void;
  public listIdentities(
    args: ListIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): Promise<ListIdentitiesCommandOutput> | void {
    const command = new ListIdentitiesCommand(args);
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
   * <p>Returns a list of sending authorization policies that are attached to the given
   *             identity (an email address or a domain). This API returns only a list. If you want the
   *             actual policy content, you can use <code>GetIdentityPolicies</code>.</p>
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
  public listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityPoliciesCommandOutput>;
  public listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;
  public listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;
  public listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): Promise<ListIdentityPoliciesCommandOutput> | void {
    const command = new ListIdentityPoliciesCommand(args);
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
   * <p>Lists the IP address filters associated with your AWS account in the current AWS
   *             Region.</p>
   *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceiptFiltersCommandOutput>;
  public listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;
  public listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;
  public listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceiptFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): Promise<ListReceiptFiltersCommandOutput> | void {
    const command = new ListReceiptFiltersCommand(args);
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
   * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS
   *             Region. If there are additional receipt rule sets to be retrieved, you will receive a
   *                 <code>NextToken</code> that you can provide to the next call to
   *                 <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p>
   *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceiptRuleSetsCommandOutput>;
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceiptRuleSetsCommandOutput) => void),
    cb?: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): Promise<ListReceiptRuleSetsCommandOutput> | void {
    const command = new ListReceiptRuleSetsCommand(args);
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
   * <p>Lists the email templates present in your Amazon SES account in the current AWS
   *             Region.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  public listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplatesCommandOutput) => void
  ): Promise<ListTemplatesCommandOutput> | void {
    const command = new ListTemplatesCommand(args);
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
   * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
   *             and domains associated with your account.</p>
   */
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVerifiedEmailAddressesCommandOutput>;
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): void;
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): void;
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void),
    cb?: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): Promise<ListVerifiedEmailAddressesCommandOutput> | void {
    const command = new ListVerifiedEmailAddressesCommand(args);
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
   * <p>Adds or updates the delivery options for a configuration set.</p>
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
   * <p>Adds or updates a sending authorization policy for the specified identity (an email
   *             address or a domain).</p>
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
  public putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIdentityPolicyCommandOutput>;
  public putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;
  public putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;
  public putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutIdentityPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): Promise<PutIdentityPolicyCommandOutput> | void {
    const command = new PutIdentityPolicyCommand(args);
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
   * <p>Reorders the receipt rules within a receipt rule set.</p>
   *         <note>
   *             <p>All of the rules in the rule set must be represented in this request. That is,
   *                 this API will return an error if the reorder request doesn't explicitly position all
   *                 of the rules.</p>
   *         </note>
   *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReorderReceiptRuleSetCommandOutput>;
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReorderReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): Promise<ReorderReceiptRuleSetCommandOutput> | void {
    const command = new ReorderReceiptRuleSetCommand(args);
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
   * <p>Generates and sends a bounce message to the sender of an email you received through
   *             Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p>
   *         <note>
   *             <p>You cannot use this API to send generic bounces for mail that was not received by
   *                 Amazon SES.</p>
   *         </note>
   *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public sendBounce(args: SendBounceCommandInput, options?: __HttpHandlerOptions): Promise<SendBounceCommandOutput>;
  public sendBounce(args: SendBounceCommandInput, cb: (err: any, data?: SendBounceCommandOutput) => void): void;
  public sendBounce(
    args: SendBounceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBounceCommandOutput) => void
  ): void;
  public sendBounce(
    args: SendBounceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendBounceCommandOutput) => void),
    cb?: (err: any, data?: SendBounceCommandOutput) => void
  ): Promise<SendBounceCommandOutput> | void {
    const command = new SendBounceCommand(args);
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
   * <p>Composes an email message to multiple destinations. The message body is created using
   *             an email template.</p>
   *         <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your
   *             call to the API must meet the following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>The call must refer to an existing email template. You can create email
   *                     templates using the <a>CreateTemplate</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>The message must be sent from a verified email address or domain.</p>
   *             </li>
   *             <li>
   *                 <p>If your account is still in the Amazon SES sandbox, you may only send to verified
   *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
   *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying
   *                         Email Addresses and Domains</a> in the <i>Amazon SES Developer
   *                         Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>The maximum message size is 10 MB.</p>
   *             </li>
   *             <li>
   *                 <p>Each <code>Destination</code> parameter must include at least one recipient
   *                     email address. The recipient address can be a To: address, a CC: address, or a
   *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
   *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
   *                     entire message will be rejected, even if the message contains other recipients
   *                     that are valid.</p>
   *             </li>
   *             <li>
   *                 <p>The message may not include more than 50 recipients, across the To:, CC: and
   *                     BCC: fields. If you need to send an email message to a larger audience, you can
   *                     divide your recipient list into groups of 50 or fewer, and then call the
   *                         <code>SendBulkTemplatedEmail</code> operation several times to send the
   *                     message to each group.</p>
   *             </li>
   *             <li>
   *                 <p>The number of destinations you can contact in a single call to the API may be
   *                     limited by your account's maximum sending rate.</p>
   *             </li>
   *          </ul>
   */
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendBulkTemplatedEmailCommandOutput>;
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): void;
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): void;
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendBulkTemplatedEmailCommandOutput) => void),
    cb?: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): Promise<SendBulkTemplatedEmailCommandOutput> | void {
    const command = new SendBulkTemplatedEmailCommand(args);
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
   *             AWS Region and attempts to verify it. As a result of executing this operation, a
   *             customized verification email is sent to the specified address.</p>
   *         <p>To use this operation, you must first create a custom verification email template. For
   *             more information about creating and using custom verification email templates, see
   *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom
   *                 Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Composes an email message and immediately queues it for sending. In order to send
   *             email using the <code>SendEmail</code> operation, your message must meet the following
   *             requirements:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>The message must be sent from a verified email address or domain. If you
   *                     attempt to send email using a non-verified address or domain, the operation will
   *                     result in an "Email address not verified" error. </p>
   *             </li>
   *             <li>
   *                 <p>If your account is still in the Amazon SES sandbox, you may only send to verified
   *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
   *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying
   *                         Email Addresses and Domains</a> in the <i>Amazon SES Developer
   *                         Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>The maximum message size is 10 MB.</p>
   *             </li>
   *             <li>
   *                 <p>The message must include at least one recipient email address. The recipient
   *                     address can be a To: address, a CC: address, or a BCC: address. If a recipient
   *                     email address is invalid (that is, it is not in the format
   *                         <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire
   *                     message will be rejected, even if the message contains other recipients that are
   *                     valid.</p>
   *             </li>
   *             <li>
   *                 <p>The message may not include more than 50 recipients, across the To:, CC: and
   *                     BCC: fields. If you need to send an email message to a larger audience, you can
   *                     divide your recipient list into groups of 50 or fewer, and then call the
   *                         <code>SendEmail</code> operation several times to send the message to each
   *                     group.</p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>For every message that you send, the total number of recipients (including each
   *                 recipient in the To:, CC: and BCC: fields) is counted against the maximum number of
   *                 emails you can send in a 24-hour period (your <i>sending quota</i>).
   *                 For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES
   *                     Sending Limits</a> in the <i>Amazon SES Developer Guide.</i>
   *             </p>
   *         </important>
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
   * <p>Composes an email message and immediately queues it for sending.</p>
   *
   *         <p>This operation is more flexible than the <code>SendEmail</code> API operation. When
   *             you use the <code>SendRawEmail</code> operation, you can specify the headers of the
   *             message as well as its content. This flexibility is useful, for example, when you want
   *             to send a multipart MIME email (such a message that contains both a text and an HTML
   *             version). You can also use this operation to send messages that include
   *             attachments.</p>
   *         <p>The <code>SendRawEmail</code> operation has the following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try
   *                     to send email from an address that isn't verified, the operation results in an
   *                     "Email address not verified" error.</p>
   *             </li>
   *             <li>
   *                 <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other
   *                     verified addresses in your account, or to addresses that are associated with the
   *                         <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p>
   *             </li>
   *             <li>
   *                 <p>The maximum message size, including attachments, is 10 MB.</p>
   *             </li>
   *             <li>
   *                 <p>Each message has to include at least one recipient address. A recipient
   *                     address includes any address on the To:, CC:, or BCC: lines.</p>
   *             </li>
   *             <li>
   *                 <p>If you send a single message to more than one recipient address, and one of
   *                     the recipient addresses isn't in a valid format (that is, it's not in the format
   *                         <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES
   *                     rejects the entire message, even if the other addresses are valid.</p>
   *             </li>
   *             <li>
   *                 <p>Each message can include up to 50 recipient addresses across the To:, CC:, or
   *                     BCC: lines. If you need to send a single message to more than 50 recipients, you
   *                     have to split the list of recipient addresses into groups of less than 50
   *                     recipients, and send separate messages to each group.</p>
   *             </li>
   *             <li>
   *                 <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message
   *                     parts. However, if Amazon SES has to modify the contents of your message (for
   *                     example, if you use open and click tracking), 8-bit content isn't preserved. For
   *                     this reason, we highly recommend that you encode all content that isn't 7-bit
   *                     ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer
   *                         Guide</i>.</p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>Additionally, keep the following considerations in mind when using the
   *                 <code>SendRawEmail</code> operation:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Although you can customize the message headers when using the
   *                         <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own
   *                         <code>Message-ID</code> and <code>Date</code> headers; if you passed these
   *                     headers when creating the message, they will be overwritten by the values that
   *                     Amazon SES provides.</p>
   *             </li>
   *             <li>
   *                 <p>If you are using sending authorization to send on behalf of another user,
   *                         <code>SendRawEmail</code> enables you to specify the cross-account identity
   *                     for the email's Source, From, and Return-Path parameters in one of two ways: you
   *                     can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>,
   *                     and/or <code>ReturnPathArn</code> to the API, or you can include the following
   *                     X-headers in the header of your raw email:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                             <code>X-SES-SOURCE-ARN</code>
   *                         </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                             <code>X-SES-FROM-ARN</code>
   *                         </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                             <code>X-SES-RETURN-PATH-ARN</code>
   *                         </p>
   *                     </li>
   *                </ul>
   *                 <important>
   *                     <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these
   *                         before it sends the email.</p>
   *                 </important>
   *                 <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets
   *                     the From and Return-Path addresses to the same identity that you
   *                     specified.</p>
   *                 <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending
   *                         Authorization with Amazon SES</a> in the <i>Amazon SES Developer
   *                         Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For every message that you send, the total number of recipients (including
   *                     each recipient in the To:, CC: and BCC: fields) is counted against the maximum
   *                     number of emails you can send in a 24-hour period (your <i>sending
   *                         quota</i>). For more information about sending quotas in Amazon SES, see
   *                         <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your
   *                         Amazon SES Sending Limits</a> in the <i>Amazon SES Developer
   *                         Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  public sendRawEmail(
    args: SendRawEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendRawEmailCommandOutput>;
  public sendRawEmail(args: SendRawEmailCommandInput, cb: (err: any, data?: SendRawEmailCommandOutput) => void): void;
  public sendRawEmail(
    args: SendRawEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendRawEmailCommandOutput) => void
  ): void;
  public sendRawEmail(
    args: SendRawEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendRawEmailCommandOutput) => void),
    cb?: (err: any, data?: SendRawEmailCommandOutput) => void
  ): Promise<SendRawEmailCommandOutput> | void {
    const command = new SendRawEmailCommand(args);
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
   * <p>Composes an email message using an email template and immediately queues it for
   *             sending.</p>
   *         <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call
   *             to the API must meet the following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>The call must refer to an existing email template. You can create email
   *                     templates using the <a>CreateTemplate</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>The message must be sent from a verified email address or domain.</p>
   *             </li>
   *             <li>
   *                 <p>If your account is still in the Amazon SES sandbox, you may only send to verified
   *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
   *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying
   *                         Email Addresses and Domains</a> in the <i>Amazon SES Developer
   *                         Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>The maximum message size is 10 MB.</p>
   *             </li>
   *             <li>
   *                 <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one
   *                         <code>Destination</code> parameter. A destination is a set of recipients who
   *                     will receive the same version of the email. The <code>Destination</code>
   *                     parameter can include up to 50 recipients, across the To:, CC: and BCC:
   *                     fields.</p>
   *             </li>
   *             <li>
   *                 <p>The <code>Destination</code> parameter must include at least one recipient
   *                     email address. The recipient address can be a To: address, a CC: address, or a
   *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
   *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
   *                     entire message will be rejected, even if the message contains other recipients
   *                     that are valid.</p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the
   *                 required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES
   *                 can't render the email because the template contains errors, it doesn't send the
   *                 email. Additionally, because it already accepted the message, Amazon SES doesn't return a
   *                 message stating that it was unable to send the email.</p>
   *             <p>For these reasons, we highly recommend that you set up Amazon SES to send you
   *                 notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending
   *                     Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service
   *                     Developer Guide</i>.</p>
   *         </important>
   */
  public sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTemplatedEmailCommandOutput>;
  public sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;
  public sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;
  public sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTemplatedEmailCommandOutput) => void),
    cb?: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): Promise<SendTemplatedEmailCommandOutput> | void {
    const command = new SendTemplatedEmailCommand(args);
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
   * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
   *         <note>
   *             <p>To disable your email-receiving through Amazon SES completely, you can call this API
   *                 with RuleSetName set to null.</p>
   *         </note>
   *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetActiveReceiptRuleSetCommandOutput>;
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void),
    cb?: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): Promise<SetActiveReceiptRuleSetCommandOutput> | void {
    const command = new SetActiveReceiptRuleSetCommand(args);
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
   * <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM
   *             signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends
   *             from addresses on that domain. If Easy DKIM signing is enabled for an email address,
   *             then Amazon SES uses DKIM to sign all email it sends from that address.</p>
   *         <note>
   *             <p>For email addresses (for example, <code>user@example.com</code>), you can only
   *                 enable DKIM signing if the corresponding domain (in this case,
   *                     <code>example.com</code>) has been set up to use Easy DKIM.</p>
   *         </note>
   *         <p>You can enable DKIM signing for an identity at any time after you start the
   *             verification process for the identity, even if the verification process isn't complete. </p>
   *         <p>You can execute this operation no more than once per second.</p>
   *         <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
   */
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityDkimEnabledCommandOutput>;
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityDkimEnabledCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): Promise<SetIdentityDkimEnabledCommandOutput> | void {
    const command = new SetIdentityDkimEnabledCommand(args);
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
   * <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES
   *             forwards bounce and complaint notifications as email. Feedback forwarding can only be
   *             disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and
   *             complaints.</p>
   *         <note>
   *             <p>Feedback forwarding does not apply to delivery notifications. Delivery
   *                 notifications are only available through Amazon SNS.</p>
   *         </note>
   *         <p>You can execute this operation no more than once per second.</p>
   *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
   *                 Developer Guide</a>.</p>
   */
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput>;
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> | void {
    const command = new SetIdentityFeedbackForwardingEnabledCommand(args);
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
   * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the
   *             original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
   *             type.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
   *                 Developer Guide</a>.</p>
   */
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput>;
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> | void {
    const command = new SetIdentityHeadersInNotificationsEnabledCommand(args);
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
   * <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an
   *             email address or a domain).</p>
   *         <important>
   *             <p>To send emails using the specified MAIL FROM domain, you must add an MX record to
   *                 your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy
   *                 Framework (SPF) checks, you must also add or update an SPF record. For more
   *                 information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         </important>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityMailFromDomainCommandOutput>;
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityMailFromDomainCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): Promise<SetIdentityMailFromDomainCommandOutput> | void {
    const command = new SetIdentityMailFromDomainCommand(args);
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
   * <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use
   *             this operation, you specify a verified identity, such as an email address or domain.
   *             When you send an email that uses the chosen identity in the Source field, Amazon SES sends
   *             notifications to the topic you specified. You can send bounce, complaint, or delivery
   *             notifications (or any combination of the three) to the Amazon SNS topic that you
   *             specify.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   *         <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer
   *             Guide</a>.</p>
   */
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityNotificationTopicCommandOutput>;
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityNotificationTopicCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): Promise<SetIdentityNotificationTopicCommandOutput> | void {
    const command = new SetIdentityNotificationTopicCommand(args);
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
   * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
   *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetReceiptRulePositionCommandOutput>;
  public setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;
  public setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;
  public setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetReceiptRulePositionCommandOutput) => void),
    cb?: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): Promise<SetReceiptRulePositionCommandOutput> | void {
    const command = new SetReceiptRulePositionCommand(args);
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
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRenderTemplateCommandOutput>;
  public testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;
  public testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;
  public testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestRenderTemplateCommandOutput) => void),
    cb?: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): Promise<TestRenderTemplateCommandOutput> | void {
    const command = new TestRenderTemplateCommand(args);
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
   * <p>Enables or disables email sending across your entire Amazon SES account in the current
   *             AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
   *             temporarily pause email sending across your Amazon SES account in a given AWS Region when
   *             reputation metrics (such as your bounce or complaint rates) reach certain
   *             thresholds.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSendingEnabledCommandOutput>;
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): void;
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): void;
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): Promise<UpdateAccountSendingEnabledCommandOutput> | void {
    const command = new UpdateAccountSendingEnabledCommand(args);
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
   * <p>Updates the event destination of a configuration set. Event destinations are
   *             associated with configuration sets, which enable you to publish email sending events to
   *             Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets,
   *             see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES
   *                 Sending Activity</a> in the <i>Amazon SES Developer Guide.</i>
   *          </p>
   *         <note>
   *             <p>When you create or update an event destination, you must provide one, and only
   *                 one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service
   *                 (Amazon SNS).</p>
   *         </note>
   *         <p>You can execute this operation no more than once per second.</p>
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
   * <p>Enables or disables the publishing of reputation metrics for emails sent using a
   *             specific configuration set in a given AWS Region. Reputation metrics include bounce
   *             and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
   *             create alarms when bounce or complaint rates exceed certain thresholds.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> | void {
    const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(args);
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
   * <p>Enables or disables email sending for messages sent using a specific configuration set
   *             in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms
   *             to temporarily pause email sending for a configuration set when the reputation metrics
   *             for that configuration set (such as your bounce on complaint rate) exceed certain
   *             thresholds.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput>;
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> | void {
    const command = new UpdateConfigurationSetSendingEnabledCommand(args);
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
   * <p>Modifies an association between a configuration set and a custom domain for open and
   *             click event tracking. </p>
   *         <p>By default, images and links used for tracking open and click events are hosted on
   *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
   *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
   */
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput>;
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> | void {
    const command = new UpdateConfigurationSetTrackingOptionsCommand(args);
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
   *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
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
   * <p>Updates a receipt rule.</p>
   *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
   *                 Developer Guide</a>.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReceiptRuleCommandOutput>;
  public updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;
  public updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;
  public updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReceiptRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): Promise<UpdateReceiptRuleCommandOutput> | void {
    const command = new UpdateReceiptRuleCommand(args);
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
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): Promise<UpdateTemplateCommandOutput> | void {
    const command = new UpdateTemplateCommand(args);
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
   * <p>Returns a set of DKIM tokens for a domain identity.</p>
   *         <important>
   *             <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you
   *                 specify is added to the list of identities that are associated with your account.
   *                 This is true even if you haven't already associated the domain with your account by
   *                 using the <code>VerifyDomainIdentity</code> operation. However, you can't send email
   *                 from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you
   *                 successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for
   *                 it</a>.</p>
   *         </important>
   *         <p>You use the tokens that are generated by this operation to create CNAME records. When
   *             Amazon SES detects that you've added these records to the DNS configuration for a domain, you
   *             can start sending email from that domain. You can start sending email even if you
   *             haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS
   *             configuration for your domain. All email that you send from the domain is authenticated
   *             using DKIM.</p>
   *         <p>To create the CNAME records for DKIM authentication, use the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Name</b>:
   *                         <i>token</i>._domainkey.<i>example.com</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Type</b>: CNAME</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Value</b>:
   *                     <i>token</i>.dkim.amazonses.com</p>
   *             </li>
   *          </ul>
   *         <p>In the preceding example, replace <i>token</i> with one of the tokens
   *             that are generated when you execute this operation. Replace
   *                 <i>example.com</i> with your domain. Repeat this process for each
   *             token that's generated by this operation.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDomainDkimCommandOutput>;
  public verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;
  public verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;
  public verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyDomainDkimCommandOutput) => void),
    cb?: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): Promise<VerifyDomainDkimCommandOutput> | void {
    const command = new VerifyDomainDkimCommand(args);
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
   * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS
   *             Region and attempts to verify it. For more information about verifying domains, see
   *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email
   *                 Addresses and Domains</a> in the <i>Amazon SES Developer
   *             Guide.</i>
   *          </p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDomainIdentityCommandOutput>;
  public verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;
  public verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;
  public verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyDomainIdentityCommandOutput) => void),
    cb?: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): Promise<VerifyDomainIdentityCommandOutput> | void {
    const command = new VerifyDomainIdentityCommand(args);
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
   * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
   *             address.</p>
   */
  public verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyEmailAddressCommandOutput>;
  public verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;
  public verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;
  public verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyEmailAddressCommandOutput) => void),
    cb?: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): Promise<VerifyEmailAddressCommandOutput> | void {
    const command = new VerifyEmailAddressCommand(args);
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
   *             AWS region and attempts to verify it. As a result of executing this operation, a
   *             verification email is sent to the specified address.</p>
   *         <p>You can execute this operation no more than once per second.</p>
   */
  public verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyEmailIdentityCommandOutput>;
  public verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;
  public verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;
  public verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyEmailIdentityCommandOutput) => void),
    cb?: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): Promise<VerifyEmailIdentityCommandOutput> | void {
    const command = new VerifyEmailIdentityCommand(args);
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
