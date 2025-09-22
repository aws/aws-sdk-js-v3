// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCRF,
  _CCRFE,
  _cCRFE,
  _CCRFR,
  _CCRFRa,
  _CFS,
  _cFS,
  _Co,
  _co,
  _CRFCS,
  _CRFCSS,
  _CRFI,
  _cRFI,
  _CRFIa,
  _CRFIS,
  _DR,
  _ED,
  _eQN,
  _FCRFCR,
  _FCRFCRS,
  _FFC,
  _fFCS,
  _it,
  _MCRF,
  _MCRFR,
  _MCRFRo,
  _Me,
  _me,
  _PFS,
  _pFS,
  _R,
  _r,
  _RED,
  _SFC,
  _sFCS,
  _TTC,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelCapacityReservationFleetError = struct(
  n0,
  _CCRFE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var CancelCapacityReservationFleetsRequest = struct(
  n0,
  _CCRFR,
  0,
  [_DR, _CRFI],
  [
    2,
    [
      () => CapacityReservationFleetIdSet,
      {
        [_xN]: _CRFIa,
      },
    ],
  ]
);
export var CancelCapacityReservationFleetsResult = struct(
  n0,
  _CCRFRa,
  0,
  [_SFC, _FFC],
  [
    [
      () => CapacityReservationFleetCancellationStateSet,
      {
        [_eQN]: `SuccessfulFleetCancellationSet`,
        [_xN]: _sFCS,
      },
    ],
    [
      () => FailedCapacityReservationFleetCancellationResultSet,
      {
        [_eQN]: `FailedFleetCancellationSet`,
        [_xN]: _fFCS,
      },
    ],
  ]
);
export var CapacityReservationFleetCancellationState = struct(
  n0,
  _CRFCS,
  0,
  [_CFS, _PFS, _CRFIa],
  [
    [
      0,
      {
        [_eQN]: `CurrentFleetState`,
        [_xN]: _cFS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PreviousFleetState`,
        [_xN]: _pFS,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationFleetId`,
        [_xN]: _cRFI,
      },
    ],
  ]
);
export var FailedCapacityReservationFleetCancellationResult = struct(
  n0,
  _FCRFCR,
  0,
  [_CRFIa, _CCRFE],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationFleetId`,
        [_xN]: _cRFI,
      },
    ],
    [
      () => CancelCapacityReservationFleetError,
      {
        [_eQN]: `CancelCapacityReservationFleetError`,
        [_xN]: _cCRFE,
      },
    ],
  ]
);
export var ModifyCapacityReservationFleetRequest = struct(
  n0,
  _MCRFR,
  0,
  [_CRFIa, _TTC, _ED, _DR, _RED],
  [0, 1, 4, 2, 2]
);
export var ModifyCapacityReservationFleetResult = struct(
  n0,
  _MCRFRo,
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
export var CapacityReservationFleetCancellationStateSet = list(n0, _CRFCSS, 0, [
  () => CapacityReservationFleetCancellationState,
  {
    [_xN]: _it,
  },
]);
export var CapacityReservationFleetIdSet = list(n0, _CRFIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var FailedCapacityReservationFleetCancellationResultSet = list(n0, _FCRFCRS, 0, [
  () => FailedCapacityReservationFleetCancellationResult,
  {
    [_xN]: _it,
  },
]);
export var CancelCapacityReservationFleets = op(
  n0,
  _CCRF,
  0,
  () => CancelCapacityReservationFleetsRequest,
  () => CancelCapacityReservationFleetsResult
);
export var ModifyCapacityReservationFleet = op(
  n0,
  _MCRF,
  0,
  () => ModifyCapacityReservationFleetRequest,
  () => ModifyCapacityReservationFleetResult
);
