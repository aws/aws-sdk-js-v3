// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CJa, _CJR, _CJRa, _ht, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobRequest = struct(n0, _CJR, 0, [_I], [[0, 1]]);
export var CancelJobResponse = struct(n0, _CJRa, 0, [], []);
export var CancelJob = op(
  n0,
  _CJa,
  {
    [_ht]: ["DELETE", "/2017-08-29/jobs/{Id}", 202],
  },
  () => CancelJobRequest,
  () => CancelJobResponse
);
