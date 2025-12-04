const _AL = "ActionList";
const _AV = "AttributeValue";
const _C = "Context";
const _FAV = "FilterAttributeValue";
const _FV = "FilterValues";
const _GAR = "GetActionRecommendations";
const _GARR = "GetActionRecommendationsRequest";
const _GARRe = "GetActionRecommendationsResponse";
const _GPR = "GetPersonalizedRanking";
const _GPRR = "GetPersonalizedRankingRequest";
const _GPRRe = "GetPersonalizedRankingResponse";
const _GR = "GetRecommendations";
const _GRR = "GetRecommendationsRequest";
const _GRRe = "GetRecommendationsResponse";
const _IIE = "InvalidInputException";
const _IL = "ItemList";
const _M = "Metadata";
const _MC = "MetadataColumns";
const _P = "Promotion";
const _PA = "PredictedAction";
const _PI = "PredictedItem";
const _PL = "PromotionList";
const _RNFE = "ResourceNotFoundException";
const _aI = "actionId";
const _aL = "actionList";
const _c = "context";
const _cA = "campaignArn";
const _cl = "client";
const _e = "error";
const _fA = "filterArn";
const _fV = "filterValues";
const _h = "http";
const _hE = "httpError";
const _iI = "itemId";
const _iL = "inputList";
const _iLt = "itemList";
const _m = "message";
const _mC = "metadataColumns";
const _me = "metadata";
const _n = "name";
const _nR = "numResults";
const _p = "promotions";
const _pN = "promotionName";
const _pPI = "percentPromotedItems";
const _pR = "personalizedRanking";
const _r = "reason";
const _rA = "recommenderArn";
const _rI = "recommendationId";
const _s = "score";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.personalizeruntime";
const _uI = "userId";
const n0 = "com.amazonaws.personalizeruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InvalidInputException as __InvalidInputException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";
import { PersonalizeRuntimeServiceException as __PersonalizeRuntimeServiceException } from "../models/PersonalizeRuntimeServiceException";

/* eslint no-var: 0 */

export var AttributeValue: StaticSimpleSchema = [0, n0, _AV, 8, 0];
export var FilterAttributeValue: StaticSimpleSchema = [0, n0, _FAV, 8, 0];
export var GetActionRecommendationsRequest: StaticStructureSchema = [
  3,
  n0,
  _GARR,
  0,
  [_cA, _uI, _nR, _fA, _fV],
  [0, 0, 1, 0, [() => FilterValues, 0]],
];
export var GetActionRecommendationsResponse: StaticStructureSchema = [
  3,
  n0,
  _GARRe,
  0,
  [_aL, _rI],
  [() => ActionList, 0],
];
export var GetPersonalizedRankingRequest: StaticStructureSchema = [
  3,
  n0,
  _GPRR,
  0,
  [_cA, _iL, _uI, _c, _fA, _fV, _mC],
  [0, 64 | 0, 0, [() => Context, 0], 0, [() => FilterValues, 0], [2, n0, _MC, 0, 0, 64 | 0]],
];
export var GetPersonalizedRankingResponse: StaticStructureSchema = [
  3,
  n0,
  _GPRRe,
  0,
  [_pR, _rI],
  [[() => ItemList, 0], 0],
];
export var GetRecommendationsRequest: StaticStructureSchema = [
  3,
  n0,
  _GRR,
  0,
  [_cA, _iI, _uI, _nR, _c, _fA, _fV, _rA, _p, _mC],
  [0, 0, 0, 1, [() => Context, 0], 0, [() => FilterValues, 0], 0, [() => PromotionList, 0], [2, n0, _MC, 0, 0, 64 | 0]],
];
export var GetRecommendationsResponse: StaticStructureSchema = [3, n0, _GRRe, 0, [_iLt, _rI], [[() => ItemList, 0], 0]];
export var InvalidInputException: StaticErrorSchema = [
  -3,
  n0,
  _IIE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var PredictedAction: StaticStructureSchema = [3, n0, _PA, 0, [_aI, _s], [0, 1]];
export var PredictedItem: StaticStructureSchema = [
  3,
  n0,
  _PI,
  0,
  [_iI, _s, _pN, _me, _r],
  [0, 1, 0, [() => Metadata, 0], 64 | 0],
];
export var Promotion: StaticStructureSchema = [3, n0, _P, 0, [_n, _pPI, _fA, _fV], [0, 1, 0, [() => FilterValues, 0]]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var PersonalizeRuntimeServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "PersonalizeRuntimeServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(PersonalizeRuntimeServiceException, __PersonalizeRuntimeServiceException);

export var ActionList: StaticListSchema = [1, n0, _AL, 0, () => PredictedAction];
export var ColumnNamesList = 64 | 0;

export var InputList = 64 | 0;

export var ItemList: StaticListSchema = [1, n0, _IL, 0, [() => PredictedItem, 0]];
export var PromotionList: StaticListSchema = [1, n0, _PL, 0, [() => Promotion, 0]];
export var ReasonList = 64 | 0;

export var Context: StaticMapSchema = [2, n0, _C, 0, [0, 0], [() => AttributeValue, 0]];
export var FilterValues: StaticMapSchema = [2, n0, _FV, 0, [0, 0], [() => FilterAttributeValue, 0]];
export var Metadata: StaticMapSchema = [2, n0, _M, 8, 0, 0];
export var MetadataColumns: StaticMapSchema = [2, n0, _MC, 0, 0, 64 | 0];
export var GetActionRecommendations: StaticOperationSchema = [
  9,
  n0,
  _GAR,
  {
    [_h]: ["POST", "/action-recommendations", 200],
  },
  () => GetActionRecommendationsRequest,
  () => GetActionRecommendationsResponse,
];
export var GetPersonalizedRanking: StaticOperationSchema = [
  9,
  n0,
  _GPR,
  {
    [_h]: ["POST", "/personalize-ranking", 200],
  },
  () => GetPersonalizedRankingRequest,
  () => GetPersonalizedRankingResponse,
];
export var GetRecommendations: StaticOperationSchema = [
  9,
  n0,
  _GR,
  {
    [_h]: ["POST", "/recommendations", 200],
  },
  () => GetRecommendationsRequest,
  () => GetRecommendationsResponse,
];
