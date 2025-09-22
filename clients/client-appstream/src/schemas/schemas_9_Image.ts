// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aF,
  _aIB,
  _DIPe,
  _DIPRes,
  _DIPResc,
  _IP,
  _iP,
  _MR,
  _N,
  _NT,
  _SAAI,
  _SAI,
  _sAI,
  _SIP,
  _SIPL,
  _UIP,
  _UIPR,
  _UIPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeImagePermissionsRequest = struct(n0, _DIPRes, 0, [_N, _MR, _SAAI, _NT], [0, 1, 64 | 0, 0]);
export var DescribeImagePermissionsResult = struct(
  n0,
  _DIPResc,
  0,
  [_N, _SIPL, _NT],
  [0, () => SharedImagePermissionsList, 0]
);
export var ImagePermissions = struct(n0, _IP, 0, [_aF, _aIB], [2, 2]);
export var SharedImagePermissions = struct(n0, _SIP, 0, [_sAI, _iP], [0, () => ImagePermissions]);
export var UpdateImagePermissionsRequest = struct(n0, _UIPR, 0, [_N, _SAI, _IP], [0, 0, () => ImagePermissions]);
export var UpdateImagePermissionsResult = struct(n0, _UIPRp, 0, [], []);
export var AwsAccountIdList = 64 | 0;

export var SharedImagePermissionsList = list(n0, _SIPL, 0, () => SharedImagePermissions);
export var DescribeImagePermissions = op(
  n0,
  _DIPe,
  0,
  () => DescribeImagePermissionsRequest,
  () => DescribeImagePermissionsResult
);
export var UpdateImagePermissions = op(
  n0,
  _UIP,
  0,
  () => UpdateImagePermissionsRequest,
  () => UpdateImagePermissionsResult
);
