// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  FleetCapacityExceededException as __FleetCapacityExceededException,
  IdempotentParameterMismatchException as __IdempotentParameterMismatchException,
} from "../models/index";
import {
  _AI,
  _c,
  _CGSIr,
  _CGSOr,
  _CGSr,
  _CIr,
  _CPSC,
  _CT,
  _DGSes,
  _DGSIes,
  _DGSOe,
  _DN,
  _e,
  _FA,
  _FCEE,
  _FE,
  _FI,
  _GP,
  _GSa,
  _GSam,
  _GSDa,
  _GSIa,
  _GSL,
  _IA,
  _IPME,
  _ITd,
  _L,
  _Li,
  _M,
  _MD,
  _MPSC,
  _N,
  _NTe,
  _Po,
  _PSCP,
  _SE,
  _SF,
  _SGS,
  _SGSI,
  _SGSO,
  _SR,
  _St,
  _TGS,
  _TGSI,
  _TGSO,
  _TM,
  _TT,
  IpAddress,
  n0,
  PortNumber,
} from "./schemas_0";
import { GamePropertyList } from "./schemas_13_Game";

/* eslint no-var: 0 */

export var CreateGameSessionInput = struct(
  n0,
  _CGSIr,
  0,
  [_FI, _AI, _MPSC, _N, _GP, _CIr, _GSIa, _ITd, _GSDa, _L],
  [0, 0, 1, 0, () => GamePropertyList, 0, 0, 0, 0, 0]
);
export var CreateGameSessionOutput = struct(n0, _CGSOr, 0, [_GSa], [[() => GameSession, 0]]);
export var DescribeGameSessionsInput = struct(
  n0,
  _DGSIes,
  0,
  [_FI, _GSIa, _AI, _L, _SF, _Li, _NTe],
  [0, 0, 0, 0, 0, 1, 0]
);
export var DescribeGameSessionsOutput = struct(n0, _DGSOe, 0, [_GSam, _NTe], [[() => GameSessionList, 0], 0]);
export var FleetCapacityExceededException = error(
  n0,
  _FCEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __FleetCapacityExceededException
);
export var GameSession = struct(
  n0,
  _GSa,
  0,
  [_GSIa, _N, _FI, _FA, _CT, _TT, _CPSC, _MPSC, _St, _SR, _GP, _IA, _DN, _Po, _PSCP, _CIr, _GSDa, _MD, _L],
  [0, 0, 0, 0, 4, 4, 1, 1, 0, 0, () => GamePropertyList, [() => IpAddress, 0], 0, [() => PortNumber, 0], 0, 0, 0, 0, 0]
);
export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IdempotentParameterMismatchException
);
export var SearchGameSessionsInput = struct(n0, _SGSI, 0, [_FI, _AI, _L, _FE, _SE, _Li, _NTe], [0, 0, 0, 0, 0, 1, 0]);
export var SearchGameSessionsOutput = struct(n0, _SGSO, 0, [_GSam, _NTe], [[() => GameSessionList, 0], 0]);
export var TerminateGameSessionInput = struct(n0, _TGSI, 0, [_GSIa, _TM], [0, 0]);
export var TerminateGameSessionOutput = struct(n0, _TGSO, 0, [_GSa], [[() => GameSession, 0]]);
export var GameSessionList = list(n0, _GSL, 0, [() => GameSession, 0]);
export var CreateGameSession = op(
  n0,
  _CGSr,
  0,
  () => CreateGameSessionInput,
  () => CreateGameSessionOutput
);
export var DescribeGameSessions = op(
  n0,
  _DGSes,
  0,
  () => DescribeGameSessionsInput,
  () => DescribeGameSessionsOutput
);
export var SearchGameSessions = op(
  n0,
  _SGS,
  0,
  () => SearchGameSessionsInput,
  () => SearchGameSessionsOutput
);
export var TerminateGameSession = op(
  n0,
  _TGS,
  0,
  () => TerminateGameSessionInput,
  () => TerminateGameSessionOutput
);
