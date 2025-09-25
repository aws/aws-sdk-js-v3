// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { BlockedException as __BlockedException } from "../models/index";
import {
  _a,
  _ac,
  _aCu,
  _ad,
  _aI,
  _aP,
  _aPIc,
  _at,
  _au,
  _aZ,
  _BE,
  _bIP,
  _c,
  _cA,
  _ca,
  _cAL,
  _cAo,
  _cAon,
  _cAp,
  _cAr,
  _CD,
  _cD,
  _CDo,
  _CDon,
  _CDont,
  _cIA,
  _cIo,
  _cl,
  _cNo,
  _CO,
  _Co,
  _cO,
  _com,
  _comp,
  _Con,
  _con,
  _conn,
  _conta,
  _COo,
  _cou,
  _cp,
  _cPN,
  _cPo,
  _cPon,
  _cPR,
  _cPr,
  _cPS,
  _CRP,
  _cS,
  _CSC,
  _CSCo,
  _cT,
  _dAe,
  _De,
  _dev,
  _DL,
  _dL,
  _dN,
  _dNe,
  _dO,
  _do,
  _dOr,
  _dOT,
  _dr,
  _dro,
  _dS,
  _dSD,
  _dSe,
  _dSO,
  _DT,
  _dT,
  _DTD,
  _DTDe,
  _DTDes,
  _DTDR,
  _DTDRe,
  _DTDRer,
  _DTDRere,
  _DTDRes,
  _DTDResc,
  _DTR,
  _DTRe,
  _DVC,
  _dVC,
  _e,
  _eC,
  _eEC,
  _eECSMT,
  _EF,
  _eF,
  _eFI,
  _EFn,
  _EFSAC,
  _EFSVC,
  _eH,
  _en,
  _ena,
  _enc,
  _eP,
  _eRA,
  _ES,
  _es,
  _eSA,
  _eSp,
  _EV,
  _eVC,
  _ex,
  _fa,
  _fami,
  _FC,
  _fC,
  _fES,
  _fSI,
  _FSWFSAC,
  _FSWFSVC,
  _fTi,
  _fWFSVC,
  _g,
  _gI,
  _h,
  _HC,
  _hC,
  _HE,
  _HEL,
  _hL,
  _ho,
  _hP,
  _hPo,
  _hPR,
  _hS,
  _HVP,
  _IA,
  _iA,
  _ia,
  _IAn,
  _iAn,
  _IAO,
  _iAO,
  _IAOn,
  _iAp,
  _iD,
  _iEC,
  _iM,
  _im,
  _in,
  _inc,
  _int,
  _io,
  _iPE,
  _KC,
  _kKI,
  _l,
  _la,
  _lC,
  _LP,
  _lP,
  _lS,
  _lSA,
  _lT,
  _m,
  _MA,
  _mA,
  _MAa,
  _mAN,
  _MASC,
  _MASCa,
  _me,
  _mEBSV,
  _mO,
  _MP,
  _mP,
  _MPL,
  _mR,
  _mSa,
  _n,
  _na,
  _NB,
  _nB,
  _NBe,
  _nC,
  _NI,
  _nI,
  _NIe,
  _nM,
  _o,
  _oSF,
  _ov,
  _p,
  _pC,
  _PCP,
  _PCr,
  _pCr,
  _pe,
  _pF,
  _pIA,
  _PM,
  _pM,
  _pMi,
  _PML,
  _pr,
  _pro,
  _pS,
  _pSA,
  _pSAu,
  _pT,
  _pTr,
  _pV,
  _r,
  _RA,
  _rA,
  _rAe,
  _rAeq,
  _rAP,
  _rB,
  _RC,
  _rC,
  _rCe,
  _rD,
  _re,
  _rev,
  _rIe,
  _rIu,
  _rO,
  _RP,
  _rP,
  _rPu,
  _RR,
  _rR,
  _RRe,
  _rRF,
  _RT,
  _RTD,
  _RTDR,
  _RTDRe,
  _RTR,
  _RTRu,
  _s,
  _sAt,
  _sAto,
  _sAtop,
  _sB,
  _SC,
  _sC,
  _sCo,
  _sco,
  _SCSC,
  _SCSCR,
  _SCSCRu,
  _sCt,
  _SCy,
  _sec,
  _sI,
  _si,
  _sIGB,
  _sL,
  _sMS,
  _sP,
  _sPo,
  _sRt,
  _ST,
  _sT,
  _STR,
  _STRt,
  _STRto,
  _STRtop,
  _STSC,
  _STSCR,
  _STSCRu,
  _STt,
  _sTt,
  _sV,
  _sw,
  _t,
  _Ta,
  _tA,
  _ta,
  _Tas,
  _tas,
  _task,
  _TD,
  _tD,
  _tDa,
  _tDAa,
  _TDL,
  _TDPC,
  _TDPCa,
  _tEP,
  _tEr,
  _TES,
  _thr,
  _ti,
  _TL,
  _Tm,
  _tm,
  _TMEBSVC,
  _TMEBSVTP,
  _TO,
  _tP,
  _tRA,
  _tSag,
  _TVC,
  _TVCa,
  _U,
  _u,
  _UL,
  _ul,
  _V,
  _v,
  _vC,
  _vCo,
  _ve,
  _VF,
  _vF,
  _VFL,
  _vIR,
  _VL,
  _vo,
  _vT,
  _wD,
  Attachments,
  Attribute,
  CapacityProviderStrategy,
  Failures,
  KeyValuePair,
  n0,
  Tags,
} from "./schemas_0";
import { LogConfiguration, SecretList } from "./schemas_5_Service";
import { EBSTagSpecifications, PlacementConstraints, PlacementStrategies } from "./schemas_7_Service";
import { AttachmentStateChanges } from "./schemas_12_State";
import { NetworkConfiguration } from "./schemas_16_Task";
import { Attributes } from "./schemas_26_Container";

