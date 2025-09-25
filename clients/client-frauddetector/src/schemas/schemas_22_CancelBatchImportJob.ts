// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CBIJ, _CBIJR, _CBIJRa, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelBatchImportJobRequest = struct(n0, _CBIJR, 0, [_jI], [0]);
export var CancelBatchImportJobResult = struct(n0, _CBIJRa, 0, [], []);
export var CancelBatchImportJob = op(
  n0,
  _CBIJ,
  0,
  () => CancelBatchImportJobRequest,
  () => CancelBatchImportJobResult
);
