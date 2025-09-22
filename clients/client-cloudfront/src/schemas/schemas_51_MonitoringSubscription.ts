// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchMonitoringSubscription as __NoSuchMonitoringSubscription } from "../models/index";
import { _c, _DI, _DMS, _DMSR, _DMSRe, _e, _h, _hE, _M, _NSMS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMonitoringSubscriptionRequest = struct(n0, _DMSR, 0, [_DI], [[0, 1]]);
export var DeleteMonitoringSubscriptionResult = struct(n0, _DMSRe, 0, [], []);
export var NoSuchMonitoringSubscription = error(
  n0,
  _NSMS,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchMonitoringSubscription
);
export var DeleteMonitoringSubscription = op(
  n0,
  _DMS,
  {
    [_h]: ["DELETE", "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", 200],
  },
  () => DeleteMonitoringSubscriptionRequest,
  () => DeleteMonitoringSubscriptionResult
);
