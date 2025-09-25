// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aP,
  _ap,
  _aPI,
  _aV,
  _b,
  _BDSJ,
  _BDSJR,
  _BDSJRa,
  _BP,
  _bP,
  _bu,
  _C,
  _cA,
  _cDP,
  _co,
  _com,
  _cP,
  _CR,
  _cR,
  _cRT,
  _CSJRrea,
  _cT,
  _d,
  _DAC,
  _dAC,
  _DACe,
  _DC,
  _dC,
  _dCF,
  _DDJ,
  _DDJR,
  _DDJRe,
  _dFT,
  _DLC,
  _DS,
  _dS,
  _DSa,
  _DSC,
  _DSCa,
  _DSJ,
  _DSJB,
  _DSJBR,
  _DSJBRe,
  _DSJR,
  _DSJRe,
  _dST,
  _eB,
  _eOPI,
  _et,
  _eTRS,
  _eV,
  _f,
  _fAa,
  _fB,
  _fC,
  _FCSJR,
  _FCSJRa,
  _fR,
  _fRa,
  _fTP,
  _gUL,
  _h,
  _iR,
  _j,
  _jo,
  _jP,
  _k,
  _LC,
  _lC,
  _lCa,
  _LCo,
  _lF,
  _lSA,
  _lUA,
  _mC,
  _mJDIS,
  _n,
  _NI,
  _nI,
  _nII,
  _oL,
  _p,
  _PD,
  _pD,
  _pDr,
  _PFC,
  _pFC,
  _pIA,
  _pIAu,
  _pLF,
  _pLFo,
  _PM,
  _pM,
  _PML,
  _pN,
  _pR,
  _rA,
  _RAC,
  _RACo,
  _rART,
  _RD,
  _RDS,
  _rDS,
  _rDTIS,
  _re,
  _s,
  _sA,
  _SAC,
  _SACi,
  _sB,
  _sG,
  _SJ,
  _SJi,
  _SJR,
  _sK,
  _sKe,
  _SKO,
  _SKOe,
  _SO,
  _sOTCW,
  _sTM,
  _su,
  _sUI,
  _sUL,
  _T,
  _t,
  _tIS,
  _To,
  _to,
  _tR,
  _ty,
  _uB,
  _UC,
  _uC,
  _UCp,
  _uDA,
  _uDT,
  _uDUC,
  _uJ,
  _vC,
  _vI,
  _VPCC,
  _VPCCR,
  _WC,
  _wCo,
  _WCor,
  _wo,
  n0,
} from "./schemas_0";
import { OutputLocation } from "./schemas_10_Job";
import { SimulationJobSummaries } from "./schemas_16_Simulation";

/* eslint no-var: 0 */

