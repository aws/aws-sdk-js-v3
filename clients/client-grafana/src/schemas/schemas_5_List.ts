// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _gI,
  _gR,
  _h,
  _hQ,
  _i,
  _iD,
  _LP,
  _LPR,
  _LPRi,
  _LWSA,
  _LWSAR,
  _LWSARi,
  _mR,
  _n,
  _nT,
  _PE,
  _pe,
  _PEL,
  _r,
  _sA,
  _SAL,
  _SAS,
  _u,
  _uI,
  _uT,
  _wI,
  n0,
} from "./schemas_0";
import { User } from "./schemas_4_WorkspaceService";

/* eslint no-var: 0 */

export var ListPermissionsRequest = struct(
  n0,
  _LPR,
  0,
  [_mR, _nT, _uT, _uI, _gI, _wI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _uT,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _gI,
      },
    ],
    [0, 1],
  ]
);
export var ListPermissionsResponse = struct(n0, _LPRi, 0, [_nT, _pe], [0, () => PermissionEntryList]);
export var ListWorkspaceServiceAccountsRequest = struct(
  n0,
  _LWSAR,
  0,
  [_mR, _nT, _wI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
  ]
);
export var ListWorkspaceServiceAccountsResponse = struct(
  n0,
  _LWSARi,
  0,
  [_nT, _sA, _wI],
  [0, () => ServiceAccountList, 0]
);
export var PermissionEntry = struct(n0, _PE, 0, [_u, _r], [() => User, 0]);
export var ServiceAccountSummary = struct(n0, _SAS, 0, [_i, _n, _iD, _gR], [0, 0, 0, 0]);
export var PermissionEntryList = list(n0, _PEL, 0, () => PermissionEntry);
export var ServiceAccountList = list(n0, _SAL, 0, () => ServiceAccountSummary);
export var ListPermissions = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/permissions", 200],
  },
  () => ListPermissionsRequest,
  () => ListPermissionsResponse
);
export var ListWorkspaceServiceAccounts = op(
  n0,
  _LWSA,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/serviceaccounts", 200],
  },
  () => ListWorkspaceServiceAccountsRequest,
  () => ListWorkspaceServiceAccountsResponse
);
