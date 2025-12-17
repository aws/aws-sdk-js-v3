// smithy-typescript generated code
/* eslint-disable */
/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Service.html">Amazon Connect actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Service.html">Amazon Connect data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact
 *    center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can
 *    also resolve customer issues more efficiently by getting customers in touch with the appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There are also limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect
 *     Endpoints</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./ConnectClient";
export * from "./Connect";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";
export * from "./models/models_3";

export { ConnectServiceException } from "./models/ConnectServiceException";
