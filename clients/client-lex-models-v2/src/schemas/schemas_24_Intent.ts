// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BIIS,
  _bIIS,
  _BIISB,
  _BIISL,
  _de,
  _h,
  _IC,
  _ICL,
  _iS,
  _LBII,
  _LBIIR,
  _LBIIRi,
  _lI,
  _mRax,
  _n,
  _nTe,
  _OCL,
  _OCu,
  _or,
  _sBo,
  _tTL,
  _tTLIS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BuiltInIntentSortBy = struct(n0, _BIISB, 0, [_a, _or], [0, 0]);
export var BuiltInIntentSummary = struct(n0, _BIIS, 0, [_iS, _de], [0, 0]);
export var InputContext = struct(n0, _IC, 0, [_n], [0]);
export var ListBuiltInIntentsRequest = struct(
  n0,
  _LBIIR,
  0,
  [_lI, _sBo, _mRax, _nTe],
  [[0, 1], () => BuiltInIntentSortBy, 1, 0]
);
export var ListBuiltInIntentsResponse = struct(
  n0,
  _LBIIRi,
  0,
  [_bIIS, _nTe, _lI],
  [() => BuiltInIntentSummaryList, 0, 0]
);
export var OutputContext = struct(n0, _OCu, 0, [_n, _tTLIS, _tTL], [0, 1, 1]);
export var BuiltInIntentSummaryList = list(n0, _BIISL, 0, () => BuiltInIntentSummary);
export var InputContextsList = list(n0, _ICL, 0, () => InputContext);
export var OutputContextsList = list(n0, _OCL, 0, () => OutputContext);
export var ListBuiltInIntents = op(
  n0,
  _LBII,
  {
    [_h]: ["POST", "/builtins/locales/{localeId}/intents", 200],
  },
  () => ListBuiltInIntentsRequest,
  () => ListBuiltInIntentsResponse
);
