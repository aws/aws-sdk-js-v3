// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DURS, _DURSR, _DURSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUsageReportSubscriptionRequest = struct(n0, _DURSR, 0, [], []);
export var DeleteUsageReportSubscriptionResult = struct(n0, _DURSRe, 0, [], []);
export var DeleteUsageReportSubscription = op(
  n0,
  _DURS,
  0,
  () => DeleteUsageReportSubscriptionRequest,
  () => DeleteUsageReportSubscriptionResult
);
