// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _DBCPG,
  _DBCPGA,
  _DBCPGL,
  _DBCPGl,
  _DBCPGM,
  _DBCPGN,
  _DBPGF,
  _DDBCPGe,
  _DDBCPGMe,
  _F,
  _M,
  _MR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterParameterGroup = struct(n0, _DBCPG, 0, [_DBCPGN, _DBPGF, _D, _DBCPGA], [0, 0, 0, 0]);
export var DBClusterParameterGroupsMessage = struct(
  n0,
  _DBCPGM,
  0,
  [_M, _DBCPGl],
  [0, [() => DBClusterParameterGroupList, 0]]
);
export var DescribeDBClusterParameterGroupsMessage = struct(
  n0,
  _DDBCPGMe,
  0,
  [_DBCPGN, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DBClusterParameterGroupList = list(n0, _DBCPGL, 0, [
  () => DBClusterParameterGroup,
  {
    [_xN]: _DBCPG,
  },
]);
export var DescribeDBClusterParameterGroups = op(
  n0,
  _DDBCPGe,
  0,
  () => DescribeDBClusterParameterGroupsMessage,
  () => DBClusterParameterGroupsMessage
);
