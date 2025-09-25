// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _ac,
  _ACD,
  _AD,
  _aDS,
  _ADt,
  _AETD,
  _aI,
  _aJI,
  _an,
  _AP,
  _aP,
  _APD,
  _aPE,
  _aPI,
  _aPIs,
  _APS,
  _arg,
  _aS,
  _at,
  _ATCD,
  _bP,
  _c,
  _cA,
  _cAp,
  _CD,
  _cE,
  _cEA,
  _CED,
  _CEDL,
  _cEN,
  _cEo,
  _cIA,
  _cID,
  _cN,
  _cNo,
  _CO,
  _cO,
  _co,
  _com,
  _con,
  _cond,
  _cOT,
  _CP,
  _cP,
  _cPo,
  _cPr,
  _cR,
  _cRP,
  _cRPO,
  _CRU,
  _CS,
  _D,
  _d,
  _dC,
  _DCEe,
  _DCERes,
  _DCEResc,
  _DJ,
  _DJDe,
  _DJDRes,
  _DJDResc,
  _DJR,
  _DJRe,
  _DL,
  _dO,
  _dP,
  _DSJ,
  _DSJR,
  _DSJRe,
  _eA,
  _EACD,
  _EACDk,
  _EAD,
  _EADk,
  _eC,
  _eCA,
  _eCAk,
  _eCc,
  _ECD,
  _ECDk,
  _ECEV,
  _ECEVk,
  _eCk,
  _ECks,
  _ECkso,
  _ECO,
  _ECOL,
  _ECRR,
  _ECSC,
  _ECVM,
  _ECVMk,
  _eD,
  _eEC,
  _EED,
  _EFSAC,
  _EFSVC,
  _EHP,
  _eKP,
  _EM,
  _en,
  _env,
  _EOE,
  _eOE,
  _EOEL,
  _EP,
  _eP,
  _EPD,
  _EPDk,
  _EPk,
  _ePk,
  _EPO,
  _ePO,
  _EPOk,
  _ePOk,
  _EPP,
  _EPPD,
  _EPPO,
  _EPVC,
  _eRA,
  _ES,
  _eS,
  _es,
  _ESp,
  _ETD,
  _ETP,
  _EV,
  _eVC,
  _EVk,
  _EVn,
  _f,
  _FC,
  _fC,
  _FPC,
  _fPC,
  _fSI,
  _H,
  _h,
  _hL,
  _hN,
  _hP,
  _ht,
  _i,
  _iA,
  _ia,
  _iC,
  _iCs,
  _iI,
  _iM,
  _im,
  _iMN,
  _iPE,
  _iPP,
  _IPS,
  _iPS,
  _IPSm,
  _iR,
  _iT,
  _iTn,
  _iTs,
  _j,
  _jA,
  _JD,
  _jD,
  _jDA,
  _JDL,
  _JDLo,
  _JDLob,
  _jDN,
  _JDo,
  _jDo,
  _JDob,
  _jETM,
  _jI,
  _jN,
  _jQ,
  _jRA,
  _JS,
  _jS,
  _JSL,
  _jSL,
  _JT,
  _KVP,
  _l,
  _lA,
  _la,
  _LAETD,
  _LATCD,
  _LC,
  _lC,
  _lD,
  _LETD,
  _LETP,
  _LJ,
  _LJR,
  _LJRi,
  _LP,
  _lP,
  _lSN,
  _lT,
  _LTCD,
  _LTCO,
  _LTCP,
  _LTPO,
  _mCa,
  _mCi,
  _me,
  _med,
  _met,
  _mN,
  _mNJI,
  _mO,
  _MP,
  _mP,
  _MPo,
  _mPo,
  _mR,
  _mS,
  _n,
  _na,
  _NC,
  _nC,
  _ND,
  _nD,
  _NI,
  _nI,
  _NIL,
  _nIo,
  _nN,
  _nNu,
  _NO,
  _nO,
  _NP,
  _nP,
  _NPO,
  _nPO,
  _NPOo,
  _NPS,
  _NRP,
  _nRP,
  _NRPo,
  _nT,
  _oEC,
  _op,
  _opt,
  _oR,
  _oSF,
  _oSR,
  _p,
  _pa,
  _par,
  _pC,
  _pe,
  _pG,
  _pIA,
  _pM,
  _pN,
  _pNo,
  _pP,
  _pT,
  _pV,
  _pVC,
  _r,
  _rAG,
  _rANR,
  _rAU,
  _RC,
  _rC,
  _rD,
  _re,
  _req,
  _rev,
  _RJD,
  _RJDR,
  _RJDRe,
  _rO,
  _rORF,
  _RP,
  _rP,
  _RR,
  _rR,
  _RRe,
  _rRF,
  _RS,
  _rS,
  _S,
  _s,
  _sA,
  _sAN,
  _sAt,
  _sC,
  _se,
  _sec,
  _sGI,
  _sI,
  _sIGB,
  _SJ,
  _SJAD,
  _SJADe,
  _SJR,
  _SJRu,
  _sJT,
  _SL,
  _sL,
  _sLo,
  _sMS,
  _sN,
  _sO,
  _sPc,
  _sPN,
  _sPO,
  _sPo,
  _sPu,
  _sR,
  _sRe,
  _sRI,
  _sRP,
  _sS,
  _st,
  _sta,
  _su,
  _sV,
  _sw,
  _T,
  _t,
  _tA,
  _tC,
  _TCD,
  _TCDa,
  _TCDL,
  _TCO,
  _TCP,
  _tE,
  _tEP,
  _ti,
  _tJOU,
  _TL,
  _tm,
  _tN,
  _tP,
  _TPO,
  _tRA,
  _ty,
  _U,
  _u,
  _uC,
  _UCE,
  _UCER,
  _UCERp,
  _Ul,
  _ul,
  _UP,
  _uP,
  _us,
  _uTLIV,
  _V,
  _v,
  _va,
  _vF,
  _vM,
  _Vo,
  _vo,
  n0,
} from "./schemas_0";
import {
  ComputeResource,
  Ec2ConfigurationList,
  EksConfiguration,
  LaunchTemplateSpecification,
} from "./schemas_1_Compute";
import { ListJobsFilterList } from "./schemas_4_List";
import {
  LatestServiceJobAttempt,
  ServiceJobRetryStrategy,
  ServiceJobTimeout,
  ServiceResourceId,
} from "./schemas_12_Service";
import { ConsumableResourceProperties } from "./schemas_15_Job";

