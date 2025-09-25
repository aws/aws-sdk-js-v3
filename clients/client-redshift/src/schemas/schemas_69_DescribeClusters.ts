// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _C, _CIl, _CL, _Cl, _CM, _DCe, _DCMe, _M, _MR, _TK, _TV, _xN, Cluster, n0, TagKeyList } from "./schemas_0";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ClustersMessage = struct(n0, _CM, 0, [_M, _Cl], [0, [() => ClusterList, 0]]);
export var DescribeClustersMessage = struct(
  n0,
  _DCMe,
  0,
  [_CIl, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var ClusterList = list(n0, _CL, 0, [
  () => Cluster,
  {
    [_xN]: _C,
  },
]);
export var DescribeClusters = op(
  n0,
  _DCe,
  0,
  () => DescribeClustersMessage,
  () => ClustersMessage
);
