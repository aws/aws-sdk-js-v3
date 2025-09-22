// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWB, _DWBR, _DWBRe, _R, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkerBlockRequest = struct(n0, _DWBR, 0, [_WI, _R], [0, 0]);
export var DeleteWorkerBlockResponse = struct(n0, _DWBRe, 0, [], []);
export var DeleteWorkerBlock = op(
  n0,
  _DWB,
  2,
  () => DeleteWorkerBlockRequest,
  () => DeleteWorkerBlockResponse
);
