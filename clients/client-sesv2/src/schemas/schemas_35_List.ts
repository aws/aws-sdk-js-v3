// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _De,
  _F,
  _h,
  _Im,
  _LR,
  _LRR,
  _LRRi,
  _LUT,
  _NT,
  _PS,
  _RA,
  _Re,
  _Rec,
  _RL,
  _S,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRecommendationsRequest = struct(n0, _LRR, 0, [_F, _NT, _PS], [128 | 0, 0, 1]);
export var ListRecommendationsResponse = struct(n0, _LRRi, 0, [_Re, _NT], [() => RecommendationsList, 0]);
export var Recommendation = struct(n0, _Rec, 0, [_RA, _Ty, _De, _S, _CTr, _LUT, _Im], [0, 0, 0, 0, 4, 4, 0]);
export var RecommendationsList = list(n0, _RL, 0, () => Recommendation);
export var ListRecommendationsFilter = 128 | 0;

export var ListRecommendations = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/v2/email/vdm/recommendations", 200],
  },
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse
);
