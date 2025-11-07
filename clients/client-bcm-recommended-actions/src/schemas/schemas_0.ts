export const _ADE = "AccessDeniedException";
export const _AF = "ActionFilter";
export const _AFL = "ActionFilterList";
export const _ISE = "InternalServerException";
export const _LRA = "ListRecommendedActions";
export const _LRAR = "ListRecommendedActionsRequest";
export const _LRARi = "ListRecommendedActionsResponse";
export const _RA = "RecommendedAction";
export const _RAe = "RecommendedActions";
export const _RF = "RequestFilter";
export const _TE = "ThrottlingException";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "actions";
export const _aI = "accountId";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _co = "context";
export const _e = "error";
export const _f = "filter";
export const _fL = "fieldList";
export const _fe = "feature";
export const _hE = "httpError";
export const _i = "id";
export const _k = "key";
export const _lUTS = "lastUpdatedTimeStamp";
export const _m = "message";
export const _mO = "matchOption";
export const _mR = "maxResults";
export const _n = "name";
export const _nS = "nextSteps";
export const _nT = "nextToken";
export const _r = "reason";
export const _rA = "recommendedActions";
export const _s = "server";
export const _se = "severity";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bcmrecommendedactions";
export const _t = "type";
export const _v = "values";
export const n0 = "com.amazonaws.bcmrecommendedactions";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { BCMRecommendedActionsServiceException as __BCMRecommendedActionsServiceException } from "../models/BCMRecommendedActionsServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
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
    [_aQE]: [`BCMRecommendedActionsAccessDenied`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ActionFilter: StaticStructureSchema = [3, n0, _AF, 0, [_k, _mO, _v], [0, 0, 64 | 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`BCMRecommendedActionsInternalServer`, 500],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListRecommendedActionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LRAR,
  0,
  [_f, _mR, _nT],
  [() => RequestFilter, 1, 0],
];
export var ListRecommendedActionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRARi,
  0,
  [_rA, _nT],
  [() => RecommendedActions, 0],
];
export var RecommendedAction: StaticStructureSchema = [
  3,
  n0,
  _RA,
  0,
  [_i, _t, _aI, _se, _fe, _co, _nS, _lUTS],
  [0, 0, 0, 0, 0, 128 | 0, 64 | 0, 0],
];
export var RequestFilter: StaticStructureSchema = [3, n0, _RF, 0, [_a], [() => ActionFilterList]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`BCMRecommendedActionsThrottling`, 429],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BCMRecommendedActionsValidation`, 400],
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var BCMRecommendedActionsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "BCMRecommendedActionsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(BCMRecommendedActionsServiceException, __BCMRecommendedActionsServiceException);

export var ActionFilterList: StaticListSchema = [1, n0, _AFL, 0, () => ActionFilter];
export var FilterValues = 64 | 0;

export var NextSteps = 64 | 0;

export var RecommendedActions: StaticListSchema = [1, n0, _RAe, 0, () => RecommendedAction];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var Context = 128 | 0;

export var ListRecommendedActions: StaticOperationSchema = [
  9,
  n0,
  _LRA,
  0,
  () => ListRecommendedActionsRequest,
  () => ListRecommendedActionsResponse,
];
