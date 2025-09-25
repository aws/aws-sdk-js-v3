// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aAI,
  _aC,
  _ac,
  _ad,
  _aI,
  _AL,
  _am,
  _ar,
  _bS,
  _bT,
  _CL,
  _Co,
  _con,
  _cR,
  _cS,
  _CSA,
  _CSAL,
  _CSD,
  _CSLv,
  _CSv,
  _cT,
  _cv,
  _d,
  _dC,
  _dCi,
  _dLR,
  _dT,
  _dU,
  _eIME,
  _ep,
  _eR,
  _eRx,
  _eT,
  _fA,
  _fil,
  _fin,
  _fIV,
  _fOA,
  _fP,
  _GI,
  _GIR,
  _GIRe,
  _GLE,
  _GLER,
  _GLERe,
  _GLP,
  _GLPR,
  _GLPRe,
  _hIR,
  _hQ,
  _ht,
  _I,
  _i,
  _iBVA,
  _iCn,
  _iPA,
  _iR,
  _iRn,
  _IS,
  _iS,
  _iSC,
  _ISD,
  _iSD,
  _ISF,
  _ISFF,
  _ISFFL,
  _ISFL,
  _iSn,
  _ISS,
  _iTC,
  _iU,
  _LE,
  _lE,
  _lEI,
  _lEi,
  _LEL,
  _LER,
  _LERA,
  _LERIS,
  _LERL,
  _LERS,
  _LES,
  _lES,
  _LESR,
  _LESRL,
  _LISF,
  _LISFR,
  _LISFRi,
  _LLE,
  _LLER,
  _LLERi,
  _LLERis,
  _LLERR,
  _LLERRi,
  _LP,
  _lPA,
  _lPi,
  _me,
  _mR,
  _n,
  _nT,
  _OR,
  _oR,
  _oV,
  _p,
  _pD,
  _pM,
  _pRI,
  _PVD,
  _pVD,
  _R,
  _r,
  _rA,
  _re,
  _reco,
  _rel,
  _rem,
  _reso,
  _rI,
  _rIe,
  _rIS,
  _RR,
  _RS,
  _rS,
  _RSUER,
  _RSUIR,
  _rTe,
  _rU,
  _rV,
  _s,
  _sco,
  _se,
  _sIn,
  _sLH,
  _sn,
  _so,
  _sPA,
  _sPN,
  _SRSU,
  _SRSUR,
  _SRSURt,
  _sS,
  _sSc,
  _sT,
  _st,
  _sU,
  _sVc,
  _t,
  _ta,
  _tex,
  _ti,
  _uA,
  _uAp,
  _ur,
  _v,
  _val,
  _vCA,
  _vI,
  _VP,
  _vP,
  _VPL,
  _vSe,
  _vUA,
  _w,
  n0,
} from "./schemas_0";
import {
  DistributionConfiguration,
  LifecyclePolicyDetailExclusionRulesAmis,
  LifecyclePolicyDetails,
  LifecyclePolicyResourceSelection,
} from "./schemas_4_Policy";
import { ImageScanningConfiguration, ImageTestsConfiguration, WorkflowConfigurationList } from "./schemas_7_Image";
import { InfrastructureConfiguration } from "./schemas_12_Infrastructure";
import { ContainerRecipe, ImageRecipe } from "./schemas_13_Recipe";

/* eslint no-var: 0 */

