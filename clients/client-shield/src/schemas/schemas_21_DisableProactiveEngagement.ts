// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPE, _DPER, _DPERi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableProactiveEngagementRequest = struct(n0, _DPER, 0, [], []);
export var DisableProactiveEngagementResponse = struct(n0, _DPERi, 0, [], []);
export var DisableProactiveEngagement = op(
  n0,
  _DPE,
  0,
  () => DisableProactiveEngagementRequest,
  () => DisableProactiveEngagementResponse
);
