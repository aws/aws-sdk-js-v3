// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CUAP,
  _DGA,
  _FA,
  _Fil,
  _FN,
  _Fo,
  _FSo,
  _IAP,
  _LF,
  _LFR,
  _LFRi,
  _LMT,
  _LP,
  _LPR,
  _LPRi,
  _M,
  _MR,
  _NT,
  _P,
  _PA,
  _PN,
  _PS,
  _RPS,
  _St,
  n0,
} from "./schemas_0";
import { ReferencePredictorSummary } from "./schemas_25_Predictor";
import { Filters } from "./schemas_30_List";

/* eslint no-var: 0 */

export var ForecastSummary = struct(
  n0,
  _FSo,
  0,
  [_FA, _FN, _PA, _CUAP, _DGA, _St, _M, _CT, _LMT],
  [0, 0, 0, 2, 0, 0, 0, 4, 4]
);
export var ListForecastsRequest = struct(n0, _LFR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListForecastsResponse = struct(n0, _LFRi, 0, [_Fo, _NT], [() => Forecasts, 0]);
export var ListPredictorsRequest = struct(n0, _LPR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListPredictorsResponse = struct(n0, _LPRi, 0, [_P, _NT], [() => Predictors, 0]);
export var PredictorSummary = struct(
  n0,
  _PS,
  0,
  [_PA, _PN, _DGA, _IAP, _RPS, _St, _M, _CT, _LMT],
  [0, 0, 0, 2, () => ReferencePredictorSummary, 0, 0, 4, 4]
);
export var Forecasts = list(n0, _Fo, 0, () => ForecastSummary);
export var Predictors = list(n0, _P, 0, () => PredictorSummary);
export var ListForecasts = op(
  n0,
  _LF,
  2,
  () => ListForecastsRequest,
  () => ListForecastsResponse
);
export var ListPredictors = op(
  n0,
  _LP,
  2,
  () => ListPredictorsRequest,
  () => ListPredictorsResponse
);
