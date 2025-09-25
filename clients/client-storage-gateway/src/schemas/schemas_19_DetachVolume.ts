// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVe, _DVIe, _DVOe, _FDo, _VARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachVolumeInput = struct(n0, _DVIe, 0, [_VARN, _FDo], [0, 2]);
export var DetachVolumeOutput = struct(n0, _DVOe, 0, [_VARN], [0]);
export var DetachVolume = op(
  n0,
  _DVe,
  0,
  () => DetachVolumeInput,
  () => DetachVolumeOutput
);
