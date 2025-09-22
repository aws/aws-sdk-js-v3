// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _d, _GO, _GOR, _GORe, _lUT, _mR, _n, _nT, _O, _o, _OL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOutcomesRequest = struct(n0, _GOR, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetOutcomesResult = struct(n0, _GORe, 0, [_o, _nT], [() => OutcomeList, 0]);
export var Outcome = struct(n0, _O, 0, [_n, _d, _lUT, _cT, _a], [0, 0, 0, 0, 0]);
export var OutcomeList = list(n0, _OL, 0, () => Outcome);
export var GetOutcomes = op(
  n0,
  _GO,
  0,
  () => GetOutcomesRequest,
  () => GetOutcomesResult
);
