// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AR,
  _Ar,
  _aR,
  _ar,
  _CCh,
  _cCh,
  _CCha,
  _cCha,
  _CCu,
  _cCu,
  _Co,
  _Cod,
  _cod,
  _cou,
  _DO,
  _DOR,
  _DORe,
  _DRele,
  _DRes,
  _DRR,
  _DRRe,
  _DRRes,
  _DRResc,
  _DU,
  _Du,
  _dU,
  _du,
  _En,
  _en,
  _FP,
  _fP,
  _hQ,
  _ht,
  _iTd,
  _jN,
  _LOi,
  _lOO,
  _LOR,
  _lOR,
  _LORi,
  _LR,
  _LRR,
  _LRRi,
  _MBa,
  _mBa,
  _MFa,
  _mFa,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _O,
  _o,
  _OD,
  _oD,
  _Of,
  _OI,
  _oI,
  _OT,
  _oT,
  _PO,
  _POR,
  _PORu,
  _R,
  _r,
  _RC,
  _rC,
  _Reg,
  _reg,
  _Res,
  _res,
  _Rese,
  _rese,
  _RIe,
  _rIe,
  _RIes,
  _rIes,
  _RRS,
  _RSen,
  _rSen,
  _RSes,
  _rSes,
  _RT,
  _rT,
  _SF,
  _sF,
  _St,
  _st,
  _Star,
  _star,
  _Ta,
  _ta,
  _UP,
  _uP,
  _UR,
  _URR,
  _URRp,
  _VQi,
  _vQi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReservationRequest = struct(n0, _DRR, 0, [_RIes], [[0, 1]]);
