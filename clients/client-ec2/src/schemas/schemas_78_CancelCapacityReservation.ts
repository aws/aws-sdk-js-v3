// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCRa, _CCRR, _CCRRa, _CRI, _DR, _eQN, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelCapacityReservationRequest = struct(n0, _CCRR, 0, [_CRI, _DR], [0, 2]);
export var CancelCapacityReservationResult = struct(
  n0,
  _CCRRa,
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
export var CancelCapacityReservation = op(
  n0,
  _CCRa,
  0,
  () => CancelCapacityReservationRequest,
  () => CancelCapacityReservationResult
);
