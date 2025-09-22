// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ServiceNotActiveException as __ServiceNotActiveException,
  ServiceNotFoundException as __ServiceNotFoundException,
  TaskSetNotFoundException as __TaskSetNotFoundException,
} from "../models/index";
import {
  _af,
  _al,
  _aN,
  _ar,
  _aZR,
  _be,
  _c,
  _CA,
  _cA,
  _cAr,
  _CI,
  _cI,
  _CIon,
  _cIon,
  _cl,
  _cNo,
  _cPS,
  _cT,
  _CTS,
  _CTSR,
  _CTSRr,
  _dC,
  _dCB,
  _dCe,
  _dCep,
  _DS,
  _DSD,
  _DSDR,
  _DSDRe,
  _dSe,
  _DSR,
  _DSRe,
  _DSRescr,
  _DSRR,
  _DSRRe,
  _DTS,
  _DTSe,
  _DTSR,
  _DTSRe,
  _DTSRes,
  _DTSResc,
  _e,
  _eEC,
  _eECSMT,
  _eI,
  _f,
  _fA,
  _fa,
  _fami,
  _fCa,
  _fES,
  _fND,
  _gDE,
  _hCGPS,
  _iD,
  _im,
  _inc,
  _lB,
  _LSD,
  _LSDR,
  _LSDRi,
  _lSif,
  _LT,
  _lT,
  _LTR,
  _LTRi,
  _m,
  _mRa,
  _nC,
  _nT,
  _pC,
  _pF,
  _pLR,
  _pS,
  _pTCe,
  _pTr,
  _pTS,
  _pV,
  _r,
  _RCe,
  _rCes,
  _Ro,
  _rol,
  _rTCe,
  _rTCu,
  _s,
  _sAe,
  _sAt,
  _sAto,
  _sB,
  _sc,
  _sCC,
  _SD,
  _sD,
  _SDA,
  _sDA,
  _sDAe,
  _SDB,
  _SDBe,
  _SDCB,
  _SDe,
  _ser,
  _sN,
  _SNAE,
  _SNFE,
  _sR,
  _sRA,
  _sRAe,
  _SRe,
  _sRe,
  _sRer,
  _SRerv,
  _SRLB,
  _SRLBe,
  _SRS,
  _SRSL,
  _sSR,
  _ta,
  _tAa,
  _tAN,
  _tD,
  _tGA,
  _th,
  _tS,
  _tSa,
  _TSNFE,
  _tSR,
  _tSRA,
  _uA,
  _US,
  _USPTS,
  _USPTSR,
  _USPTSRp,
  _USR,
  _USRp,
  _UTS,
  _UTSR,
  _UTSRp,
  _vCo,
  _vLC,
  CapacityProviderStrategy,
  Failures,
  n0,
  Tags,
} from "./schemas_0";
import { DeploymentConfiguration, PlacementConstraints, PlacementStrategies } from "./schemas_7_Service";
import {
  DeploymentController,
  DeploymentEphemeralStorage,
  LoadBalancers,
  Scale,
  Service,
  ServiceConnectConfiguration,
  ServiceRegistries,
  ServiceVolumeConfigurations,
  TaskSet,
  TaskSets,
  VpcLatticeConfigurations,
} from "./schemas_13_Service";
import { NetworkConfiguration } from "./schemas_16_Task";

/* eslint no-var: 0 */

