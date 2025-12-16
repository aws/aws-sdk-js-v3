import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessPoint$,
  AccessRestriction$,
  Address$,
  AddressComponentMatchScores$,
  AddressComponentPhonemes$,
  Autocomplete$,
  AutocompleteAdditionalFeature,
  AutocompleteAddressHighlights$,
  AutocompleteCommand,
  AutocompleteFilter$,
  AutocompleteFilterPlaceType,
  AutocompleteHighlights$,
  AutocompleteIntendedUse,
  AutocompleteRequest$,
  AutocompleteResponse$,
  AutocompleteResultItem$,
  BusinessChain$,
  Category$,
  ComponentMatchScores$,
  ContactDetails$,
  Contacts$,
  Country$,
  CountryHighlights$,
  FilterCircle$,
  FoodType$,
  GeoPlaces,
  GeoPlacesClient,
  GeoPlacesServiceException,
  Geocode$,
  GeocodeAdditionalFeature,
  GeocodeCommand,
  GeocodeFilter$,
  GeocodeFilterPlaceType,
  GeocodeIntendedUse,
  GeocodeParsedQuery$,
  GeocodeParsedQueryAddressComponents$,
  GeocodeQueryComponents$,
  GeocodeRequest$,
  GeocodeResponse$,
  GeocodeResultItem$,
  GetPlace$,
  GetPlaceAdditionalFeature,
  GetPlaceCommand,
  GetPlaceIntendedUse,
  GetPlaceRequest$,
  GetPlaceResponse$,
  Highlight$,
  InternalServerException,
  InternalServerException$,
  Intersection$,
  MatchScoreDetails$,
  OpeningHours$,
  OpeningHoursComponents$,
  ParsedQueryComponent$,
  ParsedQuerySecondaryAddressComponent$,
  PhonemeDetails$,
  PhonemeTranscription$,
  PlaceType,
  PostalAuthority,
  PostalCodeDetails$,
  PostalCodeMode,
  PostalCodeType,
  QueryRefinement$,
  QueryType,
  RecordTypeCode,
  Region$,
  RegionHighlights$,
  RelatedPlace$,
  ReverseGeocode$,
  ReverseGeocodeAdditionalFeature,
  ReverseGeocodeCommand,
  ReverseGeocodeFilter$,
  ReverseGeocodeFilterPlaceType,
  ReverseGeocodeIntendedUse,
  ReverseGeocodeRequest$,
  ReverseGeocodeResponse$,
  ReverseGeocodeResultItem$,
  SearchNearby$,
  SearchNearbyAdditionalFeature,
  SearchNearbyCommand,
  SearchNearbyFilter$,
  SearchNearbyIntendedUse,
  SearchNearbyRequest$,
  SearchNearbyResponse$,
  SearchNearbyResultItem$,
  SearchText$,
  SearchTextAdditionalFeature,
  SearchTextCommand,
  SearchTextFilter$,
  SearchTextIntendedUse,
  SearchTextRequest$,
  SearchTextResponse$,
  SearchTextResultItem$,
  SecondaryAddressComponent$,
  SecondaryAddressComponentMatchScore$,
  StreetComponents$,
  SubRegion$,
  SubRegionHighlights$,
  Suggest$,
  SuggestAdditionalFeature,
  SuggestAddressHighlights$,
  SuggestCommand,
  SuggestFilter$,
  SuggestHighlights$,
  SuggestIntendedUse,
  SuggestPlaceResult$,
  SuggestQueryResult$,
  SuggestRequest$,
  SuggestResponse$,
  SuggestResultItem$,
  SuggestResultItemType,
  ThrottlingException,
  ThrottlingException$,
  TimeZone$,
  TypePlacement,
  UspsZip$,
  UspsZipPlus4$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  ZipClassificationCode,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoPlacesClient === "function");
