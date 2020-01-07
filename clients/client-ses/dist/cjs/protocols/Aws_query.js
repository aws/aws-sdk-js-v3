"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryCloneReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCloneReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CloneReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCloneReceiptRuleSetCommand = serializeAws_queryCloneReceiptRuleSetCommand;
async function serializeAws_queryCreateConfigurationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateConfigurationSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateConfigurationSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateConfigurationSetCommand = serializeAws_queryCreateConfigurationSetCommand;
async function serializeAws_queryCreateConfigurationSetEventDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateConfigurationSetEventDestinationRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateConfigurationSetEventDestination", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateConfigurationSetEventDestinationCommand = serializeAws_queryCreateConfigurationSetEventDestinationCommand;
async function serializeAws_queryCreateConfigurationSetTrackingOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateConfigurationSetTrackingOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateConfigurationSetTrackingOptions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = serializeAws_queryCreateConfigurationSetTrackingOptionsCommand;
async function serializeAws_queryCreateCustomVerificationEmailTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateCustomVerificationEmailTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateCustomVerificationEmailTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateCustomVerificationEmailTemplateCommand = serializeAws_queryCreateCustomVerificationEmailTemplateCommand;
async function serializeAws_queryCreateReceiptFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateReceiptFilterRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateReceiptFilter", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateReceiptFilterCommand = serializeAws_queryCreateReceiptFilterCommand;
async function serializeAws_queryCreateReceiptRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateReceiptRuleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateReceiptRule", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateReceiptRuleCommand = serializeAws_queryCreateReceiptRuleCommand;
async function serializeAws_queryCreateReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateReceiptRuleSetCommand = serializeAws_queryCreateReceiptRuleSetCommand;
async function serializeAws_queryCreateTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateTemplateCommand = serializeAws_queryCreateTemplateCommand;
async function serializeAws_queryDeleteConfigurationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteConfigurationSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteConfigurationSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteConfigurationSetCommand = serializeAws_queryDeleteConfigurationSetCommand;
async function serializeAws_queryDeleteConfigurationSetEventDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteConfigurationSetEventDestinationRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteConfigurationSetEventDestination", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteConfigurationSetEventDestinationCommand = serializeAws_queryDeleteConfigurationSetEventDestinationCommand;
async function serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteConfigurationSetTrackingOptions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand;
async function serializeAws_queryDeleteCustomVerificationEmailTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteCustomVerificationEmailTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteCustomVerificationEmailTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = serializeAws_queryDeleteCustomVerificationEmailTemplateCommand;
async function serializeAws_queryDeleteIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteIdentityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteIdentity", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteIdentityCommand = serializeAws_queryDeleteIdentityCommand;
async function serializeAws_queryDeleteIdentityPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteIdentityPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteIdentityPolicy", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteIdentityPolicyCommand = serializeAws_queryDeleteIdentityPolicyCommand;
async function serializeAws_queryDeleteReceiptFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteReceiptFilterRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteReceiptFilter", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteReceiptFilterCommand = serializeAws_queryDeleteReceiptFilterCommand;
async function serializeAws_queryDeleteReceiptRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteReceiptRuleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteReceiptRule", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteReceiptRuleCommand = serializeAws_queryDeleteReceiptRuleCommand;
async function serializeAws_queryDeleteReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteReceiptRuleSetCommand = serializeAws_queryDeleteReceiptRuleSetCommand;
async function serializeAws_queryDeleteTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteTemplateCommand = serializeAws_queryDeleteTemplateCommand;
async function serializeAws_queryDeleteVerifiedEmailAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteVerifiedEmailAddressRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteVerifiedEmailAddress", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteVerifiedEmailAddressCommand = serializeAws_queryDeleteVerifiedEmailAddressCommand;
async function serializeAws_queryDescribeActiveReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeActiveReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeActiveReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeActiveReceiptRuleSetCommand = serializeAws_queryDescribeActiveReceiptRuleSetCommand;
async function serializeAws_queryDescribeConfigurationSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeConfigurationSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeConfigurationSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeConfigurationSetCommand = serializeAws_queryDescribeConfigurationSetCommand;
async function serializeAws_queryDescribeReceiptRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReceiptRuleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReceiptRule", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReceiptRuleCommand = serializeAws_queryDescribeReceiptRuleCommand;
async function serializeAws_queryDescribeReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeReceiptRuleSetCommand = serializeAws_queryDescribeReceiptRuleSetCommand;
async function serializeAws_queryGetAccountSendingEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetAccountSendingEnabled",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccountSendingEnabledCommand = serializeAws_queryGetAccountSendingEnabledCommand;
async function serializeAws_queryGetCustomVerificationEmailTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetCustomVerificationEmailTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetCustomVerificationEmailTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetCustomVerificationEmailTemplateCommand = serializeAws_queryGetCustomVerificationEmailTemplateCommand;
async function serializeAws_queryGetIdentityDkimAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetIdentityDkimAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetIdentityDkimAttributes", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetIdentityDkimAttributesCommand = serializeAws_queryGetIdentityDkimAttributesCommand;
async function serializeAws_queryGetIdentityMailFromDomainAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetIdentityMailFromDomainAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetIdentityMailFromDomainAttributes", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetIdentityMailFromDomainAttributesCommand = serializeAws_queryGetIdentityMailFromDomainAttributesCommand;
async function serializeAws_queryGetIdentityNotificationAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetIdentityNotificationAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetIdentityNotificationAttributes", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetIdentityNotificationAttributesCommand = serializeAws_queryGetIdentityNotificationAttributesCommand;
async function serializeAws_queryGetIdentityPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetIdentityPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetIdentityPolicies", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetIdentityPoliciesCommand = serializeAws_queryGetIdentityPoliciesCommand;
async function serializeAws_queryGetIdentityVerificationAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetIdentityVerificationAttributesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetIdentityVerificationAttributes", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetIdentityVerificationAttributesCommand = serializeAws_queryGetIdentityVerificationAttributesCommand;
async function serializeAws_queryGetSendQuotaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetSendQuota",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSendQuotaCommand = serializeAws_queryGetSendQuotaCommand;
async function serializeAws_queryGetSendStatisticsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetSendStatistics",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSendStatisticsCommand = serializeAws_queryGetSendStatisticsCommand;
async function serializeAws_queryGetTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetTemplateCommand = serializeAws_queryGetTemplateCommand;
async function serializeAws_queryListConfigurationSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListConfigurationSetsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListConfigurationSets", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListConfigurationSetsCommand = serializeAws_queryListConfigurationSetsCommand;
async function serializeAws_queryListCustomVerificationEmailTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListCustomVerificationEmailTemplatesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListCustomVerificationEmailTemplates", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListCustomVerificationEmailTemplatesCommand = serializeAws_queryListCustomVerificationEmailTemplatesCommand;
async function serializeAws_queryListIdentitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListIdentitiesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListIdentities", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListIdentitiesCommand = serializeAws_queryListIdentitiesCommand;
async function serializeAws_queryListIdentityPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListIdentityPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListIdentityPolicies", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListIdentityPoliciesCommand = serializeAws_queryListIdentityPoliciesCommand;
async function serializeAws_queryListReceiptFiltersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListReceiptFiltersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListReceiptFilters", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListReceiptFiltersCommand = serializeAws_queryListReceiptFiltersCommand;
async function serializeAws_queryListReceiptRuleSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListReceiptRuleSetsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListReceiptRuleSets", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListReceiptRuleSetsCommand = serializeAws_queryListReceiptRuleSetsCommand;
async function serializeAws_queryListTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTemplatesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTemplates", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTemplatesCommand = serializeAws_queryListTemplatesCommand;
async function serializeAws_queryListVerifiedEmailAddressesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "ListVerifiedEmailAddresses",
        Version: "2010-12-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListVerifiedEmailAddressesCommand = serializeAws_queryListVerifiedEmailAddressesCommand;
async function serializeAws_queryPutConfigurationSetDeliveryOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutConfigurationSetDeliveryOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutConfigurationSetDeliveryOptions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = serializeAws_queryPutConfigurationSetDeliveryOptionsCommand;
async function serializeAws_queryPutIdentityPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutIdentityPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutIdentityPolicy", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutIdentityPolicyCommand = serializeAws_queryPutIdentityPolicyCommand;
async function serializeAws_queryReorderReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryReorderReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ReorderReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryReorderReceiptRuleSetCommand = serializeAws_queryReorderReceiptRuleSetCommand;
async function serializeAws_querySendBounceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendBounceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendBounce", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendBounceCommand = serializeAws_querySendBounceCommand;
async function serializeAws_querySendBulkTemplatedEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendBulkTemplatedEmailRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendBulkTemplatedEmail", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendBulkTemplatedEmailCommand = serializeAws_querySendBulkTemplatedEmailCommand;
async function serializeAws_querySendCustomVerificationEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendCustomVerificationEmailRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendCustomVerificationEmail", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendCustomVerificationEmailCommand = serializeAws_querySendCustomVerificationEmailCommand;
async function serializeAws_querySendEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendEmailRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendEmail", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendEmailCommand = serializeAws_querySendEmailCommand;
async function serializeAws_querySendRawEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendRawEmailRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendRawEmail", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendRawEmailCommand = serializeAws_querySendRawEmailCommand;
async function serializeAws_querySendTemplatedEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySendTemplatedEmailRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SendTemplatedEmail", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySendTemplatedEmailCommand = serializeAws_querySendTemplatedEmailCommand;
async function serializeAws_querySetActiveReceiptRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetActiveReceiptRuleSetRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetActiveReceiptRuleSet", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetActiveReceiptRuleSetCommand = serializeAws_querySetActiveReceiptRuleSetCommand;
async function serializeAws_querySetIdentityDkimEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIdentityDkimEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIdentityDkimEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIdentityDkimEnabledCommand = serializeAws_querySetIdentityDkimEnabledCommand;
async function serializeAws_querySetIdentityFeedbackForwardingEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIdentityFeedbackForwardingEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIdentityFeedbackForwardingEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = serializeAws_querySetIdentityFeedbackForwardingEnabledCommand;
async function serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIdentityHeadersInNotificationsEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand;
async function serializeAws_querySetIdentityMailFromDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIdentityMailFromDomainRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIdentityMailFromDomain", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIdentityMailFromDomainCommand = serializeAws_querySetIdentityMailFromDomainCommand;
async function serializeAws_querySetIdentityNotificationTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetIdentityNotificationTopicRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetIdentityNotificationTopic", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetIdentityNotificationTopicCommand = serializeAws_querySetIdentityNotificationTopicCommand;
async function serializeAws_querySetReceiptRulePositionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetReceiptRulePositionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetReceiptRulePosition", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetReceiptRulePositionCommand = serializeAws_querySetReceiptRulePositionCommand;
async function serializeAws_queryTestRenderTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTestRenderTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TestRenderTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTestRenderTemplateCommand = serializeAws_queryTestRenderTemplateCommand;
async function serializeAws_queryUpdateAccountSendingEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAccountSendingEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAccountSendingEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAccountSendingEnabledCommand = serializeAws_queryUpdateAccountSendingEnabledCommand;
async function serializeAws_queryUpdateConfigurationSetEventDestinationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateConfigurationSetEventDestinationRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateConfigurationSetEventDestination", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateConfigurationSetEventDestinationCommand = serializeAws_queryUpdateConfigurationSetEventDestinationCommand;
async function serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateConfigurationSetReputationMetricsEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand;
async function serializeAws_queryUpdateConfigurationSetSendingEnabledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateConfigurationSetSendingEnabledRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateConfigurationSetSendingEnabled", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = serializeAws_queryUpdateConfigurationSetSendingEnabledCommand;
async function serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateConfigurationSetTrackingOptions", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand;
async function serializeAws_queryUpdateCustomVerificationEmailTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateCustomVerificationEmailTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateCustomVerificationEmailTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = serializeAws_queryUpdateCustomVerificationEmailTemplateCommand;
async function serializeAws_queryUpdateReceiptRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateReceiptRuleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateReceiptRule", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateReceiptRuleCommand = serializeAws_queryUpdateReceiptRuleCommand;
async function serializeAws_queryUpdateTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateTemplateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateTemplate", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateTemplateCommand = serializeAws_queryUpdateTemplateCommand;
async function serializeAws_queryVerifyDomainDkimCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryVerifyDomainDkimRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "VerifyDomainDkim", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryVerifyDomainDkimCommand = serializeAws_queryVerifyDomainDkimCommand;
async function serializeAws_queryVerifyDomainIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryVerifyDomainIdentityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "VerifyDomainIdentity", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryVerifyDomainIdentityCommand = serializeAws_queryVerifyDomainIdentityCommand;
async function serializeAws_queryVerifyEmailAddressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryVerifyEmailAddressRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "VerifyEmailAddress", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryVerifyEmailAddressCommand = serializeAws_queryVerifyEmailAddressCommand;
async function serializeAws_queryVerifyEmailIdentityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryVerifyEmailIdentityRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "VerifyEmailIdentity", Version: "2010-12-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryVerifyEmailIdentityCommand = serializeAws_queryVerifyEmailIdentityCommand;
async function deserializeAws_queryCloneReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCloneReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CloneReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCloneReceiptRuleSetCommand = deserializeAws_queryCloneReceiptRuleSetCommand;
async function deserializeAws_queryCloneReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateConfigurationSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConfigurationSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateConfigurationSetCommand = deserializeAws_queryCreateConfigurationSetCommand;
async function deserializeAws_queryCreateConfigurationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetAlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConfigurationSetException":
        case "com.amazon.bacon.frontend.svc.common#InvalidConfigurationSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidConfigurationSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateConfigurationSetEventDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetEventDestinationResponse(data.CreateConfigurationSetEventDestinationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConfigurationSetEventDestinationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateConfigurationSetEventDestinationCommand = deserializeAws_queryCreateConfigurationSetEventDestinationCommand;
