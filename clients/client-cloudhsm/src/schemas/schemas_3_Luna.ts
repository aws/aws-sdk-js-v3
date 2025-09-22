// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _C,
  _CA,
  _CF,
  _CL,
  _CLC,
  _CLCR,
  _CLCRr,
  _DLC,
  _DLCe,
  _DLCR,
  _DLCRe,
  _DLCRes,
  _DLCResc,
  _L,
  _LLC,
  _LLCR,
  _LLCRi,
  _LMT,
  _MLC,
  _MLCR,
  _MLCRo,
  _NT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLunaClientRequest = struct(n0, _CLCR, 0, [_L, _C], [0, 0]);
export var CreateLunaClientResponse = struct(n0, _CLCRr, 0, [_CA], [0]);
export var DeleteLunaClientRequest = struct(n0, _DLCR, 0, [_CA], [0]);
export var DeleteLunaClientResponse = struct(n0, _DLCRe, 0, [_S], [0]);
export var DescribeLunaClientRequest = struct(n0, _DLCRes, 0, [_CA, _CF], [0, 0]);
export var DescribeLunaClientResponse = struct(n0, _DLCResc, 0, [_CA, _C, _CF, _LMT, _L], [0, 0, 0, 0, 0]);
export var ListLunaClientsRequest = struct(n0, _LLCR, 0, [_NT], [0]);
export var ListLunaClientsResponse = struct(n0, _LLCRi, 0, [_CL, _NT], [64 | 0, 0]);
export var ModifyLunaClientRequest = struct(n0, _MLCR, 0, [_CA, _C], [0, 0]);
export var ModifyLunaClientResponse = struct(n0, _MLCRo, 0, [_CA], [0]);
export var ClientList = 64 | 0;

export var CreateLunaClient = op(
  n0,
  _CLC,
  0,
  () => CreateLunaClientRequest,
  () => CreateLunaClientResponse
);
export var DeleteLunaClient = op(
  n0,
  _DLC,
  0,
  () => DeleteLunaClientRequest,
  () => DeleteLunaClientResponse
);
export var DescribeLunaClient = op(
  n0,
  _DLCe,
  0,
  () => DescribeLunaClientRequest,
  () => DescribeLunaClientResponse
);
export var ListLunaClients = op(
  n0,
  _LLC,
  0,
  () => ListLunaClientsRequest,
  () => ListLunaClientsResponse
);
export var ModifyLunaClient = op(
  n0,
  _MLC,
  0,
  () => ModifyLunaClientRequest,
  () => ModifyLunaClientResponse
);
