// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _AD,
  _Ad,
  _Add,
  _Addr,
  _Addre,
  _ADtt,
  _AId,
  _AN,
  _ASK,
  _ASKd,
  _aSKL,
  _At,
  _BA,
  _BD,
  _BEA,
  _BGP,
  _BGPE,
  _BGPEL,
  _BGPR,
  _BGPRa,
  _BN,
  _BPN,
  _C,
  _CA,
  _CAa,
  _CAD,
  _CAu,
  _CCA,
  _CO,
  _Co,
  _Cod,
  _Cou,
  _CP,
  _CPR,
  _CPr,
  _CPRr,
  _CSD,
  _CSDR,
  _CSDRr,
  _CSE,
  _CSER,
  _CSERr,
  _CT,
  _D,
  _DD,
  _Di,
  _Dim,
  _DL,
  _DN,
  _DNi,
  _DT,
  _EA,
  _EI,
  _ELVPD,
  _Em,
  _EP,
  _EPL,
  _Er,
  _Fa,
  _FBI,
  _FBKV,
  _fBL,
  _FNi,
  _G,
  _Gr,
  _Gro,
  _GS,
  _GSD,
  _GSDR,
  _GSDRe,
  _GSM,
  _GSMR,
  _GSMRe,
  _h,
  _HPN,
  _hQ,
  _I,
  _It,
  _jN,
  _KN,
  _KV,
  _LN,
  _LO,
  _M,
  _MA,
  _MN,
  _MPN,
  _MR,
  _mr,
  _NT,
  _nt,
  _P,
  _PA,
  _PC,
  _PD,
  _PEA,
  _Ph,
  _PI,
  _PIr,
  _PL,
  _PN,
  _PPL,
  _PQF,
  _PQR,
  _Pr,
  _Pro,
  _PT,
  _PTD,
  _PTr,
  _PTS,
  _PTV,
  _QR,
  _SA,
  _SCt,
  _SDA,
  _SDN,
  _SG,
  _SGe,
  _SGL,
  _SGS,
  _SP,
  _SPR,
  _SPRe,
  _SQ,
  _SSL,
  _SSo,
  _SSou,
  _sST,
  _sSTe,
  _sSTen,
  _sSTensi,
  _St,
  _Sta,
  _STo,
  _Ta,
  _Ty,
  _UA,
  _UAp,
  _UP,
  _UPR,
  _UPRp,
  _V,
  n0,
  sensitiveText,
} from "./schemas_0";
import { ConditionOverrides } from "./schemas_14_Get";

/* eslint no-var: 0 */

