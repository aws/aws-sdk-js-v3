const _A = "And";
const _ADE = "AccessDeniedException";
const _AR = "ActivityReward";
const _AS = "ActivitySummary";
const _Ac = "Activities";
const _D = "Dimensions";
const _DV = "DimensionValues";
const _E = "Expression";
const _Ex = "Expressions";
const _FTU = "FreeTierUsage";
const _FTUr = "FreeTierUsages";
const _GAA = "GetAccountActivity";
const _GAAR = "GetAccountActivityRequest";
const _GAARe = "GetAccountActivityResponse";
const _GAPS = "GetAccountPlanState";
const _GAPSR = "GetAccountPlanStateRequest";
const _GAPSRe = "GetAccountPlanStateResponse";
const _GFTU = "GetFreeTierUsage";
const _GFTUR = "GetFreeTierUsageRequest";
const _GFTURe = "GetFreeTierUsageResponse";
const _ISE = "InternalServerException";
const _K = "Key";
const _LAA = "ListAccountActivities";
const _LAAR = "ListAccountActivitiesRequest";
const _LAARi = "ListAccountActivitiesResponse";
const _MA = "MonetaryAmount";
const _MO = "MatchOptions";
const _N = "Not";
const _O = "Or";
const _RNFE = "ResourceNotFoundException";
const _TE = "ThrottlingException";
const _UAP = "UpgradeAccountPlan";
const _UAPR = "UpgradeAccountPlanRequest";
const _UAPRp = "UpgradeAccountPlanResponse";
const _V = "Values";
const _VE = "ValidationException";
const _a = "activities";
const _aI = "activityId";
const _aIc = "accountId";
const _aPED = "accountPlanExpirationDate";
const _aPRC = "accountPlanRemainingCredits";
const _aPS = "accountPlanStatus";
const _aPT = "accountPlanType";
const _aUA = "actualUsageAmount";
const _am = "amount";
const _c = "client";
const _cA = "completedAt";
const _cr = "credit";
const _d = "description";
const _e = "error";
const _eA = "expiresAt";
const _eTTCIM = "estimatedTimeToCompleteInMinutes";
const _f = "filter";
const _fAS = "filterActivityStatuses";
const _fTT = "freeTierType";
const _fTU = "freeTierUsages";
const _fUA = "forecastedUsageAmount";
const _hE = "httpError";
const _iU = "instructionsUrl";
const _l = "limit";
const _lC = "languageCode";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _o = "operation";
const _r = "reward";
const _re = "region";
const _s = "status";
const _sA = "startedAt";
const _se = "service";
const _ser = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.freetier";
const _t = "title";
const _u = "unit";
const _uT = "usageType";
const n0 = "com.amazonaws.freetier";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { FreeTierServiceException as __FreeTierServiceException } from "../models/FreeTierServiceException";

/* eslint no-var: 0 */

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

export var ActivitySummary: StaticStructureSchema = [3, n0, _AS, 0, [_aI, _t, _r, _s], [0, 0, () => ActivityReward, 0]];
export var DimensionValues: StaticStructureSchema = [3, n0, _DV, 0, [_K, _V, _MO], [0, 64 | 0, 64 | 0]];
export var Expression: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_O, _A, _N, _D],
  [() => Expressions, () => Expressions, () => Expression, () => DimensionValues],
];
export var FreeTierUsage: StaticStructureSchema = [
  3,
  n0,
  _FTU,
  0,
  [_se, _o, _uT, _re, _aUA, _fUA, _l, _u, _d, _fTT],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];
export var GetAccountActivityRequest: StaticStructureSchema = [3, n0, _GAAR, 0, [_aI, _lC], [0, 0]];
export var GetAccountActivityResponse: StaticStructureSchema = [
  3,
  n0,
  _GAARe,
  0,
  [_aI, _t, _d, _s, _iU, _r, _eTTCIM, _eA, _sA, _cA],
  [0, 0, 0, 0, 0, () => ActivityReward, 1, 5, 5, 5],
];
export var GetAccountPlanStateRequest: StaticStructureSchema = [3, n0, _GAPSR, 0, [], []];
export var GetAccountPlanStateResponse: StaticStructureSchema = [
  3,
  n0,
  _GAPSRe,
  0,
  [_aIc, _aPT, _aPS, _aPRC, _aPED],
  [0, 0, 0, () => MonetaryAmount, 5],
];
export var GetFreeTierUsageRequest: StaticStructureSchema = [
  3,
  n0,
  _GFTUR,
  0,
  [_f, _mR, _nT],
  [() => Expression, 1, 0],
];
export var GetFreeTierUsageResponse: StaticStructureSchema = [
  3,
  n0,
  _GFTURe,
  0,
  [_fTU, _nT],
  [() => FreeTierUsages, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListAccountActivitiesRequest: StaticStructureSchema = [
  3,
  n0,
  _LAAR,
  0,
  [_fAS, _nT, _mR, _lC],
  [64 | 0, 0, 1, 0],
];
export var ListAccountActivitiesResponse: StaticStructureSchema = [3, n0, _LAARi, 0, [_a, _nT], [() => Activities, 0]];
export var MonetaryAmount: StaticStructureSchema = [3, n0, _MA, 0, [_am, _u], [1, 0]];
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

export var UpgradeAccountPlanRequest: StaticStructureSchema = [3, n0, _UAPR, 0, [_aPT], [0]];
export var UpgradeAccountPlanResponse: StaticStructureSchema = [3, n0, _UAPRp, 0, [_aIc, _aPT, _aPS], [0, 0, 0]];
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

export var FreeTierServiceException: StaticErrorSchema = [-3, _sm, "FreeTierServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(FreeTierServiceException, __FreeTierServiceException);

export var Activities: StaticListSchema = [1, n0, _Ac, 0, () => ActivitySummary];
export var Expressions: StaticListSchema = [1, n0, _Ex, 0, () => Expression];
export var FilterActivityStatuses = 64 | 0;

export var FreeTierUsages: StaticListSchema = [1, n0, _FTUr, 0, () => FreeTierUsage];
export var MatchOptions = 64 | 0;

export var Values = 64 | 0;

export var ActivityReward: StaticStructureSchema = [3, n0, _AR, 0, [_cr], [() => MonetaryAmount]];
export var GetAccountActivity: StaticOperationSchema = [
  9,
  n0,
  _GAA,
  0,
  () => GetAccountActivityRequest,
  () => GetAccountActivityResponse,
];
export var GetAccountPlanState: StaticOperationSchema = [
  9,
  n0,
  _GAPS,
  0,
  () => GetAccountPlanStateRequest,
  () => GetAccountPlanStateResponse,
];
export var GetFreeTierUsage: StaticOperationSchema = [
  9,
  n0,
  _GFTU,
  0,
  () => GetFreeTierUsageRequest,
  () => GetFreeTierUsageResponse,
];
export var ListAccountActivities: StaticOperationSchema = [
  9,
  n0,
  _LAA,
  0,
  () => ListAccountActivitiesRequest,
  () => ListAccountActivitiesResponse,
];
export var UpgradeAccountPlan: StaticOperationSchema = [
  9,
  n0,
  _UAP,
  0,
  () => UpgradeAccountPlanRequest,
  () => UpgradeAccountPlanResponse,
];
