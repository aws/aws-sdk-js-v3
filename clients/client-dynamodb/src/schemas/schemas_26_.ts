// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ESGTN, _GT, _GTL, _GTl, _GTN, _L, _LEGTN, _LGT, _LGTI, _LGTO, _RG, _RN, n0 } from "./schemas_0";
import { ReplicaList } from "./schemas_25_Global";

/* eslint no-var: 0 */

export var GlobalTable = struct(n0, _GT, 0, [_GTN, _RG], [0, () => ReplicaList]);
export var ListGlobalTablesInput = struct(n0, _LGTI, 0, [_ESGTN, _L, _RN], [0, 1, 0]);
export var ListGlobalTablesOutput = struct(n0, _LGTO, 0, [_GTl, _LEGTN], [() => GlobalTableList, 0]);
export var GlobalTableList = list(n0, _GTL, 0, () => GlobalTable);
export var ListGlobalTables = op(
  n0,
  _LGT,
  0,
  () => ListGlobalTablesInput,
  () => ListGlobalTablesOutput
);
