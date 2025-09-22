// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  MissingVersionException as __MissingVersionException,
  NoUpdateAvailableException as __NoUpdateAvailableException,
} from "../models/index";
import {
  _a,
  _aC,
  _aH,
  _at,
  _aUS,
  _aVg,
  _c,
  _cI,
  _cIA,
  _CIHS,
  _CIo,
  _cIo,
  _CIont,
  _cl,
  _cPN,
  _d,
  _DCI,
  _DCIe,
  _DCIR,
  _DCIRe,
  _DCIRes,
  _DCIResc,
  _dV,
  _dVo,
  _e,
  _eII,
  _f,
  _fa,
  _hS,
  _i,
  _IHCR,
  _IHCRL,
  _iID,
  _iIDS,
  _inc,
  _iV,
  _lSC,
  _lU,
  _lV,
  _m,
  _MVE,
  _n,
  _NUAE,
  _oS,
  _PD,
  _pD,
  _PDl,
  _pTC,
  _R,
  _rAe,
  _RCI,
  _RCIR,
  _RCIRe,
  _Re,
  _rRe,
  _rReg,
  _rTC,
  _s,
  _sR,
  _sSV,
  _t,
  _ta,
  _tR,
  _UCA,
  _UCAR,
  _UCARp,
  _UCIS,
  _UCISR,
  _UCISRp,
  _ve,
  _VI,
  _vI,
  Attachments,
  Failures,
  n0,
  Tags,
} from "./schemas_0";
import { Attributes } from "./schemas_26_Container";

/* eslint no-var: 0 */

export var ContainerInstance = struct(
  n0,
  _CIo,
  0,
  [_cIA, _eII, _cPN, _ve, _vI, _rRe, _rReg, _s, _sR, _aC, _rTC, _pTC, _aUS, _at, _rAe, _a, _ta, _hS],
  [
    0,
    0,
    0,
    1,
    () => VersionInfo,
    () => Resources,
    () => Resources,
    0,
    0,
    2,
    1,
    1,
    0,
    () => Attributes,
    4,
    () => Attachments,
    () => Tags,
    () => ContainerInstanceHealthStatus,
  ]
);
export var ContainerInstanceHealthStatus = struct(n0, _CIHS, 0, [_oS, _d], [0, () => InstanceHealthCheckResultList]);
export var DeregisterContainerInstanceRequest = struct(n0, _DCIR, 0, [_cl, _cI, _f], [0, 0, 2]);
export var DeregisterContainerInstanceResponse = struct(n0, _DCIRe, 0, [_cI], [() => ContainerInstance]);
export var DescribeContainerInstancesRequest = struct(n0, _DCIRes, 0, [_cl, _cIo, _inc], [0, 64 | 0, 64 | 0]);
export var DescribeContainerInstancesResponse = struct(
  n0,
  _DCIResc,
  0,
  [_cIo, _fa],
  [() => ContainerInstances, () => Failures]
);
export var InstanceHealthCheckResult = struct(n0, _IHCR, 0, [_t, _s, _lU, _lSC], [0, 0, 4, 4]);
export var MissingVersionException = error(
  n0,
  _MVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MissingVersionException
);
export var NoUpdateAvailableException = error(
  n0,
  _NUAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NoUpdateAvailableException
);
export var PlatformDevice = struct(n0, _PD, 0, [_i, _t], [0, 0]);
export var RegisterContainerInstanceRequest = struct(
  n0,
  _RCIR,
  0,
  [_cl, _iID, _iIDS, _tR, _vI, _cIA, _at, _pD, _ta],
  [0, 0, 0, () => Resources, () => VersionInfo, 0, () => Attributes, () => PlatformDevices, () => Tags]
);
export var RegisterContainerInstanceResponse = struct(n0, _RCIRe, 0, [_cI], [() => ContainerInstance]);
export var Resource = struct(n0, _R, 0, [_n, _t, _dV, _lV, _iV, _sSV], [0, 0, 1, 1, 1, 64 | 0]);
export var UpdateContainerAgentRequest = struct(n0, _UCAR, 0, [_cl, _cI], [0, 0]);
export var UpdateContainerAgentResponse = struct(n0, _UCARp, 0, [_cI], [() => ContainerInstance]);
export var UpdateContainerInstancesStateRequest = struct(n0, _UCISR, 0, [_cl, _cIo, _s], [0, 64 | 0, 0]);
export var UpdateContainerInstancesStateResponse = struct(
  n0,
  _UCISRp,
  0,
  [_cIo, _fa],
  [() => ContainerInstances, () => Failures]
);
export var VersionInfo = struct(n0, _VI, 0, [_aVg, _aH, _dVo], [0, 0, 0]);
export var ContainerInstanceFieldList = 64 | 0;

export var ContainerInstances = list(n0, _CIont, 0, () => ContainerInstance);
export var InstanceHealthCheckResultList = list(n0, _IHCRL, 0, () => InstanceHealthCheckResult);
export var PlatformDevices = list(n0, _PDl, 0, () => PlatformDevice);
export var Resources = list(n0, _Re, 0, () => Resource);
export var DeregisterContainerInstance = op(
  n0,
  _DCI,
  0,
  () => DeregisterContainerInstanceRequest,
  () => DeregisterContainerInstanceResponse
);
export var DescribeContainerInstances = op(
  n0,
  _DCIe,
  0,
  () => DescribeContainerInstancesRequest,
  () => DescribeContainerInstancesResponse
);
export var RegisterContainerInstance = op(
  n0,
  _RCI,
  0,
  () => RegisterContainerInstanceRequest,
  () => RegisterContainerInstanceResponse
);
export var UpdateContainerAgent = op(
  n0,
  _UCA,
  0,
  () => UpdateContainerAgentRequest,
  () => UpdateContainerAgentResponse
);
export var UpdateContainerInstancesState = op(
  n0,
  _UCIS,
  0,
  () => UpdateContainerInstancesStateRequest,
  () => UpdateContainerInstancesStateResponse
);
