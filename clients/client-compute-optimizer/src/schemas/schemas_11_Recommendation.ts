// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _DRPRe, _n, _rPN, _rT, _S, _sc, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRecommendationPreferencesRequest = struct(n0, _DRPR, 0, [_rT, _sc, _rPN], [0, () => Scope, 64 | 0]);
export var DeleteRecommendationPreferencesResponse = struct(n0, _DRPRe, 0, [], []);
export var Scope = struct(n0, _S, 0, [_n, _v], [0, 0]);
export var RecommendationPreferenceNames = 64 | 0;

export var DeleteRecommendationPreferences = op(
  n0,
  _DRP,
  0,
  () => DeleteRecommendationPreferencesRequest,
  () => DeleteRecommendationPreferencesResponse
);
