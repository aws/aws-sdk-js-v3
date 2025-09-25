// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CPGF, _CV, _CVL, _CVl, _CVM, _D, _DCV, _DCVM, _M, _MR, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterVersion = struct(n0, _CV, 0, [_CV, _CPGF, _D], [0, 0, 0]);
export var ClusterVersionsMessage = struct(n0, _CVM, 0, [_M, _CVl], [0, [() => ClusterVersionList, 0]]);
export var DescribeClusterVersionsMessage = struct(n0, _DCVM, 0, [_CV, _CPGF, _MR, _M], [0, 0, 1, 0]);
export var ClusterVersionList = list(n0, _CVL, 0, [
  () => ClusterVersion,
  {
    [_xN]: _CV,
  },
]);
export var DescribeClusterVersions = op(
  n0,
  _DCV,
  0,
  () => DescribeClusterVersionsMessage,
  () => ClusterVersionsMessage
);
