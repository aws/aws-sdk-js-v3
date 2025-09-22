// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RBLT, _RBLTR, _RBLTRe, _TI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResumeBatchLoadTaskRequest = struct(n0, _RBLTR, 0, [_TI], [0]);
export var ResumeBatchLoadTaskResponse = struct(n0, _RBLTRe, 0, [], []);
export var ResumeBatchLoadTask = op(
  n0,
  _RBLT,
  0,
  () => ResumeBatchLoadTaskRequest,
  () => ResumeBatchLoadTaskResponse
);
