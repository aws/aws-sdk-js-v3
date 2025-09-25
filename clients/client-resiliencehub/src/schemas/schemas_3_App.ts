// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _aAs,
  _aC,
  _ACC,
  _aCN,
  _ACs,
  _aIp,
  _aN,
  _aRI,
  _aRIS,
  _aRISc,
  _ARR,
  _ARRL,
  _as,
  _ASs,
  _aSs,
  _aV,
  _aVc,
  _cC,
  _CCL,
  _CD,
  _cD,
  _CDL,
  _co,
  _com,
  _CR,
  _cR,
  _cRIS,
  _cRISu,
  _CRL,
  _CRLo,
  _CRo,
  _cRo,
  _cS,
  _cSo,
  _cT,
  _d,
  _DAAe,
  _DAARes,
  _DAAResc,
  _DC,
  _dLC,
  _DP,
  _DRPe,
  _DRPRes,
  _DRPResc,
  _dS,
  _dSi,
  _dT,
  _dTi,
  _eC,
  _eCS,
  _eCT,
  _eIn,
  _eRD,
  _eRDx,
  _eRI,
  _eRIS,
  _eRISx,
  _eT,
  _eTn,
  _eV,
  _FP,
  _h,
  _hA,
  _hME,
  _hQ,
  _in,
  _LAACD,
  _LAACDR,
  _LAACDRi,
  _LACC,
  _LACCR,
  _LACCRi,
  _LACR,
  _LACRR,
  _LACRRi,
  _lRI,
  _LRP,
  _LRPR,
  _LRPRi,
  _LSRP,
  _LSRPR,
  _LSRPRi,
  _m,
  _mR,
  _n,
  _nT,
  _oC,
  _oT,
  _pA,
  _pD,
  _pN,
  _po,
  _pRI,
  _pS,
  _r,
  _RC,
  _rCe,
  _rD,
  _RDC,
  _rDp,
  _RE,
  _re,
  _rea,
  _RED,
  _rED,
  _rEe,
  _REL,
  _rIe,
  _rIS,
  _rISp,
  _RP,
  _rP,
  _RPe,
  _rR,
  _rRI,
  _rRIp,
  _RS,
  _rS,
  _rSe,
  _sC,
  _sc,
  _SCRS,
  _SCRSc,
  _sT,
  _st,
  _su,
  _ta,
  _ti,
  _URP,
  _URPR,
  _URPRp,
  _vN,
  n0,
  TagMap,
} from "./schemas_0";
import { Cost } from "./schemas_1_App";

/* eslint no-var: 0 */

