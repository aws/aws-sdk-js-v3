// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CI, _CSa, _CSI, _CSIa, _CSIL, _CSO, _Re, _SCO, _SI, _SIt, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelStepsInfo = struct(n0, _CSI, 0, [_SIt, _St, _Re], [0, 0, 0]);
export var CancelStepsInput = struct(n0, _CSIa, 0, [_CI, _SI, _SCO], [0, 64 | 0, 0]);
export var CancelStepsOutput = struct(n0, _CSO, 0, [_CSIL], [() => CancelStepsInfoList]);
export var CancelStepsInfoList = list(n0, _CSIL, 0, () => CancelStepsInfo);
export var CancelSteps = op(
  n0,
  _CSa,
  0,
  () => CancelStepsInput,
  () => CancelStepsOutput
);
