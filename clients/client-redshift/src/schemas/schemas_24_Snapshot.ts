// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidSnapshotCopyGrantStateFault as __InvalidSnapshotCopyGrantStateFault,
  SnapshotCopyGrantNotFoundFault as __SnapshotCopyGrantNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _DSCG,
  _DSCGe,
  _DSCGM,
  _DSCGMe,
  _e,
  _hE,
  _ISCGSF,
  _M,
  _m,
  _MR,
  _SCG,
  _SCGL,
  _SCGM,
  _SCGN,
  _SCGn,
  _SCGNFF,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  Unit,
} from "./schemas_0";
import { SnapshotCopyGrant } from "./schemas_62_Snapshot";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var DeleteSnapshotCopyGrantMessage = struct(n0, _DSCGM, 0, [_SCGN], [0]);
export var DescribeSnapshotCopyGrantsMessage = struct(
  n0,
  _DSCGMe,
  0,
  [_SCGN, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var InvalidSnapshotCopyGrantStateFault = error(
  n0,
  _ISCGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSnapshotCopyGrantStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidSnapshotCopyGrantStateFault
);
export var SnapshotCopyGrantMessage = struct(n0, _SCGM, 0, [_M, _SCGn], [0, [() => SnapshotCopyGrantList, 0]]);
export var SnapshotCopyGrantNotFoundFault = error(
  n0,
  _SCGNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyGrantNotFoundFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyGrantNotFoundFault
);
export var SnapshotCopyGrantList = list(n0, _SCGL, 0, [
  () => SnapshotCopyGrant,
  {
    [_xN]: _SCG,
  },
]);
export var DeleteSnapshotCopyGrant = op(
  n0,
  _DSCG,
  0,
  () => DeleteSnapshotCopyGrantMessage,
  () => Unit
);
export var DescribeSnapshotCopyGrants = op(
  n0,
  _DSCGe,
  0,
  () => DescribeSnapshotCopyGrantsMessage,
  () => SnapshotCopyGrantMessage
);