async function deserializeAws_queryCreateConfigurationSetEventDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EventDestinationAlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#EventDestinationAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidCloudWatchDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFirehoseDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidFirehoseDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSNSDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidSNSDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse(data.CreateConfigurationSetTrackingOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConfigurationSetTrackingOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand;
async function deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrackingOptionsException":
        case "com.amazon.bacon.frontend.svc.common#InvalidTrackingOptionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrackingOptionsAlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#TrackingOptionsAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateCustomVerificationEmailTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = deserializeAws_queryCreateCustomVerificationEmailTemplateCommand;
async function deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContentException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailInvalidContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomVerificationEmailTemplateAlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailTemplateAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#FromEmailAddressNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateReceiptFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReceiptFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateReceiptFilterCommand = deserializeAws_queryCreateReceiptFilterCommand;
async function deserializeAws_queryCreateReceiptFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateReceiptRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReceiptRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateReceiptRuleCommand = deserializeAws_queryCreateReceiptRuleCommand;
async function deserializeAws_queryCreateReceiptRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaFunctionException":
        case "com.amazon.bacon.frontend.svc.common#InvalidLambdaFunctionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ConfigurationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidS3ConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSnsTopicException":
        case "com.amazon.bacon.frontend.svc.common#InvalidSnsTopicException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateReceiptRuleSetCommand = deserializeAws_queryCreateReceiptRuleSetCommand;