/* eslint no-var: 0 */

export var ArrayProperties = struct(n0, _AP, 0, [_s], [1]);
export var ArrayPropertiesDetail = struct(n0, _APD, 0, [_sS, _s, _i], [128 | 1, 1, 1]);
export var ArrayPropertiesSummary = struct(n0, _APS, 0, [_s, _i], [1, 1]);
export var AttemptContainerDetail = struct(
  n0,
  _ACD,
  0,
  [_cIA, _tA, _eC, _r, _lSN, _nI],
  [0, 0, 1, 0, 0, () => NetworkInterfaceList]
);
export var AttemptDetail = struct(
  n0,
  _AD,
  0,
  [_c, _sA, _sAt, _sR, _tP],
  [() => AttemptContainerDetail, 1, 1, 0, () => ListAttemptEcsTaskDetails]
);
export var AttemptEcsTaskDetails = struct(
  n0,
  _AETD,
  0,
  [_cIA, _tA, _co],
  [0, 0, () => ListAttemptTaskContainerDetails]
);
export var AttemptTaskContainerDetails = struct(
  n0,
  _ATCD,
  0,
  [_eC, _n, _r, _lSN, _nI],
  [1, 0, 0, 0, () => NetworkInterfaceList]
);
export var ComputeEnvironmentDetail = struct(
  n0,
  _CED,
  0,
  [_cEN, _cEA, _uC, _eCA, _t, _ty, _st, _sta, _sR, _cR, _sRe, _uP, _eCk, _cOT, _u, _con],
  [0, 0, 1, 0, 128 | 0, 0, 0, 0, 0, () => ComputeResource, 0, () => UpdatePolicy, () => EksConfiguration, 0, 0, 0]
);
export var ComputeResourceUpdate = struct(
  n0,
  _CRU,
  0,
  [_mCi, _mCa, _dC, _su, _sGI, _aS, _iT, _eKP, _iR, _t, _pG, _bP, _lT, _eCc, _uTLIV, _ty, _iI],
  [
    1,
    1,
    1,
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    128 | 0,
    0,
    1,
    () => LaunchTemplateSpecification,
    () => Ec2ConfigurationList,
    2,
    0,
    0,
  ]
);
export var ContainerDetail = struct(
  n0,
  _CD,
  0,
  [
    _im,
    _v,
    _me,
    _com,
    _jRA,
    _eRA,
    _vo,
    _en,
    _mP,
    _rRF,
    _ul,
    _p,
    _us,
    _eC,
    _r,
    _cIA,
    _tA,
    _lSN,
    _iTn,
    _nI,
    _rR,
    _lP,
    _lC,
    _se,
    _nC,
    _fPC,
    _eS,
    _rP,
    _rC,
    _eEC,
  ],
  [
    0,
    1,
    1,
    64 | 0,
    0,
    0,
    () => Volumes,
    () => EnvironmentVariables,
    () => MountPoints,
    2,
    () => Ulimits,
    2,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    () => NetworkInterfaceList,
    () => ResourceRequirements,
    () => LinuxParameters,
    () => LogConfiguration,
    () => SecretList,
    () => NetworkConfiguration,
    () => FargatePlatformConfiguration,
    () => EphemeralStorage,
    () => RuntimePlatform,
    () => RepositoryCredentials,
    2,
  ]
);
export var ContainerOverrides = struct(
  n0,
  _CO,
  0,
  [_v, _me, _com, _iTn, _en, _rR],
  [1, 1, 64 | 0, 0, () => EnvironmentVariables, () => ResourceRequirements]
);
export var ContainerProperties = struct(
  n0,
  _CP,
  0,
  [
    _im,
    _v,
    _me,
    _com,
    _jRA,
    _eRA,
    _vo,
    _en,
    _mP,
    _rRF,
    _p,
    _ul,
    _us,
    _iTn,
    _rR,
    _lP,
    _lC,
    _se,
    _nC,
    _fPC,
    _eEC,
    _eS,
    _rP,
    _rC,
  ],
  [
    0,
    1,
    1,
    64 | 0,
    0,
    0,
    () => Volumes,
    () => EnvironmentVariables,
    () => MountPoints,
    2,
    2,
    () => Ulimits,
    0,
    0,
    () => ResourceRequirements,
    () => LinuxParameters,
    () => LogConfiguration,
    () => SecretList,
    () => NetworkConfiguration,
    () => FargatePlatformConfiguration,
    2,
    () => EphemeralStorage,
    () => RuntimePlatform,
    () => RepositoryCredentials,
  ]
);
export var ContainerSummary = struct(n0, _CS, 0, [_eC, _r], [1, 0]);
export var DescribeComputeEnvironmentsRequest = struct(n0, _DCERes, 0, [_cEo, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeComputeEnvironmentsResponse = struct(
  n0,
  _DCEResc,
  0,
  [_cEo, _nT],
  [() => ComputeEnvironmentDetailList, 0]
);
export var DescribeJobDefinitionsRequest = struct(n0, _DJDRes, 0, [_jDo, _mR, _jDN, _sta, _nT], [64 | 0, 1, 0, 0, 0]);
export var DescribeJobDefinitionsResponse = struct(n0, _DJDResc, 0, [_jDo, _nT], [() => JobDefinitionList, 0]);
export var DescribeJobsRequest = struct(n0, _DJR, 0, [_j], [64 | 0]);
export var DescribeJobsResponse = struct(n0, _DJRe, 0, [_j], [() => JobDetailList]);
export var DescribeServiceJobRequest = struct(n0, _DSJR, 0, [_jI], [0]);
export var DescribeServiceJobResponse = struct(
  n0,
  _DSJRe,
  0,
  [_at, _cA, _iTs, _jA, _jI, _jN, _jQ, _lA, _rS, _sPc, _sRP, _sJT, _sI, _sA, _sta, _sR, _sAt, _t, _tC],
  [
    () => ServiceJobAttemptDetails,
    1,
    2,
    0,
    0,
    0,
    0,
    () => LatestServiceJobAttempt,
    () => ServiceJobRetryStrategy,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    128 | 0,
    () => ServiceJobTimeout,
  ]
);
export var Device = struct(n0, _D, 0, [_hP, _cP, _pe], [0, 0, 64 | 0]);
export var EcsProperties = struct(n0, _EP, 0, [_tP], [() => ListEcsTaskProperties]);
export var EcsPropertiesDetail = struct(n0, _EPD, 0, [_tP], [() => ListEcsTaskDetails]);
export var EcsPropertiesOverride = struct(n0, _EPO, 0, [_tP], [() => ListTaskPropertiesOverride]);
export var EcsTaskDetails = struct(
  n0,
  _ETD,
  0,
  [_co, _cIA, _tA, _eS, _eRA, _pV, _iM, _tRA, _pM, _nC, _rP, _vo, _eEC],
  [
    () => ListTaskContainerDetails,
    0,
    0,
    () => EphemeralStorage,
    0,
    0,
    0,
    0,
    0,
    () => NetworkConfiguration,
    () => RuntimePlatform,
    () => Volumes,
    2,
  ]
);
export var EcsTaskProperties = struct(
  n0,
  _ETP,
  0,
  [_co, _eS, _eRA, _pV, _iM, _tRA, _pM, _nC, _rP, _vo, _eEC],
  [
    () => ListTaskContainerProperties,
    () => EphemeralStorage,
    0,
    0,
    0,
    0,
    0,
    () => NetworkConfiguration,
    () => RuntimePlatform,
    () => Volumes,
    2,
  ]
);
export var EFSAuthorizationConfig = struct(n0, _EFSAC, 0, [_aPI, _ia], [0, 0]);
export var EFSVolumeConfiguration = struct(
  n0,
  _EFSVC,
  0,
  [_fSI, _rD, _tE, _tEP, _aC],
  [0, 0, 0, 1, () => EFSAuthorizationConfig]
);
export var EksAttemptContainerDetail = struct(n0, _EACD, 0, [_n, _cID, _eC, _r], [0, 0, 1, 0]);
export var EksAttemptDetail = struct(
  n0,
  _EAD,
  0,
  [_co, _iC, _eCAk, _pN, _pNo, _nN, _sA, _sAt, _sR],
  [() => EksAttemptContainerDetails, () => EksAttemptContainerDetails, 0, 0, 0, 0, 1, 1, 0]
);
export var EksContainer = struct(
  n0,
  _ECks,
  0,
  [_n, _im, _iPP, _com, _arg, _env, _re, _vM, _sC],
  [
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    () => EksContainerEnvironmentVariables,
    () => EksContainerResourceRequirements,
    () => EksContainerVolumeMounts,
    () => EksContainerSecurityContext,
  ]
);
export var EksContainerDetail = struct(
  n0,
  _ECD,
  0,
  [_n, _im, _iPP, _com, _arg, _env, _re, _eC, _r, _vM, _sC],
  [
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    () => EksContainerEnvironmentVariables,
    () => EksContainerResourceRequirements,
    1,
    0,
    () => EksContainerVolumeMounts,
    () => EksContainerSecurityContext,
  ]
);
export var EksContainerEnvironmentVariable = struct(n0, _ECEV, 0, [_n, _va], [0, 0]);
export var EksContainerOverride = struct(
  n0,
  _ECO,
  0,
  [_n, _im, _com, _arg, _env, _re],
  [0, 0, 64 | 0, 64 | 0, () => EksContainerEnvironmentVariables, () => EksContainerResourceRequirements]
);
export var EksContainerResourceRequirements = struct(n0, _ECRR, 0, [_l, _req], [128 | 0, 128 | 0]);
export var EksContainerSecurityContext = struct(n0, _ECSC, 0, [_rAU, _rAG, _p, _aPE, _rORF, _rANR], [1, 1, 2, 2, 2, 2]);
export var EksContainerVolumeMount = struct(n0, _ECVM, 0, [_n, _mPo, _sPu, _rO], [0, 0, 0, 2]);
export var EksEmptyDir = struct(n0, _EED, 0, [_med, _sL], [0, 0]);
export var EksHostPath = struct(n0, _EHP, 0, [_pa], [0]);
export var EksMetadata = struct(n0, _EM, 0, [_la, _an, _na], [128 | 0, 128 | 0, 0]);
export var EksPersistentVolumeClaim = struct(n0, _EPVC, 0, [_cN, _rO], [0, 2]);
export var EksPodProperties = struct(
  n0,
  _EPP,
  0,
  [_sAN, _hN, _dP, _iPS, _co, _iC, _vo, _met, _sPN],
  [0, 2, 0, () => ImagePullSecrets, () => EksContainers, () => EksContainers, () => EksVolumes, () => EksMetadata, 2]
);
export var EksPodPropertiesDetail = struct(
  n0,
  _EPPD,
  0,
  [_sAN, _hN, _dP, _iPS, _co, _iC, _vo, _pN, _nN, _met, _sPN],
  [
    0,
    2,
    0,
    () => ImagePullSecrets,
    () => EksContainerDetails,
    () => EksContainerDetails,
    () => EksVolumes,
    0,
    0,
    () => EksMetadata,
    2,
  ]
);
export var EksPodPropertiesOverride = struct(
  n0,
  _EPPO,
  0,
  [_co, _iC, _met],
  [() => EksContainerOverrideList, () => EksContainerOverrideList, () => EksMetadata]
);
export var EksProperties = struct(n0, _EPk, 0, [_pP], [() => EksPodProperties]);
export var EksPropertiesDetail = struct(n0, _EPDk, 0, [_pP], [() => EksPodPropertiesDetail]);
export var EksPropertiesOverride = struct(n0, _EPOk, 0, [_pP], [() => EksPodPropertiesOverride]);
export var EksSecret = struct(n0, _ES, 0, [_sN, _op], [0, 2]);
export var EksVolume = struct(
  n0,
  _EV,
  0,
  [_n, _hP, _eD, _sec, _pVC],
  [0, () => EksHostPath, () => EksEmptyDir, () => EksSecret, () => EksPersistentVolumeClaim]
);
export var EphemeralStorage = struct(n0, _ESp, 0, [_sIGB], [1]);
export var EvaluateOnExit = struct(n0, _EOE, 0, [_oSR, _oR, _oEC, _ac], [0, 0, 0, 0]);
export var FargatePlatformConfiguration = struct(n0, _FPC, 0, [_pV], [0]);
export var FirelensConfiguration = struct(n0, _FC, 0, [_ty, _opt], [0, 128 | 0]);
export var Host = struct(n0, _H, 0, [_sPo], [0]);
export var ImagePullSecret = struct(n0, _IPS, 0, [_n], [0]);
export var JobDefinition = struct(
  n0,
  _JD,
  0,
  [_jDN, _jDA, _rev, _sta, _ty, _sPc, _par, _rS, _cPo, _ti, _nP, _t, _pT, _pC, _eP, _ePk, _cOT, _cRP],
  [
    0,
    0,
    1,
    0,
    0,
    1,
    128 | 0,
    () => RetryStrategy,
    () => ContainerProperties,
    () => JobTimeout,
    () => NodeProperties,
    128 | 0,
    2,
    64 | 0,
    () => EcsProperties,
    () => EksProperties,
    0,
    () => ConsumableResourceProperties,
  ]
);
export var JobDependency = struct(n0, _JDo, 0, [_jI, _ty], [0, 0]);
export var JobDetail = struct(
  n0,
  _JDob,
  0,
  [
    _jA,
    _jN,
    _jI,
    _jQ,
    _sta,
    _sI,
    _sPc,
    _at,
    _sR,
    _cA,
    _rS,
    _sA,
    _sAt,
    _dO,
    _jD,
    _par,
    _c,
    _nD,
    _nP,
    _aP,
    _ti,
    _t,
    _pT,
    _pC,
    _ePk,
    _eA,
    _eP,
    _iCs,
    _iTs,
    _cRP,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    () => AttemptDetails,
    0,
    1,
    () => RetryStrategy,
    1,
    1,
    () => JobDependencyList,
    0,
    128 | 0,
    () => ContainerDetail,
    () => NodeDetails,
    () => NodeProperties,
    () => ArrayPropertiesDetail,
    () => JobTimeout,
    128 | 0,
    2,
    64 | 0,
    () => EksPropertiesDetail,
    () => EksAttemptDetails,
    () => EcsPropertiesDetail,
    2,
    2,
    () => ConsumableResourceProperties,
  ]
);
export var JobSummary = struct(
  n0,
  _JS,
  0,
  [_jA, _jI, _jN, _cA, _sta, _sR, _sA, _sAt, _c, _aP, _nP, _jD],
  [0, 0, 0, 1, 0, 0, 1, 1, () => ContainerSummary, () => ArrayPropertiesSummary, () => NodePropertiesSummary, 0]
);
export var JobTimeout = struct(n0, _JT, 0, [_aDS], [1]);
export var KeyValuePair = struct(n0, _KVP, 0, [_n, _va], [0, 0]);
export var LinuxParameters = struct(
  n0,
  _LP,
  0,
  [_d, _iPE, _sMS, _tm, _mS, _sw],
  [() => DevicesList, 2, 1, () => TmpfsList, 1, 1]
);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_jQ, _aJI, _mNJI, _jS, _mR, _nT, _f],
  [0, 0, 0, 0, 1, 0, () => ListJobsFilterList]
);
export var ListJobsResponse = struct(n0, _LJRi, 0, [_jSL, _nT], [() => JobSummaryList, 0]);
export var LogConfiguration = struct(n0, _LC, 0, [_lD, _opt, _sO], [0, 128 | 0, () => SecretList]);
export var MountPoint = struct(n0, _MP, 0, [_cP, _rO, _sV], [0, 2, 0]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_aPIs], [0]);
export var NetworkInterface = struct(n0, _NI, 0, [_aI, _iA, _pIA], [0, 0, 0]);
export var NodeDetails = struct(n0, _ND, 0, [_nIo, _iMN], [1, 2]);
export var NodeOverrides = struct(n0, _NO, 0, [_nNu, _nPO], [1, () => NodePropertyOverrides]);
export var NodeProperties = struct(n0, _NP, 0, [_nNu, _mN, _nRP], [1, 1, () => NodeRangeProperties]);
export var NodePropertiesSummary = struct(n0, _NPS, 0, [_iMN, _nNu, _nIo], [2, 1, 1]);
export var NodePropertyOverride = struct(
  n0,
  _NPO,
  0,
  [_tN, _cO, _ePO, _iT, _ePOk, _cRPO],
  [
    0,
    () => ContainerOverrides,
    () => EcsPropertiesOverride,
    64 | 0,
    () => EksPropertiesOverride,
    () => ConsumableResourceProperties,
  ]
);
export var NodeRangeProperty = struct(
  n0,
  _NRP,
  0,
  [_tN, _c, _iT, _eP, _ePk, _cRP],
  [0, () => ContainerProperties, 64 | 0, () => EcsProperties, () => EksProperties, () => ConsumableResourceProperties]
);
export var RegisterJobDefinitionRequest = struct(
  n0,
  _RJDR,
  0,
  [_jDN, _ty, _par, _sPc, _cPo, _nP, _rS, _pT, _ti, _t, _pC, _ePk, _eP, _cRP],
  [
    0,
    0,
    128 | 0,
    1,
    () => ContainerProperties,
    () => NodeProperties,
    () => RetryStrategy,
    2,
    () => JobTimeout,
    128 | 0,
    64 | 0,
    () => EksProperties,
    () => EcsProperties,
    () => ConsumableResourceProperties,
  ]
);
export var RegisterJobDefinitionResponse = struct(n0, _RJDRe, 0, [_jDN, _jDA, _rev], [0, 0, 1]);
export var RepositoryCredentials = struct(n0, _RC, 0, [_cPr], [0]);
export var ResourceRequirement = struct(n0, _RR, 0, [_va, _ty], [0, 0]);
export var RetryStrategy = struct(n0, _RS, 0, [_at, _eOE], [1, () => EvaluateOnExitList]);
export var RuntimePlatform = struct(n0, _RP, 0, [_oSF, _cAp], [0, 0]);
export var Secret = struct(n0, _S, 0, [_n, _vF], [0, 0]);
export var ServiceJobAttemptDetail = struct(n0, _SJAD, 0, [_sRI, _sA, _sAt, _sR], [() => ServiceResourceId, 1, 1, 0]);
export var SubmitJobRequest = struct(
  n0,
  _SJR,
  0,
  [_jN, _jQ, _sI, _sPO, _aP, _dO, _jD, _par, _cO, _nO, _rS, _pT, _ti, _t, _ePOk, _ePO, _cRPO],
  [
    0,
    0,
    0,
    1,
    () => ArrayProperties,
    () => JobDependencyList,
    0,
    128 | 0,
    () => ContainerOverrides,
    () => NodeOverrides,
    () => RetryStrategy,
    2,
    () => JobTimeout,
    128 | 0,
    () => EksPropertiesOverride,
    () => EcsPropertiesOverride,
    () => ConsumableResourceProperties,
  ]
);
export var SubmitJobResponse = struct(n0, _SJRu, 0, [_jA, _jN, _jI], [0, 0, 0]);
export var TaskContainerDependency = struct(n0, _TCD, 0, [_cNo, _cond], [0, 0]);
export var TaskContainerDetails = struct(
  n0,
  _TCDa,
  0,
  [_com, _dO, _en, _es, _fC, _im, _lP, _lC, _mP, _n, _p, _rRF, _rC, _rR, _se, _ul, _us, _eC, _r, _lSN, _nI],
  [
    64 | 0,
    () => TaskContainerDependencyList,
    () => EnvironmentVariables,
    2,
    () => FirelensConfiguration,
    0,
    () => LinuxParameters,
    () => LogConfiguration,
    () => MountPoints,
    0,
    2,
    2,
    () => RepositoryCredentials,
    () => ResourceRequirements,
    () => SecretList,
    () => Ulimits,
    0,
    1,
    0,
    0,
    () => NetworkInterfaceList,
  ]
);
export var TaskContainerOverrides = struct(
  n0,
  _TCO,
  0,
  [_com, _en, _n, _rR],
  [64 | 0, () => EnvironmentVariables, 0, () => ResourceRequirements]
);
export var TaskContainerProperties = struct(
  n0,
  _TCP,
  0,
  [_com, _dO, _en, _es, _fC, _im, _lP, _lC, _mP, _n, _p, _rRF, _rC, _rR, _se, _ul, _us],
  [
    64 | 0,
    () => TaskContainerDependencyList,
    () => EnvironmentVariables,
    2,
    () => FirelensConfiguration,
    0,
    () => LinuxParameters,
    () => LogConfiguration,
    () => MountPoints,
    0,
    2,
    2,
    () => RepositoryCredentials,
    () => ResourceRequirements,
    () => SecretList,
    () => Ulimits,
    0,
  ]
);
export var TaskPropertiesOverride = struct(n0, _TPO, 0, [_co], [() => ListTaskContainerOverrides]);
export var Tmpfs = struct(n0, _T, 0, [_cP, _s, _mO], [0, 1, 64 | 0]);
export var Ulimit = struct(n0, _U, 0, [_hL, _n, _sLo], [1, 0, 1]);
export var UpdateComputeEnvironmentRequest = struct(
  n0,
  _UCER,
  0,
  [_cE, _st, _uC, _cR, _sRe, _uP, _con],
  [0, 0, 1, () => ComputeResourceUpdate, 0, () => UpdatePolicy, 0]
);
export var UpdateComputeEnvironmentResponse = struct(n0, _UCERp, 0, [_cEN, _cEA], [0, 0]);
export var UpdatePolicy = struct(n0, _UP, 0, [_tJOU, _jETM], [2, 1]);
export var Volume = struct(n0, _V, 0, [_h, _n, _eVC], [() => Host, 0, () => EFSVolumeConfiguration]);
export var AttemptDetails = list(n0, _ADt, 0, () => AttemptDetail);
export var ComputeEnvironmentDetailList = list(n0, _CEDL, 0, () => ComputeEnvironmentDetail);
export var DeviceCgroupPermissions = 64 | 0;

