// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dI,
  _dVI,
  _eI,
  _EPS,
  _ePS,
  _eTN,
  _eTnd,
  _eTv,
  _eTven,
  _FC,
  _LEP,
  _LEPR,
  _LEPRi,
  _LOEPS,
  _mR,
  _nT,
  _pT,
  _PTR,
  _pTR,
  _sT,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EventPredictionSummary = struct(n0, _EPS, 0, [_eI, _eTN, _eTv, _pT, _dI, _dVI], [0, 0, 0, 0, 0, 0]);
export var FilterCondition = struct(n0, _FC, 0, [_va], [0]);
export var ListEventPredictionsRequest = struct(
  n0,
  _LEPR,
  0,
  [_eI, _eTven, _dI, _dVI, _pTR, _nT, _mR],
  [
    () => FilterCondition,
    () => FilterCondition,
    () => FilterCondition,
    () => FilterCondition,
    () => PredictionTimeRange,
    0,
    1,
  ]
);
export var ListEventPredictionsResult = struct(n0, _LEPRi, 0, [_ePS, _nT], [() => ListOfEventPredictionSummaries, 0]);
export var PredictionTimeRange = struct(n0, _PTR, 0, [_sT, _eTnd], [0, 0]);
export var ListOfEventPredictionSummaries = list(n0, _LOEPS, 0, () => EventPredictionSummary);
export var ListEventPredictions = op(
  n0,
  _LEP,
  0,
  () => ListEventPredictionsRequest,
  () => ListEventPredictionsResult
);
