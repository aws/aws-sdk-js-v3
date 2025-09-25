// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAr,
  _CIl,
  _Co,
  _D,
  _Dat,
  _Id,
  _IRm,
  _L,
  _LR,
  _LRM,
  _LRR,
  _M,
  _MR,
  _NA,
  _Ob,
  _RAe,
  _RAec,
  _RAL,
  _Re,
  _Rec,
  _RL,
  _RLe,
  _RLec,
  _RLL,
  _RTec,
  _RTeco,
  _Te,
  _Ti,
  _Ty,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRecommendationsMessage = struct(n0, _LRM, 0, [_CIl, _NA, _MR, _M], [0, 0, 1, 0]);
export var ListRecommendationsResult = struct(n0, _LRR, 0, [_Re, _M], [[() => RecommendationList, 0], 0]);
export var Recommendation = struct(
  n0,
  _Rec,
  0,
  [_Id, _CIl, _NA, _CAr, _RTec, _Ti, _D, _Ob, _IRm, _RTeco, _RAe, _RL],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, [() => RecommendedActionList, 0], [() => ReferenceLinkList, 0]]
);
export var RecommendedAction = struct(n0, _RAec, 0, [_Te, _Dat, _Co, _Ty], [0, 0, 0, 0]);
export var ReferenceLink = struct(n0, _RLe, 0, [_Te, _L], [0, 0]);
export var RecommendationList = list(n0, _RLec, 0, [
  () => Recommendation,
  {
    [_xN]: _Rec,
  },
]);
export var RecommendedActionList = list(n0, _RAL, 0, [
  () => RecommendedAction,
  {
    [_xN]: _RAec,
  },
]);
export var ReferenceLinkList = list(n0, _RLL, 0, [
  () => ReferenceLink,
  {
    [_xN]: _RLe,
  },
]);
export var ListRecommendations = op(
  n0,
  _LR,
  0,
  () => ListRecommendationsMessage,
  () => ListRecommendationsResult
);
