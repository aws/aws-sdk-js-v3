// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _GIP, _GIPR, _GIPRe, _iP, InstanceProfile, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInstanceProfileRequest = struct(n0, _GIPR, 0, [_a], [0]);
export var GetInstanceProfileResult = struct(n0, _GIPRe, 0, [_iP], [() => InstanceProfile]);
export var GetInstanceProfile = op(
  n0,
  _GIP,
  0,
  () => GetInstanceProfileRequest,
  () => GetInstanceProfileResult
);
