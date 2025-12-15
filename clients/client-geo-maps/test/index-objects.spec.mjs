import {
  AccessDeniedException,
  AccessDeniedException$,
  ColorScheme,
  ContourDensity,
  GeoMaps,
  GeoMapsClient,
  GeoMapsServiceException,
  GetGlyphs$,
  GetGlyphsCommand,
  GetGlyphsRequest$,
  GetGlyphsResponse$,
  GetSprites$,
  GetSpritesCommand,
  GetSpritesRequest$,
  GetSpritesResponse$,
  GetStaticMap$,
  GetStaticMapCommand,
  GetStaticMapRequest$,
  GetStaticMapResponse$,
  GetStyleDescriptor$,
  GetStyleDescriptorCommand,
  GetStyleDescriptorRequest$,
  GetStyleDescriptorResponse$,
  GetTile$,
  GetTileCommand,
  GetTileRequest$,
  GetTileResponse$,
  InternalServerException,
  InternalServerException$,
  LabelSize,
  MapFeatureMode,
  MapStyle,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScaleBarUnit,
  StaticMapStyle,
  Terrain,
  ThrottlingException,
  ThrottlingException$,
  TileAdditionalFeature,
  Traffic,
  TravelMode,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Variant,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoMapsClient === "function");
assert(typeof GeoMaps === "function");
// commands
assert(typeof GetGlyphsCommand === "function");
assert(typeof GetGlyphs$ === "object");
assert(typeof GetSpritesCommand === "function");
assert(typeof GetSprites$ === "object");
assert(typeof GetStaticMapCommand === "function");
assert(typeof GetStaticMap$ === "object");
assert(typeof GetStyleDescriptorCommand === "function");
assert(typeof GetStyleDescriptor$ === "object");
assert(typeof GetTileCommand === "function");
assert(typeof GetTile$ === "object");
// structural schemas
assert(typeof GetGlyphsRequest$ === "object");
assert(typeof GetGlyphsResponse$ === "object");
assert(typeof GetSpritesRequest$ === "object");
assert(typeof GetSpritesResponse$ === "object");
assert(typeof GetStaticMapRequest$ === "object");
assert(typeof GetStaticMapResponse$ === "object");
assert(typeof GetStyleDescriptorRequest$ === "object");
assert(typeof GetStyleDescriptorResponse$ === "object");
assert(typeof GetTileRequest$ === "object");
assert(typeof GetTileResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof GeoMapsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GeoMapsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof GeoMapsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GeoMapsServiceException);
assert(typeof ValidationException$ === "object");
assert(GeoMapsServiceException.prototype instanceof Error);
console.log(`GeoMaps index test passed.`);
