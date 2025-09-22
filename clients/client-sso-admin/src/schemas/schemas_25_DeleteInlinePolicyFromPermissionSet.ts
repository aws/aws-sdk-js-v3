// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIPFPS, _DIPFPSR, _DIPFPSRe, _IA, _PSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInlinePolicyFromPermissionSetRequest = struct(n0, _DIPFPSR, 0, [_IA, _PSA], [0, 0]);
export var DeleteInlinePolicyFromPermissionSetResponse = struct(n0, _DIPFPSRe, 0, [], []);
export var DeleteInlinePolicyFromPermissionSet = op(
  n0,
  _DIPFPS,
  0,
  () => DeleteInlinePolicyFromPermissionSetRequest,
  () => DeleteInlinePolicyFromPermissionSetResponse
);
