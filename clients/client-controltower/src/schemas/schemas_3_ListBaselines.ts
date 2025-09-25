// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _B, _b, _BS, _d, _h, _LB, _LBI, _LBO, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BaselineSummary = struct(n0, _BS, 0, [_a, _n, _d], [0, 0, 0]);
export var ListBaselinesInput = struct(n0, _LBI, 0, [_nT, _mR], [0, 1]);
export var ListBaselinesOutput = struct(n0, _LBO, 0, [_b, _nT], [() => Baselines, 0]);
export var Baselines = list(n0, _B, 0, () => BaselineSummary);
export var ListBaselines = op(
  n0,
  _LB,
  {
    [_h]: ["POST", "/list-baselines", 200],
  },
  () => ListBaselinesInput,
  () => ListBaselinesOutput
);