export var ContainerImage = struct(n0, _CI, 0, [_cNo, _iD, _im], [0, 0, 0]);
export var CreatedAt = struct(n0, _CA, 0, [_be, _af], [4, 4]);
export var CreateTaskSetRequest = struct(
  n0,
  _CTSR,
  0,
  [_ser, _cl, _eI, _tD, _nC, _lB, _sRe, _lT, _cPS, _pV, _sc, _cT, _ta],
  [
    0,
    0,
    0,
    0,
    () => NetworkConfiguration,
    () => LoadBalancers,
    () => ServiceRegistries,
    0,
    () => CapacityProviderStrategy,
    0,
    () => Scale,
    0,
    () => Tags,
  ]
);
export var CreateTaskSetResponse = struct(n0, _CTSRr, 0, [_tS], [() => TaskSet]);
export var DeleteServiceRequest = struct(n0, _DSR, 0, [_cl, _ser, _f], [0, 0, 2]);
export var DeleteServiceResponse = struct(n0, _DSRe, 0, [_ser], [() => Service]);
export var DeleteTaskSetRequest = struct(n0, _DTSR, 0, [_cl, _ser, _tS, _f], [0, 0, 0, 2]);
export var DeleteTaskSetResponse = struct(n0, _DTSRe, 0, [_tS], [() => TaskSet]);
export var DescribeServiceDeploymentsRequest = struct(n0, _DSDR, 0, [_sDA], [64 | 0]);
export var DescribeServiceDeploymentsResponse = struct(
  n0,
  _DSDRe,
  0,
  [_sD, _fa],
  [() => ServiceDeployments, () => Failures]
);
export var DescribeServiceRevisionsRequest = struct(n0, _DSRR, 0, [_sRA], [64 | 0]);
export var DescribeServiceRevisionsResponse = struct(
  n0,
  _DSRRe,
  0,
  [_sRer, _fa],
  [() => ServiceRevisions, () => Failures]
);
export var DescribeTaskSetsRequest = struct(n0, _DTSRes, 0, [_cl, _ser, _tSa, _inc], [0, 0, 64 | 0, 64 | 0]);
export var DescribeTaskSetsResponse = struct(n0, _DTSResc, 0, [_tSa, _fa], [() => TaskSets, () => Failures]);
export var ListServiceDeploymentsRequest = struct(
  n0,
  _LSDR,
  0,
  [_ser, _cl, _s, _cAr, _nT, _mRa],
  [0, 0, 64 | 0, () => CreatedAt, 0, 1]
);
export var ListServiceDeploymentsResponse = struct(n0, _LSDRi, 0, [_sD, _nT], [() => ServiceDeploymentsBrief, 0]);
export var ListTasksRequest = struct(
  n0,
  _LTR,
  0,
  [_cl, _cI, _fami, _nT, _mRa, _sB, _sN, _dSe, _lT],
  [0, 0, 0, 0, 1, 0, 0, 0, 0]
);
export var ListTasksResponse = struct(n0, _LTRi, 0, [_tAa, _nT], [64 | 0, 0]);
export var ResolvedConfiguration = struct(n0, _RCe, 0, [_lB], [() => ServiceRevisionLoadBalancers]);
export var Rollback = struct(n0, _Ro, 0, [_r, _sAt, _sRAe], [0, 4, 0]);
export var ServiceDeployment = struct(
  n0,
  _SD,
  0,
  [_sDAe, _sAe, _cA, _cAr, _sAt, _fA, _sAto, _uA, _sSR, _tSR, _s, _sR, _lSif, _dCe, _rol, _dCB, _al],
  [
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    4,
    () => ServiceRevisionsSummaryList,
    () => ServiceRevisionSummary,
    0,
    0,
    0,
    () => DeploymentConfiguration,
    () => Rollback,
    () => ServiceDeploymentCircuitBreaker,
    () => ServiceDeploymentAlarms,
  ]
);
export var ServiceDeploymentAlarms = struct(n0, _SDA, 0, [_s, _aN, _tAN], [0, 64 | 0, 64 | 0]);
export var ServiceDeploymentBrief = struct(
  n0,
  _SDB,
  0,
  [_sDAe, _sAe, _cA, _sAt, _cAr, _fA, _tSRA, _s, _sR],
  [0, 0, 0, 4, 4, 4, 0, 0, 0]
);
export var ServiceDeploymentCircuitBreaker = struct(n0, _SDCB, 0, [_s, _fCa, _th], [0, 1, 1]);
export var ServiceNotActiveException = error(
  n0,
  _SNAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ServiceNotActiveException
);
export var ServiceNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ServiceNotFoundException
);
export var ServiceRevision = struct(
  n0,
  _SRe,
  0,
  [_sRAe, _sAe, _cA, _tD, _cPS, _lT, _pV, _pF, _lB, _sRe, _nC, _cIon, _gDE, _sCC, _vCo, _fES, _cAr, _vLC, _rCes],
  [
    0,
    0,
    0,
    0,
    () => CapacityProviderStrategy,
    0,
    0,
    0,
    () => LoadBalancers,
    () => ServiceRegistries,
    () => NetworkConfiguration,
    () => ContainerImages,
    2,
    () => ServiceConnectConfiguration,
    () => ServiceVolumeConfigurations,
    () => DeploymentEphemeralStorage,
    4,
    () => VpcLatticeConfigurations,
    () => ResolvedConfiguration,
  ]
);
export var ServiceRevisionLoadBalancer = struct(n0, _SRLB, 0, [_tGA, _pLR], [0, 0]);
export var ServiceRevisionSummary = struct(n0, _SRS, 0, [_ar, _rTCe, _rTCu, _pTCe], [0, 1, 1, 1]);
export var TaskSetNotFoundException = error(
  n0,
  _TSNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TaskSetNotFoundException
);
export var UpdateServicePrimaryTaskSetRequest = struct(n0, _USPTSR, 0, [_cl, _ser, _pTS], [0, 0, 0]);
export var UpdateServicePrimaryTaskSetResponse = struct(n0, _USPTSRp, 0, [_tS], [() => TaskSet]);
export var UpdateServiceRequest = struct(
  n0,
  _USR,
  0,
  [
    _cl,
    _ser,
    _dC,
    _tD,
    _cPS,
    _dCe,
    _aZR,
    _nC,
    _pC,
    _pS,
    _pV,
    _fND,
    _hCGPS,
    _dCep,
    _eEC,
    _eECSMT,
    _lB,
    _pTr,
    _sRe,
    _sCC,
    _vCo,
    _vLC,
  ],
  [
    0,
    0,
    1,
    0,
    () => CapacityProviderStrategy,
    () => DeploymentConfiguration,
    0,
    () => NetworkConfiguration,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    2,
    1,
    () => DeploymentController,
    2,
    2,
    () => LoadBalancers,
    0,
    () => ServiceRegistries,
    () => ServiceConnectConfiguration,
    () => ServiceVolumeConfigurations,
    () => VpcLatticeConfigurations,
  ]
);
export var UpdateServiceResponse = struct(n0, _USRp, 0, [_ser], [() => Service]);
export var UpdateTaskSetRequest = struct(n0, _UTSR, 0, [_cl, _ser, _tS, _sc], [0, 0, 0, () => Scale]);
export var UpdateTaskSetResponse = struct(n0, _UTSRp, 0, [_tS], [() => TaskSet]);
export var ContainerImages = list(n0, _CIon, 0, () => ContainerImage);
export var ServiceDeployments = list(n0, _SDe, 0, () => ServiceDeployment);
export var ServiceDeploymentsBrief = list(n0, _SDBe, 0, () => ServiceDeploymentBrief);
export var ServiceDeploymentStatusList = 64 | 0;

