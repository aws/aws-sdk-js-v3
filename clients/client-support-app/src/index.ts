// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Support App in Slack</fullname>
 *          <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your
 *       Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can
 *       perform the following tasks directly in your Slack channel:</p>
 *          <ul>
 *             <li>
 *                <p>Create, search, update, and resolve your support cases</p>
 *             </li>
 *             <li>
 *                <p>Request service quota increases for your account</p>
 *             </li>
 *             <li>
 *                <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your
 *           support cases</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to perform these actions in Slack, see the following
 *       documentation in the <i>Amazon Web Services Support User Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack
 *       configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a
 *         Slack workspace to enable the Amazon Web Services Support App</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p>
 *                </li>
 *                <li>
 *                   <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General
 *               Reference</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *
 * @packageDocumentation
 */
export * from "./SupportAppClient";
export * from "./SupportApp";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { SupportAppServiceException } from "./models/SupportAppServiceException";
