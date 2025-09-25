// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMFFi, _DMFFRis, _DMFFRisa, _end, _fI, _fIl, _h, _pI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberFromFleetRequest = struct(
  n0,
  _DMFFRis,
  0,
  [_fI, _fIl, _pI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMemberFromFleetResponse = struct(n0, _DMFFRisa, 0, [], []);
export var DisassociateMemberFromFleet = op(
  n0,
  _DMFFi,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}", 200],
  },
  () => DisassociateMemberFromFleetRequest,
  () => DisassociateMemberFromFleetResponse
);
