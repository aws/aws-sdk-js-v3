// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ISP, _RAL, _SILTR, _SILTRR, _SILTRRt, _TIr, _TRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartImportLabelsTaskRunRequest = struct(n0, _SILTRR, 0, [_TIr, _ISP, _RAL], [0, 0, 2]);
export var StartImportLabelsTaskRunResponse = struct(n0, _SILTRRt, 0, [_TRI], [0]);
export var StartImportLabelsTaskRun = op(
  n0,
  _SILTR,
  0,
  () => StartImportLabelsTaskRunRequest,
  () => StartImportLabelsTaskRunResponse
);
