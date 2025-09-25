// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _cA, _DW, _DWR, _DWRe, _gJ, _GWTB, _GWTBR, _GWTBRe, _h, _t, _tB, _te, _wDB, _wo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorldRequest = struct(n0, _DWR, 0, [_wo], [0]);
export var DescribeWorldResponse = struct(n0, _DWRe, 0, [_a, _gJ, _te, _cA, _t, _wDB], [0, 0, 0, 4, 128 | 0, 0]);
export var GetWorldTemplateBodyRequest = struct(n0, _GWTBR, 0, [_te, _gJ], [0, 0]);
export var GetWorldTemplateBodyResponse = struct(n0, _GWTBRe, 0, [_tB], [0]);
export var DescribeWorld = op(
  n0,
  _DW,
  {
    [_h]: ["POST", "/describeWorld", 200],
  },
  () => DescribeWorldRequest,
  () => DescribeWorldResponse
);
export var GetWorldTemplateBody = op(
  n0,
  _GWTB,
  {
    [_h]: ["POST", "/getWorldTemplateBody", 200],
  },
  () => GetWorldTemplateBodyRequest,
  () => GetWorldTemplateBodyResponse
);
