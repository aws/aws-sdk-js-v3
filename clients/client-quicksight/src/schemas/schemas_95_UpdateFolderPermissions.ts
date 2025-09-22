// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _FI,
  _GP,
  _h,
  _Per,
  _RI,
  _RPev,
  _St,
  _UFP,
  _UFPR,
  _UFPRp,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFolderPermissionsRequest = struct(
  n0,
  _UFPR,
  0,
  [_AAI, _FI, _GP, _RPev],
  [[0, 1], [0, 1], () => ResourcePermissionList, () => ResourcePermissionList]
);
export var UpdateFolderPermissionsResponse = struct(
  n0,
  _UFPRp,
  0,
  [_St, _Ar, _FI, _Per, _RI],
  [1, 0, 0, () => ResourcePermissionList, 0]
);
export var UpdateFolderPermissions = op(
  n0,
  _UFP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/folders/{FolderId}/permissions", 200],
  },
  () => UpdateFolderPermissionsRequest,
  () => UpdateFolderPermissionsResponse
);
