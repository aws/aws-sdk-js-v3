// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aDA, _aIn, _b, _DLAD, _DLADR, _pI, _SP, _sPu, _sTu, _sUu, _UA, _UAR, _v, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLogAnomalyDetectorRequest = struct(n0, _DLADR, 0, [_aDA], [0]);
export var SuppressionPeriod = struct(n0, _SP, 0, [_v, _sUu], [1, 0]);
export var UpdateAnomalyRequest = struct(
  n0,
  _UAR,
  0,
  [_aIn, _pI, _aDA, _sTu, _sPu, _b],
  [0, 0, 0, 0, () => SuppressionPeriod, 2]
);
export var LogGroupArnList = 64 | 0;

export var DeleteLogAnomalyDetector = op(
  n0,
  _DLAD,
  0,
  () => DeleteLogAnomalyDetectorRequest,
  () => Unit
);
export var UpdateAnomaly = op(
  n0,
  _UA,
  0,
  () => UpdateAnomalyRequest,
  () => Unit
);
