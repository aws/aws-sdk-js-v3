// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aDA,
  _aIn,
  _An,
  _an,
  _d,
  _dTP,
  _enu,
  _fS,
  _h,
  _iDs,
  _iPLS,
  _iTN,
  _LA,
  _LAR,
  _LARi,
  _LE,
  _lGAL,
  _li,
  _lS,
  _LSo,
  _lSo,
  _m,
  _nT,
  _p,
  _pI,
  _pR,
  _pS,
  _PT,
  _PTa,
  _pTa,
  _sD,
  _sS,
  _st,
  _sU,
  _su,
  _ti,
  _tS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Anomaly = struct(
  n0,
  _A,
  0,
  [_aIn, _pI, _aDA, _pS, _pR, _p, _fS, _lS, _d, _a, _st, _h, _lSo, _pTa, _lGAL, _su, _sD, _sU, _iPLS],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 128 | 1, () => LogSamples, () => PatternTokens, 64 | 0, 2, 1, 1, 2]
);
export var ListAnomaliesRequest = struct(n0, _LAR, 0, [_aDA, _sS, _li, _nT], [0, 0, 1, 0]);
export var ListAnomaliesResponse = struct(n0, _LARi, 0, [_an, _nT], [() => Anomalies, 0]);
export var LogEvent = struct(n0, _LE, 0, [_ti, _m], [1, 0]);
export var PatternToken = struct(n0, _PT, 0, [_dTP, _iDs, _tS, _enu, _iTN], [1, 2, 0, 128 | 1, 0]);
export var Anomalies = list(n0, _An, 0, () => Anomaly);
export var LogSamples = list(n0, _LSo, 0, () => LogEvent);
export var PatternTokens = list(n0, _PTa, 0, () => PatternToken);
export var TestEventMessages = 64 | 0;

export var Enumerations = 128 | 1;

export var Histogram = 128 | 1;

export var ListAnomalies = op(
  n0,
  _LA,
  0,
  () => ListAnomaliesRequest,
  () => ListAnomaliesResponse
);
