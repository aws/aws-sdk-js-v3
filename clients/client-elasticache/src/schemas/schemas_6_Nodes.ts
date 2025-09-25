// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ReservedCacheNodeAlreadyExistsFault as __ReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeQuotaExceededFault as __ReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodesOfferingNotFoundFault as __ReservedCacheNodesOfferingNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CNC,
  _CNT,
  _DRCNO,
  _DRCNOM,
  _Du,
  _e,
  _FP,
  _hE,
  _M,
  _m,
  _MR,
  _OT,
  _PD,
  _PRCNO,
  _PRCNOM,
  _PRCNOR,
  _RARN,
  _RCA,
  _RCec,
  _RCecu,
  _RCF,
  _RCL,
  _RCN,
  _RCNAEF,
  _RCNI,
  _RCNO,
  _RCNOe,
  _RCNOI,
  _RCNOL,
  _RCNOM,
  _RCNONFF,
  _RCNQEF,
  _Sta,
  _STt,
  _T,
  _UP,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedCacheNodesOfferingsMessage = struct(
  n0,
  _DRCNOM,
  0,
  [_RCNOI, _CNT, _Du, _PD, _OT, _MR, _M],
  [0, 0, 0, 0, 0, 1, 0]
);
export var PurchaseReservedCacheNodesOfferingMessage = struct(
  n0,
  _PRCNOM,
  0,
  [_RCNOI, _RCNI, _CNC, _T],
  [0, 0, 1, [() => TagList, 0]]
);
export var PurchaseReservedCacheNodesOfferingResult = struct(n0, _PRCNOR, 0, [_RCN], [[() => ReservedCacheNode, 0]]);
export var RecurringCharge = struct(n0, _RCec, 0, [_RCA, _RCF], [1, 0]);
export var ReservedCacheNode = struct(
  n0,
  _RCN,
  0,
  [_RCNI, _RCNOI, _CNT, _STt, _Du, _FP, _UP, _CNC, _PD, _OT, _Sta, _RCecu, _RARN],
  [0, 0, 0, 4, 1, 1, 1, 1, 0, 0, 0, [() => RecurringChargeList, 0], 0]
);
export var ReservedCacheNodeAlreadyExistsFault = error(
  n0,
  _RCNAEF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedCacheNodeAlreadyExists`, 404],
  },
  [_m],
  [0],

  __ReservedCacheNodeAlreadyExistsFault
);
export var ReservedCacheNodeQuotaExceededFault = error(
  n0,
  _RCNQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReservedCacheNodeQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ReservedCacheNodeQuotaExceededFault
);
export var ReservedCacheNodesOffering = struct(
  n0,
  _RCNO,
  0,
  [_RCNOI, _CNT, _Du, _FP, _UP, _PD, _OT, _RCecu],
  [0, 0, 1, 1, 1, 0, 0, [() => RecurringChargeList, 0]]
);
export var ReservedCacheNodesOfferingMessage = struct(
  n0,
  _RCNOM,
  0,
  [_M, _RCNOe],
  [0, [() => ReservedCacheNodesOfferingList, 0]]
);
export var ReservedCacheNodesOfferingNotFoundFault = error(
  n0,
  _RCNONFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedCacheNodesOfferingNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedCacheNodesOfferingNotFoundFault
);
export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RCec,
  },
]);
export var ReservedCacheNodesOfferingList = list(n0, _RCNOL, 0, [
  () => ReservedCacheNodesOffering,
  {
    [_xN]: _RCNO,
  },
]);
export var DescribeReservedCacheNodesOfferings = op(
  n0,
  _DRCNO,
  0,
  () => DescribeReservedCacheNodesOfferingsMessage,
  () => ReservedCacheNodesOfferingMessage
);
export var PurchaseReservedCacheNodesOffering = op(
  n0,
  _PRCNO,
  0,
  () => PurchaseReservedCacheNodesOfferingMessage,
  () => PurchaseReservedCacheNodesOfferingResult
);
