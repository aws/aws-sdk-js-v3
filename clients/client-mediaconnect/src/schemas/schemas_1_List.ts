// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BA,
  _bA,
  _Br,
  _br,
  _BS,
  _bS,
  _BT,
  _bT,
  _DTSFP,
  _dTSFP,
  _EA,
  _eA,
  _EN,
  _En,
  _eN,
  _ent,
  _FAi,
  _fAi,
  _GA,
  _Ga,
  _gA,
  _ga,
  _GIA,
  _gIA,
  _GS,
  _gS,
  _h,
  _hQ,
  _II,
  _iI,
  _In,
  _in,
  _IS,
  _iS,
  _jN,
  _LB,
  _LBi,
  _LBR,
  _LBRi,
  _LE,
  _LEi,
  _LER,
  _LERi,
  _LG,
  _LGI,
  _LGi,
  _LGIi,
  _LGIR,
  _LGIRi,
  _LGR,
  _LGRi,
  _LO,
  _lOLB,
  _lOLE,
  _lOLG,
  _lOLGI,
  _lOO,
  _LOR,
  _lOR,
  _LORi,
  _LR,
  _LRR,
  _LRRi,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _Off,
  _off,
  _PA,
  _pA,
  _Res,
  _res,
  n0,
} from "./schemas_0";
import { Offering, Reservation } from "./schemas_8_Offering";

/* eslint no-var: 0 */

export var ListBridgesRequest = struct(
  n0,
  _LBR,
  0,
  [_FAi, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _fAi,
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
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListBridgesResponse = struct(
  n0,
  _LBRi,
  0,
  [_Br, _NT],
  [
    [
      () => __listOfListedBridge,
      {
        [_jN]: _br,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListedBridge = struct(
  n0,
  _LB,
  0,
  [_BA, _BS, _BT, _N, _PA],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _bS,
      },
    ],
    [
      0,
      {
        [_jN]: _bT,
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
        [_jN]: _pA,
      },
    ],
  ]
);
export var ListedEntitlement = struct(
  n0,
  _LE,
  0,
  [_DTSFP, _EA, _EN],
  [
    [
      1,
      {
        [_jN]: _dTSFP,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _eN,
      },
    ],
  ]
);
export var ListedGateway = struct(
  n0,
  _LG,
  0,
  [_GA, _GS, _N],
  [
    [
      0,
      {
        [_jN]: _gA,
      },
    ],
    [
      0,
      {
        [_jN]: _gS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var ListedGatewayInstance = struct(
  n0,
  _LGI,
  0,
  [_GA, _GIA, _II, _IS],
  [
    [
      0,
      {
        [_jN]: _gA,
      },
    ],
    [
      0,
      {
        [_jN]: _gIA,
      },
    ],
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iS,
      },
    ],
  ]
);
export var ListEntitlementsRequest = struct(
  n0,
  _LER,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEntitlementsResponse = struct(
  n0,
  _LERi,
  0,
  [_En, _NT],
  [
    [
      () => __listOfListedEntitlement,
      {
        [_jN]: _ent,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListGatewayInstancesRequest = struct(
  n0,
  _LGIR,
  0,
  [_FAi, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _fAi,
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
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListGatewayInstancesResponse = struct(
  n0,
  _LGIRi,
  0,
  [_In, _NT],
  [
    [
      () => __listOfListedGatewayInstance,
      {
        [_jN]: _in,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListGatewaysRequest = struct(
  n0,
  _LGR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListGatewaysResponse = struct(
  n0,
  _LGRi,
  0,
  [_Ga, _NT],
  [
    [
      () => __listOfListedGateway,
      {
        [_jN]: _ga,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListOfferingsRequest = struct(
  n0,
  _LOR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListOfferingsResponse = struct(
  n0,
  _LORi,
  0,
  [_NT, _Off],
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
        [_jN]: _off,
      },
    ],
  ]
);
export var ListReservationsRequest = struct(
  n0,
  _LRR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
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
export var __listOfListedBridge = list(n0, _lOLB, 0, [() => ListedBridge, 0]);
export var __listOfListedEntitlement = list(n0, _lOLE, 0, [() => ListedEntitlement, 0]);
export var __listOfListedGateway = list(n0, _lOLG, 0, [() => ListedGateway, 0]);
export var __listOfListedGatewayInstance = list(n0, _lOLGI, 0, [() => ListedGatewayInstance, 0]);
export var __listOfOffering = list(n0, _lOO, 0, [() => Offering, 0]);
export var __listOfReservation = list(n0, _lOR, 0, [() => Reservation, 0]);
export var ListBridges = op(
  n0,
  _LBi,
  {
    [_h]: ["GET", "/v1/bridges", 200],
  },
  () => ListBridgesRequest,
  () => ListBridgesResponse
);
export var ListEntitlements = op(
  n0,
  _LEi,
  {
    [_h]: ["GET", "/v1/entitlements", 200],
  },
  () => ListEntitlementsRequest,
  () => ListEntitlementsResponse
);
export var ListGatewayInstances = op(
  n0,
  _LGIi,
  {
    [_h]: ["GET", "/v1/gateway-instances", 200],
  },
  () => ListGatewayInstancesRequest,
  () => ListGatewayInstancesResponse
);
export var ListGateways = op(
  n0,
  _LGi,
  {
    [_h]: ["GET", "/v1/gateways", 200],
  },
  () => ListGatewaysRequest,
  () => ListGatewaysResponse
);
export var ListOfferings = op(
  n0,
  _LO,
  {
    [_h]: ["GET", "/v1/offerings", 200],
  },
  () => ListOfferingsRequest,
  () => ListOfferingsResponse
);
export var ListReservations = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/reservations", 200],
  },
  () => ListReservationsRequest,
  () => ListReservationsResponse
);
