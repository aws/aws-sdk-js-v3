// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CC,
  _D,
  _DREI,
  _DREIO,
  _DREIOR,
  _DREIORe,
  _DREIR,
  _DREIRe,
  _EIC,
  _EITl,
  _FP,
  _h,
  _hQ,
  _MR,
  _mR,
  _NT,
  _nT,
  _oI,
  _PO,
  _RC,
  _RCA,
  _RCe,
  _RCF,
  _RCL,
  _REI,
  _REIe,
  _REII,
  _REIL,
  _REIO,
  _REIOe,
  _REIOI,
  _REIOL,
  _rI,
  _RN,
  _ST,
  _St,
  _UPs,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedElasticsearchInstanceOfferingsRequest = struct(
  n0,
  _DREIOR,
  0,
  [_REIOI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _oI,
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
export var DescribeReservedElasticsearchInstanceOfferingsResponse = struct(
  n0,
  _DREIORe,
  0,
  [_NT, _REIO],
  [0, [() => ReservedElasticsearchInstanceOfferingList, 0]]
);
export var DescribeReservedElasticsearchInstancesRequest = struct(
  n0,
  _DREIR,
  0,
  [_REII, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _rI,
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
export var DescribeReservedElasticsearchInstancesResponse = struct(
  n0,
  _DREIRe,
  0,
  [_NT, _REI],
  [0, [() => ReservedElasticsearchInstanceList, 0]]
);
export var RecurringCharge = struct(n0, _RC, 0, [_RCA, _RCF], [1, 0]);
export var ReservedElasticsearchInstance = struct(
  n0,
  _REIe,
  0,
  [_RN, _REII, _REIOI, _EITl, _ST, _D, _FP, _UPs, _CC, _EIC, _St, _PO, _RCe],
  [0, 0, 0, 0, 4, 1, 1, 1, 0, 1, 0, 0, [() => RecurringChargeList, 0]]
);
export var ReservedElasticsearchInstanceOffering = struct(
  n0,
  _REIOe,
  0,
  [_REIOI, _EITl, _D, _FP, _UPs, _CC, _PO, _RCe],
  [0, 0, 1, 1, 1, 0, 0, [() => RecurringChargeList, 0]]
);
export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RC,
  },
]);
export var ReservedElasticsearchInstanceList = list(n0, _REIL, 0, [() => ReservedElasticsearchInstance, 0]);
export var ReservedElasticsearchInstanceOfferingList = list(n0, _REIOL, 0, [
  () => ReservedElasticsearchInstanceOffering,
  {
    [_xN]: _REIOe,
  },
]);
export var DescribeReservedElasticsearchInstanceOfferings = op(
  n0,
  _DREIO,
  {
    [_h]: ["GET", "/2015-01-01/es/reservedInstanceOfferings", 200],
  },
  () => DescribeReservedElasticsearchInstanceOfferingsRequest,
  () => DescribeReservedElasticsearchInstanceOfferingsResponse
);
export var DescribeReservedElasticsearchInstances = op(
  n0,
  _DREI,
  {
    [_h]: ["GET", "/2015-01-01/es/reservedInstances", 200],
  },
  () => DescribeReservedElasticsearchInstancesRequest,
  () => DescribeReservedElasticsearchInstancesResponse
);
