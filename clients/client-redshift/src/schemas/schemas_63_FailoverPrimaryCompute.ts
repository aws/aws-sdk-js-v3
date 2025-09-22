// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CIl, _FPC, _FPCIM, _FPCR, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FailoverPrimaryComputeInputMessage = struct(n0, _FPCIM, 0, [_CIl], [0]);
export var FailoverPrimaryComputeResult = struct(n0, _FPCR, 0, [_C], [[() => Cluster, 0]]);
export var FailoverPrimaryCompute = op(
  n0,
  _FPC,
  0,
  () => FailoverPrimaryComputeInputMessage,
  () => FailoverPrimaryComputeResult
);
