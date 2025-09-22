// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CMP,
  _eIL,
  _eIM,
  _eL,
  _EMP,
  _eMP,
  _EPR,
  _EPRf,
  _GERP,
  _GERPR,
  _GERPRe,
  _he,
  _iL,
  _iWT,
  _lBP,
  _mN,
  _mP,
  _n,
  _PR,
  _PRP,
  _PRPR,
  _PRPRu,
  _PRr,
  _pRr,
  _rA,
  _rT,
  _sc,
  _sEM,
  _so,
  _th,
  _UP,
  _uP,
  _UPt,
  n0,
} from "./schemas_0";
import { Scope } from "./schemas_11_Recommendation";

/* eslint no-var: 0 */

export var CustomizableMetricParameters = struct(n0, _CMP, 0, [_th, _he], [0, 0]);
export var EffectivePreferredResource = struct(n0, _EPR, 0, [_n, _iL, _eIL, _eL], [0, 64 | 0, 64 | 0, 64 | 0]);
export var ExternalMetricsPreference = struct(n0, _EMP, 0, [_so], [0]);
export var GetEffectiveRecommendationPreferencesRequest = struct(n0, _GERPR, 0, [_rA], [0]);
export var GetEffectiveRecommendationPreferencesResponse = struct(
  n0,
  _GERPRe,
  0,
  [_eIM, _eMP, _lBP, _uP, _pRr],
  [0, () => ExternalMetricsPreference, 0, () => UtilizationPreferences, () => EffectivePreferredResources]
);
export var PreferredResource = struct(n0, _PR, 0, [_n, _iL, _eL], [0, 64 | 0, 64 | 0]);
export var PutRecommendationPreferencesRequest = struct(
  n0,
  _PRPR,
  0,
  [_rT, _sc, _eIM, _iWT, _eMP, _lBP, _uP, _pRr, _sEM],
  [0, () => Scope, 0, 0, () => ExternalMetricsPreference, 0, () => UtilizationPreferences, () => PreferredResources, 0]
);
export var PutRecommendationPreferencesResponse = struct(n0, _PRPRu, 0, [], []);
export var UtilizationPreference = struct(n0, _UP, 0, [_mN, _mP], [0, () => CustomizableMetricParameters]);
export var EffectivePreferredResources = list(n0, _EPRf, 0, () => EffectivePreferredResource);
export var PreferredResources = list(n0, _PRr, 0, () => PreferredResource);
export var PreferredResourceValues = 64 | 0;

export var UtilizationPreferences = list(n0, _UPt, 0, () => UtilizationPreference);
export var GetEffectiveRecommendationPreferences = op(
  n0,
  _GERP,
  0,
  () => GetEffectiveRecommendationPreferencesRequest,
  () => GetEffectiveRecommendationPreferencesResponse
);
export var PutRecommendationPreferences = op(
  n0,
  _PRP,
  0,
  () => PutRecommendationPreferencesRequest,
  () => PutRecommendationPreferencesResponse
);
