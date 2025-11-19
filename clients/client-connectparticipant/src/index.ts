// smithy-typescript generated code
/* eslint-disable */
/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html">Participant Service actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Participant_Service.html">Participant Service data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that
 *             enables companies of any size to deliver superior customer service at a lower cost.
 *                 Amazon Connect communications capabilities make it easy for companies to deliver
 *             personalized interactions across communication channels, including chat. </p>
 *          <p>Use the Amazon Connect Participant Service to manage participants (for example,
 *             agents, customers, and managers listening in), and to send messages and events within a
 *             chat contact. The APIs in the service enable the following: sending chat messages,
 *             attachment sharing, managing a participant's connection state and message events, and
 *             retrieving chat transcripts.</p>
 *
 * @packageDocumentation
 */
export * from "./ConnectParticipantClient";
export * from "./ConnectParticipant";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectParticipantExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { ConnectParticipantServiceException } from "./models/ConnectParticipantServiceException";
