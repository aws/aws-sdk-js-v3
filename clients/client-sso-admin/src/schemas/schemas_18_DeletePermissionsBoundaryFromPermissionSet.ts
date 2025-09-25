// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPBFPS, _DPBFPSR, _DPBFPSRe, _IA, _PSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePermissionsBoundaryFromPermissionSetRequest = struct(n0, _DPBFPSR, 0, [_IA, _PSA], [0, 0]);
export var DeletePermissionsBoundaryFromPermissionSetResponse = struct(n0, _DPBFPSRe, 0, [], []);
export var DeletePermissionsBoundaryFromPermissionSet = op(
  n0,
  _DPBFPS,
  0,
  () => DeletePermissionsBoundaryFromPermissionSetRequest,
  () => DeletePermissionsBoundaryFromPermissionSetResponse
);
