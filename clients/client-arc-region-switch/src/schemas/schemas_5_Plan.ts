// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IllegalStateException as __IllegalStateException } from "../models/index";
import { _a, _cl, _DP, _DPR, _DPRe, _e, _hE, _ISE, _me, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePlanRequest = struct(n0, _DPR, 0, [_a], [0]);
export var DeletePlanResponse = struct(n0, _DPRe, 0, [], []);
export var IllegalStateException = error(
  n0,
  _ISE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __IllegalStateException
);
export var DeletePlan = op(
  n0,
  _DP,
  2,
  () => DeletePlanRequest,
  () => DeletePlanResponse
);