export var BatchDescribeSimulationJobRequest = struct(n0, _BDSJR, 0, [_j], [64 | 0]);
export var BatchDescribeSimulationJobResponse = struct(n0, _BDSJRa, 0, [_j, _uJ], [() => SimulationJobs, 64 | 0]);
export var BatchPolicy = struct(n0, _BP, 0, [_tIS, _mC], [1, 1]);
export var Compute = struct(n0, _C, 0, [_sUL, _cT, _gUL], [1, 0, 1]);
export var ComputeResponse = struct(n0, _CR, 0, [_sUL, _cT, _gUL], [1, 0, 1]);
export var DataSource = struct(n0, _DS, 0, [_n, _sB, _sK, _ty, _d], [0, 0, () => S3KeyOutputs, 0, 0]);
export var DataSourceConfig = struct(n0, _DSC, 0, [_n, _sB, _sK, _ty, _d], [0, 0, 64 | 0, 0, 0]);
export var DeploymentApplicationConfig = struct(n0, _DAC, 0, [_ap, _aV, _lCa], [0, 0, () => DeploymentLaunchConfig]);
export var DeploymentConfig = struct(n0, _DC, 0, [_cDP, _fTP, _rDTIS, _dCF], [1, 1, 1, () => S3Object]);
export var DeploymentLaunchConfig = struct(n0, _DLC, 0, [_pN, _pLF, _lF, _pLFo, _eV], [0, 0, 0, 0, 128 | 0]);
export var DescribeDeploymentJobRequest = struct(n0, _DDJR, 0, [_jo], [0]);
export var DescribeDeploymentJobResponse = struct(
  n0,
  _DDJRe,
  0,
  [_a, _f, _s, _dC, _dAC, _fR, _fC, _cA, _rDS, _t],
  [0, 0, 0, () => DeploymentConfig, () => DeploymentApplicationConfigs, 0, 0, 4, () => RobotDeploymentSummary, 128 | 0]
);
export var DescribeSimulationJobBatchRequest = struct(n0, _DSJBR, 0, [_b], [0]);
export var DescribeSimulationJobBatchResponse = struct(
  n0,
  _DSJBRe,
  0,
  [_a, _s, _lUA, _cA, _cRT, _bP, _fC, _fR, _fRa, _pR, _cR, _t],
  [
    0,
    0,
    4,
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
export var DescribeSimulationJobRequest = struct(n0, _DSJR, 0, [_jo], [0]);
export var DescribeSimulationJobResponse = struct(
  n0,
  _DSJRe,
  0,
  [_a, _n, _s, _lSA, _lUA, _fB, _fC, _fR, _cRT, _oL, _lC, _mJDIS, _sTM, _iR, _rA, _sA, _dS, _t, _vC, _nI, _co],
  [
    0,
    0,
    0,
    4,
    4,
    0,
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
    () => NetworkInterface,
    () => ComputeResponse,
  ]
);
export var FailedCreateSimulationJobRequest = struct(
  n0,
  _FCSJR,
  0,
  [_re, _fR, _fC, _fAa],
  [() => SimulationJobRequest, 0, 0, 4]
);
export var LaunchConfig = struct(
  n0,
  _LC,
  0,
  [_pN, _lF, _eV, _pFC, _sUI, _com],
  [0, 0, 128 | 0, () => PortForwardingConfig, 2, 64 | 0]
);
export var LoggingConfig = struct(n0, _LCo, 0, [_rART], [2]);
export var NetworkInterface = struct(n0, _NI, 0, [_nII, _pIA, _pIAu], [0, 0, 0]);
export var PortForwardingConfig = struct(n0, _PFC, 0, [_pM], [() => PortMappingList]);
export var PortMapping = struct(n0, _PM, 0, [_jP, _aP, _eOPI], [1, 1, 2]);
export var ProgressDetail = struct(n0, _PD, 0, [_cP, _pD, _eTRS, _tR], [0, 1, 1, 0]);
export var RobotApplicationConfig = struct(
  n0,
  _RAC,
  0,
  [_ap, _aV, _lCa, _uC, _uDUC, _to, _uDT],
  [0, 0, () => LaunchConfig, () => UploadConfigurations, 2, () => Tools, 2]
);
export var RobotDeployment = struct(
  n0,
  _RD,
  0,
  [_a, _dST, _dFT, _s, _pDr, _fR, _fC],
  [0, 4, 4, 0, () => ProgressDetail, 0, 0]
);
export var S3KeyOutput = struct(n0, _SKO, 0, [_sKe, _et], [0, 0]);
export var S3Object = struct(n0, _SO, 0, [_bu, _k, _et], [0, 0, 0]);
export var SimulationApplicationConfig = struct(
  n0,
  _SAC,
  0,
  [_ap, _aV, _lCa, _uC, _wCo, _uDUC, _to, _uDT],
  [0, 0, () => LaunchConfig, () => UploadConfigurations, () => WorldConfigs, 2, () => Tools, 2]
);
export var SimulationJob = struct(
  n0,
  _SJ,
  0,
  [_a, _n, _s, _lSA, _lUA, _fB, _fC, _fR, _cRT, _oL, _lC, _mJDIS, _sTM, _iR, _rA, _sA, _dS, _t, _vC, _nI, _co],
  [
    0,
    0,
    0,
    4,
    4,
    0,
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
    () => NetworkInterface,
    () => ComputeResponse,
  ]
);
export var SimulationJobRequest = struct(
  n0,
  _SJR,
  0,
  [_oL, _lC, _mJDIS, _iR, _fB, _uDA, _rA, _sA, _dS, _vC, _co, _t],
  [
    () => OutputLocation,
    () => LoggingConfig,
    1,
    0,
    0,
    2,
    () => RobotApplicationConfigs,
    () => SimulationApplicationConfigs,
    () => DataSourceConfigs,
    () => VPCConfig,
    () => Compute,
    128 | 0,
  ]
);
export var Tool = struct(n0, _T, 0, [_sUI, _n, _com, _sOTCW, _eB], [2, 0, 0, 2, 0]);
export var UploadConfiguration = struct(n0, _UC, 0, [_n, _p, _uB], [0, 0, 0]);
export var VPCConfig = struct(n0, _VPCC, 0, [_su, _sG, _aPI], [64 | 0, 64 | 0, 2]);
export var VPCConfigResponse = struct(n0, _VPCCR, 0, [_su, _sG, _vI, _aPI], [64 | 0, 64 | 0, 0, 2]);
export var WorldConfig = struct(n0, _WC, 0, [_wo], [0]);
export var CommandList = 64 | 0;

export var CreateSimulationJobRequests = list(n0, _CSJRrea, 0, () => SimulationJobRequest);
export var DataSourceConfigs = list(n0, _DSCa, 0, () => DataSourceConfig);
export var DataSources = list(n0, _DSa, 0, () => DataSource);
export var DeploymentApplicationConfigs = list(n0, _DACe, 0, () => DeploymentApplicationConfig);
export var FailedCreateSimulationJobRequests = list(n0, _FCSJRa, 0, () => FailedCreateSimulationJobRequest);
export var PortMappingList = list(n0, _PML, 0, () => PortMapping);
export var RobotApplicationConfigs = list(n0, _RACo, 0, () => RobotApplicationConfig);
export var RobotDeploymentSummary = list(n0, _RDS, 0, () => RobotDeployment);
export var S3KeyOutputs = list(n0, _SKOe, 0, () => S3KeyOutput);
export var S3KeysOrPrefixes = 64 | 0;

export var SecurityGroups = 64 | 0;

export var SimulationApplicationConfigs = list(n0, _SACi, 0, () => SimulationApplicationConfig);
export var SimulationJobs = list(n0, _SJi, 0, () => SimulationJob);
export var Subnets = 64 | 0;

export var Tools = list(n0, _To, 0, () => Tool);
export var UploadConfigurations = list(n0, _UCp, 0, () => UploadConfiguration);
export var WorldConfigs = list(n0, _WCor, 0, () => WorldConfig);
export var EnvironmentVariableMap = 128 | 0;

export var BatchDescribeSimulationJob = op(
  n0,
  _BDSJ,
  {
    [_h]: ["POST", "/batchDescribeSimulationJob", 200],
  },
  () => BatchDescribeSimulationJobRequest,
  () => BatchDescribeSimulationJobResponse
);
export var DescribeDeploymentJob = op(
  n0,
  _DDJ,
  {
    [_h]: ["POST", "/describeDeploymentJob", 200],
  },
  () => DescribeDeploymentJobRequest,
  () => DescribeDeploymentJobResponse
);
export var DescribeSimulationJob = op(
  n0,
  _DSJ,
  {
    [_h]: ["POST", "/describeSimulationJob", 200],
  },
  () => DescribeSimulationJobRequest,
  () => DescribeSimulationJobResponse
);
export var DescribeSimulationJobBatch = op(
  n0,
  _DSJB,
  {
    [_h]: ["POST", "/describeSimulationJobBatch", 200],
  },
  () => DescribeSimulationJobBatchRequest,
  () => DescribeSimulationJobBatchResponse
);
