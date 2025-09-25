// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTelet, _DTRele, _DTRelet, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTriggerRequest = struct(n0, _DTRele, 0, [_N], [0]);
export var DeleteTriggerResponse = struct(n0, _DTRelet, 0, [_N], [0]);
export var DeleteTrigger = op(
  n0,
  _DTelet,
  0,
  () => DeleteTriggerRequest,
  () => DeleteTriggerResponse
);
