// smithy-typescript generated code
/* eslint-disable */
/**
 * <note>
 *             <p>Amazon Connect now refers to a portfolio of agentic solutions for business functions. The
 *     legacy product is now called Amazon Connect Customer, or simply Customer. The legacy name
 *     is used interchangeably in this documentation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Service.html">Connect Customer Customer actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Service.html">Connect Customer Customer data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Connect Customer Customer engages customers at every touchpoint and creates deeper
 *    relationships with AI powered capabilities.</p>
 *          <p>Build and manage customer communication experiences. Connect customers to agents, enable
 *    intelligent routing, and track performance in real-time.</p>
 *          <p>There are limits to the number of Connect Customer resources that you can create. There are also limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Connect Customer Service Quotas</a> in the
 *      <i>Connect Customer Administrator Guide</i>.</p>
 *          <p>You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Connect Customer endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Connect Customer
 *     Endpoints</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./ConnectClient";
export * from "./Connect";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";
export * from "./models/models_3";
export * from "./models/models_4";

export { ConnectServiceException } from "./models/ConnectServiceException";
