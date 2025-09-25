// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DV, _DVI, _DVO, _VARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVolumeInput = struct(n0, _DVI, 0, [_VARN], [0]);
export var DeleteVolumeOutput = struct(n0, _DVO, 0, [_VARN], [0]);
export var DeleteVolume = op(
  n0,
  _DV,
  0,
  () => DeleteVolumeInput,
  () => DeleteVolumeOutput
);
