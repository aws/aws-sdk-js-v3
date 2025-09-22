// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _a,
  _aLI,
  _ar,
  _aT,
  _aWJ,
  _bDM,
  _C,
  _c,
  _cA,
  _cAo,
  _cC,
  _CL,
  _CO,
  _Co,
  _cO,
  _co,
  _cod,
  _CT,
  _cT,
  _CTI,
  _CTIr,
  _CTO,
  _CTOr,
  _CTr,
  _d,
  _dC,
  _DD,
  _DDEI,
  _DDEIe,
  _DDEO,
  _DDI,
  _DDO,
  _DE,
  _DEI,
  _DEO,
  _dG,
  _dN,
  _dOT,
  _dS,
  _DT,
  _dT,
  _DTI,
  _DTO,
  _e,
  _eb,
  _eI,
  _EIBD,
  _ES,
  _ESL,
  _ex,
  _gI,
  _gN,
  _h,
  _hE,
  _hQ,
  _I,
  _i,
  _iA,
  _iAA,
  _IBDM,
  _IBDML,
  _id,
  _iI,
  _iIm,
  _iIn,
  _in,
  _IS,
  _iS,
  _ISL,
  _ISn,
  _iT,
  _iV,
  _iVn,
  _LDR,
  _LDRI,
  _LDRO,
  _LE,
  _LEI,
  _LEO,
  _lROA,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _lUA,
  _m,
  _mA,
  _mDA,
  _mDI,
  _mR,
  _n,
  _ne,
  _nT,
  _pCT,
  _pIA,
  _pIAu,
  _PNI,
  _pNI,
  _pNII,
  _PNIL,
  _R,
  _r,
  _rA,
  _rDN,
  _re,
  _RNFE,
  _RS,
  _RSL,
  _rT,
  _s,
  _sA,
  _sG,
  _SGI,
  _SGIL,
  _SI,
  _SQEE,
  _st,
  _sta,
  _t,
  _tA,
  _ta,
  _tag,
  _tI,
  _tK,
  _tPC,
  _TR,
  _TRI,
  _ty,
  _U,
  _u,
  _uA,
  _un,
  _UR,
  _URI,
  _us,
  _vI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelTaskInput = struct(n0, _CTI, 0, [_tI], [[0, 1]]);
