// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dPT,
  _dRT,
  _fD,
  _GTe,
  _GTRet,
  _GTRety,
  _kA,
  _kN,
  _lMT,
  _LT,
  _LTR,
  _LTRi,
  _mND,
  _mR,
  _nT,
  _rA,
  _s,
  _ta,
  _tN,
  _tNy,
  _TS,
  _TSL,
  n0,
} from "./schemas_0";
import { FieldList } from "./schemas_6_Table";

/* eslint no-var: 0 */

export var GetTypeRequest = struct(n0, _GTRet, 0, [_kN, _tNy], [0, 0]);
export var GetTypeResponse = struct(
  n0,
  _GTRety,
  0,
  [_kN, _tNy, _fD, _lMT, _s, _dRT, _dPT, _mND, _kA],
  [0, 0, () => FieldList, 4, 0, 64 | 0, 64 | 0, 1, 0]
);
export var ListTablesRequest = struct(n0, _LTR, 0, [_nT, _mR, _kN], [0, 1, 0]);
export var ListTablesResponse = struct(n0, _LTRi, 0, [_nT, _ta], [0, () => TableSummaryList]);
export var TableSummary = struct(n0, _TS, 0, [_kN, _tN, _rA], [0, 0, 0]);
export var TableNameList = 64 | 0;

export var TableSummaryList = list(n0, _TSL, 0, () => TableSummary);
export var GetType = op(
  n0,
  _GTe,
  0,
  () => GetTypeRequest,
  () => GetTypeResponse
);
export var ListTables = op(
  n0,
  _LT,
  0,
  () => ListTablesRequest,
  () => ListTablesResponse
);
