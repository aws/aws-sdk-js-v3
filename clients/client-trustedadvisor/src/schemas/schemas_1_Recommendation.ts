// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _aAI,
  _ADE,
  _aI,
  _aLUA,
  _aRA,
  _aRI,
  _ARLS,
  _aRLS,
  _ARLSL,
  _aS,
  _aSw,
  _bLUA,
  _BURRE,
  _bURREE,
  _BURRER,
  _BURRERa,
  _c,
  _cA,
  _cAr,
  _cB,
  _CE,
  _cI,
  _cO,
  _CS,
  _cS,
  _CSL,
  _d,
  _e,
  _eC,
  _eCr,
  _eM,
  _eMS,
  _ePMS,
  _eS,
  _GOR,
  _GORR,
  _GORRe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hQ,
  _i,
  _iE,
  _ISE,
  _l,
  _LC,
  _LCR,
  _LCRi,
  _LOR,
  _LORA,
  _LORAR,
  _LORARi,
  _LORR,
  _LORRi,
  _LORRis,
  _LORRR,
  _LORRRi,
  _LR,
  _LRR,
  _LRRi,
  _LRRis,
  _LRRR,
  _LRRRi,
  _lS,
  _lUA,
  _m,
  _me,
  _mR,
  _n,
  _nT,
  _oC,
  _OR,
  _oR,
  _oRI,
  _ORRS,
  _oRRS,
  _ORRSL,
  _ORS,
  _oRS,
  _ORSL,
  _p,
  _pi,
  _pSA,
  _R,
  _r,
  _rA,
  _rAe,
  _rAec,
  _rC,
  _RCOA,
  _rI,
  _RNFE,
  _RPSA,
  _RRA,
  _RRE,
  _rRE,
  _RREL,
  _RRS,
  _rRS,
  _RRSL,
  _RS,
  _rS,
  _RSL,
  _RUR,
  _s,
  _se,
  _st,
  _t,
  _TE,
  _uOBO,
  _uOBOJT,
  _UORL,
  _UORLR,
  _uR,
  _uRC,
  _URL,
  _URLR,
  _URREE,
  _URREEL,
  _VE,
  _wC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var RecommendationUpdateReason = sim(n0, _RUR, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AccountRecommendationLifecycleSummary = struct(
  n0,
  _ARLS,
  0,
  [_aI, _aRA, _lS, _uOBO, _uOBOJT, _uR, _uRC, _lUA],
  [0, 0, 0, 0, 0, [() => RecommendationUpdateReason, 0], 0, 5]
);
export var BatchUpdateRecommendationResourceExclusionRequest = struct(
  n0,
  _BURRER,
  0,
  [_rRE],
  [() => RecommendationResourceExclusionList]
);
export var BatchUpdateRecommendationResourceExclusionResponse = struct(
  n0,
  _BURRERa,
  0,
  [_bURREE],
  [() => UpdateRecommendationResourceExclusionErrorList]
);
export var CheckSummary = struct(
  n0,
  _CS,
  0,
  [_i, _a, _n, _d, _p, _aS, _s, _me],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 128 | 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var GetOrganizationRecommendationRequest = struct(n0, _GORR, 0, [_oRI], [[0, 1]]);
export var GetOrganizationRecommendationResponse = struct(
  n0,
  _GORRe,
  0,
  [_oR],
  [[() => OrganizationRecommendation, 0]]
);
export var GetRecommendationRequest = struct(n0, _GRR, 0, [_rI], [[0, 1]]);
export var GetRecommendationResponse = struct(n0, _GRRe, 0, [_r], [[() => Recommendation, 0]]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListChecksRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR, _pi, _aSw, _s, _l],
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
        [_hQ]: _pi,
      },
    ],
    [
      0,
      {
        [_hQ]: _aSw,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var ListChecksResponse = struct(n0, _LCRi, 0, [_nT, _cS], [0, () => CheckSummaryList]);
export var ListOrganizationRecommendationAccountsRequest = struct(
  n0,
  _LORAR,
  0,
  [_nT, _mR, _oRI, _aAI],
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
    [0, 1],
    [
      0,
      {
        [_hQ]: _aAI,
      },
    ],
  ]
);
export var ListOrganizationRecommendationAccountsResponse = struct(
  n0,
  _LORARi,
  0,
  [_nT, _aRLS],
  [0, [() => AccountRecommendationLifecycleSummaryList, 0]]
);
export var ListOrganizationRecommendationResourcesRequest = struct(
  n0,
  _LORRR,
  0,
  [_nT, _mR, _st, _eS, _rC, _oRI, _aAI],
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
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _eS,
      },
    ],
    [
      0,
      {
        [_hQ]: _rC,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aAI,
      },
    ],
  ]
);
export var ListOrganizationRecommendationResourcesResponse = struct(
  n0,
  _LORRRi,
  0,
  [_nT, _oRRS],
  [0, () => OrganizationRecommendationResourceSummaryList]
);
export var ListOrganizationRecommendationsRequest = struct(
  n0,
  _LORR,
  0,
  [_nT, _mR, _t, _st, _pi, _aSw, _s, _cI, _aLUA, _bLUA],
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
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _pi,
      },
    ],
    [
      0,
      {
        [_hQ]: _aSw,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      4,
      {
        [_hQ]: _aLUA,
      },
    ],
    [
      4,
      {
        [_hQ]: _bLUA,
      },
    ],
  ]
);
export var ListOrganizationRecommendationsResponse = struct(
  n0,
  _LORRi,
  0,
  [_nT, _oRS],
  [0, () => OrganizationRecommendationSummaryList]
);
export var ListRecommendationResourcesRequest = struct(
  n0,
  _LRRR,
  0,
  [_nT, _mR, _st, _eS, _rC, _rI],
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
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _eS,
      },
    ],
    [
      0,
      {
        [_hQ]: _rC,
      },
    ],
    [0, 1],
  ]
);
export var ListRecommendationResourcesResponse = struct(
  n0,
  _LRRRi,
  0,
  [_nT, _rRS],
  [0, () => RecommendationResourceSummaryList]
);
export var ListRecommendationsRequest = struct(
  n0,
  _LRR,
  0,
  [_nT, _mR, _t, _st, _pi, _aSw, _s, _cI, _aLUA, _bLUA],
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
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _pi,
      },
    ],
    [
      0,
      {
        [_hQ]: _aSw,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      4,
      {
        [_hQ]: _aLUA,
      },
    ],
    [
      4,
      {
        [_hQ]: _bLUA,
      },
    ],
  ]
);
export var ListRecommendationsResponse = struct(n0, _LRRi, 0, [_nT, _rS], [0, () => RecommendationSummaryList]);
export var OrganizationRecommendation = struct(
  n0,
  _OR,
  0,
  [_i, _t, _cA, _st, _lS, _p, _s, _aS, _n, _rA, _pSA, _cAr, _lUA, _a, _d, _cB, _uOBO, _uOBOJT, _uR, _uRC, _rAe],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => RecommendationResourcesAggregates,
    () => RecommendationPillarSpecificAggregates,
    5,
    5,
    0,
    0,
    0,
    0,
    0,
    [() => RecommendationUpdateReason, 0],
    0,
    5,
  ]
);
export var OrganizationRecommendationResourceSummary = struct(
  n0,
  _ORRS,
  0,
  [_i, _a, _aRI, _rC, _st, _me, _lUA, _eS, _aI, _rAec],
  [0, 0, 0, 0, 0, 128 | 0, 5, 0, 0, 0]
);
export var OrganizationRecommendationSummary = struct(
  n0,
  _ORS,
  0,
  [_i, _t, _cA, _st, _lS, _p, _s, _aS, _n, _rA, _pSA, _cAr, _lUA, _a],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => RecommendationResourcesAggregates,
    () => RecommendationPillarSpecificAggregates,
    5,
    5,
    0,
  ]
);
export var Recommendation = struct(
  n0,
  _R,
  0,
  [_i, _t, _cA, _st, _lS, _p, _s, _aS, _n, _rA, _pSA, _cAr, _lUA, _a, _d, _cB, _uOBO, _uOBOJT, _uR, _uRC, _rAe],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => RecommendationResourcesAggregates,
    () => RecommendationPillarSpecificAggregates,
    5,
    5,
    0,
    0,
    0,
    0,
    0,
    [() => RecommendationUpdateReason, 0],
    0,
    5,
  ]
);
export var RecommendationCostOptimizingAggregates = struct(n0, _RCOA, 0, [_eMS, _ePMS], [1, 1]);
export var RecommendationPillarSpecificAggregates = struct(
  n0,
  _RPSA,
  0,
  [_cO],
  [() => RecommendationCostOptimizingAggregates]
);
export var RecommendationResourceExclusion = struct(n0, _RRE, 0, [_a, _iE], [0, 2]);
export var RecommendationResourcesAggregates = struct(n0, _RRA, 0, [_oC, _wC, _eC], [1, 1, 1]);
export var RecommendationResourceSummary = struct(
  n0,
  _RRS,
  0,
  [_i, _a, _aRI, _rC, _st, _me, _lUA, _eS, _rAec],
  [0, 0, 0, 0, 0, 128 | 0, 5, 0, 0]
);
export var RecommendationSummary = struct(
  n0,
  _RS,
  0,
  [_i, _t, _cA, _st, _lS, _p, _s, _aS, _n, _rA, _pSA, _cAr, _lUA, _a],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => RecommendationResourcesAggregates,
    () => RecommendationPillarSpecificAggregates,
    5,
    5,
    0,
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpdateOrganizationRecommendationLifecycleRequest = struct(
  n0,
  _UORLR,
  0,
  [_lS, _uR, _uRC, _oRI],
  [0, [() => RecommendationUpdateReason, 0], 0, [0, 1]]
);
export var UpdateRecommendationLifecycleRequest = struct(
  n0,
  _URLR,
  0,
  [_lS, _uR, _uRC, _rI],
  [0, [() => RecommendationUpdateReason, 0], 0, [0, 1]]
);
export var UpdateRecommendationResourceExclusionError = struct(n0, _URREE, 0, [_a, _eCr, _eM], [0, 0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var AccountRecommendationLifecycleSummaryList = list(n0, _ARLSL, 0, [
  () => AccountRecommendationLifecycleSummary,
  0,
]);
export var CheckSummaryList = list(n0, _CSL, 0, () => CheckSummary);
export var OrganizationRecommendationResourceSummaryList = list(
  n0,
  _ORRSL,
  0,
  () => OrganizationRecommendationResourceSummary
);
export var OrganizationRecommendationSummaryList = list(n0, _ORSL, 0, () => OrganizationRecommendationSummary);
export var RecommendationAwsServiceList = 64 | 0;

export var RecommendationPillarList = 64 | 0;

export var RecommendationResourceExclusionList = list(n0, _RREL, 0, () => RecommendationResourceExclusion);
export var RecommendationResourceSummaryList = list(n0, _RRSL, 0, () => RecommendationResourceSummary);
export var RecommendationSummaryList = list(n0, _RSL, 0, () => RecommendationSummary);
export var UpdateRecommendationResourceExclusionErrorList = list(
  n0,
  _URREEL,
  0,
  () => UpdateRecommendationResourceExclusionError
);
export var StringMap = 128 | 0;

export var BatchUpdateRecommendationResourceExclusion = op(
  n0,
  _BURRE,
  {
    [_h]: ["PUT", "/v1/batch-update-recommendation-resource-exclusion", 200],
  },
  () => BatchUpdateRecommendationResourceExclusionRequest,
  () => BatchUpdateRecommendationResourceExclusionResponse
);
export var GetOrganizationRecommendation = op(
  n0,
  _GOR,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}", 200],
  },
  () => GetOrganizationRecommendationRequest,
  () => GetOrganizationRecommendationResponse
);
export var GetRecommendation = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/recommendations/{recommendationIdentifier}", 200],
  },
  () => GetRecommendationRequest,
  () => GetRecommendationResponse
);
export var ListChecks = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/v1/checks", 200],
  },
  () => ListChecksRequest,
  () => ListChecksResponse
);
export var ListOrganizationRecommendationAccounts = op(
  n0,
  _LORA,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts", 200],
  },
  () => ListOrganizationRecommendationAccountsRequest,
  () => ListOrganizationRecommendationAccountsResponse
);
export var ListOrganizationRecommendationResources = op(
  n0,
  _LORRis,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/resources", 200],
  },
  () => ListOrganizationRecommendationResourcesRequest,
  () => ListOrganizationRecommendationResourcesResponse
);
export var ListOrganizationRecommendations = op(
  n0,
  _LOR,
  {
    [_h]: ["GET", "/v1/organization-recommendations", 200],
  },
  () => ListOrganizationRecommendationsRequest,
  () => ListOrganizationRecommendationsResponse
);
export var ListRecommendationResources = op(
  n0,
  _LRRis,
  {
    [_h]: ["GET", "/v1/recommendations/{recommendationIdentifier}/resources", 200],
  },
  () => ListRecommendationResourcesRequest,
  () => ListRecommendationResourcesResponse
);
export var ListRecommendations = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/recommendations", 200],
  },
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse
);
export var UpdateOrganizationRecommendationLifecycle = op(
  n0,
  _UORL,
  {
    [_h]: ["PUT", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle", 200],
  },
  () => UpdateOrganizationRecommendationLifecycleRequest,
  () => Unit
);
export var UpdateRecommendationLifecycle = op(
  n0,
  _URL,
  {
    [_h]: ["PUT", "/v1/recommendations/{recommendationIdentifier}/lifecycle", 200],
  },
  () => UpdateRecommendationLifecycleRequest,
  () => Unit
);
