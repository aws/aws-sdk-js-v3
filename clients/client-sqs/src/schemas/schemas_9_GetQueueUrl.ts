// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GQU, _GQUR, _GQURe, _QN, _QOAWSAI, _QU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueueUrlRequest = struct(n0, _GQUR, 0, [_QN, _QOAWSAI], [0, 0]);
export var GetQueueUrlResult = struct(n0, _GQURe, 0, [_QU], [0]);
export var GetQueueUrl = op(
  n0,
  _GQU,
  0,
  () => GetQueueUrlRequest,
  () => GetQueueUrlResult
);
