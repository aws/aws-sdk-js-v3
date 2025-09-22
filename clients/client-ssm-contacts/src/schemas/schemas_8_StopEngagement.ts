// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _Rea, _SERto, _SERtop, _SEt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEngagementRequest = struct(n0, _SERto, 0, [_EI, _Rea], [0, 0]);
export var StopEngagementResult = struct(n0, _SERtop, 0, [], []);
export var StopEngagement = op(
  n0,
  _SEt,
  0,
  () => StopEngagementRequest,
  () => StopEngagementResult
);
