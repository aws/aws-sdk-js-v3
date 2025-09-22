// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIP, _CIPR, _CIPRr, _d, _eAPFC, _iP, _n, _pC, _rAU, InstanceProfile, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInstanceProfileRequest = struct(n0, _CIPR, 0, [_n, _d, _pC, _eAPFC, _rAU], [0, 0, 2, 64 | 0, 2]);
export var CreateInstanceProfileResult = struct(n0, _CIPRr, 0, [_iP], [() => InstanceProfile]);
export var CreateInstanceProfile = op(
  n0,
  _CIP,
  0,
  () => CreateInstanceProfileRequest,
  () => CreateInstanceProfileResult
);
