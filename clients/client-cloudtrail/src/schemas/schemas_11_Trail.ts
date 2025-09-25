// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CWLLGA,
  _CWLRA,
  _DTes,
  _DTRes,
  _DTResc,
  _HCES,
  _HIS,
  _HR,
  _IGSE,
  _IMRT,
  _IOT,
  _iST,
  _KKI,
  _LFVE,
  _N,
  _SBN,
  _SKP,
  _STARN,
  _STN,
  _TARN,
  _tL,
  _TLr,
  _tNL,
  _Tr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTrailsRequest = struct(n0, _DTRes, 0, [_tNL, _iST], [64 | 0, 2]);
export var DescribeTrailsResponse = struct(n0, _DTResc, 0, [_tL], [() => TrailList]);
export var Trail = struct(
  n0,
  _Tr,
  0,
  [_N, _SBN, _SKP, _STN, _STARN, _IGSE, _IMRT, _HR, _TARN, _LFVE, _CWLLGA, _CWLRA, _KKI, _HCES, _HIS, _IOT],
  [0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2]
);
export var TrailList = list(n0, _TLr, 0, () => Trail);
export var TrailNameList = 64 | 0;

export var DescribeTrails = op(
  n0,
  _DTes,
  2,
  () => DescribeTrailsRequest,
  () => DescribeTrailsResponse
);
