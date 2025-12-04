import {
  AutocompleteAdditionalFeature,
  AutocompleteCommand,
  AutocompleteFilterPlaceType,
  AutocompleteIntendedUse,
  GeoPlaces,
  GeoPlacesClient,
  GeoPlacesServiceException,
  GeocodeAdditionalFeature,
  GeocodeCommand,
  GeocodeFilterPlaceType,
  GeocodeIntendedUse,
  GetPlaceAdditionalFeature,
  GetPlaceCommand,
  GetPlaceIntendedUse,
  PlaceType,
  PostalAuthority,
  PostalCodeMode,
  PostalCodeType,
  QueryType,
  RecordTypeCode,
  ReverseGeocodeAdditionalFeature,
  ReverseGeocodeCommand,
  ReverseGeocodeFilterPlaceType,
  ReverseGeocodeIntendedUse,
  SearchNearbyAdditionalFeature,
  SearchNearbyCommand,
  SearchNearbyIntendedUse,
  SearchTextAdditionalFeature,
  SearchTextCommand,
  SearchTextIntendedUse,
  SuggestAdditionalFeature,
  SuggestCommand,
  SuggestIntendedUse,
  SuggestResultItemType,
  TypePlacement,
  ZipClassificationCode,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoPlacesClient === "function");
assert(typeof GeoPlaces === "function");
// commands
assert(typeof AutocompleteCommand === "function");
assert(typeof GeocodeCommand === "function");
assert(typeof GetPlaceCommand === "function");
assert(typeof ReverseGeocodeCommand === "function");
assert(typeof SearchNearbyCommand === "function");
assert(typeof SearchTextCommand === "function");
assert(typeof SuggestCommand === "function");
// enums
assert(typeof AutocompleteAdditionalFeature === "object");
assert(typeof AutocompleteFilterPlaceType === "object");
assert(typeof AutocompleteIntendedUse === "object");
assert(typeof GeocodeAdditionalFeature === "object");
assert(typeof GeocodeFilterPlaceType === "object");
assert(typeof GeocodeIntendedUse === "object");
assert(typeof GetPlaceAdditionalFeature === "object");
assert(typeof GetPlaceIntendedUse === "object");
assert(typeof PlaceType === "object");
assert(typeof PostalAuthority === "object");
assert(typeof PostalCodeMode === "object");
assert(typeof PostalCodeType === "object");
assert(typeof QueryType === "object");
assert(typeof RecordTypeCode === "object");
assert(typeof ReverseGeocodeAdditionalFeature === "object");
assert(typeof ReverseGeocodeFilterPlaceType === "object");
assert(typeof ReverseGeocodeIntendedUse === "object");
assert(typeof SearchNearbyAdditionalFeature === "object");
assert(typeof SearchNearbyIntendedUse === "object");
assert(typeof SearchTextAdditionalFeature === "object");
assert(typeof SearchTextIntendedUse === "object");
assert(typeof SuggestAdditionalFeature === "object");
assert(typeof SuggestIntendedUse === "object");
assert(typeof SuggestResultItemType === "object");
assert(typeof TypePlacement === "object");
assert(typeof ZipClassificationCode === "object");
// errors
assert(GeoPlacesServiceException.prototype instanceof Error);
console.log(`GeoPlaces index test passed.`);
