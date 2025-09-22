// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CQI, _DCQ, _DCQR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteComputeQuotaRequest = struct(n0, _DCQR, 0, [_CQI], [0]);
export var DeleteComputeQuota = op(
  n0,
  _DCQ,
  0,
  () => DeleteComputeQuotaRequest,
  () => Unit
);
