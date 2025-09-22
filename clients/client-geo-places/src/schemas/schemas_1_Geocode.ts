// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _AAH,
  _ACMS,
  _ACP,
  _ADE,
  _AF,
  _af,
  _AFd,
  _AH,
  _AK,
  _AN,
  _ANC,
  _AP,
  _APc,
  _APL,
  _AR,
  _ARc,
  _ARI,
  _ARIL,
  _ARL,
  _ARu,
  _ARut,
  _Au,
  _B,
  _BB,
  _BC,
  _BCL,
  _BCu,
  _BN,
  _BP,
  _Bu,
  _C,
  _c,
  _Ca,
  _CC,
  _CCL,
  _CCo,
  _CCou,
  _CD,
  _CDL,
  _Ce,
  _CH,
  _Ci,
  _CL,
  _CMS,
  _Co,
  _Cod,
  _Code,
  _Code_,
  _Com,
  _Con,
  _D,
  _De,
  _Di,
  _Dir,
  _Dis,
  _DM,
  _DS,
  _E,
  _e,
  _EBC,
  _EC,
  _EFT,
  _EI,
  _F,
  _Fa,
  _FBCL,
  _FC,
  _FCL,
  _FFTL,
  _FL,
  _fL,
  _FT,
  _FTL,
  _FTo,
  _G,
  _GF,
  _GFPT,
  _GFPTL,
  _GP,
  _GPQ,
  _GPQAC,
  _GPR,
  _GPRe,
  _GQC,
  _GR,
  _GRe,
  _GRI,
  _GRIL,
  _H,
  _h,
  _hE,
  _hH,
  _Hi,
  _HL,
  _hQ,
  _I,
  _IBC,
  _IC,
  _ICn,
  _Id,
  _IFT,
  _IHL,
  _IL,
  _In,
  _IPT,
  _ISE,
  _IU,
  _iu,
  _jN,
  _K,
  _k,
  _L,
  _l,
  _La,
  _LN,
  _Lo,
  _M,
  _m,
  _MA,
  _MQR,
  _MR,
  _MS,
  _MSD,
  _MV,
  _N,
  _n,
  _NT,
  _Nu,
  _O,
  _OD,
  _Of,
  _OH,
  _OHC,
  _OHCL,
  _OHD,
  _OHDL,
  _OHL,
  _ON,
  _OS,
  _OT,
  _OTr,
  _P,
  _PA,
  _PB,
  _PC,
  _PCD,
  _PCDL,
  _PCM,
  _PCT,
  _PD,
  _Ph,
  _Pho,
  _PI,
  _Pl,
  _PQ,
  _PQC,
  _PQCL,
  _PQSAC,
  _PQSACL,
  _Pr,
  _Pre,
  _Pref,
  _PT,
  _PTh,
  _PTL,
  _PV,
  _pv,
  _Q,
  _QC,
  _QCu,
  _QI,
  _QP,
  _QR,
  _QRL,
  _QRu,
  _QRue,
  _QT,
  _QTu,
  _R,
  _r,
  _Ra,
  _RD,
  _Re,
  _Rea,
  _Rec,
  _RG,
  _RGF,
  _RGR,
  _RGRe,
  _RGRI,
  _RGRIL,
  _RH,
  _RI,
  _RP,
  _RPL,
  _RT,
  _RTC,
  _S,
  _s,
  _SA,
  _SAC,
  _SACe,
  _SACL,
  _SACMS,
  _SACMSL,
  _SAH,
  _SB,
  _SBu,
  _SC,
  _SCL,
  _SD,
  _SF,
  _SH,
  _SI,
  _SN,
  _SNF,
  _SNR,
  _SNRe,
  _SNRI,
  _SNRIL,
  _SPR,
  _SQR,
  _SR,
  _SRH,
  _SRI,
  _SRIL,
  _SRIT,
  _SRu,
  _SRug,
  _SS,
  _ST,
  _STF,
  _STR,
  _STRe,
  _STRI,
  _STRIL,
  _Su,
  _Sug,
  _T,
  _TE,
  _TP,
  _TS,
  _Ty,
  _TZ,
  _UZ,
  _UZP,
  _V,
  _VE,
  _VEF,
  _VEFL,
  _W,
  _xagpb,
  _ZCC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKey = sim(n0, _AK, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var CountryCode2 = sim(n0, _CCo, 0, 8);
export var CountryCode3 = sim(n0, _CCou, 0, 8);
export var DistanceMeters = sim(n0, _DM, 1, 8);
export var DurationSeconds = sim(n0, _DS, 1, 8);
export var GeocodeFilterPlaceType = sim(n0, _GFPT, 0, 8);
export var OpeningHoursDisplay = sim(n0, _OHD, 0, 8);
export var PlaceType = sim(n0, _PT, 0, 8);
export var PostalAuthority = sim(n0, _PA, 0, 8);
export var PostalCodeType = sim(n0, _PCT, 0, 8);
export var RecordTypeCode = sim(n0, _RTC, 0, 8);
export var SensitiveBoolean = sim(n0, _SB, 2, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var ZipClassificationCode = sim(n0, _ZCC, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __AccessDeniedException
);
export var AccessPoint = struct(n0, _AP, 0, [_P], [[() => Position, 0]]);
export var AccessRestriction = struct(
  n0,
  _AR,
  0,
  [_R, _C],
  [
    [() => SensitiveBoolean, 0],
    [() => CategoryList, 0],
  ]
);
export var Address = struct(
  n0,
  _A,
  0,
  [_L, _Co, _Re, _SR, _Lo, _D, _SD, _PC, _B, _SBu, _I, _S, _SC, _AN, _Bu, _SAC],
  [
    [() => SensitiveString, 0],
    [() => Country, 0],
    [() => Region, 0],
    [() => SubRegion, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    64 | 0,
    [() => SensitiveString, 0],
    [() => StreetComponentsList, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SecondaryAddressComponentList, 0],
  ]
);
export var AddressComponentMatchScores = struct(
  n0,
  _ACMS,
  0,
  [_Co, _Re, _SR, _Lo, _D, _SD, _PC, _B, _SBu, _I, _AN, _Bu, _SAC],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 64 | 1, 1, 1, () => SecondaryAddressComponentMatchScoreList]
);
export var AddressComponentPhonemes = struct(
  n0,
  _ACP,
  0,
  [_Co, _Re, _SR, _Lo, _D, _SD, _B, _SBu, _S],
  [
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
    [() => PhonemeTranscriptionList, 0],
  ]
);
export var AutocompleteAddressHighlights = struct(
  n0,
  _AAH,
  0,
  [_L, _Co, _Re, _SR, _Lo, _D, _SD, _S, _B, _SBu, _I, _PC, _AN, _Bu],
  [
    [() => HighlightList, 0],
    [() => CountryHighlights, 0],
    [() => RegionHighlights, 0],
    [() => SubRegionHighlights, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => IntersectionHighlightsList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
    [() => HighlightList, 0],
  ]
);
export var AutocompleteFilter = struct(
  n0,
  _AF,
  0,
  [_BB, _Ci, _IC, _IPT],
  [[() => BoundingBox, 0], [() => FilterCircle, 0], [() => CountryCodeList, 0], 64 | 0]
);
export var AutocompleteHighlights = struct(
  n0,
  _AH,
  0,
  [_T, _A],
  [
    [() => HighlightList, 0],
    [() => AutocompleteAddressHighlights, 0],
  ]
);
export var AutocompleteRequest = struct(
  n0,
  _ARu,
  0,
  [_QT, _MR, _BP, _F, _PCM, _AFd, _La, _PV, _IU, _K],
  [
    [() => SensitiveString, 0],
    1,
    [() => Position, 0],
    [() => AutocompleteFilter, 0],
    0,
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var AutocompleteResponse = struct(
  n0,
  _ARut,
  0,
  [_PB, _RI],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => AutocompleteResultItemList, 0],
  ]
);
export var AutocompleteResultItem = struct(
  n0,
  _ARI,
  0,
  [_PI, _PT, _T, _A, _Di, _La, _PV, _H],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => DistanceMeters, 0],
    0,
    [() => CountryCode3, 0],
    [() => AutocompleteHighlights, 0],
  ]
);
export var BusinessChain = struct(
  n0,
  _BC,
  0,
  [_N, _Id],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var Category = struct(
  n0,
  _Ca,
  0,
  [_Id, _N, _LN, _Pr],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var ComponentMatchScores = struct(n0, _CMS, 0, [_T, _A], [1, () => AddressComponentMatchScores]);
export var ContactDetails = struct(
  n0,
  _CD,
  0,
  [_L, _V, _C],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => CategoryList, 0],
  ]
);
export var Contacts = struct(
  n0,
  _Con,
  0,
  [_Ph, _Fa, _W, _E],
  [
    [() => ContactDetailsList, 0],
    [() => ContactDetailsList, 0],
    [() => ContactDetailsList, 0],
    [() => ContactDetailsList, 0],
  ]
);
export var Country = struct(
  n0,
  _Co,
  0,
  [_Cod, _Code, _N],
  [
    [() => CountryCode2, 0],
    [() => CountryCode3, 0],
    [() => SensitiveString, 0],
  ]
);
export var CountryHighlights = struct(
  n0,
  _CH,
  0,
  [_Code_, _N],
  [
    [() => HighlightList, 0],
    [() => HighlightList, 0],
  ]
);
export var FilterCircle = struct(
  n0,
  _FC,
  8,
  [_Ce, _Ra],
  [
    [() => Position, 0],
    [() => DistanceMeters, 0],
  ]
);
export var FoodType = struct(
  n0,
  _FT,
  0,
  [_LN, _Id, _Pr],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var GeocodeFilter = struct(
  n0,
  _GF,
  0,
  [_IC, _IPT],
  [
    [() => CountryCodeList, 0],
    [() => GeocodeFilterPlaceTypeList, 0],
  ]
);
export var GeocodeParsedQuery = struct(
  n0,
  _GPQ,
  0,
  [_T, _A],
  [
    [() => ParsedQueryComponentList, 0],
    [() => GeocodeParsedQueryAddressComponents, 0],
  ]
);
export var GeocodeParsedQueryAddressComponents = struct(
  n0,
  _GPQAC,
  0,
  [_Co, _Re, _SR, _Lo, _D, _SD, _PC, _B, _SBu, _S, _AN, _Bu, _SAC],
  [
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQueryComponentList, 0],
    [() => ParsedQuerySecondaryAddressComponentList, 0],
  ]
);
export var GeocodeQueryComponents = struct(
  n0,
  _GQC,
  0,
  [_Co, _Re, _SR, _Lo, _D, _S, _AN, _PC],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var GeocodeRequest = struct(
  n0,
  _GR,
  0,
  [_QT, _QC, _MR, _BP, _F, _AFd, _La, _PV, _IU, _K],
  [
    [() => SensitiveString, 0],
    [() => GeocodeQueryComponents, 0],
    1,
    [() => Position, 0],
    [() => GeocodeFilter, 0],
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var GeocodeResponse = struct(
  n0,
  _GRe,
  0,
  [_PB, _RI],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => GeocodeResultItemList, 0],
  ]
);
export var GeocodeResultItem = struct(
  n0,
  _GRI,
  0,
  [_PI, _PT, _T, _A, _ANC, _PCD, _P, _Di, _MV, _C, _FTo, _APc, _TZ, _PV, _MS, _PQ, _In, _MA, _SA],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => SensitiveBoolean, 0],
    [() => PostalCodeDetailsList, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => AccessPointList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    () => MatchScoreDetails,
    [() => GeocodeParsedQuery, 0],
    [() => IntersectionList, 0],
    [() => RelatedPlace, 0],
    [() => RelatedPlaceList, 0],
  ]
);
export var GetPlaceRequest = struct(
  n0,
  _GPR,
  0,
  [_PI, _AFd, _La, _PV, _IU, _K],
  [
    [() => SensitiveString, 1],
    [
      64 | 0,
      {
        [_hQ]: _af,
      },
    ],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      () => CountryCode,
      {
        [_hQ]: _pv,
      },
    ],
    [
      0,
      {
        [_hQ]: _iu,
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
export var GetPlaceResponse = struct(
  n0,
  _GPRe,
  0,
  [_PI, _PT, _T, _PB, _A, _ANC, _PCD, _P, _MV, _C, _FTo, _BCu, _Con, _OH, _APc, _ARc, _TZ, _PV, _Pho, _MA, _SA],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => Address, 0],
    [() => SensitiveBoolean, 0],
    [() => PostalCodeDetailsList, 0],
    [() => Position, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => BusinessChainList, 0],
    [() => Contacts, 0],
    [() => OpeningHoursList, 0],
    [() => AccessPointList, 0],
    [() => AccessRestrictionList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    [() => PhonemeDetails, 0],
    [() => RelatedPlace, 0],
    [() => RelatedPlaceList, 0],
  ]
);
export var Highlight = struct(n0, _Hi, 0, [_SI, _EI, _V], [1, 1, [() => SensitiveString, 0]]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __InternalServerException
);
export var Intersection = struct(
  n0,
  _I,
  0,
  [_PI, _T, _A, _P, _Di, _RD, _MV, _APc],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => AccessPointList, 0],
  ]
);
export var MatchScoreDetails = struct(n0, _MSD, 0, [_O, _Com], [1, () => ComponentMatchScores]);
export var OpeningHours = struct(
  n0,
  _OH,
  0,
  [_Dis, _ON, _Com, _C],
  [
    [() => OpeningHoursDisplayList, 0],
    [() => SensitiveBoolean, 0],
    [() => OpeningHoursComponentsList, 0],
    [() => CategoryList, 0],
  ]
);
export var OpeningHoursComponents = struct(
  n0,
  _OHC,
  0,
  [_OT, _OD, _Rec],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var ParsedQueryComponent = struct(
  n0,
  _PQC,
  0,
  [_SI, _EI, _V, _QCu],
  [1, 1, [() => SensitiveString, 0], [() => SensitiveString, 0]]
);
export var ParsedQuerySecondaryAddressComponent = struct(
  n0,
  _PQSAC,
  0,
  [_SI, _EI, _V, _Nu, _De],
  [1, 1, [() => SensitiveString, 0], [() => SensitiveString, 0], [() => SensitiveString, 0]]
);
export var PhonemeDetails = struct(
  n0,
  _PD,
  0,
  [_T, _A],
  [
    [() => PhonemeTranscriptionList, 0],
    [() => AddressComponentPhonemes, 0],
  ]
);
export var PhonemeTranscription = struct(
  n0,
  _PTh,
  0,
  [_V, _La, _Pre],
  [[() => SensitiveString, 0], 0, [() => SensitiveBoolean, 0]]
);
export var PostalCodeDetails = struct(
  n0,
  _PCD,
  0,
  [_PC, _PA, _PCT, _UZ, _UZP],
  [
    [() => SensitiveString, 0],
    [() => PostalAuthority, 0],
    [() => PostalCodeType, 0],
    [() => UspsZip, 0],
    [() => UspsZipPlus4, 0],
  ]
);
export var QueryRefinement = struct(
  n0,
  _QR,
  0,
  [_RT, _OTr, _SI, _EI],
  [[() => SensitiveString, 0], [() => SensitiveString, 0], 1, 1]
);
export var Region = struct(
  n0,
  _Re,
  0,
  [_Code_, _N],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var RegionHighlights = struct(
  n0,
  _RH,
  0,
  [_Code_, _N],
  [
    [() => HighlightList, 0],
    [() => HighlightList, 0],
  ]
);
export var RelatedPlace = struct(
  n0,
  _RP,
  0,
  [_PI, _PT, _T, _A, _P, _APc],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => Position, 0],
    [() => AccessPointList, 0],
  ]
);
export var ReverseGeocodeFilter = struct(n0, _RGF, 0, [_IPT], [64 | 0]);
export var ReverseGeocodeRequest = struct(
  n0,
  _RGR,
  0,
  [_QP, _QRu, _MR, _F, _AFd, _La, _PV, _IU, _K],
  [
    [() => Position, 0],
    [() => DistanceMeters, 0],
    1,
    () => ReverseGeocodeFilter,
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var ReverseGeocodeResponse = struct(
  n0,
  _RGRe,
  0,
  [_PB, _RI],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => ReverseGeocodeResultItemList, 0],
  ]
);
export var ReverseGeocodeResultItem = struct(
  n0,
  _RGRI,
  0,
  [_PI, _PT, _T, _A, _ANC, _PCD, _P, _Di, _MV, _C, _FTo, _APc, _TZ, _PV, _In],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => SensitiveBoolean, 0],
    [() => PostalCodeDetailsList, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => AccessPointList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    [() => IntersectionList, 0],
  ]
);
export var SearchNearbyFilter = struct(
  n0,
  _SNF,
  0,
  [_BB, _IC, _ICn, _EC, _IBC, _EBC, _IFT, _EFT],
  [
    [() => BoundingBox, 0],
    [() => CountryCodeList, 0],
    [() => FilterCategoryList, 0],
    [() => FilterCategoryList, 0],
    [() => FilterBusinessChainList, 0],
    [() => FilterBusinessChainList, 0],
    [() => FilterFoodTypeList, 0],
    [() => FilterFoodTypeList, 0],
  ]
);
export var SearchNearbyRequest = struct(
  n0,
  _SNR,
  0,
  [_QP, _QRu, _MR, _F, _AFd, _La, _PV, _IU, _NT, _K],
  [
    [() => Position, 0],
    [() => DistanceMeters, 0],
    1,
    [() => SearchNearbyFilter, 0],
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SearchNearbyResponse = struct(
  n0,
  _SNRe,
  0,
  [_PB, _RI, _NT],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => SearchNearbyResultItemList, 0],
    0,
  ]
);
export var SearchNearbyResultItem = struct(
  n0,
  _SNRI,
  0,
  [_PI, _PT, _T, _A, _ANC, _P, _Di, _MV, _C, _FTo, _BCu, _Con, _OH, _APc, _ARc, _TZ, _PV, _Pho],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => SensitiveBoolean, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => BusinessChainList, 0],
    [() => Contacts, 0],
    [() => OpeningHoursList, 0],
    [() => AccessPointList, 0],
    [() => AccessRestrictionList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    [() => PhonemeDetails, 0],
  ]
);
export var SearchTextFilter = struct(
  n0,
  _STF,
  0,
  [_BB, _Ci, _IC],
  [
    [() => BoundingBox, 0],
    [() => FilterCircle, 0],
    [() => CountryCodeList, 0],
  ]
);
export var SearchTextRequest = struct(
  n0,
  _STR,
  0,
  [_QT, _QI, _MR, _BP, _F, _AFd, _La, _PV, _IU, _NT, _K],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    1,
    [() => Position, 0],
    [() => SearchTextFilter, 0],
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SearchTextResponse = struct(
  n0,
  _STRe,
  0,
  [_PB, _RI, _NT],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => SearchTextResultItemList, 0],
    0,
  ]
);
export var SearchTextResultItem = struct(
  n0,
  _STRI,
  0,
  [_PI, _PT, _T, _A, _ANC, _P, _Di, _MV, _C, _FTo, _BCu, _Con, _OH, _APc, _ARc, _TZ, _PV, _Pho],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => SensitiveString, 0],
    [() => Address, 0],
    [() => SensitiveBoolean, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => BusinessChainList, 0],
    [() => Contacts, 0],
    [() => OpeningHoursList, 0],
    [() => AccessPointList, 0],
    [() => AccessRestrictionList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    [() => PhonemeDetails, 0],
  ]
);
export var SecondaryAddressComponent = struct(n0, _SACe, 0, [_Nu], [[() => SensitiveString, 0]]);
export var SecondaryAddressComponentMatchScore = struct(n0, _SACMS, 0, [_Nu], [1]);
export var StreetComponents = struct(
  n0,
  _SC,
  0,
  [_BN, _Ty, _TP, _TS, _Pref, _Su, _Dir, _La],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    0,
    0,
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    0,
  ]
);
export var SubRegion = struct(
  n0,
  _SR,
  0,
  [_Code_, _N],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var SubRegionHighlights = struct(
  n0,
  _SRH,
  0,
  [_Code_, _N],
  [
    [() => HighlightList, 0],
    [() => HighlightList, 0],
  ]
);
export var SuggestAddressHighlights = struct(n0, _SAH, 0, [_L], [[() => HighlightList, 0]]);
export var SuggestFilter = struct(
  n0,
  _SF,
  0,
  [_BB, _Ci, _IC],
  [
    [() => BoundingBox, 0],
    [() => FilterCircle, 0],
    [() => CountryCodeList, 0],
  ]
);
export var SuggestHighlights = struct(
  n0,
  _SH,
  0,
  [_T, _A],
  [
    [() => HighlightList, 0],
    [() => SuggestAddressHighlights, 0],
  ]
);
export var SuggestPlaceResult = struct(
  n0,
  _SPR,
  0,
  [_PI, _PT, _A, _P, _Di, _MV, _C, _FTo, _BCu, _APc, _ARc, _TZ, _PV, _Pho],
  [
    [() => SensitiveString, 0],
    [() => PlaceType, 0],
    [() => Address, 0],
    [() => Position, 0],
    [() => DistanceMeters, 0],
    [() => BoundingBox, 0],
    [() => CategoryList, 0],
    [() => FoodTypeList, 0],
    [() => BusinessChainList, 0],
    [() => AccessPointList, 0],
    [() => AccessRestrictionList, 0],
    [() => TimeZone, 0],
    [() => CountryCode3, 0],
    [() => PhonemeDetails, 0],
  ]
);
export var SuggestQueryResult = struct(n0, _SQR, 0, [_QI, _QTu], [[() => SensitiveString, 0], 0]);
export var SuggestRequest = struct(
  n0,
  _SRu,
  0,
  [_QT, _MR, _MQR, _BP, _F, _AFd, _La, _PV, _IU, _K],
  [
    [() => SensitiveString, 0],
    1,
    1,
    [() => Position, 0],
    [() => SuggestFilter, 0],
    64 | 0,
    0,
    [() => CountryCode, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var SuggestResponse = struct(
  n0,
  _SRug,
  0,
  [_PB, _RI, _QRue],
  [
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => SuggestResultItemList, 0],
    [() => QueryRefinementList, 0],
  ]
);
export var SuggestResultItem = struct(
  n0,
  _SRI,
  0,
  [_T, _SRIT, _Pl, _Q, _H],
  [
    [() => SensitiveString, 0],
    0,
    [() => SuggestPlaceResult, 0],
    [() => SuggestQueryResult, 0],
    [() => SuggestHighlights, 0],
  ]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ThrottlingException
);
export var TimeZone = struct(
  n0,
  _TZ,
  0,
  [_N, _Of, _OS],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    [() => DurationSeconds, 0],
  ]
);
export var UspsZip = struct(n0, _UZ, 0, [_ZCC], [[() => ZipClassificationCode, 0]]);
export var UspsZipPlus4 = struct(n0, _UZP, 0, [_RTC], [[() => RecordTypeCode, 0]]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Rea, _FL],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      () => ValidationExceptionFieldList,
      {
        [_jN]: _fL,
      },
    ],
  ],

  __ValidationException
);
export var ValidationExceptionField = struct(
  n0,
  _VEF,
  0,
  [_N, _M],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var AccessPointList = list(n0, _APL, 0, [() => AccessPoint, 0]);
export var AccessRestrictionList = list(n0, _ARL, 0, [() => AccessRestriction, 0]);
export var AutocompleteAdditionalFeatureList = 64 | 0;

export var AutocompleteFilterPlaceTypeList = 64 | 0;

export var AutocompleteResultItemList = list(n0, _ARIL, 0, [() => AutocompleteResultItem, 0]);
export var BoundingBox = list(n0, _BB, 8, 1);
export var BusinessChainList = list(n0, _BCL, 0, [() => BusinessChain, 0]);
export var CategoryList = list(n0, _CL, 0, [() => Category, 0]);
export var ContactDetailsList = list(n0, _CDL, 0, [() => ContactDetails, 0]);
export var CountryCodeList = list(n0, _CCL, 0, [() => CountryCode, 0]);
export var FilterBusinessChainList = list(n0, _FBCL, 0, [() => SensitiveString, 0]);
export var FilterCategoryList = list(n0, _FCL, 0, [() => SensitiveString, 0]);
export var FilterFoodTypeList = list(n0, _FFTL, 0, [() => SensitiveString, 0]);
export var FoodTypeList = list(n0, _FTL, 0, [() => FoodType, 0]);
export var GeocodeAdditionalFeatureList = 64 | 0;

export var GeocodeFilterPlaceTypeList = list(n0, _GFPTL, 0, [() => GeocodeFilterPlaceType, 0]);
export var GeocodeResultItemList = list(n0, _GRIL, 0, [() => GeocodeResultItem, 0]);
export var GetPlaceAdditionalFeatureList = 64 | 0;

export var HighlightList = list(n0, _HL, 0, [() => Highlight, 0]);
export var IntersectionHighlightsList = list(n0, _IHL, 0, [() => HighlightList, 0]);
export var IntersectionList = list(n0, _IL, 0, [() => Intersection, 0]);
export var IntersectionStreetList = 64 | 0;

export var MatchScoreList = 64 | 1;

export var OpeningHoursComponentsList = list(n0, _OHCL, 0, [() => OpeningHoursComponents, 0]);
export var OpeningHoursDisplayList = list(n0, _OHDL, 0, [() => OpeningHoursDisplay, 0]);
export var OpeningHoursList = list(n0, _OHL, 0, [() => OpeningHours, 0]);
export var ParsedQueryComponentList = list(n0, _PQCL, 0, [() => ParsedQueryComponent, 0]);
export var ParsedQuerySecondaryAddressComponentList = list(n0, _PQSACL, 0, [
  () => ParsedQuerySecondaryAddressComponent,
  0,
]);
export var PhonemeTranscriptionList = list(n0, _PTL, 0, [() => PhonemeTranscription, 0]);
export var Position = list(n0, _P, 8, 1);
export var PostalCodeDetailsList = list(n0, _PCDL, 0, [() => PostalCodeDetails, 0]);
export var QueryRefinementList = list(n0, _QRL, 0, [() => QueryRefinement, 0]);
export var RelatedPlaceList = list(n0, _RPL, 0, [() => RelatedPlace, 0]);
export var ReverseGeocodeAdditionalFeatureList = 64 | 0;

export var ReverseGeocodeFilterPlaceTypeList = 64 | 0;

export var ReverseGeocodeResultItemList = list(n0, _RGRIL, 0, [() => ReverseGeocodeResultItem, 0]);
export var SearchNearbyAdditionalFeatureList = 64 | 0;

export var SearchNearbyResultItemList = list(n0, _SNRIL, 0, [() => SearchNearbyResultItem, 0]);
export var SearchTextAdditionalFeatureList = 64 | 0;

export var SearchTextResultItemList = list(n0, _STRIL, 0, [() => SearchTextResultItem, 0]);
export var SecondaryAddressComponentList = list(n0, _SACL, 0, [() => SecondaryAddressComponent, 0]);
export var SecondaryAddressComponentMatchScoreList = list(n0, _SACMSL, 0, () => SecondaryAddressComponentMatchScore);
export var StreetComponentsList = list(n0, _SCL, 0, [() => StreetComponents, 0]);
export var SuggestAdditionalFeatureList = 64 | 0;

export var SuggestResultItemList = list(n0, _SRIL, 0, [() => SuggestResultItem, 0]);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, [() => ValidationExceptionField, 0]);
export var Autocomplete = op(
  n0,
  _Au,
  {
    [_h]: ["POST", "/autocomplete", 200],
  },
  () => AutocompleteRequest,
  () => AutocompleteResponse
);
export var Geocode = op(
  n0,
  _G,
  {
    [_h]: ["POST", "/geocode", 200],
  },
  () => GeocodeRequest,
  () => GeocodeResponse
);
export var GetPlace = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/place/{PlaceId}", 200],
  },
  () => GetPlaceRequest,
  () => GetPlaceResponse
);
export var ReverseGeocode = op(
  n0,
  _RG,
  {
    [_h]: ["POST", "/reverse-geocode", 200],
  },
  () => ReverseGeocodeRequest,
  () => ReverseGeocodeResponse
);
export var SearchNearby = op(
  n0,
  _SN,
  {
    [_h]: ["POST", "/search-nearby", 200],
  },
  () => SearchNearbyRequest,
  () => SearchNearbyResponse
);
export var SearchText = op(
  n0,
  _ST,
  {
    [_h]: ["POST", "/search-text", 200],
  },
  () => SearchTextRequest,
  () => SearchTextResponse
);
export var Suggest = op(
  n0,
  _Sug,
  {
    [_h]: ["POST", "/suggest", 200],
  },
  () => SuggestRequest,
  () => SuggestResponse
);
