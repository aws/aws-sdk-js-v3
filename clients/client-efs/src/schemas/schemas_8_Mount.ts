// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DependencyTimeout as __DependencyTimeout,
  IncorrectMountTargetState as __IncorrectMountTargetState,
  MountTargetNotFound as __MountTargetNotFound,
  SecurityGroupLimitExceeded as __SecurityGroupLimitExceeded,
  SecurityGroupNotFound as __SecurityGroupNotFound,
} from "../models/index";
import {
  _c,
  _DMT,
  _DMTR,
  _DMTSG,
  _DMTSGR,
  _DMTSGRe,
  _DT,
  _e,
  _EC,
  _h,
  _hE,
  _IMTS,
  _M,
  _MMTSG,
  _MMTSGR,
  _MTI,
  _MTNF,
  _s,
  _SG,
  _SGLE,
  _SGNF,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMountTargetRequest = struct(n0, _DMTR, 0, [_MTI], [[0, 1]]);
export var DependencyTimeout = error(
  n0,
  _DT,
  {
    [_e]: _s,
    [_hE]: 504,
  },
  [_EC, _M],
  [0, 0],

  __DependencyTimeout
);
export var DescribeMountTargetSecurityGroupsRequest = struct(n0, _DMTSGR, 0, [_MTI], [[0, 1]]);
export var DescribeMountTargetSecurityGroupsResponse = struct(n0, _DMTSGRe, 0, [_SG], [64 | 0]);
export var IncorrectMountTargetState = error(
  n0,
  _IMTS,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __IncorrectMountTargetState
);
export var ModifyMountTargetSecurityGroupsRequest = struct(n0, _MMTSGR, 0, [_MTI, _SG], [[0, 1], 64 | 0]);
export var MountTargetNotFound = error(
  n0,
  _MTNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [0, 0],

  __MountTargetNotFound
);
export var SecurityGroupLimitExceeded = error(
  n0,
  _SGLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __SecurityGroupLimitExceeded
);
export var SecurityGroupNotFound = error(
  n0,
  _SGNF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __SecurityGroupNotFound
);
export var SecurityGroups = 64 | 0;

export var DeleteMountTarget = op(
  n0,
  _DMT,
  {
    [_h]: ["DELETE", "/2015-02-01/mount-targets/{MountTargetId}", 204],
  },
  () => DeleteMountTargetRequest,
  () => Unit
);
export var DescribeMountTargetSecurityGroups = op(
  n0,
  _DMTSG,
  {
    [_h]: ["GET", "/2015-02-01/mount-targets/{MountTargetId}/security-groups", 200],
  },
  () => DescribeMountTargetSecurityGroupsRequest,
  () => DescribeMountTargetSecurityGroupsResponse
);
export var ModifyMountTargetSecurityGroups = op(
  n0,
  _MMTSG,
  {
    [_h]: ["PUT", "/2015-02-01/mount-targets/{MountTargetId}/security-groups", 204],
  },
  () => ModifyMountTargetSecurityGroupsRequest,
  () => Unit
);