export var DevicesList = list(n0, _DL, 0, () => Device);
export var EksAttemptContainerDetails = list(n0, _EACDk, 0, () => EksAttemptContainerDetail);
export var EksAttemptDetails = list(n0, _EADk, 0, () => EksAttemptDetail);
export var EksContainerDetails = list(n0, _ECDk, 0, () => EksContainerDetail);
export var EksContainerEnvironmentVariables = list(n0, _ECEVk, 0, () => EksContainerEnvironmentVariable);
export var EksContainerOverrideList = list(n0, _ECOL, 0, () => EksContainerOverride);
export var EksContainers = list(n0, _ECkso, 0, () => EksContainer);
export var EksContainerVolumeMounts = list(n0, _ECVMk, 0, () => EksContainerVolumeMount);
export var EksVolumes = list(n0, _EVk, 0, () => EksVolume);
export var EnvironmentVariables = list(n0, _EVn, 0, () => KeyValuePair);
export var EvaluateOnExitList = list(n0, _EOEL, 0, () => EvaluateOnExit);
export var ImagePullSecrets = list(n0, _IPSm, 0, () => ImagePullSecret);
export var JobDefinitionList = list(n0, _JDL, 0, () => JobDefinition);
export var JobDependencyList = list(n0, _JDLo, 0, () => JobDependency);
export var JobDetailList = list(n0, _JDLob, 0, () => JobDetail);
export var JobSummaryList = list(n0, _JSL, 0, () => JobSummary);
export var ListAttemptEcsTaskDetails = list(n0, _LAETD, 0, () => AttemptEcsTaskDetails);
export var ListAttemptTaskContainerDetails = list(n0, _LATCD, 0, () => AttemptTaskContainerDetails);
export var ListEcsTaskDetails = list(n0, _LETD, 0, () => EcsTaskDetails);
export var ListEcsTaskProperties = list(n0, _LETP, 0, () => EcsTaskProperties);
export var ListTaskContainerDetails = list(n0, _LTCD, 0, () => TaskContainerDetails);
export var ListTaskContainerOverrides = list(n0, _LTCO, 0, () => TaskContainerOverrides);
export var ListTaskContainerProperties = list(n0, _LTCP, 0, () => TaskContainerProperties);
export var ListTaskPropertiesOverride = list(n0, _LTPO, 0, () => TaskPropertiesOverride);
export var MountPoints = list(n0, _MPo, 0, () => MountPoint);
export var NetworkInterfaceList = list(n0, _NIL, 0, () => NetworkInterface);
export var NodePropertyOverrides = list(n0, _NPOo, 0, () => NodePropertyOverride);
export var NodeRangeProperties = list(n0, _NRPo, 0, () => NodeRangeProperty);
export var PlatformCapabilityList = 64 | 0;

