// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DD, _Des, _DRV, _DRVR, _DRVRe, _h, _MR, _NT, _RD, _RV, _RVL, _RVu, _VN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRuntimeVersionsRequest = struct(n0, _DRVR, 0, [_NT, _MR], [0, 1]);
export var DescribeRuntimeVersionsResponse = struct(n0, _DRVRe, 0, [_RVu, _NT], [() => RuntimeVersionList, 0]);
export var RuntimeVersion = struct(n0, _RV, 0, [_VN, _Des, _RD, _DD], [0, 0, 4, 4]);
export var RuntimeVersionList = list(n0, _RVL, 0, () => RuntimeVersion);
export var DescribeRuntimeVersions = op(
  n0,
  _DRV,
  {
    [_h]: ["POST", "/runtime-versions", 200],
  },
  () => DescribeRuntimeVersionsRequest,
  () => DescribeRuntimeVersionsResponse
);
