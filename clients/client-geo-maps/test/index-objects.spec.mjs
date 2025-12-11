import {
  AccessDeniedException,
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
  InternalServerException,
  LabelSize,
  MapFeatureMode,
  MapStyle,
  ResourceNotFoundException,
  ScaleBarUnit,
  StaticMapStyle,
  Terrain,
  ThrottlingException,
  TileAdditionalFeature,
  Traffic,
  TravelMode,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof Variant === "object");
// errors
assert(AccessDeniedException.prototype instanceof GeoMapsServiceException);
assert(InternalServerException.prototype instanceof GeoMapsServiceException);
assert(ResourceNotFoundException.prototype instanceof GeoMapsServiceException);
assert(ThrottlingException.prototype instanceof GeoMapsServiceException);
assert(ValidationException.prototype instanceof GeoMapsServiceException);
assert(GeoMapsServiceException.prototype instanceof Error);
console.log(`GeoMaps index test passed.`);
