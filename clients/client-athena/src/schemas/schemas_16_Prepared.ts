// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DPS, _DPSI, _DPSO, _LMT, _LPS, _LPSI, _LPSO, _MR, _NT, _PS, _PSL, _PSS, _SNt, _WG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePreparedStatementInput = struct(n0, _DPSI, 0, [_SNt, _WG], [0, 0]);
export var DeletePreparedStatementOutput = struct(n0, _DPSO, 0, [], []);
export var ListPreparedStatementsInput = struct(n0, _LPSI, 0, [_WG, _NT, _MR], [0, 0, 1]);
export var ListPreparedStatementsOutput = struct(n0, _LPSO, 0, [_PS, _NT], [() => PreparedStatementsList, 0]);
export var PreparedStatementSummary = struct(n0, _PSS, 0, [_SNt, _LMT], [0, 4]);
export var PreparedStatementsList = list(n0, _PSL, 0, () => PreparedStatementSummary);
export var DeletePreparedStatement = op(
  n0,
  _DPS,
  0,
  () => DeletePreparedStatementInput,
  () => DeletePreparedStatementOutput
);
export var ListPreparedStatements = op(
  n0,
  _LPS,
  0,
  () => ListPreparedStatementsInput,
  () => ListPreparedStatementsOutput
);