assert(typeof GeoPlaces === "function");
// commands
assert(typeof AutocompleteCommand === "function");
assert(typeof Autocomplete$ === "object");
assert(typeof GeocodeCommand === "function");
assert(typeof Geocode$ === "object");
assert(typeof GetPlaceCommand === "function");
assert(typeof GetPlace$ === "object");
assert(typeof ReverseGeocodeCommand === "function");
assert(typeof ReverseGeocode$ === "object");
assert(typeof SearchNearbyCommand === "function");
assert(typeof SearchNearby$ === "object");
assert(typeof SearchTextCommand === "function");
assert(typeof SearchText$ === "object");
assert(typeof SuggestCommand === "function");
assert(typeof Suggest$ === "object");
// structural schemas
assert(typeof AccessPoint$ === "object");
assert(typeof AccessRestriction$ === "object");
assert(typeof Address$ === "object");
assert(typeof AddressComponentMatchScores$ === "object");
assert(typeof AddressComponentPhonemes$ === "object");
assert(typeof AutocompleteAddressHighlights$ === "object");
assert(typeof AutocompleteFilter$ === "object");
assert(typeof AutocompleteHighlights$ === "object");
assert(typeof AutocompleteRequest$ === "object");
assert(typeof AutocompleteResponse$ === "object");
assert(typeof AutocompleteResultItem$ === "object");
assert(typeof BusinessChain$ === "object");
assert(typeof Category$ === "object");
assert(typeof ComponentMatchScores$ === "object");
assert(typeof ContactDetails$ === "object");
assert(typeof Contacts$ === "object");
assert(typeof Country$ === "object");
assert(typeof CountryHighlights$ === "object");
assert(typeof FilterCircle$ === "object");
assert(typeof FoodType$ === "object");
assert(typeof GeocodeFilter$ === "object");
assert(typeof GeocodeParsedQuery$ === "object");
assert(typeof GeocodeParsedQueryAddressComponents$ === "object");
assert(typeof GeocodeQueryComponents$ === "object");
assert(typeof GeocodeRequest$ === "object");
assert(typeof GeocodeResponse$ === "object");
assert(typeof GeocodeResultItem$ === "object");
assert(typeof GetPlaceRequest$ === "object");
assert(typeof GetPlaceResponse$ === "object");
assert(typeof Highlight$ === "object");
assert(typeof Intersection$ === "object");
assert(typeof MatchScoreDetails$ === "object");
assert(typeof OpeningHours$ === "object");
assert(typeof OpeningHoursComponents$ === "object");
assert(typeof ParsedQueryComponent$ === "object");
assert(typeof ParsedQuerySecondaryAddressComponent$ === "object");
assert(typeof PhonemeDetails$ === "object");
assert(typeof PhonemeTranscription$ === "object");
assert(typeof PostalCodeDetails$ === "object");
assert(typeof QueryRefinement$ === "object");
assert(typeof Region$ === "object");
assert(typeof RegionHighlights$ === "object");
assert(typeof RelatedPlace$ === "object");
assert(typeof ReverseGeocodeFilter$ === "object");
assert(typeof ReverseGeocodeRequest$ === "object");
assert(typeof ReverseGeocodeResponse$ === "object");
assert(typeof ReverseGeocodeResultItem$ === "object");
assert(typeof SearchNearbyFilter$ === "object");
assert(typeof SearchNearbyRequest$ === "object");
assert(typeof SearchNearbyResponse$ === "object");
assert(typeof SearchNearbyResultItem$ === "object");
assert(typeof SearchTextFilter$ === "object");
assert(typeof SearchTextRequest$ === "object");
assert(typeof SearchTextResponse$ === "object");
assert(typeof SearchTextResultItem$ === "object");
assert(typeof SecondaryAddressComponent$ === "object");
assert(typeof SecondaryAddressComponentMatchScore$ === "object");
assert(typeof StreetComponents$ === "object");
assert(typeof SubRegion$ === "object");
assert(typeof SubRegionHighlights$ === "object");
assert(typeof SuggestAddressHighlights$ === "object");
assert(typeof SuggestFilter$ === "object");
assert(typeof SuggestHighlights$ === "object");
assert(typeof SuggestPlaceResult$ === "object");
assert(typeof SuggestQueryResult$ === "object");
assert(typeof SuggestRequest$ === "object");
assert(typeof SuggestResponse$ === "object");
assert(typeof SuggestResultItem$ === "object");
assert(typeof TimeZone$ === "object");
assert(typeof UspsZip$ === "object");
assert(typeof UspsZipPlus4$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof ZipClassificationCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof GeoPlacesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof GeoPlacesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof GeoPlacesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GeoPlacesServiceException);
assert(typeof ValidationException$ === "object");
assert(GeoPlacesServiceException.prototype instanceof Error);
console.log(`GeoPlaces index test passed.`);
