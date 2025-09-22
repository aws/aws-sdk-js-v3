// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFT, _DFTR, _DFTRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFuotaTaskRequest = struct(n0, _DFTR, 0, [_I], [[0, 1]]);
export var DeleteFuotaTaskResponse = struct(n0, _DFTRe, 0, [], []);
export var DeleteFuotaTask = op(
  n0,
  _DFT,
  {
    [_h]: ["DELETE", "/fuota-tasks/{Id}", 204],
  },
  () => DeleteFuotaTaskRequest,
  () => DeleteFuotaTaskResponse
);
