import { SESClient } from "./SESClient";
import { AccountSendingPausedException } from "./types/AccountSendingPausedException";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { CannotDeleteException } from "./types/CannotDeleteException";
import { CloneReceiptRuleSetInput } from "./types/CloneReceiptRuleSetInput";
import { CloneReceiptRuleSetOutput } from "./types/CloneReceiptRuleSetOutput";
import { ConfigurationSetAlreadyExistsException } from "./types/ConfigurationSetAlreadyExistsException";
import { ConfigurationSetDoesNotExistException } from "./types/ConfigurationSetDoesNotExistException";
import { ConfigurationSetSendingPausedException } from "./types/ConfigurationSetSendingPausedException";
import { CreateConfigurationSetEventDestinationInput } from "./types/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./types/CreateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetInput } from "./types/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "./types/CreateConfigurationSetOutput";
import { CreateConfigurationSetTrackingOptionsInput } from "./types/CreateConfigurationSetTrackingOptionsInput";
import { CreateConfigurationSetTrackingOptionsOutput } from "./types/CreateConfigurationSetTrackingOptionsOutput";
import { CreateCustomVerificationEmailTemplateInput } from "./types/CreateCustomVerificationEmailTemplateInput";
import { CreateCustomVerificationEmailTemplateOutput } from "./types/CreateCustomVerificationEmailTemplateOutput";
import { CreateReceiptFilterInput } from "./types/CreateReceiptFilterInput";
import { CreateReceiptFilterOutput } from "./types/CreateReceiptFilterOutput";
import { CreateReceiptRuleInput } from "./types/CreateReceiptRuleInput";
import { CreateReceiptRuleOutput } from "./types/CreateReceiptRuleOutput";
import { CreateReceiptRuleSetInput } from "./types/CreateReceiptRuleSetInput";
import { CreateReceiptRuleSetOutput } from "./types/CreateReceiptRuleSetOutput";
import { CreateTemplateInput } from "./types/CreateTemplateInput";
import { CreateTemplateOutput } from "./types/CreateTemplateOutput";
import { CustomVerificationEmailInvalidContentException } from "./types/CustomVerificationEmailInvalidContentException";
import { CustomVerificationEmailTemplateAlreadyExistsException } from "./types/CustomVerificationEmailTemplateAlreadyExistsException";
import { CustomVerificationEmailTemplateDoesNotExistException } from "./types/CustomVerificationEmailTemplateDoesNotExistException";
import { DeleteConfigurationSetEventDestinationInput } from "./types/DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "./types/DeleteConfigurationSetEventDestinationOutput";
import { DeleteConfigurationSetInput } from "./types/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "./types/DeleteConfigurationSetOutput";
import { DeleteConfigurationSetTrackingOptionsInput } from "./types/DeleteConfigurationSetTrackingOptionsInput";
import { DeleteConfigurationSetTrackingOptionsOutput } from "./types/DeleteConfigurationSetTrackingOptionsOutput";
import { DeleteCustomVerificationEmailTemplateInput } from "./types/DeleteCustomVerificationEmailTemplateInput";
import { DeleteCustomVerificationEmailTemplateOutput } from "./types/DeleteCustomVerificationEmailTemplateOutput";
import { DeleteIdentityInput } from "./types/DeleteIdentityInput";
import { DeleteIdentityOutput } from "./types/DeleteIdentityOutput";
import { DeleteIdentityPolicyInput } from "./types/DeleteIdentityPolicyInput";
import { DeleteIdentityPolicyOutput } from "./types/DeleteIdentityPolicyOutput";
import { DeleteReceiptFilterInput } from "./types/DeleteReceiptFilterInput";
import { DeleteReceiptFilterOutput } from "./types/DeleteReceiptFilterOutput";
import { DeleteReceiptRuleInput } from "./types/DeleteReceiptRuleInput";
import { DeleteReceiptRuleOutput } from "./types/DeleteReceiptRuleOutput";
import { DeleteReceiptRuleSetInput } from "./types/DeleteReceiptRuleSetInput";
import { DeleteReceiptRuleSetOutput } from "./types/DeleteReceiptRuleSetOutput";
import { DeleteTemplateInput } from "./types/DeleteTemplateInput";
import { DeleteTemplateOutput } from "./types/DeleteTemplateOutput";
import { DeleteVerifiedEmailAddressInput } from "./types/DeleteVerifiedEmailAddressInput";
import { DeleteVerifiedEmailAddressOutput } from "./types/DeleteVerifiedEmailAddressOutput";
import { DescribeActiveReceiptRuleSetInput } from "./types/DescribeActiveReceiptRuleSetInput";
import { DescribeActiveReceiptRuleSetOutput } from "./types/DescribeActiveReceiptRuleSetOutput";
import { DescribeConfigurationSetInput } from "./types/DescribeConfigurationSetInput";
import { DescribeConfigurationSetOutput } from "./types/DescribeConfigurationSetOutput";
import { DescribeReceiptRuleInput } from "./types/DescribeReceiptRuleInput";
import { DescribeReceiptRuleOutput } from "./types/DescribeReceiptRuleOutput";
import { DescribeReceiptRuleSetInput } from "./types/DescribeReceiptRuleSetInput";
import { DescribeReceiptRuleSetOutput } from "./types/DescribeReceiptRuleSetOutput";
import { EventDestinationAlreadyExistsException } from "./types/EventDestinationAlreadyExistsException";
import { EventDestinationDoesNotExistException } from "./types/EventDestinationDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "./types/FromEmailAddressNotVerifiedException";
import { GetAccountSendingEnabledInput } from "./types/GetAccountSendingEnabledInput";
import { GetAccountSendingEnabledOutput } from "./types/GetAccountSendingEnabledOutput";
import { GetCustomVerificationEmailTemplateInput } from "./types/GetCustomVerificationEmailTemplateInput";
import { GetCustomVerificationEmailTemplateOutput } from "./types/GetCustomVerificationEmailTemplateOutput";
import { GetIdentityDkimAttributesInput } from "./types/GetIdentityDkimAttributesInput";
import { GetIdentityDkimAttributesOutput } from "./types/GetIdentityDkimAttributesOutput";
import { GetIdentityMailFromDomainAttributesInput } from "./types/GetIdentityMailFromDomainAttributesInput";
import { GetIdentityMailFromDomainAttributesOutput } from "./types/GetIdentityMailFromDomainAttributesOutput";
import { GetIdentityNotificationAttributesInput } from "./types/GetIdentityNotificationAttributesInput";
import { GetIdentityNotificationAttributesOutput } from "./types/GetIdentityNotificationAttributesOutput";
import { GetIdentityPoliciesInput } from "./types/GetIdentityPoliciesInput";
import { GetIdentityPoliciesOutput } from "./types/GetIdentityPoliciesOutput";
import { GetIdentityVerificationAttributesInput } from "./types/GetIdentityVerificationAttributesInput";
import { GetIdentityVerificationAttributesOutput } from "./types/GetIdentityVerificationAttributesOutput";
import { GetSendQuotaInput } from "./types/GetSendQuotaInput";
import { GetSendQuotaOutput } from "./types/GetSendQuotaOutput";
import { GetSendStatisticsInput } from "./types/GetSendStatisticsInput";
import { GetSendStatisticsOutput } from "./types/GetSendStatisticsOutput";
import { GetTemplateInput } from "./types/GetTemplateInput";
import { GetTemplateOutput } from "./types/GetTemplateOutput";
import { InvalidCloudWatchDestinationException } from "./types/InvalidCloudWatchDestinationException";
import { InvalidConfigurationSetException } from "./types/InvalidConfigurationSetException";
import { InvalidDeliveryOptionsException } from "./types/InvalidDeliveryOptionsException";
import { InvalidFirehoseDestinationException } from "./types/InvalidFirehoseDestinationException";
import { InvalidLambdaFunctionException } from "./types/InvalidLambdaFunctionException";
import { InvalidPolicyException } from "./types/InvalidPolicyException";
import { InvalidRenderingParameterException } from "./types/InvalidRenderingParameterException";
import { InvalidS3ConfigurationException } from "./types/InvalidS3ConfigurationException";
import { InvalidSNSDestinationException } from "./types/InvalidSNSDestinationException";
import { InvalidSnsTopicException } from "./types/InvalidSnsTopicException";
import { InvalidTemplateException } from "./types/InvalidTemplateException";
import { InvalidTrackingOptionsException } from "./types/InvalidTrackingOptionsException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListConfigurationSetsInput } from "./types/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "./types/ListConfigurationSetsOutput";
import { ListCustomVerificationEmailTemplatesInput } from "./types/ListCustomVerificationEmailTemplatesInput";
import { ListCustomVerificationEmailTemplatesOutput } from "./types/ListCustomVerificationEmailTemplatesOutput";
import { ListIdentitiesInput } from "./types/ListIdentitiesInput";
import { ListIdentitiesOutput } from "./types/ListIdentitiesOutput";
import { ListIdentityPoliciesInput } from "./types/ListIdentityPoliciesInput";
import { ListIdentityPoliciesOutput } from "./types/ListIdentityPoliciesOutput";
import { ListReceiptFiltersInput } from "./types/ListReceiptFiltersInput";
import { ListReceiptFiltersOutput } from "./types/ListReceiptFiltersOutput";
import { ListReceiptRuleSetsInput } from "./types/ListReceiptRuleSetsInput";
import { ListReceiptRuleSetsOutput } from "./types/ListReceiptRuleSetsOutput";
import { ListTemplatesInput } from "./types/ListTemplatesInput";
import { ListTemplatesOutput } from "./types/ListTemplatesOutput";
import { ListVerifiedEmailAddressesInput } from "./types/ListVerifiedEmailAddressesInput";
import { ListVerifiedEmailAddressesOutput } from "./types/ListVerifiedEmailAddressesOutput";
import { MailFromDomainNotVerifiedException } from "./types/MailFromDomainNotVerifiedException";
import { MessageRejected } from "./types/MessageRejected";
import { MissingRenderingAttributeException } from "./types/MissingRenderingAttributeException";
import { ProductionAccessNotGrantedException } from "./types/ProductionAccessNotGrantedException";
import { PutConfigurationSetDeliveryOptionsInput } from "./types/PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "./types/PutConfigurationSetDeliveryOptionsOutput";
import { PutIdentityPolicyInput } from "./types/PutIdentityPolicyInput";
import { PutIdentityPolicyOutput } from "./types/PutIdentityPolicyOutput";
import { ReorderReceiptRuleSetInput } from "./types/ReorderReceiptRuleSetInput";
import { ReorderReceiptRuleSetOutput } from "./types/ReorderReceiptRuleSetOutput";
import { RuleDoesNotExistException } from "./types/RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "./types/RuleSetDoesNotExistException";
import { SendBounceInput } from "./types/SendBounceInput";
import { SendBounceOutput } from "./types/SendBounceOutput";
import { SendBulkTemplatedEmailInput } from "./types/SendBulkTemplatedEmailInput";
import { SendBulkTemplatedEmailOutput } from "./types/SendBulkTemplatedEmailOutput";
import { SendCustomVerificationEmailInput } from "./types/SendCustomVerificationEmailInput";
import { SendCustomVerificationEmailOutput } from "./types/SendCustomVerificationEmailOutput";
import { SendEmailInput } from "./types/SendEmailInput";
import { SendEmailOutput } from "./types/SendEmailOutput";
import { SendRawEmailInput } from "./types/SendRawEmailInput";
import { SendRawEmailOutput } from "./types/SendRawEmailOutput";
import { SendTemplatedEmailInput } from "./types/SendTemplatedEmailInput";
import { SendTemplatedEmailOutput } from "./types/SendTemplatedEmailOutput";
import { SetActiveReceiptRuleSetInput } from "./types/SetActiveReceiptRuleSetInput";
import { SetActiveReceiptRuleSetOutput } from "./types/SetActiveReceiptRuleSetOutput";
import { SetIdentityDkimEnabledInput } from "./types/SetIdentityDkimEnabledInput";
import { SetIdentityDkimEnabledOutput } from "./types/SetIdentityDkimEnabledOutput";
import { SetIdentityFeedbackForwardingEnabledInput } from "./types/SetIdentityFeedbackForwardingEnabledInput";
import { SetIdentityFeedbackForwardingEnabledOutput } from "./types/SetIdentityFeedbackForwardingEnabledOutput";
import { SetIdentityHeadersInNotificationsEnabledInput } from "./types/SetIdentityHeadersInNotificationsEnabledInput";
import { SetIdentityHeadersInNotificationsEnabledOutput } from "./types/SetIdentityHeadersInNotificationsEnabledOutput";
import { SetIdentityMailFromDomainInput } from "./types/SetIdentityMailFromDomainInput";
import { SetIdentityMailFromDomainOutput } from "./types/SetIdentityMailFromDomainOutput";
import { SetIdentityNotificationTopicInput } from "./types/SetIdentityNotificationTopicInput";
import { SetIdentityNotificationTopicOutput } from "./types/SetIdentityNotificationTopicOutput";
import { SetReceiptRulePositionInput } from "./types/SetReceiptRulePositionInput";
import { SetReceiptRulePositionOutput } from "./types/SetReceiptRulePositionOutput";
import { TemplateDoesNotExistException } from "./types/TemplateDoesNotExistException";
import { TestRenderTemplateInput } from "./types/TestRenderTemplateInput";
import { TestRenderTemplateOutput } from "./types/TestRenderTemplateOutput";
import { TrackingOptionsAlreadyExistsException } from "./types/TrackingOptionsAlreadyExistsException";
import { TrackingOptionsDoesNotExistException } from "./types/TrackingOptionsDoesNotExistException";
import { UpdateAccountSendingEnabledInput } from "./types/UpdateAccountSendingEnabledInput";
import { UpdateAccountSendingEnabledOutput } from "./types/UpdateAccountSendingEnabledOutput";
import { UpdateConfigurationSetEventDestinationInput } from "./types/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "./types/UpdateConfigurationSetEventDestinationOutput";
import { UpdateConfigurationSetReputationMetricsEnabledInput } from "./types/UpdateConfigurationSetReputationMetricsEnabledInput";
import { UpdateConfigurationSetReputationMetricsEnabledOutput } from "./types/UpdateConfigurationSetReputationMetricsEnabledOutput";
import { UpdateConfigurationSetSendingEnabledInput } from "./types/UpdateConfigurationSetSendingEnabledInput";
import { UpdateConfigurationSetSendingEnabledOutput } from "./types/UpdateConfigurationSetSendingEnabledOutput";
import { UpdateConfigurationSetTrackingOptionsInput } from "./types/UpdateConfigurationSetTrackingOptionsInput";
import { UpdateConfigurationSetTrackingOptionsOutput } from "./types/UpdateConfigurationSetTrackingOptionsOutput";
import { UpdateCustomVerificationEmailTemplateInput } from "./types/UpdateCustomVerificationEmailTemplateInput";
import { UpdateCustomVerificationEmailTemplateOutput } from "./types/UpdateCustomVerificationEmailTemplateOutput";
import { UpdateReceiptRuleInput } from "./types/UpdateReceiptRuleInput";
import { UpdateReceiptRuleOutput } from "./types/UpdateReceiptRuleOutput";
import { UpdateTemplateInput } from "./types/UpdateTemplateInput";
import { UpdateTemplateOutput } from "./types/UpdateTemplateOutput";
import { VerifyDomainDkimInput } from "./types/VerifyDomainDkimInput";
import { VerifyDomainDkimOutput } from "./types/VerifyDomainDkimOutput";
import { VerifyDomainIdentityInput } from "./types/VerifyDomainIdentityInput";
import { VerifyDomainIdentityOutput } from "./types/VerifyDomainIdentityOutput";
import { VerifyEmailAddressInput } from "./types/VerifyEmailAddressInput";
import { VerifyEmailAddressOutput } from "./types/VerifyEmailAddressOutput";
import { VerifyEmailIdentityInput } from "./types/VerifyEmailIdentityInput";
import { VerifyEmailIdentityOutput } from "./types/VerifyEmailIdentityOutput";
import { CloneReceiptRuleSetCommand } from "./commands/CloneReceiptRuleSetCommand";
import { CreateConfigurationSetCommand } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateConfigurationSetTrackingOptionsCommand } from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import { CreateCustomVerificationEmailTemplateCommand } from "./commands/CreateCustomVerificationEmailTemplateCommand";
import { CreateReceiptFilterCommand } from "./commands/CreateReceiptFilterCommand";
import { CreateReceiptRuleCommand } from "./commands/CreateReceiptRuleCommand";
import { CreateReceiptRuleSetCommand } from "./commands/CreateReceiptRuleSetCommand";
import { CreateTemplateCommand } from "./commands/CreateTemplateCommand";
import { DeleteConfigurationSetCommand } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetTrackingOptionsCommand } from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import { DeleteCustomVerificationEmailTemplateCommand } from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteIdentityCommand } from "./commands/DeleteIdentityCommand";
import { DeleteIdentityPolicyCommand } from "./commands/DeleteIdentityPolicyCommand";
import { DeleteReceiptFilterCommand } from "./commands/DeleteReceiptFilterCommand";
import { DeleteReceiptRuleCommand } from "./commands/DeleteReceiptRuleCommand";
import { DeleteReceiptRuleSetCommand } from "./commands/DeleteReceiptRuleSetCommand";
import { DeleteTemplateCommand } from "./commands/DeleteTemplateCommand";
import { DeleteVerifiedEmailAddressCommand } from "./commands/DeleteVerifiedEmailAddressCommand";
import { DescribeActiveReceiptRuleSetCommand } from "./commands/DescribeActiveReceiptRuleSetCommand";
import { DescribeConfigurationSetCommand } from "./commands/DescribeConfigurationSetCommand";
import { DescribeReceiptRuleCommand } from "./commands/DescribeReceiptRuleCommand";
import { DescribeReceiptRuleSetCommand } from "./commands/DescribeReceiptRuleSetCommand";
import { GetAccountSendingEnabledCommand } from "./commands/GetAccountSendingEnabledCommand";
import { GetCustomVerificationEmailTemplateCommand } from "./commands/GetCustomVerificationEmailTemplateCommand";
import { GetIdentityDkimAttributesCommand } from "./commands/GetIdentityDkimAttributesCommand";
import { GetIdentityMailFromDomainAttributesCommand } from "./commands/GetIdentityMailFromDomainAttributesCommand";
import { GetIdentityNotificationAttributesCommand } from "./commands/GetIdentityNotificationAttributesCommand";
import { GetIdentityPoliciesCommand } from "./commands/GetIdentityPoliciesCommand";
import { GetIdentityVerificationAttributesCommand } from "./commands/GetIdentityVerificationAttributesCommand";
import { GetSendQuotaCommand } from "./commands/GetSendQuotaCommand";
import { GetSendStatisticsCommand } from "./commands/GetSendStatisticsCommand";
import { GetTemplateCommand } from "./commands/GetTemplateCommand";
import { ListConfigurationSetsCommand } from "./commands/ListConfigurationSetsCommand";
import { ListCustomVerificationEmailTemplatesCommand } from "./commands/ListCustomVerificationEmailTemplatesCommand";
import { ListIdentitiesCommand } from "./commands/ListIdentitiesCommand";
import { ListIdentityPoliciesCommand } from "./commands/ListIdentityPoliciesCommand";
import { ListReceiptFiltersCommand } from "./commands/ListReceiptFiltersCommand";
import { ListReceiptRuleSetsCommand } from "./commands/ListReceiptRuleSetsCommand";
import { ListTemplatesCommand } from "./commands/ListTemplatesCommand";
import { ListVerifiedEmailAddressesCommand } from "./commands/ListVerifiedEmailAddressesCommand";
import { PutConfigurationSetDeliveryOptionsCommand } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutIdentityPolicyCommand } from "./commands/PutIdentityPolicyCommand";
import { ReorderReceiptRuleSetCommand } from "./commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommand } from "./commands/SendBounceCommand";
import { SendBulkTemplatedEmailCommand } from "./commands/SendBulkTemplatedEmailCommand";
import { SendCustomVerificationEmailCommand } from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommand } from "./commands/SendEmailCommand";
import { SendRawEmailCommand } from "./commands/SendRawEmailCommand";
import { SendTemplatedEmailCommand } from "./commands/SendTemplatedEmailCommand";
import { SetActiveReceiptRuleSetCommand } from "./commands/SetActiveReceiptRuleSetCommand";
import { SetIdentityDkimEnabledCommand } from "./commands/SetIdentityDkimEnabledCommand";
import { SetIdentityFeedbackForwardingEnabledCommand } from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import { SetIdentityHeadersInNotificationsEnabledCommand } from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import { SetIdentityMailFromDomainCommand } from "./commands/SetIdentityMailFromDomainCommand";
import { SetIdentityNotificationTopicCommand } from "./commands/SetIdentityNotificationTopicCommand";
import { SetReceiptRulePositionCommand } from "./commands/SetReceiptRulePositionCommand";
import { TestRenderTemplateCommand } from "./commands/TestRenderTemplateCommand";
import { UpdateAccountSendingEnabledCommand } from "./commands/UpdateAccountSendingEnabledCommand";
import { UpdateConfigurationSetEventDestinationCommand } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { UpdateConfigurationSetReputationMetricsEnabledCommand } from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import { UpdateConfigurationSetSendingEnabledCommand } from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import { UpdateConfigurationSetTrackingOptionsCommand } from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import { UpdateCustomVerificationEmailTemplateCommand } from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateReceiptRuleCommand } from "./commands/UpdateReceiptRuleCommand";
import { UpdateTemplateCommand } from "./commands/UpdateTemplateCommand";
import { VerifyDomainDkimCommand } from "./commands/VerifyDomainDkimCommand";
import { VerifyDomainIdentityCommand } from "./commands/VerifyDomainIdentityCommand";
import { VerifyEmailAddressCommand } from "./commands/VerifyEmailAddressCommand";
import { VerifyEmailIdentityCommand } from "./commands/VerifyEmailIdentityCommand";

