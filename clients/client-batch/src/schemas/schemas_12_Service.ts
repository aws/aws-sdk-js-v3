// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aDS,
  _at,
  _cT,
  _eOE,
  _ht,
  _jA,
  _jI,
  _jN,
  _jQ,
  _LSJA,
  _n,
  _oSR,
  _rS,
  _sI,
  _SJEOE,
  _SJEOEL,
  _SJRS,
  _SJT,
  _sJT,
  _sPc,
  _SRI,
  _sRI,
  _sRP,
  _SSJ,
  _SSJR,
  _SSJRu,
  _t,
  _tC,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LatestServiceJobAttempt = struct(n0, _LSJA, 0, [_sRI], [() => ServiceResourceId]);
export var ServiceJobEvaluateOnExit = struct(n0, _SJEOE, 0, [_ac, _oSR], [0, 0]);
export var ServiceJobRetryStrategy = struct(n0, _SJRS, 0, [_at, _eOE], [1, () => ServiceJobEvaluateOnExitList]);
export var ServiceJobTimeout = struct(n0, _SJT, 0, [_aDS], [1]);
export var ServiceResourceId = struct(n0, _SRI, 0, [_n, _va], [0, 0]);
export var SubmitServiceJobRequest = struct(
  n0,
  _SSJR,
  0,
  [_jN, _jQ, _rS, _sPc, _sRP, _sJT, _sI, _tC, _t, _cT],
  [0, 0, () => ServiceJobRetryStrategy, 1, 0, 0, 0, () => ServiceJobTimeout, 128 | 0, [0, 4]]
);
export var SubmitServiceJobResponse = struct(n0, _SSJRu, 0, [_jA, _jN, _jI], [0, 0, 0]);
export var ServiceJobEvaluateOnExitList = list(n0, _SJEOEL, 0, () => ServiceJobEvaluateOnExit);
export var SubmitServiceJob = op(
  n0,
  _SSJ,
  {
    [_ht]: ["POST", "/v1/submitservicejob", 200],
  },
  () => SubmitServiceJobRequest,
  () => SubmitServiceJobResponse
);
