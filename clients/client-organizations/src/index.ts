// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *          <p>This guide provides descriptions of the Organizations operations. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *          <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
 *             more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
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
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations API calls with CloudTrail</a> in the
 *             <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it
 *             on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./OrganizationsClient";
export * from "./Organizations";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OrganizationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { OrganizationsServiceException } from "./models/OrganizationsServiceException";
