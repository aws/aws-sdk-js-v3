// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cRT,
  _DWEJ,
  _DWEJR,
  _DWEJRe,
  _fC,
  _fR,
  _h,
  _iR,
  _jo,
  _OL,
  _oL,
  _s,
  _sB,
  _sP,
  _t,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorldExportJobRequest = struct(n0, _DWEJR, 0, [_jo], [0]);
export var DescribeWorldExportJobResponse = struct(
  n0,
  _DWEJRe,
  0,
  [_a, _s, _cA, _fC, _fR, _cRT, _w, _oL, _iR, _t],
  [0, 0, 4, 0, 0, 0, 64 | 0, () => OutputLocation, 0, 128 | 0]
);
export var OutputLocation = struct(n0, _OL, 0, [_sB, _sP], [0, 0]);
export var DescribeWorldExportJob = op(
  n0,
  _DWEJ,
  {
    [_h]: ["POST", "/describeWorldExportJob", 200],
  },
  () => DescribeWorldExportJobRequest,
  () => DescribeWorldExportJobResponse
);
