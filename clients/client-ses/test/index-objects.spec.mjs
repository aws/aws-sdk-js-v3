import {
  BehaviorOnMXFailure,
  BounceType,
  BulkEmailStatus,
  CloneReceiptRuleSetCommand,
  ConfigurationSetAttribute,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand,
  CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand,
  CreateTemplateCommand,
  CustomMailFromStatus,
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
  DimensionValueSource,
  DsnAction,
  EventType,
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
  IdentityType,
  InvocationType,
  ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand,
  ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand,
  ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand,
  NotificationType,
  PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand,
  ReceiptFilterPolicy,
  ReorderReceiptRuleSetCommand,
  SES,
  SESClient,
  SESServiceException,
  SNSActionEncoding,
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
  StopScope,
  TestRenderTemplateCommand,
  TlsPolicy,
  UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand,
  UpdateTemplateCommand,
  VerificationStatus,
  VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand,
  paginateListCustomVerificationEmailTemplates,
  paginateListIdentities,
  waitForIdentityExists,
  waitUntilIdentityExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SESClient === "function");
assert(typeof SES === "function");
// commands
assert(typeof CloneReceiptRuleSetCommand === "function");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSetEventDestinationCommand === "function");
assert(typeof CreateConfigurationSetTrackingOptionsCommand === "function");
assert(typeof CreateCustomVerificationEmailTemplateCommand === "function");
assert(typeof CreateReceiptFilterCommand === "function");
assert(typeof CreateReceiptRuleCommand === "function");
assert(typeof CreateReceiptRuleSetCommand === "function");
assert(typeof CreateTemplateCommand === "function");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSetEventDestinationCommand === "function");
assert(typeof DeleteConfigurationSetTrackingOptionsCommand === "function");
assert(typeof DeleteCustomVerificationEmailTemplateCommand === "function");
assert(typeof DeleteIdentityCommand === "function");
assert(typeof DeleteIdentityPolicyCommand === "function");
assert(typeof DeleteReceiptFilterCommand === "function");
assert(typeof DeleteReceiptRuleCommand === "function");
assert(typeof DeleteReceiptRuleSetCommand === "function");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteVerifiedEmailAddressCommand === "function");
assert(typeof DescribeActiveReceiptRuleSetCommand === "function");
assert(typeof DescribeConfigurationSetCommand === "function");
assert(typeof DescribeReceiptRuleCommand === "function");
assert(typeof DescribeReceiptRuleSetCommand === "function");
assert(typeof GetAccountSendingEnabledCommand === "function");
assert(typeof GetCustomVerificationEmailTemplateCommand === "function");
assert(typeof GetIdentityDkimAttributesCommand === "function");
assert(typeof GetIdentityMailFromDomainAttributesCommand === "function");
assert(typeof GetIdentityNotificationAttributesCommand === "function");
assert(typeof GetIdentityPoliciesCommand === "function");
assert(typeof GetIdentityVerificationAttributesCommand === "function");
assert(typeof GetSendQuotaCommand === "function");
assert(typeof GetSendStatisticsCommand === "function");
assert(typeof GetTemplateCommand === "function");
assert(typeof ListConfigurationSetsCommand === "function");
assert(typeof ListCustomVerificationEmailTemplatesCommand === "function");
assert(typeof ListIdentitiesCommand === "function");
assert(typeof ListIdentityPoliciesCommand === "function");
assert(typeof ListReceiptFiltersCommand === "function");
assert(typeof ListReceiptRuleSetsCommand === "function");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListVerifiedEmailAddressesCommand === "function");
assert(typeof PutConfigurationSetDeliveryOptionsCommand === "function");
assert(typeof PutIdentityPolicyCommand === "function");
assert(typeof ReorderReceiptRuleSetCommand === "function");
assert(typeof SendBounceCommand === "function");
assert(typeof SendBulkTemplatedEmailCommand === "function");
assert(typeof SendCustomVerificationEmailCommand === "function");
assert(typeof SendEmailCommand === "function");
assert(typeof SendRawEmailCommand === "function");
assert(typeof SendTemplatedEmailCommand === "function");
assert(typeof SetActiveReceiptRuleSetCommand === "function");
assert(typeof SetIdentityDkimEnabledCommand === "function");
assert(typeof SetIdentityFeedbackForwardingEnabledCommand === "function");
assert(typeof SetIdentityHeadersInNotificationsEnabledCommand === "function");
assert(typeof SetIdentityMailFromDomainCommand === "function");
assert(typeof SetIdentityNotificationTopicCommand === "function");
assert(typeof SetReceiptRulePositionCommand === "function");
assert(typeof TestRenderTemplateCommand === "function");
assert(typeof UpdateAccountSendingEnabledCommand === "function");
assert(typeof UpdateConfigurationSetEventDestinationCommand === "function");
assert(typeof UpdateConfigurationSetReputationMetricsEnabledCommand === "function");
assert(typeof UpdateConfigurationSetSendingEnabledCommand === "function");
assert(typeof UpdateConfigurationSetTrackingOptionsCommand === "function");
assert(typeof UpdateCustomVerificationEmailTemplateCommand === "function");
assert(typeof UpdateReceiptRuleCommand === "function");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof VerifyDomainDkimCommand === "function");
assert(typeof VerifyDomainIdentityCommand === "function");
assert(typeof VerifyEmailAddressCommand === "function");
assert(typeof VerifyEmailIdentityCommand === "function");
// enums
assert(typeof BehaviorOnMXFailure === "object");
assert(typeof BounceType === "object");
assert(typeof BulkEmailStatus === "object");
assert(typeof ConfigurationSetAttribute === "object");
assert(typeof CustomMailFromStatus === "object");
assert(typeof DimensionValueSource === "object");
assert(typeof DsnAction === "object");
assert(typeof EventType === "object");
assert(typeof IdentityType === "object");
assert(typeof InvocationType === "object");
assert(typeof NotificationType === "object");
assert(typeof ReceiptFilterPolicy === "object");
assert(typeof SNSActionEncoding === "object");
assert(typeof StopScope === "object");
assert(typeof TlsPolicy === "object");
assert(typeof VerificationStatus === "object");
// errors
assert(SESServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForIdentityExists === "function");
assert(typeof waitUntilIdentityExists === "function");
// paginators
assert(typeof paginateListCustomVerificationEmailTemplates === "function");
assert(typeof paginateListIdentities === "function");
console.log(`SES index test passed.`);
