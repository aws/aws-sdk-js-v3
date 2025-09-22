// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _jI, _r, _TJ, _TJR, _TJRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TerminateJobRequest = struct(n0, _TJR, 0, [_jI, _r], [0, 0]);
export var TerminateJobResponse = struct(n0, _TJRe, 0, [], []);
export var TerminateJob = op(
  n0,
  _TJ,
  {
    [_ht]: ["POST", "/v1/terminatejob", 200],
  },
  () => TerminateJobRequest,
  () => TerminateJobResponse
);
