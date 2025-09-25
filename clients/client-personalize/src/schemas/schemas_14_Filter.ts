// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _cDT,
  _CF,
  _CFR,
  _CFRr,
  _DFe,
  _DFRe,
  _DFRes,
  _dGA,
  _F,
  _f,
  _fA,
  _FE,
  _fE,
  _fR,
  _lUDT,
  _n,
  _s,
  _t,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FilterExpression = sim(n0, _FE, 0, 8);
export var CreateFilterRequest = struct(
  n0,
  _CFR,
  0,
  [_n, _dGA, _fE, _t],
  [0, 0, [() => FilterExpression, 0], [() => Tags, 0]]
);
export var CreateFilterResponse = struct(n0, _CFRr, 0, [_fA], [0]);
export var DescribeFilterRequest = struct(n0, _DFRe, 0, [_fA], [0]);
export var DescribeFilterResponse = struct(n0, _DFRes, 0, [_f], [[() => Filter, 0]]);
export var Filter = struct(
  n0,
  _F,
  0,
  [_n, _fA, _cDT, _lUDT, _dGA, _fR, _fE, _s],
  [0, 0, 4, 4, 0, 0, [() => FilterExpression, 0], 0]
);
export var CreateFilter = op(
  n0,
  _CF,
  0,
  () => CreateFilterRequest,
  () => CreateFilterResponse
);
export var DescribeFilter = op(
  n0,
  _DFe,
  2,
  () => DescribeFilterRequest,
  () => DescribeFilterResponse
);