export var ResourceRequirements = list(n0, _RRe, 0, () => ResourceRequirement);
export var SecretList = list(n0, _SL, 0, () => Secret);
export var ServiceJobAttemptDetails = list(n0, _SJADe, 0, () => ServiceJobAttemptDetail);
export var TaskContainerDependencyList = list(n0, _TCDL, 0, () => TaskContainerDependency);
export var TmpfsList = list(n0, _TL, 0, () => Tmpfs);
export var Ulimits = list(n0, _Ul, 0, () => Ulimit);
export var Volumes = list(n0, _Vo, 0, () => Volume);
export var ArrayJobStatusSummary = 128 | 1;

export var EksAnnotationsMap = 128 | 0;

export var EksLabelsMap = 128 | 0;

export var EksLimits = 128 | 0;

export var EksRequests = 128 | 0;

export var FirelensConfigurationOptionsMap = 128 | 0;

export var LogConfigurationOptionsMap = 128 | 0;

export var ParametersMap = 128 | 0;

export var DescribeComputeEnvironments = op(
  n0,
  _DCEe,
  {
    [_ht]: ["POST", "/v1/describecomputeenvironments", 200],
  },
  () => DescribeComputeEnvironmentsRequest,
  () => DescribeComputeEnvironmentsResponse
);
export var DescribeJobDefinitions = op(
  n0,
  _DJDe,
  {
    [_ht]: ["POST", "/v1/describejobdefinitions", 200],
  },
  () => DescribeJobDefinitionsRequest,
  () => DescribeJobDefinitionsResponse
);
export var DescribeJobs = op(
  n0,
  _DJ,
  {
    [_ht]: ["POST", "/v1/describejobs", 200],
  },
  () => DescribeJobsRequest,
  () => DescribeJobsResponse
);
export var DescribeServiceJob = op(
  n0,
  _DSJ,
  {
    [_ht]: ["POST", "/v1/describeservicejob", 200],
  },
  () => DescribeServiceJobRequest,
  () => DescribeServiceJobResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_ht]: ["POST", "/v1/listjobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
export var RegisterJobDefinition = op(
  n0,
  _RJD,
  {
    [_ht]: ["POST", "/v1/registerjobdefinition", 200],
  },
  () => RegisterJobDefinitionRequest,
  () => RegisterJobDefinitionResponse
);
export var SubmitJob = op(
  n0,
  _SJ,
  {
    [_ht]: ["POST", "/v1/submitjob", 200],
  },
  () => SubmitJobRequest,
  () => SubmitJobResponse
);
export var UpdateComputeEnvironment = op(
  n0,
  _UCE,
  {
    [_ht]: ["POST", "/v1/updatecomputeenvironment", 200],
  },
  () => UpdateComputeEnvironmentRequest,
  () => UpdateComputeEnvironmentResponse
);