export class SES extends SESClient {
  /**
   * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {AlreadyExistsException} <p>Indicates that a resource could not be created because of a naming conflict.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetInput
  ): Promise<CloneReceiptRuleSetOutput>;
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetInput,
    cb: (err: any, data?: CloneReceiptRuleSetOutput) => void
  ): void;
  public cloneReceiptRuleSet(
    args: CloneReceiptRuleSetInput,
    cb?: (err: any, data?: CloneReceiptRuleSetOutput) => void
  ): Promise<CloneReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CloneReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetAlreadyExistsException} <p>Indicates that the configuration set could not be created because of a naming conflict.</p>
   *   - {InvalidConfigurationSetException} <p>Indicates that the configuration set is invalid. See the error message for details.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSet(
    args: CreateConfigurationSetInput
  ): Promise<CreateConfigurationSetOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb: (err: any, data?: CreateConfigurationSetOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb?: (err: any, data?: CreateConfigurationSetOutput) => void
  ): Promise<CreateConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {EventDestinationAlreadyExistsException} <p>Indicates that the event destination could not be created because of a naming conflict.</p>
   *   - {InvalidCloudWatchDestinationException} <p>Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.</p>
   *   - {InvalidFirehoseDestinationException} <p>Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.</p>
   *   - {InvalidSNSDestinationException} <p>Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput
  ): Promise<CreateConfigurationSetEventDestinationOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {TrackingOptionsAlreadyExistsException} <p>Indicates that the configuration set you specified already contains a TrackingOptions object.</p>
   *   - {InvalidTrackingOptionsException} <p>Indicates that the custom domain to be used for open and click tracking redirects is invalid. This error appears most often in the following situations:</p> <ul> <li> <p>When the tracking domain you specified is not verified in Amazon SES.</p> </li> <li> <p>When the tracking domain you specified is not a valid domain or subdomain.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsInput
  ): Promise<CreateConfigurationSetTrackingOptionsOutput>;
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsInput,
    cb: (err: any, data?: CreateConfigurationSetTrackingOptionsOutput) => void
  ): void;
  public createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsInput,
    cb?: (err: any, data?: CreateConfigurationSetTrackingOptionsOutput) => void
  ): Promise<CreateConfigurationSetTrackingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetTrackingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CustomVerificationEmailTemplateAlreadyExistsException} <p>Indicates that a custom verification email template with the name you specified already exists.</p>
   *   - {FromEmailAddressNotVerifiedException} <p>Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email. </p>
   *   - {CustomVerificationEmailInvalidContentException} <p>Indicates that custom verification email template provided content is invalid.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateInput
  ): Promise<CreateCustomVerificationEmailTemplateOutput>;
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateInput,
    cb: (err: any, data?: CreateCustomVerificationEmailTemplateOutput) => void
  ): void;
  public createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateInput,
    cb?: (err: any, data?: CreateCustomVerificationEmailTemplateOutput) => void
  ): Promise<CreateCustomVerificationEmailTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCustomVerificationEmailTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {AlreadyExistsException} <p>Indicates that a resource could not be created because of a naming conflict.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReceiptFilter(
    args: CreateReceiptFilterInput
  ): Promise<CreateReceiptFilterOutput>;
  public createReceiptFilter(
    args: CreateReceiptFilterInput,
    cb: (err: any, data?: CreateReceiptFilterOutput) => void
  ): void;
  public createReceiptFilter(
    args: CreateReceiptFilterInput,
    cb?: (err: any, data?: CreateReceiptFilterOutput) => void
  ): Promise<CreateReceiptFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReceiptFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidSnsTopicException} <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not publish to the topic, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {InvalidS3ConfigurationException} <p>Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or that Amazon SES could not publish to the bucket, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {InvalidLambdaFunctionException} <p>Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could not execute the provided function, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {AlreadyExistsException} <p>Indicates that a resource could not be created because of a naming conflict.</p>
   *   - {RuleDoesNotExistException} <p>Indicates that the provided receipt rule does not exist.</p>
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReceiptRule(
    args: CreateReceiptRuleInput
  ): Promise<CreateReceiptRuleOutput>;
  public createReceiptRule(
    args: CreateReceiptRuleInput,
    cb: (err: any, data?: CreateReceiptRuleOutput) => void
  ): void;
  public createReceiptRule(
    args: CreateReceiptRuleInput,
    cb?: (err: any, data?: CreateReceiptRuleOutput) => void
  ): Promise<CreateReceiptRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReceiptRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>Indicates that a resource could not be created because of a naming conflict.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetInput
  ): Promise<CreateReceiptRuleSetOutput>;
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetInput,
    cb: (err: any, data?: CreateReceiptRuleSetOutput) => void
  ): void;
  public createReceiptRuleSet(
    args: CreateReceiptRuleSetInput,
    cb?: (err: any, data?: CreateReceiptRuleSetOutput) => void
  ): Promise<CreateReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>Indicates that a resource could not be created because of a naming conflict.</p>
   *   - {InvalidTemplateException} <p>Indicates that the template that you specified could not be rendered. This issue may occur when a template refers to a partial that does not exist.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTemplate(
    args: CreateTemplateInput
  ): Promise<CreateTemplateOutput>;
  public createTemplate(
    args: CreateTemplateInput,
    cb: (err: any, data?: CreateTemplateOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateInput,
    cb?: (err: any, data?: CreateTemplateOutput) => void
  ): Promise<CreateTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput
  ): Promise<DeleteConfigurationSetOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb?: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): Promise<DeleteConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {EventDestinationDoesNotExistException} <p>Indicates that the event destination does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput
  ): Promise<DeleteConfigurationSetEventDestinationOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {TrackingOptionsDoesNotExistException} <p>Indicates that the TrackingOptions object you specified does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsInput
  ): Promise<DeleteConfigurationSetTrackingOptionsOutput>;
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsInput,
    cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsOutput) => void
  ): void;
  public deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsInput,
    cb?: (err: any, data?: DeleteConfigurationSetTrackingOptionsOutput) => void
  ): Promise<DeleteConfigurationSetTrackingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetTrackingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateInput
  ): Promise<DeleteCustomVerificationEmailTemplateOutput>;
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateInput,
    cb: (err: any, data?: DeleteCustomVerificationEmailTemplateOutput) => void
  ): void;
  public deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateInput,
    cb?: (err: any, data?: DeleteCustomVerificationEmailTemplateOutput) => void
  ): Promise<DeleteCustomVerificationEmailTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCustomVerificationEmailTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIdentity(
    args: DeleteIdentityInput
  ): Promise<DeleteIdentityOutput>;
  public deleteIdentity(
    args: DeleteIdentityInput,
    cb: (err: any, data?: DeleteIdentityOutput) => void
  ): void;
  public deleteIdentity(
    args: DeleteIdentityInput,
    cb?: (err: any, data?: DeleteIdentityOutput) => void
  ): Promise<DeleteIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyInput
  ): Promise<DeleteIdentityPolicyOutput>;
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyInput,
    cb: (err: any, data?: DeleteIdentityPolicyOutput) => void
  ): void;
  public deleteIdentityPolicy(
    args: DeleteIdentityPolicyInput,
    cb?: (err: any, data?: DeleteIdentityPolicyOutput) => void
  ): Promise<DeleteIdentityPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIdentityPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReceiptFilter(
    args: DeleteReceiptFilterInput
  ): Promise<DeleteReceiptFilterOutput>;
  public deleteReceiptFilter(
    args: DeleteReceiptFilterInput,
    cb: (err: any, data?: DeleteReceiptFilterOutput) => void
  ): void;
  public deleteReceiptFilter(
    args: DeleteReceiptFilterInput,
    cb?: (err: any, data?: DeleteReceiptFilterOutput) => void
  ): Promise<DeleteReceiptFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReceiptFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReceiptRule(
    args: DeleteReceiptRuleInput
  ): Promise<DeleteReceiptRuleOutput>;
  public deleteReceiptRule(
    args: DeleteReceiptRuleInput,
    cb: (err: any, data?: DeleteReceiptRuleOutput) => void
  ): void;
  public deleteReceiptRule(
    args: DeleteReceiptRuleInput,
    cb?: (err: any, data?: DeleteReceiptRuleOutput) => void
  ): Promise<DeleteReceiptRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReceiptRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CannotDeleteException} <p>Indicates that the delete operation could not be completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetInput
  ): Promise<DeleteReceiptRuleSetOutput>;
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetInput,
    cb: (err: any, data?: DeleteReceiptRuleSetOutput) => void
  ): void;
  public deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetInput,
    cb?: (err: any, data?: DeleteReceiptRuleSetOutput) => void
  ): Promise<DeleteReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTemplate(
    args: DeleteTemplateInput
  ): Promise<DeleteTemplateOutput>;
  public deleteTemplate(
    args: DeleteTemplateInput,
    cb: (err: any, data?: DeleteTemplateOutput) => void
  ): void;
  public deleteTemplate(
    args: DeleteTemplateInput,
    cb?: (err: any, data?: DeleteTemplateOutput) => void
  ): Promise<DeleteTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressInput
  ): Promise<DeleteVerifiedEmailAddressOutput>;
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressInput,
    cb: (err: any, data?: DeleteVerifiedEmailAddressOutput) => void
  ): void;
  public deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressInput,
    cb?: (err: any, data?: DeleteVerifiedEmailAddressOutput) => void
  ): Promise<DeleteVerifiedEmailAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVerifiedEmailAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetInput
  ): Promise<DescribeActiveReceiptRuleSetOutput>;
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetInput,
    cb: (err: any, data?: DescribeActiveReceiptRuleSetOutput) => void
  ): void;
  public describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetInput,
    cb?: (err: any, data?: DescribeActiveReceiptRuleSetOutput) => void
  ): Promise<DescribeActiveReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActiveReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationSet(
    args: DescribeConfigurationSetInput
  ): Promise<DescribeConfigurationSetOutput>;
  public describeConfigurationSet(
    args: DescribeConfigurationSetInput,
    cb: (err: any, data?: DescribeConfigurationSetOutput) => void
  ): void;
  public describeConfigurationSet(
    args: DescribeConfigurationSetInput,
    cb?: (err: any, data?: DescribeConfigurationSetOutput) => void
  ): Promise<DescribeConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleDoesNotExistException} <p>Indicates that the provided receipt rule does not exist.</p>
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReceiptRule(
    args: DescribeReceiptRuleInput
  ): Promise<DescribeReceiptRuleOutput>;
  public describeReceiptRule(
    args: DescribeReceiptRuleInput,
    cb: (err: any, data?: DescribeReceiptRuleOutput) => void
  ): void;
  public describeReceiptRule(
    args: DescribeReceiptRuleInput,
    cb?: (err: any, data?: DescribeReceiptRuleOutput) => void
  ): Promise<DescribeReceiptRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReceiptRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetInput
  ): Promise<DescribeReceiptRuleSetOutput>;
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetInput,
    cb: (err: any, data?: DescribeReceiptRuleSetOutput) => void
  ): void;
  public describeReceiptRuleSet(
    args: DescribeReceiptRuleSetInput,
    cb?: (err: any, data?: DescribeReceiptRuleSetOutput) => void
  ): Promise<DescribeReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledInput
  ): Promise<GetAccountSendingEnabledOutput>;
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledInput,
    cb: (err: any, data?: GetAccountSendingEnabledOutput) => void
  ): void;
  public getAccountSendingEnabled(
    args: GetAccountSendingEnabledInput,
    cb?: (err: any, data?: GetAccountSendingEnabledOutput) => void
  ): Promise<GetAccountSendingEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountSendingEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CustomVerificationEmailTemplateDoesNotExistException} <p>Indicates that a custom verification email template with the name you specified does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateInput
  ): Promise<GetCustomVerificationEmailTemplateOutput>;
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateInput,
    cb: (err: any, data?: GetCustomVerificationEmailTemplateOutput) => void
  ): void;
  public getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateInput,
    cb?: (err: any, data?: GetCustomVerificationEmailTemplateOutput) => void
  ): Promise<GetCustomVerificationEmailTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCustomVerificationEmailTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesInput
  ): Promise<GetIdentityDkimAttributesOutput>;
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesInput,
    cb: (err: any, data?: GetIdentityDkimAttributesOutput) => void
  ): void;
  public getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesInput,
    cb?: (err: any, data?: GetIdentityDkimAttributesOutput) => void
  ): Promise<GetIdentityDkimAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityDkimAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesInput
  ): Promise<GetIdentityMailFromDomainAttributesOutput>;
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesInput,
    cb: (err: any, data?: GetIdentityMailFromDomainAttributesOutput) => void
  ): void;
  public getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesInput,
    cb?: (err: any, data?: GetIdentityMailFromDomainAttributesOutput) => void
  ): Promise<GetIdentityMailFromDomainAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityMailFromDomainAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesInput
  ): Promise<GetIdentityNotificationAttributesOutput>;
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesInput,
    cb: (err: any, data?: GetIdentityNotificationAttributesOutput) => void
  ): void;
  public getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesInput,
    cb?: (err: any, data?: GetIdentityNotificationAttributesOutput) => void
  ): Promise<GetIdentityNotificationAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityNotificationAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityPolicies(
    args: GetIdentityPoliciesInput
  ): Promise<GetIdentityPoliciesOutput>;
  public getIdentityPolicies(
    args: GetIdentityPoliciesInput,
    cb: (err: any, data?: GetIdentityPoliciesOutput) => void
  ): void;
  public getIdentityPolicies(
    args: GetIdentityPoliciesInput,
    cb?: (err: any, data?: GetIdentityPoliciesOutput) => void
  ): Promise<GetIdentityPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesInput
  ): Promise<GetIdentityVerificationAttributesOutput>;
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesInput,
    cb: (err: any, data?: GetIdentityVerificationAttributesOutput) => void
  ): void;
  public getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesInput,
    cb?: (err: any, data?: GetIdentityVerificationAttributesOutput) => void
  ): Promise<GetIdentityVerificationAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityVerificationAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSendQuota(args: GetSendQuotaInput): Promise<GetSendQuotaOutput>;
  public getSendQuota(
    args: GetSendQuotaInput,
    cb: (err: any, data?: GetSendQuotaOutput) => void
  ): void;
  public getSendQuota(
    args: GetSendQuotaInput,
    cb?: (err: any, data?: GetSendQuotaOutput) => void
  ): Promise<GetSendQuotaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSendQuotaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSendStatistics(
    args: GetSendStatisticsInput
  ): Promise<GetSendStatisticsOutput>;
  public getSendStatistics(
    args: GetSendStatisticsInput,
    cb: (err: any, data?: GetSendStatisticsOutput) => void
  ): void;
  public getSendStatistics(
    args: GetSendStatisticsInput,
    cb?: (err: any, data?: GetSendStatisticsOutput) => void
  ): Promise<GetSendStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSendStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TemplateDoesNotExistException} <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTemplate(args: GetTemplateInput): Promise<GetTemplateOutput>;
  public getTemplate(
    args: GetTemplateInput,
    cb: (err: any, data?: GetTemplateOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateInput,
    cb?: (err: any, data?: GetTemplateOutput) => void
  ): Promise<GetTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurationSets(
    args: ListConfigurationSetsInput
  ): Promise<ListConfigurationSetsOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb: (err: any, data?: ListConfigurationSetsOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb?: (err: any, data?: ListConfigurationSetsOutput) => void
  ): Promise<ListConfigurationSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesInput
  ): Promise<ListCustomVerificationEmailTemplatesOutput>;
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesInput,
    cb: (err: any, data?: ListCustomVerificationEmailTemplatesOutput) => void
  ): void;
  public listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesInput,
    cb?: (err: any, data?: ListCustomVerificationEmailTemplatesOutput) => void
  ): Promise<ListCustomVerificationEmailTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCustomVerificationEmailTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIdentities(
    args: ListIdentitiesInput
  ): Promise<ListIdentitiesOutput>;
  public listIdentities(
    args: ListIdentitiesInput,
    cb: (err: any, data?: ListIdentitiesOutput) => void
  ): void;
  public listIdentities(
    args: ListIdentitiesInput,
    cb?: (err: any, data?: ListIdentitiesOutput) => void
  ): Promise<ListIdentitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIdentitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIdentityPolicies(
    args: ListIdentityPoliciesInput
  ): Promise<ListIdentityPoliciesOutput>;
  public listIdentityPolicies(
    args: ListIdentityPoliciesInput,
    cb: (err: any, data?: ListIdentityPoliciesOutput) => void
  ): void;
  public listIdentityPolicies(
    args: ListIdentityPoliciesInput,
    cb?: (err: any, data?: ListIdentityPoliciesOutput) => void
  ): Promise<ListIdentityPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIdentityPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReceiptFilters(
    args: ListReceiptFiltersInput
  ): Promise<ListReceiptFiltersOutput>;
  public listReceiptFilters(
    args: ListReceiptFiltersInput,
    cb: (err: any, data?: ListReceiptFiltersOutput) => void
  ): void;
  public listReceiptFilters(
    args: ListReceiptFiltersInput,
    cb?: (err: any, data?: ListReceiptFiltersOutput) => void
  ): Promise<ListReceiptFiltersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReceiptFiltersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsInput
  ): Promise<ListReceiptRuleSetsOutput>;
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsInput,
    cb: (err: any, data?: ListReceiptRuleSetsOutput) => void
  ): void;
  public listReceiptRuleSets(
    args: ListReceiptRuleSetsInput,
    cb?: (err: any, data?: ListReceiptRuleSetsOutput) => void
  ): Promise<ListReceiptRuleSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReceiptRuleSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTemplates(args: ListTemplatesInput): Promise<ListTemplatesOutput>;
  public listTemplates(
    args: ListTemplatesInput,
    cb: (err: any, data?: ListTemplatesOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesInput,
    cb?: (err: any, data?: ListTemplatesOutput) => void
  ): Promise<ListTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesInput
  ): Promise<ListVerifiedEmailAddressesOutput>;
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesInput,
    cb: (err: any, data?: ListVerifiedEmailAddressesOutput) => void
  ): void;
  public listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesInput,
    cb?: (err: any, data?: ListVerifiedEmailAddressesOutput) => void
  ): Promise<ListVerifiedEmailAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVerifiedEmailAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the delivery options for a configuration set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {InvalidDeliveryOptionsException} <p>Indicates that provided delivery option is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput
  ): Promise<PutConfigurationSetDeliveryOptionsOutput>;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsOutput) => void
  ): void;
  public putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsInput,
    cb?: (err: any, data?: PutConfigurationSetDeliveryOptionsOutput) => void
  ): Promise<PutConfigurationSetDeliveryOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConfigurationSetDeliveryOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPolicyException} <p>Indicates that the provided policy is invalid. Check the error stack for more information about what caused the error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putIdentityPolicy(
    args: PutIdentityPolicyInput
  ): Promise<PutIdentityPolicyOutput>;
  public putIdentityPolicy(
    args: PutIdentityPolicyInput,
    cb: (err: any, data?: PutIdentityPolicyOutput) => void
  ): void;
  public putIdentityPolicy(
    args: PutIdentityPolicyInput,
    cb?: (err: any, data?: PutIdentityPolicyOutput) => void
  ): Promise<PutIdentityPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutIdentityPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {RuleDoesNotExistException} <p>Indicates that the provided receipt rule does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetInput
  ): Promise<ReorderReceiptRuleSetOutput>;
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetInput,
    cb: (err: any, data?: ReorderReceiptRuleSetOutput) => void
  ): void;
  public reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetInput,
    cb?: (err: any, data?: ReorderReceiptRuleSetOutput) => void
  ): Promise<ReorderReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReorderReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendBounce(args: SendBounceInput): Promise<SendBounceOutput>;
  public sendBounce(
    args: SendBounceInput,
    cb: (err: any, data?: SendBounceOutput) => void
  ): void;
  public sendBounce(
    args: SendBounceInput,
    cb?: (err: any, data?: SendBounceOutput) => void
  ): Promise<SendBounceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendBounceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {MailFromDomainNotVerifiedException} <p> Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.</p>
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {TemplateDoesNotExistException} <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
   *   - {ConfigurationSetSendingPausedException} <p>Indicates that email sending is disabled for the configuration set.</p> <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
   *   - {AccountSendingPausedException} <p>Indicates that email sending is disabled for your entire Amazon SES account.</p> <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailInput
  ): Promise<SendBulkTemplatedEmailOutput>;
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailInput,
    cb: (err: any, data?: SendBulkTemplatedEmailOutput) => void
  ): void;
  public sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailInput,
    cb?: (err: any, data?: SendBulkTemplatedEmailOutput) => void
  ): Promise<SendBulkTemplatedEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendBulkTemplatedEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {CustomVerificationEmailTemplateDoesNotExistException} <p>Indicates that a custom verification email template with the name you specified does not exist.</p>
   *   - {FromEmailAddressNotVerifiedException} <p>Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email. </p>
   *   - {ProductionAccessNotGrantedException} <p>Indicates that the account has not been granted production access.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailInput
  ): Promise<SendCustomVerificationEmailOutput>;
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailInput,
    cb: (err: any, data?: SendCustomVerificationEmailOutput) => void
  ): void;
  public sendCustomVerificationEmail(
    args: SendCustomVerificationEmailInput,
    cb?: (err: any, data?: SendCustomVerificationEmailOutput) => void
  ): Promise<SendCustomVerificationEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendCustomVerificationEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {MailFromDomainNotVerifiedException} <p> Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.</p>
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {ConfigurationSetSendingPausedException} <p>Indicates that email sending is disabled for the configuration set.</p> <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
   *   - {AccountSendingPausedException} <p>Indicates that email sending is disabled for your entire Amazon SES account.</p> <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendEmail(args: SendEmailInput): Promise<SendEmailOutput>;
  public sendEmail(
    args: SendEmailInput,
    cb: (err: any, data?: SendEmailOutput) => void
  ): void;
  public sendEmail(
    args: SendEmailInput,
    cb?: (err: any, data?: SendEmailOutput) => void
  ): Promise<SendEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Do not include these X-headers in the DKIM signature; Amazon SES will remove them before sending the email.</p> </important> <p>For most common sending authorization scenarios, we recommend that you specify the <code>SourceIdentityArn</code> parameter and not the <code>FromIdentityArn</code> or <code>ReturnPathIdentityArn</code> parameters. If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES will set the From and Return Path addresses to the identity specified in <code>SourceIdentityArn</code>. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {MailFromDomainNotVerifiedException} <p> Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.</p>
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {ConfigurationSetSendingPausedException} <p>Indicates that email sending is disabled for the configuration set.</p> <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
   *   - {AccountSendingPausedException} <p>Indicates that email sending is disabled for your entire Amazon SES account.</p> <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendRawEmail(args: SendRawEmailInput): Promise<SendRawEmailOutput>;
  public sendRawEmail(
    args: SendRawEmailInput,
    cb: (err: any, data?: SendRawEmailOutput) => void
  ): void;
  public sendRawEmail(
    args: SendRawEmailInput,
    cb?: (err: any, data?: SendRawEmailOutput) => void
  ): Promise<SendRawEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendRawEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {MessageRejected} <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
   *   - {MailFromDomainNotVerifiedException} <p> Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer Guide</a>.</p>
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {TemplateDoesNotExistException} <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
   *   - {ConfigurationSetSendingPausedException} <p>Indicates that email sending is disabled for the configuration set.</p> <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
   *   - {AccountSendingPausedException} <p>Indicates that email sending is disabled for your entire Amazon SES account.</p> <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendTemplatedEmail(
    args: SendTemplatedEmailInput
  ): Promise<SendTemplatedEmailOutput>;
  public sendTemplatedEmail(
    args: SendTemplatedEmailInput,
    cb: (err: any, data?: SendTemplatedEmailOutput) => void
  ): void;
  public sendTemplatedEmail(
    args: SendTemplatedEmailInput,
    cb?: (err: any, data?: SendTemplatedEmailOutput) => void
  ): Promise<SendTemplatedEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendTemplatedEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetInput
  ): Promise<SetActiveReceiptRuleSetOutput>;
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetInput,
    cb: (err: any, data?: SetActiveReceiptRuleSetOutput) => void
  ): void;
  public setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetInput,
    cb?: (err: any, data?: SetActiveReceiptRuleSetOutput) => void
  ): Promise<SetActiveReceiptRuleSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetActiveReceiptRuleSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables or disables Easy DKIM signing of email sent from an identity:</p> <ul> <li> <p>If Easy DKIM signing is enabled for a domain name identity (such as <code>example.com</code>), then Amazon SES will DKIM-sign all email sent by addresses under that domain name (for example, <code>user@example.com</code>).</p> </li> <li> <p>If Easy DKIM signing is enabled for an email address, then Amazon SES will DKIM-sign all email sent by that email address.</p> </li> </ul> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable Easy DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up for Easy DKIM using the AWS Console or the <code>VerifyDomainDkim</code> operation.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledInput
  ): Promise<SetIdentityDkimEnabledOutput>;
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledInput,
    cb: (err: any, data?: SetIdentityDkimEnabledOutput) => void
  ): void;
  public setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledInput,
    cb?: (err: any, data?: SetIdentityDkimEnabledOutput) => void
  ): Promise<SetIdentityDkimEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityDkimEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledInput
  ): Promise<SetIdentityFeedbackForwardingEnabledOutput>;
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledInput,
    cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledOutput) => void
  ): void;
  public setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledInput,
    cb?: (err: any, data?: SetIdentityFeedbackForwardingEnabledOutput) => void
  ): Promise<SetIdentityFeedbackForwardingEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityFeedbackForwardingEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledInput
  ): Promise<SetIdentityHeadersInNotificationsEnabledOutput>;
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledInput,
    cb: (
      err: any,
      data?: SetIdentityHeadersInNotificationsEnabledOutput
    ) => void
  ): void;
  public setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledInput,
    cb?: (
      err: any,
      data?: SetIdentityHeadersInNotificationsEnabledOutput
    ) => void
  ): Promise<SetIdentityHeadersInNotificationsEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityHeadersInNotificationsEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainInput
  ): Promise<SetIdentityMailFromDomainOutput>;
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainInput,
    cb: (err: any, data?: SetIdentityMailFromDomainOutput) => void
  ): void;
  public setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainInput,
    cb?: (err: any, data?: SetIdentityMailFromDomainOutput) => void
  ): Promise<SetIdentityMailFromDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityMailFromDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicInput
  ): Promise<SetIdentityNotificationTopicOutput>;
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicInput,
    cb: (err: any, data?: SetIdentityNotificationTopicOutput) => void
  ): void;
  public setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicInput,
    cb?: (err: any, data?: SetIdentityNotificationTopicOutput) => void
  ): Promise<SetIdentityNotificationTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityNotificationTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {RuleDoesNotExistException} <p>Indicates that the provided receipt rule does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setReceiptRulePosition(
    args: SetReceiptRulePositionInput
  ): Promise<SetReceiptRulePositionOutput>;
  public setReceiptRulePosition(
    args: SetReceiptRulePositionInput,
    cb: (err: any, data?: SetReceiptRulePositionOutput) => void
  ): void;
  public setReceiptRulePosition(
    args: SetReceiptRulePositionInput,
    cb?: (err: any, data?: SetReceiptRulePositionOutput) => void
  ): Promise<SetReceiptRulePositionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetReceiptRulePositionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TemplateDoesNotExistException} <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
   *   - {InvalidRenderingParameterException} <p>Indicates that one or more of the replacement values you provided is invalid. This error may occur when the TemplateData object contains invalid JSON.</p>
   *   - {MissingRenderingAttributeException} <p>Indicates that one or more of the replacement values for the specified template was not specified. Ensure that the TemplateData object contains references to all of the replacement tags in the specified template.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testRenderTemplate(
    args: TestRenderTemplateInput
  ): Promise<TestRenderTemplateOutput>;
  public testRenderTemplate(
    args: TestRenderTemplateInput,
    cb: (err: any, data?: TestRenderTemplateOutput) => void
  ): void;
  public testRenderTemplate(
    args: TestRenderTemplateInput,
    cb?: (err: any, data?: TestRenderTemplateOutput) => void
  ): Promise<TestRenderTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestRenderTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledInput
  ): Promise<UpdateAccountSendingEnabledOutput>;
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledInput,
    cb: (err: any, data?: UpdateAccountSendingEnabledOutput) => void
  ): void;
  public updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledInput,
    cb?: (err: any, data?: UpdateAccountSendingEnabledOutput) => void
  ): Promise<UpdateAccountSendingEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountSendingEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {EventDestinationDoesNotExistException} <p>Indicates that the event destination does not exist.</p>
   *   - {InvalidCloudWatchDestinationException} <p>Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.</p>
   *   - {InvalidFirehoseDestinationException} <p>Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.</p>
   *   - {InvalidSNSDestinationException} <p>Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput
  ): Promise<UpdateConfigurationSetEventDestinationOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledInput
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledOutput>;
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledInput,
    cb: (
      err: any,
      data?: UpdateConfigurationSetReputationMetricsEnabledOutput
    ) => void
  ): void;
  public updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledInput,
    cb?: (
      err: any,
      data?: UpdateConfigurationSetReputationMetricsEnabledOutput
    ) => void
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledInput
  ): Promise<UpdateConfigurationSetSendingEnabledOutput>;
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledInput,
    cb: (err: any, data?: UpdateConfigurationSetSendingEnabledOutput) => void
  ): void;
  public updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledInput,
    cb?: (err: any, data?: UpdateConfigurationSetSendingEnabledOutput) => void
  ): Promise<UpdateConfigurationSetSendingEnabledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetSendingEnabledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConfigurationSetDoesNotExistException} <p>Indicates that the configuration set does not exist.</p>
   *   - {TrackingOptionsDoesNotExistException} <p>Indicates that the TrackingOptions object you specified does not exist.</p>
   *   - {InvalidTrackingOptionsException} <p>Indicates that the custom domain to be used for open and click tracking redirects is invalid. This error appears most often in the following situations:</p> <ul> <li> <p>When the tracking domain you specified is not verified in Amazon SES.</p> </li> <li> <p>When the tracking domain you specified is not a valid domain or subdomain.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsInput
  ): Promise<UpdateConfigurationSetTrackingOptionsOutput>;
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsInput,
    cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsOutput) => void
  ): void;
  public updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsInput,
    cb?: (err: any, data?: UpdateConfigurationSetTrackingOptionsOutput) => void
  ): Promise<UpdateConfigurationSetTrackingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetTrackingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CustomVerificationEmailTemplateDoesNotExistException} <p>Indicates that a custom verification email template with the name you specified does not exist.</p>
   *   - {FromEmailAddressNotVerifiedException} <p>Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email. </p>
   *   - {CustomVerificationEmailInvalidContentException} <p>Indicates that custom verification email template provided content is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateInput
  ): Promise<UpdateCustomVerificationEmailTemplateOutput>;
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateInput,
    cb: (err: any, data?: UpdateCustomVerificationEmailTemplateOutput) => void
  ): void;
  public updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateInput,
    cb?: (err: any, data?: UpdateCustomVerificationEmailTemplateOutput) => void
  ): Promise<UpdateCustomVerificationEmailTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCustomVerificationEmailTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidSnsTopicException} <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not publish to the topic, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {InvalidS3ConfigurationException} <p>Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or that Amazon SES could not publish to the bucket, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {InvalidLambdaFunctionException} <p>Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could not execute the provided function, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
   *   - {RuleSetDoesNotExistException} <p>Indicates that the provided receipt rule set does not exist.</p>
   *   - {RuleDoesNotExistException} <p>Indicates that the provided receipt rule does not exist.</p>
   *   - {LimitExceededException} <p>Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer Guide</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateReceiptRule(
    args: UpdateReceiptRuleInput
  ): Promise<UpdateReceiptRuleOutput>;
  public updateReceiptRule(
    args: UpdateReceiptRuleInput,
    cb: (err: any, data?: UpdateReceiptRuleOutput) => void
  ): void;
  public updateReceiptRule(
    args: UpdateReceiptRuleInput,
    cb?: (err: any, data?: UpdateReceiptRuleOutput) => void
  ): Promise<UpdateReceiptRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateReceiptRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TemplateDoesNotExistException} <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
   *   - {InvalidTemplateException} <p>Indicates that the template that you specified could not be rendered. This issue may occur when a template refers to a partial that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTemplate(
    args: UpdateTemplateInput
  ): Promise<UpdateTemplateOutput>;
  public updateTemplate(
    args: UpdateTemplateInput,
    cb: (err: any, data?: UpdateTemplateOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateInput,
    cb?: (err: any, data?: UpdateTemplateOutput) => void
  ): Promise<UpdateTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyDomainDkim(
    args: VerifyDomainDkimInput
  ): Promise<VerifyDomainDkimOutput>;
  public verifyDomainDkim(
    args: VerifyDomainDkimInput,
    cb: (err: any, data?: VerifyDomainDkimOutput) => void
  ): void;
  public verifyDomainDkim(
    args: VerifyDomainDkimInput,
    cb?: (err: any, data?: VerifyDomainDkimOutput) => void
  ): Promise<VerifyDomainDkimOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyDomainDkimCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyDomainIdentity(
    args: VerifyDomainIdentityInput
  ): Promise<VerifyDomainIdentityOutput>;
  public verifyDomainIdentity(
    args: VerifyDomainIdentityInput,
    cb: (err: any, data?: VerifyDomainIdentityOutput) => void
  ): void;
  public verifyDomainIdentity(
    args: VerifyDomainIdentityInput,
    cb?: (err: any, data?: VerifyDomainIdentityOutput) => void
  ): Promise<VerifyDomainIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyDomainIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyEmailAddress(
    args: VerifyEmailAddressInput
  ): Promise<VerifyEmailAddressOutput>;
  public verifyEmailAddress(
    args: VerifyEmailAddressInput,
    cb: (err: any, data?: VerifyEmailAddressOutput) => void
  ): void;
  public verifyEmailAddress(
    args: VerifyEmailAddressInput,
    cb?: (err: any, data?: VerifyEmailAddressOutput) => void
  ): Promise<VerifyEmailAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyEmailAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyEmailIdentity(
    args: VerifyEmailIdentityInput
  ): Promise<VerifyEmailIdentityOutput>;
  public verifyEmailIdentity(
    args: VerifyEmailIdentityInput,
    cb: (err: any, data?: VerifyEmailIdentityOutput) => void
  ): void;
  public verifyEmailIdentity(
    args: VerifyEmailIdentityInput,
    cb?: (err: any, data?: VerifyEmailIdentityOutput) => void
  ): Promise<VerifyEmailIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyEmailIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
