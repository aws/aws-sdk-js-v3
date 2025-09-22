// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dI, _DSR, _DSRI, _ht, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSubscriptionRequestInput = struct(
  n0,
  _DSRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSubscriptionRequest = op(
  n0,
  _DSR,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}", 204],
  },
  () => DeleteSubscriptionRequestInput,
  () => Unit
);