export var ServiceRevisionLoadBalancers = list(n0, _SRLBe, 0, () => ServiceRevisionLoadBalancer);
export var ServiceRevisions = list(n0, _SRerv, 0, () => ServiceRevision);
export var ServiceRevisionsSummaryList = list(n0, _SRSL, 0, () => ServiceRevisionSummary);
export var TaskSetFieldList = 64 | 0;

export var CreateTaskSet = op(
  n0,
  _CTS,
  0,
  () => CreateTaskSetRequest,
  () => CreateTaskSetResponse
);
export var DeleteService = op(
  n0,
  _DS,
  0,
  () => DeleteServiceRequest,
  () => DeleteServiceResponse
);
export var DeleteTaskSet = op(
  n0,
  _DTS,
  0,
  () => DeleteTaskSetRequest,
  () => DeleteTaskSetResponse
);
export var DescribeServiceDeployments = op(
  n0,
  _DSD,
  0,
  () => DescribeServiceDeploymentsRequest,
  () => DescribeServiceDeploymentsResponse
);
export var DescribeServiceRevisions = op(
  n0,
  _DSRescr,
  0,
  () => DescribeServiceRevisionsRequest,
  () => DescribeServiceRevisionsResponse
);
export var DescribeTaskSets = op(
  n0,
  _DTSe,
  0,
  () => DescribeTaskSetsRequest,
  () => DescribeTaskSetsResponse
);
export var ListServiceDeployments = op(
  n0,
  _LSD,
  0,
  () => ListServiceDeploymentsRequest,
  () => ListServiceDeploymentsResponse
);
export var ListTasks = op(
  n0,
  _LT,
  0,
  () => ListTasksRequest,
  () => ListTasksResponse
);
export var UpdateService = op(
  n0,
  _US,
  0,
  () => UpdateServiceRequest,
  () => UpdateServiceResponse
);
export var UpdateServicePrimaryTaskSet = op(
  n0,
  _USPTS,
  0,
  () => UpdateServicePrimaryTaskSetRequest,
  () => UpdateServicePrimaryTaskSetResponse
);
export var UpdateTaskSet = op(
  n0,
  _UTS,
  0,
  () => UpdateTaskSetRequest,
  () => UpdateTaskSetResponse
);
