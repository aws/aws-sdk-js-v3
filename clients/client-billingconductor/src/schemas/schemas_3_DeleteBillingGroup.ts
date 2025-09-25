// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _DBG, _DBGI, _DBGO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBillingGroupInput = struct(n0, _DBGI, 0, [_A], [0]);
export var DeleteBillingGroupOutput = struct(n0, _DBGO, 0, [_A], [0]);
export var DeleteBillingGroup = op(
  n0,
  _DBG,
  {
    [_h]: ["POST", "/delete-billing-group", 200],
  },
  () => DeleteBillingGroupInput,
  () => DeleteBillingGroupOutput
);
