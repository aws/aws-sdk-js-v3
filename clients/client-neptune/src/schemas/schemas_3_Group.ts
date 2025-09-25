// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBParameterGroupAlreadyExistsFault as __DBParameterGroupAlreadyExistsFault,
  DBParameterGroupQuotaExceededFault as __DBParameterGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBCPG,
  _CDBCPGM,
  _CDBCPGMr,
  _CDBCPGR,
  _CDBCPGr,
  _CDBCPGRr,
  _CDBPG,
  _CDBPGM,
  _CDBPGMr,
  _CDBPGR,
  _CDBPGr,
  _CDBPGRr,
  _D,
  _DBCPG,
  _DBCPGN,
  _DBPG,
  _DBPGAEF,
  _DBPGF,
  _DBPGN,
  _DBPGQEF,
  _e,
  _hE,
  _m,
  _SDBCPGI,
  _SDBPGI,
  _T,
  _TDBCPGD,
  _TDBCPGI,
  _TDBPGD,
  _TDBPGI,
  n0,
  TagList,
} from "./schemas_0";
import { DBClusterParameterGroup } from "./schemas_19_BClusterParameter";
import { DBParameterGroup } from "./schemas_24_DBParameter";

/* eslint no-var: 0 */

export var CopyDBClusterParameterGroupMessage = struct(
  n0,
  _CDBCPGM,
  0,
  [_SDBCPGI, _TDBCPGI, _TDBCPGD, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CopyDBClusterParameterGroupResult = struct(n0, _CDBCPGR, 0, [_DBCPG], [() => DBClusterParameterGroup]);
export var CopyDBParameterGroupMessage = struct(
  n0,
  _CDBPGM,
  0,
  [_SDBPGI, _TDBPGI, _TDBPGD, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CopyDBParameterGroupResult = struct(n0, _CDBPGR, 0, [_DBPG], [() => DBParameterGroup]);
export var CreateDBClusterParameterGroupMessage = struct(
  n0,
  _CDBCPGMr,
  0,
  [_DBCPGN, _DBPGF, _D, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateDBClusterParameterGroupResult = struct(n0, _CDBCPGRr, 0, [_DBCPG], [() => DBClusterParameterGroup]);
export var CreateDBParameterGroupMessage = struct(
  n0,
  _CDBPGMr,
  0,
  [_DBPGN, _DBPGF, _D, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateDBParameterGroupResult = struct(n0, _CDBPGRr, 0, [_DBPG], [() => DBParameterGroup]);
export var DBParameterGroupAlreadyExistsFault = error(
  n0,
  _DBPGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBParameterGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBParameterGroupAlreadyExistsFault
);
export var DBParameterGroupQuotaExceededFault = error(
  n0,
  _DBPGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBParameterGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __DBParameterGroupQuotaExceededFault
);
export var CopyDBClusterParameterGroup = op(
  n0,
  _CDBCPG,
  0,
  () => CopyDBClusterParameterGroupMessage,
  () => CopyDBClusterParameterGroupResult
);
export var CopyDBParameterGroup = op(
  n0,
  _CDBPG,
  0,
  () => CopyDBParameterGroupMessage,
  () => CopyDBParameterGroupResult
);
export var CreateDBClusterParameterGroup = op(
  n0,
  _CDBCPGr,
  0,
  () => CreateDBClusterParameterGroupMessage,
  () => CreateDBClusterParameterGroupResult
);
export var CreateDBParameterGroup = op(
  n0,
  _CDBPGr,
  0,
  () => CreateDBParameterGroupMessage,
  () => CreateDBParameterGroupResult
);