export var Ami = struct(n0, _A, 0, [_r, _i, _n, _d, _s, _aI], [0, 0, 0, 0, () => ImageState, 0]);
export var Container = struct(n0, _Co, 0, [_r, _iU], [0, 64 | 0]);
export var CvssScore = struct(n0, _CSv, 0, [_bS, _sVc, _v, _so], [1, 0, 0, 0]);
export var CvssScoreAdjustment = struct(n0, _CSA, 0, [_me, _re], [0, 0]);
export var CvssScoreDetails = struct(
  n0,
  _CSD,
  0,
  [_sS, _cS, _v, _sco, _sVc, _ad],
  [0, 0, 0, 1, 0, () => CvssScoreAdjustmentList]
);
export var GetImageRequest = struct(
  n0,
  _GIR,
  0,
  [_iBVA],
  [
    [
      0,
      {
        [_hQ]: _iBVA,
      },
    ],
  ]
);
export var GetImageResponse = struct(n0, _GIRe, 0, [_rI, _i], [0, () => Image]);
export var GetLifecycleExecutionRequest = struct(
  n0,
  _GLER,
  0,
  [_lEI],
  [
    [
      0,
      {
        [_hQ]: _lEI,
      },
    ],
  ]
);
export var GetLifecycleExecutionResponse = struct(n0, _GLERe, 0, [_lE], [() => LifecycleExecution]);
export var GetLifecyclePolicyRequest = struct(
  n0,
  _GLPR,
  0,
  [_lPA],
  [
    [
      0,
      {
        [_hQ]: _lPA,
      },
    ],
  ]
);
export var GetLifecyclePolicyResponse = struct(n0, _GLPRe, 0, [_lPi], [() => LifecyclePolicy]);
export var Image = struct(
  n0,
  _I,
  0,
  [
    _a,
    _t,
    _n,
    _v,
    _p,
    _eIME,
    _oV,
    _s,
    _iR,
    _cR,
    _sPN,
    _sPA,
    _iCn,
    _dCi,
    _iTC,
    _dC,
    _oR,
    _ta,
    _bT,
    _iS,
    _sSc,
    _iSC,
    _dT,
    _lEI,
    _eR,
    _w,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    () => ImageState,
    () => ImageRecipe,
    () => ContainerRecipe,
    0,
    0,
    () => InfrastructureConfiguration,
    () => DistributionConfiguration,
    () => ImageTestsConfiguration,
    0,
    () => OutputResources,
    128 | 0,
    0,
    0,
    () => ImageScanState,
    () => ImageScanningConfiguration,
    4,
    0,
    0,
    () => WorkflowConfigurationList,
  ]
);
export var ImageScanFinding = struct(
  n0,
  _ISF,
  0,
  [_aAI, _iBVA, _iPA, _t, _d, _ti, _rem, _se, _fOA, _uA, _iSn, _iSD, _pVD, _fA],
  [0, 0, 0, 0, 0, 0, () => Remediation, 0, 4, 4, 1, () => InspectorScoreDetails, () => PackageVulnerabilityDetails, 0]
);
export var ImageScanFindingsFilter = struct(n0, _ISFF, 0, [_n, _val], [0, 64 | 0]);
export var ImageScanState = struct(n0, _ISS, 0, [_st, _re], [0, 0]);
export var ImageState = struct(n0, _IS, 0, [_st, _re], [0, 0]);
export var InspectorScoreDetails = struct(n0, _ISD, 0, [_aC], [() => CvssScoreDetails]);
export var LifecycleExecution = struct(
  n0,
  _LE,
  0,
  [_lEI, _lPA, _rIS, _s, _sT, _eT],
  [0, 0, () => LifecycleExecutionResourcesImpactedSummary, () => LifecycleExecutionState, 4, 4]
);
export var LifecycleExecutionResource = struct(
  n0,
  _LER,
  0,
  [_aI, _rIe, _s, _ac, _r, _sn, _iU, _sT, _eT],
  [
    0,
    0,
    () => LifecycleExecutionResourceState,
    () => LifecycleExecutionResourceAction,
    0,
    () => LifecycleExecutionSnapshotResourceList,
    64 | 0,
    4,
    4,
  ]
);
export var LifecycleExecutionResourceAction = struct(n0, _LERA, 0, [_n, _re], [0, 0]);
export var LifecycleExecutionResourcesImpactedSummary = struct(n0, _LERIS, 0, [_hIR], [2]);
export var LifecycleExecutionResourceState = struct(n0, _LERS, 0, [_st, _re], [0, 0]);
export var LifecycleExecutionSnapshotResource = struct(
  n0,
  _LESR,
  0,
  [_sIn, _s],
  [0, () => LifecycleExecutionResourceState]
);
export var LifecycleExecutionState = struct(n0, _LES, 0, [_st, _re], [0, 0]);
export var LifecyclePolicy = struct(
  n0,
  _LP,
  0,
  [_a, _n, _d, _st, _eR, _rTe, _pD, _rS, _dC, _dU, _dLR, _ta],
  [0, 0, 0, 0, 0, 0, () => LifecyclePolicyDetails, () => LifecyclePolicyResourceSelection, 4, 4, 4, 128 | 0]
);
export var ListImageScanFindingsRequest = struct(
  n0,
  _LISFR,
  0,
  [_fil, _mR, _nT],
  [() => ImageScanFindingsFilterList, 1, 0]
);
export var ListImageScanFindingsResponse = struct(
  n0,
  _LISFRi,
  0,
  [_rI, _fin, _nT],
  [0, () => ImageScanFindingsList, 0]
);
export var ListLifecycleExecutionResourcesRequest = struct(n0, _LLERR, 0, [_lEI, _pRI, _mR, _nT], [0, 0, 1, 0]);
export var ListLifecycleExecutionResourcesResponse = struct(
  n0,
  _LLERRi,
  0,
  [_lEI, _lES, _reso, _nT],
  [0, () => LifecycleExecutionState, () => LifecycleExecutionResourceList, 0]
);
export var ListLifecycleExecutionsRequest = struct(n0, _LLER, 0, [_mR, _nT, _rA], [1, 0, 0]);
export var ListLifecycleExecutionsResponse = struct(n0, _LLERi, 0, [_lEi, _nT], [() => LifecycleExecutionsList, 0]);
export var OutputResources = struct(n0, _OR, 0, [_am, _con], [() => AmiList, () => ContainerList]);
export var PackageVulnerabilityDetails = struct(
  n0,
  _PVD,
  0,
  [_vI, _vP, _so, _cv, _rV, _sU, _vSe, _vCA, _vUA, _rU],
  [0, () => VulnerablePackageList, 0, () => CvssScoreList, 64 | 0, 0, 0, 4, 4, 64 | 0]
);
export var Remediation = struct(n0, _R, 0, [_reco], [() => RemediationRecommendation]);
export var RemediationRecommendation = struct(n0, _RR, 0, [_tex, _ur], [0, 0]);
export var ResourceState = struct(n0, _RS, 0, [_st], [0]);
export var ResourceStateUpdateExclusionRules = struct(
  n0,
  _RSUER,
  0,
  [_am],
  [() => LifecyclePolicyDetailExclusionRulesAmis]
);
export var ResourceStateUpdateIncludeResources = struct(n0, _RSUIR, 0, [_am, _sn, _con], [2, 2, 2]);
export var StartResourceStateUpdateRequest = struct(
  n0,
  _SRSUR,
  0,
  [_rA, _s, _eR, _iRn, _eRx, _uAp, _cT],
  [
    0,
    () => ResourceState,
    0,
    () => ResourceStateUpdateIncludeResources,
    () => ResourceStateUpdateExclusionRules,
    4,
    [0, 4],
  ]
);
export var StartResourceStateUpdateResponse = struct(n0, _SRSURt, 0, [_lEI, _rA], [0, 0]);
export var VulnerablePackage = struct(
  n0,
  _VP,
  0,
  [_n, _v, _sLH, _ep, _rel, _ar, _pM, _fP, _fIV, _rem],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
);
export var AmiList = list(n0, _AL, 0, () => Ami);
export var ContainerList = list(n0, _CL, 0, () => Container);
export var CvssScoreAdjustmentList = list(n0, _CSAL, 0, () => CvssScoreAdjustment);
export var CvssScoreList = list(n0, _CSLv, 0, () => CvssScore);
export var ImageScanFindingsFilterList = list(n0, _ISFFL, 0, () => ImageScanFindingsFilter);
export var ImageScanFindingsFilterValues = 64 | 0;

