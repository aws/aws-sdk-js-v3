// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSP, _DSPI, _FI, _N, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScalingPolicyInput = struct(n0, _DSPI, 0, [_N, _FI], [0, 0]);
export var DeleteScalingPolicy = op(
  n0,
  _DSP,
  0,
  () => DeleteScalingPolicyInput,
  () => Unit
);
