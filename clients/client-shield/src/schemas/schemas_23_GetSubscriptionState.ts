// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSS, _GSSR, _GSSRe, _SS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSubscriptionStateRequest = struct(n0, _GSSR, 0, [], []);
export var GetSubscriptionStateResponse = struct(n0, _GSSRe, 0, [_SS], [0]);
export var GetSubscriptionState = op(
  n0,
  _GSS,
  0,
  () => GetSubscriptionStateRequest,
  () => GetSubscriptionStateResponse
);
