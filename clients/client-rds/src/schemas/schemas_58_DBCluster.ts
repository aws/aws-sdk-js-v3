// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { DBClusterBacktrackNotFoundFault as __DBClusterBacktrackNotFoundFault } from "../models/index";
import {
  _aQE,
  _BDBC,
  _BDBCM,
  _BF,
  _BI,
  _BRCT,
  _BT,
  _c,
  _DBCB,
  _DBCBL,
  _DBCBl,
  _DBCBM,
  _DBCBNFF,
  _DBCI,
  _DDBCB,
  _DDBCBM,
  _e,
  _F,
  _Fi,
  _hE,
  _m,
  _Ma,
  _MR,
  _St,
  _UETOPITU,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BacktrackDBClusterMessage = struct(n0, _BDBCM, 0, [_DBCI, _BT, _F, _UETOPITU], [0, 4, 2, 2]);
export var DBClusterBacktrack = struct(n0, _DBCB, 0, [_DBCI, _BI, _BT, _BF, _BRCT, _St], [0, 0, 4, 4, 4, 0]);
export var DBClusterBacktrackMessage = struct(n0, _DBCBM, 0, [_Ma, _DBCBl], [0, [() => DBClusterBacktrackList, 0]]);
export var DBClusterBacktrackNotFoundFault = error(
  n0,
  _DBCBNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBClusterBacktrackNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBClusterBacktrackNotFoundFault
);
export var DescribeDBClusterBacktracksMessage = struct(
  n0,
  _DDBCBM,
  0,
  [_DBCI, _BI, _Fi, _MR, _Ma],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var DBClusterBacktrackList = list(n0, _DBCBL, 0, [
  () => DBClusterBacktrack,
  {
    [_xN]: _DBCB,
  },
]);
export var BacktrackDBCluster = op(
  n0,
  _BDBC,
  0,
  () => BacktrackDBClusterMessage,
  () => DBClusterBacktrack
);
export var DescribeDBClusterBacktracks = op(
  n0,
  _DDBCB,
  0,
  () => DescribeDBClusterBacktracksMessage,
  () => DBClusterBacktrackMessage
);
