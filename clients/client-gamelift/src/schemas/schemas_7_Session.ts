// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { GameSessionFullException as __GameSessionFullException } from "../models/index";
import {
  _c,
  _CPS,
  _CPSI,
  _CPSIr,
  _CPSO,
  _CPSOr,
  _CPSr,
  _CT,
  _DGSP,
  _DGSPI,
  _DGSPO,
  _DN,
  _DPS,
  _DPSe,
  _DPSes,
  _DPSI,
  _DPSL,
  _DPSO,
  _e,
  _ET,
  _FA,
  _FI,
  _GP,
  _GSA,
  _GSDa,
  _GSFE,
  _GSIa,
  _GSN,
  _GSP,
  _GSQN,
  _GSR,
  _IA,
  _Li,
  _LIMa,
  _LO,
  _M,
  _MD,
  _MPSC,
  _NTe,
  _PCO,
  _PD,
  _PDM,
  _PFS,
  _PI,
  _PIL,
  _PIl,
  _PIla,
  _PL,
  _PLL,
  _PLl,
  _Po,
  _PPS,
  _PPSL,
  _PPSl,
  _PS,
  _PSI,
  _PSL,
  _PSl,
  _PSSF,
  _RIe,
  _SGSP,
  _SGSPI,
  _SGSPIt,
  _SGSPO,
  _SGSPOt,
  _SGSPt,
  _St,
  _STt,
  _TT,
  IpAddress,
  n0,
  PortNumber,
} from "./schemas_0";
import { GamePropertyList } from "./schemas_13_Game";

/* eslint no-var: 0 */

export var PlayerId = sim(n0, _PI, 0, 8);
export var CreatePlayerSessionInput = struct(n0, _CPSI, 0, [_GSIa, _PI, _PD], [0, [() => PlayerId, 0], 0]);
export var CreatePlayerSessionOutput = struct(n0, _CPSO, 0, [_PS], [[() => PlayerSession, 0]]);
export var CreatePlayerSessionsInput = struct(
  n0,
  _CPSIr,
  0,
  [_GSIa, _PIl, _PDM],
  [0, [() => PlayerIdList, 0], 128 | 0]
);
export var CreatePlayerSessionsOutput = struct(n0, _CPSOr, 0, [_PSl], [[() => PlayerSessionList, 0]]);
export var DescribeGameSessionPlacementInput = struct(n0, _DGSPI, 0, [_PIla], [0]);
export var DescribeGameSessionPlacementOutput = struct(n0, _DGSPO, 0, [_GSP], [[() => GameSessionPlacement, 0]]);
export var DescribePlayerSessionsInput = struct(
  n0,
  _DPSI,
  0,
  [_GSIa, _PI, _PSI, _PSSF, _Li, _NTe],
  [0, [() => PlayerId, 0], 0, 0, 1, 0]
);
export var DescribePlayerSessionsOutput = struct(n0, _DPSO, 0, [_PSl, _NTe], [[() => PlayerSessionList, 0], 0]);
export var DesiredPlayerSession = struct(n0, _DPS, 0, [_PI, _PD], [[() => PlayerId, 0], 0]);
export var GameSessionFullException = error(
  n0,
  _GSFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __GameSessionFullException
);
export var GameSessionPlacement = struct(
  n0,
  _GSP,
  0,
  [_PIla, _GSQN, _St, _GP, _MPSC, _GSN, _GSIa, _GSA, _GSR, _PL, _STt, _ET, _IA, _DN, _Po, _PPS, _GSDa, _MD, _PCO],
  [
    0,
    0,
    0,
    () => GamePropertyList,
    1,
    0,
    0,
    0,
    0,
    [() => PlayerLatencyList, 0],
    4,
    4,
    [() => IpAddress, 0],
    0,
    [() => PortNumber, 0],
    [() => PlacedPlayerSessionList, 0],
    0,
    0,
    () => PriorityConfigurationOverride,
  ]
);
export var PlacedPlayerSession = struct(n0, _PPSl, 0, [_PI, _PSI], [[() => PlayerId, 0], 0]);
export var PlayerLatency = struct(n0, _PLl, 0, [_PI, _RIe, _LIMa], [[() => PlayerId, 0], 0, 1]);
export var PlayerSession = struct(
  n0,
  _PS,
  0,
  [_PSI, _PI, _GSIa, _FI, _FA, _CT, _TT, _St, _IA, _DN, _Po, _PD],
  [0, [() => PlayerId, 0], 0, 0, 0, 4, 4, 0, [() => IpAddress, 0], 0, [() => PortNumber, 0], 0]
);
export var PriorityConfigurationOverride = struct(n0, _PCO, 0, [_PFS, _LO], [0, 64 | 0]);
export var StartGameSessionPlacementInput = struct(
  n0,
  _SGSPI,
  0,
  [_PIla, _GSQN, _GP, _MPSC, _GSN, _PL, _DPSe, _GSDa, _PCO],
  [
    0,
    0,
    () => GamePropertyList,
    1,
    0,
    [() => PlayerLatencyList, 0],
    [() => DesiredPlayerSessionList, 0],
    0,
    () => PriorityConfigurationOverride,
  ]
);
export var StartGameSessionPlacementOutput = struct(n0, _SGSPO, 0, [_GSP], [[() => GameSessionPlacement, 0]]);
export var StopGameSessionPlacementInput = struct(n0, _SGSPIt, 0, [_PIla], [0]);
export var StopGameSessionPlacementOutput = struct(n0, _SGSPOt, 0, [_GSP], [[() => GameSessionPlacement, 0]]);
export var DesiredPlayerSessionList = list(n0, _DPSL, 0, [() => DesiredPlayerSession, 0]);
export var LocationOrderOverrideList = 64 | 0;

export var PlacedPlayerSessionList = list(n0, _PPSL, 0, [() => PlacedPlayerSession, 0]);
export var PlayerIdList = list(n0, _PIL, 8, [() => PlayerId, 0]);
export var PlayerLatencyList = list(n0, _PLL, 0, [() => PlayerLatency, 0]);
export var PlayerSessionList = list(n0, _PSL, 0, [() => PlayerSession, 0]);
export var PlayerDataMap = 128 | 0;

export var CreatePlayerSession = op(
  n0,
  _CPS,
  0,
  () => CreatePlayerSessionInput,
  () => CreatePlayerSessionOutput
);
export var CreatePlayerSessions = op(
  n0,
  _CPSr,
  0,
  () => CreatePlayerSessionsInput,
  () => CreatePlayerSessionsOutput
);
export var DescribeGameSessionPlacement = op(
  n0,
  _DGSP,
  0,
  () => DescribeGameSessionPlacementInput,
  () => DescribeGameSessionPlacementOutput
);
export var DescribePlayerSessions = op(
  n0,
  _DPSes,
  0,
  () => DescribePlayerSessionsInput,
  () => DescribePlayerSessionsOutput
);
export var StartGameSessionPlacement = op(
  n0,
  _SGSP,
  0,
  () => StartGameSessionPlacementInput,
  () => StartGameSessionPlacementOutput
);
export var StopGameSessionPlacement = op(
  n0,
  _SGSPt,
  0,
  () => StopGameSessionPlacementInput,
  () => StopGameSessionPlacementOutput
);
