// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _CSJB, _CSJBR, _CSJBRa, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelSimulationJobBatchRequest = struct(n0, _CSJBR, 0, [_b], [0]);
export var CancelSimulationJobBatchResponse = struct(n0, _CSJBRa, 0, [], []);
export var CancelSimulationJobBatch = op(
  n0,
  _CSJB,
  {
    [_h]: ["POST", "/cancelSimulationJobBatch", 200],
  },
  () => CancelSimulationJobBatchRequest,
  () => CancelSimulationJobBatchResponse
);
