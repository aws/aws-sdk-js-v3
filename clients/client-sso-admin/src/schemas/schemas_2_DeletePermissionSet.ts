// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPS, _DPSR, _DPSRe, _IA, _PSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePermissionSetRequest = struct(n0, _DPSR, 0, [_IA, _PSA], [0, 0]);
export var DeletePermissionSetResponse = struct(n0, _DPSRe, 0, [], []);
export var DeletePermissionSet = op(
  n0,
  _DPS,
  0,
  () => DeletePermissionSetRequest,
  () => DeletePermissionSetResponse
);
