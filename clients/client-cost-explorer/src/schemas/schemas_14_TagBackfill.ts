// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { BackfillLimitExceededException as __BackfillLimitExceededException } from "../models/index";
import {
  _BF,
  _BLEE,
  _BR,
  _BRa,
  _BS,
  _c,
  _CA,
  _CATBR,
  _CATBRL,
  _e,
  _hE,
  _LCATBH,
  _LCATBHR,
  _LCATBHRi,
  _LUA,
  _M,
  _MR,
  _NTe,
  _RA,
  _SCATB,
  _SCATBR,
  _SCATBRt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackfillLimitExceededException = error(
  n0,
  _BLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BackfillLimitExceededException
);
export var CostAllocationTagBackfillRequest = struct(n0, _CATBR, 0, [_BF, _RA, _CA, _BS, _LUA], [0, 0, 0, 0, 0]);
export var ListCostAllocationTagBackfillHistoryRequest = struct(n0, _LCATBHR, 0, [_NTe, _MR], [0, 1]);
export var ListCostAllocationTagBackfillHistoryResponse = struct(
  n0,
  _LCATBHRi,
  0,
  [_BR, _NTe],
  [() => CostAllocationTagBackfillRequestList, 0]
);
export var StartCostAllocationTagBackfillRequest = struct(n0, _SCATBR, 0, [_BF], [0]);
export var StartCostAllocationTagBackfillResponse = struct(
  n0,
  _SCATBRt,
  0,
  [_BRa],
  [() => CostAllocationTagBackfillRequest]
);
export var CostAllocationTagBackfillRequestList = list(n0, _CATBRL, 0, () => CostAllocationTagBackfillRequest);
export var ListCostAllocationTagBackfillHistory = op(
  n0,
  _LCATBH,
  0,
  () => ListCostAllocationTagBackfillHistoryRequest,
  () => ListCostAllocationTagBackfillHistoryResponse
);
export var StartCostAllocationTagBackfill = op(
  n0,
  _SCATB,
  0,
  () => StartCostAllocationTagBackfillRequest,
  () => StartCostAllocationTagBackfillResponse
);
