// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _cDT, _de, _DRe, _DRRe, _DRRes, _fTA, _lUDT, _n, _R, _r, _rAe, _rT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRecipeRequest = struct(n0, _DRRe, 0, [_rAe], [0]);
export var DescribeRecipeResponse = struct(n0, _DRRes, 0, [_r], [() => Recipe]);
export var Recipe = struct(n0, _R, 0, [_n, _rAe, _aA, _fTA, _s, _de, _cDT, _rT, _lUDT], [0, 0, 0, 0, 0, 0, 4, 0, 4]);
export var DescribeRecipe = op(
  n0,
  _DRe,
  2,
  () => DescribeRecipeRequest,
  () => DescribeRecipeResponse
);
