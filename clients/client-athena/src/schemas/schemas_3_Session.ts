// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _EDT,
  _GSS,
  _GSSR,
  _GSSRe,
  _ISDT,
  _LMDT,
  _S,
  _SCR,
  _SDTt,
  _SI,
  _SSes,
  _St,
  _TS,
  _TSR,
  _TSRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSessionStatusRequest = struct(n0, _GSSR, 0, [_SI], [0]);
export var GetSessionStatusResponse = struct(n0, _GSSRe, 0, [_SI, _St], [0, () => SessionStatus]);
export var SessionStatus = struct(n0, _SSes, 0, [_SDTt, _LMDT, _EDT, _ISDT, _S, _SCR], [4, 4, 4, 4, 0, 0]);
export var TerminateSessionRequest = struct(n0, _TSR, 0, [_SI], [0]);
export var TerminateSessionResponse = struct(n0, _TSRe, 0, [_S], [0]);
export var GetSessionStatus = op(
  n0,
  _GSS,
  0,
  () => GetSessionStatusRequest,
  () => GetSessionStatusResponse
);
export var TerminateSession = op(
  n0,
  _TS,
  0,
  () => TerminateSessionRequest,
  () => TerminateSessionResponse
);
