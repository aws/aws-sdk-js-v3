// smithy-typescript generated code
/* eslint-disable */
/**
 * <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Scheduling.html">Scheduling actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Scheduling.html">Scheduling data types</a> </p> </li> </ul> <p>Use the Amazon Connect Scheduling API to work programmatically with Connect Customer forecasting, capacity planning, and scheduling, and to integrate these capabilities with your own systems. In the Connect Customer admin website, you use them to forecast contact volume, plan capacity, and create and manage agent schedules.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/forecasting-capacity-planning-scheduling.html">Forecasting &amp; agent scheduling</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./ConnectSchedulingClient";
export * from "./ConnectScheduling";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectSchedulingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ConnectSchedulingServiceException } from "./models/ConnectSchedulingServiceException";
