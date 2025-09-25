// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBE, _DBER, _DBERe, _ide, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBillEstimateRequest = struct(n0, _DBER, 0, [_ide], [0]);
export var DeleteBillEstimateResponse = struct(n0, _DBERe, 0, [], []);
export var DeleteBillEstimate = op(
  n0,
  _DBE,
  2,
  () => DeleteBillEstimateRequest,
  () => DeleteBillEstimateResponse
);
