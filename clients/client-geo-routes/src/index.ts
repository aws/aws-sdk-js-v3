// smithy-typescript generated code
/* eslint-disable */
/**
 * With the Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information. Key features include:
 *
 * - Point-to-point routing with estimated travel time, distance, and turn-by-turn directions. See [CalculateRoutes](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoutes.html).
 * - Multi-point route optimization to minimize travel time or distance. See [OptimizeWaypoints](https://docs.aws.amazon.com/location/latest/APIReference/API_OptimizeWaypoints.html).
 * - Route matrices for efficient multi-destination planning. See [CalculateRouteMatrix](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html).
 * - Isoline calculations to determine reachable areas within specified time or distance thresholds. See [CalculateIsolines](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateIsolines.html).
 * - Map-matching to align GPS traces with the road network. See [SnapToRoads](https://docs.aws.amazon.com/location/latest/APIReference/API_SnapToRoads.html).
 *
 * @packageDocumentation
 */
export * from "./GeoRoutesClient";
export * from "./GeoRoutes";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GeoRoutesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { GeoRoutesServiceException } from "./models/GeoRoutesServiceException";
