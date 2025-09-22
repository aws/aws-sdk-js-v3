// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { IllegalSessionStateException as __IllegalSessionStateException } from "../models/index";
import {
  _c,
  _Cod,
  _COo,
  _CSa,
  _CSR,
  _CSRa,
  _Da,
  _DSele,
  _DSRe,
  _DSRel,
  _e,
  _ECxe,
  _ENr,
  _EVr,
  _GSett,
  _GSRett,
  _GSRetta,
  _Id,
  _ISSE,
  _LSist,
  _LSRist,
  _LSRistt,
  _M,
  _NTe,
  _Ou,
  _Prog,
  _RO,
  _RSR,
  _RSRu,
  _RSu,
  _SIe,
  _SLt,
  _SO,
  _SOD,
  _SOtat,
  _SSR,
  _SSRt,
  _SSto,
  _St,
  _Sta,
  _Stat,
  _State,
  _TPe,
  _Trac,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelStatementRequest = struct(n0, _CSR, 0, [_SIe, _Id, _RO], [0, 1, 0]);
export var CancelStatementResponse = struct(n0, _CSRa, 0, [], []);
export var DeleteSessionRequest = struct(n0, _DSRe, 0, [_Id, _RO], [0, 0]);
export var DeleteSessionResponse = struct(n0, _DSRel, 0, [_Id], [0]);
export var GetStatementRequest = struct(n0, _GSRett, 0, [_SIe, _Id, _RO], [0, 1, 0]);
export var GetStatementResponse = struct(n0, _GSRetta, 0, [_Stat], [() => Statement]);
export var IllegalSessionStateException = error(
  n0,
  _ISSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IllegalSessionStateException
);
export var ListStatementsRequest = struct(n0, _LSRist, 0, [_SIe, _RO, _NTe], [0, 0, 0]);
export var ListStatementsResponse = struct(n0, _LSRistt, 0, [_State, _NTe], [() => StatementList, 0]);
export var RunStatementRequest = struct(n0, _RSR, 0, [_SIe, _Cod, _RO], [0, 0, 0]);
export var RunStatementResponse = struct(n0, _RSRu, 0, [_Id], [1]);
export var Statement = struct(
  n0,
  _Stat,
  0,
  [_Id, _Cod, _Sta, _Ou, _Prog, _SO, _COo],
  [1, 0, 0, () => StatementOutput, 1, 1, 1]
);
export var StatementOutput = struct(
  n0,
  _SOtat,
  0,
  [_Da, _ECxe, _St, _ENr, _EVr, _Trac],
  [() => StatementOutputData, 1, 0, 0, 0, 64 | 0]
);
export var StatementOutputData = struct(n0, _SOD, 0, [_TPe], [0]);
export var StopSessionRequest = struct(n0, _SSR, 0, [_Id, _RO], [0, 0]);
export var StopSessionResponse = struct(n0, _SSRt, 0, [_Id], [0]);
export var StatementList = list(n0, _SLt, 0, () => Statement);
export var CancelStatement = op(
  n0,
  _CSa,
  0,
  () => CancelStatementRequest,
  () => CancelStatementResponse
);
export var DeleteSession = op(
  n0,
  _DSele,
  0,
  () => DeleteSessionRequest,
  () => DeleteSessionResponse
);
export var GetStatement = op(
  n0,
  _GSett,
  0,
  () => GetStatementRequest,
  () => GetStatementResponse
);
export var ListStatements = op(
  n0,
  _LSist,
  0,
  () => ListStatementsRequest,
  () => ListStatementsResponse
);
export var RunStatement = op(
  n0,
  _RSu,
  0,
  () => RunStatementRequest,
  () => RunStatementResponse
);
export var StopSession = op(
  n0,
  _SSto,
  0,
  () => StopSessionRequest,
  () => StopSessionResponse
);
