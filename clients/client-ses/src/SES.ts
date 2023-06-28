// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { SESClient, SESClientConfig } from "./SESClient";

const commands = {
  CloneReceiptRuleSetCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand,
  CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand,
  CreateTemplateCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteIdentityCommand,
  DeleteIdentityPolicyCommand,
  DeleteReceiptFilterCommand,
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleSetCommand,
  DeleteTemplateCommand,
  DeleteVerifiedEmailAddressCommand,
  DescribeActiveReceiptRuleSetCommand,
  DescribeConfigurationSetCommand,
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleSetCommand,
  GetAccountSendingEnabledCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetIdentityDkimAttributesCommand,
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityNotificationAttributesCommand,
  GetIdentityPoliciesCommand,
  GetIdentityVerificationAttributesCommand,
  GetSendQuotaCommand,
  GetSendStatisticsCommand,
  GetTemplateCommand,
  ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand,
  ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand,
  ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand,
  ReorderReceiptRuleSetCommand,
  SendBounceCommand,
  SendBulkTemplatedEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  SendRawEmailCommand,
  SendTemplatedEmailCommand,
  SetActiveReceiptRuleSetCommand,
  SetIdentityDkimEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityMailFromDomainCommand,
  SetIdentityNotificationTopicCommand,
  SetReceiptRulePositionCommand,
  TestRenderTemplateCommand,
  UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand,
  UpdateTemplateCommand,
  VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand,
};

export interface SES {
  /**
   * @see {@link CloneReceiptRuleSetCommand}
   */
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloneReceiptRuleSetCommandOutput>;
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): void;
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
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
   * @see {@link CreateConfigurationSetTrackingOptionsCommand}
   */
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetTrackingOptionsCommandOutput>;
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
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
   * @see {@link CreateReceiptFilterCommand}
   */
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptFilterCommandOutput>;
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReceiptRuleCommand}
   */
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptRuleCommandOutput>;
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReceiptRuleSetCommand}
   */
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReceiptRuleSetCommandOutput>;
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(args: CreateTemplateCommandInput, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
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
   * @see {@link DeleteConfigurationSetTrackingOptionsCommand}
   */
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput>;
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
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
   * @see {@link DeleteIdentityCommand}
   */
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityCommandOutput>;
  deleteIdentity(args: DeleteIdentityCommandInput, cb: (err: any, data?: DeleteIdentityCommandOutput) => void): void;
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityPolicyCommand}
   */
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityPolicyCommandOutput>;
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptFilterCommand}
   */
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptFilterCommandOutput>;
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptRuleCommand}
   */
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptRuleCommandOutput>;
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptRuleSetCommand}
   */
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReceiptRuleSetCommandOutput>;
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(args: DeleteTemplateCommandInput, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedEmailAddressCommand}
   */
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedEmailAddressCommandOutput>;
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActiveReceiptRuleSetCommand}
   */
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActiveReceiptRuleSetCommandOutput>;
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationSetCommand}
   */
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSetCommandOutput>;
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReceiptRuleCommand}
   */
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReceiptRuleCommandOutput>;
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReceiptRuleSetCommand}
   */
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReceiptRuleSetCommandOutput>;
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSendingEnabledCommand}
   */
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSendingEnabledCommandOutput>;
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): void;
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
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
   * @see {@link GetIdentityDkimAttributesCommand}
   */
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityDkimAttributesCommandOutput>;
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityMailFromDomainAttributesCommand}
   */
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput>;
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityNotificationAttributesCommand}
   */
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityNotificationAttributesCommandOutput>;
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityPoliciesCommand}
   */
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityPoliciesCommandOutput>;
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityVerificationAttributesCommand}
   */
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityVerificationAttributesCommandOutput>;
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSendQuotaCommand}
   */
  getSendQuota(args: GetSendQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetSendQuotaCommandOutput>;
  getSendQuota(args: GetSendQuotaCommandInput, cb: (err: any, data?: GetSendQuotaCommandOutput) => void): void;
  getSendQuota(
    args: GetSendQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSendQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSendStatisticsCommand}
   */
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSendStatisticsCommandOutput>;
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
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
   * @see {@link ListIdentitiesCommand}
   */
  listIdentities(
    args: ListIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentitiesCommandOutput>;
  listIdentities(args: ListIdentitiesCommandInput, cb: (err: any, data?: ListIdentitiesCommandOutput) => void): void;
  listIdentities(
    args: ListIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityPoliciesCommand}
   */
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityPoliciesCommandOutput>;
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceiptFiltersCommand}
   */
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceiptFiltersCommandOutput>;
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceiptRuleSetsCommand}
   */
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceiptRuleSetsCommandOutput>;
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
  listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVerifiedEmailAddressesCommand}
   */
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVerifiedEmailAddressesCommandOutput>;
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): void;
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
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
   * @see {@link PutIdentityPolicyCommand}
   */
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIdentityPolicyCommandOutput>;
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ReorderReceiptRuleSetCommand}
   */
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReorderReceiptRuleSetCommandOutput>;
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBounceCommand}
   */
  sendBounce(args: SendBounceCommandInput, options?: __HttpHandlerOptions): Promise<SendBounceCommandOutput>;
  sendBounce(args: SendBounceCommandInput, cb: (err: any, data?: SendBounceCommandOutput) => void): void;
  sendBounce(
    args: SendBounceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBounceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBulkTemplatedEmailCommand}
   */
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendBulkTemplatedEmailCommandOutput>;
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): void;
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
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
   * @see {@link SendRawEmailCommand}
   */
  sendRawEmail(args: SendRawEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendRawEmailCommandOutput>;
  sendRawEmail(args: SendRawEmailCommandInput, cb: (err: any, data?: SendRawEmailCommandOutput) => void): void;
  sendRawEmail(
    args: SendRawEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendRawEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTemplatedEmailCommand}
   */
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTemplatedEmailCommandOutput>;
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SetActiveReceiptRuleSetCommand}
   */
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetActiveReceiptRuleSetCommandOutput>;
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityDkimEnabledCommand}
   */
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityDkimEnabledCommandOutput>;
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityFeedbackForwardingEnabledCommand}
   */
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput>;
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityHeadersInNotificationsEnabledCommand}
   */
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput>;
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityMailFromDomainCommand}
   */
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityMailFromDomainCommandOutput>;
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityNotificationTopicCommand}
   */
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIdentityNotificationTopicCommandOutput>;
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link SetReceiptRulePositionCommand}
   */
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetReceiptRulePositionCommandOutput>;
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestRenderTemplateCommand}
   */
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRenderTemplateCommandOutput>;
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSendingEnabledCommand}
   */
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSendingEnabledCommandOutput>;
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): void;
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
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
   * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommand}
   */
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetSendingEnabledCommand}
   */
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput>;
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetTrackingOptionsCommand}
   */
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput>;
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
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
   * @see {@link UpdateReceiptRuleCommand}
   */
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReceiptRuleCommandOutput>;
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(args: UpdateTemplateCommandInput, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDomainDkimCommand}
   */
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDomainDkimCommandOutput>;
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDomainIdentityCommand}
   */
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDomainIdentityCommandOutput>;
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyEmailAddressCommand}
   */
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyEmailAddressCommandOutput>;
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyEmailIdentityCommand}
   */
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyEmailIdentityCommandOutput>;
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class SES extends SESClient implements SES {}
createAggregatedClient(commands, SES);
