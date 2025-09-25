// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentDeploymentException as __ConcurrentDeploymentException,
  IdempotentParameterMismatchException as __IdempotentParameterMismatchException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import {
  _a,
  _bP,
  _c,
  _cA,
  _CDE,
  _CDJr,
  _CDJRr,
  _CDJRre,
  _co,
  _cR,
  _cRT,
  _CSJr,
  _cSJR,
  _CSJRr,
  _CSJRre,
  _CWEJr,
  _CWEJRr,
  _CWEJRre,
  _CWGJr,
  _CWGJRr,
  _CWGJRre,
  _dAC,
  _dC,
  _dS,
  _e,
  _f,
  _fB,
  _fC,
  _fR,
  _fRa,
  _h,
  _hE,
  _IPME,
  _iR,
  _lC,
  _lSA,
  _lUA,
  _m,
  _mJDIS,
  _oL,
  _pR,
  _rA,
  _s,
  _sA,
  _SDJ,
  _SDJR,
  _SDJRy,
  _se,
  _SSJB,
  _SSJBR,
  _SSJBRt,
  _sTM,
  _SUE,
  _t,
  _te,
  _vC,
  _w,
  _wC,
  _wT,
  n0,
} from "./schemas_0";
import {
  BatchPolicy,
  Compute,
  ComputeResponse,
  CreateSimulationJobRequests,
  DataSourceConfigs,
  DataSources,
  DeploymentApplicationConfigs,
  DeploymentConfig,
  FailedCreateSimulationJobRequests,
  LoggingConfig,
  RobotApplicationConfigs,
  SimulationApplicationConfigs,
  VPCConfig,
  VPCConfigResponse,
} from "./schemas_5_Job";
import { WorldCount } from "./schemas_7_Generation";
import { OutputLocation } from "./schemas_10_Job";
import { SimulationJobSummaries } from "./schemas_16_Simulation";

/* eslint no-var: 0 */

export var ConcurrentDeploymentException = error(
  n0,
  _CDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConcurrentDeploymentException
);
export var CreateDeploymentJobRequest = struct(
  n0,
  _CDJRr,
  0,
  [_dC, _cRT, _f, _dAC, _t],
  [() => DeploymentConfig, [0, 4], 0, () => DeploymentApplicationConfigs, 128 | 0]
);
export var CreateDeploymentJobResponse = struct(
  n0,
  _CDJRre,
  0,
  [_a, _f, _s, _dAC, _fR, _fC, _cA, _dC, _t],
  [0, 0, 0, () => DeploymentApplicationConfigs, 0, 0, 4, () => DeploymentConfig, 128 | 0]
);
export var CreateSimulationJobRequest = struct(
  n0,
  _CSJRr,
  0,
  [_cRT, _oL, _lC, _mJDIS, _iR, _fB, _rA, _sA, _dS, _t, _vC, _co],
  [
    [0, 4],
    () => OutputLocation,
    () => LoggingConfig,
    1,
    0,
    0,
    () => RobotApplicationConfigs,
    () => SimulationApplicationConfigs,
    () => DataSourceConfigs,
    128 | 0,
    () => VPCConfig,
    () => Compute,
  ]
);
export var CreateSimulationJobResponse = struct(
  n0,
  _CSJRre,
  0,
  [_a, _s, _lSA, _lUA, _fB, _fC, _cRT, _oL, _lC, _mJDIS, _sTM, _iR, _rA, _sA, _dS, _t, _vC, _co],
  [
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    () => OutputLocation,
    () => LoggingConfig,
    1,
    1,
    0,
    () => RobotApplicationConfigs,
    () => SimulationApplicationConfigs,
    () => DataSources,
    128 | 0,
    () => VPCConfigResponse,
    () => ComputeResponse,
  ]
);
export var CreateWorldExportJobRequest = struct(
  n0,
  _CWEJRr,
  0,
  [_cRT, _w, _oL, _iR, _t],
  [[0, 4], 64 | 0, () => OutputLocation, 0, 128 | 0]
);
export var CreateWorldExportJobResponse = struct(
  n0,
  _CWEJRre,
  0,
  [_a, _s, _cA, _fC, _cRT, _oL, _iR, _t],
  [0, 0, 4, 0, 0, () => OutputLocation, 0, 128 | 0]
);
export var CreateWorldGenerationJobRequest = struct(
  n0,
  _CWGJRr,
  0,
  [_cRT, _te, _wC, _t, _wT],
  [[0, 4], 0, () => WorldCount, 128 | 0, 128 | 0]
);
export var CreateWorldGenerationJobResponse = struct(
  n0,
  _CWGJRre,
  0,
  [_a, _s, _cA, _fC, _cRT, _te, _wC, _t, _wT],
  [0, 0, 4, 0, 0, 0, () => WorldCount, 128 | 0, 128 | 0]
);
export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __IdempotentParameterMismatchException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var StartSimulationJobBatchRequest = struct(
  n0,
  _SSJBR,
  0,
  [_cRT, _bP, _cSJR, _t],
  [[0, 4], () => BatchPolicy, () => CreateSimulationJobRequests, 128 | 0]
);
export var StartSimulationJobBatchResponse = struct(
  n0,
  _SSJBRt,
  0,
  [_a, _s, _cA, _cRT, _bP, _fC, _fR, _fRa, _pR, _cR, _t],
  [
    0,
    0,
    4,
    0,
    () => BatchPolicy,
    0,
    0,
    () => FailedCreateSimulationJobRequests,
    () => CreateSimulationJobRequests,
    () => SimulationJobSummaries,
    128 | 0,
  ]
);
export var SyncDeploymentJobRequest = struct(n0, _SDJR, 0, [_cRT, _f], [[0, 4], 0]);
export var SyncDeploymentJobResponse = struct(
  n0,
  _SDJRy,
  0,
  [_a, _f, _s, _dC, _dAC, _fR, _fC, _cA],
  [0, 0, 0, () => DeploymentConfig, () => DeploymentApplicationConfigs, 0, 0, 4]
);
export var CreateDeploymentJob = op(
  n0,
  _CDJr,
  {
    [_h]: ["POST", "/createDeploymentJob", 200],
  },
  () => CreateDeploymentJobRequest,
  () => CreateDeploymentJobResponse
);
export var CreateSimulationJob = op(
  n0,
  _CSJr,
  {
    [_h]: ["POST", "/createSimulationJob", 200],
  },
  () => CreateSimulationJobRequest,
  () => CreateSimulationJobResponse
);
export var CreateWorldExportJob = op(
  n0,
  _CWEJr,
  {
    [_h]: ["POST", "/createWorldExportJob", 200],
  },
  () => CreateWorldExportJobRequest,
  () => CreateWorldExportJobResponse
);
export var CreateWorldGenerationJob = op(
  n0,
  _CWGJr,
  {
    [_h]: ["POST", "/createWorldGenerationJob", 200],
  },
  () => CreateWorldGenerationJobRequest,
  () => CreateWorldGenerationJobResponse
);
export var StartSimulationJobBatch = op(
  n0,
  _SSJB,
  {
    [_h]: ["POST", "/startSimulationJobBatch", 200],
  },
  () => StartSimulationJobBatchRequest,
  () => StartSimulationJobBatchResponse
);
export var SyncDeploymentJob = op(
  n0,
  _SDJ,
  {
    [_h]: ["POST", "/syncDeploymentJob", 200],
  },
  () => SyncDeploymentJobRequest,
  () => SyncDeploymentJobResponse
);
