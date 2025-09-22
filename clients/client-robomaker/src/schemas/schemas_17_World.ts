// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cRT,
  _DWTe,
  _DWTRes,
  _DWTResc,
  _h,
  _lUA,
  _n,
  _sB,
  _sKe,
  _t,
  _tB,
  _te,
  _TL,
  _tL,
  _UWT,
  _UWTR,
  _UWTRp,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorldTemplateRequest = struct(n0, _DWTRes, 0, [_te], [0]);
export var DescribeWorldTemplateResponse = struct(
  n0,
  _DWTResc,
  0,
  [_a, _cRT, _n, _cA, _lUA, _t, _v],
  [0, 0, 0, 4, 4, 128 | 0, 0]
);
export var TemplateLocation = struct(n0, _TL, 0, [_sB, _sKe], [0, 0]);
export var UpdateWorldTemplateRequest = struct(n0, _UWTR, 0, [_te, _n, _tB, _tL], [0, 0, 0, () => TemplateLocation]);
export var UpdateWorldTemplateResponse = struct(n0, _UWTRp, 0, [_a, _n, _cA, _lUA], [0, 0, 4, 4]);
export var DescribeWorldTemplate = op(
  n0,
  _DWTe,
  {
    [_h]: ["POST", "/describeWorldTemplate", 200],
  },
  () => DescribeWorldTemplateRequest,
  () => DescribeWorldTemplateResponse
);
export var UpdateWorldTemplate = op(
  n0,
  _UWT,
  {
    [_h]: ["POST", "/updateWorldTemplate", 200],
  },
  () => UpdateWorldTemplateRequest,
  () => UpdateWorldTemplateResponse
);
