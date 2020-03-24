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
 * <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service that you can use to manage
 *       users and user permissions under your AWS account. This guide provides descriptions of IAM
 *       actions that you can call programmatically. For general information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a>. For the user
 *       guide for IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Using IAM</a>. </p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to IAM and AWS. For example, the SDKs take care
 *         of tasks such as cryptographically signing requests (see below), managing errors, and
 *         retrying requests automatically. For information about the AWS SDKs, including how to
 *         download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a> page. </p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to IAM. However,
 *       you can also use the IAM Query API to make direct calls to the IAM web service. To learn more
 *       about the IAM Query API, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *         <i>Using IAM</i> guide. IAM supports GET and POST requests for all actions.
 *       That is, the API does not require you to use GET for some actions and POST for others.
 *       However, GET requests are subject to the limitation size of a URL. Therefore, for operations
 *       that require larger sizes, use a POST request. </p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your AWS account access key ID and secret access key for
 *       everyday work with IAM. You can use the access key ID and secret access key for an IAM user or
 *       you can use the AWS Security Token Service to generate temporary security credentials and use
 *       those to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an
 *       existing application that uses Signature Version 2, you do not have to update it to use
 *       Signature Version 4. However, some operations now require Signature Version 4. The
 *       documentation for operations that require version 4 indicate this requirement. </p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS
 *             Security Credentials</a>. This topic provides general information about the types of
 *           credentials used for accessing AWS. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM Best
 *             Practices</a>. This topic presents a list of suggestions for using the IAM service
 *           to help secure your AWS resources. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *             AWS API Requests</a>. This set of topics walk you through the process of signing a
 *           request using an access key ID and secret access key. </p>
 *             </li>
 *          </ul>
 */
class IAMClient extends smithy_client_1.Client {
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
exports.IAMClient = IAMClient;
//# sourceMappingURL=IAMClient.js.map