export var AppAssessment = struct(
  n0,
  _AA,
  0,
  [_aA, _aV, _in, _co, _rSe, _com, _cS, _aSs, _sT, _eT, _m, _aN, _aAs, _po, _ta, _rED, _vN, _dS, _su],
  [
    0,
    0,
    0,
    () => Cost,
    () => ResiliencyScore,
    () => AssessmentCompliance,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    [() => ResiliencyPolicy, 0],
    [() => TagMap, 0],
    () => ResourceErrorsDetails,
    0,
    0,
    () => AssessmentSummary,
  ]
);
export var AppComponentCompliance = struct(
  n0,
  _ACC,
  0,
  [_co, _aCN, _com, _m, _st, _rSe],
  [() => Cost, 0, () => AssessmentCompliance, 0, 0, () => ResiliencyScore]
);
export var AssessmentRiskRecommendation = struct(n0, _ARR, 0, [_r, _re, _aC], [0, 0, 64 | 0]);
export var AssessmentSummary = struct(n0, _ASs, 0, [_su, _rR], [0, () => AssessmentRiskRecommendationList]);
export var ComplianceDrift = struct(
  n0,
  _CD,
  0,
  [_eIn, _eTn, _dT, _aIp, _aV, _eRI, _eV, _aRI, _aVc, _dTi],
  [0, 0, 0, 0, 0, 0, () => AssessmentCompliance, 0, () => AssessmentCompliance, 0]
);
export var ComponentRecommendation = struct(n0, _CR, 0, [_aCN, _rS, _cR], [0, 0, () => ConfigRecommendationList]);
export var ConfigRecommendation = struct(
  n0,
  _CRo,
  0,
  [_co, _aCN, _com, _rCe, _oT, _n, _d, _sC, _hA, _rIe],
  [() => Cost, 0, () => AssessmentCompliance, () => RecommendationCompliance, 0, 0, 0, 64 | 0, 0, 0]
);
export var DescribeAppAssessmentRequest = struct(n0, _DAARes, 0, [_aAs], [0]);
export var DescribeAppAssessmentResponse = struct(n0, _DAAResc, 0, [_as], [[() => AppAssessment, 0]]);
export var DescribeResiliencyPolicyRequest = struct(n0, _DRPRes, 0, [_pA], [0]);
export var DescribeResiliencyPolicyResponse = struct(n0, _DRPResc, 0, [_po], [[() => ResiliencyPolicy, 0]]);
export var DisruptionCompliance = struct(
  n0,
  _DC,
  0,
  [_aRIS, _cRIS, _rRI, _rD, _cRISu, _rRIp, _rDp, _cS, _aRISc, _m],
  [1, 1, 0, 0, 1, 0, 0, 0, 1, 0]
);
export var FailurePolicy = struct(n0, _FP, 0, [_rIS, _rISp], [1, 1]);
export var ListAppAssessmentComplianceDriftsRequest = struct(n0, _LAACDR, 0, [_aAs, _nT, _mR], [0, 0, 1]);
export var ListAppAssessmentComplianceDriftsResponse = struct(
  n0,
  _LAACDRi,
  0,
  [_cD, _nT],
  [() => ComplianceDriftList, 0]
);
export var ListAppComponentCompliancesRequest = struct(n0, _LACCR, 0, [_nT, _mR, _aAs], [0, 1, 0]);
export var ListAppComponentCompliancesResponse = struct(
  n0,
  _LACCRi,
  0,
  [_cC, _nT],
  [() => ComponentCompliancesList, 0]
);
export var ListAppComponentRecommendationsRequest = struct(n0, _LACRR, 0, [_aAs, _nT, _mR], [0, 0, 1]);
export var ListAppComponentRecommendationsResponse = struct(
  n0,
  _LACRRi,
  0,
  [_cRo, _nT],
  [() => ComponentRecommendationList, 0]
);
export var ListResiliencyPoliciesRequest = struct(
  n0,
  _LRPR,
  0,
  [_pN, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _pN,
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
export var ListResiliencyPoliciesResponse = struct(n0, _LRPRi, 0, [_rP, _nT], [[() => ResiliencyPolicies, 0], 0]);
export var ListSuggestedResiliencyPoliciesRequest = struct(
  n0,
  _LSRPR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListSuggestedResiliencyPoliciesResponse = struct(
  n0,
  _LSRPRi,
  0,
  [_rP, _nT],
  [[() => ResiliencyPolicies, 0], 0]
);
export var RecommendationDisruptionCompliance = struct(
  n0,
  _RDC,
  0,
  [_eCS, _eRIS, _eRD, _eRISx, _eRDx],
  [0, 1, 0, 1, 0]
);
export var ResiliencyPolicy = struct(
  n0,
  _RP,
  0,
  [_pA, _pN, _pD, _dLC, _ti, _eCT, _po, _cT, _ta],
  [0, 0, 0, 0, 0, 0, () => DisruptionPolicy, 4, [() => TagMap, 0]]
);
export var ResiliencyScore = struct(
  n0,
  _RS,
  0,
  [_sc, _dSi, _cSo],
  [1, 128 | 1, () => ScoringComponentResiliencyScores]
);
export var ResourceError = struct(n0, _RE, 0, [_lRI, _pRI, _rea], [0, 0, 0]);
export var ResourceErrorsDetails = struct(n0, _RED, 0, [_rEe, _hME], [() => ResourceErrorList, 2]);
export var ScoringComponentResiliencyScore = struct(n0, _SCRS, 0, [_sc, _pS, _oC, _eC], [1, 1, 1, 1]);
export var UpdateResiliencyPolicyRequest = struct(
  n0,
  _URPR,
  0,
  [_pA, _pN, _pD, _dLC, _ti, _po],
  [0, 0, 0, 0, 0, () => DisruptionPolicy]
);
export var UpdateResiliencyPolicyResponse = struct(n0, _URPRp, 0, [_po], [[() => ResiliencyPolicy, 0]]);
export var AssessmentRiskRecommendationList = list(n0, _ARRL, 0, () => AssessmentRiskRecommendation);
export var ComplianceDriftList = list(n0, _CDL, 0, () => ComplianceDrift);
export var ComponentCompliancesList = list(n0, _CCL, 0, () => AppComponentCompliance);
export var ComponentRecommendationList = list(n0, _CRL, 0, () => ComponentRecommendation);
export var ConfigRecommendationList = list(n0, _CRLo, 0, () => ConfigRecommendation);
export var ResiliencyPolicies = list(n0, _RPe, 0, [() => ResiliencyPolicy, 0]);
export var ResourceErrorList = list(n0, _REL, 0, () => ResourceError);
export var SuggestedChangesList = 64 | 0;

export var AssessmentCompliance = map(n0, _ACs, 0, 0, () => DisruptionCompliance);
export var DisruptionPolicy = map(n0, _DP, 0, 0, () => FailurePolicy);
export var DisruptionResiliencyScore = 128 | 1;

export var RecommendationCompliance = map(n0, _RC, 0, 0, () => RecommendationDisruptionCompliance);
export var ScoringComponentResiliencyScores = map(n0, _SCRSc, 0, 0, () => ScoringComponentResiliencyScore);
export var DescribeAppAssessment = op(
  n0,
  _DAAe,
  {
    [_h]: ["POST", "/describe-app-assessment", 200],
  },
  () => DescribeAppAssessmentRequest,
  () => DescribeAppAssessmentResponse
);
export var DescribeResiliencyPolicy = op(
  n0,
  _DRPe,
  {
    [_h]: ["POST", "/describe-resiliency-policy", 200],
  },
  () => DescribeResiliencyPolicyRequest,
  () => DescribeResiliencyPolicyResponse
);
export var ListAppAssessmentComplianceDrifts = op(
  n0,
  _LAACD,
  {
    [_h]: ["POST", "/list-app-assessment-compliance-drifts", 200],
  },
  () => ListAppAssessmentComplianceDriftsRequest,
  () => ListAppAssessmentComplianceDriftsResponse
);
export var ListAppComponentCompliances = op(
  n0,
  _LACC,
  {
    [_h]: ["POST", "/list-app-component-compliances", 200],
  },
  () => ListAppComponentCompliancesRequest,
  () => ListAppComponentCompliancesResponse
);
export var ListAppComponentRecommendations = op(
  n0,
  _LACR,
  {
    [_h]: ["POST", "/list-app-component-recommendations", 200],
  },
  () => ListAppComponentRecommendationsRequest,
  () => ListAppComponentRecommendationsResponse
);
export var ListResiliencyPolicies = op(
  n0,
  _LRP,
  {
    [_h]: ["GET", "/list-resiliency-policies", 200],
  },
  () => ListResiliencyPoliciesRequest,
  () => ListResiliencyPoliciesResponse
);
export var ListSuggestedResiliencyPolicies = op(
  n0,
  _LSRP,
  {
    [_h]: ["GET", "/list-suggested-resiliency-policies", 200],
  },
  () => ListSuggestedResiliencyPoliciesRequest,
  () => ListSuggestedResiliencyPoliciesResponse
);
export var UpdateResiliencyPolicy = op(
  n0,
  _URP,
  {
    [_h]: ["POST", "/update-resiliency-policy", 200],
  },
  () => UpdateResiliencyPolicyRequest,
  () => UpdateResiliencyPolicyResponse
);
