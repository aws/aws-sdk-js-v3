// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { TargetNotConnectedException as __TargetNotConnectedException } from "../models/index";
import {
  _c,
  _cA,
  _cAo,
  _cl,
  _cNo,
  _com,
  _cont,
  _e,
  _EC,
  _ECR,
  _ECRx,
  _in,
  _m,
  _Ses,
  _ses,
  _sIe,
  _SS,
  _sU,
  _tA,
  _task,
  _TNCE,
  _tV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var ExecuteCommandRequest = struct(n0, _ECR, 0, [_cl, _cont, _com, _in, _task], [0, 0, 0, 2, 0]);
export var ExecuteCommandResponse = struct(
  n0,
  _ECRx,
  0,
  [_cA, _cAo, _cNo, _in, _ses, _tA],
  [0, 0, 0, 2, [() => Session, 0], 0]
);
export var Session = struct(n0, _Ses, 0, [_sIe, _sU, _tV], [0, 0, [() => SensitiveString, 0]]);
export var TargetNotConnectedException = error(
  n0,
  _TNCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TargetNotConnectedException
);
export var ExecuteCommand = op(
  n0,
  _EC,
  0,
  () => ExecuteCommandRequest,
  () => ExecuteCommandResponse
);
