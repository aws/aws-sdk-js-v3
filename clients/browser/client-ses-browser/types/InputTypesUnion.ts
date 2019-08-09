import { CloneReceiptRuleSetInput } from "./CloneReceiptRuleSetInput";
import { CreateConfigurationSetInput } from "./CreateConfigurationSetInput";
import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetTrackingOptionsInput } from "./CreateConfigurationSetTrackingOptionsInput";
import { CreateCustomVerificationEmailTemplateInput } from "./CreateCustomVerificationEmailTemplateInput";
import { CreateReceiptFilterInput } from "./CreateReceiptFilterInput";
import { CreateReceiptRuleInput } from "./CreateReceiptRuleInput";
import { CreateReceiptRuleSetInput } from "./CreateReceiptRuleSetInput";
import { CreateTemplateInput } from "./CreateTemplateInput";
import { DeleteConfigurationSetInput } from "./DeleteConfigurationSetInput";
import { DeleteConfigurationSetEventDestinationInput } from "./DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetTrackingOptionsInput } from "./DeleteConfigurationSetTrackingOptionsInput";
import { DeleteCustomVerificationEmailTemplateInput } from "./DeleteCustomVerificationEmailTemplateInput";
import { DeleteIdentityInput } from "./DeleteIdentityInput";
import { DeleteIdentityPolicyInput } from "./DeleteIdentityPolicyInput";
import { DeleteReceiptFilterInput } from "./DeleteReceiptFilterInput";
import { DeleteReceiptRuleInput } from "./DeleteReceiptRuleInput";
import { DeleteReceiptRuleSetInput } from "./DeleteReceiptRuleSetInput";
import { DeleteTemplateInput } from "./DeleteTemplateInput";
import { DeleteVerifiedEmailAddressInput } from "./DeleteVerifiedEmailAddressInput";
import { DescribeActiveReceiptRuleSetInput } from "./DescribeActiveReceiptRuleSetInput";
import { DescribeConfigurationSetInput } from "./DescribeConfigurationSetInput";
import { DescribeReceiptRuleInput } from "./DescribeReceiptRuleInput";
import { DescribeReceiptRuleSetInput } from "./DescribeReceiptRuleSetInput";
import { GetAccountSendingEnabledInput } from "./GetAccountSendingEnabledInput";
import { GetCustomVerificationEmailTemplateInput } from "./GetCustomVerificationEmailTemplateInput";
import { GetIdentityDkimAttributesInput } from "./GetIdentityDkimAttributesInput";
import { GetIdentityMailFromDomainAttributesInput } from "./GetIdentityMailFromDomainAttributesInput";
import { GetIdentityNotificationAttributesInput } from "./GetIdentityNotificationAttributesInput";
import { GetIdentityPoliciesInput } from "./GetIdentityPoliciesInput";
import { GetIdentityVerificationAttributesInput } from "./GetIdentityVerificationAttributesInput";
import { GetSendQuotaInput } from "./GetSendQuotaInput";
import { GetSendStatisticsInput } from "./GetSendStatisticsInput";
import { GetTemplateInput } from "./GetTemplateInput";
import { ListConfigurationSetsInput } from "./ListConfigurationSetsInput";
import { ListCustomVerificationEmailTemplatesInput } from "./ListCustomVerificationEmailTemplatesInput";
import { ListIdentitiesInput } from "./ListIdentitiesInput";
import { ListIdentityPoliciesInput } from "./ListIdentityPoliciesInput";
import { ListReceiptFiltersInput } from "./ListReceiptFiltersInput";
import { ListReceiptRuleSetsInput } from "./ListReceiptRuleSetsInput";
import { ListTemplatesInput } from "./ListTemplatesInput";
import { ListVerifiedEmailAddressesInput } from "./ListVerifiedEmailAddressesInput";
import { PutConfigurationSetDeliveryOptionsInput } from "./PutConfigurationSetDeliveryOptionsInput";
import { PutIdentityPolicyInput } from "./PutIdentityPolicyInput";
import { ReorderReceiptRuleSetInput } from "./ReorderReceiptRuleSetInput";
import { SendBounceInput } from "./SendBounceInput";
import { SendBulkTemplatedEmailInput } from "./SendBulkTemplatedEmailInput";
import { SendCustomVerificationEmailInput } from "./SendCustomVerificationEmailInput";
import { SendEmailInput } from "./SendEmailInput";
import { SendRawEmailInput } from "./SendRawEmailInput";
import { SendTemplatedEmailInput } from "./SendTemplatedEmailInput";
import { SetActiveReceiptRuleSetInput } from "./SetActiveReceiptRuleSetInput";
import { SetIdentityDkimEnabledInput } from "./SetIdentityDkimEnabledInput";
import { SetIdentityFeedbackForwardingEnabledInput } from "./SetIdentityFeedbackForwardingEnabledInput";
import { SetIdentityHeadersInNotificationsEnabledInput } from "./SetIdentityHeadersInNotificationsEnabledInput";
import { SetIdentityMailFromDomainInput } from "./SetIdentityMailFromDomainInput";
import { SetIdentityNotificationTopicInput } from "./SetIdentityNotificationTopicInput";
import { SetReceiptRulePositionInput } from "./SetReceiptRulePositionInput";
import { TestRenderTemplateInput } from "./TestRenderTemplateInput";
import { UpdateAccountSendingEnabledInput } from "./UpdateAccountSendingEnabledInput";
import { UpdateConfigurationSetEventDestinationInput } from "./UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetReputationMetricsEnabledInput } from "./UpdateConfigurationSetReputationMetricsEnabledInput";
import { UpdateConfigurationSetSendingEnabledInput } from "./UpdateConfigurationSetSendingEnabledInput";
import { UpdateConfigurationSetTrackingOptionsInput } from "./UpdateConfigurationSetTrackingOptionsInput";
import { UpdateCustomVerificationEmailTemplateInput } from "./UpdateCustomVerificationEmailTemplateInput";
import { UpdateReceiptRuleInput } from "./UpdateReceiptRuleInput";
import { UpdateTemplateInput } from "./UpdateTemplateInput";
import { VerifyDomainDkimInput } from "./VerifyDomainDkimInput";
import { VerifyDomainIdentityInput } from "./VerifyDomainIdentityInput";
import { VerifyEmailAddressInput } from "./VerifyEmailAddressInput";
import { VerifyEmailIdentityInput } from "./VerifyEmailIdentityInput";
export type InputTypesUnion =
  | CloneReceiptRuleSetInput
  | CreateConfigurationSetInput
  | CreateConfigurationSetEventDestinationInput
  | CreateConfigurationSetTrackingOptionsInput
  | CreateCustomVerificationEmailTemplateInput
  | CreateReceiptFilterInput
  | CreateReceiptRuleInput
  | CreateReceiptRuleSetInput
  | CreateTemplateInput
  | DeleteConfigurationSetInput
  | DeleteConfigurationSetEventDestinationInput
  | DeleteConfigurationSetTrackingOptionsInput
  | DeleteCustomVerificationEmailTemplateInput
  | DeleteIdentityInput
  | DeleteIdentityPolicyInput
  | DeleteReceiptFilterInput
  | DeleteReceiptRuleInput
  | DeleteReceiptRuleSetInput
  | DeleteTemplateInput
  | DeleteVerifiedEmailAddressInput
  | DescribeActiveReceiptRuleSetInput
  | DescribeConfigurationSetInput
  | DescribeReceiptRuleInput
  | DescribeReceiptRuleSetInput
  | GetAccountSendingEnabledInput
  | GetCustomVerificationEmailTemplateInput
  | GetIdentityDkimAttributesInput
  | GetIdentityMailFromDomainAttributesInput
  | GetIdentityNotificationAttributesInput
  | GetIdentityPoliciesInput
  | GetIdentityVerificationAttributesInput
  | GetSendQuotaInput
  | GetSendStatisticsInput
  | GetTemplateInput
  | ListConfigurationSetsInput
  | ListCustomVerificationEmailTemplatesInput
  | ListIdentitiesInput
  | ListIdentityPoliciesInput
  | ListReceiptFiltersInput
  | ListReceiptRuleSetsInput
  | ListTemplatesInput
  | ListVerifiedEmailAddressesInput
  | PutConfigurationSetDeliveryOptionsInput
  | PutIdentityPolicyInput
  | ReorderReceiptRuleSetInput
  | SendBounceInput
  | SendBulkTemplatedEmailInput
  | SendCustomVerificationEmailInput
  | SendEmailInput
  | SendRawEmailInput
  | SendTemplatedEmailInput
  | SetActiveReceiptRuleSetInput
  | SetIdentityDkimEnabledInput
  | SetIdentityFeedbackForwardingEnabledInput
  | SetIdentityHeadersInNotificationsEnabledInput
  | SetIdentityMailFromDomainInput
  | SetIdentityNotificationTopicInput
  | SetReceiptRulePositionInput
  | TestRenderTemplateInput
  | UpdateAccountSendingEnabledInput
  | UpdateConfigurationSetEventDestinationInput
  | UpdateConfigurationSetReputationMetricsEnabledInput
  | UpdateConfigurationSetSendingEnabledInput
  | UpdateConfigurationSetTrackingOptionsInput
  | UpdateCustomVerificationEmailTemplateInput
  | UpdateReceiptRuleInput
  | UpdateTemplateInput
  | VerifyDomainDkimInput
  | VerifyDomainIdentityInput
  | VerifyEmailAddressInput
  | VerifyEmailIdentityInput;
