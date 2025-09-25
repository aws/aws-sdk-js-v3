// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _GAA, _GAAR, _GAARe, _RSo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAdminAccountRequest = struct(n0, _GAAR, 0, [], []);
export var GetAdminAccountResponse = struct(n0, _GAARe, 0, [_AA, _RSo], [0, 0]);
export var GetAdminAccount = op(
  n0,
  _GAA,
  0,
  () => GetAdminAccountRequest,
  () => GetAdminAccountResponse
);
