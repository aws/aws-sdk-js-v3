// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DW, _DWR, _DWRe, _end, _fI, _fIl, _h, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkerRequest = struct(
  n0,
  _DWR,
  0,
  [_fI, _fIl, _wI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWorkerResponse = struct(n0, _DWRe, 0, [], []);
export var DeleteWorker = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}", 200],
    [_end]: ["management."],
  },
  () => DeleteWorkerRequest,
  () => DeleteWorkerResponse
);
