// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _IRP, _MGPC, _MS, _PS, _PWP, _PWPA, _PWPT, _ROSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InstanceReusePolicy = struct(n0, _IRP, 0, [_ROSI], [2]);
export var PutWarmPoolAnswer = struct(n0, _PWPA, 0, [], []);
export var PutWarmPoolType = struct(
  n0,
  _PWPT,
  0,
  [_ASGN, _MGPC, _MS, _PS, _IRP],
  [0, 1, 1, 0, () => InstanceReusePolicy]
);
export var PutWarmPool = op(
  n0,
  _PWP,
  0,
  () => PutWarmPoolType,
  () => PutWarmPoolAnswer
);
