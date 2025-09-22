// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aI,
  _DQAP,
  _DQAPI,
  _DQAPO,
  _em,
  _gP,
  _h,
  _hH,
  _hQ,
  _iI,
  _ii,
  _p,
  _PI,
  _PIL,
  _PO,
  _POL,
  _POr,
  _pr,
  _rA,
  _rP,
  _uI,
  _UQAP,
  _UQAPI,
  _UQAPO,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeQAppPermissionsInput = struct(
  n0,
  _DQAPI,
  0,
  [_iI, _aI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
  ]
);
export var DescribeQAppPermissionsOutput = struct(n0, _DQAPO, 0, [_rA, _aI, _p], [0, 0, () => PermissionsOutputList]);
export var PermissionInput = struct(n0, _PI, 0, [_ac, _pr], [0, 0]);
export var PermissionOutput = struct(n0, _PO, 0, [_ac, _pr], [0, () => PrincipalOutput]);
export var PrincipalOutput = struct(n0, _POr, 0, [_uI, _uT, _em], [0, 0, 0]);
export var UpdateQAppPermissionsInput = struct(
  n0,
  _UQAPI,
  0,
  [_iI, _aI, _gP, _rP],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    () => PermissionsInputList,
    () => PermissionsInputList,
  ]
);
export var UpdateQAppPermissionsOutput = struct(n0, _UQAPO, 0, [_rA, _aI, _p], [0, 0, () => PermissionsOutputList]);
export var PermissionsInputList = list(n0, _PIL, 0, () => PermissionInput);
export var PermissionsOutputList = list(n0, _POL, 0, () => PermissionOutput);
export var DescribeQAppPermissions = op(
  n0,
  _DQAP,
  {
    [_h]: ["GET", "/apps.describeQAppPermissions", 200],
  },
  () => DescribeQAppPermissionsInput,
  () => DescribeQAppPermissionsOutput
);
export var UpdateQAppPermissions = op(
  n0,
  _UQAP,
  {
    [_h]: ["POST", "/apps.updateQAppPermissions", 200],
  },
  () => UpdateQAppPermissionsInput,
  () => UpdateQAppPermissionsOutput
);
