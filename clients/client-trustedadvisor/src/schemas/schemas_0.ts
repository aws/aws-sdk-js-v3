const _ADE = "AccessDeniedException";
const _ARLS = "AccountRecommendationLifecycleSummary";
const _ARLSL = "AccountRecommendationLifecycleSummaryList";
const _BURRE = "BatchUpdateRecommendationResourceExclusion";
const _BURRER = "BatchUpdateRecommendationResourceExclusionRequest";
const _BURRERa = "BatchUpdateRecommendationResourceExclusionResponse";
const _CE = "ConflictException";
const _CS = "CheckSummary";
const _CSL = "CheckSummaryList";
const _GOR = "GetOrganizationRecommendation";
const _GORR = "GetOrganizationRecommendationRequest";
const _GORRe = "GetOrganizationRecommendationResponse";
const _GR = "GetRecommendation";
const _GRR = "GetRecommendationRequest";
const _GRRe = "GetRecommendationResponse";
const _ISE = "InternalServerException";
const _LC = "ListChecks";
const _LCR = "ListChecksRequest";
const _LCRi = "ListChecksResponse";
const _LOR = "ListOrganizationRecommendations";
const _LORA = "ListOrganizationRecommendationAccounts";
const _LORAR = "ListOrganizationRecommendationAccountsRequest";
const _LORARi = "ListOrganizationRecommendationAccountsResponse";
const _LORR = "ListOrganizationRecommendationsRequest";
const _LORRR = "ListOrganizationRecommendationResourcesRequest";
const _LORRRi = "ListOrganizationRecommendationResourcesResponse";
const _LORRi = "ListOrganizationRecommendationsResponse";
const _LORRis = "ListOrganizationRecommendationResources";
const _LR = "ListRecommendations";
const _LRR = "ListRecommendationsRequest";
const _LRRR = "ListRecommendationResourcesRequest";
const _LRRRi = "ListRecommendationResourcesResponse";
const _LRRi = "ListRecommendationsResponse";
const _LRRis = "ListRecommendationResources";
const _OR = "OrganizationRecommendation";
const _ORRS = "OrganizationRecommendationResourceSummary";
const _ORRSL = "OrganizationRecommendationResourceSummaryList";
const _ORS = "OrganizationRecommendationSummary";
const _ORSL = "OrganizationRecommendationSummaryList";
const _R = "Recommendation";
const _RCOA = "RecommendationCostOptimizingAggregates";
const _RNFE = "ResourceNotFoundException";
const _RPSA = "RecommendationPillarSpecificAggregates";
const _RRA = "RecommendationResourcesAggregates";
const _RRE = "RecommendationResourceExclusion";
const _RREL = "RecommendationResourceExclusionList";
const _RRS = "RecommendationResourceSummary";
const _RRSL = "RecommendationResourceSummaryList";
const _RS = "RecommendationSummary";
const _RSL = "RecommendationSummaryList";
const _RUR = "RecommendationUpdateReason";
const _TE = "ThrottlingException";
const _UORL = "UpdateOrganizationRecommendationLifecycle";
const _UORLR = "UpdateOrganizationRecommendationLifecycleRequest";
const _URL = "UpdateRecommendationLifecycle";
const _URLR = "UpdateRecommendationLifecycleRequest";
const _URREE = "UpdateRecommendationResourceExclusionError";
const _URREEL = "UpdateRecommendationResourceExclusionErrorList";
const _VE = "ValidationException";
const _a = "arn";
const _aAI = "affectedAccountId";
const _aI = "accountId";
const _aLUA = "afterLastUpdatedAt";
const _aRA = "accountRecommendationArn";
const _aRI = "awsResourceId";
const _aRLS = "accountRecommendationLifecycleSummaries";
const _aS = "awsServices";
const _aSw = "awsService";
const _bLUA = "beforeLastUpdatedAt";
const _bURREE = "batchUpdateRecommendationResourceExclusionErrors";
const _c = "client";
const _cA = "checkArn";
const _cAr = "createdAt";
const _cB = "createdBy";
const _cI = "checkIdentifier";
const _cO = "costOptimizing";
const _cS = "checkSummaries";
const _d = "description";
const _e = "error";
const _eC = "errorCount";
const _eCr = "errorCode";
const _eM = "errorMessage";
const _eMS = "estimatedMonthlySavings";
const _ePMS = "estimatedPercentMonthlySavings";
const _eS = "exclusionStatus";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _iE = "isExcluded";
const _l = "language";
const _lS = "lifecycleStage";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mR = "maxResults";
const _me = "metadata";
const _n = "name";
const _nT = "nextToken";
const _oC = "okCount";
const _oR = "organizationRecommendation";
const _oRI = "organizationRecommendationIdentifier";
const _oRRS = "organizationRecommendationResourceSummaries";
const _oRS = "organizationRecommendationSummaries";
const _p = "pillars";
const _pSA = "pillarSpecificAggregates";
const _pi = "pillar";
const _r = "recommendation";
const _rA = "resourcesAggregates";
const _rAe = "resolvedAt";
const _rAec = "recommendationArn";
const _rC = "regionCode";
const _rI = "recommendationIdentifier";
const _rRE = "recommendationResourceExclusions";
const _rRS = "recommendationResourceSummaries";
const _rS = "recommendationSummaries";
const _s = "source";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.trustedadvisor";
const _st = "status";
const _t = "type";
const _uOBO = "updatedOnBehalfOf";
const _uOBOJT = "updatedOnBehalfOfJobTitle";
const _uR = "updateReason";
const _uRC = "updateReasonCode";
const _wC = "warningCount";
const n0 = "com.amazonaws.trustedadvisor";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { TrustedAdvisorServiceException as __TrustedAdvisorServiceException } from "../models/TrustedAdvisorServiceException";

