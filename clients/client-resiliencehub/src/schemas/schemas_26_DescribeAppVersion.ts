// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _aA, _aI, _AIM, _aV, _DAV, _DAVR, _DAVRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAppVersionRequest = struct(n0, _DAVR, 0, [_aA, _aV], [0, 0]);
export var DescribeAppVersionResponse = struct(n0, _DAVRe, 0, [_aA, _aV, _aI], [0, 0, map(n0, _AIM, 0, 0, 64 | 0)]);
export var DescribeAppVersion = op(
  n0,
  _DAV,
  {
    [_h]: ["POST", "/describe-app-version", 200],
  },
  () => DescribeAppVersionRequest,
  () => DescribeAppVersionResponse
);
