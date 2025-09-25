// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACRBO, _ACRBOR, _ACRBORc, _CRI, _DR, _eQN, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptCapacityReservationBillingOwnershipRequest = struct(n0, _ACRBOR, 0, [_DR, _CRI], [2, 0]);
export var AcceptCapacityReservationBillingOwnershipResult = struct(
  n0,
  _ACRBORc,
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
export var AcceptCapacityReservationBillingOwnership = op(
  n0,
  _ACRBO,
  0,
  () => AcceptCapacityReservationBillingOwnershipRequest,
  () => AcceptCapacityReservationBillingOwnershipResult
);
