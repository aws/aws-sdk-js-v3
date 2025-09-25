// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _IGIn, _RASP, _RASPI, _RASPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveAutoScalingPolicyInput = struct(n0, _RASPI, 0, [_CI, _IGIn], [0, 0]);
export var RemoveAutoScalingPolicyOutput = struct(n0, _RASPO, 0, [], []);
export var RemoveAutoScalingPolicy = op(
  n0,
  _RASP,
  0,
  () => RemoveAutoScalingPolicyInput,
  () => RemoveAutoScalingPolicyOutput
);
