// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPe, _DPIe, _pI, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Task";

/* eslint no-var: 0 */

export var DeletePipelineInput = struct(n0, _DPIe, 0, [_pI], [0]);
export var DeletePipeline = op(
  n0,
  _DPe,
  0,
  () => DeletePipelineInput,
  () => Unit
);
