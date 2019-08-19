import { CloneReceiptRuleSetOutput } from "./CloneReceiptRuleSetOutput";
import { CreateConfigurationSetOutput } from "./CreateConfigurationSetOutput";
import { CreateConfigurationSetEventDestinationOutput } from "./CreateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetTrackingOptionsOutput } from "./CreateConfigurationSetTrackingOptionsOutput";
import { CreateCustomVerificationEmailTemplateOutput } from "./CreateCustomVerificationEmailTemplateOutput";
import { CreateReceiptFilterOutput } from "./CreateReceiptFilterOutput";
import { CreateReceiptRuleOutput } from "./CreateReceiptRuleOutput";
import { CreateReceiptRuleSetOutput } from "./CreateReceiptRuleSetOutput";
import { CreateTemplateOutput } from "./CreateTemplateOutput";
import { DeleteConfigurationSetOutput } from "./DeleteConfigurationSetOutput";
import { DeleteConfigurationSetEventDestinationOutput } from "./DeleteConfigurationSetEventDestinationOutput";
import { DeleteConfigurationSetTrackingOptionsOutput } from "./DeleteConfigurationSetTrackingOptionsOutput";
import { DeleteCustomVerificationEmailTemplateOutput } from "./DeleteCustomVerificationEmailTemplateOutput";
import { DeleteIdentityOutput } from "./DeleteIdentityOutput";
import { DeleteIdentityPolicyOutput } from "./DeleteIdentityPolicyOutput";
import { DeleteReceiptFilterOutput } from "./DeleteReceiptFilterOutput";
import { DeleteReceiptRuleOutput } from "./DeleteReceiptRuleOutput";
import { DeleteReceiptRuleSetOutput } from "./DeleteReceiptRuleSetOutput";
import { DeleteTemplateOutput } from "./DeleteTemplateOutput";
import { DeleteVerifiedEmailAddressOutput } from "./DeleteVerifiedEmailAddressOutput";
import { DescribeActiveReceiptRuleSetOutput } from "./DescribeActiveReceiptRuleSetOutput";
import { DescribeConfigurationSetOutput } from "./DescribeConfigurationSetOutput";
import { DescribeReceiptRuleOutput } from "./DescribeReceiptRuleOutput";
import { DescribeReceiptRuleSetOutput } from "./DescribeReceiptRuleSetOutput";
import { GetAccountSendingEnabledOutput } from "./GetAccountSendingEnabledOutput";
import { GetCustomVerificationEmailTemplateOutput } from "./GetCustomVerificationEmailTemplateOutput";
import { GetIdentityDkimAttributesOutput } from "./GetIdentityDkimAttributesOutput";
import { GetIdentityMailFromDomainAttributesOutput } from "./GetIdentityMailFromDomainAttributesOutput";
import { GetIdentityNotificationAttributesOutput } from "./GetIdentityNotificationAttributesOutput";
import { GetIdentityPoliciesOutput } from "./GetIdentityPoliciesOutput";
import { GetIdentityVerificationAttributesOutput } from "./GetIdentityVerificationAttributesOutput";
import { GetSendQuotaOutput } from "./GetSendQuotaOutput";
import { GetSendStatisticsOutput } from "./GetSendStatisticsOutput";
import { GetTemplateOutput } from "./GetTemplateOutput";
import { ListConfigurationSetsOutput } from "./ListConfigurationSetsOutput";
import { ListCustomVerificationEmailTemplatesOutput } from "./ListCustomVerificationEmailTemplatesOutput";
import { ListIdentitiesOutput } from "./ListIdentitiesOutput";
import { ListIdentityPoliciesOutput } from "./ListIdentityPoliciesOutput";
import { ListReceiptFiltersOutput } from "./ListReceiptFiltersOutput";
import { ListReceiptRuleSetsOutput } from "./ListReceiptRuleSetsOutput";
import { ListTemplatesOutput } from "./ListTemplatesOutput";
import { ListVerifiedEmailAddressesOutput } from "./ListVerifiedEmailAddressesOutput";
import { PutConfigurationSetDeliveryOptionsOutput } from "./PutConfigurationSetDeliveryOptionsOutput";
import { PutIdentityPolicyOutput } from "./PutIdentityPolicyOutput";
import { ReorderReceiptRuleSetOutput } from "./ReorderReceiptRuleSetOutput";
import { SendBounceOutput } from "./SendBounceOutput";
import { SendBulkTemplatedEmailOutput } from "./SendBulkTemplatedEmailOutput";
import { SendCustomVerificationEmailOutput } from "./SendCustomVerificationEmailOutput";
import { SendEmailOutput } from "./SendEmailOutput";
import { SendRawEmailOutput } from "./SendRawEmailOutput";
import { SendTemplatedEmailOutput } from "./SendTemplatedEmailOutput";
import { SetActiveReceiptRuleSetOutput } from "./SetActiveReceiptRuleSetOutput";
import { SetIdentityDkimEnabledOutput } from "./SetIdentityDkimEnabledOutput";
import { SetIdentityFeedbackForwardingEnabledOutput } from "./SetIdentityFeedbackForwardingEnabledOutput";
import { SetIdentityHeadersInNotificationsEnabledOutput } from "./SetIdentityHeadersInNotificationsEnabledOutput";
import { SetIdentityMailFromDomainOutput } from "./SetIdentityMailFromDomainOutput";
import { SetIdentityNotificationTopicOutput } from "./SetIdentityNotificationTopicOutput";
import { SetReceiptRulePositionOutput } from "./SetReceiptRulePositionOutput";
import { TestRenderTemplateOutput } from "./TestRenderTemplateOutput";
import { UpdateAccountSendingEnabledOutput } from "./UpdateAccountSendingEnabledOutput";
import { UpdateConfigurationSetEventDestinationOutput } from "./UpdateConfigurationSetEventDestinationOutput";
import { UpdateConfigurationSetReputationMetricsEnabledOutput } from "./UpdateConfigurationSetReputationMetricsEnabledOutput";
import { UpdateConfigurationSetSendingEnabledOutput } from "./UpdateConfigurationSetSendingEnabledOutput";
import { UpdateConfigurationSetTrackingOptionsOutput } from "./UpdateConfigurationSetTrackingOptionsOutput";
import { UpdateCustomVerificationEmailTemplateOutput } from "./UpdateCustomVerificationEmailTemplateOutput";
import { UpdateReceiptRuleOutput } from "./UpdateReceiptRuleOutput";
import { UpdateTemplateOutput } from "./UpdateTemplateOutput";
import { VerifyDomainDkimOutput } from "./VerifyDomainDkimOutput";
import { VerifyDomainIdentityOutput } from "./VerifyDomainIdentityOutput";
import { VerifyEmailAddressOutput } from "./VerifyEmailAddressOutput";
import { VerifyEmailIdentityOutput } from "./VerifyEmailIdentityOutput";
export type OutputTypesUnion =
  | CloneReceiptRuleSetOutput
  | CreateConfigurationSetOutput
  | CreateConfigurationSetEventDestinationOutput
  | CreateConfigurationSetTrackingOptionsOutput
  | CreateCustomVerificationEmailTemplateOutput
  | CreateReceiptFilterOutput
  | CreateReceiptRuleOutput
  | CreateReceiptRuleSetOutput
  | CreateTemplateOutput
  | DeleteConfigurationSetOutput
  | DeleteConfigurationSetEventDestinationOutput
  | DeleteConfigurationSetTrackingOptionsOutput
  | DeleteCustomVerificationEmailTemplateOutput
  | DeleteIdentityOutput
  | DeleteIdentityPolicyOutput
  | DeleteReceiptFilterOutput
  | DeleteReceiptRuleOutput
  | DeleteReceiptRuleSetOutput
  | DeleteTemplateOutput
  | DeleteVerifiedEmailAddressOutput
  | DescribeActiveReceiptRuleSetOutput
  | DescribeConfigurationSetOutput
  | DescribeReceiptRuleOutput
  | DescribeReceiptRuleSetOutput
  | GetAccountSendingEnabledOutput
  | GetCustomVerificationEmailTemplateOutput
  | GetIdentityDkimAttributesOutput
  | GetIdentityMailFromDomainAttributesOutput
  | GetIdentityNotificationAttributesOutput
  | GetIdentityPoliciesOutput
  | GetIdentityVerificationAttributesOutput
  | GetSendQuotaOutput
  | GetSendStatisticsOutput
  | GetTemplateOutput
  | ListConfigurationSetsOutput
  | ListCustomVerificationEmailTemplatesOutput
  | ListIdentitiesOutput
  | ListIdentityPoliciesOutput
  | ListReceiptFiltersOutput
  | ListReceiptRuleSetsOutput
  | ListTemplatesOutput
  | ListVerifiedEmailAddressesOutput
  | PutConfigurationSetDeliveryOptionsOutput
  | PutIdentityPolicyOutput
  | ReorderReceiptRuleSetOutput
  | SendBounceOutput
  | SendBulkTemplatedEmailOutput
  | SendCustomVerificationEmailOutput
  | SendEmailOutput
  | SendRawEmailOutput
  | SendTemplatedEmailOutput
  | SetActiveReceiptRuleSetOutput
  | SetIdentityDkimEnabledOutput
  | SetIdentityFeedbackForwardingEnabledOutput
  | SetIdentityHeadersInNotificationsEnabledOutput
  | SetIdentityMailFromDomainOutput
  | SetIdentityNotificationTopicOutput
  | SetReceiptRulePositionOutput
  | TestRenderTemplateOutput
  | UpdateAccountSendingEnabledOutput
  | UpdateConfigurationSetEventDestinationOutput
  | UpdateConfigurationSetReputationMetricsEnabledOutput
  | UpdateConfigurationSetSendingEnabledOutput
  | UpdateConfigurationSetTrackingOptionsOutput
  | UpdateCustomVerificationEmailTemplateOutput
  | UpdateReceiptRuleOutput
  | UpdateTemplateOutput
  | VerifyDomainDkimOutput
  | VerifyDomainIdentityOutput
  | VerifyEmailAddressOutput
  | VerifyEmailIdentityOutput;
