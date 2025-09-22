// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _AT,
  _AVl,
  _D,
  _DBCPGD,
  _DBCPGN,
  _DBCPGNM,
  _DBPGD,
  _DBPGF,
  _DBPGN,
  _DBPGNM,
  _DDBCP,
  _DDBCPM,
  _DDBP,
  _DDBPM,
  _DEDCP,
  _DEDCPM,
  _DEDCPR,
  _DEDP,
  _DEDPM,
  _DEDPR,
  _DT,
  _ED,
  _F,
  _IM,
  _M,
  _MDBCPG,
  _MDBCPGM,
  _MDBPG,
  _MDBPGM,
  _MEV,
  _MR,
  _Pa,
  _Par,
  _PL,
  _PN,
  _PV,
  _RAP,
  _RDBCPG,
  _RDBCPGM,
  _RDBPG,
  _RDBPGM,
  _So,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterParameterGroupDetails = struct(n0, _DBCPGD, 0, [_Pa, _M], [[() => ParametersList, 0], 0]);
export var DBClusterParameterGroupNameMessage = struct(n0, _DBCPGNM, 0, [_DBCPGN], [0]);
export var DBParameterGroupDetails = struct(n0, _DBPGD, 0, [_Pa, _M], [[() => ParametersList, 0], 0]);
export var DBParameterGroupNameMessage = struct(n0, _DBPGNM, 0, [_DBPGN], [0]);
export var DescribeDBClusterParametersMessage = struct(
  n0,
  _DDBCPM,
  0,
  [_DBCPGN, _So, _F, _MR, _M],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var DescribeDBParametersMessage = struct(
  n0,
  _DDBPM,
  0,
  [_DBPGN, _So, _F, _MR, _M],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var DescribeEngineDefaultClusterParametersMessage = struct(
  n0,
  _DEDCPM,
  0,
  [_DBPGF, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeEngineDefaultClusterParametersResult = struct(n0, _DEDCPR, 0, [_ED], [[() => EngineDefaults, 0]]);
export var DescribeEngineDefaultParametersMessage = struct(
  n0,
  _DEDPM,
  0,
  [_DBPGF, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeEngineDefaultParametersResult = struct(n0, _DEDPR, 0, [_ED], [[() => EngineDefaults, 0]]);
export var EngineDefaults = struct(n0, _ED, 0, [_DBPGF, _M, _Pa], [0, 0, [() => ParametersList, 0]]);
export var ModifyDBClusterParameterGroupMessage = struct(
  n0,
  _MDBCPGM,
  0,
  [_DBCPGN, _Pa],
  [0, [() => ParametersList, 0]]
);
export var ModifyDBParameterGroupMessage = struct(n0, _MDBPGM, 0, [_DBPGN, _Pa], [0, [() => ParametersList, 0]]);
export var Parameter = struct(
  n0,
  _Par,
  0,
  [_PN, _PV, _D, _So, _AT, _DT, _AVl, _IM, _MEV, _AM],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
);
export var ResetDBClusterParameterGroupMessage = struct(
  n0,
  _RDBCPGM,
  0,
  [_DBCPGN, _RAP, _Pa],
  [0, 2, [() => ParametersList, 0]]
);
export var ResetDBParameterGroupMessage = struct(
  n0,
  _RDBPGM,
  0,
  [_DBPGN, _RAP, _Pa],
  [0, 2, [() => ParametersList, 0]]
);
export var ParametersList = list(n0, _PL, 0, [
  () => Parameter,
  {
    [_xN]: _Par,
  },
]);
export var DescribeDBClusterParameters = op(
  n0,
  _DDBCP,
  0,
  () => DescribeDBClusterParametersMessage,
  () => DBClusterParameterGroupDetails
);
export var DescribeDBParameters = op(
  n0,
  _DDBP,
  0,
  () => DescribeDBParametersMessage,
  () => DBParameterGroupDetails
);
export var DescribeEngineDefaultClusterParameters = op(
  n0,
  _DEDCP,
  0,
  () => DescribeEngineDefaultClusterParametersMessage,
  () => DescribeEngineDefaultClusterParametersResult
);
export var DescribeEngineDefaultParameters = op(
  n0,
  _DEDP,
  0,
  () => DescribeEngineDefaultParametersMessage,
  () => DescribeEngineDefaultParametersResult
);
export var ModifyDBClusterParameterGroup = op(
  n0,
  _MDBCPG,
  0,
  () => ModifyDBClusterParameterGroupMessage,
  () => DBClusterParameterGroupNameMessage
);
export var ModifyDBParameterGroup = op(
  n0,
  _MDBPG,
  0,
  () => ModifyDBParameterGroupMessage,
  () => DBParameterGroupNameMessage
);
export var ResetDBClusterParameterGroup = op(
  n0,
  _RDBCPG,
  0,
  () => ResetDBClusterParameterGroupMessage,
  () => DBClusterParameterGroupNameMessage
);
export var ResetDBParameterGroup = op(
  n0,
  _RDBPG,
  0,
  () => ResetDBParameterGroupMessage,
  () => DBParameterGroupNameMessage
);
