// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _OSP, _SELTR, _SELTRR, _SELTRRt, _TIr, _TRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartExportLabelsTaskRunRequest = struct(n0, _SELTRR, 0, [_TIr, _OSP], [0, 0]);
export var StartExportLabelsTaskRunResponse = struct(n0, _SELTRRt, 0, [_TRI], [0]);
export var StartExportLabelsTaskRun = op(
  n0,
  _SELTR,
  0,
  () => StartExportLabelsTaskRunRequest,
  () => StartExportLabelsTaskRunResponse
);
