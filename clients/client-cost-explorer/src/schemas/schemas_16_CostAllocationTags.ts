// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CATS,
  _CATSE,
  _CATSL,
  _Cod,
  _Er,
  _M,
  _St,
  _TK,
  _UCATS,
  _UCATSE,
  _UCATSEp,
  _UCATSR,
  _UCATSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CostAllocationTagStatusEntry = struct(n0, _CATSE, 0, [_TK, _St], [0, 0]);
export var UpdateCostAllocationTagsStatusError = struct(n0, _UCATSE, 0, [_TK, _Cod, _M], [0, 0, 0]);
export var UpdateCostAllocationTagsStatusRequest = struct(n0, _UCATSR, 0, [_CATS], [() => CostAllocationTagStatusList]);
export var UpdateCostAllocationTagsStatusResponse = struct(
  n0,
  _UCATSRp,
  0,
  [_Er],
  [() => UpdateCostAllocationTagsStatusErrors]
);
export var CostAllocationTagStatusList = list(n0, _CATSL, 0, () => CostAllocationTagStatusEntry);
export var UpdateCostAllocationTagsStatusErrors = list(n0, _UCATSEp, 0, () => UpdateCostAllocationTagsStatusError);
export var UpdateCostAllocationTagsStatus = op(
  n0,
  _UCATS,
  0,
  () => UpdateCostAllocationTagsStatusRequest,
  () => UpdateCostAllocationTagsStatusResponse
);
