// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LockedSubscriptionException as __LockedSubscriptionException } from "../models/index";
import { _c, _DS, _DSR, _DSRe, _e, _LSE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSubscriptionRequest = struct(n0, _DSR, 0, [], []);
export var DeleteSubscriptionResponse = struct(n0, _DSRe, 0, [], []);
export var LockedSubscriptionException = error(
  n0,
  _LSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LockedSubscriptionException
);
export var DeleteSubscription = op(
  n0,
  _DS,
  0,
  () => DeleteSubscriptionRequest,
  () => DeleteSubscriptionResponse
);
