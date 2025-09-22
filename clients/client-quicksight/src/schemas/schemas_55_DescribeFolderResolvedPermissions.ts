// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _DFRP,
  _DFRPR,
  _DFRPRe,
  _FI,
  _h,
  _hQ,
  _MR,
  _mr,
  _n,
  _Na,
  _NT,
  _nt,
  _Per,
  _RI,
  _St,
  n0,
  ResourcePermissionList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFolderResolvedPermissionsRequest = struct(
  n0,
  _DFRPR,
  0,
  [_AAI, _FI, _Na, _MR, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var DescribeFolderResolvedPermissionsResponse = struct(
  n0,
  _DFRPRe,
  0,
  [_St, _FI, _Ar, _Per, _RI, _NT],
  [[1, 32], 0, 0, () => ResourcePermissionList, 0, 0]
);
export var DescribeFolderResolvedPermissions = op(
  n0,
  _DFRP,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions", 200],
  },
  () => DescribeFolderResolvedPermissionsRequest,
  () => DescribeFolderResolvedPermissionsResponse
);
