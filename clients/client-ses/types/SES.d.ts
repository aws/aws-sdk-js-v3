import { SESClient } from "./SESClient";
import { CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput } from "./commands/CloneReceiptRuleSetCommand";
import { CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput } from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import { CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput } from "./commands/CreateCustomVerificationEmailTemplateCommand";
import { CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput } from "./commands/CreateReceiptFilterCommand";
import { CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput } from "./commands/CreateReceiptRuleCommand";
import { CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput } from "./commands/CreateReceiptRuleSetCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetTrackingOptionsCommandInput, DeleteConfigurationSetTrackingOptionsCommandOutput } from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import { DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput } from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteIdentityCommandInput, DeleteIdentityCommandOutput } from "./commands/DeleteIdentityCommand";
import { DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput } from "./commands/DeleteIdentityPolicyCommand";
import { DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput } from "./commands/DeleteReceiptFilterCommand";
import { DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput } from "./commands/DeleteReceiptRuleCommand";
import { DeleteReceiptRuleSetCommandInput, DeleteReceiptRuleSetCommandOutput } from "./commands/DeleteReceiptRuleSetCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput } from "./commands/DeleteVerifiedEmailAddressCommand";
import { DescribeActiveReceiptRuleSetCommandInput, DescribeActiveReceiptRuleSetCommandOutput } from "./commands/DescribeActiveReceiptRuleSetCommand";
import { DescribeConfigurationSetCommandInput, DescribeConfigurationSetCommandOutput } from "./commands/DescribeConfigurationSetCommand";
import { DescribeReceiptRuleCommandInput, DescribeReceiptRuleCommandOutput } from "./commands/DescribeReceiptRuleCommand";
import { DescribeReceiptRuleSetCommandInput, DescribeReceiptRuleSetCommandOutput } from "./commands/DescribeReceiptRuleSetCommand";
import { GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput } from "./commands/GetAccountSendingEnabledCommand";
import { GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput } from "./commands/GetCustomVerificationEmailTemplateCommand";
import { GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput } from "./commands/GetIdentityDkimAttributesCommand";
import { GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput } from "./commands/GetIdentityMailFromDomainAttributesCommand";
import { GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput } from "./commands/GetIdentityNotificationAttributesCommand";
import { GetIdentityPoliciesCommandInput, GetIdentityPoliciesCommandOutput } from "./commands/GetIdentityPoliciesCommand";
import { GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput } from "./commands/GetIdentityVerificationAttributesCommand";
import { GetSendQuotaCommandInput, GetSendQuotaCommandOutput } from "./commands/GetSendQuotaCommand";
import { GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput } from "./commands/GetSendStatisticsCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput } from "./commands/ListConfigurationSetsCommand";
import { ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput } from "./commands/ListCustomVerificationEmailTemplatesCommand";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "./commands/ListIdentitiesCommand";
import { ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput } from "./commands/ListIdentityPoliciesCommand";
import { ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput } from "./commands/ListReceiptFiltersCommand";
import { ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput } from "./commands/ListReceiptRuleSetsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import { ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput } from "./commands/ListVerifiedEmailAddressesCommand";
import { PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput } from "./commands/PutIdentityPolicyCommand";
import { ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput } from "./commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommandInput, SendBounceCommandOutput } from "./commands/SendBounceCommand";
import { SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput } from "./commands/SendBulkTemplatedEmailCommand";
import { SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput } from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { SendRawEmailCommandInput, SendRawEmailCommandOutput } from "./commands/SendRawEmailCommand";
import { SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput } from "./commands/SendTemplatedEmailCommand";
import { SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput } from "./commands/SetActiveReceiptRuleSetCommand";
import { SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput } from "./commands/SetIdentityDkimEnabledCommand";
import { SetIdentityFeedbackForwardingEnabledCommandInput, SetIdentityFeedbackForwardingEnabledCommandOutput } from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import { SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput } from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import { SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput } from "./commands/SetIdentityMailFromDomainCommand";
import { SetIdentityNotificationTopicCommandInput, SetIdentityNotificationTopicCommandOutput } from "./commands/SetIdentityNotificationTopicCommand";
import { SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput } from "./commands/SetReceiptRulePositionCommand";
import { TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput } from "./commands/TestRenderTemplateCommand";
import { UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput } from "./commands/UpdateAccountSendingEnabledCommand";
import { UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput } from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import { UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput } from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import { UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput } from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import { UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput } from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput } from "./commands/UpdateReceiptRuleCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import { VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput } from "./commands/VerifyDomainDkimCommand";
import { VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput } from "./commands/VerifyDomainIdentityCommand";
import { VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput } from "./commands/VerifyEmailAddressCommand";
import { VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput } from "./commands/VerifyEmailIdentityCommand";
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
export declare class SES extends SESClient {
    /**
     * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and
     *             configurations are copied to the new receipt rule set and are completely independent of
     *             the source rule set.</p>
     *         <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    cloneReceiptRuleSet(args: CloneReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<CloneReceiptRuleSetCommandOutput>;
    cloneReceiptRuleSet(args: CloneReceiptRuleSetCommandInput, cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void): void;
    cloneReceiptRuleSet(args: CloneReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CloneReceiptRuleSetCommandOutput) => void): void;
    /**
     * <p>Creates a configuration set.</p>
     *         <p>Configuration sets enable you to publish email sending events. For information about
     *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetCommandOutput>;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
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
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * <p>Creates an association between a configuration set and a custom domain for open and
     *             click event tracking. </p>
     *         <p>By default, images and links used for tracking open and click events are hosted on
     *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
     *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
     */
    createConfigurationSetTrackingOptions(args: CreateConfigurationSetTrackingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetTrackingOptionsCommandOutput>;
    createConfigurationSetTrackingOptions(args: CreateConfigurationSetTrackingOptionsCommandInput, cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void): void;
    createConfigurationSetTrackingOptions(args: CreateConfigurationSetTrackingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetTrackingOptionsCommandOutput) => void): void;
    /**
     * <p>Creates a new custom verification email template.</p>
     *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
     *                 Guide</i>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createCustomVerificationEmailTemplate(args: CreateCustomVerificationEmailTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomVerificationEmailTemplateCommandOutput>;
    createCustomVerificationEmailTemplate(args: CreateCustomVerificationEmailTemplateCommandInput, cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void): void;
    createCustomVerificationEmailTemplate(args: CreateCustomVerificationEmailTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomVerificationEmailTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a new IP address filter.</p>
     *         <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createReceiptFilter(args: CreateReceiptFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateReceiptFilterCommandOutput>;
    createReceiptFilter(args: CreateReceiptFilterCommandInput, cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void): void;
    createReceiptFilter(args: CreateReceiptFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReceiptFilterCommandOutput) => void): void;
    /**
     * <p>Creates a receipt rule.</p>
     *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createReceiptRule(args: CreateReceiptRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateReceiptRuleCommandOutput>;
    createReceiptRule(args: CreateReceiptRuleCommandInput, cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void): void;
    createReceiptRule(args: CreateReceiptRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReceiptRuleCommandOutput) => void): void;
    /**
     * <p>Creates an empty receipt rule set.</p>
     *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createReceiptRuleSet(args: CreateReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateReceiptRuleSetCommandOutput>;
    createReceiptRuleSet(args: CreateReceiptRuleSetCommandInput, cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void): void;
    createReceiptRuleSet(args: CreateReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReceiptRuleSetCommandOutput) => void): void;
    /**
     * <p>Creates an email template. Email templates enable you to send personalized email to
     *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    createTemplate(args: CreateTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateTemplateCommandOutput>;
    createTemplate(args: CreateTemplateCommandInput, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
    createTemplate(args: CreateTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a configuration set. Configuration sets enable you to publish email sending
     *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetCommandOutput>;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    /**
     * <p>Deletes a configuration set event destination. Configuration set event destinations
     *             are associated with configuration sets, which enable you to publish email sending
     *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
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
    deleteConfigurationSetTrackingOptions(args: DeleteConfigurationSetTrackingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput>;
    deleteConfigurationSetTrackingOptions(args: DeleteConfigurationSetTrackingOptionsCommandInput, cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void): void;
    deleteConfigurationSetTrackingOptions(args: DeleteConfigurationSetTrackingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetTrackingOptionsCommandOutput) => void): void;
    /**
     * <p>Deletes an existing custom verification email template. </p>
     *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
     *                 Guide</i>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteCustomVerificationEmailTemplate(args: DeleteCustomVerificationEmailTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomVerificationEmailTemplateCommandOutput>;
    deleteCustomVerificationEmailTemplate(args: DeleteCustomVerificationEmailTemplateCommandInput, cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void): void;
    deleteCustomVerificationEmailTemplate(args: DeleteCustomVerificationEmailTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomVerificationEmailTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified identity (an email address or a domain) from the list of
     *             verified identities.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteIdentity(args: DeleteIdentityCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIdentityCommandOutput>;
    deleteIdentity(args: DeleteIdentityCommandInput, cb: (err: any, data?: DeleteIdentityCommandOutput) => void): void;
    deleteIdentity(args: DeleteIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIdentityCommandOutput) => void): void;
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
    deleteIdentityPolicy(args: DeleteIdentityPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIdentityPolicyCommandOutput>;
    deleteIdentityPolicy(args: DeleteIdentityPolicyCommandInput, cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void): void;
    deleteIdentityPolicy(args: DeleteIdentityPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIdentityPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified IP address filter.</p>
     *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteReceiptFilter(args: DeleteReceiptFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReceiptFilterCommandOutput>;
    deleteReceiptFilter(args: DeleteReceiptFilterCommandInput, cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void): void;
    deleteReceiptFilter(args: DeleteReceiptFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReceiptFilterCommandOutput) => void): void;
    /**
     * <p>Deletes the specified receipt rule.</p>
     *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteReceiptRule(args: DeleteReceiptRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReceiptRuleCommandOutput>;
    deleteReceiptRule(args: DeleteReceiptRuleCommandInput, cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void): void;
    deleteReceiptRule(args: DeleteReceiptRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReceiptRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified receipt rule set and all of the receipt rules it
     *             contains.</p>
     *         <note>
     *             <p>The currently active rule set cannot be deleted.</p>
     *         </note>
     *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteReceiptRuleSet(args: DeleteReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReceiptRuleSetCommandOutput>;
    deleteReceiptRuleSet(args: DeleteReceiptRuleSetCommandInput, cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void): void;
    deleteReceiptRuleSet(args: DeleteReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReceiptRuleSetCommandOutput) => void): void;
    /**
     * <p>Deletes an email template.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    deleteTemplate(args: DeleteTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTemplateCommandOutput>;
    deleteTemplate(args: DeleteTemplateCommandInput, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
    deleteTemplate(args: DeleteTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
     *             and domains.</p>
     */
    deleteVerifiedEmailAddress(args: DeleteVerifiedEmailAddressCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVerifiedEmailAddressCommandOutput>;
    deleteVerifiedEmailAddress(args: DeleteVerifiedEmailAddressCommandInput, cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void): void;
    deleteVerifiedEmailAddress(args: DeleteVerifiedEmailAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVerifiedEmailAddressCommandOutput) => void): void;
    /**
     * <p>Returns the metadata and receipt rules for the receipt rule set that is currently
     *             active.</p>
     *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    describeActiveReceiptRuleSet(args: DescribeActiveReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActiveReceiptRuleSetCommandOutput>;
    describeActiveReceiptRuleSet(args: DescribeActiveReceiptRuleSetCommandInput, cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void): void;
    describeActiveReceiptRuleSet(args: DescribeActiveReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActiveReceiptRuleSetCommandOutput) => void): void;
    /**
     * <p>Returns the details of the specified configuration set. For information about using
     *             configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    describeConfigurationSet(args: DescribeConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationSetCommandOutput>;
    describeConfigurationSet(args: DescribeConfigurationSetCommandInput, cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void): void;
    describeConfigurationSet(args: DescribeConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationSetCommandOutput) => void): void;
    /**
     * <p>Returns the details of the specified receipt rule.</p>
     *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    describeReceiptRule(args: DescribeReceiptRuleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReceiptRuleCommandOutput>;
    describeReceiptRule(args: DescribeReceiptRuleCommandInput, cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void): void;
    describeReceiptRule(args: DescribeReceiptRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReceiptRuleCommandOutput) => void): void;
    /**
     * <p>Returns the details of the specified receipt rule set.</p>
     *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    describeReceiptRuleSet(args: DescribeReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReceiptRuleSetCommandOutput>;
    describeReceiptRuleSet(args: DescribeReceiptRuleSetCommandInput, cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void): void;
    describeReceiptRuleSet(args: DescribeReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReceiptRuleSetCommandOutput) => void): void;
    /**
     * <p>Returns the email sending status of the Amazon SES account for the current region.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    getAccountSendingEnabled(args: GetAccountSendingEnabledCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountSendingEnabledCommandOutput>;
    getAccountSendingEnabled(args: GetAccountSendingEnabledCommandInput, cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void): void;
    getAccountSendingEnabled(args: GetAccountSendingEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountSendingEnabledCommandOutput) => void): void;
    /**
     * <p>Returns the custom email verification template for the template name you
     *             specify.</p>
     *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
     *                 Guide</i>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    getCustomVerificationEmailTemplate(args: GetCustomVerificationEmailTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetCustomVerificationEmailTemplateCommandOutput>;
    getCustomVerificationEmailTemplate(args: GetCustomVerificationEmailTemplateCommandInput, cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void): void;
    getCustomVerificationEmailTemplate(args: GetCustomVerificationEmailTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCustomVerificationEmailTemplateCommandOutput) => void): void;
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
    getIdentityDkimAttributes(args: GetIdentityDkimAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityDkimAttributesCommandOutput>;
    getIdentityDkimAttributes(args: GetIdentityDkimAttributesCommandInput, cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void): void;
    getIdentityDkimAttributes(args: GetIdentityDkimAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityDkimAttributesCommandOutput) => void): void;
    /**
     * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
     *             domains).</p>
     *         <p>This operation is throttled at one request per second and can only get custom MAIL
     *             FROM attributes for up to 100 identities at a time.</p>
     */
    getIdentityMailFromDomainAttributes(args: GetIdentityMailFromDomainAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityMailFromDomainAttributesCommandOutput>;
    getIdentityMailFromDomainAttributes(args: GetIdentityMailFromDomainAttributesCommandInput, cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void): void;
    getIdentityMailFromDomainAttributes(args: GetIdentityMailFromDomainAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityMailFromDomainAttributesCommandOutput) => void): void;
    /**
     * <p>Given a list of verified identities (email addresses and/or domains), returns a
     *             structure describing identity notification attributes.</p>
     *         <p>This operation is throttled at one request per second and can only get notification
     *             attributes for up to 100 identities at a time.</p>
     *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
     *                 Developer Guide</a>.</p>
     */
    getIdentityNotificationAttributes(args: GetIdentityNotificationAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityNotificationAttributesCommandOutput>;
    getIdentityNotificationAttributes(args: GetIdentityNotificationAttributesCommandInput, cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void): void;
    getIdentityNotificationAttributes(args: GetIdentityNotificationAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityNotificationAttributesCommandOutput) => void): void;
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
    getIdentityPolicies(args: GetIdentityPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityPoliciesCommandOutput>;
    getIdentityPolicies(args: GetIdentityPoliciesCommandInput, cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void): void;
    getIdentityPolicies(args: GetIdentityPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityPoliciesCommandOutput) => void): void;
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
    getIdentityVerificationAttributes(args: GetIdentityVerificationAttributesCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityVerificationAttributesCommandOutput>;
    getIdentityVerificationAttributes(args: GetIdentityVerificationAttributesCommandInput, cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void): void;
    getIdentityVerificationAttributes(args: GetIdentityVerificationAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityVerificationAttributesCommandOutput) => void): void;
    /**
     * <p>Provides the sending limits for the Amazon SES account. </p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    getSendQuota(args: GetSendQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetSendQuotaCommandOutput>;
    getSendQuota(args: GetSendQuotaCommandInput, cb: (err: any, data?: GetSendQuotaCommandOutput) => void): void;
    getSendQuota(args: GetSendQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSendQuotaCommandOutput) => void): void;
    /**
     * <p>Provides sending statistics for the current AWS Region. The result is a list of data
     *             points, representing the last two weeks of sending activity. Each data point in the list
     *             contains statistics for a 15-minute period of time.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    getSendStatistics(args: GetSendStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetSendStatisticsCommandOutput>;
    getSendStatistics(args: GetSendStatisticsCommandInput, cb: (err: any, data?: GetSendStatisticsCommandOutput) => void): void;
    getSendStatistics(args: GetSendStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSendStatisticsCommandOutput) => void): void;
    /**
     * <p>Displays the template object (which includes the Subject line, HTML part and text
     *             part) for the template you specify.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
    getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
    getTemplate(args: GetTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
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
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationSetsCommandOutput>;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    /**
     * <p>Lists the existing custom verification email templates for your account in the current
     *             AWS Region.</p>
     *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
     *                 Guide</i>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    listCustomVerificationEmailTemplates(args: ListCustomVerificationEmailTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomVerificationEmailTemplatesCommandOutput>;
    listCustomVerificationEmailTemplates(args: ListCustomVerificationEmailTemplatesCommandInput, cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void): void;
    listCustomVerificationEmailTemplates(args: ListCustomVerificationEmailTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomVerificationEmailTemplatesCommandOutput) => void): void;
    /**
     * <p>Returns a list containing all of the identities (email addresses and domains) for your
     *             AWS account in the current AWS Region, regardless of verification status.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    listIdentities(args: ListIdentitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListIdentitiesCommandOutput>;
    listIdentities(args: ListIdentitiesCommandInput, cb: (err: any, data?: ListIdentitiesCommandOutput) => void): void;
    listIdentities(args: ListIdentitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIdentitiesCommandOutput) => void): void;
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
    listIdentityPolicies(args: ListIdentityPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListIdentityPoliciesCommandOutput>;
    listIdentityPolicies(args: ListIdentityPoliciesCommandInput, cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void): void;
    listIdentityPolicies(args: ListIdentityPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIdentityPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the IP address filters associated with your AWS account in the current AWS
     *             Region.</p>
     *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    listReceiptFilters(args: ListReceiptFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListReceiptFiltersCommandOutput>;
    listReceiptFilters(args: ListReceiptFiltersCommandInput, cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void): void;
    listReceiptFilters(args: ListReceiptFiltersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReceiptFiltersCommandOutput) => void): void;
    /**
     * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS
     *             Region. If there are additional receipt rule sets to be retrieved, you will receive a
     *                 <code>NextToken</code> that you can provide to the next call to
     *                 <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p>
     *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    listReceiptRuleSets(args: ListReceiptRuleSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListReceiptRuleSetsCommandOutput>;
    listReceiptRuleSets(args: ListReceiptRuleSetsCommandInput, cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void): void;
    listReceiptRuleSets(args: ListReceiptRuleSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReceiptRuleSetsCommandOutput) => void): void;
    /**
     * <p>Lists the email templates present in your Amazon SES account in the current AWS
     *             Region.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
    listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
    listTemplates(args: ListTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
     *             and domains associated with your account.</p>
     */
    listVerifiedEmailAddresses(args: ListVerifiedEmailAddressesCommandInput, options?: __HttpHandlerOptions): Promise<ListVerifiedEmailAddressesCommandOutput>;
    listVerifiedEmailAddresses(args: ListVerifiedEmailAddressesCommandInput, cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void): void;
    listVerifiedEmailAddresses(args: ListVerifiedEmailAddressesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVerifiedEmailAddressesCommandOutput) => void): void;
    /**
     * <p>Adds or updates the delivery options for a configuration set.</p>
     */
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void): void;
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void): void;
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
    putIdentityPolicy(args: PutIdentityPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutIdentityPolicyCommandOutput>;
    putIdentityPolicy(args: PutIdentityPolicyCommandInput, cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void): void;
    putIdentityPolicy(args: PutIdentityPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutIdentityPolicyCommandOutput) => void): void;
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
    reorderReceiptRuleSet(args: ReorderReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<ReorderReceiptRuleSetCommandOutput>;
    reorderReceiptRuleSet(args: ReorderReceiptRuleSetCommandInput, cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void): void;
    reorderReceiptRuleSet(args: ReorderReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReorderReceiptRuleSetCommandOutput) => void): void;
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
    sendBounce(args: SendBounceCommandInput, options?: __HttpHandlerOptions): Promise<SendBounceCommandOutput>;
    sendBounce(args: SendBounceCommandInput, cb: (err: any, data?: SendBounceCommandOutput) => void): void;
    sendBounce(args: SendBounceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendBounceCommandOutput) => void): void;
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
    sendBulkTemplatedEmail(args: SendBulkTemplatedEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendBulkTemplatedEmailCommandOutput>;
    sendBulkTemplatedEmail(args: SendBulkTemplatedEmailCommandInput, cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void): void;
    sendBulkTemplatedEmail(args: SendBulkTemplatedEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendBulkTemplatedEmailCommandOutput) => void): void;
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
    sendCustomVerificationEmail(args: SendCustomVerificationEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendCustomVerificationEmailCommandOutput>;
    sendCustomVerificationEmail(args: SendCustomVerificationEmailCommandInput, cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void): void;
    sendCustomVerificationEmail(args: SendCustomVerificationEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendCustomVerificationEmailCommandOutput) => void): void;
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
    sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
    sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
    sendEmail(args: SendEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
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
    sendRawEmail(args: SendRawEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendRawEmailCommandOutput>;
    sendRawEmail(args: SendRawEmailCommandInput, cb: (err: any, data?: SendRawEmailCommandOutput) => void): void;
    sendRawEmail(args: SendRawEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendRawEmailCommandOutput) => void): void;
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
    sendTemplatedEmail(args: SendTemplatedEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendTemplatedEmailCommandOutput>;
    sendTemplatedEmail(args: SendTemplatedEmailCommandInput, cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void): void;
    sendTemplatedEmail(args: SendTemplatedEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendTemplatedEmailCommandOutput) => void): void;
    /**
     * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
     *         <note>
     *             <p>To disable your email-receiving through Amazon SES completely, you can call this API
     *                 with RuleSetName set to null.</p>
     *         </note>
     *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    setActiveReceiptRuleSet(args: SetActiveReceiptRuleSetCommandInput, options?: __HttpHandlerOptions): Promise<SetActiveReceiptRuleSetCommandOutput>;
    setActiveReceiptRuleSet(args: SetActiveReceiptRuleSetCommandInput, cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void): void;
    setActiveReceiptRuleSet(args: SetActiveReceiptRuleSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetActiveReceiptRuleSetCommandOutput) => void): void;
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
    setIdentityDkimEnabled(args: SetIdentityDkimEnabledCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityDkimEnabledCommandOutput>;
    setIdentityDkimEnabled(args: SetIdentityDkimEnabledCommandInput, cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void): void;
    setIdentityDkimEnabled(args: SetIdentityDkimEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityDkimEnabledCommandOutput) => void): void;
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
    setIdentityFeedbackForwardingEnabled(args: SetIdentityFeedbackForwardingEnabledCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput>;
    setIdentityFeedbackForwardingEnabled(args: SetIdentityFeedbackForwardingEnabledCommandInput, cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void): void;
    setIdentityFeedbackForwardingEnabled(args: SetIdentityFeedbackForwardingEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityFeedbackForwardingEnabledCommandOutput) => void): void;
    /**
     * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the
     *             original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
     *             type.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
     *                 Developer Guide</a>.</p>
     */
    setIdentityHeadersInNotificationsEnabled(args: SetIdentityHeadersInNotificationsEnabledCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput>;
    setIdentityHeadersInNotificationsEnabled(args: SetIdentityHeadersInNotificationsEnabledCommandInput, cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void): void;
    setIdentityHeadersInNotificationsEnabled(args: SetIdentityHeadersInNotificationsEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityHeadersInNotificationsEnabledCommandOutput) => void): void;
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
    setIdentityMailFromDomain(args: SetIdentityMailFromDomainCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityMailFromDomainCommandOutput>;
    setIdentityMailFromDomain(args: SetIdentityMailFromDomainCommandInput, cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void): void;
    setIdentityMailFromDomain(args: SetIdentityMailFromDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityMailFromDomainCommandOutput) => void): void;
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
    setIdentityNotificationTopic(args: SetIdentityNotificationTopicCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityNotificationTopicCommandOutput>;
    setIdentityNotificationTopic(args: SetIdentityNotificationTopicCommandInput, cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void): void;
    setIdentityNotificationTopic(args: SetIdentityNotificationTopicCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityNotificationTopicCommandOutput) => void): void;
    /**
     * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
     *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    setReceiptRulePosition(args: SetReceiptRulePositionCommandInput, options?: __HttpHandlerOptions): Promise<SetReceiptRulePositionCommandOutput>;
    setReceiptRulePosition(args: SetReceiptRulePositionCommandInput, cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void): void;
    setReceiptRulePosition(args: SetReceiptRulePositionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetReceiptRulePositionCommandOutput) => void): void;
    /**
     * <p>Creates a preview of the MIME content of an email when provided with a template and a
     *             set of replacement data.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    testRenderTemplate(args: TestRenderTemplateCommandInput, options?: __HttpHandlerOptions): Promise<TestRenderTemplateCommandOutput>;
    testRenderTemplate(args: TestRenderTemplateCommandInput, cb: (err: any, data?: TestRenderTemplateCommandOutput) => void): void;
    testRenderTemplate(args: TestRenderTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestRenderTemplateCommandOutput) => void): void;
    /**
     * <p>Enables or disables email sending across your entire Amazon SES account in the current
     *             AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
     *             temporarily pause email sending across your Amazon SES account in a given AWS Region when
     *             reputation metrics (such as your bounce or complaint rates) reach certain
     *             thresholds.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateAccountSendingEnabled(args: UpdateAccountSendingEnabledCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountSendingEnabledCommandOutput>;
    updateAccountSendingEnabled(args: UpdateAccountSendingEnabledCommandInput, cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void): void;
    updateAccountSendingEnabled(args: UpdateAccountSendingEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccountSendingEnabledCommandOutput) => void): void;
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
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * <p>Enables or disables the publishing of reputation metrics for emails sent using a
     *             specific configuration set in a given AWS Region. Reputation metrics include bounce
     *             and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
     *             create alarms when bounce or complaint rates exceed certain thresholds.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateConfigurationSetReputationMetricsEnabled(args: UpdateConfigurationSetReputationMetricsEnabledCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
    updateConfigurationSetReputationMetricsEnabled(args: UpdateConfigurationSetReputationMetricsEnabledCommandInput, cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void): void;
    updateConfigurationSetReputationMetricsEnabled(args: UpdateConfigurationSetReputationMetricsEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetReputationMetricsEnabledCommandOutput) => void): void;
    /**
     * <p>Enables or disables email sending for messages sent using a specific configuration set
     *             in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms
     *             to temporarily pause email sending for a configuration set when the reputation metrics
     *             for that configuration set (such as your bounce on complaint rate) exceed certain
     *             thresholds.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateConfigurationSetSendingEnabled(args: UpdateConfigurationSetSendingEnabledCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetSendingEnabledCommandOutput>;
    updateConfigurationSetSendingEnabled(args: UpdateConfigurationSetSendingEnabledCommandInput, cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void): void;
    updateConfigurationSetSendingEnabled(args: UpdateConfigurationSetSendingEnabledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetSendingEnabledCommandOutput) => void): void;
    /**
     * <p>Modifies an association between a configuration set and a custom domain for open and
     *             click event tracking. </p>
     *         <p>By default, images and links used for tracking open and click events are hosted on
     *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
     *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
     */
    updateConfigurationSetTrackingOptions(args: UpdateConfigurationSetTrackingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput>;
    updateConfigurationSetTrackingOptions(args: UpdateConfigurationSetTrackingOptionsCommandInput, cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void): void;
    updateConfigurationSetTrackingOptions(args: UpdateConfigurationSetTrackingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetTrackingOptionsCommandOutput) => void): void;
    /**
     * <p>Updates an existing custom verification email template.</p>
     *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
     *                 Guide</i>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateCustomVerificationEmailTemplate(args: UpdateCustomVerificationEmailTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCustomVerificationEmailTemplateCommandOutput>;
    updateCustomVerificationEmailTemplate(args: UpdateCustomVerificationEmailTemplateCommandInput, cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void): void;
    updateCustomVerificationEmailTemplate(args: UpdateCustomVerificationEmailTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCustomVerificationEmailTemplateCommandOutput) => void): void;
    /**
     * <p>Updates a receipt rule.</p>
     *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
     *                 Developer Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateReceiptRule(args: UpdateReceiptRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReceiptRuleCommandOutput>;
    updateReceiptRule(args: UpdateReceiptRuleCommandInput, cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void): void;
    updateReceiptRule(args: UpdateReceiptRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReceiptRuleCommandOutput) => void): void;
    /**
     * <p>Updates an email template. Email templates enable you to send personalized email to
     *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
     *                 Guide</a>.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    updateTemplate(args: UpdateTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTemplateCommandOutput>;
    updateTemplate(args: UpdateTemplateCommandInput, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
    updateTemplate(args: UpdateTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
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
    verifyDomainDkim(args: VerifyDomainDkimCommandInput, options?: __HttpHandlerOptions): Promise<VerifyDomainDkimCommandOutput>;
    verifyDomainDkim(args: VerifyDomainDkimCommandInput, cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void): void;
    verifyDomainDkim(args: VerifyDomainDkimCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyDomainDkimCommandOutput) => void): void;
    /**
     * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS
     *             Region and attempts to verify it. For more information about verifying domains, see
     *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email
     *                 Addresses and Domains</a> in the <i>Amazon SES Developer
     *             Guide.</i>
     *          </p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    verifyDomainIdentity(args: VerifyDomainIdentityCommandInput, options?: __HttpHandlerOptions): Promise<VerifyDomainIdentityCommandOutput>;
    verifyDomainIdentity(args: VerifyDomainIdentityCommandInput, cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void): void;
    verifyDomainIdentity(args: VerifyDomainIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyDomainIdentityCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
     *             address.</p>
     */
    verifyEmailAddress(args: VerifyEmailAddressCommandInput, options?: __HttpHandlerOptions): Promise<VerifyEmailAddressCommandOutput>;
    verifyEmailAddress(args: VerifyEmailAddressCommandInput, cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void): void;
    verifyEmailAddress(args: VerifyEmailAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyEmailAddressCommandOutput) => void): void;
    /**
     * <p>Adds an email address to the list of identities for your Amazon SES account in the current
     *             AWS region and attempts to verify it. As a result of executing this operation, a
     *             verification email is sent to the specified address.</p>
     *         <p>You can execute this operation no more than once per second.</p>
     */
    verifyEmailIdentity(args: VerifyEmailIdentityCommandInput, options?: __HttpHandlerOptions): Promise<VerifyEmailIdentityCommandOutput>;
    verifyEmailIdentity(args: VerifyEmailIdentityCommandInput, cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void): void;
    verifyEmailIdentity(args: VerifyEmailIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyEmailIdentityCommandOutput) => void): void;
}
