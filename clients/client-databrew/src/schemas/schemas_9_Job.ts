// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _N, _RI, _SJRRto, _SJRRtop, _SJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopJobRunRequest = struct(
  n0,
  _SJRRto,
  0,
  [_N, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopJobRunResponse = struct(n0, _SJRRtop, 0, [_RI], [0]);
export var StopJobRun = op(
  n0,
  _SJRt,
  {
    [_h]: ["POST", "/jobs/{Name}/jobRun/{RunId}/stopJobRun", 200],
  },
  () => StopJobRunRequest,
  () => StopJobRunResponse
);
