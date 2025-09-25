// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMFQ, _DMFQR, _DMFQRi, _end, _fI, _h, _pI, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberFromQueueRequest = struct(
  n0,
  _DMFQR,
  0,
  [_fI, _qI, _pI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMemberFromQueueResponse = struct(n0, _DMFQRi, 0, [], []);
export var DisassociateMemberFromQueue = op(
  n0,
  _DMFQ,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}", 200],
  },
  () => DisassociateMemberFromQueueRequest,
  () => DisassociateMemberFromQueueResponse
);