/* eslint no-var: 0 */

export var BlockedException = error(
  n0,
  _BE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BlockedException
);
export var Container = struct(
  n0,
  _Co,
  0,
  [_cAo, _tA, _n, _im, _iD, _rIu, _lS, _eC, _r, _nB, _nI, _hS, _mA, _cp, _me, _mR, _gI],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, () => NetworkBindings, () => NetworkInterfaces, 0, () => ManagedAgents, 0, 0, 0, 64 | 0]
);
export var ContainerDefinition = struct(
  n0,
  _CD,
  0,
  [
    _n,
    _im,
    _rC,
    _cp,
    _me,
    _mR,
    _l,
    _pM,
    _es,
    _rP,
    _eP,
    _com,
    _en,
    _eF,
    _mP,
    _vF,
    _lP,
    _sec,
    _dO,
    _sT,
    _sTt,
    _vC,
    _h,
    _u,
    _wD,
    _dN,
    _p,
    _rRF,
    _dS,
    _dSD,
    _eH,
    _dSO,
    _in,
    _pT,
    _dL,
    _ul,
    _lC,
    _hC,
    _sC,
    _rR,
    _fC,
    _cS,
  ],
  [
    0,
    0,
    () => RepositoryCredentials,
    1,
    1,
    1,
    64 | 0,
    () => PortMappingList,
    2,
    () => ContainerRestartPolicy,
    64 | 0,
    64 | 0,
    () => EnvironmentVariables,
    () => EnvironmentFiles,
    () => MountPointList,
    () => VolumeFromList,
    () => LinuxParameters,
    () => SecretList,
    () => ContainerDependencies,
    1,
    1,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    64 | 0,
    64 | 0,
    () => HostEntryList,
    64 | 0,
    2,
    2,
    128 | 0,
    () => UlimitList,
    () => LogConfiguration,
    () => HealthCheck,
    () => SystemControls,
    () => ResourceRequirements,
    () => FirelensConfiguration,
    64 | 0,
  ]
);
export var ContainerDependency = struct(n0, _CDo, 0, [_cNo, _con], [0, 0]);
export var ContainerOverride = struct(
  n0,
  _CO,
  0,
  [_n, _com, _en, _eF, _cp, _me, _mR, _rR],
  [0, 64 | 0, () => EnvironmentVariables, () => EnvironmentFiles, 1, 1, 1, () => ResourceRequirements]
);
export var ContainerRestartPolicy = struct(n0, _CRP, 0, [_ena, _iEC, _rAP], [2, 64 | 1, 1]);
export var ContainerStateChange = struct(
  n0,
  _CSC,
  0,
  [_cNo, _iD, _rIu, _eC, _nB, _r, _s],
  [0, 0, 0, 1, () => NetworkBindings, 0, 0]
);
export var DeleteTaskDefinitionsRequest = struct(n0, _DTDR, 0, [_tDa], [64 | 0]);
export var DeleteTaskDefinitionsResponse = struct(
  n0,
  _DTDRe,
  0,
  [_tDa, _fa],
  [() => TaskDefinitionList, () => Failures]
);
export var DeregisterTaskDefinitionRequest = struct(n0, _DTDRer, 0, [_tD], [0]);
export var DeregisterTaskDefinitionResponse = struct(n0, _DTDRere, 0, [_tD], [() => TaskDefinition]);
export var DescribeTaskDefinitionRequest = struct(n0, _DTDRes, 0, [_tD, _inc], [0, 64 | 0]);
export var DescribeTaskDefinitionResponse = struct(n0, _DTDResc, 0, [_tD, _ta], [() => TaskDefinition, () => Tags]);
export var DescribeTasksRequest = struct(n0, _DTR, 0, [_cl, _tas, _inc], [0, 64 | 0, 64 | 0]);
export var DescribeTasksResponse = struct(n0, _DTRe, 0, [_tas, _fa], [() => Tasks, () => Failures]);
export var Device = struct(n0, _De, 0, [_hP, _cPo, _pe], [0, 0, 64 | 0]);
export var DockerVolumeConfiguration = struct(n0, _DVC, 0, [_sco, _au, _dr, _dOr, _la], [0, 2, 0, 128 | 0, 128 | 0]);
export var EFSAuthorizationConfig = struct(n0, _EFSAC, 0, [_aPIc, _ia], [0, 0]);
export var EFSVolumeConfiguration = struct(
  n0,
  _EFSVC,
  0,
  [_fSI, _rD, _tEr, _tEP, _aCu],
  [0, 0, 0, 1, () => EFSAuthorizationConfig]
);
export var EnvironmentFile = struct(n0, _EF, 0, [_v, _t], [0, 0]);
export var EphemeralStorage = struct(n0, _ES, 0, [_sIGB], [1]);
export var FirelensConfiguration = struct(n0, _FC, 0, [_t, _o], [0, 128 | 0]);
export var FSxWindowsFileServerAuthorizationConfig = struct(n0, _FSWFSAC, 0, [_cPr, _do], [0, 0]);
export var FSxWindowsFileServerVolumeConfiguration = struct(
  n0,
  _FSWFSVC,
  0,
  [_fSI, _rD, _aCu],
  [0, 0, () => FSxWindowsFileServerAuthorizationConfig]
);
export var HealthCheck = struct(n0, _HC, 0, [_com, _int, _ti, _re, _sP], [64 | 0, 1, 1, 1, 1]);
export var HostEntry = struct(n0, _HE, 0, [_h, _iA], [0, 0]);
export var HostVolumeProperties = struct(n0, _HVP, 0, [_sPo], [0]);
export var InferenceAccelerator = struct(n0, _IA, 0, [_dNe, _dT], [0, 0]);
export var InferenceAcceleratorOverride = struct(n0, _IAO, 0, [_dNe, _dT], [0, 0]);
export var KernelCapabilities = struct(n0, _KC, 0, [_ad, _dro], [64 | 0, 64 | 0]);
export var LinuxParameters = struct(
  n0,
  _LP,
  0,
  [_ca, _dev, _iPE, _sMS, _tm, _mSa, _sw],
  [() => KernelCapabilities, () => DevicesList, 2, 1, () => TmpfsList, 1, 1]
);
export var ManagedAgent = struct(n0, _MA, 0, [_lSA, _n, _r, _lS], [4, 0, 0, 0]);
export var ManagedAgentStateChange = struct(n0, _MASC, 0, [_cNo, _mAN, _s, _r], [0, 0, 0, 0]);
export var MountPoint = struct(n0, _MP, 0, [_sV, _cPo, _rO], [0, 0, 2]);
export var NetworkBinding = struct(n0, _NB, 0, [_bIP, _cPon, _hPo, _pr, _cPR, _hPR], [0, 1, 1, 0, 0, 0]);
export var NetworkInterface = struct(n0, _NI, 0, [_aI, _pIA, _iAp], [0, 0, 0]);
export var PortMapping = struct(n0, _PM, 0, [_cPon, _hPo, _pr, _n, _aP, _cPR], [1, 1, 0, 0, 0, 0]);
export var ProxyConfiguration = struct(n0, _PCr, 0, [_t, _cNo, _pro], [0, 0, () => ProxyConfigurationProperties]);
export var RegisterTaskDefinitionRequest = struct(
  n0,
  _RTDR,
  0,
  [_fami, _tRA, _eRA, _nM, _cD, _vo, _pC, _rCe, _cp, _me, _ta, _pMi, _iM, _pCr, _iAn, _eSp, _rPu, _eFI],
  [
    0,
    0,
    0,
    0,
    () => ContainerDefinitions,
    () => VolumeList,
    () => TaskDefinitionPlacementConstraints,
    64 | 0,
    0,
    0,
    () => Tags,
    0,
    0,
    () => ProxyConfiguration,
    () => InferenceAccelerators,
    () => EphemeralStorage,
    () => RuntimePlatform,
    2,
  ]
);
export var RegisterTaskDefinitionResponse = struct(n0, _RTDRe, 0, [_tD, _ta], [() => TaskDefinition, () => Tags]);
export var RepositoryCredentials = struct(n0, _RC, 0, [_cPr], [0]);
export var ResourceRequirement = struct(n0, _RR, 0, [_v, _t], [0, 0]);
export var RunTaskRequest = struct(
  n0,
  _RTR,
  0,
  [_cPS, _cl, _cou, _eECSMT, _eEC, _g, _lT, _nC, _ov, _pC, _pS, _pV, _pTr, _rIe, _sB, _ta, _tD, _cT, _vCo],
  [
    () => CapacityProviderStrategy,
    0,
    1,
    2,
    2,
    0,
    0,
    () => NetworkConfiguration,
    () => TaskOverride,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    0,
    0,
    0,
    () => Tags,
    0,
    [0, 4],
    () => TaskVolumeConfigurations,
  ]
);
export var RunTaskResponse = struct(n0, _RTRu, 0, [_tas, _fa], [() => Tasks, () => Failures]);
export var RuntimePlatform = struct(n0, _RP, 0, [_cAp, _oSF], [0, 0]);
export var StartTaskRequest = struct(
  n0,
  _STR,
  0,
  [_cl, _cIo, _eECSMT, _eEC, _g, _nC, _ov, _pTr, _rIe, _sB, _ta, _tD, _vCo],
  [
    0,
    64 | 0,
    2,
    2,
    0,
    () => NetworkConfiguration,
    () => TaskOverride,
    0,
    0,
    0,
    () => Tags,
    0,
    () => TaskVolumeConfigurations,
  ]
);
export var StartTaskResponse = struct(n0, _STRt, 0, [_tas, _fa], [() => Tasks, () => Failures]);
export var StopTaskRequest = struct(n0, _STRto, 0, [_cl, _task, _r], [0, 0, 0]);
export var StopTaskResponse = struct(n0, _STRtop, 0, [_task], [() => Task]);
export var SubmitContainerStateChangeRequest = struct(
  n0,
  _SCSCR,
  0,
  [_cl, _task, _cNo, _rIu, _s, _eC, _r, _nB],
  [0, 0, 0, 0, 0, 1, 0, () => NetworkBindings]
);
export var SubmitContainerStateChangeResponse = struct(n0, _SCSCRu, 0, [_ac], [0]);
export var SubmitTaskStateChangeRequest = struct(
  n0,
  _STSCR,
  0,
  [_cl, _task, _s, _r, _conta, _a, _mA, _pSA, _pSAu, _eSA],
  [0, 0, 0, 0, () => ContainerStateChanges, () => AttachmentStateChanges, () => ManagedAgentStateChanges, 4, 4, 4]
);
export var SubmitTaskStateChangeResponse = struct(n0, _STSCRu, 0, [_ac], [0]);
export var SystemControl = struct(n0, _SC, 0, [_na, _v], [0, 0]);
export var Task = struct(
  n0,
  _Ta,
  0,
  [
    _a,
    _at,
    _aZ,
    _cPN,
    _cA,
    _conn,
    _cAon,
    _cIA,
    _conta,
    _cp,
    _cAr,
    _dSe,
    _eEC,
    _eSA,
    _g,
    _hS,
    _iAn,
    _lS,
    _lT,
    _me,
    _ov,
    _pV,
    _pF,
    _pSA,
    _pSAu,
    _sAt,
    _sB,
    _sCt,
    _sAto,
    _sRt,
    _sAtop,
    _ta,
    _tA,
    _tDAa,
    _ve,
    _eSp,
    _fES,
  ],
  [
    () => Attachments,
    () => Attributes,
    0,
    0,
    0,
    0,
    4,
    0,
    () => Containers,
    0,
    4,
    0,
    2,
    4,
    0,
    0,
    () => InferenceAccelerators,
    0,
    0,
    0,
    () => TaskOverride,
    0,
    0,
    4,
    4,
    4,
    0,
    0,
    4,
    0,
    4,
    () => Tags,
    0,
    0,
    1,
    () => EphemeralStorage,
    () => TaskEphemeralStorage,
  ]
);
export var TaskDefinition = struct(
  n0,
  _TD,
  0,
  [
    _tDAa,
    _cD,
    _fami,
    _tRA,
    _eRA,
    _nM,
    _rev,
    _vo,
    _s,
    _rAeq,
    _pC,
    _comp,
    _rPu,
    _rCe,
    _cp,
    _me,
    _iAn,
    _pMi,
    _iM,
    _pCr,
    _rAe,
    _dAe,
    _rB,
    _eSp,
    _eFI,
  ],
  [
    0,
    () => ContainerDefinitions,
    0,
    0,
    0,
    0,
    1,
    () => VolumeList,
    0,
    () => RequiresAttributes,
    () => TaskDefinitionPlacementConstraints,
    64 | 0,
    () => RuntimePlatform,
    64 | 0,
    0,
    0,
    () => InferenceAccelerators,
    0,
    0,
    () => ProxyConfiguration,
    4,
    4,
    0,
    () => EphemeralStorage,
    2,
  ]
);
export var TaskDefinitionPlacementConstraint = struct(n0, _TDPC, 0, [_t, _ex], [0, 0]);
export var TaskEphemeralStorage = struct(n0, _TES, 0, [_sIGB, _kKI], [1, 0]);
export var TaskManagedEBSVolumeConfiguration = struct(
  n0,
  _TMEBSVC,
  0,
  [_enc, _kKI, _vT, _sIGB, _sI, _vIR, _io, _thr, _tSag, _rA, _tP, _fTi],
  [2, 0, 0, 1, 0, 1, 1, 1, () => EBSTagSpecifications, 0, () => TaskManagedEBSVolumeTerminationPolicy, 0]
);
export var TaskManagedEBSVolumeTerminationPolicy = struct(n0, _TMEBSVTP, 0, [_dOT], [2]);
export var TaskOverride = struct(
  n0,
  _TO,
  0,
  [_cO, _cp, _iAO, _eRA, _me, _tRA, _eSp],
  [() => ContainerOverrides, 0, () => InferenceAcceleratorOverrides, 0, 0, 0, () => EphemeralStorage]
);
export var TaskVolumeConfiguration = struct(n0, _TVC, 0, [_n, _mEBSV], [0, () => TaskManagedEBSVolumeConfiguration]);
export var Tmpfs = struct(n0, _Tm, 0, [_cPo, _si, _mO], [0, 1, 64 | 0]);
export var Ulimit = struct(n0, _U, 0, [_n, _sL, _hL], [0, 1, 1]);
export var Volume = struct(
  n0,
  _V,
  0,
  [_n, _ho, _dVC, _eVC, _fWFSVC, _cAL],
  [
    0,
    () => HostVolumeProperties,
    () => DockerVolumeConfiguration,
    () => EFSVolumeConfiguration,
    () => FSxWindowsFileServerVolumeConfiguration,
    2,
  ]
);
export var VolumeFrom = struct(n0, _VF, 0, [_sCo, _rO], [0, 2]);
export var CompatibilityList = 64 | 0;

