// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManySubscriptionsException as __TooManySubscriptionsException } from "../models/index";
import { _c, _CNS, _CNSR, _CNSRr, _E, _e, _EP, _h, _hE, _M, _OI, _Pro, _SI, _ST, _Su, _TMSE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNotificationSubscriptionRequest = struct(n0, _CNSR, 0, [_OI, _E, _Pro, _ST], [[0, 1], 0, 0, 0]);
export var CreateNotificationSubscriptionResponse = struct(n0, _CNSRr, 0, [_Su], [() => Subscription]);
export var Subscription = struct(n0, _Su, 0, [_SI, _EP, _Pro], [0, 0, 0]);
export var TooManySubscriptionsException = error(
  n0,
  _TMSE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManySubscriptionsException
);
export var CreateNotificationSubscription = op(
  n0,
  _CNS,
  {
    [_h]: ["POST", "/api/v1/organizations/{OrganizationId}/subscriptions", 200],
  },
  () => CreateNotificationSubscriptionRequest,
  () => CreateNotificationSubscriptionResponse
);
