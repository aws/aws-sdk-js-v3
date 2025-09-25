// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { GlobalReplicationGroupAlreadyExistsFault as __GlobalReplicationGroupAlreadyExistsFault } from "../models/index";
import {
  _AF,
  _aQE,
  _AREE,
  _ARN,
  _ATE,
  _c,
  _CEl,
  _CGRG,
  _CGRGM,
  _CGRGR,
  _CNT,
  _E,
  _e,
  _EV,
  _GNG,
  _GNGI,
  _GNGL,
  _GNGl,
  _GRG,
  _GRGAEF,
  _GRGD,
  _GRGI,
  _GRGIS,
  _GRGM,
  _GRGML,
  _hE,
  _m,
  _Mem,
  _PRGI,
  _R,
  _RGIe,
  _RGR,
  _Sl,
  _St,
  _TEE,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGlobalReplicationGroupMessage = struct(n0, _CGRGM, 0, [_GRGIS, _GRGD, _PRGI], [0, 0, 0]);
export var CreateGlobalReplicationGroupResult = struct(n0, _CGRGR, 0, [_GRG], [[() => GlobalReplicationGroup, 0]]);
export var GlobalNodeGroup = struct(n0, _GNG, 0, [_GNGI, _Sl], [0, 0]);
export var GlobalReplicationGroup = struct(
  n0,
  _GRG,
  0,
  [_GRGI, _GRGD, _St, _CNT, _E, _EV, _Mem, _CEl, _GNGl, _ATE, _TEE, _AREE, _ARN],
  [0, 0, 0, 0, 0, 0, [() => GlobalReplicationGroupMemberList, 0], 2, [() => GlobalNodeGroupList, 0], 2, 2, 2, 0]
);
export var GlobalReplicationGroupAlreadyExistsFault = error(
  n0,
  _GRGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GlobalReplicationGroupAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __GlobalReplicationGroupAlreadyExistsFault
);
export var GlobalReplicationGroupMember = struct(n0, _GRGM, 0, [_RGIe, _RGR, _R, _AF, _St], [0, 0, 0, 0, 0]);
export var GlobalNodeGroupList = list(n0, _GNGL, 0, [
  () => GlobalNodeGroup,
  {
    [_xN]: _GNG,
  },
]);
export var GlobalReplicationGroupMemberList = list(n0, _GRGML, 0, [
  () => GlobalReplicationGroupMember,
  {
    [_xN]: _GRGM,
  },
]);
export var CreateGlobalReplicationGroup = op(
  n0,
  _CGRG,
  0,
  () => CreateGlobalReplicationGroupMessage,
  () => CreateGlobalReplicationGroupResult
);
