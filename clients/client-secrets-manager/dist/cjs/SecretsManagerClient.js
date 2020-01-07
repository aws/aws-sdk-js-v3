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
 * <fullname>AWS Secrets Manager API Reference</fullname>
 *          <p>AWS Secrets Manager is a web service that enables you to store, manage, and retrieve,
 *       secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">AWS Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API directly, you can use one of the AWS SDKs, which
 *         consist of libraries and sample code for various programming languages and platforms (such
 *         as Java, Ruby, .NET, iOS, and Android). The SDKs provide a convenient way to create
 *         programmatic access to AWS Secrets Manager. For example, the SDKs take care of cryptographically
 *         signing requests, managing errors, and retrying requests automatically. For more information
 *         about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to Secrets Manager. However,
 *       you also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To
 *       learn more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *         <i>AWS Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager supports GET and POST requests for all actions. That is, the API doesn't require you
 *       to use GET for some actions and POST for others. However, GET requests are subject to the
 *       limitation size of a URL. Therefore, for operations that require larger sizes, use a POST
 *       request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for AWS Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">AWS Secrets Manager Discussion Forum</a>. For more
 *       information about the AWS Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that AWS Secrets Manager expects as your request parameters and that the service returns as
 *       a response to HTTP query requests are single, long strings without line breaks or white space
 *       formatting. The JSON shown in the examples is formatted with both line breaks and white space
 *       to improve readability. When example input parameters would also result in long strings that
 *       extend beyond the screen, we insert line breaks to enhance readability. You should always
 *       submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by AWS CloudTrail, you can determine which requests were successfully made to Secrets Manager, who
 *       made the request, when it was made, and so on. For more about AWS Secrets Manager and its support for
 *       AWS CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         AWS Secrets Manager Events with AWS CloudTrail</a> in the <i>AWS Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including how to turn it on and find your log files, see the
 *         <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>
 */
class SecretsManagerClient extends smithy_client_1.Client {
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
exports.SecretsManagerClient = SecretsManagerClient;
//# sourceMappingURL=SecretsManagerClient.js.map