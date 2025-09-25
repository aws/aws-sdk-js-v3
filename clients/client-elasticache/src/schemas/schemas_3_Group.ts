// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidUserGroupStateFault as __InvalidUserGroupStateFault,
  ServerlessCacheAlreadyExistsFault as __ServerlessCacheAlreadyExistsFault,
  ServerlessCacheQuotaForCustomerExceededFault as __ServerlessCacheQuotaForCustomerExceededFault,
  UserGroupNotFoundFault as __UserGroupNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSC,
  _CSCR,
  _CSCRr,
  _CUL,
  _D,
  _DST,
  _DUG,
  _DUGe,
  _DUGM,
  _DUGMe,
  _DUGR,
  _E,
  _e,
  _hE,
  _IUGSF,
  _KKI,
  _M,
  _m,
  _MEVa,
  _MR,
  _MSC,
  _MSCR,
  _MSCRo,
  _MUG,
  _MUGM,
  _RUGe,
  _SATR,
  _SC,
  _SCAEF,
  _SCN,
  _SCQFCEF,
  _SGI,
  _SI,
  _SRL,
  _T,
  _UG,
  _UGIs,
  _UGL,
  _UGNFF,
  _UITA,
  _UITR,
  n0,
  TagList,
} from "./schemas_0";
import { UserGroup } from "./schemas_9_User";
import { SecurityGroupIdsList, SnapshotArnsList } from "./schemas_12_Cache";
import { CacheUsageLimits, ServerlessCache, SubnetIdsList } from "./schemas_21_Serverless";

/* eslint no-var: 0 */

export var CreateServerlessCacheRequest = struct(
  n0,
  _CSCR,
  0,
  [_SCN, _D, _E, _MEVa, _CUL, _KKI, _SGI, _SATR, _T, _UGIs, _SI, _SRL, _DST],
  [
    0,
    0,
    0,
    0,
    () => CacheUsageLimits,
    0,
    [() => SecurityGroupIdsList, 0],
    [() => SnapshotArnsList, 0],
    [() => TagList, 0],
    0,
    [() => SubnetIdsList, 0],
    1,
    0,
  ]
);
export var CreateServerlessCacheResponse = struct(n0, _CSCRr, 0, [_SC], [[() => ServerlessCache, 0]]);
export var DeleteUserGroupMessage = struct(n0, _DUGM, 0, [_UGIs], [0]);
export var DescribeUserGroupsMessage = struct(n0, _DUGMe, 0, [_UGIs, _MR, _M], [0, 1, 0]);
export var DescribeUserGroupsResult = struct(n0, _DUGR, 0, [_UG, _M], [() => UserGroupList, 0]);
export var InvalidUserGroupStateFault = error(
  n0,
  _IUGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidUserGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidUserGroupStateFault
);
export var ModifyServerlessCacheRequest = struct(
  n0,
  _MSCR,
  0,
  [_SCN, _D, _CUL, _RUGe, _UGIs, _SGI, _SRL, _DST, _E, _MEVa],
  [0, 0, () => CacheUsageLimits, 2, 0, [() => SecurityGroupIdsList, 0], 1, 0, 0, 0]
);
export var ModifyServerlessCacheResponse = struct(n0, _MSCRo, 0, [_SC], [[() => ServerlessCache, 0]]);
export var ModifyUserGroupMessage = struct(n0, _MUGM, 0, [_UGIs, _UITA, _UITR, _E], [0, 64 | 0, 64 | 0, 0]);
export var ServerlessCacheAlreadyExistsFault = error(
  n0,
  _SCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ServerlessCacheAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __ServerlessCacheAlreadyExistsFault
);
export var ServerlessCacheQuotaForCustomerExceededFault = error(
  n0,
  _SCQFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ServerlessCacheQuotaForCustomerExceededFault`, 400],
  },
  [_m],
  [0],

  __ServerlessCacheQuotaForCustomerExceededFault
);
export var UserGroupNotFoundFault = error(
  n0,
  _UGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`UserGroupNotFound`, 404],
  },
  [_m],
  [0],

  __UserGroupNotFoundFault
);
export var UserGroupList = list(n0, _UGL, 0, () => UserGroup);
export var CreateServerlessCache = op(
  n0,
  _CSC,
  0,
  () => CreateServerlessCacheRequest,
  () => CreateServerlessCacheResponse
);
export var DeleteUserGroup = op(
  n0,
  _DUG,
  0,
  () => DeleteUserGroupMessage,
  () => UserGroup
);
export var DescribeUserGroups = op(
  n0,
  _DUGe,
  0,
  () => DescribeUserGroupsMessage,
  () => DescribeUserGroupsResult
);
export var ModifyServerlessCache = op(
  n0,
  _MSC,
  0,
  () => ModifyServerlessCacheRequest,
  () => ModifyServerlessCacheResponse
);
export var ModifyUserGroup = op(
  n0,
  _MUG,
  0,
  () => ModifyUserGroupMessage,
  () => UserGroup
);
