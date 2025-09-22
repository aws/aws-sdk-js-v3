// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDRTR, _DDRTRR, _DDRTRRi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDRTRoleRequest = struct(n0, _DDRTRR, 0, [], []);
export var DisassociateDRTRoleResponse = struct(n0, _DDRTRRi, 0, [], []);
export var DisassociateDRTRole = op(
  n0,
  _DDRTR,
  0,
  () => DisassociateDRTRoleRequest,
  () => DisassociateDRTRoleResponse
);
