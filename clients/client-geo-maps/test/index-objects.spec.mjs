import {
  ColorScheme,
  ContourDensity,
  GeoMaps,
  GeoMapsClient,
  GeoMapsServiceException,
  GetGlyphsCommand,
  GetSpritesCommand,
  GetStaticMapCommand,
  GetStyleDescriptorCommand,
  GetTileCommand,
  LabelSize,
  MapFeatureMode,
  MapStyle,
  ScaleBarUnit,
  StaticMapStyle,
  Terrain,
  TileAdditionalFeature,
  Traffic,
  TravelMode,
  Variant,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoMapsClient === "function");
assert(typeof GeoMaps === "function");
// commands
assert(typeof GetGlyphsCommand === "function");
assert(typeof GetSpritesCommand === "function");
assert(typeof GetStaticMapCommand === "function");
assert(typeof GetStyleDescriptorCommand === "function");
assert(typeof GetTileCommand === "function");
// enums
assert(typeof ColorScheme === "object");
assert(typeof ContourDensity === "object");
assert(typeof LabelSize === "object");
assert(typeof MapFeatureMode === "object");
assert(typeof MapStyle === "object");
assert(typeof ScaleBarUnit === "object");
assert(typeof StaticMapStyle === "object");
assert(typeof Terrain === "object");
assert(typeof TileAdditionalFeature === "object");
assert(typeof Traffic === "object");
assert(typeof TravelMode === "object");
assert(typeof Variant === "object");
// errors
assert(GeoMapsServiceException.prototype instanceof Error);
console.log(`GeoMaps index test passed.`);
