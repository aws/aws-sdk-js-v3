"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <fullname>AWS Support</fullname>
 *         <p>The AWS Support API reference is intended for programmers who need detailed
 *             information about the AWS Support operations and data types. This service enables you to
 *             manage your AWS Support cases programmatically. It uses HTTP methods that return results
 *             in JSON format.</p>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Service names, issue categories, and available severity
 *                         levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case creation, case details, and case
 *                         resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve
 *                     information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add
 *                     communications and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service
 *             for Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun
 *                     a specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *                 AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
class SupportClient extends smithy_client_1.Client {
    constructor(configuration) {
        let _config_0 = Object.assign(Object.assign({}, runtimeConfig_1.ClientDefaultValues), configuration);
        let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
        let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
        let _config_3 = middleware_signing_1.resolveAwsAuthConfig(_config_2);
        let _config_4 = middleware_retry_1.resolveRetryConfig(_config_3);
        let _config_5 = middleware_user_agent_1.resolveUserAgentConfig(_config_4);
        let _config_6 = middleware_host_header_1.resolveHostHeaderConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
        this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
    }
    destroy() { }
}
exports.SupportClient = SupportClient;
//# sourceMappingURL=SupportClient.js.map