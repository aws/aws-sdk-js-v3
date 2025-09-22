// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { OutOfCapacityException as __OutOfCapacityException } from "../models/index";
import {
  _c,
  _CFO,
  _CGS,
  _CGSI,
  _CGSO,
  _CIo,
  _CSl,
  _DGS,
  _DGSe,
  _DGSI,
  _DGSIe,
  _DGSO,
  _e,
  _FO,
  _GS,
  _GSame,
  _GSD,
  _GSGA,
  _GSGN,
  _GSI,
  _HC,
  _II,
  _IS,
  _LCT,
  _LGS,
  _LGSI,
  _LGSO,
  _LHCT,
  _Li,
  _M,
  _NTe,
  _OOCE,
  _RGS,
  _RGSI,
  _RGSO,
  _RT,
  _SO,
  _UGS,
  _UGSI,
  _UGSO,
  _USt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClaimFilterOption = struct(n0, _CFO, 0, [_IS], [64 | 0]);
export var ClaimGameServerInput = struct(n0, _CGSI, 0, [_GSGN, _GSI, _GSD, _FO], [0, 0, 0, () => ClaimFilterOption]);
export var ClaimGameServerOutput = struct(n0, _CGSO, 0, [_GS], [() => GameServer]);
export var DeregisterGameServerInput = struct(n0, _DGSI, 0, [_GSGN, _GSI], [0, 0]);
export var DescribeGameServerInput = struct(n0, _DGSIe, 0, [_GSGN, _GSI], [0, 0]);
export var DescribeGameServerOutput = struct(n0, _DGSO, 0, [_GS], [() => GameServer]);
export var GameServer = struct(
  n0,
  _GS,
  0,
  [_GSGN, _GSGA, _GSI, _II, _CIo, _GSD, _CSl, _USt, _RT, _LCT, _LHCT],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4]
);
export var ListGameServersInput = struct(n0, _LGSI, 0, [_GSGN, _SO, _Li, _NTe], [0, 0, 1, 0]);
export var ListGameServersOutput = struct(n0, _LGSO, 0, [_GSame, _NTe], [() => GameServers, 0]);
export var OutOfCapacityException = error(
  n0,
  _OOCE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __OutOfCapacityException
);
export var RegisterGameServerInput = struct(n0, _RGSI, 0, [_GSGN, _GSI, _II, _CIo, _GSD], [0, 0, 0, 0, 0]);
export var RegisterGameServerOutput = struct(n0, _RGSO, 0, [_GS], [() => GameServer]);
export var UpdateGameServerInput = struct(n0, _UGSI, 0, [_GSGN, _GSI, _GSD, _USt, _HC], [0, 0, 0, 0, 0]);
export var UpdateGameServerOutput = struct(n0, _UGSO, 0, [_GS], [() => GameServer]);
export var FilterInstanceStatuses = 64 | 0;

export var GameServers = list(n0, _GSame, 0, () => GameServer);
export var ClaimGameServer = op(
  n0,
  _CGS,
  0,
  () => ClaimGameServerInput,
  () => ClaimGameServerOutput
);
export var DeregisterGameServer = op(
  n0,
  _DGS,
  0,
  () => DeregisterGameServerInput,
  () => Unit
);
export var DescribeGameServer = op(
  n0,
  _DGSe,
  0,
  () => DescribeGameServerInput,
  () => DescribeGameServerOutput
);
export var ListGameServers = op(
  n0,
  _LGS,
  0,
  () => ListGameServersInput,
  () => ListGameServersOutput
);
export var RegisterGameServer = op(
  n0,
  _RGS,
  0,
  () => RegisterGameServerInput,
  () => RegisterGameServerOutput
);
export var UpdateGameServer = op(
  n0,
  _UGS,
  0,
  () => UpdateGameServerInput,
  () => UpdateGameServerOutput
);
