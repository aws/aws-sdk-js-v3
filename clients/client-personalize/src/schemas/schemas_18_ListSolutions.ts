// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _dGA,
  _LSi,
  _LSRis,
  _LSRist,
  _lUDT,
  _mRa,
  _n,
  _nT,
  _rAe,
  _s,
  _sAo,
  _So,
  _sol,
  _SS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSolutionsRequest = struct(n0, _LSRis, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListSolutionsResponse = struct(n0, _LSRist, 0, [_sol, _nT], [() => Solutions, 0]);
export var SolutionSummary = struct(n0, _SS, 0, [_n, _sAo, _s, _cDT, _lUDT, _rAe], [0, 0, 0, 4, 4, 0]);
export var Solutions = list(n0, _So, 0, () => SolutionSummary);
export var ListSolutions = op(
  n0,
  _LSi,
  2,
  () => ListSolutionsRequest,
  () => ListSolutionsResponse
);
