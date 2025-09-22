// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ar,
  _BEF,
  _BEFR,
  _BEFRa,
  _bV,
  _cT,
  _d,
  _de,
  _dV,
  _dVo,
  _eC,
  _EF,
  _EFR,
  _EFRv,
  _eI,
  _en,
  _eO,
  _ER,
  _eR,
  _ERL,
  _ERLv,
  _ERv,
  _eS,
  _F,
  _f,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _lUT,
  _lV,
  _n,
  _p,
  _r,
  _re,
  _rea,
  _st,
  _sV,
  _ta,
  _V,
  _v,
  _va,
  _val,
  _VL,
  _vT,
  _VV,
  JsonValue,
  n0,
} from "./schemas_0";
import { EvaluationRulesList } from "./schemas_8_Feature";

/* eslint no-var: 0 */

export var BatchEvaluateFeatureRequest = struct(
  n0,
  _BEFR,
  0,
  [_p, _r],
  [
    [0, 1],
    [() => EvaluationRequestsList, 0],
  ]
);
export var BatchEvaluateFeatureResponse = struct(n0, _BEFRa, 0, [_re], [[() => EvaluationResultsList, 0]]);
export var EvaluateFeatureRequest = struct(n0, _EFR, 0, [_p, _f, _eI, _eC], [[0, 1], [0, 1], 0, [() => JsonValue, 0]]);
export var EvaluateFeatureResponse = struct(
  n0,
  _EFRv,
  0,
  [_va, _val, _rea, _de],
  [0, () => VariableValue, 0, [() => JsonValue, 0]]
);
export var EvaluationRequest = struct(n0, _ER, 0, [_f, _eI, _eC], [0, 0, [() => JsonValue, 0]]);
export var EvaluationResult = struct(
  n0,
  _ERv,
  0,
  [_p, _f, _va, _val, _eI, _rea, _de],
  [0, 0, 0, () => VariableValue, 0, 0, [() => JsonValue, 0]]
);
export var Feature = struct(
  n0,
  _F,
  0,
  [_ar, _n, _p, _st, _cT, _lUT, _d, _eS, _vT, _v, _dV, _eR, _ta, _eO],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, () => VariationsList, 0, () => EvaluationRulesList, 128 | 0, 128 | 0]
);
export var GetFeatureRequest = struct(
  n0,
  _GFR,
  0,
  [_p, _f],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetFeatureResponse = struct(n0, _GFRe, 0, [_f], [() => Feature]);
export var Variation = struct(n0, _V, 0, [_n, _val], [0, () => VariableValue]);
export var EvaluationRequestsList = list(n0, _ERL, 0, [() => EvaluationRequest, 0]);
export var EvaluationResultsList = list(n0, _ERLv, 0, [() => EvaluationResult, 0]);
export var VariationsList = list(n0, _VL, 0, () => Variation);
export var EntityOverrideMap = 128 | 0;

export var VariableValue = uni(n0, _VV, 0, [_bV, _sV, _lV, _dVo], [2, 0, 1, 1]);
export var BatchEvaluateFeature = op(
  n0,
  _BEF,
  {
    [_h]: ["POST", "/projects/{project}/evaluations", 200],
    [_en]: ["dataplane."],
  },
  () => BatchEvaluateFeatureRequest,
  () => BatchEvaluateFeatureResponse
);
export var EvaluateFeature = op(
  n0,
  _EF,
  {
    [_h]: ["POST", "/projects/{project}/evaluations/{feature}", 200],
    [_en]: ["dataplane."],
  },
  () => EvaluateFeatureRequest,
  () => EvaluateFeatureResponse
);
export var GetFeature = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/projects/{project}/features/{feature}", 200],
  },
  () => GetFeatureRequest,
  () => GetFeatureResponse
);
