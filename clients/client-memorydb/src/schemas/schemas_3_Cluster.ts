// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ReservedNodeAlreadyExistsFault as __ReservedNodeAlreadyExistsFault,
  ReservedNodeNotFoundFault as __ReservedNodeNotFoundFault,
  ReservedNodeQuotaExceededFault as __ReservedNodeQuotaExceededFault,
  ReservedNodesOfferingNotFoundFault as __ReservedNodesOfferingNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _c,
  _DRN,
  _DRNO,
  _DRNOR,
  _DRNORe,
  _DRNR,
  _DRNRe,
  _Du,
  _e,
  _FP,
  _hE,
  _m,
  _MR,
  _NC,
  _NT,
  _NTex,
  _OT,
  _PRNO,
  _PRNOR,
  _PRNORu,
  _RC,
  _RCA,
  _RCec,
  _RCF,
  _RCL,
  _RI,
  _RN,
  _RNAEF,
  _RNe,
  _RNL,
  _RNNFF,
  _RNO,
  _RNOe,
  _RNOI,
  _RNOL,
  _RNONFF,
  _RNQEF,
  _St,
  _STt,
  _Ta,
  _xN,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_16_Create";

/* eslint no-var: 0 */

export var DescribeReservedNodesOfferingsRequest = struct(
  n0,
  _DRNOR,
  0,
  [_RNOI, _NT, _Du, _OT, _MR, _NTex],
  [0, 0, 0, 0, 1, 0]
);
export var DescribeReservedNodesOfferingsResponse = struct(
  n0,
  _DRNORe,
  0,
  [_NTex, _RNO],
  [0, [() => ReservedNodesOfferingList, 0]]
);
export var DescribeReservedNodesRequest = struct(
  n0,
  _DRNR,
  0,
  [_RI, _RNOI, _NT, _Du, _OT, _MR, _NTex],
  [0, 0, 0, 0, 0, 1, 0]
);
export var DescribeReservedNodesResponse = struct(n0, _DRNRe, 0, [_NTex, _RN], [0, [() => ReservedNodeList, 0]]);
export var PurchaseReservedNodesOfferingRequest = struct(
  n0,
  _PRNOR,
  0,
  [_RNOI, _RI, _NC, _Ta],
  [0, 0, 1, [() => TagList, 0]]
);
export var PurchaseReservedNodesOfferingResponse = struct(n0, _PRNORu, 0, [_RNe], [[() => ReservedNode, 0]]);
export var RecurringCharge = struct(n0, _RC, 0, [_RCA, _RCF], [1, 0]);
export var ReservedNode = struct(
  n0,
  _RNe,
  0,
  [_RI, _RNOI, _NT, _STt, _Du, _FP, _NC, _OT, _St, _RCec, _ARN],
  [0, 0, 0, 4, 1, 1, 1, 0, 0, [() => RecurringChargeList, 0], 0]
);
export var ReservedNodeAlreadyExistsFault = error(
  n0,
  _RNAEF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodeAlreadyExists`, 404],
  },
  [_m],
  [0],

  __ReservedNodeAlreadyExistsFault
);
export var ReservedNodeNotFoundFault = error(
  n0,
  _RNNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodeNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedNodeNotFoundFault
);
export var ReservedNodeQuotaExceededFault = error(
  n0,
  _RNQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReservedNodeQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ReservedNodeQuotaExceededFault
);
export var ReservedNodesOffering = struct(
  n0,
  _RNOe,
  0,
  [_RNOI, _NT, _Du, _FP, _OT, _RCec],
  [0, 0, 1, 1, 0, [() => RecurringChargeList, 0]]
);
export var ReservedNodesOfferingNotFoundFault = error(
  n0,
  _RNONFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodesOfferingNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedNodesOfferingNotFoundFault
);
export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RC,
  },
]);
export var ReservedNodeList = list(n0, _RNL, 0, [
  () => ReservedNode,
  {
    [_xN]: _RNe,
  },
]);
export var ReservedNodesOfferingList = list(n0, _RNOL, 0, [
  () => ReservedNodesOffering,
  {
    [_xN]: _RNOe,
  },
]);
export var DescribeReservedNodes = op(
  n0,
  _DRN,
  0,
  () => DescribeReservedNodesRequest,
  () => DescribeReservedNodesResponse
);
export var DescribeReservedNodesOfferings = op(
  n0,
  _DRNO,
  0,
  () => DescribeReservedNodesOfferingsRequest,
  () => DescribeReservedNodesOfferingsResponse
);
export var PurchaseReservedNodesOffering = op(
  n0,
  _PRNO,
  0,
  () => PurchaseReservedNodesOfferingRequest,
  () => PurchaseReservedNodesOfferingResponse
);
