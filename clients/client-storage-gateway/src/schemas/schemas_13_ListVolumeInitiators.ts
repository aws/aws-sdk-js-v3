// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _I, _LVII, _LVIi, _LVIO, _VARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListVolumeInitiatorsInput = struct(n0, _LVII, 0, [_VARN], [0]);
export var ListVolumeInitiatorsOutput = struct(n0, _LVIO, 0, [_I], [64 | 0]);
export var Initiators = 64 | 0;

export var ListVolumeInitiators = op(
  n0,
  _LVIi,
  0,
  () => ListVolumeInitiatorsInput,
  () => ListVolumeInitiatorsOutput
);