export var ImageScanFindingsList = list(n0, _ISFL, 0, () => ImageScanFinding);
export var LifecycleExecutionResourceList = list(n0, _LERL, 0, () => LifecycleExecutionResource);
export var LifecycleExecutionsList = list(n0, _LEL, 0, () => LifecycleExecution);
export var LifecycleExecutionSnapshotResourceList = list(n0, _LESRL, 0, () => LifecycleExecutionSnapshotResource);
export var NonEmptyStringList = 64 | 0;

export var VulnerabilityIdList = 64 | 0;

export var VulnerablePackageList = list(n0, _VPL, 0, () => VulnerablePackage);
export var GetImage = op(
  n0,
  _GI,
  {
    [_ht]: ["GET", "/GetImage", 200],
  },
  () => GetImageRequest,
  () => GetImageResponse
);
export var GetLifecycleExecution = op(
  n0,
  _GLE,
  {
    [_ht]: ["GET", "/GetLifecycleExecution", 200],
  },
  () => GetLifecycleExecutionRequest,
  () => GetLifecycleExecutionResponse
);
export var GetLifecyclePolicy = op(
  n0,
  _GLP,
  {
    [_ht]: ["GET", "/GetLifecyclePolicy", 200],
  },
  () => GetLifecyclePolicyRequest,
  () => GetLifecyclePolicyResponse
);
export var ListImageScanFindings = op(
  n0,
  _LISF,
  {
    [_ht]: ["POST", "/ListImageScanFindings", 200],
  },
  () => ListImageScanFindingsRequest,
  () => ListImageScanFindingsResponse
);
export var ListLifecycleExecutionResources = op(
  n0,
  _LLERis,
  {
    [_ht]: ["POST", "/ListLifecycleExecutionResources", 200],
  },
  () => ListLifecycleExecutionResourcesRequest,
  () => ListLifecycleExecutionResourcesResponse
);
export var ListLifecycleExecutions = op(
  n0,
  _LLE,
  {
    [_ht]: ["POST", "/ListLifecycleExecutions", 200],
  },
  () => ListLifecycleExecutionsRequest,
  () => ListLifecycleExecutionsResponse
);
export var StartResourceStateUpdate = op(
  n0,
  _SRSU,
  {
    [_ht]: ["PUT", "/StartResourceStateUpdate", 200],
  },
  () => StartResourceStateUpdateRequest,
  () => StartResourceStateUpdateResponse
);
