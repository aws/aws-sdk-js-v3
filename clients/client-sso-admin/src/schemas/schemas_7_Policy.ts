// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GIPFPS, _GIPFPSR, _GIPFPSRe, _IA, _IP, _PSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInlinePolicyForPermissionSetRequest = struct(n0, _GIPFPSR, 0, [_IA, _PSA], [0, 0]);
export var GetInlinePolicyForPermissionSetResponse = struct(n0, _GIPFPSRe, 0, [_IP], [0]);
export var GetInlinePolicyForPermissionSet = op(
  n0,
  _GIPFPS,
  0,
  () => GetInlinePolicyForPermissionSetRequest,
  () => GetInlinePolicyForPermissionSetResponse
);
