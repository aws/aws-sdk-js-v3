// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { GlobalReplicationGroupNotFoundFault as __GlobalReplicationGroupNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _DGRGe,
  _DGRGMe,
  _DGRGRe,
  _e,
  _GRG,
  _GRGI,
  _GRGL,
  _GRGl,
  _GRGNFF,
  _hE,
  _M,
  _m,
  _MR,
  _SMI,
  _xN,
  n0,
} from "./schemas_0";
import { GlobalReplicationGroup } from "./schemas_29_Global";

/* eslint no-var: 0 */

export var DescribeGlobalReplicationGroupsMessage = struct(n0, _DGRGMe, 0, [_GRGI, _MR, _M, _SMI], [0, 1, 0, 2]);
export var DescribeGlobalReplicationGroupsResult = struct(
  n0,
  _DGRGRe,
  0,
  [_M, _GRGl],
  [0, [() => GlobalReplicationGroupList, 0]]
);
export var GlobalReplicationGroupNotFoundFault = error(
  n0,
  _GRGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`GlobalReplicationGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __GlobalReplicationGroupNotFoundFault
);
export var GlobalReplicationGroupList = list(n0, _GRGL, 0, [
  () => GlobalReplicationGroup,
  {
    [_xN]: _GRG,
  },
]);
export var DescribeGlobalReplicationGroups = op(
  n0,
  _DGRGe,
  0,
  () => DescribeGlobalReplicationGroupsMessage,
  () => DescribeGlobalReplicationGroupsResult
);
