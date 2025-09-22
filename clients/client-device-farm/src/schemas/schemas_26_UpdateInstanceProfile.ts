// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _d, _eAPFC, _iP, _n, _pC, _rAU, _UIP, _UIPR, _UIPRp, InstanceProfile, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateInstanceProfileRequest = struct(
  n0,
  _UIPR,
  0,
  [_a, _n, _d, _pC, _eAPFC, _rAU],
  [0, 0, 0, 2, 64 | 0, 2]
);
export var UpdateInstanceProfileResult = struct(n0, _UIPRp, 0, [_iP], [() => InstanceProfile]);
export var UpdateInstanceProfile = op(
  n0,
  _UIP,
  0,
  () => UpdateInstanceProfileRequest,
  () => UpdateInstanceProfileResult
);