export var ContainerDefinitions = list(n0, _CDon, 0, () => ContainerDefinition);
export var ContainerDependencies = list(n0, _CDont, 0, () => ContainerDependency);
export var ContainerOverrides = list(n0, _COo, 0, () => ContainerOverride);
export var Containers = list(n0, _Con, 0, () => Container);
export var ContainerStateChanges = list(n0, _CSCo, 0, () => ContainerStateChange);
export var DeviceCgroupPermissions = 64 | 0;

export var DevicesList = list(n0, _DL, 0, () => Device);
export var EnvironmentFiles = list(n0, _EFn, 0, () => EnvironmentFile);
export var EnvironmentVariables = list(n0, _EV, 0, () => KeyValuePair);
export var GpuIds = 64 | 0;

export var HostEntryList = list(n0, _HEL, 0, () => HostEntry);
export var InferenceAcceleratorOverrides = list(n0, _IAOn, 0, () => InferenceAcceleratorOverride);
export var InferenceAccelerators = list(n0, _IAn, 0, () => InferenceAccelerator);
export var IntegerList = 64 | 1;

export var ManagedAgents = list(n0, _MAa, 0, () => ManagedAgent);
export var ManagedAgentStateChanges = list(n0, _MASCa, 0, () => ManagedAgentStateChange);
export var MountPointList = list(n0, _MPL, 0, () => MountPoint);
export var NetworkBindings = list(n0, _NBe, 0, () => NetworkBinding);
export var NetworkInterfaces = list(n0, _NIe, 0, () => NetworkInterface);
export var PortMappingList = list(n0, _PML, 0, () => PortMapping);
export var ProxyConfigurationProperties = list(n0, _PCP, 0, () => KeyValuePair);
export var RequiresAttributes = list(n0, _RA, 0, () => Attribute);
export var ResourceRequirements = list(n0, _RRe, 0, () => ResourceRequirement);
export var SystemControls = list(n0, _SCy, 0, () => SystemControl);
export var TaskDefinitionFieldList = 64 | 0;

