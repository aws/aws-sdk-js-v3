// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AMD,
  _AMS,
  _AMSL,
  _AMSp,
  _BI,
  _C,
  _de,
  _en,
  _h,
  _hQ,
  _I,
  _i,
  _JV,
  _LAM,
  _LAMR,
  _LAMRi,
  _LM,
  _me,
  _MR,
  _mR,
  _mT,
  _N,
  _n,
  _NT,
  _nT,
  _PRE,
  _PRER,
  _PRERu,
  _RE,
  _REL,
  _REu,
  _S,
  _sI,
  _t,
  _ty,
  _UD,
  _uI,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JsonValue = sim(n0, _JV, 0, {
  [_mT]: _a,
});
export var AppMonitorDetails = struct(n0, _AMD, 0, [_n, _i, _v], [0, 0, 0]);
export var AppMonitorSummary = struct(n0, _AMS, 0, [_N, _I, _C, _LM, _S], [0, 0, 0, 0, 0]);
export var ListAppMonitorsRequest = struct(
  n0,
  _LAMR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAppMonitorsResponse = struct(n0, _LAMRi, 0, [_NT, _AMSp], [0, () => AppMonitorSummaryList]);
export var PutRumEventsRequest = struct(
  n0,
  _PRER,
  0,
  [_I, _BI, _AMD, _UD, _RE, _A],
  [[0, 1], 0, () => AppMonitorDetails, () => UserDetails, [() => RumEventList, 0], 0]
);
export var PutRumEventsResponse = struct(n0, _PRERu, 0, [], []);
export var RumEvent = struct(
  n0,
  _REu,
  0,
  [_i, _t, _ty, _me, _de],
  [0, 4, 0, [() => JsonValue, 0], [() => JsonValue, 0]]
);
export var UserDetails = struct(n0, _UD, 0, [_uI, _sI], [0, 0]);
export var AppMonitorSummaryList = list(n0, _AMSL, 0, () => AppMonitorSummary);
export var RumEventList = list(n0, _REL, 0, [() => RumEvent, 0]);
export var ListAppMonitors = op(
  n0,
  _LAM,
  {
    [_h]: ["POST", "/appmonitors", 200],
  },
  () => ListAppMonitorsRequest,
  () => ListAppMonitorsResponse
);
export var PutRumEvents = op(
  n0,
  _PRE,
  {
    [_h]: ["POST", "/appmonitors/{Id}/", 200],
    [_en]: ["dataplane."],
  },
  () => PutRumEventsRequest,
  () => PutRumEventsResponse
);
