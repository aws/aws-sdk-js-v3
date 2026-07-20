// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *          <p>This guide provides descriptions of the Organizations API. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *          <p>
 *             <b>API version</b>
 *          </p>
 *          <p>This version of the Organizations API Reference documents the Organizations API version
 *             2016-11-28.</p>
 *          <note>
 *             <p>As an alternative to using the API directly, you can use one of the Amazon Web Services SDKs,
 *                 which consist of libraries and sample code for various programming languages and
 *                 platforms (Java, Ruby, .NET, iOS, Android, and more). The SDKs provide a convenient
 *                 way to create programmatic access to Organizations. For example, the SDKs take care of
 *                 cryptographically signing requests, managing errors, and retrying requests
 *                 automatically. For more information about the Amazon Web Services SDKs, including how to download
 *                 and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                     Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to Organizations.
 *             However, you also can use the Organizations Query API to make direct calls to the Organizations web
 *             service. To learn more about the Organizations Query API, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_query-requests.html">Calling the API by making HTTP Query
 *                 requests</a> in the <i>Organizations User Guide</i>. Organizations supports GET and
 *             POST requests for all actions. That is, the API doesn't require you to use GET for some
 *             actions and POST for others. However, GET requests are subject to the limitation size of
 *             a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *          <p>
 *             <b>Signing requests</b>
 *          </p>
 *          <p>When you send HTTP requests to Amazon Web Services, sign the requests so that Amazon Web Services can identify
 *             who sent them. You sign requests with your Amazon Web Services access key, which consists of an access
 *             key ID and a secret access key. We strongly recommend that you don't create an access
 *             key for your root account. Anyone who has the access key for your root account has
 *             unrestricted access to all the resources in your account. Instead, create an access key
 *             for an IAM user that has administrative permissions. As another option, use Amazon Web Services
 *             Security Token Service (Amazon Web Services STS) to generate temporary security credentials, and use
 *             those credentials to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you
 *             have an existing application that uses Signature Version 2, you don't have to update it
 *             to use Signature Version 4. However, some operations now require Signature Version 4.
 *             The documentation for operations that require version 4 indicate this
 *             requirement.</p>
 *          <p>When you use the Command Line Interface (CLI) or one of the Amazon Web Services SDKs to make requests to
 *             Amazon Web Services, these tools automatically sign the requests for you with the access key that you
 *             specify when you configure the tools.</p>
 *          <p>In this release, each organization can have only one root.</p>
 *          <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *          <p>We welcome your feedback. You can post your feedback and questions in the <a href="https://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support
 *                 forum</a>. For more information about the Amazon Web Services Support forums, see <a href="https://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *          <p>
 *             <b>Endpoint to call When using the CLI or the Amazon Web Services
 *                 SDK</b>
 *          </p>
 *          <p>For the current release of Organizations, specify the <code>us-east-1</code> region
 *             for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
 *             China. If calling from one of the Amazon Web Services Regions in China, then specify
 *                 <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
 *             and commands:</p>
 *          <ul>
 *             <li>
 *                <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the following parameter with each command to specify the endpoint:</p>
 *                <p>
 *                   <code>--region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *          <p>The JSON returned by the Organizations service as response to your requests arrives as a
 *             single long string without line breaks or formatting whitespace. The examples in this
 *             guide include both line breaks and whitespace to improve readability. When example input
 *             parameters also would result in long strings that would extend beyond the screen, we
 *             insert line breaks to enhance readability. Always submit the input as a single JSON text
 *             string.</p>
 *          <p>
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations API calls with CloudTrail</a> in the
 *             <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it
 *             on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./OrganizationsClient";
export * from "./Organizations";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OrganizationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { OrganizationsServiceException } from "./models/OrganizationsServiceException";
