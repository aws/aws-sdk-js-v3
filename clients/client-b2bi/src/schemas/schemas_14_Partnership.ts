// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPR, _h, _pIa, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePartnershipRequest = struct(n0, _DPR, 0, [_pIa], [[0, 1]]);
export var DeletePartnership = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/partnerships/{partnershipId}", 200],
  },
  () => DeletePartnershipRequest,
  () => Unit
);
