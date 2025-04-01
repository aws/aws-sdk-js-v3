// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>
 *             <b>Key Concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Stage</b> — A virtual space where participants can exchange video in real time.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant token</b> — A token that authenticates a participant when they join a stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant object</b> — Represents participants (people) in the stage and
 *             contains information about them. When a token is created, it includes a participant ID;
 *             when a participant uses that token to join a stage, the participant is associated with
 *             that participant ID. There is a 1:1 mapping between participant tokens and
 *             participants.</p>
 *             </li>
 *          </ul>
 *          <p>For server-side composition:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Composition process</b> — Composites participants
 *             of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels).
 *             Composition operations support this process.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Composition</b> — Controls the look of the outputs,
 *             including how participants are positioned in the video.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about your IVS live stream, also see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started.html">Getting Started with Amazon IVS Real-Time Streaming</a>.</p>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
 *       in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
 *       limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS real-time API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 *
 * @packageDocumentation
 */
export * from "./IVSRealTimeClient";
export * from "./IVSRealTime";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IVSRealTimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { IVSRealTimeServiceException } from "./models/IVSRealTimeServiceException";
