// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTP, _DTPR, _h, _n, _na, _tBARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTablePolicyRequest = struct(
  n0,
  _DTPR,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTablePolicy = op(
  n0,
  _DTP,
  {
    [_h]: ["DELETE", "/tables/{tableBucketARN}/{namespace}/{name}/policy", 204],
  },
  () => DeleteTablePolicyRequest,
  () => Unit
);
