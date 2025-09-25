// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  InvalidRequestException as __InvalidRequestException,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _A,
  _Ac,
  _AL,
  _AR,
  _ARR,
  _AZ,
  _C,
  _c,
  _CA,
  _CE,
  _CI,
  _CLP,
  _CLPR,
  _CLPRr,
  _Co,
  _CR,
  _CRC,
  _CRCA,
  _CRCAL,
  _CRCDR,
  _CRCR,
  _CRCRR,
  _CRCRr,
  _CRCT,
  _CRCTL,
  _CRCTr,
  _CT,
  _D,
  _DC,
  _DLP,
  _DLPR,
  _DLPRe,
  _DM,
  _DP,
  _DPT,
  _dPT,
  _DR,
  _DRe,
  _E,
  _e,
  _EBV,
  _EBVx,
  _EC,
  _ED,
  _EDVT,
  _EDVTL,
  _EH,
  _EHS,
  _En,
  _EOOSF,
  _EP,
  _ERA,
  _ES,
  _ET,
  _ETL,
  _ETx,
  _ETxe,
  _EVT,
  _FRR,
  _GLP,
  _GLPe,
  _GLPR,
  _GLPRe,
  _GLPRet,
  _GLPReti,
  _h,
  _hE,
  _hQ,
  _I,
  _IRE,
  _ISE,
  _IU,
  _K,
  _L,
  _LEE,
  _LP,
  _LPS,
  _LPSL,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MEP,
  _MRC,
  _N,
  _NR,
  _P,
  _PA,
  _PD,
  _PI,
  _pI,
  _PIo,
  _PL,
  _Po,
  _Pol,
  _PT,
  _RA,
  _RAT,
  _RI,
  _RIe,
  _RL,
  _RNFE,
  _RP,
  _RR,
  _RT,
  _rT,
  _RTe,
  _S,
  _s,
  _Sc,
  _Sch,
  _Sche,
  _Scr,
  _se,
  _SL,
  _SLc,
  _SM,
  _SO,
  _SR,
  _SRh,
  _St,
  _T,
  _TA,
  _Ta,
  _Tag,
  _Ti,
  _TK,
  _tK,
  _TR,
  _TRa,
  _TRR,
  _TRRa,
  _TT,
  _tT,
  _TTA,
  _tTA,
  _TTAL,
  _TTL,
  _Ty,
  _UI,
  _UIU,
  _ULP,
  _ULPR,
  _ULPRp,
  _UR,
  _URR,
  _URRn,
  _V,
  _VT,
  _VTL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(n0, _A, 0, [_N, _CRC], [0, () => CrossRegionCopyActionList]);
