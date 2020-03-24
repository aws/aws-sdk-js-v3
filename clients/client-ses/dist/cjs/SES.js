"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SESClient_1 = require("./SESClient");
const CloneReceiptRuleSetCommand_1 = require("./commands/CloneReceiptRuleSetCommand");
const CreateConfigurationSetCommand_1 = require("./commands/CreateConfigurationSetCommand");
const CreateConfigurationSetEventDestinationCommand_1 = require("./commands/CreateConfigurationSetEventDestinationCommand");
const CreateConfigurationSetTrackingOptionsCommand_1 = require("./commands/CreateConfigurationSetTrackingOptionsCommand");
const CreateCustomVerificationEmailTemplateCommand_1 = require("./commands/CreateCustomVerificationEmailTemplateCommand");
const CreateReceiptFilterCommand_1 = require("./commands/CreateReceiptFilterCommand");
const CreateReceiptRuleCommand_1 = require("./commands/CreateReceiptRuleCommand");
const CreateReceiptRuleSetCommand_1 = require("./commands/CreateReceiptRuleSetCommand");
const CreateTemplateCommand_1 = require("./commands/CreateTemplateCommand");
const DeleteConfigurationSetCommand_1 = require("./commands/DeleteConfigurationSetCommand");
const DeleteConfigurationSetEventDestinationCommand_1 = require("./commands/DeleteConfigurationSetEventDestinationCommand");
const DeleteConfigurationSetTrackingOptionsCommand_1 = require("./commands/DeleteConfigurationSetTrackingOptionsCommand");
const DeleteCustomVerificationEmailTemplateCommand_1 = require("./commands/DeleteCustomVerificationEmailTemplateCommand");
const DeleteIdentityCommand_1 = require("./commands/DeleteIdentityCommand");
const DeleteIdentityPolicyCommand_1 = require("./commands/DeleteIdentityPolicyCommand");
const DeleteReceiptFilterCommand_1 = require("./commands/DeleteReceiptFilterCommand");
const DeleteReceiptRuleCommand_1 = require("./commands/DeleteReceiptRuleCommand");
const DeleteReceiptRuleSetCommand_1 = require("./commands/DeleteReceiptRuleSetCommand");
const DeleteTemplateCommand_1 = require("./commands/DeleteTemplateCommand");
const DeleteVerifiedEmailAddressCommand_1 = require("./commands/DeleteVerifiedEmailAddressCommand");
const DescribeActiveReceiptRuleSetCommand_1 = require("./commands/DescribeActiveReceiptRuleSetCommand");
const DescribeConfigurationSetCommand_1 = require("./commands/DescribeConfigurationSetCommand");
const DescribeReceiptRuleCommand_1 = require("./commands/DescribeReceiptRuleCommand");
const DescribeReceiptRuleSetCommand_1 = require("./commands/DescribeReceiptRuleSetCommand");
const GetAccountSendingEnabledCommand_1 = require("./commands/GetAccountSendingEnabledCommand");
const GetCustomVerificationEmailTemplateCommand_1 = require("./commands/GetCustomVerificationEmailTemplateCommand");
const GetIdentityDkimAttributesCommand_1 = require("./commands/GetIdentityDkimAttributesCommand");
const GetIdentityMailFromDomainAttributesCommand_1 = require("./commands/GetIdentityMailFromDomainAttributesCommand");
const GetIdentityNotificationAttributesCommand_1 = require("./commands/GetIdentityNotificationAttributesCommand");
const GetIdentityPoliciesCommand_1 = require("./commands/GetIdentityPoliciesCommand");
const GetIdentityVerificationAttributesCommand_1 = require("./commands/GetIdentityVerificationAttributesCommand");
const GetSendQuotaCommand_1 = require("./commands/GetSendQuotaCommand");
const GetSendStatisticsCommand_1 = require("./commands/GetSendStatisticsCommand");
const GetTemplateCommand_1 = require("./commands/GetTemplateCommand");
const ListConfigurationSetsCommand_1 = require("./commands/ListConfigurationSetsCommand");
const ListCustomVerificationEmailTemplatesCommand_1 = require("./commands/ListCustomVerificationEmailTemplatesCommand");
const ListIdentitiesCommand_1 = require("./commands/ListIdentitiesCommand");
const ListIdentityPoliciesCommand_1 = require("./commands/ListIdentityPoliciesCommand");
const ListReceiptFiltersCommand_1 = require("./commands/ListReceiptFiltersCommand");
const ListReceiptRuleSetsCommand_1 = require("./commands/ListReceiptRuleSetsCommand");
const ListTemplatesCommand_1 = require("./commands/ListTemplatesCommand");
const ListVerifiedEmailAddressesCommand_1 = require("./commands/ListVerifiedEmailAddressesCommand");
const PutConfigurationSetDeliveryOptionsCommand_1 = require("./commands/PutConfigurationSetDeliveryOptionsCommand");
const PutIdentityPolicyCommand_1 = require("./commands/PutIdentityPolicyCommand");
const ReorderReceiptRuleSetCommand_1 = require("./commands/ReorderReceiptRuleSetCommand");
const SendBounceCommand_1 = require("./commands/SendBounceCommand");
const SendBulkTemplatedEmailCommand_1 = require("./commands/SendBulkTemplatedEmailCommand");
const SendCustomVerificationEmailCommand_1 = require("./commands/SendCustomVerificationEmailCommand");
const SendEmailCommand_1 = require("./commands/SendEmailCommand");
const SendRawEmailCommand_1 = require("./commands/SendRawEmailCommand");
const SendTemplatedEmailCommand_1 = require("./commands/SendTemplatedEmailCommand");
const SetActiveReceiptRuleSetCommand_1 = require("./commands/SetActiveReceiptRuleSetCommand");
const SetIdentityDkimEnabledCommand_1 = require("./commands/SetIdentityDkimEnabledCommand");
const SetIdentityFeedbackForwardingEnabledCommand_1 = require("./commands/SetIdentityFeedbackForwardingEnabledCommand");
const SetIdentityHeadersInNotificationsEnabledCommand_1 = require("./commands/SetIdentityHeadersInNotificationsEnabledCommand");
const SetIdentityMailFromDomainCommand_1 = require("./commands/SetIdentityMailFromDomainCommand");
const SetIdentityNotificationTopicCommand_1 = require("./commands/SetIdentityNotificationTopicCommand");
const SetReceiptRulePositionCommand_1 = require("./commands/SetReceiptRulePositionCommand");
const TestRenderTemplateCommand_1 = require("./commands/TestRenderTemplateCommand");
const UpdateAccountSendingEnabledCommand_1 = require("./commands/UpdateAccountSendingEnabledCommand");
const UpdateConfigurationSetEventDestinationCommand_1 = require("./commands/UpdateConfigurationSetEventDestinationCommand");
const UpdateConfigurationSetReputationMetricsEnabledCommand_1 = require("./commands/UpdateConfigurationSetReputationMetricsEnabledCommand");
const UpdateConfigurationSetSendingEnabledCommand_1 = require("./commands/UpdateConfigurationSetSendingEnabledCommand");
const UpdateConfigurationSetTrackingOptionsCommand_1 = require("./commands/UpdateConfigurationSetTrackingOptionsCommand");
const UpdateCustomVerificationEmailTemplateCommand_1 = require("./commands/UpdateCustomVerificationEmailTemplateCommand");
const UpdateReceiptRuleCommand_1 = require("./commands/UpdateReceiptRuleCommand");
const UpdateTemplateCommand_1 = require("./commands/UpdateTemplateCommand");
const VerifyDomainDkimCommand_1 = require("./commands/VerifyDomainDkimCommand");
const VerifyDomainIdentityCommand_1 = require("./commands/VerifyDomainIdentityCommand");
const VerifyEmailAddressCommand_1 = require("./commands/VerifyEmailAddressCommand");
const VerifyEmailIdentityCommand_1 = require("./commands/VerifyEmailIdentityCommand");
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
class SES extends SESClient_1.SESClient {
    cloneReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new CloneReceiptRuleSetCommand_1.CloneReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConfigurationSet(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetCommand_1.CreateConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetEventDestinationCommand_1.CreateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConfigurationSetTrackingOptions(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetTrackingOptionsCommand_1.CreateConfigurationSetTrackingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new CreateCustomVerificationEmailTemplateCommand_1.CreateCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReceiptFilter(args, optionsOrCb, cb) {
        const command = new CreateReceiptFilterCommand_1.CreateReceiptFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReceiptRule(args, optionsOrCb, cb) {
        const command = new CreateReceiptRuleCommand_1.CreateReceiptRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new CreateReceiptRuleSetCommand_1.CreateReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTemplate(args, optionsOrCb, cb) {
        const command = new CreateTemplateCommand_1.CreateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConfigurationSet(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetCommand_1.DeleteConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetEventDestinationCommand_1.DeleteConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConfigurationSetTrackingOptions(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetTrackingOptionsCommand_1.DeleteConfigurationSetTrackingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new DeleteCustomVerificationEmailTemplateCommand_1.DeleteCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIdentity(args, optionsOrCb, cb) {
        const command = new DeleteIdentityCommand_1.DeleteIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIdentityPolicy(args, optionsOrCb, cb) {
        const command = new DeleteIdentityPolicyCommand_1.DeleteIdentityPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReceiptFilter(args, optionsOrCb, cb) {
        const command = new DeleteReceiptFilterCommand_1.DeleteReceiptFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReceiptRule(args, optionsOrCb, cb) {
        const command = new DeleteReceiptRuleCommand_1.DeleteReceiptRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new DeleteReceiptRuleSetCommand_1.DeleteReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTemplate(args, optionsOrCb, cb) {
        const command = new DeleteTemplateCommand_1.DeleteTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVerifiedEmailAddress(args, optionsOrCb, cb) {
        const command = new DeleteVerifiedEmailAddressCommand_1.DeleteVerifiedEmailAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeActiveReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new DescribeActiveReceiptRuleSetCommand_1.DescribeActiveReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeConfigurationSet(args, optionsOrCb, cb) {
        const command = new DescribeConfigurationSetCommand_1.DescribeConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReceiptRule(args, optionsOrCb, cb) {
        const command = new DescribeReceiptRuleCommand_1.DescribeReceiptRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new DescribeReceiptRuleSetCommand_1.DescribeReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAccountSendingEnabled(args, optionsOrCb, cb) {
        const command = new GetAccountSendingEnabledCommand_1.GetAccountSendingEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new GetCustomVerificationEmailTemplateCommand_1.GetCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityDkimAttributes(args, optionsOrCb, cb) {
        const command = new GetIdentityDkimAttributesCommand_1.GetIdentityDkimAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityMailFromDomainAttributes(args, optionsOrCb, cb) {
        const command = new GetIdentityMailFromDomainAttributesCommand_1.GetIdentityMailFromDomainAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityNotificationAttributes(args, optionsOrCb, cb) {
        const command = new GetIdentityNotificationAttributesCommand_1.GetIdentityNotificationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityPolicies(args, optionsOrCb, cb) {
        const command = new GetIdentityPoliciesCommand_1.GetIdentityPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityVerificationAttributes(args, optionsOrCb, cb) {
        const command = new GetIdentityVerificationAttributesCommand_1.GetIdentityVerificationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSendQuota(args, optionsOrCb, cb) {
        const command = new GetSendQuotaCommand_1.GetSendQuotaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSendStatistics(args, optionsOrCb, cb) {
        const command = new GetSendStatisticsCommand_1.GetSendStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTemplate(args, optionsOrCb, cb) {
        const command = new GetTemplateCommand_1.GetTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listConfigurationSets(args, optionsOrCb, cb) {
        const command = new ListConfigurationSetsCommand_1.ListConfigurationSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomVerificationEmailTemplates(args, optionsOrCb, cb) {
        const command = new ListCustomVerificationEmailTemplatesCommand_1.ListCustomVerificationEmailTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIdentities(args, optionsOrCb, cb) {
        const command = new ListIdentitiesCommand_1.ListIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIdentityPolicies(args, optionsOrCb, cb) {
        const command = new ListIdentityPoliciesCommand_1.ListIdentityPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReceiptFilters(args, optionsOrCb, cb) {
        const command = new ListReceiptFiltersCommand_1.ListReceiptFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReceiptRuleSets(args, optionsOrCb, cb) {
        const command = new ListReceiptRuleSetsCommand_1.ListReceiptRuleSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTemplates(args, optionsOrCb, cb) {
        const command = new ListTemplatesCommand_1.ListTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVerifiedEmailAddresses(args, optionsOrCb, cb) {
        const command = new ListVerifiedEmailAddressesCommand_1.ListVerifiedEmailAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConfigurationSetDeliveryOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetDeliveryOptionsCommand_1.PutConfigurationSetDeliveryOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putIdentityPolicy(args, optionsOrCb, cb) {
        const command = new PutIdentityPolicyCommand_1.PutIdentityPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    reorderReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new ReorderReceiptRuleSetCommand_1.ReorderReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendBounce(args, optionsOrCb, cb) {
        const command = new SendBounceCommand_1.SendBounceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendBulkTemplatedEmail(args, optionsOrCb, cb) {
        const command = new SendBulkTemplatedEmailCommand_1.SendBulkTemplatedEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendCustomVerificationEmail(args, optionsOrCb, cb) {
        const command = new SendCustomVerificationEmailCommand_1.SendCustomVerificationEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendEmail(args, optionsOrCb, cb) {
        const command = new SendEmailCommand_1.SendEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendRawEmail(args, optionsOrCb, cb) {
        const command = new SendRawEmailCommand_1.SendRawEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendTemplatedEmail(args, optionsOrCb, cb) {
        const command = new SendTemplatedEmailCommand_1.SendTemplatedEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setActiveReceiptRuleSet(args, optionsOrCb, cb) {
        const command = new SetActiveReceiptRuleSetCommand_1.SetActiveReceiptRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityDkimEnabled(args, optionsOrCb, cb) {
        const command = new SetIdentityDkimEnabledCommand_1.SetIdentityDkimEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityFeedbackForwardingEnabled(args, optionsOrCb, cb) {
        const command = new SetIdentityFeedbackForwardingEnabledCommand_1.SetIdentityFeedbackForwardingEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityHeadersInNotificationsEnabled(args, optionsOrCb, cb) {
        const command = new SetIdentityHeadersInNotificationsEnabledCommand_1.SetIdentityHeadersInNotificationsEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityMailFromDomain(args, optionsOrCb, cb) {
        const command = new SetIdentityMailFromDomainCommand_1.SetIdentityMailFromDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setIdentityNotificationTopic(args, optionsOrCb, cb) {
        const command = new SetIdentityNotificationTopicCommand_1.SetIdentityNotificationTopicCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setReceiptRulePosition(args, optionsOrCb, cb) {
        const command = new SetReceiptRulePositionCommand_1.SetReceiptRulePositionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testRenderTemplate(args, optionsOrCb, cb) {
        const command = new TestRenderTemplateCommand_1.TestRenderTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAccountSendingEnabled(args, optionsOrCb, cb) {
        const command = new UpdateAccountSendingEnabledCommand_1.UpdateAccountSendingEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetEventDestinationCommand_1.UpdateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConfigurationSetReputationMetricsEnabled(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetReputationMetricsEnabledCommand_1.UpdateConfigurationSetReputationMetricsEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConfigurationSetSendingEnabled(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetSendingEnabledCommand_1.UpdateConfigurationSetSendingEnabledCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConfigurationSetTrackingOptions(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetTrackingOptionsCommand_1.UpdateConfigurationSetTrackingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new UpdateCustomVerificationEmailTemplateCommand_1.UpdateCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateReceiptRule(args, optionsOrCb, cb) {
        const command = new UpdateReceiptRuleCommand_1.UpdateReceiptRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTemplate(args, optionsOrCb, cb) {
        const command = new UpdateTemplateCommand_1.UpdateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifyDomainDkim(args, optionsOrCb, cb) {
        const command = new VerifyDomainDkimCommand_1.VerifyDomainDkimCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifyDomainIdentity(args, optionsOrCb, cb) {
        const command = new VerifyDomainIdentityCommand_1.VerifyDomainIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifyEmailAddress(args, optionsOrCb, cb) {
        const command = new VerifyEmailAddressCommand_1.VerifyEmailAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifyEmailIdentity(args, optionsOrCb, cb) {
        const command = new VerifyEmailIdentityCommand_1.VerifyEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SES = SES;
//# sourceMappingURL=SES.js.map