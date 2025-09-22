// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBClusterEndpointNotFoundFault as __DBClusterEndpointNotFoundFault,
  InvalidDBClusterEndpointStateFault as __InvalidDBClusterEndpointStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CET,
  _DBCE,
  _DBCEA,
  _DBCEI,
  _DBCEL,
  _DBCEl,
  _DBCEM,
  _DBCENFF,
  _DBCERI,
  _DBCI,
  _DDBCE,
  _DDBCEe,
  _DDBCEM,
  _DDBCEMe,
  _DDBCEO,
  _E,
  _e,
  _EM,
  _ET,
  _F,
  _hE,
  _IDBCESF,
  _M,
  _m,
  _MR,
  _S,
  _SM,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterEndpoint = struct(
  n0,
  _DBCE,
  0,
  [_DBCEI, _DBCI, _DBCERI, _E, _S, _ET, _CET, _SM, _EM, _DBCEA],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var DBClusterEndpointMessage = struct(n0, _DBCEM, 0, [_M, _DBCEl], [0, [() => DBClusterEndpointList, 0]]);
export var DBClusterEndpointNotFoundFault = error(
  n0,
  _DBCENFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterEndpointNotFoundFault`, 400],
  },
  [_m],
  [0],

  __DBClusterEndpointNotFoundFault
);
export var DeleteDBClusterEndpointMessage = struct(n0, _DDBCEM, 0, [_DBCEI], [0]);
export var DeleteDBClusterEndpointOutput = struct(
  n0,
  _DDBCEO,
  0,
  [_DBCEI, _DBCI, _DBCERI, _E, _S, _ET, _CET, _SM, _EM, _DBCEA],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var DescribeDBClusterEndpointsMessage = struct(
  n0,
  _DDBCEMe,
  0,
  [_DBCI, _DBCEI, _F, _MR, _M],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var InvalidDBClusterEndpointStateFault = error(
  n0,
  _IDBCESF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBClusterEndpointStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBClusterEndpointStateFault
);
export var DBClusterEndpointList = list(n0, _DBCEL, 0, [
  () => DBClusterEndpoint,
  {
    [_xN]: _DBCEL,
  },
]);
export var StringList = 64 | 0;

export var DeleteDBClusterEndpoint = op(
  n0,
  _DDBCE,
  0,
  () => DeleteDBClusterEndpointMessage,
  () => DeleteDBClusterEndpointOutput
);
export var DescribeDBClusterEndpoints = op(
  n0,
  _DDBCEe,
  0,
  () => DescribeDBClusterEndpointsMessage,
  () => DBClusterEndpointMessage
);
