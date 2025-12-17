// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat
 *       resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging
 *         API</a>, to enable users to interact with chat rooms in real time.</p>
 *          <p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat
 *       HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
 *         <i>AWS General Reference</i>. </p>
 *          <p>This document describes HTTP operations. There is a separate <i>messaging</i> API
 *       for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API
 *         Reference</a>.</p>
 *          <p>
 *             <b>Notes on terminology:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You create service applications using the Amazon IVS Chat API. We refer to these as
 *             <i>applications</i>.</p>
 *             </li>
 *             <li>
 *                <p>You create front-end client applications (browser and Android/iOS apps) using the
 *           Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources are part of Amazon IVS Chat:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>LoggingConfiguration</b> — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Room</b> — The central Amazon IVS Chat resource through
 *           which clients connect to and exchange chat messages. See the Room endpoints for more
 *           information.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific
 *       constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS Chat API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Room.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 *          <p>
 *             <b>API Access Security</b>
 *          </p>
 *          <p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated
 *       and authorized to access Amazon IVS Chat resources. Note the differences between these
 *       concepts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Authentication</i> is about verifying identity. Requests to the
 *           Amazon IVS Chat API must be signed to verify your identity.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need
 *           to have permissions for Amazon IVS Chat API requests.</p>
 *             </li>
 *          </ul>
 *          <p>Users (viewers) connect to a room using secure access tokens that you create using the
 *         <a>CreateChatToken</a> operation through the AWS SDK. You call CreateChatToken for
 *       every user’s chat session, passing identity and authorization information about the
 *       user.</p>
 *          <p>
 *             <b>Signing API Requests</b>
 *          </p>
 *          <p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security
 *       credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the
 *       underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API
 *       directly, it’s your responsibility to sign the requests.</p>
 *          <p>You generate a signature using valid AWS credentials for an IAM role that has permission
 *       to perform the requested action. For example, DeleteMessage requests must be made using an IAM
 *       role that has the <code>ivschat:DeleteMessage</code> permission.</p>
 *          <p>For more information:</p>
 *          <ul>
 *             <li>
 *                <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
 *               (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *             </li>
 *             <li>
 *                <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
 *           the Security page of the <i>Amazon IVS User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Resource Names (ARNs)</b>
 *          </p>
 *          <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a
 *       resource unambiguously across all of AWS, such as in IAM policies and API calls. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General
 *           Reference</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./IvschatClient";
export * from "./Ivschat";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IvschatExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { IvschatServiceException } from "./models/IvschatServiceException";
