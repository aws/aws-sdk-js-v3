// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BAR,
  _BARR,
  _BARRa,
  _BDR,
  _BDRR,
  _BDRRa,
  _FI,
  _FIa,
  _FIL,
  _I,
  _Id,
  _LRSRis,
  _LRSRR,
  _LRSRRi,
  _MR,
  _NT,
  _R,
  _Res,
  _RL,
  _RSI,
  _URI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchAssociateResourceRequest = struct(n0, _BARR, 0, [_RSI, _I], [0, 64 | 0]);
export var BatchAssociateResourceResponse = struct(n0, _BARRa, 0, [_RSI, _FI], [0, () => FailedItemList]);
export var BatchDisassociateResourceRequest = struct(n0, _BDRR, 0, [_RSI, _I], [0, 64 | 0]);
export var BatchDisassociateResourceResponse = struct(n0, _BDRRa, 0, [_RSI, _FI], [0, () => FailedItemList]);
export var FailedItem = struct(n0, _FIa, 0, [_URI, _R], [0, 0]);
export var ListResourceSetResourcesRequest = struct(n0, _LRSRR, 0, [_Id, _MR, _NT], [0, 1, 0]);
export var ListResourceSetResourcesResponse = struct(n0, _LRSRRi, 0, [_I, _NT], [() => ResourceList, 0]);
export var Resource = struct(n0, _Res, 0, [_URI, _AI], [0, 0]);
export var FailedItemList = list(n0, _FIL, 0, () => FailedItem);
export var IdentifierList = 64 | 0;

export var ResourceList = list(n0, _RL, 0, () => Resource);
export var BatchAssociateResource = op(
  n0,
  _BAR,
  0,
  () => BatchAssociateResourceRequest,
  () => BatchAssociateResourceResponse
);
export var BatchDisassociateResource = op(
  n0,
  _BDR,
  0,
  () => BatchDisassociateResourceRequest,
  () => BatchDisassociateResourceResponse
);
export var ListResourceSetResources = op(
  n0,
  _LRSRis,
  0,
  () => ListResourceSetResourcesRequest,
  () => ListResourceSetResourcesResponse
);