async function deserializeAws_queryCreateReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTemplateResponse(data.CreateTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateTemplateCommand = deserializeAws_queryCreateTemplateCommand;
async function deserializeAws_queryCreateTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.bacon.frontend.svc.common#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTemplateException":
        case "com.amazon.bacon.frontend.svc.common#InvalidTemplateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteConfigurationSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConfigurationSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteConfigurationSetCommand = deserializeAws_queryDeleteConfigurationSetCommand;
async function deserializeAws_queryDeleteConfigurationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteConfigurationSetEventDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetEventDestinationResponse(data.DeleteConfigurationSetEventDestinationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConfigurationSetEventDestinationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = deserializeAws_queryDeleteConfigurationSetEventDestinationCommand;
async function deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EventDestinationDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#EventDestinationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse(data.DeleteConfigurationSetTrackingOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConfigurationSetTrackingOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand;
async function deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrackingOptionsDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TrackingOptionsDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand;
async function deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIdentityResponse(data.DeleteIdentityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteIdentityCommand = deserializeAws_queryDeleteIdentityCommand;
async function deserializeAws_queryDeleteIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteIdentityPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIdentityPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteIdentityPolicyCommand = deserializeAws_queryDeleteIdentityPolicyCommand;
async function deserializeAws_queryDeleteIdentityPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteReceiptFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReceiptFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteReceiptFilterCommand = deserializeAws_queryDeleteReceiptFilterCommand;
async function deserializeAws_queryDeleteReceiptFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteReceiptRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReceiptRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteReceiptRuleCommand = deserializeAws_queryDeleteReceiptRuleCommand;
async function deserializeAws_queryDeleteReceiptRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteReceiptRuleSetCommand = deserializeAws_queryDeleteReceiptRuleSetCommand;
async function deserializeAws_queryDeleteReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CannotDeleteException":
        case "com.amazon.bacon.frontend.svc.common#CannotDeleteException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCannotDeleteExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteTemplateResponse(data.DeleteTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteTemplateCommand = deserializeAws_queryDeleteTemplateCommand;
async function deserializeAws_queryDeleteTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteVerifiedEmailAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteVerifiedEmailAddressCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteVerifiedEmailAddressCommand = deserializeAws_queryDeleteVerifiedEmailAddressCommand;
async function deserializeAws_queryDeleteVerifiedEmailAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeActiveReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeActiveReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeActiveReceiptRuleSetCommand = deserializeAws_queryDescribeActiveReceiptRuleSetCommand;
async function deserializeAws_queryDescribeActiveReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeConfigurationSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeConfigurationSetCommand = deserializeAws_queryDescribeConfigurationSetCommand;
async function deserializeAws_queryDescribeConfigurationSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeReceiptRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReceiptRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReceiptRuleCommand = deserializeAws_queryDescribeReceiptRuleCommand;
async function deserializeAws_queryDescribeReceiptRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeReceiptRuleSetCommand = deserializeAws_queryDescribeReceiptRuleSetCommand;
async function deserializeAws_queryDescribeReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetAccountSendingEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccountSendingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountSendingEnabledResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccountSendingEnabledCommand = deserializeAws_queryGetAccountSendingEnabledCommand;
async function deserializeAws_queryGetAccountSendingEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetCustomVerificationEmailTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetCustomVerificationEmailTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCustomVerificationEmailTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetCustomVerificationEmailTemplateCommand = deserializeAws_queryGetCustomVerificationEmailTemplateCommand;
async function deserializeAws_queryGetCustomVerificationEmailTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetIdentityDkimAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetIdentityDkimAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityDkimAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetIdentityDkimAttributesCommand = deserializeAws_queryGetIdentityDkimAttributesCommand;
async function deserializeAws_queryGetIdentityDkimAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetIdentityMailFromDomainAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityMailFromDomainAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = deserializeAws_queryGetIdentityMailFromDomainAttributesCommand;
async function deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetIdentityNotificationAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetIdentityNotificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityNotificationAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetIdentityNotificationAttributesCommand = deserializeAws_queryGetIdentityNotificationAttributesCommand;
async function deserializeAws_queryGetIdentityNotificationAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetIdentityPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetIdentityPoliciesCommand = deserializeAws_queryGetIdentityPoliciesCommand;
async function deserializeAws_queryGetIdentityPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetIdentityVerificationAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetIdentityVerificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityVerificationAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetIdentityVerificationAttributesCommand = deserializeAws_queryGetIdentityVerificationAttributesCommand;
async function deserializeAws_queryGetIdentityVerificationAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetSendQuotaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSendQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSendQuotaResponse(data.GetSendQuotaResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSendQuotaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSendQuotaCommand = deserializeAws_queryGetSendQuotaCommand;
async function deserializeAws_queryGetSendQuotaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetSendStatisticsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSendStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSendStatisticsResponse(data.GetSendStatisticsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSendStatisticsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSendStatisticsCommand = deserializeAws_queryGetSendStatisticsCommand;
async function deserializeAws_queryGetSendStatisticsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTemplateResponse(data.GetTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetTemplateCommand = deserializeAws_queryGetTemplateCommand;
async function deserializeAws_queryGetTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListConfigurationSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListConfigurationSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConfigurationSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListConfigurationSetsCommand = deserializeAws_queryListConfigurationSetsCommand;
async function deserializeAws_queryListConfigurationSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListCustomVerificationEmailTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListCustomVerificationEmailTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCustomVerificationEmailTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListCustomVerificationEmailTemplatesCommand = deserializeAws_queryListCustomVerificationEmailTemplatesCommand;
async function deserializeAws_queryListCustomVerificationEmailTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListIdentitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListIdentitiesResponse(data.ListIdentitiesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIdentitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListIdentitiesCommand = deserializeAws_queryListIdentitiesCommand;
async function deserializeAws_queryListIdentitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListIdentityPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIdentityPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListIdentityPoliciesCommand = deserializeAws_queryListIdentityPoliciesCommand;
async function deserializeAws_queryListIdentityPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListReceiptFiltersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListReceiptFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReceiptFiltersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListReceiptFiltersCommand = deserializeAws_queryListReceiptFiltersCommand;
async function deserializeAws_queryListReceiptFiltersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListReceiptRuleSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListReceiptRuleSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReceiptRuleSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListReceiptRuleSetsCommand = deserializeAws_queryListReceiptRuleSetsCommand;
async function deserializeAws_queryListReceiptRuleSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTemplatesResponse(data.ListTemplatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTemplatesCommand = deserializeAws_queryListTemplatesCommand;
async function deserializeAws_queryListTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListVerifiedEmailAddressesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListVerifiedEmailAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVerifiedEmailAddressesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListVerifiedEmailAddressesCommand = deserializeAws_queryListVerifiedEmailAddressesCommand;
async function deserializeAws_queryListVerifiedEmailAddressesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutConfigurationSetDeliveryOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand;
async function deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeliveryOptionsException":
        case "com.amazon.bacon.frontend.svc.common#InvalidDeliveryOptionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidDeliveryOptionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutIdentityPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutIdentityPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutIdentityPolicyCommand = deserializeAws_queryPutIdentityPolicyCommand;
async function deserializeAws_queryPutIdentityPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPolicyException":
        case "com.amazon.bacon.frontend.svc.common#InvalidPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryReorderReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryReorderReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReorderReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryReorderReceiptRuleSetCommand = deserializeAws_queryReorderReceiptRuleSetCommand;
async function deserializeAws_queryReorderReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendBounceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendBounceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendBounceResponse(data.SendBounceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendBounceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendBounceCommand = deserializeAws_querySendBounceCommand;
async function deserializeAws_querySendBounceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendBulkTemplatedEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendBulkTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendBulkTemplatedEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendBulkTemplatedEmailCommand = deserializeAws_querySendBulkTemplatedEmailCommand;
async function deserializeAws_querySendBulkTemplatedEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#AccountSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#MailFromDomainNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendCustomVerificationEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendCustomVerificationEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendCustomVerificationEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendCustomVerificationEmailCommand = deserializeAws_querySendCustomVerificationEmailCommand;
async function deserializeAws_querySendCustomVerificationEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#FromEmailAddressNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProductionAccessNotGrantedException":
        case "com.amazon.bacon.frontend.svc.common#ProductionAccessNotGrantedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryProductionAccessNotGrantedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendEmailResponse(data.SendEmailResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendEmailCommand = deserializeAws_querySendEmailCommand;
async function deserializeAws_querySendEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#AccountSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#MailFromDomainNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendRawEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendRawEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendRawEmailResponse(data.SendRawEmailResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendRawEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendRawEmailCommand = deserializeAws_querySendRawEmailCommand;
async function deserializeAws_querySendRawEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#AccountSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#MailFromDomainNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySendTemplatedEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySendTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendTemplatedEmailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySendTemplatedEmailCommand = deserializeAws_querySendTemplatedEmailCommand;
async function deserializeAws_querySendTemplatedEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#AccountSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetSendingPausedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#MailFromDomainNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MessageRejected":
        case "com.amazon.bacon.frontend.svc.common#MessageRejected":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMessageRejectedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetActiveReceiptRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetActiveReceiptRuleSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetActiveReceiptRuleSetCommand = deserializeAws_querySetActiveReceiptRuleSetCommand;
async function deserializeAws_querySetActiveReceiptRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIdentityDkimEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIdentityDkimEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIdentityDkimEnabledResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIdentityDkimEnabledCommand = deserializeAws_querySetIdentityDkimEnabledCommand;
async function deserializeAws_querySetIdentityDkimEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIdentityFeedbackForwardingEnabledResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand;
async function deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse(data.SetIdentityHeadersInNotificationsEnabledResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIdentityHeadersInNotificationsEnabledResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand;
async function deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIdentityMailFromDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIdentityMailFromDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIdentityMailFromDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIdentityMailFromDomainCommand = deserializeAws_querySetIdentityMailFromDomainCommand;
async function deserializeAws_querySetIdentityMailFromDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetIdentityNotificationTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetIdentityNotificationTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetIdentityNotificationTopicResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetIdentityNotificationTopicCommand = deserializeAws_querySetIdentityNotificationTopicCommand;
async function deserializeAws_querySetIdentityNotificationTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetReceiptRulePositionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetReceiptRulePositionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetReceiptRulePositionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetReceiptRulePositionCommand = deserializeAws_querySetReceiptRulePositionCommand;
async function deserializeAws_querySetReceiptRulePositionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryTestRenderTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTestRenderTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTestRenderTemplateResponse(data.TestRenderTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestRenderTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTestRenderTemplateCommand = deserializeAws_queryTestRenderTemplateCommand;
async function deserializeAws_queryTestRenderTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRenderingParameterException":
        case "com.amazon.bacon.frontend.svc.common#InvalidRenderingParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidRenderingParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRenderingAttributeException":
        case "com.amazon.bacon.frontend.svc.common#MissingRenderingAttributeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMissingRenderingAttributeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateAccountSendingEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAccountSendingEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAccountSendingEnabledCommand = deserializeAws_queryUpdateAccountSendingEnabledCommand;
async function deserializeAws_queryUpdateAccountSendingEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateConfigurationSetEventDestinationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateConfigurationSetEventDestinationResponse(data.UpdateConfigurationSetEventDestinationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConfigurationSetEventDestinationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = deserializeAws_queryUpdateConfigurationSetEventDestinationCommand;
async function deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EventDestinationDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#EventDestinationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidCloudWatchDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFirehoseDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidFirehoseDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSNSDestinationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidSNSDestinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand;
async function deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand;
async function deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse(data.UpdateConfigurationSetTrackingOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConfigurationSetTrackingOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand;
async function deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#ConfigurationSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrackingOptionsException":
        case "com.amazon.bacon.frontend.svc.common#InvalidTrackingOptionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrackingOptionsDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TrackingOptionsDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand;
async function deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContentException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailInvalidContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#CustomVerificationEmailTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazon.bacon.frontend.svc.common#FromEmailAddressNotVerifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateReceiptRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateReceiptRuleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateReceiptRuleCommand = deserializeAws_queryUpdateReceiptRuleCommand;
async function deserializeAws_queryUpdateReceiptRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLambdaFunctionException":
        case "com.amazon.bacon.frontend.svc.common#InvalidLambdaFunctionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ConfigurationException":
        case "com.amazon.bacon.frontend.svc.common#InvalidS3ConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSnsTopicException":
        case "com.amazon.bacon.frontend.svc.common#InvalidSnsTopicException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.bacon.frontend.svc.common#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#RuleSetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateTemplateResponse(data.UpdateTemplateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateTemplateCommand = deserializeAws_queryUpdateTemplateCommand;
async function deserializeAws_queryUpdateTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTemplateException":
        case "com.amazon.bacon.frontend.svc.common#InvalidTemplateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemplateDoesNotExistException":
        case "com.amazon.bacon.frontend.svc.common#TemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryVerifyDomainDkimCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryVerifyDomainDkimCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyDomainDkimResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryVerifyDomainDkimCommand = deserializeAws_queryVerifyDomainDkimCommand;
async function deserializeAws_queryVerifyDomainDkimCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryVerifyDomainIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryVerifyDomainIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyDomainIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryVerifyDomainIdentityCommand = deserializeAws_queryVerifyDomainIdentityCommand;
async function deserializeAws_queryVerifyDomainIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryVerifyEmailAddressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryVerifyEmailAddressCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryVerifyEmailAddressCommand = deserializeAws_queryVerifyEmailAddressCommand;
async function deserializeAws_queryVerifyEmailAddressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryVerifyEmailIdentityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryVerifyEmailIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyEmailIdentityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryVerifyEmailIdentityCommand = deserializeAws_queryVerifyEmailIdentityCommand;
async function deserializeAws_queryVerifyEmailIdentityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryAccountSendingPausedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccountSendingPausedException(body.Error, context);
    const contents = Object.assign({ name: "AccountSendingPausedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCannotDeleteExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCannotDeleteException(body.Error, context);
    const contents = Object.assign({ name: "CannotDeleteException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "ConfigurationSetAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "ConfigurationSetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryConfigurationSetSendingPausedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetSendingPausedException(body.Error, context);
    const contents = Object.assign({ name: "ConfigurationSetSendingPausedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailInvalidContentException(body.Error, context);
    const contents = Object.assign({ name: "CustomVerificationEmailInvalidContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "CustomVerificationEmailTemplateAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "CustomVerificationEmailTemplateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventDestinationAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "EventDestinationAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEventDestinationDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventDestinationDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "EventDestinationDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryFromEmailAddressNotVerifiedException(body.Error, context);
    const contents = Object.assign({ name: "FromEmailAddressNotVerifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCloudWatchDestinationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidCloudWatchDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidConfigurationSetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidConfigurationSetException(body.Error, context);
    const contents = Object.assign({ name: "InvalidConfigurationSetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidDeliveryOptionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDeliveryOptionsException(body.Error, context);
    const contents = Object.assign({ name: "InvalidDeliveryOptionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidFirehoseDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidFirehoseDestinationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidFirehoseDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidLambdaFunctionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidLambdaFunctionException(body.Error, context);
    const contents = Object.assign({ name: "InvalidLambdaFunctionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidPolicyException(body.Error, context);
    const contents = Object.assign({ name: "InvalidPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidRenderingParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRenderingParameterException(body.Error, context);
    const contents = Object.assign({ name: "InvalidRenderingParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidS3ConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3ConfigurationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidS3ConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSNSDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSNSDestinationException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSNSDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSnsTopicExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnsTopicException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSnsTopicException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTemplateException(body.Error, context);
    const contents = Object.assign({ name: "InvalidTemplateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTrackingOptionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTrackingOptionsException(body.Error, context);
    const contents = Object.assign({ name: "InvalidTrackingOptionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMailFromDomainNotVerifiedException(body.Error, context);
    const contents = Object.assign({ name: "MailFromDomainNotVerifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMessageRejectedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMessageRejected(body.Error, context);
    const contents = Object.assign({ name: "MessageRejected", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMissingRenderingAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMissingRenderingAttributeException(body.Error, context);
    const contents = Object.assign({ name: "MissingRenderingAttributeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryProductionAccessNotGrantedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryProductionAccessNotGrantedException(body.Error, context);
    const contents = Object.assign({ name: "ProductionAccessNotGrantedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryRuleDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "RuleDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryRuleSetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleSetDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "RuleSetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTemplateDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "TemplateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTrackingOptionsAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "TrackingOptionsAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTrackingOptionsDoesNotExistException(body.Error, context);
    const contents = Object.assign({ name: "TrackingOptionsDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryMessageTag = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryAddHeaderAction = (input, context) => {
    const entries = {};
    if (input.HeaderName !== undefined) {
        entries["HeaderName"] = input.HeaderName;
    }
    if (input.HeaderValue !== undefined) {
        entries["HeaderValue"] = input.HeaderValue;
    }
    return entries;
};
const serializeAws_queryAddressList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBody = (input, context) => {
    const entries = {};
    if (input.Html !== undefined) {
        const memberEntries = serializeAws_queryContent(input.Html, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Html.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Text !== undefined) {
        const memberEntries = serializeAws_queryContent(input.Text, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Text.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryBounceAction = (input, context) => {
    const entries = {};
    if (input.Message !== undefined) {
        entries["Message"] = input.Message;
    }
    if (input.Sender !== undefined) {
        entries["Sender"] = input.Sender;
    }
    if (input.SmtpReplyCode !== undefined) {
        entries["SmtpReplyCode"] = input.SmtpReplyCode;
    }
    if (input.StatusCode !== undefined) {
        entries["StatusCode"] = input.StatusCode;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryBouncedRecipientInfo = (input, context) => {
    const entries = {};
    if (input.BounceType !== undefined) {
        entries["BounceType"] = input.BounceType;
    }
    if (input.Recipient !== undefined) {
        entries["Recipient"] = input.Recipient;
    }
    if (input.RecipientArn !== undefined) {
        entries["RecipientArn"] = input.RecipientArn;
    }
    if (input.RecipientDsnFields !== undefined) {
        const memberEntries = serializeAws_queryRecipientDsnFields(input.RecipientDsnFields, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RecipientDsnFields.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryBouncedRecipientInfoList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryBouncedRecipientInfo(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryBulkEmailDestination = (input, context) => {
    const entries = {};
    if (input.Destination !== undefined) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Destination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplacementTags !== undefined) {
        const memberEntries = serializeAws_queryMessageTagList(input.ReplacementTags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplacementTags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplacementTemplateData !== undefined) {
        entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
    }
    return entries;
};
const serializeAws_queryBulkEmailDestinationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryBulkEmailDestination(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCloneReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.OriginalRuleSetName !== undefined) {
        entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryCloudWatchDestination = (input, context) => {
    const entries = {};
    if (input.DimensionConfigurations !== undefined) {
        const memberEntries = serializeAws_queryCloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DimensionConfigurations.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCloudWatchDimensionConfiguration = (input, context) => {
    const entries = {};
    if (input.DefaultDimensionValue !== undefined) {
        entries["DefaultDimensionValue"] = input.DefaultDimensionValue;
    }
    if (input.DimensionName !== undefined) {
        entries["DimensionName"] = input.DimensionName;
    }
    if (input.DimensionValueSource !== undefined) {
        entries["DimensionValueSource"] = input.DimensionValueSource;
    }
    return entries;
};
const serializeAws_queryCloudWatchDimensionConfigurations = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryCloudWatchDimensionConfiguration(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryConfigurationSet = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const serializeAws_queryConfigurationSetAttributeList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryContent = (input, context) => {
    const entries = {};
    if (input.Charset !== undefined) {
        entries["Charset"] = input.Charset;
    }
    if (input.Data !== undefined) {
        entries["Data"] = input.Data;
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined) {
        const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EventDestination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSet !== undefined) {
        const memberEntries = serializeAws_queryConfigurationSet(input.ConfigurationSet, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ConfigurationSet.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined) {
        const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.FailureRedirectionURL !== undefined) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    if (input.FromEmailAddress !== undefined) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.SuccessRedirectionURL !== undefined) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.TemplateContent !== undefined) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TemplateSubject !== undefined) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    return entries;
};
const serializeAws_queryCreateReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.Filter !== undefined) {
        const memberEntries = serializeAws_queryReceiptFilter(input.Filter, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filter.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.After !== undefined) {
        entries["After"] = input.After;
    }
    if (input.Rule !== undefined) {
        const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Rule.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryCreateReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryCreateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template !== undefined) {
        const memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Template.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestinationName !== undefined) {
        entries["EventDestinationName"] = input.EventDestinationName;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_queryDeleteCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.FilterName !== undefined) {
        entries["FilterName"] = input.FilterName;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleName !== undefined) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDeleteTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteVerifiedEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryDeliveryOptions = (input, context) => {
    const entries = {};
    if (input.TlsPolicy !== undefined) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    return entries;
};
const serializeAws_queryDescribeActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryDescribeConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetAttributeNames !== undefined) {
        const memberEntries = serializeAws_queryConfigurationSetAttributeList(input.ConfigurationSetAttributeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ConfigurationSetAttributeNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_queryDescribeReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleName !== undefined) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDescribeReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDestination = (input, context) => {
    const entries = {};
    if (input.BccAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.BccAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BccAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CcAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.CcAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CcAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ToAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.ToAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ToAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEventDestination = (input, context) => {
    const entries = {};
    if (input.CloudWatchDestination !== undefined) {
        const memberEntries = serializeAws_queryCloudWatchDestination(input.CloudWatchDestination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `CloudWatchDestination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.KinesisFirehoseDestination !== undefined) {
        const memberEntries = serializeAws_queryKinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `KinesisFirehoseDestination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MatchingEventTypes !== undefined) {
        const memberEntries = serializeAws_queryEventTypes(input.MatchingEventTypes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MatchingEventTypes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.SNSDestination !== undefined) {
        const memberEntries = serializeAws_querySNSDestination(input.SNSDestination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SNSDestination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryEventTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryExtensionField = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryExtensionFieldList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryExtensionField(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryGetCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryGetIdentityDkimAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Identities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityMailFromDomainAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Identities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityNotificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Identities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyNames !== undefined) {
        const memberEntries = serializeAws_queryPolicyNameList(input.PolicyNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityVerificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Identities.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryIdentityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryKinesisFirehoseDestination = (input, context) => {
    const entries = {};
    if (input.DeliveryStreamARN !== undefined) {
        entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
    }
    if (input.IAMRoleARN !== undefined) {
        entries["IAMRoleARN"] = input.IAMRoleARN;
    }
    return entries;
};
const serializeAws_queryLambdaAction = (input, context) => {
    const entries = {};
    if (input.FunctionArn !== undefined) {
        entries["FunctionArn"] = input.FunctionArn;
    }
    if (input.InvocationType !== undefined) {
        entries["InvocationType"] = input.InvocationType;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryListConfigurationSetsRequest = (input, context) => {
    const entries = {};
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListCustomVerificationEmailTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.MaxResults !== undefined) {
        entries["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListIdentitiesRequest = (input, context) => {
    const entries = {};
    if (input.IdentityType !== undefined) {
        entries["IdentityType"] = input.IdentityType;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_queryListReceiptFiltersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListReceiptRuleSetsRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryMessage = (input, context) => {
    const entries = {};
    if (input.Body !== undefined) {
        const memberEntries = serializeAws_queryBody(input.Body, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Body.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Subject !== undefined) {
        const memberEntries = serializeAws_queryContent(input.Subject, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Subject.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryMessageDsn = (input, context) => {
    const entries = {};
    if (input.ArrivalDate !== undefined) {
        entries["ArrivalDate"] =
            input.ArrivalDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields !== undefined) {
        const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReportingMta !== undefined) {
        entries["ReportingMta"] = input.ReportingMta;
    }
    return entries;
};
const serializeAws_queryMessageTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryMessageTag(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPutConfigurationSetDeliveryOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DeliveryOptions !== undefined) {
        const memberEntries = serializeAws_queryDeliveryOptions(input.DeliveryOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DeliveryOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryPutIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryRawMessage = (input, context) => {
    const entries = {};
    if (input.Data !== undefined) {
        entries["Data"] = context.base64Encoder(input.Data);
    }
    return entries;
};
const serializeAws_queryReceiptAction = (input, context) => {
    const entries = {};
    if (input.AddHeaderAction !== undefined) {
        const memberEntries = serializeAws_queryAddHeaderAction(input.AddHeaderAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AddHeaderAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.BounceAction !== undefined) {
        const memberEntries = serializeAws_queryBounceAction(input.BounceAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BounceAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LambdaAction !== undefined) {
        const memberEntries = serializeAws_queryLambdaAction(input.LambdaAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LambdaAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.S3Action !== undefined) {
        const memberEntries = serializeAws_queryS3Action(input.S3Action, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `S3Action.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SNSAction !== undefined) {
        const memberEntries = serializeAws_querySNSAction(input.SNSAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SNSAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.StopAction !== undefined) {
        const memberEntries = serializeAws_queryStopAction(input.StopAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `StopAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.WorkmailAction !== undefined) {
        const memberEntries = serializeAws_queryWorkmailAction(input.WorkmailAction, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `WorkmailAction.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryReceiptActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryReceiptAction(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryReceiptFilter = (input, context) => {
    const entries = {};
    if (input.IpFilter !== undefined) {
        const memberEntries = serializeAws_queryReceiptIpFilter(input.IpFilter, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IpFilter.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const serializeAws_queryReceiptIpFilter = (input, context) => {
    const entries = {};
    if (input.Cidr !== undefined) {
        entries["Cidr"] = input.Cidr;
    }
    if (input.Policy !== undefined) {
        entries["Policy"] = input.Policy;
    }
    return entries;
};
const serializeAws_queryReceiptRule = (input, context) => {
    const entries = {};
    if (input.Actions !== undefined) {
        const memberEntries = serializeAws_queryReceiptActionsList(input.Actions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Actions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Recipients !== undefined) {
        const memberEntries = serializeAws_queryRecipientsList(input.Recipients, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Recipients.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ScanEnabled !== undefined) {
        entries["ScanEnabled"] = input.ScanEnabled;
    }
    if (input.TlsPolicy !== undefined) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    return entries;
};
const serializeAws_queryReceiptRuleNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRecipientDsnFields = (input, context) => {
    const entries = {};
    if (input.Action !== undefined) {
        entries["Action"] = input.Action;
    }
    if (input.DiagnosticCode !== undefined) {
        entries["DiagnosticCode"] = input.DiagnosticCode;
    }
    if (input.ExtensionFields !== undefined) {
        const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.FinalRecipient !== undefined) {
        entries["FinalRecipient"] = input.FinalRecipient;
    }
    if (input.LastAttemptDate !== undefined) {
        entries["LastAttemptDate"] =
            input.LastAttemptDate.toISOString().split(".")[0] + "Z";
    }
    if (input.RemoteMta !== undefined) {
        entries["RemoteMta"] = input.RemoteMta;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    return entries;
};
const serializeAws_queryRecipientsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryReorderReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleNames !== undefined) {
        const memberEntries = serializeAws_queryReceiptRuleNamesList(input.RuleNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RuleNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryS3Action = (input, context) => {
    const entries = {};
    if (input.BucketName !== undefined) {
        entries["BucketName"] = input.BucketName;
    }
    if (input.KmsKeyArn !== undefined) {
        entries["KmsKeyArn"] = input.KmsKeyArn;
    }
    if (input.ObjectKeyPrefix !== undefined) {
        entries["ObjectKeyPrefix"] = input.ObjectKeyPrefix;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_querySNSAction = (input, context) => {
    const entries = {};
    if (input.Encoding !== undefined) {
        entries["Encoding"] = input.Encoding;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_querySNSDestination = (input, context) => {
    const entries = {};
    if (input.TopicARN !== undefined) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
const serializeAws_querySendBounceRequest = (input, context) => {
    const entries = {};
    if (input.BounceSender !== undefined) {
        entries["BounceSender"] = input.BounceSender;
    }
    if (input.BounceSenderArn !== undefined) {
        entries["BounceSenderArn"] = input.BounceSenderArn;
    }
    if (input.BouncedRecipientInfoList !== undefined) {
        const memberEntries = serializeAws_queryBouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `BouncedRecipientInfoList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Explanation !== undefined) {
        entries["Explanation"] = input.Explanation;
    }
    if (input.MessageDsn !== undefined) {
        const memberEntries = serializeAws_queryMessageDsn(input.MessageDsn, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageDsn.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.OriginalMessageId !== undefined) {
        entries["OriginalMessageId"] = input.OriginalMessageId;
    }
    return entries;
};
const serializeAws_querySendBulkTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DefaultTags !== undefined) {
        const memberEntries = serializeAws_queryMessageTagList(input.DefaultTags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DefaultTags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DefaultTemplateData !== undefined) {
        entries["DefaultTemplateData"] = input.DefaultTemplateData;
    }
    if (input.Destinations !== undefined) {
        const memberEntries = serializeAws_queryBulkEmailDestinationList(input.Destinations, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Destinations.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplyToAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReturnPath !== undefined) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.ReturnPathArn !== undefined) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.Template !== undefined) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn !== undefined) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    return entries;
};
const serializeAws_querySendCustomVerificationEmailRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EmailAddress !== undefined) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_querySendEmailRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Destination !== undefined) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Destination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Message !== undefined) {
        const memberEntries = serializeAws_queryMessage(input.Message, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Message.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplyToAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReturnPath !== undefined) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.ReturnPathArn !== undefined) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySendRawEmailRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Destinations !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.Destinations, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Destinations.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.FromArn !== undefined) {
        entries["FromArn"] = input.FromArn;
    }
    if (input.RawMessage !== undefined) {
        const memberEntries = serializeAws_queryRawMessage(input.RawMessage, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `RawMessage.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReturnPathArn !== undefined) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySendTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Destination !== undefined) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Destination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReplyToAddresses !== undefined) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ReturnPath !== undefined) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.ReturnPathArn !== undefined) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Source !== undefined) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Template !== undefined) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn !== undefined) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    if (input.TemplateData !== undefined) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
const serializeAws_querySetActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_querySetIdentityDkimEnabledRequest = (input, context) => {
    const entries = {};
    if (input.DkimEnabled !== undefined) {
        entries["DkimEnabled"] = input.DkimEnabled;
    }
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_querySetIdentityFeedbackForwardingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ForwardingEnabled !== undefined) {
        entries["ForwardingEnabled"] = input.ForwardingEnabled;
    }
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType !== undefined) {
        entries["NotificationType"] = input.NotificationType;
    }
    return entries;
};
const serializeAws_querySetIdentityMailFromDomainRequest = (input, context) => {
    const entries = {};
    if (input.BehaviorOnMXFailure !== undefined) {
        entries["BehaviorOnMXFailure"] = input.BehaviorOnMXFailure;
    }
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.MailFromDomain !== undefined) {
        entries["MailFromDomain"] = input.MailFromDomain;
    }
    return entries;
};
const serializeAws_querySetIdentityNotificationTopicRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType !== undefined) {
        entries["NotificationType"] = input.NotificationType;
    }
    if (input.SnsTopic !== undefined) {
        entries["SnsTopic"] = input.SnsTopic;
    }
    return entries;
};
const serializeAws_querySetReceiptRulePositionRequest = (input, context) => {
    const entries = {};
    if (input.After !== undefined) {
        entries["After"] = input.After;
    }
    if (input.RuleName !== undefined) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryStopAction = (input, context) => {
    const entries = {};
    if (input.Scope !== undefined) {
        entries["Scope"] = input.Scope;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryTemplate = (input, context) => {
    const entries = {};
    if (input.HtmlPart !== undefined) {
        entries["HtmlPart"] = input.HtmlPart;
    }
    if (input.SubjectPart !== undefined) {
        entries["SubjectPart"] = input.SubjectPart;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TextPart !== undefined) {
        entries["TextPart"] = input.TextPart;
    }
    return entries;
};
const serializeAws_queryTestRenderTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateData !== undefined) {
        entries["TemplateData"] = input.TemplateData;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryTrackingOptions = (input, context) => {
    const entries = {};
    if (input.CustomRedirectDomain !== undefined) {
        entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
    }
    return entries;
};
const serializeAws_queryUpdateAccountSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined) {
        const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `EventDestination.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined) {
        const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUpdateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.FailureRedirectionURL !== undefined) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    if (input.FromEmailAddress !== undefined) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.SuccessRedirectionURL !== undefined) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.TemplateContent !== undefined) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.TemplateName !== undefined) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TemplateSubject !== undefined) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    return entries;
};
const serializeAws_queryUpdateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.Rule !== undefined) {
        const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Rule.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.RuleSetName !== undefined) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryUpdateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template !== undefined) {
        const memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Template.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryVerifyDomainDkimRequest = (input, context) => {
    const entries = {};
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const serializeAws_queryVerifyDomainIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Domain !== undefined) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const serializeAws_queryVerifyEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryVerifyEmailIdentityRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryWorkmailAction = (input, context) => {
    const entries = {};
    if (input.OrganizationArn !== undefined) {
        entries["OrganizationArn"] = input.OrganizationArn;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const deserializeAws_queryAccountSendingPausedException = (output, context) => {
    let contents = {
        __type: "AccountSendingPausedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAddHeaderAction = (output, context) => {
    let contents = {
        __type: "AddHeaderAction",
        HeaderName: undefined,
        HeaderValue: undefined
    };
    if (output["HeaderName"] !== undefined) {
        contents.HeaderName = output["HeaderName"];
    }
    if (output["HeaderValue"] !== undefined) {
        contents.HeaderValue = output["HeaderValue"];
    }
    return contents;
};
const deserializeAws_queryAddressList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Name: undefined,
        message: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBounceAction = (output, context) => {
    let contents = {
        __type: "BounceAction",
        Message: undefined,
        Sender: undefined,
        SmtpReplyCode: undefined,
        StatusCode: undefined,
        TopicArn: undefined
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Sender"] !== undefined) {
        contents.Sender = output["Sender"];
    }
    if (output["SmtpReplyCode"] !== undefined) {
        contents.SmtpReplyCode = output["SmtpReplyCode"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryBulkEmailDestinationStatus = (output, context) => {
    let contents = {
        __type: "BulkEmailDestinationStatus",
        Error: undefined,
        MessageId: undefined,
        Status: undefined
    };
    if (output["Error"] !== undefined) {
        contents.Error = output["Error"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryBulkEmailDestinationStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryBulkEmailDestinationStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryCannotDeleteException = (output, context) => {
    let contents = {
        __type: "CannotDeleteException",
        Name: undefined,
        message: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCloneReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "CloneReceiptRuleSetResponse"
    };
    return contents;
};
const deserializeAws_queryCloudWatchDestination = (output, context) => {
    let contents = {
        __type: "CloudWatchDestination",
        DimensionConfigurations: undefined
    };
    if (output.DimensionConfigurations === "") {
        contents.DimensionConfigurations = [];
    }
    if (output["DimensionConfigurations"] !== undefined &&
        output["DimensionConfigurations"]["member"] !== undefined) {
        const wrappedItem = output["DimensionConfigurations"]["member"] instanceof Array
            ? output["DimensionConfigurations"]["member"]
            : [output["DimensionConfigurations"]["member"]];
        contents.DimensionConfigurations = deserializeAws_queryCloudWatchDimensionConfigurations(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryCloudWatchDimensionConfiguration = (output, context) => {
    let contents = {
        __type: "CloudWatchDimensionConfiguration",
        DefaultDimensionValue: undefined,
        DimensionName: undefined,
        DimensionValueSource: undefined
    };
    if (output["DefaultDimensionValue"] !== undefined) {
        contents.DefaultDimensionValue = output["DefaultDimensionValue"];
    }
    if (output["DimensionName"] !== undefined) {
        contents.DimensionName = output["DimensionName"];
    }
    if (output["DimensionValueSource"] !== undefined) {
        contents.DimensionValueSource = output["DimensionValueSource"];
    }
    return contents;
};
const deserializeAws_queryCloudWatchDimensionConfigurations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCloudWatchDimensionConfiguration(entry, context));
    });
    return contents;
};
const deserializeAws_queryConfigurationSet = (output, context) => {
    let contents = {
        __type: "ConfigurationSet",
        Name: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSetAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ConfigurationSetAlreadyExistsException",
        ConfigurationSetName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSetDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ConfigurationSetDoesNotExistException",
        ConfigurationSetName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSetSendingPausedException = (output, context) => {
    let contents = {
        __type: "ConfigurationSetSendingPausedException",
        ConfigurationSetName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSets = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryConfigurationSet(entry, context));
    });
    return contents;
};
const deserializeAws_queryCreateConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {
        __type: "CreateConfigurationSetEventDestinationResponse"
    };
    return contents;
};
const deserializeAws_queryCreateConfigurationSetResponse = (output, context) => {
    let contents = {
        __type: "CreateConfigurationSetResponse"
    };
    return contents;
};
const deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {
        __type: "CreateConfigurationSetTrackingOptionsResponse"
    };
    return contents;
};
const deserializeAws_queryCreateReceiptFilterResponse = (output, context) => {
    let contents = {
        __type: "CreateReceiptFilterResponse"
    };
    return contents;
};
const deserializeAws_queryCreateReceiptRuleResponse = (output, context) => {
    let contents = {
        __type: "CreateReceiptRuleResponse"
    };
    return contents;
};
const deserializeAws_queryCreateReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "CreateReceiptRuleSetResponse"
    };
    return contents;
};
const deserializeAws_queryCreateTemplateResponse = (output, context) => {
    let contents = {
        __type: "CreateTemplateResponse"
    };
    return contents;
};
const deserializeAws_queryCustomVerificationEmailInvalidContentException = (output, context) => {
    let contents = {
        __type: "CustomVerificationEmailInvalidContentException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplate = (output, context) => {
    let contents = {
        __type: "CustomVerificationEmailTemplate",
        FailureRedirectionURL: undefined,
        FromEmailAddress: undefined,
        SuccessRedirectionURL: undefined,
        TemplateName: undefined,
        TemplateSubject: undefined
    };
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = output["FailureRedirectionURL"];
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = output["SuccessRedirectionURL"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = output["TemplateSubject"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "CustomVerificationEmailTemplateAlreadyExistsException",
        CustomVerificationEmailTemplateName: undefined,
        message: undefined
    };
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName =
            output["CustomVerificationEmailTemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException = (output, context) => {
    let contents = {
        __type: "CustomVerificationEmailTemplateDoesNotExistException",
        CustomVerificationEmailTemplateName: undefined,
        message: undefined
    };
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName =
            output["CustomVerificationEmailTemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplates = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryCustomVerificationEmailTemplate(entry, context));
    });
    return contents;
};
const deserializeAws_queryDeleteConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {
        __type: "DeleteConfigurationSetEventDestinationResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteConfigurationSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteConfigurationSetResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {
        __type: "DeleteConfigurationSetTrackingOptionsResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteIdentityPolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteIdentityPolicyResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteIdentityResponse = (output, context) => {
    let contents = {
        __type: "DeleteIdentityResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteReceiptFilterResponse = (output, context) => {
    let contents = {
        __type: "DeleteReceiptFilterResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteReceiptRuleResponse = (output, context) => {
    let contents = {
        __type: "DeleteReceiptRuleResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteReceiptRuleSetResponse"
    };
    return contents;
};
const deserializeAws_queryDeleteTemplateResponse = (output, context) => {
    let contents = {
        __type: "DeleteTemplateResponse"
    };
    return contents;
};
const deserializeAws_queryDeliveryOptions = (output, context) => {
    let contents = {
        __type: "DeliveryOptions",
        TlsPolicy: undefined
    };
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = output["TlsPolicy"];
    }
    return contents;
};
const deserializeAws_queryDescribeActiveReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "DescribeActiveReceiptRuleSetResponse",
        Metadata: undefined,
        Rules: undefined
    };
    if (output["Metadata"] !== undefined) {
        contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryReceiptRulesList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeConfigurationSetResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationSetResponse",
        ConfigurationSet: undefined,
        DeliveryOptions: undefined,
        EventDestinations: undefined,
        ReputationOptions: undefined,
        TrackingOptions: undefined
    };
    if (output["ConfigurationSet"] !== undefined) {
        contents.ConfigurationSet = deserializeAws_queryConfigurationSet(output["ConfigurationSet"], context);
    }
    if (output["DeliveryOptions"] !== undefined) {
        contents.DeliveryOptions = deserializeAws_queryDeliveryOptions(output["DeliveryOptions"], context);
    }
    if (output.EventDestinations === "") {
        contents.EventDestinations = [];
    }
    if (output["EventDestinations"] !== undefined &&
        output["EventDestinations"]["member"] !== undefined) {
        const wrappedItem = output["EventDestinations"]["member"] instanceof Array
            ? output["EventDestinations"]["member"]
            : [output["EventDestinations"]["member"]];
        contents.EventDestinations = deserializeAws_queryEventDestinations(wrappedItem, context);
    }
    if (output["ReputationOptions"] !== undefined) {
        contents.ReputationOptions = deserializeAws_queryReputationOptions(output["ReputationOptions"], context);
    }
    if (output["TrackingOptions"] !== undefined) {
        contents.TrackingOptions = deserializeAws_queryTrackingOptions(output["TrackingOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeReceiptRuleResponse = (output, context) => {
    let contents = {
        __type: "DescribeReceiptRuleResponse",
        Rule: undefined
    };
    if (output["Rule"] !== undefined) {
        contents.Rule = deserializeAws_queryReceiptRule(output["Rule"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "DescribeReceiptRuleSetResponse",
        Metadata: undefined,
        Rules: undefined
    };
    if (output["Metadata"] !== undefined) {
        contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined &&
        output["Rules"]["member"] !== undefined) {
        const wrappedItem = output["Rules"]["member"] instanceof Array
            ? output["Rules"]["member"]
            : [output["Rules"]["member"]];
        contents.Rules = deserializeAws_queryReceiptRulesList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDkimAttributes = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = deserializeAws_queryIdentityDkimAttributes(pair["value"], context);
    });
    return mapParams;
};
const deserializeAws_queryEventDestination = (output, context) => {
    let contents = {
        __type: "EventDestination",
        CloudWatchDestination: undefined,
        Enabled: undefined,
        KinesisFirehoseDestination: undefined,
        MatchingEventTypes: undefined,
        Name: undefined,
        SNSDestination: undefined
    };
    if (output["CloudWatchDestination"] !== undefined) {
        contents.CloudWatchDestination = deserializeAws_queryCloudWatchDestination(output["CloudWatchDestination"], context);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["KinesisFirehoseDestination"] !== undefined) {
        contents.KinesisFirehoseDestination = deserializeAws_queryKinesisFirehoseDestination(output["KinesisFirehoseDestination"], context);
    }
    if (output.MatchingEventTypes === "") {
        contents.MatchingEventTypes = [];
    }
    if (output["MatchingEventTypes"] !== undefined &&
        output["MatchingEventTypes"]["member"] !== undefined) {
        const wrappedItem = output["MatchingEventTypes"]["member"] instanceof Array
            ? output["MatchingEventTypes"]["member"]
            : [output["MatchingEventTypes"]["member"]];
        contents.MatchingEventTypes = deserializeAws_queryEventTypes(wrappedItem, context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["SNSDestination"] !== undefined) {
        contents.SNSDestination = deserializeAws_querySNSDestination(output["SNSDestination"], context);
    }
    return contents;
};
const deserializeAws_queryEventDestinationAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "EventDestinationAlreadyExistsException",
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventDestinationDoesNotExistException = (output, context) => {
    let contents = {
        __type: "EventDestinationDoesNotExistException",
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventDestinations = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEventDestination(entry, context));
    });
    return contents;
};
const deserializeAws_queryEventTypes = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryFromEmailAddressNotVerifiedException = (output, context) => {
    let contents = {
        __type: "FromEmailAddressNotVerifiedException",
        FromEmailAddress: undefined,
        message: undefined
    };
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGetAccountSendingEnabledResponse = (output, context) => {
    let contents = {
        __type: "GetAccountSendingEnabledResponse",
        Enabled: undefined
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryGetCustomVerificationEmailTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetCustomVerificationEmailTemplateResponse",
        FailureRedirectionURL: undefined,
        FromEmailAddress: undefined,
        SuccessRedirectionURL: undefined,
        TemplateContent: undefined,
        TemplateName: undefined,
        TemplateSubject: undefined
    };
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = output["FailureRedirectionURL"];
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = output["SuccessRedirectionURL"];
    }
    if (output["TemplateContent"] !== undefined) {
        contents.TemplateContent = output["TemplateContent"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = output["TemplateSubject"];
    }
    return contents;
};
const deserializeAws_queryGetIdentityDkimAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityDkimAttributesResponse",
        DkimAttributes: undefined
    };
    if (output.DkimAttributes === "") {
        contents.DkimAttributes = {};
    }
    if (output["DkimAttributes"] !== undefined &&
        output["DkimAttributes"]["entry"] !== undefined) {
        const wrappedItem = output["DkimAttributes"]["entry"] instanceof Array
            ? output["DkimAttributes"]["entry"]
            : [output["DkimAttributes"]["entry"]];
        contents.DkimAttributes = deserializeAws_queryDkimAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityMailFromDomainAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityMailFromDomainAttributesResponse",
        MailFromDomainAttributes: undefined
    };
    if (output.MailFromDomainAttributes === "") {
        contents.MailFromDomainAttributes = {};
    }
    if (output["MailFromDomainAttributes"] !== undefined &&
        output["MailFromDomainAttributes"]["entry"] !== undefined) {
        const wrappedItem = output["MailFromDomainAttributes"]["entry"] instanceof Array
            ? output["MailFromDomainAttributes"]["entry"]
            : [output["MailFromDomainAttributes"]["entry"]];
        contents.MailFromDomainAttributes = deserializeAws_queryMailFromDomainAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityNotificationAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityNotificationAttributesResponse",
        NotificationAttributes: undefined
    };
    if (output.NotificationAttributes === "") {
        contents.NotificationAttributes = {};
    }
    if (output["NotificationAttributes"] !== undefined &&
        output["NotificationAttributes"]["entry"] !== undefined) {
        const wrappedItem = output["NotificationAttributes"]["entry"] instanceof Array
            ? output["NotificationAttributes"]["entry"]
            : [output["NotificationAttributes"]["entry"]];
        contents.NotificationAttributes = deserializeAws_queryNotificationAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityPoliciesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityPoliciesResponse",
        Policies: undefined
    };
    if (output.Policies === "") {
        contents.Policies = {};
    }
    if (output["Policies"] !== undefined &&
        output["Policies"]["entry"] !== undefined) {
        const wrappedItem = output["Policies"]["entry"] instanceof Array
            ? output["Policies"]["entry"]
            : [output["Policies"]["entry"]];
        contents.Policies = deserializeAws_queryPolicyMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityVerificationAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityVerificationAttributesResponse",
        VerificationAttributes: undefined
    };
    if (output.VerificationAttributes === "") {
        contents.VerificationAttributes = {};
    }
    if (output["VerificationAttributes"] !== undefined &&
        output["VerificationAttributes"]["entry"] !== undefined) {
        const wrappedItem = output["VerificationAttributes"]["entry"] instanceof Array
            ? output["VerificationAttributes"]["entry"]
            : [output["VerificationAttributes"]["entry"]];
        contents.VerificationAttributes = deserializeAws_queryVerificationAttributes(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetSendQuotaResponse = (output, context) => {
    let contents = {
        __type: "GetSendQuotaResponse",
        Max24HourSend: undefined,
        MaxSendRate: undefined,
        SentLast24Hours: undefined
    };
    if (output["Max24HourSend"] !== undefined) {
        contents.Max24HourSend = parseFloat(output["Max24HourSend"]);
    }
    if (output["MaxSendRate"] !== undefined) {
        contents.MaxSendRate = parseFloat(output["MaxSendRate"]);
    }
    if (output["SentLast24Hours"] !== undefined) {
        contents.SentLast24Hours = parseFloat(output["SentLast24Hours"]);
    }
    return contents;
};
const deserializeAws_queryGetSendStatisticsResponse = (output, context) => {
    let contents = {
        __type: "GetSendStatisticsResponse",
        SendDataPoints: undefined
    };
    if (output.SendDataPoints === "") {
        contents.SendDataPoints = [];
    }
    if (output["SendDataPoints"] !== undefined &&
        output["SendDataPoints"]["member"] !== undefined) {
        const wrappedItem = output["SendDataPoints"]["member"] instanceof Array
            ? output["SendDataPoints"]["member"]
            : [output["SendDataPoints"]["member"]];
        contents.SendDataPoints = deserializeAws_querySendDataPointList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetTemplateResponse = (output, context) => {
    let contents = {
        __type: "GetTemplateResponse",
        Template: undefined
    };
    if (output["Template"] !== undefined) {
        contents.Template = deserializeAws_queryTemplate(output["Template"], context);
    }
    return contents;
};
const deserializeAws_queryIdentityDkimAttributes = (output, context) => {
    let contents = {
        __type: "IdentityDkimAttributes",
        DkimEnabled: undefined,
        DkimTokens: undefined,
        DkimVerificationStatus: undefined
    };
    if (output["DkimEnabled"] !== undefined) {
        contents.DkimEnabled = output["DkimEnabled"] == "true";
    }
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    if (output["DkimTokens"] !== undefined &&
        output["DkimTokens"]["member"] !== undefined) {
        const wrappedItem = output["DkimTokens"]["member"] instanceof Array
            ? output["DkimTokens"]["member"]
            : [output["DkimTokens"]["member"]];
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(wrappedItem, context);
    }
    if (output["DkimVerificationStatus"] !== undefined) {
        contents.DkimVerificationStatus = output["DkimVerificationStatus"];
    }
    return contents;
};
const deserializeAws_queryIdentityList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryIdentityMailFromDomainAttributes = (output, context) => {
    let contents = {
        __type: "IdentityMailFromDomainAttributes",
        BehaviorOnMXFailure: undefined,
        MailFromDomain: undefined,
        MailFromDomainStatus: undefined
    };
    if (output["BehaviorOnMXFailure"] !== undefined) {
        contents.BehaviorOnMXFailure = output["BehaviorOnMXFailure"];
    }
    if (output["MailFromDomain"] !== undefined) {
        contents.MailFromDomain = output["MailFromDomain"];
    }
    if (output["MailFromDomainStatus"] !== undefined) {
        contents.MailFromDomainStatus = output["MailFromDomainStatus"];
    }
    return contents;
};
const deserializeAws_queryIdentityNotificationAttributes = (output, context) => {
    let contents = {
        __type: "IdentityNotificationAttributes",
        BounceTopic: undefined,
        ComplaintTopic: undefined,
        DeliveryTopic: undefined,
        ForwardingEnabled: undefined,
        HeadersInBounceNotificationsEnabled: undefined,
        HeadersInComplaintNotificationsEnabled: undefined,
        HeadersInDeliveryNotificationsEnabled: undefined
    };
    if (output["BounceTopic"] !== undefined) {
        contents.BounceTopic = output["BounceTopic"];
    }
    if (output["ComplaintTopic"] !== undefined) {
        contents.ComplaintTopic = output["ComplaintTopic"];
    }
    if (output["DeliveryTopic"] !== undefined) {
        contents.DeliveryTopic = output["DeliveryTopic"];
    }
    if (output["ForwardingEnabled"] !== undefined) {
        contents.ForwardingEnabled = output["ForwardingEnabled"] == "true";
    }
    if (output["HeadersInBounceNotificationsEnabled"] !== undefined) {
        contents.HeadersInBounceNotificationsEnabled =
            output["HeadersInBounceNotificationsEnabled"] == "true";
    }
    if (output["HeadersInComplaintNotificationsEnabled"] !== undefined) {
        contents.HeadersInComplaintNotificationsEnabled =
            output["HeadersInComplaintNotificationsEnabled"] == "true";
    }
    if (output["HeadersInDeliveryNotificationsEnabled"] !== undefined) {
        contents.HeadersInDeliveryNotificationsEnabled =
            output["HeadersInDeliveryNotificationsEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryIdentityVerificationAttributes = (output, context) => {
    let contents = {
        __type: "IdentityVerificationAttributes",
        VerificationStatus: undefined,
        VerificationToken: undefined
    };
    if (output["VerificationStatus"] !== undefined) {
        contents.VerificationStatus = output["VerificationStatus"];
    }
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = output["VerificationToken"];
    }
    return contents;
};
const deserializeAws_queryInvalidCloudWatchDestinationException = (output, context) => {
    let contents = {
        __type: "InvalidCloudWatchDestinationException",
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidConfigurationSetException = (output, context) => {
    let contents = {
        __type: "InvalidConfigurationSetException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDeliveryOptionsException = (output, context) => {
    let contents = {
        __type: "InvalidDeliveryOptionsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidFirehoseDestinationException = (output, context) => {
    let contents = {
        __type: "InvalidFirehoseDestinationException",
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidLambdaFunctionException = (output, context) => {
    let contents = {
        __type: "InvalidLambdaFunctionException",
        FunctionArn: undefined,
        message: undefined
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidPolicyException = (output, context) => {
    let contents = {
        __type: "InvalidPolicyException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRenderingParameterException = (output, context) => {
    let contents = {
        __type: "InvalidRenderingParameterException",
        TemplateName: undefined,
        message: undefined
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3ConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidS3ConfigurationException",
        Bucket: undefined,
        message: undefined
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSNSDestinationException = (output, context) => {
    let contents = {
        __type: "InvalidSNSDestinationException",
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnsTopicException = (output, context) => {
    let contents = {
        __type: "InvalidSnsTopicException",
        Topic: undefined,
        message: undefined
    };
    if (output["Topic"] !== undefined) {
        contents.Topic = output["Topic"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTemplateException = (output, context) => {
    let contents = {
        __type: "InvalidTemplateException",
        TemplateName: undefined,
        message: undefined
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTrackingOptionsException = (output, context) => {
    let contents = {
        __type: "InvalidTrackingOptionsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKinesisFirehoseDestination = (output, context) => {
    let contents = {
        __type: "KinesisFirehoseDestination",
        DeliveryStreamARN: undefined,
        IAMRoleARN: undefined
    };
    if (output["DeliveryStreamARN"] !== undefined) {
        contents.DeliveryStreamARN = output["DeliveryStreamARN"];
    }
    if (output["IAMRoleARN"] !== undefined) {
        contents.IAMRoleARN = output["IAMRoleARN"];
    }
    return contents;
};
const deserializeAws_queryLambdaAction = (output, context) => {
    let contents = {
        __type: "LambdaAction",
        FunctionArn: undefined,
        InvocationType: undefined,
        TopicArn: undefined
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    if (output["InvocationType"] !== undefined) {
        contents.InvocationType = output["InvocationType"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListConfigurationSetsResponse = (output, context) => {
    let contents = {
        __type: "ListConfigurationSetsResponse",
        ConfigurationSets: undefined,
        NextToken: undefined
    };
    if (output.ConfigurationSets === "") {
        contents.ConfigurationSets = [];
    }
    if (output["ConfigurationSets"] !== undefined &&
        output["ConfigurationSets"]["member"] !== undefined) {
        const wrappedItem = output["ConfigurationSets"]["member"] instanceof Array
            ? output["ConfigurationSets"]["member"]
            : [output["ConfigurationSets"]["member"]];
        contents.ConfigurationSets = deserializeAws_queryConfigurationSets(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListCustomVerificationEmailTemplatesResponse = (output, context) => {
    let contents = {
        __type: "ListCustomVerificationEmailTemplatesResponse",
        CustomVerificationEmailTemplates: undefined,
        NextToken: undefined
    };
    if (output.CustomVerificationEmailTemplates === "") {
        contents.CustomVerificationEmailTemplates = [];
    }
    if (output["CustomVerificationEmailTemplates"] !== undefined &&
        output["CustomVerificationEmailTemplates"]["member"] !== undefined) {
        const wrappedItem = output["CustomVerificationEmailTemplates"]["member"] instanceof Array
            ? output["CustomVerificationEmailTemplates"]["member"]
            : [output["CustomVerificationEmailTemplates"]["member"]];
        contents.CustomVerificationEmailTemplates = deserializeAws_queryCustomVerificationEmailTemplates(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListIdentitiesResponse = (output, context) => {
    let contents = {
        __type: "ListIdentitiesResponse",
        Identities: undefined,
        NextToken: undefined
    };
    if (output.Identities === "") {
        contents.Identities = [];
    }
    if (output["Identities"] !== undefined &&
        output["Identities"]["member"] !== undefined) {
        const wrappedItem = output["Identities"]["member"] instanceof Array
            ? output["Identities"]["member"]
            : [output["Identities"]["member"]];
        contents.Identities = deserializeAws_queryIdentityList(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListIdentityPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListIdentityPoliciesResponse",
        PolicyNames: undefined
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_queryPolicyNameList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListReceiptFiltersResponse = (output, context) => {
    let contents = {
        __type: "ListReceiptFiltersResponse",
        Filters: undefined
    };
    if (output.Filters === "") {
        contents.Filters = [];
    }
    if (output["Filters"] !== undefined &&
        output["Filters"]["member"] !== undefined) {
        const wrappedItem = output["Filters"]["member"] instanceof Array
            ? output["Filters"]["member"]
            : [output["Filters"]["member"]];
        contents.Filters = deserializeAws_queryReceiptFilterList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListReceiptRuleSetsResponse = (output, context) => {
    let contents = {
        __type: "ListReceiptRuleSetsResponse",
        NextToken: undefined,
        RuleSets: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.RuleSets === "") {
        contents.RuleSets = [];
    }
    if (output["RuleSets"] !== undefined &&
        output["RuleSets"]["member"] !== undefined) {
        const wrappedItem = output["RuleSets"]["member"] instanceof Array
            ? output["RuleSets"]["member"]
            : [output["RuleSets"]["member"]];
        contents.RuleSets = deserializeAws_queryReceiptRuleSetsLists(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTemplatesResponse = (output, context) => {
    let contents = {
        __type: "ListTemplatesResponse",
        NextToken: undefined,
        TemplatesMetadata: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.TemplatesMetadata === "") {
        contents.TemplatesMetadata = [];
    }
    if (output["TemplatesMetadata"] !== undefined &&
        output["TemplatesMetadata"]["member"] !== undefined) {
        const wrappedItem = output["TemplatesMetadata"]["member"] instanceof Array
            ? output["TemplatesMetadata"]["member"]
            : [output["TemplatesMetadata"]["member"]];
        contents.TemplatesMetadata = deserializeAws_queryTemplateMetadataList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListVerifiedEmailAddressesResponse = (output, context) => {
    let contents = {
        __type: "ListVerifiedEmailAddressesResponse",
        VerifiedEmailAddresses: undefined
    };
    if (output.VerifiedEmailAddresses === "") {
        contents.VerifiedEmailAddresses = [];
    }
    if (output["VerifiedEmailAddresses"] !== undefined &&
        output["VerifiedEmailAddresses"]["member"] !== undefined) {
        const wrappedItem = output["VerifiedEmailAddresses"]["member"] instanceof Array
            ? output["VerifiedEmailAddresses"]["member"]
            : [output["VerifiedEmailAddresses"]["member"]];
        contents.VerifiedEmailAddresses = deserializeAws_queryAddressList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryMailFromDomainAttributes = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = deserializeAws_queryIdentityMailFromDomainAttributes(pair["value"], context);
    });
    return mapParams;
};
const deserializeAws_queryMailFromDomainNotVerifiedException = (output, context) => {
    let contents = {
        __type: "MailFromDomainNotVerifiedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMessageRejected = (output, context) => {
    let contents = {
        __type: "MessageRejected",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMissingRenderingAttributeException = (output, context) => {
    let contents = {
        __type: "MissingRenderingAttributeException",
        TemplateName: undefined,
        message: undefined
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNotificationAttributes = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = deserializeAws_queryIdentityNotificationAttributes(pair["value"], context);
    });
    return mapParams;
};
const deserializeAws_queryPolicyMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryPolicyNameList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryProductionAccessNotGrantedException = (output, context) => {
    let contents = {
        __type: "ProductionAccessNotGrantedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse = (output, context) => {
    let contents = {
        __type: "PutConfigurationSetDeliveryOptionsResponse"
    };
    return contents;
};
const deserializeAws_queryPutIdentityPolicyResponse = (output, context) => {
    let contents = {
        __type: "PutIdentityPolicyResponse"
    };
    return contents;
};
const deserializeAws_queryReceiptAction = (output, context) => {
    let contents = {
        __type: "ReceiptAction",
        AddHeaderAction: undefined,
        BounceAction: undefined,
        LambdaAction: undefined,
        S3Action: undefined,
        SNSAction: undefined,
        StopAction: undefined,
        WorkmailAction: undefined
    };
    if (output["AddHeaderAction"] !== undefined) {
        contents.AddHeaderAction = deserializeAws_queryAddHeaderAction(output["AddHeaderAction"], context);
    }
    if (output["BounceAction"] !== undefined) {
        contents.BounceAction = deserializeAws_queryBounceAction(output["BounceAction"], context);
    }
    if (output["LambdaAction"] !== undefined) {
        contents.LambdaAction = deserializeAws_queryLambdaAction(output["LambdaAction"], context);
    }
    if (output["S3Action"] !== undefined) {
        contents.S3Action = deserializeAws_queryS3Action(output["S3Action"], context);
    }
    if (output["SNSAction"] !== undefined) {
        contents.SNSAction = deserializeAws_querySNSAction(output["SNSAction"], context);
    }
    if (output["StopAction"] !== undefined) {
        contents.StopAction = deserializeAws_queryStopAction(output["StopAction"], context);
    }
    if (output["WorkmailAction"] !== undefined) {
        contents.WorkmailAction = deserializeAws_queryWorkmailAction(output["WorkmailAction"], context);
    }
    return contents;
};
const deserializeAws_queryReceiptActionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReceiptAction(entry, context));
    });
    return contents;
};
const deserializeAws_queryReceiptFilter = (output, context) => {
    let contents = {
        __type: "ReceiptFilter",
        IpFilter: undefined,
        Name: undefined
    };
    if (output["IpFilter"] !== undefined) {
        contents.IpFilter = deserializeAws_queryReceiptIpFilter(output["IpFilter"], context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryReceiptFilterList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReceiptFilter(entry, context));
    });
    return contents;
};
const deserializeAws_queryReceiptIpFilter = (output, context) => {
    let contents = {
        __type: "ReceiptIpFilter",
        Cidr: undefined,
        Policy: undefined
    };
    if (output["Cidr"] !== undefined) {
        contents.Cidr = output["Cidr"];
    }
    if (output["Policy"] !== undefined) {
        contents.Policy = output["Policy"];
    }
    return contents;
};
const deserializeAws_queryReceiptRule = (output, context) => {
    let contents = {
        __type: "ReceiptRule",
        Actions: undefined,
        Enabled: undefined,
        Name: undefined,
        Recipients: undefined,
        ScanEnabled: undefined,
        TlsPolicy: undefined
    };
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined &&
        output["Actions"]["member"] !== undefined) {
        const wrappedItem = output["Actions"]["member"] instanceof Array
            ? output["Actions"]["member"]
            : [output["Actions"]["member"]];
        contents.Actions = deserializeAws_queryReceiptActionsList(wrappedItem, context);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output.Recipients === "") {
        contents.Recipients = [];
    }
    if (output["Recipients"] !== undefined &&
        output["Recipients"]["member"] !== undefined) {
        const wrappedItem = output["Recipients"]["member"] instanceof Array
            ? output["Recipients"]["member"]
            : [output["Recipients"]["member"]];
        contents.Recipients = deserializeAws_queryRecipientsList(wrappedItem, context);
    }
    if (output["ScanEnabled"] !== undefined) {
        contents.ScanEnabled = output["ScanEnabled"] == "true";
    }
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = output["TlsPolicy"];
    }
    return contents;
};
const deserializeAws_queryReceiptRuleSetMetadata = (output, context) => {
    let contents = {
        __type: "ReceiptRuleSetMetadata",
        CreatedTimestamp: undefined,
        Name: undefined
    };
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = new Date(output["CreatedTimestamp"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryReceiptRuleSetsLists = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReceiptRuleSetMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_queryReceiptRulesList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryReceiptRule(entry, context));
    });
    return contents;
};
const deserializeAws_queryRecipientsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryReorderReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "ReorderReceiptRuleSetResponse"
    };
    return contents;
};
const deserializeAws_queryReputationOptions = (output, context) => {
    let contents = {
        __type: "ReputationOptions",
        LastFreshStart: undefined,
        ReputationMetricsEnabled: undefined,
        SendingEnabled: undefined
    };
    if (output["LastFreshStart"] !== undefined) {
        contents.LastFreshStart = new Date(output["LastFreshStart"]);
    }
    if (output["ReputationMetricsEnabled"] !== undefined) {
        contents.ReputationMetricsEnabled =
            output["ReputationMetricsEnabled"] == "true";
    }
    if (output["SendingEnabled"] !== undefined) {
        contents.SendingEnabled = output["SendingEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryRuleDoesNotExistException = (output, context) => {
    let contents = {
        __type: "RuleDoesNotExistException",
        Name: undefined,
        message: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRuleSetDoesNotExistException = (output, context) => {
    let contents = {
        __type: "RuleSetDoesNotExistException",
        Name: undefined,
        message: undefined
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryS3Action = (output, context) => {
    let contents = {
        __type: "S3Action",
        BucketName: undefined,
        KmsKeyArn: undefined,
        ObjectKeyPrefix: undefined,
        TopicArn: undefined
    };
    if (output["BucketName"] !== undefined) {
        contents.BucketName = output["BucketName"];
    }
    if (output["KmsKeyArn"] !== undefined) {
        contents.KmsKeyArn = output["KmsKeyArn"];
    }
    if (output["ObjectKeyPrefix"] !== undefined) {
        contents.ObjectKeyPrefix = output["ObjectKeyPrefix"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_querySNSAction = (output, context) => {
    let contents = {
        __type: "SNSAction",
        Encoding: undefined,
        TopicArn: undefined
    };
    if (output["Encoding"] !== undefined) {
        contents.Encoding = output["Encoding"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_querySNSDestination = (output, context) => {
    let contents = {
        __type: "SNSDestination",
        TopicARN: undefined
    };
    if (output["TopicARN"] !== undefined) {
        contents.TopicARN = output["TopicARN"];
    }
    return contents;
};
const deserializeAws_querySendBounceResponse = (output, context) => {
    let contents = {
        __type: "SendBounceResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendBulkTemplatedEmailResponse = (output, context) => {
    let contents = {
        __type: "SendBulkTemplatedEmailResponse",
        Status: undefined
    };
    if (output.Status === "") {
        contents.Status = [];
    }
    if (output["Status"] !== undefined &&
        output["Status"]["member"] !== undefined) {
        const wrappedItem = output["Status"]["member"] instanceof Array
            ? output["Status"]["member"]
            : [output["Status"]["member"]];
        contents.Status = deserializeAws_queryBulkEmailDestinationStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySendCustomVerificationEmailResponse = (output, context) => {
    let contents = {
        __type: "SendCustomVerificationEmailResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendDataPoint = (output, context) => {
    let contents = {
        __type: "SendDataPoint",
        Bounces: undefined,
        Complaints: undefined,
        DeliveryAttempts: undefined,
        Rejects: undefined,
        Timestamp: undefined
    };
    if (output["Bounces"] !== undefined) {
        contents.Bounces = parseInt(output["Bounces"]);
    }
    if (output["Complaints"] !== undefined) {
        contents.Complaints = parseInt(output["Complaints"]);
    }
    if (output["DeliveryAttempts"] !== undefined) {
        contents.DeliveryAttempts = parseInt(output["DeliveryAttempts"]);
    }
    if (output["Rejects"] !== undefined) {
        contents.Rejects = parseInt(output["Rejects"]);
    }
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    return contents;
};
const deserializeAws_querySendDataPointList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySendDataPoint(entry, context));
    });
    return contents;
};
const deserializeAws_querySendEmailResponse = (output, context) => {
    let contents = {
        __type: "SendEmailResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendRawEmailResponse = (output, context) => {
    let contents = {
        __type: "SendRawEmailResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendTemplatedEmailResponse = (output, context) => {
    let contents = {
        __type: "SendTemplatedEmailResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySetActiveReceiptRuleSetResponse = (output, context) => {
    let contents = {
        __type: "SetActiveReceiptRuleSetResponse"
    };
    return contents;
};
const deserializeAws_querySetIdentityDkimEnabledResponse = (output, context) => {
    let contents = {
        __type: "SetIdentityDkimEnabledResponse"
    };
    return contents;
};
const deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse = (output, context) => {
    let contents = {
        __type: "SetIdentityFeedbackForwardingEnabledResponse"
    };
    return contents;
};
const deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse = (output, context) => {
    let contents = {
        __type: "SetIdentityHeadersInNotificationsEnabledResponse"
    };
    return contents;
};
const deserializeAws_querySetIdentityMailFromDomainResponse = (output, context) => {
    let contents = {
        __type: "SetIdentityMailFromDomainResponse"
    };
    return contents;
};
const deserializeAws_querySetIdentityNotificationTopicResponse = (output, context) => {
    let contents = {
        __type: "SetIdentityNotificationTopicResponse"
    };
    return contents;
};
const deserializeAws_querySetReceiptRulePositionResponse = (output, context) => {
    let contents = {
        __type: "SetReceiptRulePositionResponse"
    };
    return contents;
};
const deserializeAws_queryStopAction = (output, context) => {
    let contents = {
        __type: "StopAction",
        Scope: undefined,
        TopicArn: undefined
    };
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryTemplate = (output, context) => {
    let contents = {
        __type: "Template",
        HtmlPart: undefined,
        SubjectPart: undefined,
        TemplateName: undefined,
        TextPart: undefined
    };
    if (output["HtmlPart"] !== undefined) {
        contents.HtmlPart = output["HtmlPart"];
    }
    if (output["SubjectPart"] !== undefined) {
        contents.SubjectPart = output["SubjectPart"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["TextPart"] !== undefined) {
        contents.TextPart = output["TextPart"];
    }
    return contents;
};
const deserializeAws_queryTemplateDoesNotExistException = (output, context) => {
    let contents = {
        __type: "TemplateDoesNotExistException",
        TemplateName: undefined,
        message: undefined
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTemplateMetadata = (output, context) => {
    let contents = {
        __type: "TemplateMetadata",
        CreatedTimestamp: undefined,
        Name: undefined
    };
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = new Date(output["CreatedTimestamp"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryTemplateMetadataList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTemplateMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_queryTestRenderTemplateResponse = (output, context) => {
    let contents = {
        __type: "TestRenderTemplateResponse",
        RenderedTemplate: undefined
    };
    if (output["RenderedTemplate"] !== undefined) {
        contents.RenderedTemplate = output["RenderedTemplate"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptions = (output, context) => {
    let contents = {
        __type: "TrackingOptions",
        CustomRedirectDomain: undefined
    };
    if (output["CustomRedirectDomain"] !== undefined) {
        contents.CustomRedirectDomain = output["CustomRedirectDomain"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptionsAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "TrackingOptionsAlreadyExistsException",
        ConfigurationSetName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptionsDoesNotExistException = (output, context) => {
    let contents = {
        __type: "TrackingOptionsDoesNotExistException",
        ConfigurationSetName: undefined,
        message: undefined
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUpdateConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {
        __type: "UpdateConfigurationSetEventDestinationResponse"
    };
    return contents;
};
const deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {
        __type: "UpdateConfigurationSetTrackingOptionsResponse"
    };
    return contents;
};
const deserializeAws_queryUpdateReceiptRuleResponse = (output, context) => {
    let contents = {
        __type: "UpdateReceiptRuleResponse"
    };
    return contents;
};
const deserializeAws_queryUpdateTemplateResponse = (output, context) => {
    let contents = {
        __type: "UpdateTemplateResponse"
    };
    return contents;
};
const deserializeAws_queryVerificationAttributes = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = deserializeAws_queryIdentityVerificationAttributes(pair["value"], context);
    });
    return mapParams;
};
const deserializeAws_queryVerificationTokenList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryVerifyDomainDkimResponse = (output, context) => {
    let contents = {
        __type: "VerifyDomainDkimResponse",
        DkimTokens: undefined
    };
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    if (output["DkimTokens"] !== undefined &&
        output["DkimTokens"]["member"] !== undefined) {
        const wrappedItem = output["DkimTokens"]["member"] instanceof Array
            ? output["DkimTokens"]["member"]
            : [output["DkimTokens"]["member"]];
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryVerifyDomainIdentityResponse = (output, context) => {
    let contents = {
        __type: "VerifyDomainIdentityResponse",
        VerificationToken: undefined
    };
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = output["VerificationToken"];
    }
    return contents;
};
const deserializeAws_queryVerifyEmailIdentityResponse = (output, context) => {
    let contents = {
        __type: "VerifyEmailIdentityResponse"
    };
    return contents;
};
const deserializeAws_queryWorkmailAction = (output, context) => {
    let contents = {
        __type: "WorkmailAction",
        OrganizationArn: undefined,
        TopicArn: undefined
    };
    if (output["OrganizationArn"] !== undefined) {
        contents.OrganizationArn = output["OrganizationArn"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map