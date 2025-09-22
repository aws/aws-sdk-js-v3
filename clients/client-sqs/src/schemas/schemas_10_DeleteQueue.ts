// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQ, _DQR, _QU, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var DeleteQueueRequest = struct(n0, _DQR, 0, [_QU], [0]);
export var DeleteQueue = op(
  n0,
  _DQ,
  0,
  () => DeleteQueueRequest,
  () => Unit
);