export var Gender = sim(n0, _G, 0, 8);
export var PartyType = sim(n0, _PT, 0, 8);
export var ProfileType = sim(n0, _PTr, 0, 8);
export var sensitiveString0To1000 = sim(n0, _sST, 0, 8);
export var sensitiveString0To255 = sim(n0, _sSTe, 0, 8);
export var sensitiveString1To1000 = sim(n0, _sSTen, 0, 8);
export var sensitiveString1To255 = sim(n0, _sSTensi, 0, 8);
export var AdditionalSearchKey = struct(n0, _ASK, 0, [_KN, _V], [0, 64 | 0]);
export var Address = struct(
  n0,
  _A,
  8,
  [_Ad, _Add, _Addr, _Addre, _C, _Co, _St, _P, _Cou, _PC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var AddressDimension = struct(
  n0,
  _AD,
  0,
  [_C, _Cou, _Co, _PC, _P, _St],
  [
    [
      () => ProfileDimension,
      {
        [_jN]: _C,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _Cou,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _Co,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _PC,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _P,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _St,
      },
    ],
  ]
);
export var AttributeDimension = struct(
  n0,
  _ADtt,
  0,
  [_DT, _V],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _V,
      },
    ],
  ]
);
export var BatchGetProfileError = struct(n0, _BGPE, 0, [_Cod, _M, _PI], [0, 0, 0]);
export var BatchGetProfileRequest = struct(n0, _BGPR, 0, [_DN, _PIr], [[0, 1], 64 | 0]);
export var BatchGetProfileResponse = struct(
  n0,
  _BGPRa,
  0,
  [_Er, _Pr],
  [() => BatchGetProfileErrorList, [() => ProfileList, 0]]
);
export var CalculatedAttributeDimension = struct(
  n0,
  _CAD,
  0,
  [_DT, _V, _CO],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _V,
      },
    ],
    [
      () => ConditionOverrides,
      {
        [_jN]: _CO,
      },
    ],
  ]
);
export var ContactPreference = struct(n0, _CP, 0, [_KN, _KV, _PI, _CT], [0, 0, 0, 0]);
export var CreateProfileRequest = struct(
  n0,
  _CPR,
  0,
  [
    _DN,
    _AN,
    _AId,
    _PT,
    _BN,
    _FNi,
    _MN,
    _LN,
    _BD,
    _G,
    _PN,
    _MPN,
    _HPN,
    _BPN,
    _EA,
    _PEA,
    _BEA,
    _A,
    _SA,
    _MA,
    _BA,
    _At,
    _PTS,
    _GS,
    _PTr,
    _EP,
  ],
  [
    [0, 1],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To1000, 0],
    [() => PartyType, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => Gender, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Attributes, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => ProfileType, 0],
    [() => EngagementPreferences, 0],
  ]
);
export var CreateProfileResponse = struct(n0, _CPRr, 0, [_PI], [0]);
export var CreateSegmentDefinitionRequest = struct(
  n0,
  _CSDR,
  0,
  [_DN, _SDN, _DNi, _D, _SG, _Ta],
  [[0, 1], [0, 1], 0, [() => sensitiveText, 0], [() => SegmentGroup, 0], 128 | 0]
);
export var CreateSegmentDefinitionResponse = struct(
  n0,
  _CSDRr,
  0,
  [_SDN, _DNi, _D, _CA, _SDA, _Ta],
  [
    [
      0,
      {
        [_jN]: _SDN,
      },
    ],
    [
      0,
      {
        [_jN]: _DNi,
      },
    ],
    [
      () => sensitiveText,
      {
        [_jN]: _D,
      },
    ],
    [
      4,
      {
        [_jN]: _CA,
      },
    ],
    [
      0,
      {
        [_jN]: _SDA,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _Ta,
      },
    ],
  ]
);
export var CreateSegmentEstimateRequest = struct(
  n0,
  _CSER,
  0,
  [_DN, _SQ],
  [
    [0, 1],
    [() => SegmentGroupStructure, 0],
  ]
);
export var CreateSegmentEstimateResponse = struct(n0, _CSERr, 0, [_DN, _EI, _SCt], [0, 0, [1, 32]]);
export var DateDimension = struct(
  n0,
  _DD,
  0,
  [_DT, _V],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _V,
      },
    ],
  ]
);
export var EngagementPreferences = struct(
  n0,
  _EP,
  8,
  [_Ph, _Em],
  [() => PhonePreferenceList, () => EmailPreferenceList]
);
export var ExtraLengthValueProfileDimension = struct(
  n0,
  _ELVPD,
  0,
  [_DT, _V],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _V,
      },
    ],
  ]
);
export var FoundByKeyValue = struct(n0, _FBKV, 0, [_KN, _V], [0, 64 | 0]);
export var GetSegmentDefinitionRequest = struct(
  n0,
  _GSDR,
  0,
  [_DN, _SDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSegmentDefinitionResponse = struct(
  n0,
  _GSDRe,
  0,
  [_SDN, _DNi, _D, _SG, _SDA, _CA, _Ta],
  [
    [
      0,
      {
        [_jN]: _SDN,
      },
    ],
    [
      0,
      {
        [_jN]: _DNi,
      },
    ],
    [
      () => sensitiveText,
      {
        [_jN]: _D,
      },
    ],
    [
      () => SegmentGroup,
      {
        [_jN]: _SG,
      },
    ],
    [
      0,
      {
        [_jN]: _SDA,
      },
    ],
    [
      4,
      {
        [_jN]: _CA,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _Ta,
      },
    ],
  ]
);
export var GetSegmentMembershipRequest = struct(
  n0,
  _GSMR,
  0,
  [_DN, _SDN, _PIr],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _PIr,
      },
    ],
  ]
);
export var GetSegmentMembershipResponse = struct(
  n0,
  _GSMRe,
  0,
  [_SDN, _Pr, _Fa],
  [
    [
      0,
      {
        [_jN]: _SDN,
      },
    ],
    [
      () => Profiles,
      {
        [_jN]: _Pr,
      },
    ],
    [
      () => Failures,
      {
        [_jN]: _Fa,
      },
    ],
  ]
);
export var Group = struct(
  n0,
  _Gro,
  0,
  [_Di, _SSo, _STo, _Ty],
  [
    [
      () => DimensionList,
      {
        [_jN]: _Di,
      },
    ],
    [
      () => SourceSegmentList,
      {
        [_jN]: _SSo,
      },
    ],
    [
      0,
      {
        [_jN]: _STo,
      },
    ],
    [
      0,
      {
        [_jN]: _Ty,
      },
    ],
  ]
);
export var Profile = struct(
  n0,
  _Pro,
  0,
  [
    _PI,
    _AN,
    _AId,
    _PT,
    _BN,
    _FNi,
    _MN,
    _LN,
    _BD,
    _G,
    _PN,
    _MPN,
    _HPN,
    _BPN,
    _EA,
    _PEA,
    _BEA,
    _A,
    _SA,
    _MA,
    _BA,
    _At,
    _FBI,
    _PTS,
    _GS,
    _PTr,
    _EP,
  ],
  [
    0,
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To1000, 0],
    [() => PartyType, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => Gender, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Address, 0],
    [() => Attributes, 0],
    () => foundByList,
    [() => sensitiveString1To255, 0],
    [() => sensitiveString1To255, 0],
    [() => ProfileType, 0],
    [() => EngagementPreferences, 0],
  ]
);
export var ProfileAttributes = struct(
  n0,
  _PA,
  8,
  [
    _AN,
    _AId,
    _FNi,
    _LN,
    _MN,
    _GS,
    _PTS,
    _BD,
    _PN,
    _BN,
    _BPN,
    _HPN,
    _MPN,
    _EA,
    _PEA,
    _BEA,
    _A,
    _SA,
    _MA,
    _BA,
    _At,
    _PTr,
  ],
  [
    [
      () => ProfileDimension,
      {
        [_jN]: _AN,
      },
    ],
    [
      () => ExtraLengthValueProfileDimension,
      {
        [_jN]: _AId,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _FNi,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _LN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _MN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _GS,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _PTS,
      },
    ],
    [
      () => DateDimension,
      {
        [_jN]: _BD,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _PN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _BN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _BPN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _HPN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _MPN,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _EA,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _PEA,
      },
    ],
    [
      () => ProfileDimension,
      {
        [_jN]: _BEA,
      },
    ],
    [
      () => AddressDimension,
      {
        [_jN]: _A,
      },
    ],
    [
      () => AddressDimension,
      {
        [_jN]: _SA,
      },
    ],
    [
      () => AddressDimension,
      {
        [_jN]: _MA,
      },
    ],
    [
      () => AddressDimension,
      {
        [_jN]: _BA,
      },
    ],
    [
      () => CustomAttributes,
      {
        [_jN]: _At,
      },
    ],
    [
      () => ProfileTypeDimension,
      {
        [_jN]: _PTr,
      },
    ],
  ]
);
export var ProfileDimension = struct(
  n0,
  _PD,
  0,
  [_DT, _V],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _V,
      },
    ],
  ]
);
export var ProfileQueryFailures = struct(
  n0,
  _PQF,
  0,
  [_PI, _M, _Sta],
  [
    [
      0,
      {
        [_jN]: _PI,
      },
    ],
    [
      0,
      {
        [_jN]: _M,
      },
    ],
    [
      1,
      {
        [_jN]: _Sta,
      },
    ],
  ]
);
export var ProfileQueryResult = struct(
  n0,
  _PQR,
  0,
  [_PI, _QR, _Pro],
  [
    [
      0,
      {
        [_jN]: _PI,
      },
    ],
    [
      0,
      {
        [_jN]: _QR,
      },
    ],
    [
      () => Profile,
      {
        [_jN]: _Pro,
      },
    ],
  ]
);
export var ProfileTypeDimension = struct(
  n0,
  _PTD,
  0,
  [_DT, _V],
  [
    [
      0,
      {
        [_jN]: _DT,
      },
    ],
    [
      () => ProfileTypeValues,
      {
        [_jN]: _V,
      },
    ],
  ]
);
export var SearchProfilesRequest = struct(
  n0,
  _SPR,
  0,
  [_NT, _MR, _DN, _KN, _V, _ASKd, _LO],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    0,
    64 | 0,
    () => additionalSearchKeysList,
    0,
  ]
);
export var SearchProfilesResponse = struct(n0, _SPRe, 0, [_It, _NT], [[() => ProfileList, 0], 0]);
export var SegmentGroup = struct(
  n0,
  _SGe,
  8,
  [_Gr, _I],
  [
    [
      () => SegmentGroupList,
      {
        [_jN]: _Gr,
      },
    ],
    [
      0,
      {
        [_jN]: _I,
      },
    ],
  ]
);
export var SegmentGroupStructure = struct(n0, _SGS, 0, [_Gr, _I], [[() => SegmentGroupList, 0], 0]);
export var SourceSegment = struct(
  n0,
  _SSou,
  0,
  [_SDN],
  [
    [
      0,
      {
        [_jN]: _SDN,
      },
    ],
  ]
);
export var UpdateAddress = struct(
  n0,
  _UA,
  8,
  [_Ad, _Add, _Addr, _Addre, _C, _Co, _St, _P, _Cou, _PC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateProfileRequest = struct(
  n0,
  _UPR,
  0,
  [
    _DN,
    _PI,
    _AId,
    _AN,
    _PT,
    _BN,
    _FNi,
    _MN,
    _LN,
    _BD,
    _G,
    _PN,
    _MPN,
    _HPN,
    _BPN,
    _EA,
    _PEA,
    _BEA,
    _A,
    _SA,
    _MA,
    _BA,
    _At,
    _PTS,
    _GS,
    _PTr,
    _EP,
  ],
  [
    [0, 1],
    0,
    [() => sensitiveString0To1000, 0],
    [() => sensitiveString0To255, 0],
    [() => PartyType, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => Gender, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => UpdateAddress, 0],
    [() => UpdateAddress, 0],
    [() => UpdateAddress, 0],
    [() => UpdateAddress, 0],
    [() => UpdateAttributes, 0],
    [() => sensitiveString0To255, 0],
    [() => sensitiveString0To255, 0],
    [() => ProfileType, 0],
    [() => EngagementPreferences, 0],
  ]
);
export var UpdateProfileResponse = struct(n0, _UPRp, 0, [_PI], [0]);
export var additionalSearchKeysList = list(n0, _aSKL, 0, () => AdditionalSearchKey);
export var BatchGetProfileErrorList = list(n0, _BGPEL, 0, () => BatchGetProfileError);
export var BatchGetProfileIdList = 64 | 0;

export var DateValues = 64 | 0;

export var DimensionList = list(n0, _DL, 0, [() => Dimension, 0]);
export var EmailPreferenceList = list(n0, _EPL, 0, () => ContactPreference);
export var ExtraLengthValues = 64 | 0;

export var Failures = list(n0, _Fa, 0, [() => ProfileQueryFailures, 0]);
export var foundByList = list(n0, _fBL, 0, () => FoundByKeyValue);
export var PhonePreferenceList = list(n0, _PPL, 0, () => ContactPreference);
export var ProfileIds = 64 | 0;

export var ProfileList = list(n0, _PL, 0, [() => Profile, 0]);
export var Profiles = list(n0, _Pr, 0, [() => ProfileQueryResult, 0]);
export var ProfileTypeValues = list(n0, _PTV, 0, [() => ProfileType, 0]);
export var SegmentGroupList = list(n0, _SGL, 0, [() => Group, 0]);
export var SourceSegmentList = list(n0, _SSL, 0, [() => SourceSegment, 0]);
export var Values = 64 | 0;

export var Attributes = map(n0, _At, 8, 0, 0);
export var CalculatedCustomAttributes = map(n0, _CCA, 0, [0, 0], [() => CalculatedAttributeDimension, 0]);
export var CustomAttributes = map(n0, _CAu, 0, [0, 0], [() => AttributeDimension, 0]);
export var UpdateAttributes = map(n0, _UAp, 8, 0, 0);
export var Dimension = uni(
  n0,
  _Dim,
  0,
  [_PA, _CAa],
  [
    [
      () => ProfileAttributes,
      {
        [_jN]: _PA,
      },
    ],
    [
      () => CalculatedCustomAttributes,
      {
        [_jN]: _CAa,
      },
    ],
  ]
);
export var BatchGetProfile = op(
  n0,
  _BGP,
  {
    [_h]: ["POST", "/domains/{DomainName}/batch-get-profiles", 200],
  },
  () => BatchGetProfileRequest,
  () => BatchGetProfileResponse
);
export var CreateProfile = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles", 200],
  },
  () => CreateProfileRequest,
  () => CreateProfileResponse
);
export var CreateSegmentDefinition = op(
  n0,
  _CSD,
  {
    [_h]: ["POST", "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}", 200],
  },
  () => CreateSegmentDefinitionRequest,
  () => CreateSegmentDefinitionResponse
);
export var CreateSegmentEstimate = op(
  n0,
  _CSE,
  {
    [_h]: ["POST", "/domains/{DomainName}/segment-estimates", 200],
  },
  () => CreateSegmentEstimateRequest,
  () => CreateSegmentEstimateResponse
);
export var GetSegmentDefinition = op(
  n0,
  _GSD,
  {
    [_h]: ["GET", "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}", 200],
  },
  () => GetSegmentDefinitionRequest,
  () => GetSegmentDefinitionResponse
);
export var GetSegmentMembership = op(
  n0,
  _GSM,
  {
    [_h]: ["POST", "/domains/{DomainName}/segments/{SegmentDefinitionName}/membership", 200],
  },
  () => GetSegmentMembershipRequest,
  () => GetSegmentMembershipResponse
);
export var SearchProfiles = op(
  n0,
  _SP,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/search", 200],
  },
  () => SearchProfilesRequest,
  () => SearchProfilesResponse
);
export var UpdateProfile = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/domains/{DomainName}/profiles", 200],
  },
  () => UpdateProfileRequest,
  () => UpdateProfileResponse
);
