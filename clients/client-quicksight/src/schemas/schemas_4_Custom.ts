// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _An,
  _AORADFA,
  _Ar,
  _Cap,
  _CAUD,
  _CAUDER,
  _CAUDS,
  _CAUT,
  _CAUTA,
  _CCPR,
  _CCPr,
  _CCPRr,
  _CPL,
  _CPN,
  _CPu,
  _CSF,
  _CSPICED,
  _Da,
  _DACPe,
  _DACPRes,
  _DACPResc,
  _DCPe,
  _DCPes,
  _DCPR,
  _DCPRe,
  _DCPRes,
  _DCPResc,
  _ETC,
  _ETCISR,
  _ETE,
  _ETEISR,
  _ETP,
  _ETPISR,
  _h,
  _hQ,
  _ICISRE,
  _LCP,
  _LCPR,
  _LCPRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _PR,
  _RI,
  _RSF,
  _SAh,
  _SDER,
  _SDh,
  _SDha,
  _SDS,
  _St,
  _Ta,
  _UACP,
  _UACPR,
  _UACPRp,
  _UCPp,
  _UCPR,
  _UCPRp,
  _VASPICEC,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Capabilities = struct(
  n0,
  _Cap,
  0,
  [
    _ETC,
    _ETE,
    _ETP,
    _PR,
    _CAUT,
    _AORADFA,
    _SAh,
    _CAUD,
    _SDh,
    _SDER,
    _CAUDER,
    _SDha,
    _CAUTA,
    _RSF,
    _CSF,
    _CAUDS,
    _SDS,
    _VASPICEC,
    _CSPICED,
    _ETPISR,
    _ETCISR,
    _ETEISR,
    _ICISRE,
    _Da,
    _An,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var CreateCustomPermissionsRequest = struct(
  n0,
  _CCPR,
  0,
  [_AAI, _CPN, _Cap, _Ta],
  [[0, 1], 0, () => Capabilities, () => TagList]
);
export var CreateCustomPermissionsResponse = struct(n0, _CCPRr, 0, [_St, _Ar, _RI], [1, 0, 0]);
export var CustomPermissions = struct(n0, _CPu, 0, [_Ar, _CPN, _Cap], [0, 0, () => Capabilities]);
export var DeleteCustomPermissionsRequest = struct(
  n0,
  _DCPR,
  0,
  [_AAI, _CPN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCustomPermissionsResponse = struct(n0, _DCPRe, 0, [_St, _Ar, _RI], [1, 0, 0]);
export var DescribeAccountCustomPermissionRequest = struct(n0, _DACPRes, 0, [_AAI], [[0, 1]]);
export var DescribeAccountCustomPermissionResponse = struct(n0, _DACPResc, 0, [_CPN, _RI, _St], [0, 0, 1]);
export var DescribeCustomPermissionsRequest = struct(
  n0,
  _DCPRes,
  0,
  [_AAI, _CPN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeCustomPermissionsResponse = struct(
  n0,
  _DCPResc,
  0,
  [_St, _CPu, _RI],
  [1, () => CustomPermissions, 0]
);
export var ListCustomPermissionsRequest = struct(
  n0,
  _LCPR,
  0,
  [_AAI, _MR, _NT],
  [
    [0, 1],
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
export var ListCustomPermissionsResponse = struct(
  n0,
  _LCPRi,
  0,
  [_St, _CPL, _NT, _RI],
  [[1, 32], () => CustomPermissionsList, 0, 0]
);
export var UpdateAccountCustomPermissionRequest = struct(n0, _UACPR, 0, [_CPN, _AAI], [0, [0, 1]]);
export var UpdateAccountCustomPermissionResponse = struct(n0, _UACPRp, 0, [_RI, _St], [0, 1]);
export var UpdateCustomPermissionsRequest = struct(
  n0,
  _UCPR,
  0,
  [_AAI, _CPN, _Cap],
  [[0, 1], [0, 1], () => Capabilities]
);
export var UpdateCustomPermissionsResponse = struct(n0, _UCPRp, 0, [_St, _Ar, _RI], [1, 0, 0]);
export var CustomPermissionsList = list(n0, _CPL, 0, () => CustomPermissions);
export var CreateCustomPermissions = op(
  n0,
  _CCPr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/custom-permissions", 200],
  },
  () => CreateCustomPermissionsRequest,
  () => CreateCustomPermissionsResponse
);
export var DeleteCustomPermissions = op(
  n0,
  _DCPe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}", 200],
  },
  () => DeleteCustomPermissionsRequest,
  () => DeleteCustomPermissionsResponse
);
export var DescribeAccountCustomPermission = op(
  n0,
  _DACPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/custom-permission", 200],
  },
  () => DescribeAccountCustomPermissionRequest,
  () => DescribeAccountCustomPermissionResponse
);
export var DescribeCustomPermissions = op(
  n0,
  _DCPes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}", 200],
  },
  () => DescribeCustomPermissionsRequest,
  () => DescribeCustomPermissionsResponse
);
export var ListCustomPermissions = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/custom-permissions", 200],
  },
  () => ListCustomPermissionsRequest,
  () => ListCustomPermissionsResponse
);
export var UpdateAccountCustomPermission = op(
  n0,
  _UACP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/custom-permission", 200],
  },
  () => UpdateAccountCustomPermissionRequest,
  () => UpdateAccountCustomPermissionResponse
);
export var UpdateCustomPermissions = op(
  n0,
  _UCPp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}", 200],
  },
  () => UpdateCustomPermissionsRequest,
  () => UpdateCustomPermissionsResponse
);
