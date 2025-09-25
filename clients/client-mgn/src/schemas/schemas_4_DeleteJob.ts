// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _DJ, _DJR, _DJRe, _ht, _jID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteJobRequest = struct(n0, _DJR, 0, [_jID, _aIDc], [0, 0]);
export var DeleteJobResponse = struct(n0, _DJRe, 0, [], []);
export var DeleteJob = op(
  n0,
  _DJ,
  {
    [_ht]: ["POST", "/DeleteJob", 204],
  },
  () => DeleteJobRequest,
  () => DeleteJobResponse
);
