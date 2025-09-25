// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSe, _DSR, _DSRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStageRequest = struct(n0, _DSR, 0, [_a], [0]);
export var DeleteStageResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteStage = op(
  n0,
  _DSe,
  {
    [_ht]: ["POST", "/DeleteStage", 200],
  },
  () => DeleteStageRequest,
  () => DeleteStageResponse
);
