// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSD, _DSDI, _DSDO, _LRIo, _SDDI, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetectStackDriftInput = struct(n0, _DSDI, 0, [_SN, _LRIo], [0, 64 | 0]);
export var DetectStackDriftOutput = struct(n0, _DSDO, 0, [_SDDI], [0]);
export var LogicalResourceIds = 64 | 0;

export var DetectStackDrift = op(
  n0,
  _DSD,
  0,
  () => DetectStackDriftInput,
  () => DetectStackDriftOutput
);
