// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJQ, _DJQR, _DJQRe, _ht, _jQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteJobQueueRequest = struct(n0, _DJQR, 0, [_jQ], [0]);
export var DeleteJobQueueResponse = struct(n0, _DJQRe, 0, [], []);
export var DeleteJobQueue = op(
  n0,
  _DJQ,
  {
    [_ht]: ["POST", "/v1/deletejobqueue", 200],
  },
  () => DeleteJobQueueRequest,
  () => DeleteJobQueueResponse
);
