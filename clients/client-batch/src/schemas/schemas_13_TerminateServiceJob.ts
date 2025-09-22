// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _jI, _r, _TSJ, _TSJR, _TSJRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TerminateServiceJobRequest = struct(n0, _TSJR, 0, [_jI, _r], [0, 0]);
export var TerminateServiceJobResponse = struct(n0, _TSJRe, 0, [], []);
export var TerminateServiceJob = op(
  n0,
  _TSJ,
  {
    [_ht]: ["POST", "/v1/terminateservicejob", 200],
  },
  () => TerminateServiceJobRequest,
  () => TerminateServiceJobResponse
);
