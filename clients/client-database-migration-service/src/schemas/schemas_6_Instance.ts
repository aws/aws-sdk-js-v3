// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _CIP,
  _CIPM,
  _CIPR,
  _De,
  _DIP,
  _DIPe,
  _DIPM,
  _DIPMe,
  _DIPR,
  _DIPRe,
  _F,
  _IP,
  _IPA,
  _IPCT,
  _IPI,
  _IPL,
  _IPN,
  _IPn,
  _KKA,
  _Ma,
  _MIP,
  _MIPM,
  _MIPR,
  _MR,
  _NT,
  _PA,
  _SGI,
  _T,
  _VSG,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInstanceProfileMessage = struct(
  n0,
  _CIPM,
  0,
  [_AZ, _KKA, _PA, _T, _NT, _IPN, _De, _SGI, _VSG],
  [0, 0, 2, [() => TagList, 0], 0, 0, 0, 0, 64 | 0]
);
export var CreateInstanceProfileResponse = struct(n0, _CIPR, 0, [_IP], [() => InstanceProfile]);
export var DeleteInstanceProfileMessage = struct(n0, _DIPM, 0, [_IPI], [0]);
export var DeleteInstanceProfileResponse = struct(n0, _DIPR, 0, [_IP], [() => InstanceProfile]);
export var DescribeInstanceProfilesMessage = struct(n0, _DIPMe, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeInstanceProfilesResponse = struct(n0, _DIPRe, 0, [_Ma, _IPn], [0, [() => InstanceProfileList, 0]]);
export var InstanceProfile = struct(
  n0,
  _IP,
  0,
  [_IPA, _AZ, _KKA, _PA, _NT, _IPN, _De, _IPCT, _SGI, _VSG],
  [0, 0, 0, 2, 0, 0, 0, 5, 0, 64 | 0]
);
export var ModifyInstanceProfileMessage = struct(
  n0,
  _MIPM,
  0,
  [_IPI, _AZ, _KKA, _PA, _NT, _IPN, _De, _SGI, _VSG],
  [0, 0, 0, 2, 0, 0, 0, 0, 64 | 0]
);
export var ModifyInstanceProfileResponse = struct(n0, _MIPR, 0, [_IP], [() => InstanceProfile]);
export var InstanceProfileList = list(n0, _IPL, 0, [
  () => InstanceProfile,
  {
    [_xN]: _IP,
  },
]);
export var CreateInstanceProfile = op(
  n0,
  _CIP,
  0,
  () => CreateInstanceProfileMessage,
  () => CreateInstanceProfileResponse
);
export var DeleteInstanceProfile = op(
  n0,
  _DIP,
  0,
  () => DeleteInstanceProfileMessage,
  () => DeleteInstanceProfileResponse
);
export var DescribeInstanceProfiles = op(
  n0,
  _DIPe,
  0,
  () => DescribeInstanceProfilesMessage,
  () => DescribeInstanceProfilesResponse
);
export var ModifyInstanceProfile = op(
  n0,
  _MIP,
  0,
  () => ModifyInstanceProfileMessage,
  () => ModifyInstanceProfileResponse
);
