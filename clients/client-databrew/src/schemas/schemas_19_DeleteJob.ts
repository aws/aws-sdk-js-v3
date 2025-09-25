// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJ, _DJR, _DJRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteJobRequest = struct(n0, _DJR, 0, [_N], [[0, 1]]);
export var DeleteJobResponse = struct(n0, _DJRe, 0, [_N], [0]);
export var DeleteJob = op(
  n0,
  _DJ,
  {
    [_h]: ["DELETE", "/jobs/{Name}", 200],
  },
  () => DeleteJobRequest,
  () => DeleteJobResponse
);
