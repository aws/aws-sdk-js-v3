// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DRPe, _DRPIe, _DRPOe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResponsePlanInput = struct(n0, _DRPIe, 0, [_a], [0]);
export var DeleteResponsePlanOutput = struct(n0, _DRPOe, 0, [], []);
export var DeleteResponsePlan = op(
  n0,
  _DRPe,
  {
    [_h]: ["POST", "/deleteResponsePlan", 204],
  },
  () => DeleteResponsePlanInput,
  () => DeleteResponsePlanOutput
);
