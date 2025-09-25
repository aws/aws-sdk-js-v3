// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CLFL,
  _CLFLR,
  _CLFLRr,
  _CT,
  _D,
  _DLFL,
  _DLFLR,
  _DLFLRe,
  _DLFW,
  _DLFWR,
  _DLFWRe,
  _FFA,
  _LA,
  _LU,
  _SGA,
  _Su,
  _Ta,
  _U,
  InputTagList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLocationFsxLustreRequest = struct(
  n0,
  _CLFLR,
  0,
  [_FFA, _SGA, _Su, _Ta],
  [0, 64 | 0, 0, () => InputTagList]
);
export var CreateLocationFsxLustreResponse = struct(n0, _CLFLRr, 0, [_LA], [0]);
export var DescribeLocationFsxLustreRequest = struct(n0, _DLFLR, 0, [_LA], [0]);
export var DescribeLocationFsxLustreResponse = struct(n0, _DLFLRe, 0, [_LA, _LU, _SGA, _CT], [0, 0, 64 | 0, 4]);
export var DescribeLocationFsxWindowsRequest = struct(n0, _DLFWR, 0, [_LA], [0]);
export var DescribeLocationFsxWindowsResponse = struct(
  n0,
  _DLFWRe,
  0,
  [_LA, _LU, _SGA, _CT, _U, _D],
  [0, 0, 64 | 0, 4, 0, 0]
);
export var Ec2SecurityGroupArnList = 64 | 0;

export var CreateLocationFsxLustre = op(
  n0,
  _CLFL,
  0,
  () => CreateLocationFsxLustreRequest,
  () => CreateLocationFsxLustreResponse
);
export var DescribeLocationFsxLustre = op(
  n0,
  _DLFL,
  0,
  () => DescribeLocationFsxLustreRequest,
  () => DescribeLocationFsxLustreResponse
);
export var DescribeLocationFsxWindows = op(
  n0,
  _DLFW,
  0,
  () => DescribeLocationFsxWindowsRequest,
  () => DescribeLocationFsxWindowsResponse
);
