// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDLES, _DDLESR, _DDLESRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataLakeExceptionSubscriptionRequest = struct(n0, _DDLESR, 0, [], []);
export var DeleteDataLakeExceptionSubscriptionResponse = struct(n0, _DDLESRe, 0, [], []);
export var DeleteDataLakeExceptionSubscription = op(
  n0,
  _DDLES,
  {
    [_h]: ["DELETE", "/v1/datalake/exceptions/subscription", 200],
  },
  () => DeleteDataLakeExceptionSubscriptionRequest,
  () => DeleteDataLakeExceptionSubscriptionResponse
);
