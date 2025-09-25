// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cA, _DP, _DPI, _DPO, _pI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeactivatePipelineInput = struct(n0, _DPI, 0, [_pI, _cA], [0, 2]);
export var DeactivatePipelineOutput = struct(n0, _DPO, 0, [], []);
export var DeactivatePipeline = op(
  n0,
  _DP,
  0,
  () => DeactivatePipelineInput,
  () => DeactivatePipelineOutput
);
