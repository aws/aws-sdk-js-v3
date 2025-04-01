// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AutocompleteCommandInput, AutocompleteCommandOutput } from "../commands/AutocompleteCommand";
import { GeocodeCommandInput, GeocodeCommandOutput } from "../commands/GeocodeCommand";
import { GetPlaceCommandInput, GetPlaceCommandOutput } from "../commands/GetPlaceCommand";
import { ReverseGeocodeCommandInput, ReverseGeocodeCommandOutput } from "../commands/ReverseGeocodeCommand";
import { SearchNearbyCommandInput, SearchNearbyCommandOutput } from "../commands/SearchNearbyCommand";
import { SearchTextCommandInput, SearchTextCommandOutput } from "../commands/SearchTextCommand";
import { SuggestCommandInput, SuggestCommandOutput } from "../commands/SuggestCommand";
import { GeoPlacesServiceException as __BaseException } from "../models/GeoPlacesServiceException";
import {
  AccessDeniedException,
  AccessPoint,
  AddressComponentMatchScores,
  AutocompleteAdditionalFeature,
  AutocompleteFilter,
  AutocompleteFilterPlaceType,
  ComponentMatchScores,
  FilterCircle,
  GeocodeAdditionalFeature,
  GeocodeFilter,
  GeocodeFilterPlaceType,
  GeocodeQueryComponents,
  GeocodeResultItem,
  InternalServerException,
  MatchScoreDetails,
  ReverseGeocodeAdditionalFeature,
  ReverseGeocodeFilter,
  ReverseGeocodeFilterPlaceType,
  ReverseGeocodeResultItem,
  SearchNearbyAdditionalFeature,
  SearchNearbyFilter,
  SearchNearbyResultItem,
  SearchTextAdditionalFeature,
  SearchTextFilter,
  SearchTextResultItem,
  SuggestAdditionalFeature,
  SuggestFilter,
  SuggestPlaceResult,
  SuggestResultItem,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1AutocompleteCommand
 */
export const se_AutocompleteCommand = async (
  input: AutocompleteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/autocomplete");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      BiasPosition: (_) => se_Position(_, context),
      Filter: (_) => se_AutocompleteFilter(_, context),
      IntendedUse: [],
      Language: [],
      MaxResults: [],
      PoliticalView: [],
      PostalCodeMode: [],
      QueryText: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GeocodeCommand
 */
export const se_GeocodeCommand = async (
  input: GeocodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geocode");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      BiasPosition: (_) => se_Position(_, context),
      Filter: (_) => _json(_),
      IntendedUse: [],
      Language: [],
      MaxResults: [],
      PoliticalView: [],
      QueryComponents: (_) => _json(_),
      QueryText: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPlaceCommand
 */
export const se_GetPlaceCommand = async (
  input: GetPlaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/place/{PlaceId}");
  b.p("PlaceId", () => input.PlaceId!, "{PlaceId}", false);
  const query: any = map({
    [_af]: [() => input.AdditionalFeatures !== void 0, () => input[_AF]! || []],
    [_l]: [, input[_L]!],
    [_pv]: [, input[_PV]!],
    [_iu]: [, input[_IU]!],
    [_k]: [, input[_K]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReverseGeocodeCommand
 */
export const se_ReverseGeocodeCommand = async (
  input: ReverseGeocodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reverse-geocode");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      Filter: (_) => _json(_),
      IntendedUse: [],
      Language: [],
      MaxResults: [],
      PoliticalView: [],
      QueryPosition: (_) => se_Position(_, context),
      QueryRadius: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchNearbyCommand
 */
export const se_SearchNearbyCommand = async (
  input: SearchNearbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-nearby");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      Filter: (_) => se_SearchNearbyFilter(_, context),
      IntendedUse: [],
      Language: [],
      MaxResults: [],
      NextToken: [],
      PoliticalView: [],
      QueryPosition: (_) => se_Position(_, context),
      QueryRadius: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchTextCommand
 */
export const se_SearchTextCommand = async (
  input: SearchTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-text");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      BiasPosition: (_) => se_Position(_, context),
      Filter: (_) => se_SearchTextFilter(_, context),
      IntendedUse: [],
      Language: [],
      MaxResults: [],
      NextToken: [],
      PoliticalView: [],
      QueryId: [],
      QueryText: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SuggestCommand
 */
export const se_SuggestCommand = async (
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/suggest");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalFeatures: (_) => _json(_),
      BiasPosition: (_) => se_Position(_, context),
      Filter: (_) => se_SuggestFilter(_, context),
      IntendedUse: [],
      Language: [],
      MaxQueryRefinements: [],
      MaxResults: [],
      PoliticalView: [],
      QueryText: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AutocompleteCommand
 */
export const de_AutocompleteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AutocompleteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResultItems: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GeocodeCommand
 */
export const de_GeocodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GeocodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResultItems: (_) => de_GeocodeResultItemList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaceCommand
 */
export const de_GetPlaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessPoints: (_) => de_AccessPointList(_, context),
    AccessRestrictions: _json,
    Address: _json,
    AddressNumberCorrected: __expectBoolean,
    BusinessChains: _json,
    Categories: _json,
    Contacts: _json,
    FoodTypes: _json,
    MapView: (_) => de_BoundingBox(_, context),
    OpeningHours: _json,
    Phonemes: _json,
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_) => de_Position(_, context),
    PostalCodeDetails: _json,
    TimeZone: _json,
    Title: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReverseGeocodeCommand
 */
export const de_ReverseGeocodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReverseGeocodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResultItems: (_) => de_ReverseGeocodeResultItemList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchNearbyCommand
 */
export const de_SearchNearbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchNearbyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ResultItems: (_) => de_SearchNearbyResultItemList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchTextCommand
 */
export const de_SearchTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ResultItems: (_) => de_SearchTextResultItemList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SuggestCommand
 */
export const de_SuggestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QueryRefinements: _json,
    ResultItems: (_) => de_SuggestResultItemList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.geoplaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.geoplaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.geoplaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.geoplaces#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    FieldList: [, (_) => de_ValidationExceptionFieldList(_, context), `fieldList`],
    Message: [, __expectString, `message`],
    Reason: [, __expectString, `reason`],
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AutocompleteAdditionalFeatureList omitted.

/**
 * serializeAws_restJson1AutocompleteFilter
 */
const se_AutocompleteFilter = (input: AutocompleteFilter, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Circle: (_) => se_FilterCircle(_, context),
    IncludeCountries: _json,
    IncludePlaceTypes: _json,
  });
};

// se_AutocompleteFilterPlaceTypeList omitted.

/**
 * serializeAws_restJson1BoundingBox
 */
const se_BoundingBox = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_CountryCodeList omitted.

// se_FilterBusinessChainList omitted.

// se_FilterCategoryList omitted.

/**
 * serializeAws_restJson1FilterCircle
 */
const se_FilterCircle = (input: FilterCircle, context: __SerdeContext): any => {
  return take(input, {
    Center: (_) => se_Position(_, context),
    Radius: [],
  });
};

// se_FilterFoodTypeList omitted.

// se_GeocodeAdditionalFeatureList omitted.

// se_GeocodeFilter omitted.

// se_GeocodeFilterPlaceTypeList omitted.

// se_GeocodeQueryComponents omitted.

/**
 * serializeAws_restJson1Position
 */
const se_Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_ReverseGeocodeAdditionalFeatureList omitted.

// se_ReverseGeocodeFilter omitted.

// se_ReverseGeocodeFilterPlaceTypeList omitted.

// se_SearchNearbyAdditionalFeatureList omitted.

/**
 * serializeAws_restJson1SearchNearbyFilter
 */
const se_SearchNearbyFilter = (input: SearchNearbyFilter, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    ExcludeBusinessChains: _json,
    ExcludeCategories: _json,
    ExcludeFoodTypes: _json,
    IncludeBusinessChains: _json,
    IncludeCategories: _json,
    IncludeCountries: _json,
    IncludeFoodTypes: _json,
  });
};

// se_SearchTextAdditionalFeatureList omitted.

/**
 * serializeAws_restJson1SearchTextFilter
 */
const se_SearchTextFilter = (input: SearchTextFilter, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Circle: (_) => se_FilterCircle(_, context),
    IncludeCountries: _json,
  });
};

// se_SuggestAdditionalFeatureList omitted.

/**
 * serializeAws_restJson1SuggestFilter
 */
const se_SuggestFilter = (input: SuggestFilter, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Circle: (_) => se_FilterCircle(_, context),
    IncludeCountries: _json,
  });
};

/**
 * deserializeAws_restJson1AccessPoint
 */
const de_AccessPoint = (output: any, context: __SerdeContext): AccessPoint => {
  return take(output, {
    Position: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AccessPointList
 */
const de_AccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPoint(entry, context);
    });
  return retVal;
};

// de_AccessRestriction omitted.

// de_AccessRestrictionList omitted.

// de_Address omitted.

/**
 * deserializeAws_restJson1AddressComponentMatchScores
 */
const de_AddressComponentMatchScores = (output: any, context: __SerdeContext): AddressComponentMatchScores => {
  return take(output, {
    AddressNumber: __limitedParseDouble,
    Block: __limitedParseDouble,
    Building: __limitedParseDouble,
    Country: __limitedParseDouble,
    District: __limitedParseDouble,
    Intersection: (_: any) => de_MatchScoreList(_, context),
    Locality: __limitedParseDouble,
    PostalCode: __limitedParseDouble,
    Region: __limitedParseDouble,
    SubBlock: __limitedParseDouble,
    SubDistrict: __limitedParseDouble,
    SubRegion: __limitedParseDouble,
  }) as any;
};

// de_AddressComponentPhonemes omitted.

// de_AutocompleteAddressHighlights omitted.

// de_AutocompleteHighlights omitted.

// de_AutocompleteResultItem omitted.

// de_AutocompleteResultItemList omitted.

/**
 * deserializeAws_restJson1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_BusinessChain omitted.

// de_BusinessChainList omitted.

// de_Category omitted.

// de_CategoryList omitted.

/**
 * deserializeAws_restJson1ComponentMatchScores
 */
const de_ComponentMatchScores = (output: any, context: __SerdeContext): ComponentMatchScores => {
  return take(output, {
    Address: (_: any) => de_AddressComponentMatchScores(_, context),
    Title: __limitedParseDouble,
  }) as any;
};

// de_ContactDetails omitted.

// de_ContactDetailsList omitted.

// de_Contacts omitted.

// de_Country omitted.

// de_CountryHighlights omitted.

// de_FoodType omitted.

// de_FoodTypeList omitted.

/**
 * deserializeAws_restJson1GeocodeResultItem
 */
const de_GeocodeResultItem = (output: any, context: __SerdeContext): GeocodeResultItem => {
  return take(output, {
    AccessPoints: (_: any) => de_AccessPointList(_, context),
    Address: _json,
    AddressNumberCorrected: __expectBoolean,
    Categories: _json,
    Distance: __expectLong,
    FoodTypes: _json,
    MapView: (_: any) => de_BoundingBox(_, context),
    MatchScores: (_: any) => de_MatchScoreDetails(_, context),
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_: any) => de_Position(_, context),
    PostalCodeDetails: _json,
    TimeZone: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GeocodeResultItemList
 */
const de_GeocodeResultItemList = (output: any, context: __SerdeContext): GeocodeResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GeocodeResultItem(entry, context);
    });
  return retVal;
};

// de_Highlight omitted.

// de_HighlightList omitted.

// de_IntersectionHighlightsList omitted.

// de_IntersectionList omitted.

/**
 * deserializeAws_restJson1MatchScoreDetails
 */
const de_MatchScoreDetails = (output: any, context: __SerdeContext): MatchScoreDetails => {
  return take(output, {
    Components: (_: any) => de_ComponentMatchScores(_, context),
    Overall: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MatchScoreList
 */
const de_MatchScoreList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_OpeningHours omitted.

// de_OpeningHoursComponents omitted.

// de_OpeningHoursComponentsList omitted.

// de_OpeningHoursDisplayList omitted.

// de_OpeningHoursList omitted.

// de_PhonemeDetails omitted.

// de_PhonemeTranscription omitted.

// de_PhonemeTranscriptionList omitted.

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_PostalCodeDetails omitted.

// de_PostalCodeDetailsList omitted.

// de_QueryRefinement omitted.

// de_QueryRefinementList omitted.

// de_Region omitted.

// de_RegionHighlights omitted.

/**
 * deserializeAws_restJson1ReverseGeocodeResultItem
 */
const de_ReverseGeocodeResultItem = (output: any, context: __SerdeContext): ReverseGeocodeResultItem => {
  return take(output, {
    AccessPoints: (_: any) => de_AccessPointList(_, context),
    Address: _json,
    AddressNumberCorrected: __expectBoolean,
    Categories: _json,
    Distance: __expectLong,
    FoodTypes: _json,
    MapView: (_: any) => de_BoundingBox(_, context),
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_: any) => de_Position(_, context),
    PostalCodeDetails: _json,
    TimeZone: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReverseGeocodeResultItemList
 */
const de_ReverseGeocodeResultItemList = (output: any, context: __SerdeContext): ReverseGeocodeResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReverseGeocodeResultItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchNearbyResultItem
 */
const de_SearchNearbyResultItem = (output: any, context: __SerdeContext): SearchNearbyResultItem => {
  return take(output, {
    AccessPoints: (_: any) => de_AccessPointList(_, context),
    AccessRestrictions: _json,
    Address: _json,
    AddressNumberCorrected: __expectBoolean,
    BusinessChains: _json,
    Categories: _json,
    Contacts: _json,
    Distance: __expectLong,
    FoodTypes: _json,
    MapView: (_: any) => de_BoundingBox(_, context),
    OpeningHours: _json,
    Phonemes: _json,
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_: any) => de_Position(_, context),
    TimeZone: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchNearbyResultItemList
 */
const de_SearchNearbyResultItemList = (output: any, context: __SerdeContext): SearchNearbyResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchNearbyResultItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchTextResultItem
 */
const de_SearchTextResultItem = (output: any, context: __SerdeContext): SearchTextResultItem => {
  return take(output, {
    AccessPoints: (_: any) => de_AccessPointList(_, context),
    AccessRestrictions: _json,
    Address: _json,
    AddressNumberCorrected: __expectBoolean,
    BusinessChains: _json,
    Categories: _json,
    Contacts: _json,
    Distance: __expectLong,
    FoodTypes: _json,
    MapView: (_: any) => de_BoundingBox(_, context),
    OpeningHours: _json,
    Phonemes: _json,
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_: any) => de_Position(_, context),
    TimeZone: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchTextResultItemList
 */
const de_SearchTextResultItemList = (output: any, context: __SerdeContext): SearchTextResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchTextResultItem(entry, context);
    });
  return retVal;
};

// de_StreetComponents omitted.

// de_StreetComponentsList omitted.

// de_SubRegion omitted.

// de_SubRegionHighlights omitted.

// de_SuggestAddressHighlights omitted.

// de_SuggestHighlights omitted.

/**
 * deserializeAws_restJson1SuggestPlaceResult
 */
const de_SuggestPlaceResult = (output: any, context: __SerdeContext): SuggestPlaceResult => {
  return take(output, {
    AccessPoints: (_: any) => de_AccessPointList(_, context),
    AccessRestrictions: _json,
    Address: _json,
    BusinessChains: _json,
    Categories: _json,
    Distance: __expectLong,
    FoodTypes: _json,
    MapView: (_: any) => de_BoundingBox(_, context),
    Phonemes: _json,
    PlaceId: __expectString,
    PlaceType: __expectString,
    PoliticalView: __expectString,
    Position: (_: any) => de_Position(_, context),
    TimeZone: _json,
  }) as any;
};

// de_SuggestQueryResult omitted.

/**
 * deserializeAws_restJson1SuggestResultItem
 */
const de_SuggestResultItem = (output: any, context: __SerdeContext): SuggestResultItem => {
  return take(output, {
    Highlights: _json,
    Place: (_: any) => de_SuggestPlaceResult(_, context),
    Query: _json,
    SuggestResultItemType: __expectString,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SuggestResultItemList
 */
const de_SuggestResultItemList = (output: any, context: __SerdeContext): SuggestResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuggestResultItem(entry, context);
    });
  return retVal;
};

// de_TimeZone omitted.

// de_UspsZip omitted.

// de_UspsZipPlus4 omitted.

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return take(output, {
    Message: [, __expectString, `message`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _AF = "AdditionalFeatures";
const _IU = "IntendedUse";
const _K = "Key";
const _L = "Language";
const _PB = "PricingBucket";
const _PV = "PoliticalView";
const _af = "additional-features";
const _iu = "intended-use";
const _k = "key";
const _l = "language";
const _pv = "political-view";
const _xagpb = "x-amz-geo-pricing-bucket";
