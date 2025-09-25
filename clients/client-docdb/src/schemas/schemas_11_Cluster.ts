// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBParameterGroupNotFoundFault as __DBParameterGroupNotFoundFault,
  InvalidDBParameterGroupStateFault as __InvalidDBParameterGroupStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBCPG,
  _CDBCPGM,
  _CDBCPGR,
  _DBCPG,
  _DBCPGD,
  _DBCPGL,
  _DBCPGl,
  _DBCPGM,
  _DBCPGN,
  _DBCPGNM,
  _DBPGNFF,
  _DDBCP,
  _DDBCPG,
  _DDBCPGe,
  _DDBCPGM,
  _DDBCPGMe,
  _DDBCPM,
  _e,
  _F,
  _hE,
  _IDBPGSF,
  _M,
  _m,
  _MDBCPG,
  _MDBCPGM,
  _MR,
  _Pa,
  _RAP,
  _RDBCPG,
  _RDBCPGM,
  _SDBCPGI,
  _So,
  _T,
  _TDBCPGD,
  _TDBCPGI,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { ParametersList, Unit } from "./schemas_10_Cluster";
import { TagList } from "./schemas_12_BCluster";
import { DBClusterParameterGroup } from "./schemas_16_BClusterParameter";

/* eslint no-var: 0 */

export var CopyDBClusterParameterGroupMessage = struct(
  n0,
  _CDBCPGM,
  0,
  [_SDBCPGI, _TDBCPGI, _TDBCPGD, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CopyDBClusterParameterGroupResult = struct(n0, _CDBCPGR, 0, [_DBCPG], [() => DBClusterParameterGroup]);
export var DBClusterParameterGroupDetails = struct(n0, _DBCPGD, 0, [_Pa, _M], [[() => ParametersList, 0], 0]);
export var DBClusterParameterGroupNameMessage = struct(n0, _DBCPGNM, 0, [_DBCPGN], [0]);
export var DBClusterParameterGroupsMessage = struct(
  n0,
  _DBCPGM,
  0,
  [_M, _DBCPGl],
  [0, [() => DBClusterParameterGroupList, 0]]
);
export var DBParameterGroupNotFoundFault = error(
  n0,
  _DBPGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __DBParameterGroupNotFoundFault
);
export var DeleteDBClusterParameterGroupMessage = struct(n0, _DDBCPGM, 0, [_DBCPGN], [0]);
export var DescribeDBClusterParameterGroupsMessage = struct(
  n0,
  _DDBCPGMe,
  0,
  [_DBCPGN, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeDBClusterParametersMessage = struct(
  n0,
  _DDBCPM,
  0,
  [_DBCPGN, _So, _F, _MR, _M],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var InvalidDBParameterGroupStateFault = error(
  n0,
  _IDBPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBParameterGroupStateFault
);
export var ModifyDBClusterParameterGroupMessage = struct(
  n0,
  _MDBCPGM,
  0,
  [_DBCPGN, _Pa],
  [0, [() => ParametersList, 0]]
);
export var ResetDBClusterParameterGroupMessage = struct(
  n0,
  _RDBCPGM,
  0,
  [_DBCPGN, _RAP, _Pa],
  [0, 2, [() => ParametersList, 0]]
);
export var DBClusterParameterGroupList = list(n0, _DBCPGL, 0, [
  () => DBClusterParameterGroup,
  {
    [_xN]: _DBCPG,
  },
]);
export var CopyDBClusterParameterGroup = op(
  n0,
  _CDBCPG,
  0,
  () => CopyDBClusterParameterGroupMessage,
  () => CopyDBClusterParameterGroupResult
);
export var DeleteDBClusterParameterGroup = op(
  n0,
  _DDBCPG,
  0,
  () => DeleteDBClusterParameterGroupMessage,
  () => Unit
);
export var DescribeDBClusterParameterGroups = op(
  n0,
  _DDBCPGe,
  0,
  () => DescribeDBClusterParameterGroupsMessage,
  () => DBClusterParameterGroupsMessage
);
export var DescribeDBClusterParameters = op(
  n0,
  _DDBCP,
  0,
  () => DescribeDBClusterParametersMessage,
  () => DBClusterParameterGroupDetails
);
export var ModifyDBClusterParameterGroup = op(
  n0,
  _MDBCPG,
  0,
  () => ModifyDBClusterParameterGroupMessage,
  () => DBClusterParameterGroupNameMessage
);
export var ResetDBClusterParameterGroup = op(
  n0,
  _RDBCPG,
  0,
  () => ResetDBClusterParameterGroupMessage,
  () => DBClusterParameterGroupNameMessage
);
