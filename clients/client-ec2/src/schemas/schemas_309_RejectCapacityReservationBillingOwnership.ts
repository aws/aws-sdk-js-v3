// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRI, _DR, _eQN, _R, _r, _RCRBO, _RCRBOR, _RCRBORe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectCapacityReservationBillingOwnershipRequest = struct(n0, _RCRBOR, 0, [_DR, _CRI], [2, 0]);
export var RejectCapacityReservationBillingOwnershipResult = struct(
  n0,
  _RCRBORe,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var RejectCapacityReservationBillingOwnership = op(
  n0,
  _RCRBO,
  0,
  () => RejectCapacityReservationBillingOwnershipRequest,
  () => RejectCapacityReservationBillingOwnershipResult
);
