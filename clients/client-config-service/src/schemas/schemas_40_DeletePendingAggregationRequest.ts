// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPAR, _DPARR, _RAI, _RAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePendingAggregationRequestRequest = struct(n0, _DPARR, 0, [_RAI, _RAR], [0, 0]);
export var DeletePendingAggregationRequest = op(
  n0,
  _DPAR,
  0,
  () => DeletePendingAggregationRequestRequest,
  () => Unit
);
