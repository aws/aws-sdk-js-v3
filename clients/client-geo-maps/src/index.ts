// smithy-typescript generated code
/* eslint-disable */
/**
 * Integrate high-quality base map data into your applications using [MapLibre](https://maplibre.org). Capabilities include:
 *
 * - Access to comprehensive base map data, allowing you to tailor the map display to your specific needs. See [GetTile](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetTile.html).
 * - Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization. See [GetStyleDescriptor](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStyleDescriptor.html).
 * - Generation of static map images for scenarios where interactive maps aren't suitable. See [GetStaticMap](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStaticMap.html). Use cases include:
 *
 *   - Embedding in emails or documents
 *   - Displaying in low-bandwidth environments
 *   - Creating printable maps
 *   - Enhancing application performance by reducing client-side rendering
 *
 * @packageDocumentation
 */
export * from "./GeoMapsClient";
export * from "./GeoMaps";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GeoMapsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { GeoMapsServiceException } from "./models/GeoMapsServiceException";
