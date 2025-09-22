// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DBC,
  _DBCI,
  _DBCL,
  _DBCl,
  _DBCMlu,
  _DDBCe,
  _DDBCMe,
  _Fi,
  _IS,
  _Ma,
  _MR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";

/* eslint no-var: 0 */

export var DBClusterMessage = struct(n0, _DBCMlu, 0, [_Ma, _DBCl], [0, [() => DBClusterList, 0]]);
export var DescribeDBClustersMessage = struct(
  n0,
  _DDBCMe,
  0,
  [_DBCI, _Fi, _MR, _Ma, _IS],
  [0, [() => FilterList, 0], 1, 0, 2]
);
export var DBClusterList = list(n0, _DBCL, 0, [
  () => DBCluster,
  {
    [_xN]: _DBC,
  },
]);
export var DescribeDBClusters = op(
  n0,
  _DDBCe,
  0,
  () => DescribeDBClustersMessage,
  () => DBClusterMessage
);
