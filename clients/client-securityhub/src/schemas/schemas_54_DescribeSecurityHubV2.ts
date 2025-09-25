// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSHV, _DSHVR, _DSHVRe, _h, _HVA, _SAub, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSecurityHubV2Request = struct(n0, _DSHVR, 0, [], []);
export var DescribeSecurityHubV2Response = struct(n0, _DSHVRe, 0, [_HVA, _SAub], [0, 0]);
export var DescribeSecurityHubV2 = op(
  n0,
  _DSHV,
  {
    [_h]: ["GET", "/hubv2", 200],
  },
  () => DescribeSecurityHubV2Request,
  () => DescribeSecurityHubV2Response
);
