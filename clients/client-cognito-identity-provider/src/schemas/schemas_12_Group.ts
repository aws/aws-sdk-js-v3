// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { GroupExistsException as __GroupExistsException } from "../models/index";
import {
  _AAUTG,
  _AAUTGR,
  _ALGFU,
  _ALGFUR,
  _ALGFURd,
  _ARUFG,
  _ARUFGR,
  _c,
  _CDr,
  _CG,
  _CGR,
  _CGRr,
  _Desc,
  _DG,
  _DGR,
  _e,
  _G,
  _GEE,
  _GG,
  _GGR,
  _GGRe,
  _GLT,
  _GN,
  _Gr,
  _GT,
  _hE,
  _L,
  _LG,
  _LGR,
  _LGRi,
  _LMD,
  _LUIG,
  _LUIGR,
  _LUIGRi,
  _m,
  _NT,
  _Pr,
  _RA,
  _U,
  _UG,
  _UGR,
  _UGRp,
  _UPI,
  _Use,
  n0,
  Unit,
  UsernameType,
} from "./schemas_0";
import { UsersListType } from "./schemas_11_User";

/* eslint no-var: 0 */

export var AdminAddUserToGroupRequest = struct(n0, _AAUTGR, 0, [_UPI, _U, _GN], [0, [() => UsernameType, 0], 0]);
export var AdminListGroupsForUserRequest = struct(
  n0,
  _ALGFUR,
  0,
  [_U, _UPI, _L, _NT],
  [[() => UsernameType, 0], 0, 1, 0]
);
export var AdminListGroupsForUserResponse = struct(n0, _ALGFURd, 0, [_G, _NT], [() => GroupListType, 0]);
export var AdminRemoveUserFromGroupRequest = struct(n0, _ARUFGR, 0, [_UPI, _U, _GN], [0, [() => UsernameType, 0], 0]);
export var CreateGroupRequest = struct(n0, _CGR, 0, [_GN, _UPI, _Desc, _RA, _Pr], [0, 0, 0, 0, 1]);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_Gr], [() => GroupType]);
export var DeleteGroupRequest = struct(n0, _DGR, 0, [_GN, _UPI], [0, 0]);
export var GetGroupRequest = struct(n0, _GGR, 0, [_GN, _UPI], [0, 0]);
export var GetGroupResponse = struct(n0, _GGRe, 0, [_Gr], [() => GroupType]);
export var GroupExistsException = error(
  n0,
  _GEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __GroupExistsException
);
export var GroupType = struct(n0, _GT, 0, [_GN, _UPI, _Desc, _RA, _Pr, _LMD, _CDr], [0, 0, 0, 0, 1, 4, 4]);
export var ListGroupsRequest = struct(n0, _LGR, 0, [_UPI, _L, _NT], [0, 1, 0]);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_G, _NT], [() => GroupListType, 0]);
export var ListUsersInGroupRequest = struct(n0, _LUIGR, 0, [_UPI, _GN, _L, _NT], [0, 0, 1, 0]);
export var ListUsersInGroupResponse = struct(n0, _LUIGRi, 0, [_Use, _NT], [[() => UsersListType, 0], 0]);
export var UpdateGroupRequest = struct(n0, _UGR, 0, [_GN, _UPI, _Desc, _RA, _Pr], [0, 0, 0, 0, 1]);
export var UpdateGroupResponse = struct(n0, _UGRp, 0, [_Gr], [() => GroupType]);
export var GroupListType = list(n0, _GLT, 0, () => GroupType);
export var AdminAddUserToGroup = op(
  n0,
  _AAUTG,
  0,
  () => AdminAddUserToGroupRequest,
  () => Unit
);
export var AdminListGroupsForUser = op(
  n0,
  _ALGFU,
  0,
  () => AdminListGroupsForUserRequest,
  () => AdminListGroupsForUserResponse
);
export var AdminRemoveUserFromGroup = op(
  n0,
  _ARUFG,
  0,
  () => AdminRemoveUserFromGroupRequest,
  () => Unit
);
export var CreateGroup = op(
  n0,
  _CG,
  0,
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var DeleteGroup = op(
  n0,
  _DG,
  0,
  () => DeleteGroupRequest,
  () => Unit
);
export var GetGroup = op(
  n0,
  _GG,
  0,
  () => GetGroupRequest,
  () => GetGroupResponse
);
export var ListGroups = op(
  n0,
  _LG,
  0,
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
export var ListUsersInGroup = op(
  n0,
  _LUIG,
  0,
  () => ListUsersInGroupRequest,
  () => ListUsersInGroupResponse
);
export var UpdateGroup = op(
  n0,
  _UG,
  0,
  () => UpdateGroupRequest,
  () => UpdateGroupResponse
);
