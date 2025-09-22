// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DLS, _DLSR, _DLSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLogSubscriptionRequest = struct(n0, _DLSR, 0, [_DI], [0]);
export var DeleteLogSubscriptionResult = struct(n0, _DLSRe, 0, [], []);
export var DeleteLogSubscription = op(
  n0,
  _DLS,
  0,
  () => DeleteLogSubscriptionRequest,
  () => DeleteLogSubscriptionResult
);
