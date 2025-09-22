// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aC,
  _ac,
  _act,
  _aI,
  _aV,
  _ca,
  _cDT,
  _d,
  _DLA,
  _DLAR,
  _DLARe,
  _eDTn,
  _fR,
  _ht,
  _iB,
  _J,
  _jID,
  _LA,
  _LAP,
  _LAPa,
  _LAR,
  _LARa,
  _LAS,
  _lAS,
  _lS,
  _n,
  _o,
  _op,
  _p,
  _PLA,
  _PLAR,
  _PLARu,
  _PR,
  _pR,
  _PRa,
  _PRID,
  _pRID,
  _PS,
  _pS,
  _PSa,
  _r,
  _rI,
  _rIID,
  _rIu,
  _sADD,
  _sNID,
  _sSID,
  _st,
  _t,
  _ty,
  _v,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchActionRequest = struct(n0, _DLAR, 0, [_rI, _aI], [0, 0]);
export var DeleteLaunchActionResponse = struct(n0, _DLARe, 0, [], []);
export var Job = struct(
  n0,
  _J,
  0,
  [_jID, _a, _ty, _iB, _cDT, _eDTn, _st, _pS, _t, _pR],
  [0, 0, 0, 0, 0, 0, 0, () => ParticipatingServers, [() => TagsMap, 0], () => ParticipatingResources]
);
export var LaunchAction = struct(
  n0,
  _LA,
  0,
  [_aI, _aC, _ty, _n, _ac, _o, _aV, _op, _p, _d, _ca],
  [0, 0, 0, 0, 2, 1, 0, 2, () => LaunchActionParameters, 0, 0]
);
export var LaunchActionParameter = struct(n0, _LAP, 0, [_v, _ty], [0, 0]);
export var LaunchActionRun = struct(n0, _LAR, 0, [_act, _rIu, _st, _fR], [() => LaunchAction, 0, 0, 0]);
export var LaunchActionsStatus = struct(n0, _LAS, 0, [_sADD, _r], [0, () => LaunchActionRuns]);
export var ParticipatingResource = struct(n0, _PR, 0, [_pRID, _lS], [() => ParticipatingResourceID, 0]);
export var ParticipatingServer = struct(n0, _PS, 0, [_sSID, _rIID, _lS, _lAS], [0, 0, 0, () => LaunchActionsStatus]);
export var PutLaunchActionRequest = struct(
  n0,
  _PLAR,
  0,
  [_rI, _aC, _o, _aI, _op, _ac, _n, _aV, _ca, _p, _d],
  [0, 0, 1, 0, 2, 2, 0, 0, 0, () => LaunchActionParameters, 0]
);
export var PutLaunchActionResponse = struct(
  n0,
  _PLARu,
  0,
  [_rI, _aI, _aC, _ty, _n, _ac, _o, _aV, _op, _p, _d, _ca],
  [0, 0, 0, 0, 0, 2, 1, 0, 2, () => LaunchActionParameters, 0, 0]
);
export var LaunchActionRuns = list(n0, _LARa, 0, () => LaunchActionRun);
export var ParticipatingResources = list(n0, _PRa, 0, () => ParticipatingResource);
export var ParticipatingServers = list(n0, _PSa, 0, () => ParticipatingServer);
export var LaunchActionParameters = map(n0, _LAPa, 0, 0, () => LaunchActionParameter);
export var ParticipatingResourceID = uni(n0, _PRID, 0, [_sNID], [0]);
export var DeleteLaunchAction = op(
  n0,
  _DLA,
  {
    [_ht]: ["POST", "/DeleteLaunchAction", 204],
  },
  () => DeleteLaunchActionRequest,
  () => DeleteLaunchActionResponse
);
export var PutLaunchAction = op(
  n0,
  _PLA,
  {
    [_ht]: ["POST", "/PutLaunchAction", 200],
  },
  () => PutLaunchActionRequest,
  () => PutLaunchActionResponse
);
