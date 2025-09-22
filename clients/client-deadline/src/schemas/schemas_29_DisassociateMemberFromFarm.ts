// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMFF, _DMFFR, _DMFFRi, _end, _fI, _h, _pI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberFromFarmRequest = struct(
  n0,
  _DMFFR,
  0,
  [_fI, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMemberFromFarmResponse = struct(n0, _DMFFRi, 0, [], []);
export var DisassociateMemberFromFarm = op(
  n0,
  _DMFF,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/members/{principalId}", 200],
  },
  () => DisassociateMemberFromFarmRequest,
  () => DisassociateMemberFromFarmResponse
);
