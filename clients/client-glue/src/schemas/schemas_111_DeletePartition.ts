// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DN, _DPe, _DPR, _DPRe, _PV, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePartitionRequest = struct(n0, _DPR, 0, [_CI, _DN, _TN, _PV], [0, 0, 0, 64 | 0]);
export var DeletePartitionResponse = struct(n0, _DPRe, 0, [], []);
export var DeletePartition = op(
  n0,
  _DPe,
  0,
  () => DeletePartitionRequest,
  () => DeletePartitionResponse
);
