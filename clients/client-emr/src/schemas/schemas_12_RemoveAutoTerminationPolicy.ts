// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _RATP, _RATPI, _RATPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveAutoTerminationPolicyInput = struct(n0, _RATPI, 0, [_CI], [0]);
export var RemoveAutoTerminationPolicyOutput = struct(n0, _RATPO, 0, [], []);
export var RemoveAutoTerminationPolicy = op(
  n0,
  _RATP,
  0,
  () => RemoveAutoTerminationPolicyInput,
  () => RemoveAutoTerminationPolicyOutput
);
