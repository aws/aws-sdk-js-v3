const _ADE = "AccessDeniedException";
const _C = "Capacity";
const _CL = "CapacityList";
const _CO = "CpuOptions";
const _CT = "CancelTask";
const _CTI = "CancelTaskInput";
const _CTIr = "CreateTaskInput";
const _CTO = "CancelTaskOutput";
const _CTOr = "CreateTaskOutput";
const _CTr = "CreateTask";
const _Co = "Command";
const _DD = "DescribeDevice";
const _DDEI = "DescribeDeviceEc2Input";
const _DDEIe = "DescribeDeviceEc2Instances";
const _DDEO = "DescribeDeviceEc2Output";
const _DDI = "DescribeDeviceInput";
const _DDO = "DescribeDeviceOutput";
const _DE = "DescribeExecution";
const _DEI = "DescribeExecutionInput";
const _DEO = "DescribeExecutionOutput";
const _DS = "DeviceSummary";
const _DSL = "DeviceSummaryList";
const _DT = "DescribeTask";
const _DTI = "DescribeTaskInput";
const _DTO = "DescribeTaskOutput";
const _EIBD = "EbsInstanceBlockDevice";
const _ES = "ExecutionSummary";
const _ESL = "ExecutionSummaryList";
const _I = "Instance";
const _IBDM = "InstanceBlockDeviceMapping";
const _IBDML = "InstanceBlockDeviceMappingList";
const _IS = "InstanceState";
const _ISE = "InternalServerException";
const _ISL = "InstanceSummaryList";
const _ISn = "InstanceSummary";
const _LD = "ListDevices";
const _LDI = "ListDevicesInput";
const _LDO = "ListDevicesOutput";
const _LDR = "ListDeviceResources";
const _LDRI = "ListDeviceResourcesInput";
const _LDRO = "ListDeviceResourcesOutput";
const _LE = "ListExecutions";
const _LEI = "ListExecutionsInput";
const _LEO = "ListExecutionsOutput";
const _LT = "ListTasks";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _LTI = "ListTasksInput";
const _LTO = "ListTasksOutput";
const _PNI = "PhysicalNetworkInterface";
const _PNIL = "PhysicalNetworkInterfaceList";
const _R = "Reboot";
const _RNFE = "ResourceNotFoundException";
const _RS = "ResourceSummary";
const _RSL = "ResourceSummaryList";
const _SGI = "SecurityGroupIdentifier";
const _SGIL = "SecurityGroupIdentifierList";
const _SI = "SoftwareInformation";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TS = "TaskSummary";
const _TSL = "TaskSummaryList";
const _U = "Unlock";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _VE = "ValidationException";
const _a = "available";
const _aLI = "amiLaunchIndex";
const _aT = "attachTime";
const _aWJ = "associatedWithJob";
const _ar = "arn";
const _bDM = "blockDeviceMappings";
const _c = "client";
const _cA = "createdAt";
const _cAo = "completedAt";
const _cC = "coreCount";
const _cO = "cpuOptions";
const _cT = "clientToken";
const _co = "command";
const _cod = "code";
const _d = "description";
const _dC = "deviceCapacities";
const _dG = "defaultGateway";
const _dN = "deviceName";
const _dOT = "deleteOnTermination";
const _dS = "deviceState";
const _dT = "deviceType";
const _de = "devices";
const _e = "error";
const _eI = "executionId";
const _eb = "ebs";
const _ex = "executions";
const _gI = "groupId";
const _gN = "groupName";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "instances";
const _iA = "ipAddress";
const _iAA = "ipAddressAssignment";
const _iI = "instanceIds";
const _iIm = "imageId";
const _iIn = "instanceId";
const _iS = "installState";
const _iT = "instanceType";
const _iV = "installedVersion";
const _iVn = "installingVersion";
const _id = "id";
const _in = "instance";
const _jI = "jobId";
const _lROA = "lastReachedOutAt";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mA = "macAddress";
const _mDA = "managedDeviceArn";
const _mDI = "managedDeviceId";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _ne = "netmask";
const _pCT = "physicalConnectorType";
const _pIA = "privateIpAddress";
const _pIAu = "publicIpAddress";
const _pNI = "physicalNetworkInterfaces";
const _pNII = "physicalNetworkInterfaceId";
const _r = "resources";
const _rA = "resourceArn";
const _rDN = "rootDeviceName";
const _rT = "resourceType";
const _re = "reboot";
const _s = "software";
const _sA = "startedAt";
const _sG = "securityGroups";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.snowdevicemanagement";
const _st = "state";
const _sta = "status";
const _t = "total";
const _tA = "taskArn";
const _tI = "taskId";
const _tK = "tagKeys";
const _tPC = "threadsPerCore";
const _ta = "targets";
const _tag = "tags";
const _tas = "tasks";
const _ty = "type";
const _u = "unit";
const _uA = "updatedAt";
const _un = "unlock";
const _us = "used";
const _vI = "volumeId";
const n0 = "com.amazonaws.snowdevicemanagement";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SnowDeviceManagementServiceException } from "../models/SnowDeviceManagementServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var CancelTaskInput$: StaticStructureSchema = [3, n0, _CTI, 0, [_tI], [[0, 1]]];
export var CancelTaskOutput$: StaticStructureSchema = [3, n0, _CTO, 0, [_tI], [0]];
export var Capacity$: StaticStructureSchema = [3, n0, _C, 0, [_n, _u, _t, _us, _a], [0, 0, 1, 1, 1]];
export var CpuOptions$: StaticStructureSchema = [3, n0, _CO, 0, [_cC, _tPC], [1, 1]];
export var CreateTaskInput$: StaticStructureSchema = [
  3,
  n0,
  _CTIr,
  0,
  [_ta, _co, _d, _tag, _cT],
  [64 | 0, () => Command$, 0, 128 | 0, [0, 4]],
];
export var CreateTaskOutput$: StaticStructureSchema = [3, n0, _CTOr, 0, [_tI, _tA], [0, 0]];
export var DescribeDeviceEc2Input$: StaticStructureSchema = [3, n0, _DDEI, 0, [_mDI, _iI], [[0, 1], 64 | 0]];
export var DescribeDeviceEc2Output$: StaticStructureSchema = [3, n0, _DDEO, 0, [_i], [() => InstanceSummaryList]];
export var DescribeDeviceInput$: StaticStructureSchema = [3, n0, _DDI, 0, [_mDI], [[0, 1]]];
export var DescribeDeviceOutput$: StaticStructureSchema = [
  3,
  n0,
  _DDO,
  0,
  [_lROA, _lUA, _tag, _mDI, _mDA, _dT, _aWJ, _dS, _pNI, _dC, _s],
  [4, 4, 128 | 0, 0, 0, 0, 0, 0, () => PhysicalNetworkInterfaceList, () => CapacityList, () => SoftwareInformation$],
];
export var DescribeExecutionInput$: StaticStructureSchema = [
  3,
  n0,
  _DEI,
  0,
  [_tI, _mDI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DescribeExecutionOutput$: StaticStructureSchema = [
  3,
  n0,
  _DEO,
  0,
  [_tI, _eI, _mDI, _st, _sA, _lUA],
  [0, 0, 0, 0, 4, 4],
];
export var DescribeTaskInput$: StaticStructureSchema = [3, n0, _DTI, 0, [_tI], [[0, 1]]];
export var DescribeTaskOutput$: StaticStructureSchema = [
  3,
  n0,
  _DTO,
  0,
  [_tI, _tA, _ta, _st, _cA, _lUA, _cAo, _d, _tag],
  [0, 0, 64 | 0, 0, 4, 4, 4, 0, 128 | 0],
];
export var DeviceSummary$: StaticStructureSchema = [3, n0, _DS, 0, [_mDI, _mDA, _aWJ, _tag], [0, 0, 0, 128 | 0]];
export var EbsInstanceBlockDevice$: StaticStructureSchema = [3, n0, _EIBD, 0, [_aT, _dOT, _sta, _vI], [4, 2, 0, 0]];
export var ExecutionSummary$: StaticStructureSchema = [3, n0, _ES, 0, [_tI, _eI, _mDI, _st], [0, 0, 0, 0]];
export var Instance$: StaticStructureSchema = [
  3,
  n0,
  _I,
  0,
  [_iIm, _aLI, _iIn, _st, _iT, _pIA, _pIAu, _cA, _uA, _bDM, _sG, _cO, _rDN],
  [
    0,
    1,
    0,
    () => InstanceState$,
    0,
    0,
    0,
    4,
    4,
    () => InstanceBlockDeviceMappingList,
    () => SecurityGroupIdentifierList,
    () => CpuOptions$,
    0,
  ],
];
export var InstanceBlockDeviceMapping$: StaticStructureSchema = [
  3,
  n0,
  _IBDM,
  0,
  [_dN, _eb],
  [0, () => EbsInstanceBlockDevice$],
];
export var InstanceState$: StaticStructureSchema = [3, n0, _IS, 0, [_cod, _n], [1, 0]];
export var InstanceSummary$: StaticStructureSchema = [3, n0, _ISn, 0, [_in, _lUA], [() => Instance$, 4]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListDeviceResourcesInput$: StaticStructureSchema = [
  3,
  n0,
  _LDRI,
  0,
  [_mDI, _ty, _mR, _nT],
  [
    [0, 1],
    [0, { [_hQ]: _ty }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListDeviceResourcesOutput$: StaticStructureSchema = [
  3,
  n0,
  _LDRO,
  0,
  [_r, _nT],
  [() => ResourceSummaryList, 0],
];
export var ListDevicesInput$: StaticStructureSchema = [
  3,
  n0,
  _LDI,
  0,
  [_jI, _mR, _nT],
  [
    [0, { [_hQ]: _jI }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListDevicesOutput$: StaticStructureSchema = [3, n0, _LDO, 0, [_de, _nT], [() => DeviceSummaryList, 0]];
export var ListExecutionsInput$: StaticStructureSchema = [
  3,
  n0,
  _LEI,
  0,
  [_tI, _st, _mR, _nT],
  [
    [0, { [_hQ]: _tI }],
    [0, { [_hQ]: _st }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListExecutionsOutput$: StaticStructureSchema = [3, n0, _LEO, 0, [_ex, _nT], [() => ExecutionSummaryList, 0]];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO, 0, [_tag], [128 | 0]];
export var ListTasksInput$: StaticStructureSchema = [
  3,
  n0,
  _LTI,
  0,
  [_st, _mR, _nT],
  [
    [0, { [_hQ]: _st }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListTasksOutput$: StaticStructureSchema = [3, n0, _LTO, 0, [_tas, _nT], [() => TaskSummaryList, 0]];
export var PhysicalNetworkInterface$: StaticStructureSchema = [
  3,
  n0,
  _PNI,
  0,
  [_pNII, _pCT, _iAA, _iA, _ne, _dG, _mA],
  [0, 0, 0, 0, 0, 0, 0],
];
export var Reboot$: StaticStructureSchema = [3, n0, _R, 0, [], []];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ResourceSummary$: StaticStructureSchema = [3, n0, _RS, 0, [_rT, _ar, _id], [0, 0, 0]];
export var SecurityGroupIdentifier$: StaticStructureSchema = [3, n0, _SGI, 0, [_gI, _gN], [0, 0]];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SoftwareInformation$: StaticStructureSchema = [3, n0, _SI, 0, [_iV, _iVn, _iS], [0, 0, 0]];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI, 0, [_rA, _tag], [[0, 1], 128 | 0]];
export var TaskSummary$: StaticStructureSchema = [3, n0, _TS, 0, [_tI, _tA, _st, _tag], [0, 0, 0, 128 | 0]];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var Unlock$: StaticStructureSchema = [3, n0, _U, 0, [], []];
export var UntagResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
var __Unit = "unit" as const;
export var SnowDeviceManagementServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "SnowDeviceManagementServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(SnowDeviceManagementServiceException$, SnowDeviceManagementServiceException);
var CapacityList: StaticListSchema = [1, n0, _CL, 0, () => Capacity$];
var DeviceSummaryList: StaticListSchema = [1, n0, _DSL, 0, () => DeviceSummary$];
var ExecutionSummaryList: StaticListSchema = [1, n0, _ESL, 0, () => ExecutionSummary$];
var InstanceBlockDeviceMappingList: StaticListSchema = [1, n0, _IBDML, 0, () => InstanceBlockDeviceMapping$];
var InstanceIdsList = 64 | 0;
var InstanceSummaryList: StaticListSchema = [1, n0, _ISL, 0, () => InstanceSummary$];
var PhysicalNetworkInterfaceList: StaticListSchema = [1, n0, _PNIL, 0, () => PhysicalNetworkInterface$];
var ResourceSummaryList: StaticListSchema = [1, n0, _RSL, 0, () => ResourceSummary$];
var SecurityGroupIdentifierList: StaticListSchema = [1, n0, _SGIL, 0, () => SecurityGroupIdentifier$];
var TagKeys = 64 | 0;
var TargetList = 64 | 0;
var TaskSummaryList: StaticListSchema = [1, n0, _TSL, 0, () => TaskSummary$];
var TagMap = 128 | 0;
export var Command$: StaticUnionSchema = [4, n0, _Co, 0, [_un, _re], [() => Unlock$, () => Reboot$]];
export var CancelTask$: StaticOperationSchema = [
  9,
  n0,
  _CT,
  { [_h]: ["POST", "/task/{taskId}/cancel", 200] },
  () => CancelTaskInput$,
  () => CancelTaskOutput$,
];
export var CreateTask$: StaticOperationSchema = [
  9,
  n0,
  _CTr,
  { [_h]: ["POST", "/task", 200] },
  () => CreateTaskInput$,
  () => CreateTaskOutput$,
];
export var DescribeDevice$: StaticOperationSchema = [
  9,
  n0,
  _DD,
  { [_h]: ["POST", "/managed-device/{managedDeviceId}/describe", 200] },
  () => DescribeDeviceInput$,
  () => DescribeDeviceOutput$,
];
export var DescribeDeviceEc2Instances$: StaticOperationSchema = [
  9,
  n0,
  _DDEIe,
  { [_h]: ["POST", "/managed-device/{managedDeviceId}/resources/ec2/describe", 200] },
  () => DescribeDeviceEc2Input$,
  () => DescribeDeviceEc2Output$,
];
export var DescribeExecution$: StaticOperationSchema = [
  9,
  n0,
  _DE,
  { [_h]: ["POST", "/task/{taskId}/execution/{managedDeviceId}", 200] },
  () => DescribeExecutionInput$,
  () => DescribeExecutionOutput$,
];
export var DescribeTask$: StaticOperationSchema = [
  9,
  n0,
  _DT,
  { [_h]: ["POST", "/task/{taskId}", 200] },
  () => DescribeTaskInput$,
  () => DescribeTaskOutput$,
];
export var ListDeviceResources$: StaticOperationSchema = [
  9,
  n0,
  _LDR,
  { [_h]: ["GET", "/managed-device/{managedDeviceId}/resources", 200] },
  () => ListDeviceResourcesInput$,
  () => ListDeviceResourcesOutput$,
];
export var ListDevices$: StaticOperationSchema = [
  9,
  n0,
  _LD,
  { [_h]: ["GET", "/managed-devices", 200] },
  () => ListDevicesInput$,
  () => ListDevicesOutput$,
];
export var ListExecutions$: StaticOperationSchema = [
  9,
  n0,
  _LE,
  { [_h]: ["GET", "/executions", 200] },
  () => ListExecutionsInput$,
  () => ListExecutionsOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceInput$,
  () => ListTagsForResourceOutput$,
];
export var ListTasks$: StaticOperationSchema = [
  9,
  n0,
  _LT,
  { [_h]: ["GET", "/tasks", 200] },
  () => ListTasksInput$,
  () => ListTasksOutput$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceInput$,
  () => __Unit,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceInput$,
  () => __Unit,
];