export var CancelTaskOutput = struct(n0, _CTO, 0, [_tI], [0]);
export var Capacity = struct(n0, _C, 0, [_n, _u, _t, _us, _a], [0, 0, 1, 1, 1]);
export var CpuOptions = struct(n0, _CO, 0, [_cC, _tPC], [1, 1]);
export var CreateTaskInput = struct(
  n0,
  _CTIr,
  0,
  [_ta, _co, _d, _tag, _cT],
  [64 | 0, () => Command, 0, 128 | 0, [0, 4]]
);
export var CreateTaskOutput = struct(n0, _CTOr, 0, [_tI, _tA], [0, 0]);
export var DescribeDeviceEc2Input = struct(n0, _DDEI, 0, [_mDI, _iI], [[0, 1], 64 | 0]);
export var DescribeDeviceEc2Output = struct(n0, _DDEO, 0, [_i], [() => InstanceSummaryList]);
export var DescribeDeviceInput = struct(n0, _DDI, 0, [_mDI], [[0, 1]]);
export var DescribeDeviceOutput = struct(
  n0,
  _DDO,
  0,
  [_lROA, _lUA, _tag, _mDI, _mDA, _dT, _aWJ, _dS, _pNI, _dC, _s],
  [4, 4, 128 | 0, 0, 0, 0, 0, 0, () => PhysicalNetworkInterfaceList, () => CapacityList, () => SoftwareInformation]
);
export var DescribeExecutionInput = struct(
  n0,
  _DEI,
  0,
  [_tI, _mDI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeExecutionOutput = struct(n0, _DEO, 0, [_tI, _eI, _mDI, _st, _sA, _lUA], [0, 0, 0, 0, 4, 4]);
export var DescribeTaskInput = struct(n0, _DTI, 0, [_tI], [[0, 1]]);
export var DescribeTaskOutput = struct(
  n0,
  _DTO,
  0,
  [_tI, _tA, _ta, _st, _cA, _lUA, _cAo, _d, _tag],
  [0, 0, 64 | 0, 0, 4, 4, 4, 0, 128 | 0]
);
export var EbsInstanceBlockDevice = struct(n0, _EIBD, 0, [_aT, _dOT, _sta, _vI], [4, 2, 0, 0]);
export var ExecutionSummary = struct(n0, _ES, 0, [_tI, _eI, _mDI, _st], [0, 0, 0, 0]);
export var Instance = struct(
  n0,
  _I,
  0,
  [_iIm, _aLI, _iIn, _st, _iT, _pIA, _pIAu, _cA, _uA, _bDM, _sG, _cO, _rDN],
  [
    0,
    1,
    0,
    () => InstanceState,
    0,
    0,
    0,
    4,
    4,
    () => InstanceBlockDeviceMappingList,
    () => SecurityGroupIdentifierList,
    () => CpuOptions,
    0,
  ]
);
export var InstanceBlockDeviceMapping = struct(n0, _IBDM, 0, [_dN, _eb], [0, () => EbsInstanceBlockDevice]);
export var InstanceState = struct(n0, _IS, 0, [_cod, _n], [1, 0]);
export var InstanceSummary = struct(n0, _ISn, 0, [_in, _lUA], [() => Instance, 4]);
export var ListDeviceResourcesInput = struct(
  n0,
  _LDRI,
  0,
  [_mDI, _ty, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
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
  ]
);
export var ListDeviceResourcesOutput = struct(n0, _LDRO, 0, [_r, _nT], [() => ResourceSummaryList, 0]);
export var ListExecutionsInput = struct(
  n0,
  _LEI,
  0,
  [_tI, _st, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
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
  ]
);
export var ListExecutionsOutput = struct(n0, _LEO, 0, [_ex, _nT], [() => ExecutionSummaryList, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_tag], [128 | 0]);
export var PhysicalNetworkInterface = struct(
  n0,
  _PNI,
  0,
  [_pNII, _pCT, _iAA, _iA, _ne, _dG, _mA],
  [0, 0, 0, 0, 0, 0, 0]
);
export var Reboot = struct(n0, _R, 0, [], []);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ResourceSummary = struct(n0, _RS, 0, [_rT, _ar, _id], [0, 0, 0]);
export var SecurityGroupIdentifier = struct(n0, _SGI, 0, [_gI, _gN], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var SoftwareInformation = struct(n0, _SI, 0, [_iV, _iVn, _iS], [0, 0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _tag], [[0, 1], 128 | 0]);
export var Unlock = struct(n0, _U, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var CapacityList = list(n0, _CL, 0, () => Capacity);
export var ExecutionSummaryList = list(n0, _ESL, 0, () => ExecutionSummary);
export var InstanceBlockDeviceMappingList = list(n0, _IBDML, 0, () => InstanceBlockDeviceMapping);
export var InstanceIdsList = 64 | 0;

export var InstanceSummaryList = list(n0, _ISL, 0, () => InstanceSummary);
export var PhysicalNetworkInterfaceList = list(n0, _PNIL, 0, () => PhysicalNetworkInterface);
export var ResourceSummaryList = list(n0, _RSL, 0, () => ResourceSummary);
export var SecurityGroupIdentifierList = list(n0, _SGIL, 0, () => SecurityGroupIdentifier);
export var TagKeys = 64 | 0;

export var TargetList = 64 | 0;

export var Command = uni(n0, _Co, 0, [_un, _re], [() => Unlock, () => Reboot]);
export var CancelTask = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/task/{taskId}/cancel", 200],
  },
  () => CancelTaskInput,
  () => CancelTaskOutput
);
export var CreateTask = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/task", 200],
  },
  () => CreateTaskInput,
  () => CreateTaskOutput
);
export var DescribeDevice = op(
  n0,
  _DD,
  {
    [_h]: ["POST", "/managed-device/{managedDeviceId}/describe", 200],
  },
  () => DescribeDeviceInput,
  () => DescribeDeviceOutput
);
export var DescribeDeviceEc2Instances = op(
  n0,
  _DDEIe,
  {
    [_h]: ["POST", "/managed-device/{managedDeviceId}/resources/ec2/describe", 200],
  },
  () => DescribeDeviceEc2Input,
  () => DescribeDeviceEc2Output
);
export var DescribeExecution = op(
  n0,
  _DE,
  {
    [_h]: ["POST", "/task/{taskId}/execution/{managedDeviceId}", 200],
  },
  () => DescribeExecutionInput,
  () => DescribeExecutionOutput
);
export var DescribeTask = op(
  n0,
  _DT,
  {
    [_h]: ["POST", "/task/{taskId}", 200],
  },
  () => DescribeTaskInput,
  () => DescribeTaskOutput
);
export var ListDeviceResources = op(
  n0,
  _LDR,
  {
    [_h]: ["GET", "/managed-device/{managedDeviceId}/resources", 200],
  },
  () => ListDeviceResourcesInput,
  () => ListDeviceResourcesOutput
);
export var ListExecutions = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/executions", 200],
  },
  () => ListExecutionsInput,
  () => ListExecutionsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => Unit
);