export var ArchiveRetainRule = struct(n0, _ARR, 0, [_RAT], [() => RetentionArchiveTier]);
export var ArchiveRule = struct(n0, _AR, 0, [_RR], [() => ArchiveRetainRule]);
export var CreateLifecyclePolicyRequest = struct(
  n0,
  _CLPR,
  0,
  [_ERA, _D, _S, _PD, _T, _DP, _CI, _RI, _CT, _ED, _CRCT, _E],
  [0, 0, 0, () => PolicyDetails, 128 | 0, 0, 1, 1, 2, 2, () => CrossRegionCopyTargetList, () => Exclusions]
);
export var CreateLifecyclePolicyResponse = struct(n0, _CLPRr, 0, [_PI], [0]);
export var CreateRule = struct(n0, _CR, 0, [_L, _I, _IU, _Ti, _CE, _Sc], [0, 1, 0, 64 | 0, 0, () => ScriptsList]);
export var CrossRegionCopyAction = struct(
  n0,
  _CRCA,
  0,
  [_Ta, _EC, _RR],
  [0, () => EncryptionConfiguration, () => CrossRegionCopyRetainRule]
);
export var CrossRegionCopyDeprecateRule = struct(n0, _CRCDR, 0, [_I, _IU], [1, 0]);
export var CrossRegionCopyRetainRule = struct(n0, _CRCRR, 0, [_I, _IU], [1, 0]);
export var CrossRegionCopyRule = struct(
  n0,
  _CRCR,
  0,
  [_TR, _Ta, _En, _CA, _CT, _RR, _DR],
  [0, 0, 2, 0, 2, () => CrossRegionCopyRetainRule, () => CrossRegionCopyDeprecateRule]
);
export var CrossRegionCopyTarget = struct(n0, _CRCTr, 0, [_TR], [0]);
export var DeleteLifecyclePolicyRequest = struct(n0, _DLPR, 0, [_PI], [[0, 1]]);
export var DeleteLifecyclePolicyResponse = struct(n0, _DLPRe, 0, [], []);
export var DeprecateRule = struct(n0, _DR, 0, [_C, _I, _IU], [1, 1, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_En, _CA], [2, 0]);
export var EventParameters = struct(n0, _EP, 0, [_ET, _SO, _DRe], [0, 64 | 0, 0]);
export var EventSource = struct(n0, _ES, 0, [_Ty, _P], [0, () => EventParameters]);
export var Exclusions = struct(n0, _E, 0, [_EBV, _EVT, _ETx], [2, 64 | 0, () => ExcludeTagsList]);
export var FastRestoreRule = struct(n0, _FRR, 0, [_C, _I, _IU, _AZ], [1, 1, 0, 64 | 0]);
export var GetLifecyclePoliciesRequest = struct(
  n0,
  _GLPR,
  0,
  [_PIo, _S, _RT, _TT, _TTA, _DPT],
  [
    [
      64 | 0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tTA,
      },
    ],
    [
      0,
      {
        [_hQ]: _dPT,
      },
    ],
  ]
);
export var GetLifecyclePoliciesResponse = struct(n0, _GLPRe, 0, [_Po], [() => LifecyclePolicySummaryList]);
export var GetLifecyclePolicyRequest = struct(n0, _GLPRet, 0, [_PI], [[0, 1]]);
export var GetLifecyclePolicyResponse = struct(n0, _GLPReti, 0, [_Pol], [() => LifecyclePolicy]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_M, _Co],
  [0, 0],

  __InternalServerException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Co, _RP, _MEP],
  [0, 0, 64 | 0, 64 | 0],

  __InvalidRequestException
);
export var LifecyclePolicy = struct(
  n0,
  _LP,
  0,
  [_PI, _D, _S, _SM, _ERA, _DC, _DM, _PD, _T, _PA, _DP],
  [0, 0, 0, 0, 0, 5, 5, () => PolicyDetails, 128 | 0, 0, 2]
);
export var LifecyclePolicySummary = struct(n0, _LPS, 0, [_PI, _D, _S, _T, _PT, _DP], [0, 0, 0, 128 | 0, 0, 2]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _Co, _RTe],
  [0, 0, 0],

  __LimitExceededException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [128 | 0]);
