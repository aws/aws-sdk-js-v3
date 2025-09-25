// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ReservedNodeAlreadyExistsFault as __ReservedNodeAlreadyExistsFault,
  ReservedNodeOfferingNotFoundFault as __ReservedNodeOfferingNotFoundFault,
  ReservedNodeQuotaExceededFault as __ReservedNodeQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _hE,
  _m,
  _NC,
  _PRNO,
  _PRNOM,
  _PRNOR,
  _RNAEF,
  _RNe,
  _RNOI,
  _RNONFF,
  _RNQEF,
  n0,
} from "./schemas_0";
import { ReservedNode } from "./schemas_60_Reserved";

/* eslint no-var: 0 */

export var PurchaseReservedNodeOfferingMessage = struct(n0, _PRNOM, 0, [_RNOI, _NC], [0, 1]);
export var PurchaseReservedNodeOfferingResult = struct(n0, _PRNOR, 0, [_RNe], [[() => ReservedNode, 0]]);
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
export var ReservedNodeOfferingNotFoundFault = error(
  n0,
  _RNONFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodeOfferingNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedNodeOfferingNotFoundFault
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
export var PurchaseReservedNodeOffering = op(
  n0,
  _PRNO,
  0,
  () => PurchaseReservedNodeOfferingMessage,
  () => PurchaseReservedNodeOfferingResult
);
