// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTr, _DRO, _DROR, _DRORe, _ET, _GRO, _GROR, _GRORe, _NCI, _RA, _RIo, _ROI, _ST, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRotationOverrideRequest = struct(n0, _DROR, 0, [_RIo, _ROI], [0, 0]);
export var DeleteRotationOverrideResult = struct(n0, _DRORe, 0, [], []);
export var GetRotationOverrideRequest = struct(n0, _GROR, 0, [_RIo, _ROI], [0, 0]);
export var GetRotationOverrideResult = struct(
  n0,
  _GRORe,
  0,
  [_ROI, _RA, _NCI, _ST, _ET, _CTr],
  [0, 0, 64 | 0, 4, 4, 4]
);
export var DeleteRotationOverride = op(
  n0,
  _DRO,
  0,
  () => DeleteRotationOverrideRequest,
  () => DeleteRotationOverrideResult
);
export var GetRotationOverride = op(
  n0,
  _GRO,
  0,
  () => GetRotationOverrideRequest,
  () => GetRotationOverrideResult
);
