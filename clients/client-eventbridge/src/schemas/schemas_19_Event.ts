// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CT,
  _D,
  _DEB,
  _DEBR,
  _EB,
  _EBL,
  _EBv,
  _L,
  _LEB,
  _LEBR,
  _LEBRi,
  _LMT,
  _N,
  _NP,
  _NT,
  _Po,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventBusRequest = struct(n0, _DEBR, 0, [_N], [0]);
export var EventBus = struct(n0, _EBv, 0, [_N, _Ar, _D, _Po, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var ListEventBusesRequest = struct(n0, _LEBR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListEventBusesResponse = struct(n0, _LEBRi, 0, [_EB, _NT], [() => EventBusList, 0]);
export var EventBusList = list(n0, _EBL, 0, () => EventBus);
export var DeleteEventBus = op(
  n0,
  _DEB,
  0,
  () => DeleteEventBusRequest,
  () => Unit
);
export var ListEventBuses = op(
  n0,
  _LEB,
  0,
  () => ListEventBusesRequest,
  () => ListEventBusesResponse
);
