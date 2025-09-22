// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import { _c, _e, _h, _hE, _IC, _m, _PRIO, _PRIOR, _PRIORu, _RAEE, _RII, _RIOI, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PurchaseReservedInstanceOfferingRequest = struct(n0, _PRIOR, 0, [_RIOI, _RN, _IC], [0, 0, 1]);
export var PurchaseReservedInstanceOfferingResponse = struct(n0, _PRIORu, 0, [_RII, _RN], [0, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var PurchaseReservedInstanceOffering = op(
  n0,
  _PRIO,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/purchaseReservedInstanceOffering", 200],
  },
  () => PurchaseReservedInstanceOfferingRequest,
  () => PurchaseReservedInstanceOfferingResponse
);
