// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAn,
  _ac,
  _aKI,
  _ALn,
  _aN,
  _ana,
  _aNt,
  _aPc,
  _APF,
  _APFL,
  _aPI,
  _APL,
  _APS,
  _ARL,
  _ARLr,
  _aRna,
  _aRr,
  _ARS,
  _aT,
  _cA,
  _cAo,
  _cO,
  _cod,
  _col,
  _con,
  _cT,
  _e,
  _EAD,
  _eAD,
  _eFI,
  _eFS,
  _en,
  _ePI,
  _f,
  _FD,
  _fD,
  _FDL,
  _fin,
  _FL,
  _FLV,
  _FSi,
  _FSV,
  _fT,
  _GFRet,
  _GFRRe,
  _GFRRet,
  _GFV,
  _GFVR,
  _GFVRe,
  _h,
  _hQ,
  _i,
  _IAD,
  _iAD,
  _iCs,
  _ind,
  _iP,
  _jI,
  _k,
  _L,
  _l,
  _LA,
  _lA,
  _LAP,
  _LAPF,
  _LAPFR,
  _LAPFRi,
  _LAPR,
  _LAPRi,
  _LAR,
  _LARi,
  _LARis,
  _LARist,
  _LARR,
  _LARRi,
  _LARRis,
  _LARRist,
  _le,
  _LF,
  _LFR,
  _LFRi,
  _LFV,
  _LFVR,
  _LFVRi,
  _LL,
  _lML,
  _lo,
  _loc,
  _LPG,
  _LPGR,
  _LPGRi,
  _m,
  _mR,
  _nT,
  _oB,
  _of,
  _P,
  _p,
  _pA,
  _pa,
  _pD,
  _PE,
  _PEL,
  _PG,
  _pG,
  _PGL,
  _pOA,
  _pT,
  _pTr,
  _pUA,
  _rA,
  _rAec,
  _rCPR,
  _RE,
  _re,
  _rOA,
  _rPec,
  _rS,
  _RSe,
  _RSLe,
  _rT,
  _rTec,
  _S,
  _s,
  _sA,
  _SC,
  _sCPR,
  _sN,
  _sO,
  _so,
  _sor,
  _sp,
  _sR,
  _st,
  _Su,
  _su,
  _t,
  _UA,
  _uA,
  _UAL,
  _UIRD,
  _uIRD,
  _UIUAKD,
  _uIUAKD,
  _UIUPD,
  _uIUPD,
  _UPD,
  _uPD,
  _UPRS,
  _uPRS,
  _v,
  _VP,
  _VPF,
  _VPFL,
  _VPR,
  _VPRa,
  _vPRT,
  n0,
} from "./schemas_0";
import { FindingSourceList } from "./schemas_1_Finding";
import { AccessPreviewStatusReason } from "./schemas_4_Access";
import { AnalyzerSummary, ArchiveRuleSummary } from "./schemas_5_Archive";
import { FilterCriteriaMap } from "./schemas_13_Archive";

/* eslint no-var: 0 */

