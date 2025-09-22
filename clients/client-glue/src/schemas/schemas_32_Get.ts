// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CL,
  _CO,
  _Comm,
  _Conn,
  _COo,
  _CSreat,
  _CSRreat,
  _CSRreate,
  _D,
  _DA,
  _DPUS,
  _EM,
  _ETxe,
  _GSet,
  _GSRe,
  _GSRet,
  _GV,
  _Id,
  _Ids,
  _ITd,
  _LSis,
  _LSRi,
  _LSRis,
  _MCax,
  _MRax,
  _N,
  _NOW,
  _NTe,
  _PN,
  _Prog,
  _PVy,
  _RO,
  _Rol,
  _SC,
  _SCess,
  _Ses,
  _Sess,
  _SLes,
  _St,
  _T,
  _Tag,
  _WT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionsList = struct(n0, _CL, 0, [_Conn], [64 | 0]);
export var CreateSessionRequest = struct(
  n0,
  _CSRreat,
  0,
  [_Id, _D, _Rol, _Comm, _T, _ITd, _DA, _Conn, _MCax, _NOW, _WT, _SC, _GV, _Tag, _RO],
  [0, 0, 0, () => SessionCommand, 1, 1, 128 | 0, () => ConnectionsList, 1, 1, 0, 0, 0, 128 | 0, 0]
);
export var CreateSessionResponse = struct(n0, _CSRreate, 0, [_Ses], [() => Session]);
export var GetSessionRequest = struct(n0, _GSRe, 0, [_Id, _RO], [0, 0]);
export var GetSessionResponse = struct(n0, _GSRet, 0, [_Ses], [() => Session]);
export var ListSessionsRequest = struct(n0, _LSRi, 0, [_NTe, _MRax, _Tag, _RO], [0, 1, 128 | 0, 0]);
export var ListSessionsResponse = struct(n0, _LSRis, 0, [_Ids, _Sess, _NTe], [64 | 0, () => SessionList, 0]);
export var Session = struct(
  n0,
  _Ses,
  0,
  [_Id, _CO, _St, _EM, _D, _Rol, _Comm, _DA, _Conn, _Prog, _MCax, _SC, _GV, _NOW, _WT, _COo, _ETxe, _DPUS, _ITd, _PN],
  [0, 4, 0, 0, 0, 0, () => SessionCommand, 128 | 0, () => ConnectionsList, 1, 1, 0, 0, 1, 0, 4, 1, 1, 1, 0]
);
export var SessionCommand = struct(n0, _SCess, 0, [_N, _PVy], [0, 0]);
export var ConnectionStringList = 64 | 0;

export var SessionIdList = 64 | 0;

export var SessionList = list(n0, _SLes, 0, () => Session);
export var OrchestrationArgumentsMap = 128 | 0;

export var CreateSession = op(
  n0,
  _CSreat,
  0,
  () => CreateSessionRequest,
  () => CreateSessionResponse
);
export var GetSession = op(
  n0,
  _GSet,
  0,
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var ListSessions = op(
  n0,
  _LSis,
  0,
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
