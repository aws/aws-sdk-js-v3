// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CWB, _CWBR, _CWBRr, _R, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWorkerBlockRequest = struct(n0, _CWBR, 0, [_WI, _R], [0, 0]);
export var CreateWorkerBlockResponse = struct(n0, _CWBRr, 0, [], []);
export var CreateWorkerBlock = op(
  n0,
  _CWB,
  0,
  () => CreateWorkerBlockRequest,
  () => CreateWorkerBlockResponse
);
