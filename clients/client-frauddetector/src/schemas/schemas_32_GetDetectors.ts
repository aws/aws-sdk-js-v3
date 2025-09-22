// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _D, _d, _de, _dI, _DL, _eTN, _GD, _GDR, _GDRe, _lUT, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Detector = struct(n0, _D, 0, [_dI, _d, _eTN, _lUT, _cT, _a], [0, 0, 0, 0, 0, 0]);
export var GetDetectorsRequest = struct(n0, _GDR, 0, [_dI, _nT, _mR], [0, 0, 1]);
export var GetDetectorsResult = struct(n0, _GDRe, 0, [_de, _nT], [() => DetectorList, 0]);
export var DetectorList = list(n0, _DL, 0, () => Detector);
export var GetDetectors = op(
  n0,
  _GD,
  0,
  () => GetDetectorsRequest,
  () => GetDetectorsResult
);
