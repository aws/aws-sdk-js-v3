// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { TransactionCanceledException as __TransactionCanceledException } from "../models/index";
import { _C, _c, _CCM, _CRa, _CRan, _CRL, _e, _I, _IR, _IRL, _M, _TCE, ConsumedCapacity, n0 } from "./schemas_0";
import { AttributeMap } from "./schemas_30_Item";

/* eslint no-var: 0 */

export var CancellationReason = struct(n0, _CRa, 0, [_I, _C, _M], [() => AttributeMap, 0, 0]);
export var ItemResponse = struct(n0, _IR, 0, [_I], [() => AttributeMap]);
export var TransactionCanceledException = error(
  n0,
  _TCE,
  {
    [_e]: _c,
  },
  [_M, _CRan],
  [0, () => CancellationReasonList],

  __TransactionCanceledException
);
export var CancellationReasonList = list(n0, _CRL, 0, () => CancellationReason);
export var ConsumedCapacityMultiple = list(n0, _CCM, 0, () => ConsumedCapacity);
export var ItemResponseList = list(n0, _IRL, 0, () => ItemResponse);
