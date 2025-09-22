// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASUC,
  _BI,
  _CNCC,
  _DIPS,
  _DIPSR,
  _DIPSRe,
  _FC,
  _IC,
  _II,
  _IIn,
  _IOC,
  _IOL,
  _IPRC,
  _IPS,
  _IPSL,
  _IPSn,
  _IRC,
  _LNRIOT,
  _MCi,
  _MR,
  _NAC,
  _NT,
  _OET,
  _OI,
  _ONCC,
  _Op,
  _OST,
  _PG,
  _ROe,
  _SIn,
  _SNCC,
  _UNAC,
  n0,
} from "./schemas_0";
import { OwnerInformation } from "./schemas_44_Window";

/* eslint no-var: 0 */

export var DescribeInstancePatchStatesRequest = struct(n0, _DIPSR, 0, [_IIn, _NT, _MR], [64 | 0, 0, 1]);
export var DescribeInstancePatchStatesResult = struct(
  n0,
  _DIPSRe,
  0,
  [_IPS, _NT],
  [[() => InstancePatchStateList, 0], 0]
);
export var InstancePatchState = struct(
  n0,
  _IPSn,
  0,
  [
    _II,
    _PG,
    _BI,
    _SIn,
    _IOL,
    _OI,
    _IC,
    _IOC,
    _IPRC,
    _IRC,
    _MCi,
    _FC,
    _UNAC,
    _NAC,
    _ASUC,
    _OST,
    _OET,
    _Op,
    _LNRIOT,
    _ROe,
    _CNCC,
    _SNCC,
    _ONCC,
  ],
  [0, 0, 0, 0, 0, [() => OwnerInformation, 0], 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 0, 4, 0, 1, 1, 1]
);
export var InstancePatchStateList = list(n0, _IPSL, 0, [() => InstancePatchState, 0]);
export var DescribeInstancePatchStates = op(
  n0,
  _DIPS,
  0,
  () => DescribeInstancePatchStatesRequest,
  () => DescribeInstancePatchStatesResult
);
