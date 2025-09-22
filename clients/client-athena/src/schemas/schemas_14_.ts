// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ADPUS, _ADPUSL, _ARI, _LADPUS, _LADPUSI, _LADPUSO, _MR, _NT, _SDPUS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationDPUSizes = struct(n0, _ADPUS, 0, [_ARI, _SDPUS], [0, 64 | 1]);
export var ListApplicationDPUSizesInput = struct(n0, _LADPUSI, 0, [_MR, _NT], [1, 0]);
export var ListApplicationDPUSizesOutput = struct(n0, _LADPUSO, 0, [_ADPUS, _NT], [() => ApplicationDPUSizesList, 0]);
export var ApplicationDPUSizesList = list(n0, _ADPUSL, 0, () => ApplicationDPUSizes);
export var SupportedDPUSizeList = 64 | 1;

export var ListApplicationDPUSizes = op(
  n0,
  _LADPUS,
  0,
  () => ListApplicationDPUSizesInput,
  () => ListApplicationDPUSizesOutput
);
