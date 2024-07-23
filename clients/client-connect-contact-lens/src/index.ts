// smithy-typescript generated code
/* eslint-disable */
/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Contact_Lens.html">Contact Lens actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Contact_Lens.html">Contact Lens data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using
 *             speech transcription, natural language processing, and intelligent search capabilities.
 *             It performs sentiment analysis, detects issues, and enables you to automatically
 *             categorize contacts.</p>
 *          <p>Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent
 *             conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations
 *                 using speech analytics</a> in the <i>Amazon Connect Administrator
 *             Guide</i>. </p>
 *
 * @packageDocumentation
 */
export * from "./ConnectContactLensClient";
export * from "./ConnectContactLens";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectContactLensExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ConnectContactLensServiceException } from "./models/ConnectContactLensServiceException";
