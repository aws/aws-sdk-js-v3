// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ReservedCacheNodeNotFoundFault as __ReservedCacheNodeNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _CNT,
  _DRCN,
  _DRCNM,
  _Du,
  _e,
  _hE,
  _M,
  _m,
  _MR,
  _OT,
  _PD,
  _RCN,
  _RCNe,
  _RCNI,
  _RCNL,
  _RCNM,
  _RCNNFF,
  _RCNOI,
  _xN,
  n0,
} from "./schemas_0";
import { ReservedCacheNode } from "./schemas_6_Nodes";

/* eslint no-var: 0 */

export var DescribeReservedCacheNodesMessage = struct(
  n0,
  _DRCNM,
  0,
  [_RCNI, _RCNOI, _CNT, _Du, _PD, _OT, _MR, _M],
  [0, 0, 0, 0, 0, 0, 1, 0]
);
export var ReservedCacheNodeMessage = struct(n0, _RCNM, 0, [_M, _RCNe], [0, [() => ReservedCacheNodeList, 0]]);
export var ReservedCacheNodeNotFoundFault = error(
  n0,
  _RCNNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedCacheNodeNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedCacheNodeNotFoundFault
);
export var ReservedCacheNodeList = list(n0, _RCNL, 0, [
  () => ReservedCacheNode,
  {
    [_xN]: _RCN,
  },
]);
export var DescribeReservedCacheNodes = op(
  n0,
  _DRCN,
  0,
  () => DescribeReservedCacheNodesMessage,
  () => ReservedCacheNodeMessage
);
