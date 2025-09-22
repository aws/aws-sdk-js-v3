// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CJ, _CJR, _CJRa, _ht, _jI, _r, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobRequest = struct(n0, _CJR, 0, [_jI, _r], [0, 0]);
export var CancelJobResponse = struct(n0, _CJRa, 0, [], []);
export var CancelJob = op(
  n0,
  _CJ,
  {
    [_ht]: ["POST", "/v1/canceljob", 200],
  },
  () => CancelJobRequest,
  () => CancelJobResponse
);