/* eslint no-var: 0 */

export var RecommendationUpdateReason: StaticSimpleSchema = [0, n0, _RUR, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AccountRecommendationLifecycleSummary: StaticStructureSchema = [
  3,
  n0,
  _ARLS,
  0,
  [_aI, _aRA, _lS, _uOBO, _uOBOJT, _uR, _uRC, _lUA],
  [0, 0, 0, 0, 0, [() => RecommendationUpdateReason, 0], 0, 5],
];
export var BatchUpdateRecommendationResourceExclusionRequest: StaticStructureSchema = [
  3,
  n0,
  _BURRER,
  0,
  [_rRE],
  [() => RecommendationResourceExclusionList],
];
export var BatchUpdateRecommendationResourceExclusionResponse: StaticStructureSchema = [
  3,
  n0,
  _BURRERa,
  0,
  [_bURREE],
  [() => UpdateRecommendationResourceExclusionErrorList],
];
export var CheckSummary: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_i, _a, _n, _d, _p, _aS, _s, _me],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 128 | 0],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var GetOrganizationRecommendationRequest: StaticStructureSchema = [3, n0, _GORR, 0, [_oRI], [[0, 1]]];
export var GetOrganizationRecommendationResponse: StaticStructureSchema = [
  3,
  n0,
  _GORRe,
  0,
  [_oR],
  [[() => OrganizationRecommendation, 0]],
];
export var GetRecommendationRequest: StaticStructureSchema = [3, n0, _GRR, 0, [_rI], [[0, 1]]];
export var GetRecommendationResponse: StaticStructureSchema = [3, n0, _GRRe, 0, [_r], [[() => Recommendation, 0]]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListChecksRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListChecksResponse: StaticStructureSchema = [3, n0, _LCRi, 0, [_nT, _cS], [0, () => CheckSummaryList]];
export var ListOrganizationRecommendationAccountsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListOrganizationRecommendationAccountsResponse: StaticStructureSchema = [
  3,
  n0,
  _LORARi,
  0,
  [_nT, _aRLS],
  [0, [() => AccountRecommendationLifecycleSummaryList, 0]],
];
export var ListOrganizationRecommendationResourcesRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListOrganizationRecommendationResourcesResponse: StaticStructureSchema = [
  3,
  n0,
  _LORRRi,
  0,
  [_nT, _oRRS],
  [0, () => OrganizationRecommendationResourceSummaryList],
];
export var ListOrganizationRecommendationsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListOrganizationRecommendationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LORRi,
  0,
  [_nT, _oRS],
  [0, () => OrganizationRecommendationSummaryList],
];
export var ListRecommendationResourcesRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListRecommendationResourcesResponse: StaticStructureSchema = [
  3,
  n0,
  _LRRRi,
  0,
  [_nT, _rRS],
  [0, () => RecommendationResourceSummaryList],
];
export var ListRecommendationsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListRecommendationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRRi,
  0,
  [_nT, _rS],
  [0, () => RecommendationSummaryList],
];
export var OrganizationRecommendation: StaticStructureSchema = [
  3,
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
  ],
];
export var OrganizationRecommendationResourceSummary: StaticStructureSchema = [
  3,
  n0,
  _ORRS,
  0,
  [_i, _a, _aRI, _rC, _st, _me, _lUA, _eS, _aI, _rAec],
  [0, 0, 0, 0, 0, 128 | 0, 5, 0, 0, 0],
];
export var OrganizationRecommendationSummary: StaticStructureSchema = [
  3,
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
  ],
];
export var Recommendation: StaticStructureSchema = [
  3,
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
  ],
];
export var RecommendationCostOptimizingAggregates: StaticStructureSchema = [3, n0, _RCOA, 0, [_eMS, _ePMS], [1, 1]];
export var RecommendationPillarSpecificAggregates: StaticStructureSchema = [
  3,
  n0,
  _RPSA,
  0,
  [_cO],
  [() => RecommendationCostOptimizingAggregates],
];
export var RecommendationResourceExclusion: StaticStructureSchema = [3, n0, _RRE, 0, [_a, _iE], [0, 2]];
export var RecommendationResourcesAggregates: StaticStructureSchema = [3, n0, _RRA, 0, [_oC, _wC, _eC], [1, 1, 1]];
export var RecommendationResourceSummary: StaticStructureSchema = [
  3,
  n0,
  _RRS,
  0,
  [_i, _a, _aRI, _rC, _st, _me, _lUA, _eS, _rAec],
  [0, 0, 0, 0, 0, 128 | 0, 5, 0, 0],
];
export var RecommendationSummary: StaticStructureSchema = [
  3,
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
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UpdateOrganizationRecommendationLifecycleRequest: StaticStructureSchema = [
  3,
  n0,
  _UORLR,
  0,
  [_lS, _uR, _uRC, _oRI],
  [0, [() => RecommendationUpdateReason, 0], 0, [0, 1]],
];
export var UpdateRecommendationLifecycleRequest: StaticStructureSchema = [
  3,
  n0,
  _URLR,
  0,
  [_lS, _uR, _uRC, _rI],
  [0, [() => RecommendationUpdateReason, 0], 0, [0, 1]],
];
export var UpdateRecommendationResourceExclusionError: StaticStructureSchema = [
  3,
  n0,
  _URREE,
  0,
  [_a, _eCr, _eM],
  [0, 0, 0],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var TrustedAdvisorServiceException: StaticErrorSchema = [-3, _sm, "TrustedAdvisorServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(TrustedAdvisorServiceException, __TrustedAdvisorServiceException);

export var AccountRecommendationLifecycleSummaryList: StaticListSchema = [
  1,
  n0,
  _ARLSL,
  0,
  [() => AccountRecommendationLifecycleSummary, 0],
];
export var CheckSummaryList: StaticListSchema = [1, n0, _CSL, 0, () => CheckSummary];
export var OrganizationRecommendationResourceSummaryList: StaticListSchema = [
  1,
  n0,
  _ORRSL,
  0,
  () => OrganizationRecommendationResourceSummary,
];
export var OrganizationRecommendationSummaryList: StaticListSchema = [
  1,
  n0,
  _ORSL,
  0,
  () => OrganizationRecommendationSummary,
];
export var RecommendationAwsServiceList = 64 | 0;

export var RecommendationPillarList = 64 | 0;

export var RecommendationResourceExclusionList: StaticListSchema = [
  1,
  n0,
  _RREL,
  0,
  () => RecommendationResourceExclusion,
];
export var RecommendationResourceSummaryList: StaticListSchema = [1, n0, _RRSL, 0, () => RecommendationResourceSummary];
export var RecommendationSummaryList: StaticListSchema = [1, n0, _RSL, 0, () => RecommendationSummary];
export var UpdateRecommendationResourceExclusionErrorList: StaticListSchema = [
  1,
  n0,
  _URREEL,
  0,
  () => UpdateRecommendationResourceExclusionError,
];
export var StringMap = 128 | 0;

export var BatchUpdateRecommendationResourceExclusion: StaticOperationSchema = [
  9,
  n0,
  _BURRE,
  {
    [_h]: ["PUT", "/v1/batch-update-recommendation-resource-exclusion", 200],
  },
  () => BatchUpdateRecommendationResourceExclusionRequest,
  () => BatchUpdateRecommendationResourceExclusionResponse,
];
export var GetOrganizationRecommendation: StaticOperationSchema = [
  9,
  n0,
  _GOR,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}", 200],
  },
  () => GetOrganizationRecommendationRequest,
  () => GetOrganizationRecommendationResponse,
];
export var GetRecommendation: StaticOperationSchema = [
  9,
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/recommendations/{recommendationIdentifier}", 200],
  },
  () => GetRecommendationRequest,
  () => GetRecommendationResponse,
];
export var ListChecks: StaticOperationSchema = [
  9,
  n0,
  _LC,
  {
    [_h]: ["GET", "/v1/checks", 200],
  },
  () => ListChecksRequest,
  () => ListChecksResponse,
];
export var ListOrganizationRecommendationAccounts: StaticOperationSchema = [
  9,
  n0,
  _LORA,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts", 200],
  },
  () => ListOrganizationRecommendationAccountsRequest,
  () => ListOrganizationRecommendationAccountsResponse,
];
export var ListOrganizationRecommendationResources: StaticOperationSchema = [
  9,
  n0,
  _LORRis,
  {
    [_h]: ["GET", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/resources", 200],
  },
  () => ListOrganizationRecommendationResourcesRequest,
  () => ListOrganizationRecommendationResourcesResponse,
];
export var ListOrganizationRecommendations: StaticOperationSchema = [
  9,
  n0,
  _LOR,
  {
    [_h]: ["GET", "/v1/organization-recommendations", 200],
  },
  () => ListOrganizationRecommendationsRequest,
  () => ListOrganizationRecommendationsResponse,
];
export var ListRecommendationResources: StaticOperationSchema = [
  9,
  n0,
  _LRRis,
  {
    [_h]: ["GET", "/v1/recommendations/{recommendationIdentifier}/resources", 200],
  },
  () => ListRecommendationResourcesRequest,
  () => ListRecommendationResourcesResponse,
];
export var ListRecommendations: StaticOperationSchema = [
  9,
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/recommendations", 200],
  },
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse,
];
export var UpdateOrganizationRecommendationLifecycle: StaticOperationSchema = [
  9,
  n0,
  _UORL,
  {
    [_h]: ["PUT", "/v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle", 200],
  },
  () => UpdateOrganizationRecommendationLifecycleRequest,
  () => __Unit,
];
export var UpdateRecommendationLifecycle: StaticOperationSchema = [
  9,
  n0,
  _URL,
  {
    [_h]: ["PUT", "/v1/recommendations/{recommendationIdentifier}/lifecycle", 200],
  },
  () => UpdateRecommendationLifecycleRequest,
  () => __Unit,
];
