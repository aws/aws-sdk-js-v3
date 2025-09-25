// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CJR, _CJRR, _CJRRa, _h, _i, _vCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobRunRequest = struct(
  n0,
  _CJRR,
  0,
  [_i, _vCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelJobRunResponse = struct(n0, _CJRRa, 0, [_i, _vCI], [0, 0]);
export var CancelJobRun = op(
  n0,
  _CJR,
  {
    [_h]: ["DELETE", "/virtualclusters/{virtualClusterId}/jobruns/{id}", 200],
  },
  () => CancelJobRunRequest,
  () => CancelJobRunResponse
);
