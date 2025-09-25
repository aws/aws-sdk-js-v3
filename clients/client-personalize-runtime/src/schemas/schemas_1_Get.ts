// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidInputException as __InvalidInputException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _aI,
  _AL,
  _aL,
  _AV,
  _C,
  _c,
  _cA,
  _cl,
  _e,
  _fA,
  _FAV,
  _FV,
  _fV,
  _GAR,
  _GARR,
  _GARRe,
  _GPR,
  _GPRR,
  _GPRRe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _iI,
  _IIE,
  _IL,
  _iL,
  _iLt,
  _M,
  _m,
  _MC,
  _mC,
  _me,
  _n,
  _nR,
  _P,
  _p,
  _PA,
  _PI,
  _PL,
  _pN,
  _pPI,
  _pR,
  _r,
  _rA,
  _rI,
  _RNFE,
  _s,
  _uI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeValue = sim(n0, _AV, 0, 8);
export var FilterAttributeValue = sim(n0, _FAV, 0, 8);
export var GetActionRecommendationsRequest = struct(
  n0,
  _GARR,
  0,
  [_cA, _uI, _nR, _fA, _fV],
  [0, 0, 1, 0, [() => FilterValues, 0]]
);
export var GetActionRecommendationsResponse = struct(n0, _GARRe, 0, [_aL, _rI], [() => ActionList, 0]);
export var GetPersonalizedRankingRequest = struct(
  n0,
  _GPRR,
  0,
  [_cA, _iL, _uI, _c, _fA, _fV, _mC],
  [0, 64 | 0, 0, [() => Context, 0], 0, [() => FilterValues, 0], map(n0, _MC, 0, 0, 64 | 0)]
);
export var GetPersonalizedRankingResponse = struct(n0, _GPRRe, 0, [_pR, _rI], [[() => ItemList, 0], 0]);
export var GetRecommendationsRequest = struct(
  n0,
  _GRR,
  0,
  [_cA, _iI, _uI, _nR, _c, _fA, _fV, _rA, _p, _mC],
  [0, 0, 0, 1, [() => Context, 0], 0, [() => FilterValues, 0], 0, [() => PromotionList, 0], map(n0, _MC, 0, 0, 64 | 0)]
);
export var GetRecommendationsResponse = struct(n0, _GRRe, 0, [_iLt, _rI], [[() => ItemList, 0], 0]);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidInputException
);
export var PredictedAction = struct(n0, _PA, 0, [_aI, _s], [0, 1]);
export var PredictedItem = struct(n0, _PI, 0, [_iI, _s, _pN, _me, _r], [0, 1, 0, [() => Metadata, 0], 64 | 0]);
export var Promotion = struct(n0, _P, 0, [_n, _pPI, _fA, _fV], [0, 1, 0, [() => FilterValues, 0]]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ActionList = list(n0, _AL, 0, () => PredictedAction);
export var ColumnNamesList = 64 | 0;

export var InputList = 64 | 0;

export var ItemList = list(n0, _IL, 0, [() => PredictedItem, 0]);
export var PromotionList = list(n0, _PL, 0, [() => Promotion, 0]);
export var ReasonList = 64 | 0;

export var Context = map(n0, _C, 0, [0, 0], [() => AttributeValue, 0]);
export var FilterValues = map(n0, _FV, 0, [0, 0], [() => FilterAttributeValue, 0]);
export var Metadata = map(n0, _M, 8, 0, 0);
export var MetadataColumns = map(n0, _MC, 0, 0, 64 | 0);
export var GetActionRecommendations = op(
  n0,
  _GAR,
  {
    [_h]: ["POST", "/action-recommendations", 200],
  },
  () => GetActionRecommendationsRequest,
  () => GetActionRecommendationsResponse
);
export var GetPersonalizedRanking = op(
  n0,
  _GPR,
  {
    [_h]: ["POST", "/personalize-ranking", 200],
  },
  () => GetPersonalizedRankingRequest,
  () => GetPersonalizedRankingResponse
);
export var GetRecommendations = op(
  n0,
  _GR,
  {
    [_h]: ["POST", "/recommendations", 200],
  },
  () => GetRecommendationsRequest,
  () => GetRecommendationsResponse
);
