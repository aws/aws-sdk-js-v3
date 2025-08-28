// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> Integrate high-quality base map data into your applications using <a href="https://maplibre.org">MapLibre</a>. Capabilities include: </p> <ul> <li> <p>Access to comprehensive base map data, allowing you to tailor the map display to your specific needs.</p> </li> <li> <p>Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization.</p> </li> <li> <p>Generation of static map images for scenarios where interactive maps aren't suitable, such as:</p> <ul> <li> <p>Embedding in emails or documents</p> </li> <li> <p>Displaying in low-bandwidth environments</p> </li> <li> <p>Creating printable maps</p> </li> <li> <p>Enhancing application performance by reducing client-side rendering</p> </li> </ul> </li> </ul>
 *
 * @packageDocumentation
 */
export * from "./GeoMapsClient";
export * from "./GeoMaps";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GeoMapsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { GeoMapsServiceException } from "./models/GeoMapsServiceException";
