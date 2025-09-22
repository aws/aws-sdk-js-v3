// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CC,
  _cC,
  _DO,
  _DOR,
  _DORe,
  _DR,
  _DRR,
  _DRRe,
  _DU,
  _Du,
  _dU,
  _du,
  _End,
  _end,
  _h,
  _jN,
  _OAf,
  _oAf,
  _OD,
  _oD,
  _Of,
  _of,
  _PO,
  _POR,
  _PORu,
  _PPU,
  _pPU,
  _PU,
  _pU,
  _R,
  _r,
  _RA,
  _rAe,
  _RB,
  _rB,
  _RNe,
  _rNe,
  _RS,
  _rS,
  _RSe,
  _rSe,
  _RT,
  _rT,
  _Star,
  _star,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOfferingRequest = struct(n0, _DOR, 0, [_OAf], [[0, 1]]);
export var DescribeOfferingResponse = struct(
  n0,
  _DORe,
  0,
  [_Of],
  [
    [
      () => Offering,
      {
        [_jN]: _of,
      },
    ],
  ]
);
export var DescribeReservationRequest = struct(n0, _DRR, 0, [_RA], [[0, 1]]);
export var DescribeReservationResponse = struct(
  n0,
  _DRRe,
  0,
  [_R],
  [
    [
      () => Reservation,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var Offering = struct(
  n0,
  _Of,
  0,
  [_CC, _Du, _DU, _OAf, _OD, _PPU, _PU, _RS],
  [
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      1,
      {
        [_jN]: _du,
      },
    ],
    [
      0,
      {
        [_jN]: _dU,
      },
    ],
    [
      0,
      {
        [_jN]: _oAf,
      },
    ],
    [
      0,
      {
        [_jN]: _oD,
      },
    ],
    [
      0,
      {
        [_jN]: _pPU,
      },
    ],
    [
      0,
      {
        [_jN]: _pU,
      },
    ],
    [
      () => ResourceSpecification,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var PurchaseOfferingRequest = struct(
  n0,
  _POR,
  0,
  [_OAf, _RNe, _Star],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _rNe,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
  ]
);
export var PurchaseOfferingResponse = struct(
  n0,
  _PORu,
  0,
  [_R],
  [
    [
      () => Reservation,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var Reservation = struct(
  n0,
  _R,
  0,
  [_CC, _Du, _DU, _End, _OAf, _OD, _PPU, _PU, _RA, _RNe, _RSe, _RS, _Star],
  [
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      1,
      {
        [_jN]: _du,
      },
    ],
    [
      0,
      {
        [_jN]: _dU,
      },
    ],
    [
      0,
      {
        [_jN]: _end,
      },
    ],
    [
      0,
      {
        [_jN]: _oAf,
      },
    ],
    [
      0,
      {
        [_jN]: _oD,
      },
    ],
    [
      0,
      {
        [_jN]: _pPU,
      },
    ],
    [
      0,
      {
        [_jN]: _pU,
      },
    ],
    [
      0,
      {
        [_jN]: _rAe,
      },
    ],
    [
      0,
      {
        [_jN]: _rNe,
      },
    ],
    [
      0,
      {
        [_jN]: _rSe,
      },
    ],
    [
      () => ResourceSpecification,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
  ]
);
export var ResourceSpecification = struct(
  n0,
  _RS,
  0,
  [_RB, _RT],
  [
    [
      1,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
  ]
);
export var DescribeOffering = op(
  n0,
  _DO,
  {
    [_h]: ["GET", "/v1/offerings/{OfferingArn}", 200],
  },
  () => DescribeOfferingRequest,
  () => DescribeOfferingResponse
);
export var DescribeReservation = op(
  n0,
  _DR,
  {
    [_h]: ["GET", "/v1/reservations/{ReservationArn}", 200],
  },
  () => DescribeReservationRequest,
  () => DescribeReservationResponse
);
export var PurchaseOffering = op(
  n0,
  _PO,
  {
    [_h]: ["POST", "/v1/offerings/{OfferingArn}", 201],
  },
  () => PurchaseOfferingRequest,
  () => PurchaseOfferingResponse
);