export var TaskDefinitionList = list(n0, _TDL, 0, () => TaskDefinition);
export var TaskDefinitionPlacementConstraints = list(n0, _TDPCa, 0, () => TaskDefinitionPlacementConstraint);
export var TaskFieldList = 64 | 0;

export var Tasks = list(n0, _Tas, 0, () => Task);
export var TaskVolumeConfigurations = list(n0, _TVCa, 0, () => TaskVolumeConfiguration);
export var TmpfsList = list(n0, _TL, 0, () => Tmpfs);
export var UlimitList = list(n0, _UL, 0, () => Ulimit);
export var VolumeFromList = list(n0, _VFL, 0, () => VolumeFrom);
export var VolumeList = list(n0, _VL, 0, () => Volume);
export var DockerLabelsMap = 128 | 0;

export var FirelensConfigurationOptionsMap = 128 | 0;

export var StringMap = 128 | 0;

export var DeleteTaskDefinitions = op(
  n0,
  _DTD,
  0,
  () => DeleteTaskDefinitionsRequest,
  () => DeleteTaskDefinitionsResponse
);
export var DeregisterTaskDefinition = op(
  n0,
  _DTDe,
  0,
  () => DeregisterTaskDefinitionRequest,
  () => DeregisterTaskDefinitionResponse
);
export var DescribeTaskDefinition = op(
  n0,
  _DTDes,
  0,
  () => DescribeTaskDefinitionRequest,
  () => DescribeTaskDefinitionResponse
);
export var DescribeTasks = op(
  n0,
  _DT,
  0,
  () => DescribeTasksRequest,
  () => DescribeTasksResponse
);
export var RegisterTaskDefinition = op(
  n0,
  _RTD,
  0,
  () => RegisterTaskDefinitionRequest,
  () => RegisterTaskDefinitionResponse
);
export var RunTask = op(
  n0,
  _RT,
  0,
  () => RunTaskRequest,
  () => RunTaskResponse
);
export var StartTask = op(
  n0,
  _ST,
  0,
  () => StartTaskRequest,
  () => StartTaskResponse
);
export var StopTask = op(
  n0,
  _STt,
  0,
  () => StopTaskRequest,
  () => StopTaskResponse
);
export var SubmitContainerStateChange = op(
  n0,
  _SCSC,
  0,
  () => SubmitContainerStateChangeRequest,
  () => SubmitContainerStateChangeResponse
);
export var SubmitTaskStateChange = op(
  n0,
  _STSC,
  0,
  () => SubmitTaskStateChangeRequest,
  () => SubmitTaskStateChangeResponse
);
