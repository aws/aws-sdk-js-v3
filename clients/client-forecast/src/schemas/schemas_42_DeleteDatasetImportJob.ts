// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDIJ, _DDIJR, _DIJA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetImportJobRequest = struct(n0, _DDIJR, 0, [_DIJA], [0]);
export var DeleteDatasetImportJob = op(
  n0,
  _DDIJ,
  2,
  () => DeleteDatasetImportJobRequest,
  () => Unit
);
