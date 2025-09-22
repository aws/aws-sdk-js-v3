// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _d,
  _DDe,
  _DDRes,
  _DDResc,
  _dI,
  _dVI,
  _DVS,
  _dVS,
  _DVSL,
  _lUT,
  _mR,
  _nT,
  _s,
  _UDVS,
  _UDVSR,
  _UDVSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDetectorRequest = struct(n0, _DDRes, 0, [_dI, _nT, _mR], [0, 0, 1]);
export var DescribeDetectorResult = struct(
  n0,
  _DDResc,
  0,
  [_dI, _dVS, _nT, _a],
  [0, () => DetectorVersionSummaryList, 0, 0]
);
export var DetectorVersionSummary = struct(n0, _DVS, 0, [_dVI, _s, _d, _lUT], [0, 0, 0, 0]);
export var UpdateDetectorVersionStatusRequest = struct(n0, _UDVSR, 0, [_dI, _dVI, _s], [0, 0, 0]);
export var UpdateDetectorVersionStatusResult = struct(n0, _UDVSRp, 0, [], []);
export var DetectorVersionSummaryList = list(n0, _DVSL, 0, () => DetectorVersionSummary);
export var DescribeDetector = op(
  n0,
  _DDe,
  0,
  () => DescribeDetectorRequest,
  () => DescribeDetectorResult
);
export var UpdateDetectorVersionStatus = op(
  n0,
  _UDVS,
  0,
  () => UpdateDetectorVersionStatusRequest,
  () => UpdateDetectorVersionStatusResult
);
