// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _aV, _DAVRRS, _DAVRRSR, _DAVRRSRe, _eM, _h, _RAVR, _RAVRR, _RAVRRe, _rIeso, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAppVersionResourcesResolutionStatusRequest = struct(n0, _DAVRRSR, 0, [_aA, _aV, _rIeso], [0, 0, 0]);
export var DescribeAppVersionResourcesResolutionStatusResponse = struct(
  n0,
  _DAVRRSRe,
  0,
  [_aA, _aV, _rIeso, _st, _eM],
  [0, 0, 0, 0, 0]
);
export var ResolveAppVersionResourcesRequest = struct(n0, _RAVRR, 0, [_aA, _aV], [0, 0]);
export var ResolveAppVersionResourcesResponse = struct(n0, _RAVRRe, 0, [_aA, _aV, _rIeso, _st], [0, 0, 0, 0]);
export var DescribeAppVersionResourcesResolutionStatus = op(
  n0,
  _DAVRRS,
  {
    [_h]: ["POST", "/describe-app-version-resources-resolution-status", 200],
  },
  () => DescribeAppVersionResourcesResolutionStatusRequest,
  () => DescribeAppVersionResourcesResolutionStatusResponse
);
export var ResolveAppVersionResources = op(
  n0,
  _RAVR,
  {
    [_h]: ["POST", "/resolve-app-version-resources", 200],
  },
  () => ResolveAppVersionResourcesRequest,
  () => ResolveAppVersionResourcesResponse
);
