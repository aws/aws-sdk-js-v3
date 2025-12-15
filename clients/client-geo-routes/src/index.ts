// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>With the Amazon Location Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information.</p> <p>Calculate optimal travel routes and estimate travel times using up-to-date road network and traffic data. Key features include:</p> <ul> <li> <p>Point-to-point routing with estimated travel time, distance, and turn-by-turn directions</p> </li> <li> <p>Multi-point route optimization to minimize travel time or distance</p> </li> <li> <p>Route matrices for efficient multi-destination planning</p> </li> <li> <p>Isoline calculations to determine reachable areas within specified time or distance thresholds</p> </li> <li> <p>Map-matching to align GPS traces with the road network</p> </li> </ul>
 *
 * @packageDocumentation
 */
export * from "./GeoRoutesClient";
export * from "./GeoRoutes";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GeoRoutesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { GeoRoutesServiceException } from "./models/GeoRoutesServiceException";
