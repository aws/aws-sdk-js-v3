// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AR, _US, _USR, _USRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSubscriptionRequest = struct(n0, _USR, 0, [_AR], [0]);
export var UpdateSubscriptionResponse = struct(n0, _USRp, 0, [], []);
export var UpdateSubscription = op(
  n0,
  _US,
  0,
  () => UpdateSubscriptionRequest,
  () => UpdateSubscriptionResponse
);
