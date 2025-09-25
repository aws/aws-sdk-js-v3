// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _d, _GL, _GLR, _GLRe, _L, _la, _lL, _lUT, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLabelsRequest = struct(n0, _GLR, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetLabelsResult = struct(n0, _GLRe, 0, [_la, _nT], [() => labelList, 0]);
export var Label = struct(n0, _L, 0, [_n, _d, _lUT, _cT, _a], [0, 0, 0, 0, 0]);
export var labelList = list(n0, _lL, 0, () => Label);
export var GetLabels = op(
  n0,
  _GL,
  0,
  () => GetLabelsRequest,
  () => GetLabelsResult
);
