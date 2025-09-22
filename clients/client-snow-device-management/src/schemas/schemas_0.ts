export const _ADE = "AccessDeniedException";
export const _C = "Capacity";
export const _CL = "CapacityList";
export const _CO = "CpuOptions";
export const _CT = "CancelTask";
export const _CTI = "CancelTaskInput";
export const _CTIr = "CreateTaskInput";
export const _CTO = "CancelTaskOutput";
export const _CTOr = "CreateTaskOutput";
export const _CTr = "CreateTask";
export const _Co = "Command";
export const _DD = "DescribeDevice";
export const _DDEI = "DescribeDeviceEc2Input";
export const _DDEIe = "DescribeDeviceEc2Instances";
export const _DDEO = "DescribeDeviceEc2Output";
export const _DDI = "DescribeDeviceInput";
export const _DDO = "DescribeDeviceOutput";
export const _DE = "DescribeExecution";
export const _DEI = "DescribeExecutionInput";
export const _DEO = "DescribeExecutionOutput";
export const _DS = "DeviceSummary";
export const _DSL = "DeviceSummaryList";
export const _DT = "DescribeTask";
export const _DTI = "DescribeTaskInput";
export const _DTO = "DescribeTaskOutput";
export const _EIBD = "EbsInstanceBlockDevice";
export const _ES = "ExecutionSummary";
export const _ESL = "ExecutionSummaryList";
export const _I = "Instance";
export const _IBDM = "InstanceBlockDeviceMapping";
export const _IBDML = "InstanceBlockDeviceMappingList";
export const _IS = "InstanceState";
export const _ISE = "InternalServerException";
export const _ISL = "InstanceSummaryList";
export const _ISn = "InstanceSummary";
export const _LD = "ListDevices";
export const _LDI = "ListDevicesInput";
export const _LDO = "ListDevicesOutput";
export const _LDR = "ListDeviceResources";
export const _LDRI = "ListDeviceResourcesInput";
export const _LDRO = "ListDeviceResourcesOutput";
export const _LE = "ListExecutions";
export const _LEI = "ListExecutionsInput";
export const _LEO = "ListExecutionsOutput";
export const _LT = "ListTasks";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _LTI = "ListTasksInput";
export const _LTO = "ListTasksOutput";
export const _PNI = "PhysicalNetworkInterface";
export const _PNIL = "PhysicalNetworkInterfaceList";
export const _R = "Reboot";
export const _RNFE = "ResourceNotFoundException";
export const _RS = "ResourceSummary";
export const _RSL = "ResourceSummaryList";
export const _SGI = "SecurityGroupIdentifier";
export const _SGIL = "SecurityGroupIdentifierList";
export const _SI = "SoftwareInformation";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TS = "TaskSummary";
export const _TSL = "TaskSummaryList";
export const _U = "Unlock";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _VE = "ValidationException";
export const _a = "available";
export const _aLI = "amiLaunchIndex";
export const _aT = "attachTime";
export const _aWJ = "associatedWithJob";
export const _ar = "arn";
export const _bDM = "blockDeviceMappings";
export const _c = "client";
export const _cA = "createdAt";
export const _cAo = "completedAt";
export const _cC = "coreCount";
export const _cO = "cpuOptions";
export const _cT = "clientToken";
export const _co = "command";
export const _cod = "code";
export const _d = "description";
export const _dC = "deviceCapacities";
export const _dG = "defaultGateway";
export const _dN = "deviceName";
export const _dOT = "deleteOnTermination";
export const _dS = "deviceState";
export const _dT = "deviceType";
export const _de = "devices";
export const _e = "error";
export const _eI = "executionId";
export const _eb = "ebs";
export const _ex = "executions";
export const _gI = "groupId";
export const _gN = "groupName";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _i = "instances";
export const _iA = "ipAddress";
export const _iAA = "ipAddressAssignment";
export const _iI = "instanceIds";
export const _iIm = "imageId";
export const _iIn = "instanceId";
export const _iS = "installState";
export const _iT = "instanceType";
export const _iV = "installedVersion";
export const _iVn = "installingVersion";
export const _id = "id";
export const _in = "instance";
export const _jI = "jobId";
export const _lROA = "lastReachedOutAt";
export const _lUA = "lastUpdatedAt";
export const _m = "message";
export const _mA = "macAddress";
export const _mDA = "managedDeviceArn";
export const _mDI = "managedDeviceId";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _ne = "netmask";
export const _pCT = "physicalConnectorType";
export const _pIA = "privateIpAddress";
export const _pIAu = "publicIpAddress";
export const _pNI = "physicalNetworkInterfaces";
export const _pNII = "physicalNetworkInterfaceId";
export const _r = "resources";
export const _rA = "resourceArn";
export const _rDN = "rootDeviceName";
export const _rT = "resourceType";
export const _re = "reboot";
export const _s = "software";
export const _sA = "startedAt";
export const _sG = "securityGroups";
export const _se = "server";
export const _st = "state";
export const _sta = "status";
export const _t = "total";
export const _tA = "taskArn";
export const _tI = "taskId";
export const _tK = "tagKeys";
export const _tPC = "threadsPerCore";
export const _ta = "targets";
export const _tag = "tags";
export const _tas = "tasks";
export const _ty = "type";
export const _u = "unit";
export const _uA = "updatedAt";
export const _un = "unlock";
export const _us = "used";
export const _vI = "volumeId";
export const n0 = "com.amazonaws.snowdevicemanagement";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ValidationException as __ValidationException,
} from "../models/index";
import { SnowDeviceManagementServiceException as __SnowDeviceManagementServiceException } from "../models/SnowDeviceManagementServiceException";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var SnowDeviceManagementServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.snowdevicemanagement",
  "SnowDeviceManagementServiceException",
  0,
  [],
  [],
  __SnowDeviceManagementServiceException
);
