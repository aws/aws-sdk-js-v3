// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCu,
  _DN,
  _DRIO,
  _DRIOR,
  _DRIORe,
  _Du,
  _FP,
  _GUH,
  _GUHR,
  _GUHRe,
  _h,
  _hQ,
  _Is,
  _IT,
  _MR,
  _mR,
  _NT,
  _nT,
  _oI,
  _POa,
  _PPr,
  _RC,
  _RCA,
  _RCe,
  _RCF,
  _RCL,
  _RIO,
  _RIOe,
  _RIOI,
  _RIOL,
  _SL,
  _STta,
  _UH,
  _UHL,
  _UHp,
  _UN,
  _UPs,
  _US,
  _USI,
  _USL,
  _USpg,
  _USS,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedInstanceOfferingsRequest = struct(
  n0,
  _DRIOR,
  0,
  [_RIOI, _MR, _NT],
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
export var DescribeReservedInstanceOfferingsResponse = struct(
  n0,
  _DRIORe,
  0,
  [_NT, _RIO],
  [0, [() => ReservedInstanceOfferingList, 0]]
);
export var GetUpgradeHistoryRequest = struct(
  n0,
  _GUHR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
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
export var GetUpgradeHistoryResponse = struct(n0, _GUHRe, 0, [_UH, _NT], [() => UpgradeHistoryList, 0]);
export var RecurringCharge = struct(n0, _RC, 0, [_RCA, _RCF], [1, 0]);
export var ReservedInstanceOffering = struct(
  n0,
  _RIOe,
  0,
  [_RIOI, _IT, _Du, _FP, _UPs, _CCu, _POa, _RCe],
  [0, 0, 1, 1, 1, 0, 0, [() => RecurringChargeList, 0]]
);
export var UpgradeHistory = struct(n0, _UHp, 0, [_UN, _STta, _USpg, _SL], [0, 4, 0, () => UpgradeStepsList]);
export var UpgradeStepItem = struct(n0, _USI, 0, [_US, _USS, _Is, _PPr], [0, 0, 64 | 0, 1]);
export var Issues = 64 | 0;

export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RC,
  },
]);
export var ReservedInstanceOfferingList = list(n0, _RIOL, 0, [
  () => ReservedInstanceOffering,
  {
    [_xN]: _RIOe,
  },
]);
export var UpgradeHistoryList = list(n0, _UHL, 0, () => UpgradeHistory);
export var UpgradeStepsList = list(n0, _USL, 0, () => UpgradeStepItem);
export var DescribeReservedInstanceOfferings = op(
  n0,
  _DRIO,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/reservedInstanceOfferings", 200],
  },
  () => DescribeReservedInstanceOfferingsRequest,
  () => DescribeReservedInstanceOfferingsResponse
);
export var GetUpgradeHistory = op(
  n0,
  _GUH,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/upgradeDomain/{DomainName}/history", 200],
  },
  () => GetUpgradeHistoryRequest,
  () => GetUpgradeHistoryResponse
);
