// smithy-typescript generated code
import { error, map, op, struct } from "@smithy/core/schema";

import { TargetNotConnected as __TargetNotConnected } from "../models/index";
import {
  _aQE,
  _c,
  _DN,
  _e,
  _M,
  _P,
  _Rea,
  _RSe,
  _RSR,
  _RSRe,
  _SIes,
  _SMP,
  _SSR,
  _SSRt,
  _SSta,
  _SU,
  _Tar,
  _TNC,
  _TSe,
  _TSR,
  _TSRe,
  _TV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ResumeSessionRequest = struct(n0, _RSR, 0, [_SIes], [0]);
export var ResumeSessionResponse = struct(n0, _RSRe, 0, [_SIes, _TV, _SU], [0, 0, 0]);
export var StartSessionRequest = struct(n0, _SSR, 0, [_Tar, _DN, _Rea, _P], [0, 0, 0, map(n0, _SMP, 0, 0, 64 | 0)]);
export var StartSessionResponse = struct(n0, _SSRt, 0, [_SIes, _TV, _SU], [0, 0, 0]);
export var TargetNotConnected = error(
  n0,
  _TNC,
  {
    [_e]: _c,
    [_aQE]: [`TargetNotConnected`, 430],
  },
  [_M],
  [0],

  __TargetNotConnected
);
export var TerminateSessionRequest = struct(n0, _TSR, 0, [_SIes], [0]);
export var TerminateSessionResponse = struct(n0, _TSRe, 0, [_SIes], [0]);
export var SessionManagerParameterValueList = 64 | 0;

export var SessionManagerParameters = map(n0, _SMP, 0, 0, 64 | 0);
export var ResumeSession = op(
  n0,
  _RSe,
  0,
  () => ResumeSessionRequest,
  () => ResumeSessionResponse
);
export var StartSession = op(
  n0,
  _SSta,
  0,
  () => StartSessionRequest,
  () => StartSessionResponse
);
export var TerminateSession = op(
  n0,
  _TSe,
  0,
  () => TerminateSessionRequest,
  () => TerminateSessionResponse
);
