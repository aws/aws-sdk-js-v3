// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  MaxDBShardGroupLimitReached as __MaxDBShardGroupLimitReached,
  NetworkTypeNotSupported as __NetworkTypeNotSupported,
  UnsupportedDBEngineVersionFault as __UnsupportedDBEngineVersionFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBSGMr,
  _CDBSGr,
  _CR,
  _DBCI,
  _DBSGI,
  _e,
  _hE,
  _m,
  _MACU,
  _MACUi,
  _MDBSGLR,
  _NTNS,
  _PA,
  _T,
  _UDBEVF,
  n0,
  TagList,
} from "./schemas_0";
import { DBShardGroup } from "./schemas_54_DBShard";

/* eslint no-var: 0 */

export var CreateDBShardGroupMessage = struct(
  n0,
  _CDBSGMr,
  0,
  [_DBSGI, _DBCI, _CR, _MACU, _MACUi, _PA, _T],
  [0, 0, 1, 1, 1, 2, [() => TagList, 0]]
);
export var MaxDBShardGroupLimitReached = error(
  n0,
  _MDBSGLR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MaxDBShardGroupLimitReached`, 400],
  },
  [_m],
  [0],

  __MaxDBShardGroupLimitReached
);
export var NetworkTypeNotSupported = error(
  n0,
  _NTNS,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NetworkTypeNotSupported`, 400],
  },
  [_m],
  [0],

  __NetworkTypeNotSupported
);
export var UnsupportedDBEngineVersionFault = error(
  n0,
  _UDBEVF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnsupportedDBEngineVersion`, 400],
  },
  [_m],
  [0],

  __UnsupportedDBEngineVersionFault
);
export var CreateDBShardGroup = op(
  n0,
  _CDBSGr,
  0,
  () => CreateDBShardGroupMessage,
  () => DBShardGroup
);
