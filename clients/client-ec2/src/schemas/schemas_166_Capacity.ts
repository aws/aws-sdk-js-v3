// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Acce, _AId, _CRI, _DR, _ED, _EDT, _eQN, _IC, _IMC, _MCR, _MCRR, _MCRRo, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyCapacityReservationRequest = struct(
  n0,
  _MCRR,
  0,
  [_CRI, _IC, _ED, _EDT, _Acce, _DR, _AId, _IMC],
  [0, 1, 4, 0, 2, 2, 0, 0]
);
export var ModifyCapacityReservationResult = struct(
  n0,
  _MCRRo,
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
export var ModifyCapacityReservation = op(
  n0,
  _MCR,
  0,
  () => ModifyCapacityReservationRequest,
  () => ModifyCapacityReservationResult
);