export var DeleteReservationResponse = struct(
  n0,
  _DRRe,
  0,
  [_Ar, _Co, _CCu, _Du, _DU, _En, _FP, _N, _OD, _OI, _OT, _Reg, _RSen, _RIes, _RSes, _Star, _St, _Ta, _UP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _cCu,
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
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fP,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _oI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => RenewalSettings,
      {
        [_jN]: _rSen,
      },
    ],
    [
      0,
      {
        [_jN]: _rIes,
      },
    ],
    [
      () => ReservationResourceSpecification,
      {
        [_jN]: _rSes,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      1,
      {
        [_jN]: _uP,
      },
    ],
  ]
);
export var DescribeOfferingRequest = struct(n0, _DOR, 0, [_OI], [[0, 1]]);
export var DescribeOfferingResponse = struct(
  n0,
  _DORe,
  0,
  [_Ar, _CCu, _Du, _DU, _FP, _OD, _OI, _OT, _Reg, _RSes, _UP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _cCu,
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
      1,
      {
        [_jN]: _fP,
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
        [_jN]: _oI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => ReservationResourceSpecification,
      {
        [_jN]: _rSes,
      },
    ],
    [
      1,
      {
        [_jN]: _uP,
      },
    ],
  ]
);
export var DescribeReservationRequest = struct(n0, _DRRes, 0, [_RIes], [[0, 1]]);
export var DescribeReservationResponse = struct(
  n0,
  _DRResc,
  0,
  [_Ar, _Co, _CCu, _Du, _DU, _En, _FP, _N, _OD, _OI, _OT, _Reg, _RSen, _RIes, _RSes, _Star, _St, _Ta, _UP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _cCu,
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
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fP,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _oI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => RenewalSettings,
      {
        [_jN]: _rSen,
      },
    ],
    [
      0,
      {
        [_jN]: _rIes,
      },
    ],
    [
      () => ReservationResourceSpecification,
      {
        [_jN]: _rSes,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      1,
      {
        [_jN]: _uP,
      },
    ],
  ]
);
export var ListOfferingsRequest = struct(
  n0,
  _LOR,
  0,
  [_CCh, _CCha, _Cod, _Du, _MR, _MBa, _MFa, _NT, _R, _RT, _SF, _VQi],
  [
    [
      0,
      {
        [_hQ]: _cCh,
      },
    ],
    [
      0,
      {
        [_hQ]: _cCha,
      },
    ],
    [
      0,
      {
        [_hQ]: _cod,
      },
    ],
    [
      0,
      {
        [_hQ]: _du,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _mBa,
      },
    ],
    [
      0,
      {
        [_hQ]: _mFa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sF,
      },
    ],
    [
      0,
      {
        [_hQ]: _vQi,
      },
    ],
  ]
);
export var ListOfferingsResponse = struct(
  n0,
  _LORi,
  0,
  [_NT, _O],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfOffering,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var ListReservationsRequest = struct(
  n0,
  _LRR,
  0,
  [_CCh, _Cod, _MR, _MBa, _MFa, _NT, _R, _RT, _SF, _VQi],
  [
    [
      0,
      {
        [_hQ]: _cCh,
      },
    ],
    [
      0,
      {
        [_hQ]: _cod,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _mBa,
      },
    ],
    [
      0,
      {
        [_hQ]: _mFa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sF,
      },
    ],
    [
      0,
      {
        [_hQ]: _vQi,
      },
    ],
  ]
);
export var ListReservationsResponse = struct(
  n0,
  _LRRi,
  0,
  [_NT, _Res],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfReservation,
      {
        [_jN]: _res,
      },
    ],
  ]
);
export var Offering = struct(
  n0,
  _Of,
  0,
  [_Ar, _CCu, _Du, _DU, _FP, _OD, _OI, _OT, _Reg, _RSes, _UP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _cCu,
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
      1,
      {
        [_jN]: _fP,
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
        [_jN]: _oI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => ReservationResourceSpecification,
      {
        [_jN]: _rSes,
      },
    ],
    [
      1,
      {
        [_jN]: _uP,
      },
    ],
  ]
);
export var PurchaseOfferingRequest = struct(
  n0,
  _POR,
  0,
  [_Co, _N, _OI, _RSen, _RIe, _Star, _Ta],
  [
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [0, 1],
    [
      () => RenewalSettings,
      {
        [_jN]: _rSen,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var PurchaseOfferingResponse = struct(
  n0,
  _PORu,
  0,
  [_Rese],
  [
    [
      () => Reservation,
      {
        [_jN]: _rese,
      },
    ],
  ]
);
export var RenewalSettings = struct(
  n0,
  _RSen,
  0,
  [_AR, _RC],
  [
    [
      0,
      {
        [_jN]: _aR,
      },
    ],
    [
      1,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var Reservation = struct(
  n0,
  _Rese,
  0,
  [_Ar, _Co, _CCu, _Du, _DU, _En, _FP, _N, _OD, _OI, _OT, _Reg, _RSen, _RIes, _RSes, _Star, _St, _Ta, _UP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _cCu,
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
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fP,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _oI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => RenewalSettings,
      {
        [_jN]: _rSen,
      },
    ],
    [
      0,
      {
        [_jN]: _rIes,
      },
    ],
    [
      () => ReservationResourceSpecification,
      {
        [_jN]: _rSes,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      1,
      {
        [_jN]: _uP,
      },
    ],
  ]
);
export var ReservationResourceSpecification = struct(
  n0,
  _RRS,
  0,
  [_CCh, _Cod, _MBa, _MFa, _R, _RT, _SF, _VQi],
  [
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      0,
      {
        [_jN]: _mBa,
      },
    ],
    [
      0,
      {
        [_jN]: _mFa,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      0,
      {
        [_jN]: _sF,
      },
    ],
    [
      0,
      {
        [_jN]: _vQi,
      },
    ],
  ]
);
export var UpdateReservationRequest = struct(
  n0,
  _URR,
  0,
  [_N, _RSen, _RIes],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => RenewalSettings,
      {
        [_jN]: _rSen,
      },
    ],
    [0, 1],
  ]
);
export var UpdateReservationResponse = struct(
  n0,
  _URRp,
  0,
  [_Rese],
  [
    [
      () => Reservation,
      {
        [_jN]: _rese,
      },
    ],
  ]
);
export var __listOfOffering = list(n0, _lOO, 0, [() => Offering, 0]);
export var __listOfReservation = list(n0, _lOR, 0, [() => Reservation, 0]);
export var DeleteReservation = op(
  n0,
  _DRele,
  {
    [_ht]: ["DELETE", "/prod/reservations/{ReservationId}", 200],
  },
  () => DeleteReservationRequest,
  () => DeleteReservationResponse
);
export var DescribeOffering = op(
  n0,
  _DO,
  {
    [_ht]: ["GET", "/prod/offerings/{OfferingId}", 200],
  },
  () => DescribeOfferingRequest,
  () => DescribeOfferingResponse
);
export var DescribeReservation = op(
  n0,
  _DRes,
  {
    [_ht]: ["GET", "/prod/reservations/{ReservationId}", 200],
  },
  () => DescribeReservationRequest,
  () => DescribeReservationResponse
);
export var ListOfferings = op(
  n0,
  _LOi,
  {
    [_ht]: ["GET", "/prod/offerings", 200],
  },
  () => ListOfferingsRequest,
  () => ListOfferingsResponse
);
export var ListReservations = op(
  n0,
  _LR,
  {
    [_ht]: ["GET", "/prod/reservations", 200],
  },
  () => ListReservationsRequest,
  () => ListReservationsResponse
);
export var PurchaseOffering = op(
  n0,
  _PO,
  {
    [_ht]: ["POST", "/prod/offerings/{OfferingId}/purchase", 201],
  },
  () => PurchaseOfferingRequest,
  () => PurchaseOfferingResponse
);
export var UpdateReservation = op(
  n0,
  _UR,
  {
    [_ht]: ["PUT", "/prod/reservations/{ReservationId}", 200],
  },
  () => UpdateReservationRequest,
  () => UpdateReservationResponse
);
