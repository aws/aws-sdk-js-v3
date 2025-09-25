// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ESTN, _L, _LETN, _LT, _LTI, _LTO, _TNa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTablesInput = struct(n0, _LTI, 0, [_ESTN, _L], [0, 1]);
export var ListTablesOutput = struct(n0, _LTO, 0, [_TNa, _LETN], [64 | 0, 0]);
export var TableNameList = 64 | 0;

export var ListTables = op(
  n0,
  _LT,
  0,
  () => ListTablesInput,
  () => ListTablesOutput
);
