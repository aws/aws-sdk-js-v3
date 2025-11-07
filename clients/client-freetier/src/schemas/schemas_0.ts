export const _A = "And";
export const _ADE = "AccessDeniedException";
export const _AR = "ActivityReward";
export const _AS = "ActivitySummary";
export const _Ac = "Activities";
export const _D = "Dimensions";
export const _DV = "DimensionValues";
export const _E = "Expression";
export const _Ex = "Expressions";
export const _FTU = "FreeTierUsage";
export const _FTUr = "FreeTierUsages";
export const _GAA = "GetAccountActivity";
export const _GAAR = "GetAccountActivityRequest";
export const _GAARe = "GetAccountActivityResponse";
export const _GAPS = "GetAccountPlanState";
export const _GAPSR = "GetAccountPlanStateRequest";
export const _GAPSRe = "GetAccountPlanStateResponse";
export const _GFTU = "GetFreeTierUsage";
export const _GFTUR = "GetFreeTierUsageRequest";
export const _GFTURe = "GetFreeTierUsageResponse";
export const _ISE = "InternalServerException";
export const _K = "Key";
export const _LAA = "ListAccountActivities";
export const _LAAR = "ListAccountActivitiesRequest";
export const _LAARi = "ListAccountActivitiesResponse";
export const _MA = "MonetaryAmount";
export const _MO = "MatchOptions";
export const _N = "Not";
export const _O = "Or";
export const _RNFE = "ResourceNotFoundException";
export const _TE = "ThrottlingException";
export const _UAP = "UpgradeAccountPlan";
export const _UAPR = "UpgradeAccountPlanRequest";
export const _UAPRp = "UpgradeAccountPlanResponse";
export const _V = "Values";
export const _VE = "ValidationException";
export const _a = "activities";
export const _aI = "activityId";
export const _aIc = "accountId";
export const _aPED = "accountPlanExpirationDate";
export const _aPRC = "accountPlanRemainingCredits";
export const _aPS = "accountPlanStatus";
export const _aPT = "accountPlanType";
export const _aUA = "actualUsageAmount";
export const _am = "amount";
export const _c = "client";
export const _cA = "completedAt";
export const _cr = "credit";
export const _d = "description";
export const _e = "error";
export const _eA = "expiresAt";
export const _eTTCIM = "estimatedTimeToCompleteInMinutes";
export const _f = "filter";
export const _fAS = "filterActivityStatuses";
export const _fTT = "freeTierType";
export const _fTU = "freeTierUsages";
export const _fUA = "forecastedUsageAmount";
export const _hE = "httpError";
export const _iU = "instructionsUrl";
export const _l = "limit";
export const _lC = "languageCode";
export const _m = "message";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _o = "operation";
export const _r = "reward";
export const _re = "region";
export const _s = "status";
export const _sA = "startedAt";
export const _se = "service";
export const _ser = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.freetier";
export const _t = "title";
export const _u = "unit";
export const _uT = "usageType";
export const n0 = "com.amazonaws.freetier";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { FreeTierServiceException as __FreeTierServiceException } from "../models/FreeTierServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

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
