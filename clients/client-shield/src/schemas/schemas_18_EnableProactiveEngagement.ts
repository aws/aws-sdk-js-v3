// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EPE, _EPER, _EPERn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableProactiveEngagementRequest = struct(n0, _EPER, 0, [], []);
export var EnableProactiveEngagementResponse = struct(n0, _EPERn, 0, [], []);
export var EnableProactiveEngagement = op(
  n0,
  _EPE,
  0,
  () => EnableProactiveEngagementRequest,
  () => EnableProactiveEngagementResponse
);
