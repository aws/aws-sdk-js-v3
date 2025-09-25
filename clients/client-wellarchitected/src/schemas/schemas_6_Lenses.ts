// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _ALI, _DLi, _DLIi, _h, _LA, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateLensesInput = struct(n0, _ALI, 0, [_WI, _LA], [[0, 1], 64 | 0]);
export var DisassociateLensesInput = struct(n0, _DLIi, 0, [_WI, _LA], [[0, 1], 64 | 0]);
export var LensAliases = 64 | 0;

export var AssociateLenses = op(
  n0,
  _AL,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/associateLenses", 200],
  },
  () => AssociateLensesInput,
  () => Unit
);
export var DisassociateLenses = op(
  n0,
  _DLi,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/disassociateLenses", 200],
  },
  () => DisassociateLensesInput,
  () => Unit
);