export var AccessPreviewFinding = struct(
  n0,
  _APF,
  0,
  [_i, _eFI, _eFS, _p, _ac, _con, _re, _iP, _rT, _cA, _cT, _s, _rOA, _e, _so, _rCPR],
  [0, 0, 0, 128 | 0, 64 | 0, 128 | 0, 0, 2, 0, 5, 0, 0, 0, 0, () => FindingSourceList, 0]
);
export var AccessPreviewSummary = struct(
  n0,
  _APS,
  0,
  [_i, _aA, _cA, _s, _sR],
  [0, 0, 5, 0, () => AccessPreviewStatusReason]
);
export var AnalyzedResourceSummary = struct(n0, _ARS, 0, [_rA, _rOA, _rT], [0, 0, 0]);
export var ExternalAccessDetails = struct(
  n0,
  _EAD,
  0,
  [_ac, _con, _iP, _p, _so, _rCPR],
  [64 | 0, 128 | 0, 2, 128 | 0, () => FindingSourceList, 0]
);
export var FindingSummary = struct(
  n0,
  _FSi,
  0,
  [_i, _p, _ac, _re, _iP, _rT, _con, _cA, _aAn, _uA, _s, _rOA, _e, _so, _rCPR],
  [0, 128 | 0, 64 | 0, 0, 2, 0, 128 | 0, 5, 5, 5, 0, 0, 0, () => FindingSourceList, 0]
);
export var FindingSummaryV2 = struct(
  n0,
  _FSV,
  0,
  [_aAn, _cA, _e, _i, _re, _rT, _rOA, _s, _uA, _fT],
  [5, 5, 0, 0, 0, 0, 0, 0, 5, 0]
);
export var GetFindingRecommendationRequest = struct(
  n0,
  _GFRRe,
  0,
  [_aA, _i, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetFindingRecommendationResponse = struct(
  n0,
  _GFRRet,
  0,
  [_sA, _cAo, _nT, _e, _rA, _rS, _rTec, _s],
  [5, 5, 0, () => RecommendationError, 0, () => RecommendedStepList, 0, 0]
);
export var GetFindingV2Request = struct(
  n0,
  _GFVR,
  0,
  [_aA, _i, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetFindingV2Response = struct(
  n0,
  _GFVRe,
  0,
  [_aAn, _cA, _e, _i, _nT, _re, _rT, _rOA, _s, _uA, _fD, _fT],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 5, () => FindingDetailsList, 0]
);
export var InternalAccessDetails = struct(
  n0,
  _IAD,
  0,
  [_ac, _con, _p, _pOA, _aT, _pTr, _so, _rCPR, _sCPR],
  [64 | 0, 128 | 0, 128 | 0, 0, 0, 0, () => FindingSourceList, 0, 0]
);
export var ListAccessPreviewFindingsRequest = struct(
  n0,
  _LAPFR,
  0,
  [_aPI, _aA, _f, _nT, _mR],
  [[0, 1], 0, () => FilterCriteriaMap, 0, 1]
);
export var ListAccessPreviewFindingsResponse = struct(
  n0,
  _LAPFRi,
  0,
  [_fin, _nT],
  [() => AccessPreviewFindingsList, 0]
);
export var ListAccessPreviewsRequest = struct(
  n0,
  _LAPR,
  0,
  [_aA, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAccessPreviewsResponse = struct(n0, _LAPRi, 0, [_aPc, _nT], [() => AccessPreviewsList, 0]);
export var ListAnalyzedResourcesRequest = struct(n0, _LARR, 0, [_aA, _rT, _nT, _mR], [0, 0, 0, 1]);
export var ListAnalyzedResourcesResponse = struct(n0, _LARRi, 0, [_aRna, _nT], [() => AnalyzedResourcesList, 0]);
export var ListAnalyzersRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR, _t],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var ListAnalyzersResponse = struct(n0, _LARi, 0, [_ana, _nT], [() => AnalyzersList, 0]);
export var ListArchiveRulesRequest = struct(
  n0,
  _LARRis,
  0,
  [_aN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListArchiveRulesResponse = struct(n0, _LARRist, 0, [_aRr, _nT], [() => ArchiveRulesList, 0]);
export var ListFindingsRequest = struct(
  n0,
  _LFR,
  0,
  [_aA, _f, _sor, _nT, _mR],
  [0, () => FilterCriteriaMap, () => SortCriteria, 0, 1]
);
export var ListFindingsResponse = struct(n0, _LFRi, 0, [_fin, _nT], [() => FindingsList, 0]);
export var ListFindingsV2Request = struct(
  n0,
  _LFVR,
  0,
  [_aA, _f, _mR, _nT, _sor],
  [0, () => FilterCriteriaMap, 1, 0, () => SortCriteria]
);
export var ListFindingsV2Response = struct(n0, _LFVRi, 0, [_fin, _nT], [() => FindingsListV2, 0]);
export var ListPolicyGenerationsRequest = struct(
  n0,
  _LPGR,
  0,
  [_pA, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListPolicyGenerationsResponse = struct(n0, _LPGRi, 0, [_pG, _nT], [() => PolicyGenerationList, 0]);
export var Location = struct(n0, _L, 0, [_pa, _sp], [() => PathElementList, () => Span]);
export var PolicyGeneration = struct(n0, _PG, 0, [_jI, _pA, _s, _sO, _cO], [0, 0, 0, 5, 5]);
export var Position = struct(n0, _P, 0, [_l, _col, _of], [1, 1, 1]);
export var RecommendationError = struct(n0, _RE, 0, [_cod, _m], [0, 0]);
export var SortCriteria = struct(n0, _SC, 0, [_aNt, _oB], [0, 0]);
export var Span = struct(n0, _S, 0, [_st, _en], [() => Position, () => Position]);
export var Substring = struct(n0, _Su, 0, [_st, _le], [1, 1]);
export var UnusedAction = struct(n0, _UA, 0, [_ac, _lA], [0, 5]);
export var UnusedIamRoleDetails = struct(n0, _UIRD, 0, [_lA], [5]);
export var UnusedIamUserAccessKeyDetails = struct(n0, _UIUAKD, 0, [_aKI, _lA], [0, 5]);
export var UnusedIamUserPasswordDetails = struct(n0, _UIUPD, 0, [_lA], [5]);
export var UnusedPermissionDetails = struct(n0, _UPD, 0, [_a, _sN, _lA], [() => UnusedActionList, 0, 5]);
export var UnusedPermissionsRecommendedStep = struct(n0, _UPRS, 0, [_pUA, _rAec, _rPec, _ePI], [5, 0, 0, 0]);
export var ValidatePolicyFinding = struct(n0, _VPF, 0, [_fD, _fT, _iCs, _lML, _lo], [0, 0, 0, 0, () => LocationList]);
export var ValidatePolicyRequest = struct(
  n0,
  _VPR,
  0,
  [_loc, _mR, _nT, _pD, _pT, _vPRT],
  [
    0,
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    0,
    0,
    0,
  ]
);
export var ValidatePolicyResponse = struct(n0, _VPRa, 0, [_fin, _nT], [() => ValidatePolicyFindingList, 0]);
export var AccessPreviewFindingsList = list(n0, _APFL, 0, () => AccessPreviewFinding);
export var AccessPreviewsList = list(n0, _APL, 0, () => AccessPreviewSummary);
export var AnalyzedResourcesList = list(n0, _ARL, 0, () => AnalyzedResourceSummary);
export var AnalyzersList = list(n0, _ALn, 0, () => AnalyzerSummary);
export var ArchiveRulesList = list(n0, _ARLr, 0, () => ArchiveRuleSummary);
export var FindingDetailsList = list(n0, _FDL, 0, () => FindingDetails);
export var FindingsList = list(n0, _FL, 0, () => FindingSummary);
export var FindingsListV2 = list(n0, _FLV, 0, () => FindingSummaryV2);
export var LocationList = list(n0, _LL, 0, () => Location);
export var PathElementList = list(n0, _PEL, 0, () => PathElement);
export var PolicyGenerationList = list(n0, _PGL, 0, () => PolicyGeneration);
export var RecommendedStepList = list(n0, _RSLe, 0, () => RecommendedStep);
export var UnusedActionList = list(n0, _UAL, 0, () => UnusedAction);
export var ValidatePolicyFindingList = list(n0, _VPFL, 0, () => ValidatePolicyFinding);
export var FindingDetails = uni(
  n0,
  _FD,
  0,
  [_iAD, _eAD, _uPD, _uIUAKD, _uIRD, _uIUPD],
  [
    () => InternalAccessDetails,
    () => ExternalAccessDetails,
    () => UnusedPermissionDetails,
    () => UnusedIamUserAccessKeyDetails,
    () => UnusedIamRoleDetails,
    () => UnusedIamUserPasswordDetails,
  ]
);
export var PathElement = uni(n0, _PE, 0, [_ind, _k, _su, _v], [1, 0, () => Substring, 0]);
export var RecommendedStep = uni(n0, _RSe, 0, [_uPRS], [() => UnusedPermissionsRecommendedStep]);
export var GetFindingRecommendation = op(
  n0,
  _GFRet,
  {
    [_h]: ["GET", "/recommendation/{id}", 200],
  },
  () => GetFindingRecommendationRequest,
  () => GetFindingRecommendationResponse
);
export var GetFindingV2 = op(
  n0,
  _GFV,
  {
    [_h]: ["GET", "/findingv2/{id}", 200],
  },
  () => GetFindingV2Request,
  () => GetFindingV2Response
);
export var ListAccessPreviewFindings = op(
  n0,
  _LAPF,
  {
    [_h]: ["POST", "/access-preview/{accessPreviewId}", 200],
  },
  () => ListAccessPreviewFindingsRequest,
  () => ListAccessPreviewFindingsResponse
);
export var ListAccessPreviews = op(
  n0,
  _LAP,
  {
    [_h]: ["GET", "/access-preview", 200],
  },
  () => ListAccessPreviewsRequest,
  () => ListAccessPreviewsResponse
);
export var ListAnalyzedResources = op(
  n0,
  _LARis,
  {
    [_h]: ["POST", "/analyzed-resource", 200],
  },
  () => ListAnalyzedResourcesRequest,
  () => ListAnalyzedResourcesResponse
);
export var ListAnalyzers = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/analyzer", 200],
  },
  () => ListAnalyzersRequest,
  () => ListAnalyzersResponse
);
export var ListArchiveRules = op(
  n0,
  _LARist,
  {
    [_h]: ["GET", "/analyzer/{analyzerName}/archive-rule", 200],
  },
  () => ListArchiveRulesRequest,
  () => ListArchiveRulesResponse
);
export var ListFindings = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/finding", 200],
  },
  () => ListFindingsRequest,
  () => ListFindingsResponse
);
export var ListFindingsV2 = op(
  n0,
  _LFV,
  {
    [_h]: ["POST", "/findingv2", 200],
  },
  () => ListFindingsV2Request,
  () => ListFindingsV2Response
);
export var ListPolicyGenerations = op(
  n0,
  _LPG,
  {
    [_h]: ["GET", "/policy/generation", 200],
  },
  () => ListPolicyGenerationsRequest,
  () => ListPolicyGenerationsResponse
);
export var ValidatePolicy = op(
  n0,
  _VP,
  {
    [_h]: ["POST", "/policy/validation", 200],
  },
  () => ValidatePolicyRequest,
  () => ValidatePolicyResponse
);
