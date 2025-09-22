// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DefaultUserAssociatedToUserGroupFault as __DefaultUserAssociatedToUserGroupFault,
  DefaultUserRequired as __DefaultUserRequired,
  DuplicateUserNameFault as __DuplicateUserNameFault,
  InvalidUserStateFault as __InvalidUserStateFault,
  UserAlreadyExistsFault as __UserAlreadyExistsFault,
  UserGroupAlreadyExistsFault as __UserGroupAlreadyExistsFault,
  UserGroupQuotaExceededFault as __UserGroupQuotaExceededFault,
  UserQuotaExceededFault as __UserQuotaExceededFault,
} from "../models/index";
import {
  _A,
  _AAS,
  _AM,
  _aQE,
  _ARN,
  _AS,
  _c,
  _CU,
  _CUG,
  _CUGM,
  _CUM,
  _DU,
  _DUATUGF,
  _DUe,
  _DUM,
  _DUMe,
  _DUNF,
  _DUR,
  _DURe,
  _E,
  _e,
  _Fi,
  _Fil,
  _FL,
  _hE,
  _IUSF,
  _M,
  _m,
  _MEV,
  _MR,
  _MU,
  _MUM,
  _N,
  _NPR,
  _P,
  _PC,
  _PCe,
  _RGe,
  _SCe,
  _St,
  _T,
  _Ty,
  _UAEF,
  _UGAEF,
  _UGI,
  _UGIs,
  _UGPC,
  _UGQEF,
  _UGs,
  _UI,
  _UIs,
  _UITA,
  _UITR,
  _UL,
  _UN,
  _UQEF,
  _Us,
  _Use,
  _Va,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Authentication = struct(n0, _A, 0, [_Ty, _PC], [0, 1]);
export var AuthenticationMode = struct(n0, _AM, 0, [_Ty, _P], [0, 64 | 0]);
export var CreateUserGroupMessage = struct(n0, _CUGM, 0, [_UGIs, _E, _UI, _T], [0, 0, 64 | 0, [() => TagList, 0]]);
export var CreateUserMessage = struct(
  n0,
  _CUM,
  0,
  [_UIs, _UN, _E, _P, _AS, _NPR, _T, _AM],
  [0, 0, 0, 64 | 0, 0, 2, [() => TagList, 0], () => AuthenticationMode]
);
export var DefaultUserAssociatedToUserGroupFault = error(
  n0,
  _DUATUGF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DefaultUserAssociatedToUserGroup`, 400],
  },
  [_m],
  [0],

  __DefaultUserAssociatedToUserGroupFault
);
export var DefaultUserRequired = error(
  n0,
  _DUR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DefaultUserRequired`, 400],
  },
  [_m],
  [0],

  __DefaultUserRequired
);
export var DeleteUserMessage = struct(n0, _DUM, 0, [_UIs], [0]);
export var DescribeUsersMessage = struct(n0, _DUMe, 0, [_E, _UIs, _Fi, _MR, _M], [0, 0, () => FilterList, 1, 0]);
export var DescribeUsersResult = struct(n0, _DURe, 0, [_Us, _M], [() => UserList, 0]);
export var DuplicateUserNameFault = error(
  n0,
  _DUNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateUserName`, 400],
  },
  [_m],
  [0],

  __DuplicateUserNameFault
);
export var Filter = struct(n0, _Fil, 0, [_N, _Va], [0, 64 | 0]);
export var InvalidUserStateFault = error(
  n0,
  _IUSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidUserState`, 400],
  },
  [_m],
  [0],

  __InvalidUserStateFault
);
export var ModifyUserMessage = struct(
  n0,
  _MUM,
  0,
  [_UIs, _AS, _AAS, _P, _NPR, _AM, _E],
  [0, 0, 0, 64 | 0, 2, () => AuthenticationMode, 0]
);
export var User = struct(
  n0,
  _Use,
  0,
  [_UIs, _UN, _St, _E, _MEV, _AS, _UGI, _A, _ARN],
  [0, 0, 0, 0, 0, 0, 64 | 0, () => Authentication, 0]
);
export var UserAlreadyExistsFault = error(
  n0,
  _UAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserAlreadyExists`, 400],
  },
  [_m],
  [0],

  __UserAlreadyExistsFault
);
export var UserGroup = struct(
  n0,
  _UGs,
  0,
  [_UGIs, _St, _E, _UI, _MEV, _PCe, _RGe, _SCe, _ARN],
  [0, 0, 0, 64 | 0, 0, () => UserGroupPendingChanges, 64 | 0, 64 | 0, 0]
);
export var UserGroupAlreadyExistsFault = error(
  n0,
  _UGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __UserGroupAlreadyExistsFault
);
export var UserGroupPendingChanges = struct(n0, _UGPC, 0, [_UITR, _UITA], [64 | 0, 64 | 0]);
export var UserGroupQuotaExceededFault = error(
  n0,
  _UGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __UserGroupQuotaExceededFault
);
export var UserQuotaExceededFault = error(
  n0,
  _UQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __UserQuotaExceededFault
);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var FilterValueList = 64 | 0;

export var PasswordListInput = 64 | 0;

export var UGReplicationGroupIdList = 64 | 0;

export var UGServerlessCacheIdList = 64 | 0;

export var UserIdList = 64 | 0;

export var UserIdListInput = 64 | 0;

export var UserList = list(n0, _UL, 0, () => User);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserMessage,
  () => User
);
export var CreateUserGroup = op(
  n0,
  _CUG,
  0,
  () => CreateUserGroupMessage,
  () => UserGroup
);
export var DeleteUser = op(
  n0,
  _DU,
  0,
  () => DeleteUserMessage,
  () => User
);
export var DescribeUsers = op(
  n0,
  _DUe,
  0,
  () => DescribeUsersMessage,
  () => DescribeUsersResult
);
export var ModifyUser = op(
  n0,
  _MU,
  0,
  () => ModifyUserMessage,
  () => User
);
