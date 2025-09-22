// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidToken as __InvalidToken,
  TaskDoesNotExist as __TaskDoesNotExist,
  TaskTimedOut as __TaskTimedOut,
} from "../models/index";
import {
  _a,
  _aA,
  _AL,
  _ALI,
  _c,
  _cD,
  _e,
  _IT,
  _LA,
  _LAI,
  _LAO,
  _LSM,
  _LSMI,
  _LSMO,
  _m,
  _mR,
  _n,
  _nT,
  _sMA,
  _SML,
  _SMLI,
  _sMt,
  _STH,
  _STHI,
  _STHO,
  _TDNE,
  _tT,
  _TTO,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivityListItem = struct(n0, _ALI, 0, [_aA, _n, _cD], [0, 0, 4]);
export var InvalidToken = error(
  n0,
  _IT,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidToken
);
export var ListActivitiesInput = struct(n0, _LAI, 0, [_mR, _nT], [1, 0]);
export var ListActivitiesOutput = struct(n0, _LAO, 0, [_a, _nT], [() => ActivityList, 0]);
export var ListStateMachinesInput = struct(n0, _LSMI, 0, [_mR, _nT], [1, 0]);
export var ListStateMachinesOutput = struct(n0, _LSMO, 0, [_sMt, _nT], [() => StateMachineList, 0]);
export var SendTaskHeartbeatInput = struct(n0, _STHI, 0, [_tT], [0]);
export var SendTaskHeartbeatOutput = struct(n0, _STHO, 0, [], []);
export var StateMachineListItem = struct(n0, _SMLI, 0, [_sMA, _n, _ty, _cD], [0, 0, 0, 4]);
export var TaskDoesNotExist = error(
  n0,
  _TDNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TaskDoesNotExist
);
export var TaskTimedOut = error(
  n0,
  _TTO,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TaskTimedOut
);
export var ActivityList = list(n0, _AL, 0, () => ActivityListItem);
export var StateMachineList = list(n0, _SML, 0, () => StateMachineListItem);
export var ListActivities = op(
  n0,
  _LA,
  0,
  () => ListActivitiesInput,
  () => ListActivitiesOutput
);
export var ListStateMachines = op(
  n0,
  _LSM,
  0,
  () => ListStateMachinesInput,
  () => ListStateMachinesOutput
);
export var SendTaskHeartbeat = op(
  n0,
  _STH,
  0,
  () => SendTaskHeartbeatInput,
  () => SendTaskHeartbeatOutput
);
