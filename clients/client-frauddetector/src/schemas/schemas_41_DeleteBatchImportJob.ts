// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBIJ, _DBIJR, _DBIJRe, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBatchImportJobRequest = struct(n0, _DBIJR, 0, [_jI], [0]);
export var DeleteBatchImportJobResult = struct(n0, _DBIJRe, 0, [], []);
export var DeleteBatchImportJob = op(
  n0,
  _DBIJ,
  0,
  () => DeleteBatchImportJobRequest,
  () => DeleteBatchImportJobResult
);
