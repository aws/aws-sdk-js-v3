// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DRes,
  _DRRes,
  _DRResc,
  _h,
  _HAE,
  _LM,
  _RA,
  _RAe,
  _RI,
  _RR,
  _RRR,
  _RRRe,
  _UR,
  _URR,
  _URRp,
  _USLR,
  _WF,
  _WPA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeResourceRequest = struct(n0, _DRRes, 0, [_RAe], [0]);
export var DescribeResourceResponse = struct(n0, _DRResc, 0, [_RI], [() => ResourceInfo]);
export var RegisterResourceRequest = struct(n0, _RRR, 0, [_RAe, _USLR, _RA, _WF, _HAE, _WPA], [0, 2, 0, 2, 2, 2]);
export var RegisterResourceResponse = struct(n0, _RRRe, 0, [], []);
export var ResourceInfo = struct(n0, _RI, 0, [_RAe, _RA, _LM, _WF, _HAE, _WPA], [0, 0, 4, 2, 2, 2]);
export var UpdateResourceRequest = struct(n0, _URR, 0, [_RA, _RAe, _WF, _HAE], [0, 0, 2, 2]);
export var UpdateResourceResponse = struct(n0, _URRp, 0, [], []);
export var DescribeResource = op(
  n0,
  _DRes,
  {
    [_h]: ["POST", "/DescribeResource", 200],
  },
  () => DescribeResourceRequest,
  () => DescribeResourceResponse
);
export var RegisterResource = op(
  n0,
  _RR,
  {
    [_h]: ["POST", "/RegisterResource", 200],
  },
  () => RegisterResourceRequest,
  () => RegisterResourceResponse
);
export var UpdateResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UpdateResource", 200],
  },
  () => UpdateResourceRequest,
  () => UpdateResourceResponse
);
