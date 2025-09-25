// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMFJ, _DMFJR, _DMFJRi, _end, _fI, _h, _jI, _pI, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberFromJobRequest = struct(
  n0,
  _DMFJR,
  0,
  [_fI, _qI, _jI, _pI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMemberFromJobResponse = struct(n0, _DMFJRi, 0, [], []);
export var DisassociateMemberFromJob = op(
  n0,
  _DMFJ,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}", 200],
  },
  () => DisassociateMemberFromJobRequest,
  () => DisassociateMemberFromJobResponse
);
