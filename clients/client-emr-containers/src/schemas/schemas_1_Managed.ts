// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { RequestThrottledException as __RequestThrottledException } from "../models/index";
import {
  _a,
  _aAWSTRL,
  _AC,
  _aC,
  _aCu,
  _aSTV,
  _C,
  _cA,
  _cAC,
  _cAe,
  _cAr,
  _cAre,
  _cB,
  _cBr,
  _cD,
  _cI,
  _cl,
  _CLRC,
  _cLRC,
  _CME,
  _CMER,
  _CMERr,
  _CO,
  _cO,
  _cP,
  _cPTe,
  _Cr,
  _cr,
  _CSC,
  _CSCR,
  _CSCRr,
  _cT,
  _cTr,
  _CWMC,
  _cWMC,
  _dIS,
  _DJR,
  _DJRR,
  _DJRRe,
  _DMEe,
  _DMERes,
  _DMEResc,
  _DSC,
  _DSCR,
  _DSCRe,
  _E,
  _e,
  _eA,
  _EC,
  _eC,
  _eI,
  _eKA,
  _En,
  _en,
  _er,
  _eRA,
  _fA,
  _fR,
  _GMESC,
  _GMESCR,
  _GMESCRe,
  _h,
  _hE,
  _hQ,
  _i,
  _ITEC,
  _iTEC,
  _jD,
  _JR,
  _jR,
  _JRo,
  _jRo,
  _jTI,
  _jTP,
  _lC,
  _LFC,
  _lFC,
  _lGN,
  _LJR,
  _LJRR,
  _LJRRi,
  _LME,
  _LMER,
  _LMERi,
  _LSC,
  _LSCR,
  _LSCRi,
  _lSNP,
  _lU,
  _m,
  _mA,
  _MC,
  _mC,
  _mFTK,
  _ML,
  _mL,
  _mR,
  _n,
  _na,
  _nT,
  _pAUI,
  _pCSA,
  _pCSAr,
  _qERA,
  _rL,
  _RPC,
  _rPC,
  _RPE,
  _rPE,
  _rS,
  _RTE,
  _s,
  _SC,
  _sC,
  _SCD,
  _sCD,
  _SCe,
  _sCe,
  _sD,
  _sG,
  _sI,
  _SJR,
  _SJRR,
  _SJRRt,
  _SMC,
  _sMC,
  _SNI,
  _sNI,
  _st,
  _sU,
  _T,
  _t,
  _ta,
  _tCC,
  _TLSCC,
  _to,
  _ty,
  _vCI,
  _vCIi,
  n0,
} from "./schemas_0";
import { ConfigurationList, JobDriver } from "./schemas_2_Job";
import { ContainerProvider } from "./schemas_4_Virtual";

/* eslint no-var: 0 */

