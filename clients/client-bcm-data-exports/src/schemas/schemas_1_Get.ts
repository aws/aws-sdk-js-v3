// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CL,
  _D,
  _DV,
  _GT,
  _GTR,
  _GTRe,
  _LT,
  _LTR,
  _LTRi,
  _MR,
  _N,
  _NT,
  _S,
  _T,
  _Ta,
  _Tab,
  _TL,
  _TN,
  _TP,
  _TPD,
  _TPDL,
  _VV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Column = struct(n0, _C, 0, [_N, _T, _D], [0, 0, 0]);
export var GetTableRequest = struct(n0, _GTR, 0, [_TN, _TP], [0, 128 | 0]);
export var GetTableResponse = struct(n0, _GTRe, 0, [_TN, _D, _TP, _S], [0, 0, 128 | 0, () => ColumnList]);
export var ListTablesRequest = struct(n0, _LTR, 0, [_NT, _MR], [0, 1]);
export var ListTablesResponse = struct(n0, _LTRi, 0, [_Ta, _NT], [() => TableList, 0]);
export var Table = struct(n0, _Tab, 0, [_TN, _D, _TP], [0, 0, () => TablePropertyDescriptionList]);
export var TablePropertyDescription = struct(n0, _TPD, 0, [_N, _VV, _DV, _D], [0, 64 | 0, 0, 0]);
export var ColumnList = list(n0, _CL, 0, () => Column);
export var GenericStringList = 64 | 0;

export var TableList = list(n0, _TL, 0, () => Table);
export var TablePropertyDescriptionList = list(n0, _TPDL, 0, () => TablePropertyDescription);
export var TableProperties = 128 | 0;

export var GetTable = op(
  n0,
  _GT,
  0,
  () => GetTableRequest,
  () => GetTableResponse
);
export var ListTables = op(
  n0,
  _LT,
  0,
  () => ListTablesRequest,
  () => ListTablesResponse
);
