// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBParameterGroupAlreadyExistsFault as __DBParameterGroupAlreadyExistsFault,
  DBParameterGroupQuotaExceededFault as __DBParameterGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBCPGMr,
  _CDBCPGr,
  _CDBCPGRr,
  _D,
  _DBCPG,
  _DBCPGA,
  _DBCPGN,
  _DBPGAEF,
  _DBPGF,
  _DBPGQEF,
  _e,
  _hE,
  _m,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_12_BCluster";

/* eslint no-var: 0 */

export var CreateDBClusterParameterGroupMessage = struct(
  n0,
  _CDBCPGMr,
  0,
  [_DBCPGN, _DBPGF, _D, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateDBClusterParameterGroupResult = struct(n0, _CDBCPGRr, 0, [_DBCPG], [() => DBClusterParameterGroup]);
export var DBClusterParameterGroup = struct(n0, _DBCPG, 0, [_DBCPGN, _DBPGF, _D, _DBCPGA], [0, 0, 0, 0]);
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
export var CreateDBClusterParameterGroup = op(
  n0,
  _CDBCPGr,
  0,
  () => CreateDBClusterParameterGroupMessage,
  () => CreateDBClusterParameterGroupResult
);
