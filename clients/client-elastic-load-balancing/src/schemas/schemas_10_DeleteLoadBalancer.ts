// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAPI, _DAPO, _DLB, _LBN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPointInput = struct(n0, _DAPI, 0, [_LBN], [0]);
export var DeleteAccessPointOutput = struct(n0, _DAPO, 0, [], []);
export var DeleteLoadBalancer = op(
  n0,
  _DLB,
  0,
  () => DeleteAccessPointInput,
  () => DeleteAccessPointOutput
);
