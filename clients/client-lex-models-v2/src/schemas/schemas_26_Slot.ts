// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BISTS,
  _bISTS,
  _BISTSB,
  _BISTSL,
  _de,
  _h,
  _LBIST,
  _LBISTR,
  _LBISTRi,
  _lI,
  _mRax,
  _nTe,
  _or,
  _sBo,
  _sTS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BuiltInSlotTypeSortBy = struct(n0, _BISTSB, 0, [_a, _or], [0, 0]);
export var BuiltInSlotTypeSummary = struct(n0, _BISTS, 0, [_sTS, _de], [0, 0]);
export var ListBuiltInSlotTypesRequest = struct(
  n0,
  _LBISTR,
  0,
  [_lI, _sBo, _mRax, _nTe],
  [[0, 1], () => BuiltInSlotTypeSortBy, 1, 0]
);
export var ListBuiltInSlotTypesResponse = struct(
  n0,
  _LBISTRi,
  0,
  [_bISTS, _nTe, _lI],
  [() => BuiltInSlotTypeSummaryList, 0, 0]
);
export var BuiltInSlotTypeSummaryList = list(n0, _BISTSL, 0, () => BuiltInSlotTypeSummary);
export var ListBuiltInSlotTypes = op(
  n0,
  _LBIST,
  {
    [_h]: ["POST", "/builtins/locales/{localeId}/slottypes", 200],
  },
  () => ListBuiltInSlotTypesRequest,
  () => ListBuiltInSlotTypesResponse
);
