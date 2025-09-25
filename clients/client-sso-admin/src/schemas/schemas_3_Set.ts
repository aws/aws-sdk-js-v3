// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CD, _D, _DPSe, _DPSRes, _DPSResc, _IA, _N, _PS, _PSA, _RS, _SD, _UPS, _UPSR, _UPSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePermissionSetRequest = struct(n0, _DPSRes, 0, [_IA, _PSA], [0, 0]);
export var DescribePermissionSetResponse = struct(n0, _DPSResc, 0, [_PS], [() => PermissionSet]);
export var PermissionSet = struct(n0, _PS, 0, [_N, _PSA, _D, _CD, _SD, _RS], [0, 0, 0, 4, 0, 0]);
export var UpdatePermissionSetRequest = struct(n0, _UPSR, 0, [_IA, _PSA, _D, _SD, _RS], [0, 0, 0, 0, 0]);
export var UpdatePermissionSetResponse = struct(n0, _UPSRp, 0, [], []);
export var DescribePermissionSet = op(
  n0,
  _DPSe,
  0,
  () => DescribePermissionSetRequest,
  () => DescribePermissionSetResponse
);
export var UpdatePermissionSet = op(
  n0,
  _UPS,
  0,
  () => UpdatePermissionSetRequest,
  () => UpdatePermissionSetResponse
);
