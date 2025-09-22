// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aLSI, _DALS, _DALSR, _DALSRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessLogSubscriptionRequest = struct(n0, _DALSR, 0, [_aLSI], [[0, 1]]);
export var DeleteAccessLogSubscriptionResponse = struct(n0, _DALSRe, 0, [], []);
export var DeleteAccessLogSubscription = op(
  n0,
  _DALS,
  {
    [_h]: ["DELETE", "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}", 204],
  },
  () => DeleteAccessLogSubscriptionRequest,
  () => DeleteAccessLogSubscriptionResponse
);
