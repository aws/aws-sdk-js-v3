// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CNol, _DCSFT, _DCSFTR, _DCSFTRe, _DN, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteColumnStatisticsForTableRequest = struct(n0, _DCSFTR, 0, [_CI, _DN, _TN, _CNol], [0, 0, 0, 0]);
export var DeleteColumnStatisticsForTableResponse = struct(n0, _DCSFTRe, 0, [], []);
export var DeleteColumnStatisticsForTable = op(
  n0,
  _DCSFT,
  0,
  () => DeleteColumnStatisticsForTableRequest,
  () => DeleteColumnStatisticsForTableResponse
);
