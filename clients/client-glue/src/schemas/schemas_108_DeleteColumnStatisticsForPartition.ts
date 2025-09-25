// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CNol, _DCSFP, _DCSFPR, _DCSFPRe, _DN, _PV, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteColumnStatisticsForPartitionRequest = struct(
  n0,
  _DCSFPR,
  0,
  [_CI, _DN, _TN, _PV, _CNol],
  [0, 0, 0, 64 | 0, 0]
);
export var DeleteColumnStatisticsForPartitionResponse = struct(n0, _DCSFPRe, 0, [], []);
export var DeleteColumnStatisticsForPartition = op(
  n0,
  _DCSFP,
  0,
  () => DeleteColumnStatisticsForPartitionRequest,
  () => DeleteColumnStatisticsForPartitionResponse
);
