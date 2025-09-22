// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AN,
  _BP,
  _Ca,
  _CCL,
  _Cou,
  _D,
  _DS,
  _en,
  _FBB,
  _FC,
  _FCi,
  _G,
  _GPe,
  _GPR,
  _GPRe,
  _h,
  _hQ,
  _I,
  _IN,
  _K,
  _k,
  _l,
  _La,
  _Lab,
  _MR,
  _Mu,
  _N,
  _Na,
  _O,
  _P,
  _PC,
  _PG,
  _PI,
  _Pl,
  _Poi,
  _RBBe,
  _Reg,
  _Rel,
  _Res,
  _SC,
  _SFPR,
  _SFPRL,
  _SFSR,
  _SFSRL,
  _SFTR,
  _SFTRL,
  _SM,
  _SPIFP,
  _SPIFPR,
  _SPIFPRe,
  _SPIFPS,
  _SPIFS,
  _SPIFSR,
  _SPIFSRe,
  _SPIFSS,
  _SPIFT,
  _SPIFTR,
  _SPIFTRe,
  _SPIFTS,
  _SR,
  _SS,
  _Str,
  _Su,
  _Te,
  _TZ,
  _UN,
  _UTn,
  n0,
  Position,
} from "./schemas_0";
import { CountryCode3 } from "./schemas_12_SearchPlace";
import { BoundingBox } from "./schemas_24_SearchPlace";
import { ApiKey } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var GetPlaceRequest = struct(
  n0,
  _GPR,
  0,
  [_IN, _PI, _La, _K],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GetPlaceResponse = struct(n0, _GPRe, 0, [_Pl], [[() => Place, 0]]);
export var Place = struct(
  n0,
  _Pl,
  0,
  [_Lab, _G, _AN, _Str, _N, _Mu, _SR, _Reg, _Cou, _PC, _I, _TZ, _UTn, _UN, _Ca, _SC, _SM],
  [0, [() => PlaceGeometry, 0], 0, 0, 0, 0, 0, 0, 0, 0, 2, () => TimeZone, 0, 0, 64 | 0, 64 | 0, 0]
);
export var PlaceGeometry = struct(n0, _PG, 0, [_Poi], [[() => Position, 0]]);
export var SearchForPositionResult = struct(n0, _SFPR, 0, [_Pl, _D, _PI], [[() => Place, 0], 1, 0]);
export var SearchForSuggestionsResult = struct(n0, _SFSR, 0, [_Te, _PI, _Ca, _SC], [0, 0, 64 | 0, 64 | 0]);
export var SearchForTextResult = struct(n0, _SFTR, 0, [_Pl, _D, _Rel, _PI], [[() => Place, 0], 1, 1, 0]);
export var SearchPlaceIndexForPositionRequest = struct(
  n0,
  _SPIFPR,
  0,
  [_IN, _P, _MR, _La, _K],
  [
    [0, 1],
    [() => Position, 0],
    1,
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SearchPlaceIndexForPositionResponse = struct(
  n0,
  _SPIFPRe,
  0,
  [_Su, _Res],
  [
    [() => SearchPlaceIndexForPositionSummary, 0],
    [() => SearchForPositionResultList, 0],
  ]
);
export var SearchPlaceIndexForPositionSummary = struct(
  n0,
  _SPIFPS,
  0,
  [_P, _MR, _DS, _La],
  [[() => Position, 0], 1, 0, 0]
);
export var SearchPlaceIndexForSuggestionsRequest = struct(
  n0,
  _SPIFSR,
  0,
  [_IN, _Te, _BP, _FBB, _FC, _MR, _La, _FCi, _K],
  [
    [0, 1],
    [() => SensitiveString, 0],
    [() => Position, 0],
    [() => BoundingBox, 0],
    [() => CountryCodeList, 0],
    1,
    0,
    64 | 0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SearchPlaceIndexForSuggestionsResponse = struct(
  n0,
  _SPIFSRe,
  0,
  [_Su, _Res],
  [[() => SearchPlaceIndexForSuggestionsSummary, 0], () => SearchForSuggestionsResultList]
);
export var SearchPlaceIndexForSuggestionsSummary = struct(
  n0,
  _SPIFSS,
  0,
  [_Te, _BP, _FBB, _FC, _MR, _DS, _La, _FCi],
  [[() => SensitiveString, 0], [() => Position, 0], [() => BoundingBox, 0], [() => CountryCodeList, 0], 1, 0, 0, 64 | 0]
);
export var SearchPlaceIndexForTextRequest = struct(
  n0,
  _SPIFTR,
  0,
  [_IN, _Te, _BP, _FBB, _FC, _MR, _La, _FCi, _K],
  [
    [0, 1],
    [() => SensitiveString, 0],
    [() => Position, 0],
    [() => BoundingBox, 0],
    [() => CountryCodeList, 0],
    1,
    0,
    64 | 0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SearchPlaceIndexForTextResponse = struct(
  n0,
  _SPIFTRe,
  0,
  [_Su, _Res],
  [
    [() => SearchPlaceIndexForTextSummary, 0],
    [() => SearchForTextResultList, 0],
  ]
);
export var SearchPlaceIndexForTextSummary = struct(
  n0,
  _SPIFTS,
  0,
  [_Te, _BP, _FBB, _FC, _MR, _RBBe, _DS, _La, _FCi],
  [
    [() => SensitiveString, 0],
    [() => Position, 0],
    [() => BoundingBox, 0],
    [() => CountryCodeList, 0],
    1,
    [() => BoundingBox, 0],
    0,
    0,
    64 | 0,
  ]
);
export var TimeZone = struct(n0, _TZ, 0, [_Na, _O], [0, 1]);
export var CountryCodeList = list(n0, _CCL, 0, [() => CountryCode3, 0]);
export var FilterPlaceCategoryList = 64 | 0;

export var PlaceCategoryList = 64 | 0;

export var PlaceSupplementalCategoryList = 64 | 0;

export var SearchForPositionResultList = list(n0, _SFPRL, 0, [() => SearchForPositionResult, 0]);
export var SearchForSuggestionsResultList = list(n0, _SFSRL, 0, () => SearchForSuggestionsResult);
export var SearchForTextResultList = list(n0, _SFTRL, 0, [() => SearchForTextResult, 0]);
export var GetPlace = op(
  n0,
  _GPe,
  {
    [_h]: ["GET", "/places/v0/indexes/{IndexName}/places/{PlaceId}", 200],
    [_en]: ["places."],
  },
  () => GetPlaceRequest,
  () => GetPlaceResponse
);
export var SearchPlaceIndexForPosition = op(
  n0,
  _SPIFP,
  {
    [_h]: ["POST", "/places/v0/indexes/{IndexName}/search/position", 200],
    [_en]: ["places."],
  },
  () => SearchPlaceIndexForPositionRequest,
  () => SearchPlaceIndexForPositionResponse
);
export var SearchPlaceIndexForSuggestions = op(
  n0,
  _SPIFS,
  {
    [_h]: ["POST", "/places/v0/indexes/{IndexName}/search/suggestions", 200],
    [_en]: ["places."],
  },
  () => SearchPlaceIndexForSuggestionsRequest,
  () => SearchPlaceIndexForSuggestionsResponse
);
export var SearchPlaceIndexForText = op(
  n0,
  _SPIFT,
  {
    [_h]: ["POST", "/places/v0/indexes/{IndexName}/search/text", 200],
    [_en]: ["places."],
  },
  () => SearchPlaceIndexForTextRequest,
  () => SearchPlaceIndexForTextResponse
);
