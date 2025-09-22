// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEE, _DEER, _EEA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExplainabilityExportRequest = struct(n0, _DEER, 0, [_EEA], [0]);
export var DeleteExplainabilityExport = op(
  n0,
  _DEE,
  2,
  () => DeleteExplainabilityExportRequest,
  () => Unit
);