export var Token = sim(n0, _T, 0, 8);
export var AuthorizationConfiguration = struct(
  n0,
  _AC,
  0,
  [_lFC, _eC],
  [() => LakeFormationConfiguration, () => EncryptionConfiguration]
);
export var Certificate = struct(n0, _C, 0, [_cA, _cD], [0, 0]);
export var CloudWatchMonitoringConfiguration = struct(n0, _CWMC, 0, [_lGN, _lSNP], [0, 0]);
export var ConfigurationOverrides = struct(
  n0,
  _CO,
  0,
  [_aC, _mC],
  [[() => ConfigurationList, 0], () => MonitoringConfiguration]
);
export var ContainerLogRotationConfiguration = struct(n0, _CLRC, 0, [_rS, _mFTK], [0, 1]);
export var CreateManagedEndpointRequest = struct(
  n0,
  _CMER,
  0,
  [_n, _vCI, _t, _rL, _eRA, _cA, _cO, _cT, _ta],
  [0, [0, 1], 0, 0, 0, 0, [() => ConfigurationOverrides, 0], [0, 4], 128 | 0]
);
export var CreateManagedEndpointResponse = struct(n0, _CMERr, 0, [_i, _n, _a, _vCI], [0, 0, 0, 0]);
export var CreateSecurityConfigurationRequest = struct(
  n0,
  _CSCR,
  0,
  [_cT, _n, _cP, _sCD, _ta],
  [[0, 4], 0, () => ContainerProvider, () => SecurityConfigurationData, 128 | 0]
);
export var CreateSecurityConfigurationResponse = struct(n0, _CSCRr, 0, [_i, _n, _a], [0, 0, 0]);
export var DescribeJobRunRequest = struct(
  n0,
  _DJRR,
  0,
  [_i, _vCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeJobRunResponse = struct(n0, _DJRRe, 0, [_jR], [[() => JobRun, 0]]);
export var DescribeManagedEndpointRequest = struct(
  n0,
  _DMERes,
  0,
  [_i, _vCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeManagedEndpointResponse = struct(n0, _DMEResc, 0, [_e], [[() => Endpoint, 0]]);
export var DescribeSecurityConfigurationRequest = struct(n0, _DSCR, 0, [_i], [[0, 1]]);
export var DescribeSecurityConfigurationResponse = struct(n0, _DSCRe, 0, [_sC], [() => SecurityConfiguration]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_iTEC], [() => InTransitEncryptionConfiguration]);
export var Endpoint = struct(
  n0,
  _E,
  0,
  [_i, _n, _a, _vCI, _t, _s, _rL, _eRA, _cA, _cAe, _cO, _sU, _cAr, _sG, _sI, _sD, _fR, _ta],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => Certificate, [() => ConfigurationOverrides, 0], 0, 5, 0, 64 | 0, 0, 0, 128 | 0]
);
export var GetManagedEndpointSessionCredentialsRequest = struct(
  n0,
  _GMESCR,
  0,
  [_eI, _vCIi, _eRA, _cTr, _dIS, _lC, _cT],
  [[0, 1], [0, 1], 0, 0, 1, 0, [0, 4]]
);
export var GetManagedEndpointSessionCredentialsResponse = struct(
  n0,
  _GMESCRe,
  0,
  [_i, _cr, _eA],
  [0, [() => Credentials, 0], 5]
);
export var InTransitEncryptionConfiguration = struct(n0, _ITEC, 0, [_tCC], [() => TLSCertificateConfiguration]);
export var JobRun = struct(
  n0,
  _JR,
  0,
  [_i, _n, _vCI, _a, _s, _cT, _eRA, _rL, _cO, _jD, _cAr, _cB, _fA, _sD, _fR, _ta, _rPC, _rPE],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => ConfigurationOverrides, 0],
    [() => JobDriver, 0],
    5,
    0,
    5,
    0,
    0,
    128 | 0,
    () => RetryPolicyConfiguration,
    () => RetryPolicyExecution,
  ]
);
export var LakeFormationConfiguration = struct(n0, _LFC, 0, [_aSTV, _sNI, _qERA], [0, () => SecureNamespaceInfo, 0]);
export var ListJobRunsRequest = struct(
  n0,
  _LJRR,
  0,
  [_vCI, _cBr, _cAre, _n, _st, _mR, _nT],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _cBr,
      },
    ],
    [
      5,
      {
        [_hQ]: _cAre,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      64 | 0,
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
export var ListJobRunsResponse = struct(n0, _LJRRi, 0, [_jRo, _nT], [[() => JobRuns, 0], 0]);
export var ListManagedEndpointsRequest = struct(
  n0,
  _LMER,
  0,
  [_vCI, _cBr, _cAre, _ty, _st, _mR, _nT],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _cBr,
      },
    ],
    [
      5,
      {
        [_hQ]: _cAre,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      64 | 0,
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
export var ListManagedEndpointsResponse = struct(n0, _LMERi, 0, [_en, _nT], [[() => Endpoints, 0], 0]);
export var ListSecurityConfigurationsRequest = struct(
  n0,
  _LSCR,
  0,
  [_cAre, _cBr, _mR, _nT],
  [
    [
      5,
      {
        [_hQ]: _cAre,
      },
    ],
    [
      5,
      {
        [_hQ]: _cBr,
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
export var ListSecurityConfigurationsResponse = struct(n0, _LSCRi, 0, [_sCe, _nT], [() => SecurityConfigurations, 0]);
export var ManagedLogs = struct(n0, _ML, 0, [_aAWSTRL, _eKA], [0, 0]);
export var MonitoringConfiguration = struct(
  n0,
  _MC,
  0,
  [_mL, _pAUI, _cWMC, _sMC, _cLRC],
  [
    () => ManagedLogs,
    0,
    () => CloudWatchMonitoringConfiguration,
    () => S3MonitoringConfiguration,
    () => ContainerLogRotationConfiguration,
  ]
);
export var RequestThrottledException = error(
  n0,
  _RTE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __RequestThrottledException
);
export var RetryPolicyConfiguration = struct(n0, _RPC, 0, [_mA], [1]);
export var RetryPolicyExecution = struct(n0, _RPE, 0, [_cAC], [1]);
export var S3MonitoringConfiguration = struct(n0, _SMC, 0, [_lU], [0]);
export var SecureNamespaceInfo = struct(n0, _SNI, 0, [_cI, _na], [0, 0]);
export var SecurityConfiguration = struct(
  n0,
  _SC,
  0,
  [_i, _n, _a, _cAr, _cB, _sCD, _ta],
  [0, 0, 0, 5, 0, () => SecurityConfigurationData, 128 | 0]
);
export var SecurityConfigurationData = struct(n0, _SCD, 0, [_aCu], [() => AuthorizationConfiguration]);
export var StartJobRunRequest = struct(
  n0,
  _SJRR,
  0,
  [_n, _vCI, _cT, _eRA, _rL, _jD, _cO, _ta, _jTI, _jTP, _rPC],
  [
    0,
    [0, 1],
    [0, 4],
    0,
    0,
    [() => JobDriver, 0],
    [() => ConfigurationOverrides, 0],
    128 | 0,
    0,
    128 | 0,
    () => RetryPolicyConfiguration,
  ]
);
export var StartJobRunResponse = struct(n0, _SJRRt, 0, [_i, _n, _a, _vCI], [0, 0, 0, 0]);
export var TLSCertificateConfiguration = struct(n0, _TLSCC, 0, [_cPTe, _pCSA, _pCSAr], [0, 0, 0]);
export var Endpoints = list(n0, _En, 0, [() => Endpoint, 0]);
export var EndpointStates = 64 | 0;

export var EndpointTypes = 64 | 0;

export var JobRuns = list(n0, _JRo, 0, [() => JobRun, 0]);
export var JobRunStates = 64 | 0;

export var SecurityConfigurations = list(n0, _SCe, 0, () => SecurityConfiguration);
export var SubnetIds = 64 | 0;

export var TemplateParameterInputMap = 128 | 0;

export var Credentials = uni(n0, _Cr, 0, [_to], [[() => Token, 0]]);
export var CreateManagedEndpoint = op(
  n0,
  _CME,
  {
    [_h]: ["POST", "/virtualclusters/{virtualClusterId}/endpoints", 200],
  },
  () => CreateManagedEndpointRequest,
  () => CreateManagedEndpointResponse
);
export var CreateSecurityConfiguration = op(
  n0,
  _CSC,
  {
    [_h]: ["POST", "/securityconfigurations", 200],
  },
  () => CreateSecurityConfigurationRequest,
  () => CreateSecurityConfigurationResponse
);
export var DescribeJobRun = op(
  n0,
  _DJR,
  {
    [_h]: ["GET", "/virtualclusters/{virtualClusterId}/jobruns/{id}", 200],
  },
  () => DescribeJobRunRequest,
  () => DescribeJobRunResponse
);
export var DescribeManagedEndpoint = op(
  n0,
  _DMEe,
  {
    [_h]: ["GET", "/virtualclusters/{virtualClusterId}/endpoints/{id}", 200],
  },
  () => DescribeManagedEndpointRequest,
  () => DescribeManagedEndpointResponse
);
export var DescribeSecurityConfiguration = op(
  n0,
  _DSC,
  {
    [_h]: ["GET", "/securityconfigurations/{id}", 200],
  },
  () => DescribeSecurityConfigurationRequest,
  () => DescribeSecurityConfigurationResponse
);
export var GetManagedEndpointSessionCredentials = op(
  n0,
  _GMESC,
  {
    [_h]: ["POST", "/virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials", 200],
  },
  () => GetManagedEndpointSessionCredentialsRequest,
  () => GetManagedEndpointSessionCredentialsResponse
);
export var ListJobRuns = op(
  n0,
  _LJR,
  {
    [_h]: ["GET", "/virtualclusters/{virtualClusterId}/jobruns", 200],
  },
  () => ListJobRunsRequest,
  () => ListJobRunsResponse
);
export var ListManagedEndpoints = op(
  n0,
  _LME,
  {
    [_h]: ["GET", "/virtualclusters/{virtualClusterId}/endpoints", 200],
  },
  () => ListManagedEndpointsRequest,
  () => ListManagedEndpointsResponse
);
export var ListSecurityConfigurations = op(
  n0,
  _LSC,
  {
    [_h]: ["GET", "/securityconfigurations", 200],
  },
  () => ListSecurityConfigurationsRequest,
  () => ListSecurityConfigurationsResponse
);
export var StartJobRun = op(
  n0,
  _SJR,
  {
    [_h]: ["POST", "/virtualclusters/{virtualClusterId}/jobruns", 200],
  },
  () => StartJobRunRequest,
  () => StartJobRunResponse
);
