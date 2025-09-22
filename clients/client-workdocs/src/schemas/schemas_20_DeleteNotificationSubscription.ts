// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNS, _DNSR, _h, _OI, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNotificationSubscriptionRequest = struct(
  n0,
  _DNSR,
  0,
  [_SI, _OI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteNotificationSubscription = op(
  n0,
  _DNS,
  {
    [_h]: ["DELETE", "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}", 200],
  },
  () => DeleteNotificationSubscriptionRequest,
  () => Unit
);
