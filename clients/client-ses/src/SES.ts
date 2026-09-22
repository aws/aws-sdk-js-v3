// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CloneReceiptRuleSetCommandInput,
  type CloneReceiptRuleSetCommandOutput,
  CloneReceiptRuleSetCommand,
} from "./commands/CloneReceiptRuleSetCommand";
import {
  type CreateConfigurationSetCommandInput,
  type CreateConfigurationSetCommandOutput,
  CreateConfigurationSetCommand,
} from "./commands/CreateConfigurationSetCommand";
import {
  type CreateConfigurationSetEventDestinationCommandInput,
  type CreateConfigurationSetEventDestinationCommandOutput,
  CreateConfigurationSetEventDestinationCommand,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  type CreateConfigurationSetTrackingOptionsCommandInput,
  type CreateConfigurationSetTrackingOptionsCommandOutput,
  CreateConfigurationSetTrackingOptionsCommand,
} from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import {
  type CreateCustomVerificationEmailTemplateCommandInput,
  type CreateCustomVerificationEmailTemplateCommandOutput,
  CreateCustomVerificationEmailTemplateCommand,
} from "./commands/CreateCustomVerificationEmailTemplateCommand";
import {
  type CreateReceiptFilterCommandInput,
  type CreateReceiptFilterCommandOutput,
  CreateReceiptFilterCommand,
} from "./commands/CreateReceiptFilterCommand";
import {
  type CreateReceiptRuleCommandInput,
  type CreateReceiptRuleCommandOutput,
  CreateReceiptRuleCommand,
} from "./commands/CreateReceiptRuleCommand";
import {
  type CreateReceiptRuleSetCommandInput,
  type CreateReceiptRuleSetCommandOutput,
  CreateReceiptRuleSetCommand,
} from "./commands/CreateReceiptRuleSetCommand";
import {
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  CreateTemplateCommand,
} from "./commands/CreateTemplateCommand";
import {
  type DeleteConfigurationSetCommandInput,
  type DeleteConfigurationSetCommandOutput,
  DeleteConfigurationSetCommand,
} from "./commands/DeleteConfigurationSetCommand";
import {
  type DeleteConfigurationSetEventDestinationCommandInput,
  type DeleteConfigurationSetEventDestinationCommandOutput,
  DeleteConfigurationSetEventDestinationCommand,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  type DeleteConfigurationSetTrackingOptionsCommandInput,
  type DeleteConfigurationSetTrackingOptionsCommandOutput,
  DeleteConfigurationSetTrackingOptionsCommand,
} from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import {
  type DeleteCustomVerificationEmailTemplateCommandInput,
  type DeleteCustomVerificationEmailTemplateCommandOutput,
  DeleteCustomVerificationEmailTemplateCommand,
} from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import {
  type DeleteIdentityCommandInput,
  type DeleteIdentityCommandOutput,
  DeleteIdentityCommand,
} from "./commands/DeleteIdentityCommand";
import {
  type DeleteIdentityPolicyCommandInput,
  type DeleteIdentityPolicyCommandOutput,
  DeleteIdentityPolicyCommand,
} from "./commands/DeleteIdentityPolicyCommand";
import {
  type DeleteReceiptFilterCommandInput,
  type DeleteReceiptFilterCommandOutput,
  DeleteReceiptFilterCommand,
} from "./commands/DeleteReceiptFilterCommand";
import {
  type DeleteReceiptRuleCommandInput,
  type DeleteReceiptRuleCommandOutput,
  DeleteReceiptRuleCommand,
} from "./commands/DeleteReceiptRuleCommand";
import {
  type DeleteReceiptRuleSetCommandInput,
  type DeleteReceiptRuleSetCommandOutput,
  DeleteReceiptRuleSetCommand,
} from "./commands/DeleteReceiptRuleSetCommand";
import {
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteTemplateCommand,
} from "./commands/DeleteTemplateCommand";
import {
  type DeleteVerifiedEmailAddressCommandInput,
  type DeleteVerifiedEmailAddressCommandOutput,
  DeleteVerifiedEmailAddressCommand,
} from "./commands/DeleteVerifiedEmailAddressCommand";
import {
  type DescribeActiveReceiptRuleSetCommandInput,
  type DescribeActiveReceiptRuleSetCommandOutput,
  DescribeActiveReceiptRuleSetCommand,
} from "./commands/DescribeActiveReceiptRuleSetCommand";
import {
  type DescribeConfigurationSetCommandInput,
  type DescribeConfigurationSetCommandOutput,
  DescribeConfigurationSetCommand,
} from "./commands/DescribeConfigurationSetCommand";
import {
  type DescribeReceiptRuleCommandInput,
  type DescribeReceiptRuleCommandOutput,
  DescribeReceiptRuleCommand,
} from "./commands/DescribeReceiptRuleCommand";
import {
  type DescribeReceiptRuleSetCommandInput,
  type DescribeReceiptRuleSetCommandOutput,
  DescribeReceiptRuleSetCommand,
} from "./commands/DescribeReceiptRuleSetCommand";
import {
  type GetAccountSendingEnabledCommandInput,
  type GetAccountSendingEnabledCommandOutput,
  GetAccountSendingEnabledCommand,
} from "./commands/GetAccountSendingEnabledCommand";
import {
  type GetCustomVerificationEmailTemplateCommandInput,
  type GetCustomVerificationEmailTemplateCommandOutput,
  GetCustomVerificationEmailTemplateCommand,
} from "./commands/GetCustomVerificationEmailTemplateCommand";
import {
  type GetIdentityDkimAttributesCommandInput,
  type GetIdentityDkimAttributesCommandOutput,
  GetIdentityDkimAttributesCommand,
} from "./commands/GetIdentityDkimAttributesCommand";
import {
  type GetIdentityMailFromDomainAttributesCommandInput,
  type GetIdentityMailFromDomainAttributesCommandOutput,
  GetIdentityMailFromDomainAttributesCommand,
} from "./commands/GetIdentityMailFromDomainAttributesCommand";
import {
  type GetIdentityNotificationAttributesCommandInput,
  type GetIdentityNotificationAttributesCommandOutput,
  GetIdentityNotificationAttributesCommand,
} from "./commands/GetIdentityNotificationAttributesCommand";
import {
  type GetIdentityPoliciesCommandInput,
  type GetIdentityPoliciesCommandOutput,
  GetIdentityPoliciesCommand,
} from "./commands/GetIdentityPoliciesCommand";
import {
  type GetIdentityVerificationAttributesCommandInput,
  type GetIdentityVerificationAttributesCommandOutput,
  GetIdentityVerificationAttributesCommand,
} from "./commands/GetIdentityVerificationAttributesCommand";
import {
  type GetSendQuotaCommandInput,
  type GetSendQuotaCommandOutput,
  GetSendQuotaCommand,
} from "./commands/GetSendQuotaCommand";
import {
  type GetSendStatisticsCommandInput,
  type GetSendStatisticsCommandOutput,
  GetSendStatisticsCommand,
} from "./commands/GetSendStatisticsCommand";
import {
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  GetTemplateCommand,
} from "./commands/GetTemplateCommand";
import {
  type ListConfigurationSetsCommandInput,
  type ListConfigurationSetsCommandOutput,
  ListConfigurationSetsCommand,
} from "./commands/ListConfigurationSetsCommand";
import {
  type ListCustomVerificationEmailTemplatesCommandInput,
  type ListCustomVerificationEmailTemplatesCommandOutput,
  ListCustomVerificationEmailTemplatesCommand,
} from "./commands/ListCustomVerificationEmailTemplatesCommand";
import {
  type ListIdentitiesCommandInput,
  type ListIdentitiesCommandOutput,
  ListIdentitiesCommand,
} from "./commands/ListIdentitiesCommand";
import {
  type ListIdentityPoliciesCommandInput,
  type ListIdentityPoliciesCommandOutput,
  ListIdentityPoliciesCommand,
} from "./commands/ListIdentityPoliciesCommand";
import {
  type ListReceiptFiltersCommandInput,
  type ListReceiptFiltersCommandOutput,
  ListReceiptFiltersCommand,
} from "./commands/ListReceiptFiltersCommand";
import {
  type ListReceiptRuleSetsCommandInput,
  type ListReceiptRuleSetsCommandOutput,
  ListReceiptRuleSetsCommand,
} from "./commands/ListReceiptRuleSetsCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type ListVerifiedEmailAddressesCommandInput,
  type ListVerifiedEmailAddressesCommandOutput,
  ListVerifiedEmailAddressesCommand,
} from "./commands/ListVerifiedEmailAddressesCommand";
import {
  type PutConfigurationSetDeliveryOptionsCommandInput,
  type PutConfigurationSetDeliveryOptionsCommandOutput,
  PutConfigurationSetDeliveryOptionsCommand,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  type PutIdentityPolicyCommandInput,
  type PutIdentityPolicyCommandOutput,
  PutIdentityPolicyCommand,
} from "./commands/PutIdentityPolicyCommand";
import {
  type ReorderReceiptRuleSetCommandInput,
  type ReorderReceiptRuleSetCommandOutput,
  ReorderReceiptRuleSetCommand,
} from "./commands/ReorderReceiptRuleSetCommand";
import {
  type SendBounceCommandInput,
  type SendBounceCommandOutput,
  SendBounceCommand,
} from "./commands/SendBounceCommand";
import {
  type SendBulkTemplatedEmailCommandInput,
  type SendBulkTemplatedEmailCommandOutput,
  SendBulkTemplatedEmailCommand,
} from "./commands/SendBulkTemplatedEmailCommand";
import {
  type SendCustomVerificationEmailCommandInput,
  type SendCustomVerificationEmailCommandOutput,
  SendCustomVerificationEmailCommand,
} from "./commands/SendCustomVerificationEmailCommand";
import { type SendEmailCommandInput, type SendEmailCommandOutput, SendEmailCommand } from "./commands/SendEmailCommand";
import {
  type SendRawEmailCommandInput,
  type SendRawEmailCommandOutput,
  SendRawEmailCommand,
} from "./commands/SendRawEmailCommand";
import {
  type SendTemplatedEmailCommandInput,
  type SendTemplatedEmailCommandOutput,
  SendTemplatedEmailCommand,
} from "./commands/SendTemplatedEmailCommand";
import {
  type SetActiveReceiptRuleSetCommandInput,
  type SetActiveReceiptRuleSetCommandOutput,
  SetActiveReceiptRuleSetCommand,
} from "./commands/SetActiveReceiptRuleSetCommand";
import {
  type SetIdentityDkimEnabledCommandInput,
  type SetIdentityDkimEnabledCommandOutput,
  SetIdentityDkimEnabledCommand,
} from "./commands/SetIdentityDkimEnabledCommand";
import {
  type SetIdentityFeedbackForwardingEnabledCommandInput,
  type SetIdentityFeedbackForwardingEnabledCommandOutput,
  SetIdentityFeedbackForwardingEnabledCommand,
} from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import {
  type SetIdentityHeadersInNotificationsEnabledCommandInput,
  type SetIdentityHeadersInNotificationsEnabledCommandOutput,
  SetIdentityHeadersInNotificationsEnabledCommand,
} from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import {
  type SetIdentityMailFromDomainCommandInput,
  type SetIdentityMailFromDomainCommandOutput,
  SetIdentityMailFromDomainCommand,
} from "./commands/SetIdentityMailFromDomainCommand";
import {
  type SetIdentityNotificationTopicCommandInput,
  type SetIdentityNotificationTopicCommandOutput,
  SetIdentityNotificationTopicCommand,
} from "./commands/SetIdentityNotificationTopicCommand";
import {
  type SetReceiptRulePositionCommandInput,
  type SetReceiptRulePositionCommandOutput,
  SetReceiptRulePositionCommand,
} from "./commands/SetReceiptRulePositionCommand";
import {
  type TestRenderTemplateCommandInput,
  type TestRenderTemplateCommandOutput,
  TestRenderTemplateCommand,
} from "./commands/TestRenderTemplateCommand";
import {
  type UpdateAccountSendingEnabledCommandInput,
  type UpdateAccountSendingEnabledCommandOutput,
  UpdateAccountSendingEnabledCommand,
} from "./commands/UpdateAccountSendingEnabledCommand";
import {
  type UpdateConfigurationSetEventDestinationCommandInput,
  type UpdateConfigurationSetEventDestinationCommandOutput,
  UpdateConfigurationSetEventDestinationCommand,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import {
  type UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  type UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
} from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import {
  type UpdateConfigurationSetSendingEnabledCommandInput,
  type UpdateConfigurationSetSendingEnabledCommandOutput,
  UpdateConfigurationSetSendingEnabledCommand,
} from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import {
  type UpdateConfigurationSetTrackingOptionsCommandInput,
  type UpdateConfigurationSetTrackingOptionsCommandOutput,
  UpdateConfigurationSetTrackingOptionsCommand,
} from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import {
  type UpdateCustomVerificationEmailTemplateCommandInput,
  type UpdateCustomVerificationEmailTemplateCommandOutput,
  UpdateCustomVerificationEmailTemplateCommand,
} from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import {
  type UpdateReceiptRuleCommandInput,
  type UpdateReceiptRuleCommandOutput,
  UpdateReceiptRuleCommand,
} from "./commands/UpdateReceiptRuleCommand";
import {
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  UpdateTemplateCommand,
} from "./commands/UpdateTemplateCommand";
import {
  type VerifyDomainDkimCommandInput,
  type VerifyDomainDkimCommandOutput,
  VerifyDomainDkimCommand,
} from "./commands/VerifyDomainDkimCommand";
import {
  type VerifyDomainIdentityCommandInput,
  type VerifyDomainIdentityCommandOutput,
  VerifyDomainIdentityCommand,
} from "./commands/VerifyDomainIdentityCommand";
import {
  type VerifyEmailAddressCommandInput,
  type VerifyEmailAddressCommandOutput,
  VerifyEmailAddressCommand,
} from "./commands/VerifyEmailAddressCommand";
import {
  type VerifyEmailIdentityCommandInput,
  type VerifyEmailIdentityCommandOutput,
  VerifyEmailIdentityCommand,
} from "./commands/VerifyEmailIdentityCommand";
import type { SESServiceException } from "./models/SESServiceException";
import {
  paginateListCustomVerificationEmailTemplates,
} from "./pagination/ListCustomVerificationEmailTemplatesPaginator";
import { paginateListIdentities } from "./pagination/ListIdentitiesPaginator";
import { SESClient } from "./SESClient";
import { waitUntilIdentityExists } from "./waiters/waitForIdentityExists";

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
const paginators = {
  paginateListCustomVerificationEmailTemplates,
  paginateListIdentities,
};
const waiters = {
  waitUntilIdentityExists,
};

/**
 * @public
 */
export interface SESRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SES {
  /**
   * @see {@link CloneReceiptRuleSetCommand}
   */
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<CloneReceiptRuleSetCommandOutput>;
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): void;
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetTrackingOptionsCommand}
   */
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateConfigurationSetTrackingOptionsCommandOutput>;
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomVerificationEmailTemplateCommand}
   */
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateCustomVerificationEmailTemplateCommandOutput>;
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReceiptFilterCommand}
   */
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateReceiptFilterCommandOutput>;
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReceiptRuleCommand}
   */
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateReceiptRuleCommandOutput>;
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReceiptRuleSetCommand}
   */
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateReceiptRuleSetCommandOutput>;
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetTrackingOptionsCommand}
   */
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput>;
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomVerificationEmailTemplateCommand}
   */
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteCustomVerificationEmailTemplateCommandOutput>;
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityCommand}
   */
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteIdentityCommandOutput>;
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    cb: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): void;
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityPolicyCommand}
   */
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteIdentityPolicyCommandOutput>;
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptFilterCommand}
   */
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteReceiptFilterCommandOutput>;
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptRuleCommand}
   */
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteReceiptRuleCommandOutput>;
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReceiptRuleSetCommand}
   */
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteReceiptRuleSetCommandOutput>;
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedEmailAddressCommand}
   */
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options?: SESRequestOptions
  ): Promise<DeleteVerifiedEmailAddressCommandOutput>;
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActiveReceiptRuleSetCommand}
   */
  describeActiveReceiptRuleSet(): Promise<DescribeActiveReceiptRuleSetCommandOutput>;
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<DescribeActiveReceiptRuleSetCommandOutput>;
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationSetCommand}
   */
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options?: SESRequestOptions
  ): Promise<DescribeConfigurationSetCommandOutput>;
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReceiptRuleCommand}
   */
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options?: SESRequestOptions
  ): Promise<DescribeReceiptRuleCommandOutput>;
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReceiptRuleSetCommand}
   */
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<DescribeReceiptRuleSetCommandOutput>;
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSendingEnabledCommand}
   */
  getAccountSendingEnabled(): Promise<GetAccountSendingEnabledCommandOutput>;
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<GetAccountSendingEnabledCommandOutput>;
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): void;
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomVerificationEmailTemplateCommand}
   */
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput>;
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityDkimAttributesCommand}
   */
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options?: SESRequestOptions
  ): Promise<GetIdentityDkimAttributesCommandOutput>;
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityMailFromDomainAttributesCommand}
   */
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options?: SESRequestOptions
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput>;
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityNotificationAttributesCommand}
   */
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options?: SESRequestOptions
  ): Promise<GetIdentityNotificationAttributesCommandOutput>;
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityPoliciesCommand}
   */
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options?: SESRequestOptions
  ): Promise<GetIdentityPoliciesCommandOutput>;
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityVerificationAttributesCommand}
   */
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options?: SESRequestOptions
  ): Promise<GetIdentityVerificationAttributesCommandOutput>;
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSendQuotaCommand}
   */
  getSendQuota(): Promise<GetSendQuotaCommandOutput>;
  getSendQuota(
    args: GetSendQuotaCommandInput,
    options?: SESRequestOptions
  ): Promise<GetSendQuotaCommandOutput>;
  getSendQuota(
    args: GetSendQuotaCommandInput,
    cb: (err: any, data?: GetSendQuotaCommandOutput) => void
  ): void;
  getSendQuota(
    args: GetSendQuotaCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetSendQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSendStatisticsCommand}
   */
  getSendStatistics(): Promise<GetSendStatisticsCommandOutput>;
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options?: SESRequestOptions
  ): Promise<GetSendStatisticsCommandOutput>;
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetSendStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(
    args: GetTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<GetTemplateCommandOutput>;
  getTemplate(
    args: GetTemplateCommandInput,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: SESRequestOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomVerificationEmailTemplatesCommand}
   */
  listCustomVerificationEmailTemplates(): Promise<ListCustomVerificationEmailTemplatesCommandOutput>;
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: SESRequestOptions
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput>;
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentitiesCommand}
   */
  listIdentities(): Promise<ListIdentitiesCommandOutput>;
  listIdentities(
    args: ListIdentitiesCommandInput,
    options?: SESRequestOptions
  ): Promise<ListIdentitiesCommandOutput>;
  listIdentities(
    args: ListIdentitiesCommandInput,
    cb: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): void;
  listIdentities(
    args: ListIdentitiesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityPoliciesCommand}
   */
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options?: SESRequestOptions
  ): Promise<ListIdentityPoliciesCommandOutput>;
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceiptFiltersCommand}
   */
  listReceiptFilters(): Promise<ListReceiptFiltersCommandOutput>;
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options?: SESRequestOptions
  ): Promise<ListReceiptFiltersCommandOutput>;
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceiptRuleSetsCommand}
   */
  listReceiptRuleSets(): Promise<ListReceiptRuleSetsCommandOutput>;
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options?: SESRequestOptions
  ): Promise<ListReceiptRuleSetsCommandOutput>;
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: SESRequestOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVerifiedEmailAddressesCommand}
   */
  listVerifiedEmailAddresses(): Promise<ListVerifiedEmailAddressesCommandOutput>;
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options?: SESRequestOptions
  ): Promise<ListVerifiedEmailAddressesCommandOutput>;
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): void;
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetDeliveryOptionsCommand}
   */
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: SESRequestOptions
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIdentityPolicyCommand}
   */
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options?: SESRequestOptions
  ): Promise<PutIdentityPolicyCommandOutput>;
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ReorderReceiptRuleSetCommand}
   */
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<ReorderReceiptRuleSetCommandOutput>;
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBounceCommand}
   */
  sendBounce(
    args: SendBounceCommandInput,
    options?: SESRequestOptions
  ): Promise<SendBounceCommandOutput>;
  sendBounce(
    args: SendBounceCommandInput,
    cb: (err: any, data?: SendBounceCommandOutput) => void
  ): void;
  sendBounce(
    args: SendBounceCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendBounceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBulkTemplatedEmailCommand}
   */
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options?: SESRequestOptions
  ): Promise<SendBulkTemplatedEmailCommandOutput>;
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): void;
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendCustomVerificationEmailCommand}
   */
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options?: SESRequestOptions
  ): Promise<SendCustomVerificationEmailCommandOutput>;
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEmailCommand}
   */
  sendEmail(
    args: SendEmailCommandInput,
    options?: SESRequestOptions
  ): Promise<SendEmailCommandOutput>;
  sendEmail(
    args: SendEmailCommandInput,
    cb: (err: any, data?: SendEmailCommandOutput) => void
  ): void;
  sendEmail(
    args: SendEmailCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendRawEmailCommand}
   */
  sendRawEmail(
    args: SendRawEmailCommandInput,
    options?: SESRequestOptions
  ): Promise<SendRawEmailCommandOutput>;
  sendRawEmail(
    args: SendRawEmailCommandInput,
    cb: (err: any, data?: SendRawEmailCommandOutput) => void
  ): void;
  sendRawEmail(
    args: SendRawEmailCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendRawEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTemplatedEmailCommand}
   */
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options?: SESRequestOptions
  ): Promise<SendTemplatedEmailCommandOutput>;
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link SetActiveReceiptRuleSetCommand}
   */
  setActiveReceiptRuleSet(): Promise<SetActiveReceiptRuleSetCommandOutput>;
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options?: SESRequestOptions
  ): Promise<SetActiveReceiptRuleSetCommandOutput>;
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityDkimEnabledCommand}
   */
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<SetIdentityDkimEnabledCommandOutput>;
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityFeedbackForwardingEnabledCommand}
   */
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput>;
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityHeadersInNotificationsEnabledCommand}
   */
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput>;
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityMailFromDomainCommand}
   */
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options?: SESRequestOptions
  ): Promise<SetIdentityMailFromDomainCommandOutput>;
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIdentityNotificationTopicCommand}
   */
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options?: SESRequestOptions
  ): Promise<SetIdentityNotificationTopicCommandOutput>;
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link SetReceiptRulePositionCommand}
   */
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options?: SESRequestOptions
  ): Promise<SetReceiptRulePositionCommandOutput>;
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestRenderTemplateCommand}
   */
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<TestRenderTemplateCommandOutput>;
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: TestRenderTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSendingEnabledCommand}
   */
  updateAccountSendingEnabled(): Promise<UpdateAccountSendingEnabledCommandOutput>;
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateAccountSendingEnabledCommandOutput>;
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): void;
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommand}
   */
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetSendingEnabledCommand}
   */
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput>;
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetTrackingOptionsCommand}
   */
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput>;
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomVerificationEmailTemplateCommand}
   */
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateCustomVerificationEmailTemplateCommandOutput>;
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReceiptRuleCommand}
   */
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateReceiptRuleCommandOutput>;
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: SESRequestOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDomainDkimCommand}
   */
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options?: SESRequestOptions
  ): Promise<VerifyDomainDkimCommandOutput>;
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDomainIdentityCommand}
   */
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options?: SESRequestOptions
  ): Promise<VerifyDomainIdentityCommandOutput>;
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyEmailAddressCommand}
   */
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options?: SESRequestOptions
  ): Promise<VerifyEmailAddressCommandOutput>;
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyEmailIdentityCommand}
   */
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options?: SESRequestOptions
  ): Promise<VerifyEmailIdentityCommandOutput>;
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options: SESRequestOptions,
    cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomVerificationEmailTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomVerificationEmailTemplatesCommandOutput}.
   */
  paginateListCustomVerificationEmailTemplates(
    args?: ListCustomVerificationEmailTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomVerificationEmailTemplatesCommandOutput>;

  /**
   * @see {@link ListIdentitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentitiesCommandOutput}.
   */
  paginateListIdentities(
    args?: ListIdentitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentitiesCommandOutput>;

  /**
   * @see {@link GetIdentityVerificationAttributesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilIdentityExists(
    args: GetIdentityVerificationAttributesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<SES>, "client">
  ): Promise<WaiterResult<GetIdentityVerificationAttributesCommandOutput>>;
}

/**
 * <fullname>Amazon Simple Email Service</fullname>
 *          <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version
 *             2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>. </p>
 *          <note>
 *             <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and
 *                     Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          </note>
 *          <p>This documentation contains reference information related to the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_Operations.html">Amazon SES API Actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_Types.html">Amazon SES
 *                         API Data Types</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/ses/latest/APIReference/CommonParameters.html">Common
 *                         Parameters</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/ses/latest/APIReference/CommonErrors.html">Common Errors</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class SES extends SESClient implements SES {}
createAggregatedClient(commands, SES, { paginators, waiters });