export var _Parameters = struct(n0, _P, 0, [_EBVx, _NR, _EDVT], [2, 2, () => ExcludeDataVolumeTagList]);
export var PolicyDetails = struct(
  n0,
  _PD,
  0,
  [_PT, _RT, _RL, _TT, _Sch, _P, _ES, _Ac, _PL, _RTe, _CI, _RI, _CT, _CRCT, _ED, _E],
  [
    0,
    64 | 0,
    64 | 0,
    () => TargetTagList,
    () => ScheduleList,
    () => _Parameters,
    () => EventSource,
    () => ActionList,
    0,
    0,
    1,
    1,
    2,
    () => CrossRegionCopyTargetList,
    2,
    () => Exclusions,
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _Co, _RTe, _RIe],
  [0, 0, 0, 64 | 0],

  __ResourceNotFoundException
);
export var RetainRule = struct(n0, _RR, 0, [_C, _I, _IU], [1, 1, 0]);
export var RetentionArchiveTier = struct(n0, _RAT, 0, [_C, _I, _IU], [1, 1, 0]);
export var Schedule = struct(
  n0,
  _Sche,
  0,
  [_N, _CT, _TTA, _VT, _CR, _RR, _FRR, _CRCRr, _SR, _DR, _AR],
  [
    0,
    2,
    () => TagsToAddList,
    () => VariableTagsList,
    () => CreateRule,
    () => RetainRule,
    () => FastRestoreRule,
    () => CrossRegionCopyRules,
    () => ShareRules,
    () => DeprecateRule,
    () => ArchiveRule,
  ]
);
export var Script = struct(n0, _Scr, 0, [_St, _EHS, _EH, _EOOSF, _ETxe, _MRC], [64 | 0, 0, 0, 2, 1, 1]);
export var ShareRule = struct(n0, _SRh, 0, [_TA, _UI, _UIU], [64 | 0, 1, 0]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateLifecyclePolicyRequest = struct(
  n0,
  _ULPR,
  0,
  [_PI, _ERA, _S, _D, _PD, _CI, _RI, _CT, _ED, _CRCT, _E],
  [[0, 1], 0, 0, 0, () => PolicyDetails, 1, 1, 2, 2, () => CrossRegionCopyTargetList, () => Exclusions]
);
export var UpdateLifecyclePolicyResponse = struct(n0, _ULPRp, 0, [], []);
export var Unit = "unit" as const;

export var ActionList = list(n0, _AL, 0, () => Action);
export var AvailabilityZoneList = 64 | 0;

export var CrossRegionCopyActionList = list(n0, _CRCAL, 0, () => CrossRegionCopyAction);
export var CrossRegionCopyRules = list(n0, _CRCRr, 0, () => CrossRegionCopyRule);
export var CrossRegionCopyTargetList = list(n0, _CRCTL, 0, () => CrossRegionCopyTarget);
export var ExcludeDataVolumeTagList = list(n0, _EDVTL, 0, () => Tag);
export var ExcludeTagsList = list(n0, _ETL, 0, () => Tag);
export var ExcludeVolumeTypesList = 64 | 0;

export var LifecyclePolicySummaryList = list(n0, _LPSL, 0, () => LifecyclePolicySummary);
export var ParameterList = 64 | 0;

export var PolicyIdList = 64 | 0;

export var ResourceLocationList = 64 | 0;

export var ResourceTypeValuesList = 64 | 0;

export var ScheduleList = list(n0, _SL, 0, () => Schedule);
export var ScriptsList = list(n0, _SLc, 0, () => Script);
export var ShareRules = list(n0, _SR, 0, () => ShareRule);
export var ShareTargetAccountList = 64 | 0;

export var SnapshotOwnerList = 64 | 0;

export var StagesList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagsToAddFilterList = 64 | 0;

export var TagsToAddList = list(n0, _TTAL, 0, () => Tag);
export var TargetTagList = list(n0, _TTL, 0, () => Tag);
export var TargetTagsFilterList = 64 | 0;

export var TimesList = 64 | 0;

export var VariableTagsList = list(n0, _VTL, 0, () => Tag);
export var TagMap = 128 | 0;

export var CreateLifecyclePolicy = op(
  n0,
  _CLP,
  {
    [_h]: ["POST", "/policies", 200],
  },
  () => CreateLifecyclePolicyRequest,
  () => CreateLifecyclePolicyResponse
);
export var DeleteLifecyclePolicy = op(
  n0,
  _DLP,
  {
    [_h]: ["DELETE", "/policies/{PolicyId}", 200],
  },
  () => DeleteLifecyclePolicyRequest,
  () => DeleteLifecyclePolicyResponse
);
export var GetLifecyclePolicies = op(
  n0,
  _GLP,
  {
    [_h]: ["GET", "/policies", 200],
  },
  () => GetLifecyclePoliciesRequest,
  () => GetLifecyclePoliciesResponse
);
export var GetLifecyclePolicy = op(
  n0,
  _GLPe,
  {
    [_h]: ["GET", "/policies/{PolicyId}", 200],
  },
  () => GetLifecyclePolicyRequest,
  () => GetLifecyclePolicyResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateLifecyclePolicy = op(
  n0,
  _ULP,
  {
    [_h]: ["PATCH", "/policies/{PolicyId}", 200],
  },
  () => UpdateLifecyclePolicyRequest,
  () => UpdateLifecyclePolicyResponse
);
