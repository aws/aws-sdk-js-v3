// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBClusterEndpointAlreadyExistsFault as __DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointNotFoundFault as __DBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault as __DBClusterEndpointQuotaExceededFault,
  InvalidDBClusterEndpointStateFault as __InvalidDBClusterEndpointStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBCE,
  _CDBCEM,
  _CET,
  _DBCE,
  _DBCEA,
  _DBCEAEF,
  _DBCEI,
  _DBCEL,
  _DBCEl,
  _DBCEM,
  _DBCENFF,
  _DBCEQEF,
  _DBCERI,
  _DBCI,
  _DDBCE,
  _DDBCEe,
  _DDBCEM,
  _DDBCEMe,
  _e,
  _EM,
  _End,
  _ET,
  _Fi,
  _hE,
  _IDBCESF,
  _m,
  _Ma,
  _MDBCE,
  _MDBCEM,
  _MR,
  _SM,
  _St,
  _T,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDBClusterEndpointMessage = struct(
  n0,
  _CDBCEM,
  0,
  [_DBCI, _DBCEI, _ET, _SM, _EM, _T],
  [0, 0, 0, 64 | 0, 64 | 0, [() => TagList, 0]]
);
export var DBClusterEndpoint = struct(
  n0,
  _DBCE,
  0,
  [_DBCEI, _DBCI, _DBCERI, _End, _St, _ET, _CET, _SM, _EM, _DBCEA],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var DBClusterEndpointAlreadyExistsFault = error(
  n0,
  _DBCEAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterEndpointAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBClusterEndpointAlreadyExistsFault
);
export var DBClusterEndpointMessage = struct(n0, _DBCEM, 0, [_Ma, _DBCEl], [0, [() => DBClusterEndpointList, 0]]);
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
export var DBClusterEndpointQuotaExceededFault = error(
  n0,
  _DBCEQEF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DBClusterEndpointQuotaExceededFault`, 403],
  },
  [_m],
  [0],

  __DBClusterEndpointQuotaExceededFault
);
export var DeleteDBClusterEndpointMessage = struct(n0, _DDBCEM, 0, [_DBCEI], [0]);
export var DescribeDBClusterEndpointsMessage = struct(
  n0,
  _DDBCEMe,
  0,
  [_DBCI, _DBCEI, _Fi, _MR, _Ma],
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
export var ModifyDBClusterEndpointMessage = struct(n0, _MDBCEM, 0, [_DBCEI, _ET, _SM, _EM], [0, 0, 64 | 0, 64 | 0]);
export var DBClusterEndpointList = list(n0, _DBCEL, 0, [
  () => DBClusterEndpoint,
  {
    [_xN]: _DBCEL,
  },
]);
export var CreateDBClusterEndpoint = op(
  n0,
  _CDBCE,
  0,
  () => CreateDBClusterEndpointMessage,
  () => DBClusterEndpoint
);
export var DeleteDBClusterEndpoint = op(
  n0,
  _DDBCE,
  0,
  () => DeleteDBClusterEndpointMessage,
  () => DBClusterEndpoint
);
export var DescribeDBClusterEndpoints = op(
  n0,
  _DDBCEe,
  0,
  () => DescribeDBClusterEndpointsMessage,
  () => DBClusterEndpointMessage
);
export var ModifyDBClusterEndpoint = op(
  n0,
  _MDBCE,
  0,
  () => ModifyDBClusterEndpointMessage,
  () => DBClusterEndpoint
);
