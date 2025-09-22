// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _RMSP, _RMSPI, _RMSPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveManagedScalingPolicyInput = struct(n0, _RMSPI, 0, [_CI], [0]);
export var RemoveManagedScalingPolicyOutput = struct(n0, _RMSPO, 0, [], []);
export var RemoveManagedScalingPolicy = op(
  n0,
  _RMSP,
  0,
  () => RemoveManagedScalingPolicyInput,
  () => RemoveManagedScalingPolicyOutput
);
