// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRG,
  _CRGa,
  _CRGS,
  _cRGS,
  _CRI,
  _DR,
  _eQN,
  _GA,
  _gA,
  _GGFCR,
  _GGFCRR,
  _GGFCRRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CapacityReservationGroup = struct(
  n0,
  _CRG,
  0,
  [_GA, _OI],
  [
    [
      0,
      {
        [_eQN]: `GroupArn`,
        [_xN]: _gA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var GetGroupsForCapacityReservationRequest = struct(n0, _GGFCRR, 0, [_CRI, _NTe, _MR, _DR], [0, 0, 1, 2]);
export var GetGroupsForCapacityReservationResult = struct(
  n0,
  _GGFCRRe,
  0,
  [_NTe, _CRGa],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => CapacityReservationGroupSet,
      {
        [_eQN]: `CapacityReservationGroupSet`,
        [_xN]: _cRGS,
      },
    ],
  ]
);
export var CapacityReservationGroupSet = list(n0, _CRGS, 0, [
  () => CapacityReservationGroup,
  {
    [_xN]: _it,
  },
]);
export var GetGroupsForCapacityReservation = op(
  n0,
  _GGFCR,
  0,
  () => GetGroupsForCapacityReservationRequest,
  () => GetGroupsForCapacityReservationResult
);
