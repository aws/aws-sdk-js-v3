// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AlarmsLimitExceededException as __AlarmsLimitExceededException,
  DeploymentConfigAlreadyExistsException as __DeploymentConfigAlreadyExistsException,
  DeploymentConfigInUseException as __DeploymentConfigInUseException,
  DeploymentConfigLimitExceededException as __DeploymentConfigLimitExceededException,
  DeploymentConfigNameRequiredException as __DeploymentConfigNameRequiredException,
  DeploymentGroupAlreadyExistsException as __DeploymentGroupAlreadyExistsException,
  DeploymentGroupLimitExceededException as __DeploymentGroupLimitExceededException,
  DeploymentLimitExceededException as __DeploymentLimitExceededException,
  ECSServiceMappingLimitExceededException as __ECSServiceMappingLimitExceededException,
  InvalidAlarmConfigException as __InvalidAlarmConfigException,
  InvalidAutoRollbackConfigException as __InvalidAutoRollbackConfigException,
  InvalidAutoScalingGroupException as __InvalidAutoScalingGroupException,
  InvalidBlueGreenDeploymentConfigurationException as __InvalidBlueGreenDeploymentConfigurationException,
  InvalidDeploymentConfigNameException as __InvalidDeploymentConfigNameException,
  InvalidDeploymentStyleException as __InvalidDeploymentStyleException,
  InvalidEC2TagCombinationException as __InvalidEC2TagCombinationException,
  InvalidEC2TagException as __InvalidEC2TagException,
  InvalidECSServiceException as __InvalidECSServiceException,
  InvalidFileExistsBehaviorException as __InvalidFileExistsBehaviorException,
  InvalidGitHubAccountTokenException as __InvalidGitHubAccountTokenException,
  InvalidIgnoreApplicationStopFailuresValueException as __InvalidIgnoreApplicationStopFailuresValueException,
  InvalidLoadBalancerInfoException as __InvalidLoadBalancerInfoException,
  InvalidMinimumHealthyHostValueException as __InvalidMinimumHealthyHostValueException,
  InvalidOnPremisesTagCombinationException as __InvalidOnPremisesTagCombinationException,
  InvalidOperationException as __InvalidOperationException,
  InvalidTargetGroupPairException as __InvalidTargetGroupPairException,
  InvalidTargetInstancesException as __InvalidTargetInstancesException,
  InvalidTrafficRoutingConfigurationException as __InvalidTrafficRoutingConfigurationException,
  InvalidTriggerConfigException as __InvalidTriggerConfigException,
  InvalidUpdateOutdatedInstancesOnlyValueException as __InvalidUpdateOutdatedInstancesOnlyValueException,
  InvalidZonalDeploymentConfigurationException as __InvalidZonalDeploymentConfigurationException,
  LifecycleHookLimitExceededException as __LifecycleHookLimitExceededException,
  RoleRequiredException as __RoleRequiredException,
  TagSetListLimitExceededException as __TagSetListLimitExceededException,
  ThrottlingException as __ThrottlingException,
  TriggerTargetsLimitExceededException as __TriggerTargetsLimitExceededException,
} from "../models/index";
import {
  _A,
  _a,
  _AC,
  _aC,
  _ac,
  _aDSI,
  _AL,
  _ALEE,
  _aN,
  _aOT,
  _ARC,
  _aRC,
  _aSG,
  _aUOIDI,
  _aUOIRDI,
  _BGD,
  _BGDC,
  _bGDC,
  _BGDG,
  _BGDGI,
  _BGDGO,
  _BGDI,
  _BGDO,
  _BITO,
  _c,
  _CDC,
  _CDCI,
  _CDCO,
  _CDG,
  _CDGI,
  _cDGN,
  _CDGO,
  _CDIr,
  _CDO,
  _CDr,
  _cIa,
  _cN,
  _cod,
  _cP,
  _cPa,
  _cr,
  _cT,
  _cTo,
  _d,
  _DCAEE,
  _DCI,
  _dCI,
  _dCIe,
  _DCIUE,
  _dCL,
  _DCLEE,
  _dCN,
  _DCNRE,
  _DDC,
  _DDCI,
  _DGAEE,
  _DGI,
  _dGI,
  _dGIe,
  _dGIep,
  _DGIL,
  _DGLEE,
  _dGN,
  _dGNe,
  _DI,
  _dI,
  _dIe,
  _dIep,
  _DIL,
  _DLEE,
  _DO,
  _dO,
  _dOe,
  _DRO,
  _dRO,
  _DS,
  _dS,
  _dSM,
  _dTe,
  _e,
  _ECSS,
  _ECSSL,
  _ECSSMLEE,
  _ECTF,
  _ECTFL,
  _ECTS,
  _ECTSL,
  _EI,
  _eI,
  _eIL,
  _eIr,
  _ELBI,
  _ELBIL,
  _eM,
  _er,
  _eS,
  _eTF,
  _eTn,
  _eTS,
  _eTSL,
  _ev,
  _F,
  _fEB,
  _fZMDIS,
  _GDC,
  _GDCI,
  _GDCO,
  _GDG,
  _GDGI,
  _GDGO,
  _GFPO,
  _gFPO,
  _hNCU,
  _IACE,
  _IARCE,
  _iASF,
  _IASGE,
  _IBGDCE,
  _IDCNE,
  _IDSEn,
  _IECSSE,
  _IECTCE,
  _IECTE,
  _IFEBE,
  _IGHATE,
  _IIASFVE,
  _ILBIE,
  _IMHHVE,
  _IOE,
  _IOPTCE,
  _IP,
  _iPAF,
  _ITCE,
  _ITGPE,
  _ITIE,
  _ITRCE,
  _iTWTS,
  _IUOIOVE,
  _IZDCE,
  _K,
  _lA,
  _lAD,
  _LBI,
  _lBI,
  _LDC,
  _LDCI,
  _LDCO,
  _LDI,
  _LHLEE,
  _lI,
  _lP,
  _lSD,
  _m,
  _mDIS,
  _MHH,
  _mHH,
  _MHHPZ,
  _mHHPZ,
  _n,
  _nDGN,
  _nT,
  _oAC,
  _oIS,
  _oPITF,
  _OPTS,
  _oPTS,
  _OPTSL,
  _oPTSL,
  _P,
  _pR,
  _pTR,
  _R,
  _RD,
  _rD,
  _rDI,
  _re,
  _rI,
  _RIo,
  _rM,
  _RREo,
  _rTDI,
  _S,
  _Sk,
  _sNe,
  _sRA,
  _sT,
  _st,
  _T,
  _t,
  _TBC,
  _tBC,
  _tBIODS,
  _TBL,
  _tBL,
  _TC,
  _tC,
  _TCL,
  _TE,
  _tE,
  _tFa,
  _tGa,
  _TGIL,
  _tGIL,
  _TGPI,
  _TGPIL,
  _tGPIL,
  _tHE,
  _TI,
  _tIar,
  _tNr,
  _tR,
  _TRC,
  _tRC,
  _TRr,
  _TSLLEE,
  _tTA,
  _TTLEE,
  _tTR,
  _tWTIM,
  _ty,
  _UDG,
  _UDGI,
  _UDGO,
  _uOIO,
  _V,
  _v,
  _wTIM,
  _ZC,
  _zC,
  n0,
  Unit,
} from "./schemas_0";
import { RevisionLocation } from "./schemas_6_Get";
import { AutoScalingGroupList } from "./schemas_10_Deployment";
import { TagFilterList } from "./schemas_11_Deployment";
import { TargetGroupInfo } from "./schemas_14_Deployment";
import { TagList } from "./schemas_16_OnPremises";

/* eslint no-var: 0 */

export var Alarm = struct(n0, _A, 0, [_n], [0]);
export var AlarmConfiguration = struct(n0, _AC, 0, [_e, _iPAF, _a], [2, 2, () => AlarmList]);
export var AlarmsLimitExceededException = error(
  n0,
  _ALEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __AlarmsLimitExceededException
);
export var AutoRollbackConfiguration = struct(n0, _ARC, 0, [_e, _ev], [2, 64 | 0]);
export var BatchGetDeploymentGroupsInput = struct(n0, _BGDGI, 0, [_aN, _dGN], [0, 64 | 0]);
export var BatchGetDeploymentGroupsOutput = struct(n0, _BGDGO, 0, [_dGI, _eM], [() => DeploymentGroupInfoList, 0]);
export var BatchGetDeploymentsInput = struct(n0, _BGDI, 0, [_dIe], [64 | 0]);
export var BatchGetDeploymentsOutput = struct(n0, _BGDO, 0, [_dIep], [() => DeploymentsInfoList]);
export var BlueGreenDeploymentConfiguration = struct(
  n0,
  _BGDC,
  0,
  [_tBIODS, _dRO, _gFPO],
  [() => BlueInstanceTerminationOption, () => DeploymentReadyOption, () => GreenFleetProvisioningOption]
);
export var BlueInstanceTerminationOption = struct(n0, _BITO, 0, [_ac, _tWTIM], [0, 1]);
export var CreateDeploymentConfigInput = struct(
  n0,
  _CDCI,
  0,
  [_dCN, _mHH, _tRC, _cP, _zC],
  [0, () => MinimumHealthyHosts, () => TrafficRoutingConfig, 0, () => ZonalConfig]
);
export var CreateDeploymentConfigOutput = struct(n0, _CDCO, 0, [_dCI], [0]);
export var CreateDeploymentGroupInput = struct(
  n0,
  _CDGI,
  0,
  [_aN, _dGNe, _dCN, _eTF, _oPITF, _aSG, _sRA, _tC, _aC, _aRC, _oIS, _dS, _bGDC, _lBI, _eTS, _eS, _oPTS, _t, _tHE],
  [
    0,
    0,
    0,
    () => EC2TagFilterList,
    () => TagFilterList,
    64 | 0,
    0,
    () => TriggerConfigList,
    () => AlarmConfiguration,
    () => AutoRollbackConfiguration,
    0,
    () => DeploymentStyle,
    () => BlueGreenDeploymentConfiguration,
    () => LoadBalancerInfo,
    () => EC2TagSet,
    () => ECSServiceList,
    () => OnPremisesTagSet,
    () => TagList,
    2,
  ]
);
export var CreateDeploymentGroupOutput = struct(n0, _CDGO, 0, [_dGIe], [0]);
export var CreateDeploymentInput = struct(
  n0,
  _CDIr,
  0,
  [_aN, _dGNe, _re, _dCN, _d, _iASF, _tIar, _aRC, _uOIO, _fEB, _oAC],
  [
    0,
    0,
    () => RevisionLocation,
    0,
    0,
    2,
    () => TargetInstances,
    () => AutoRollbackConfiguration,
    2,
    0,
    () => AlarmConfiguration,
  ]
);
export var CreateDeploymentOutput = struct(n0, _CDO, 0, [_dI], [0]);
export var DeleteDeploymentConfigInput = struct(n0, _DDCI, 0, [_dCN], [0]);
export var DeploymentConfigAlreadyExistsException = error(
  n0,
  _DCAEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentConfigAlreadyExistsException
);
export var DeploymentConfigInfo = struct(
  n0,
  _DCI,
  0,
  [_dCI, _dCN, _mHH, _cT, _cP, _tRC, _zC],
  [0, 0, () => MinimumHealthyHosts, 4, 0, () => TrafficRoutingConfig, () => ZonalConfig]
);
export var DeploymentConfigInUseException = error(
  n0,
  _DCIUE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentConfigInUseException
);
export var DeploymentConfigLimitExceededException = error(
  n0,
  _DCLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentConfigLimitExceededException
);
export var DeploymentConfigNameRequiredException = error(
  n0,
  _DCNRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentConfigNameRequiredException
);
export var DeploymentGroupAlreadyExistsException = error(
  n0,
  _DGAEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentGroupAlreadyExistsException
);
export var DeploymentGroupInfo = struct(
  n0,
  _DGI,
  0,
  [
    _aN,
    _dGIe,
    _dGNe,
    _dCN,
    _eTF,
    _oPITF,
    _aSG,
    _sRA,
    _tR,
    _tC,
    _aC,
    _aRC,
    _dS,
    _oIS,
    _bGDC,
    _lBI,
    _lSD,
    _lAD,
    _eTS,
    _oPTS,
    _cP,
    _eS,
    _tHE,
  ],
  [
    0,
    0,
    0,
    0,
    () => EC2TagFilterList,
    () => TagFilterList,
    () => AutoScalingGroupList,
    0,
    () => RevisionLocation,
    () => TriggerConfigList,
    () => AlarmConfiguration,
    () => AutoRollbackConfiguration,
    () => DeploymentStyle,
    0,
    () => BlueGreenDeploymentConfiguration,
    () => LoadBalancerInfo,
    () => LastDeploymentInfo,
    () => LastDeploymentInfo,
    () => EC2TagSet,
    () => OnPremisesTagSet,
    0,
    () => ECSServiceList,
    2,
  ]
);
export var DeploymentGroupLimitExceededException = error(
  n0,
  _DGLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentGroupLimitExceededException
);
export var DeploymentInfo = struct(
  n0,
  _DI,
  0,
  [
    _aN,
    _dGNe,
    _dCN,
    _dI,
    _pR,
    _re,
    _st,
    _eIr,
    _cT,
    _sT,
    _cTo,
    _dO,
    _d,
    _cr,
    _iASF,
    _aRC,
    _uOIO,
    _rI,
    _dS,
    _tIar,
    _iTWTS,
    _bGDC,
    _lBI,
    _aDSI,
    _fEB,
    _dSM,
    _cP,
    _eI,
    _rD,
    _oAC,
  ],
  [
    0,
    0,
    0,
    0,
    () => RevisionLocation,
    () => RevisionLocation,
    0,
    () => ErrorInformation,
    4,
    4,
    4,
    () => DeploymentOverview,
    0,
    0,
    2,
    () => AutoRollbackConfiguration,
    2,
    () => RollbackInfo,
    () => DeploymentStyle,
    () => TargetInstances,
    2,
    () => BlueGreenDeploymentConfiguration,
    () => LoadBalancerInfo,
    0,
    0,
    64 | 0,
    0,
    0,
    () => RelatedDeployments,
    () => AlarmConfiguration,
  ]
);
export var DeploymentLimitExceededException = error(
  n0,
  _DLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentLimitExceededException
);
export var DeploymentOverview = struct(n0, _DO, 0, [_P, _IP, _S, _F, _Sk, _R], [1, 1, 1, 1, 1, 1]);
export var DeploymentReadyOption = struct(n0, _DRO, 0, [_aOT, _wTIM], [0, 1]);
export var DeploymentStyle = struct(n0, _DS, 0, [_dTe, _dOe], [0, 0]);
export var EC2TagFilter = struct(n0, _ECTF, 0, [_K, _V, _T], [0, 0, 0]);
export var EC2TagSet = struct(n0, _ECTS, 0, [_eTSL], [() => EC2TagSetList]);
export var ECSService = struct(n0, _ECSS, 0, [_sNe, _cN], [0, 0]);
export var ECSServiceMappingLimitExceededException = error(
  n0,
  _ECSSMLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ECSServiceMappingLimitExceededException
);
export var ELBInfo = struct(n0, _ELBI, 0, [_n], [0]);
export var ErrorInformation = struct(n0, _EI, 0, [_cod, _m], [0, 0]);
export var GetDeploymentConfigInput = struct(n0, _GDCI, 0, [_dCN], [0]);
export var GetDeploymentConfigOutput = struct(n0, _GDCO, 0, [_dCIe], [() => DeploymentConfigInfo]);
export var GetDeploymentGroupInput = struct(n0, _GDGI, 0, [_aN, _dGNe], [0, 0]);
export var GetDeploymentGroupOutput = struct(n0, _GDGO, 0, [_dGIep], [() => DeploymentGroupInfo]);
export var GreenFleetProvisioningOption = struct(n0, _GFPO, 0, [_ac], [0]);
export var InvalidAlarmConfigException = error(
  n0,
  _IACE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidAlarmConfigException
);
export var InvalidAutoRollbackConfigException = error(
  n0,
  _IARCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidAutoRollbackConfigException
);
export var InvalidAutoScalingGroupException = error(
  n0,
  _IASGE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidAutoScalingGroupException
);
export var InvalidBlueGreenDeploymentConfigurationException = error(
  n0,
  _IBGDCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidBlueGreenDeploymentConfigurationException
);
export var InvalidDeploymentConfigNameException = error(
  n0,
  _IDCNE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentConfigNameException
);
export var InvalidDeploymentStyleException = error(
  n0,
  _IDSEn,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentStyleException
);
export var InvalidEC2TagCombinationException = error(
  n0,
  _IECTCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidEC2TagCombinationException
);
export var InvalidEC2TagException = error(
  n0,
  _IECTE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidEC2TagException
);
export var InvalidECSServiceException = error(
  n0,
  _IECSSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidECSServiceException
);
export var InvalidFileExistsBehaviorException = error(
  n0,
  _IFEBE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidFileExistsBehaviorException
);
export var InvalidGitHubAccountTokenException = error(
  n0,
  _IGHATE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidGitHubAccountTokenException
);
export var InvalidIgnoreApplicationStopFailuresValueException = error(
  n0,
  _IIASFVE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidIgnoreApplicationStopFailuresValueException
);
export var InvalidLoadBalancerInfoException = error(
  n0,
  _ILBIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidLoadBalancerInfoException
);
export var InvalidMinimumHealthyHostValueException = error(
  n0,
  _IMHHVE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidMinimumHealthyHostValueException
);
export var InvalidOnPremisesTagCombinationException = error(
  n0,
  _IOPTCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidOnPremisesTagCombinationException
);
export var InvalidOperationException = error(
  n0,
  _IOE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidOperationException
);
export var InvalidTargetGroupPairException = error(
  n0,
  _ITGPE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTargetGroupPairException
);
export var InvalidTargetInstancesException = error(
  n0,
  _ITIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTargetInstancesException
);
export var InvalidTrafficRoutingConfigurationException = error(
  n0,
  _ITRCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTrafficRoutingConfigurationException
);
export var InvalidTriggerConfigException = error(
  n0,
  _ITCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTriggerConfigException
);
export var InvalidUpdateOutdatedInstancesOnlyValueException = error(
  n0,
  _IUOIOVE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidUpdateOutdatedInstancesOnlyValueException
);
export var InvalidZonalDeploymentConfigurationException = error(
  n0,
  _IZDCE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidZonalDeploymentConfigurationException
);
export var LastDeploymentInfo = struct(n0, _LDI, 0, [_dI, _st, _eTn, _cT], [0, 0, 4, 4]);
export var LifecycleHookLimitExceededException = error(
  n0,
  _LHLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __LifecycleHookLimitExceededException
);
export var ListDeploymentConfigsInput = struct(n0, _LDCI, 0, [_nT], [0]);
export var ListDeploymentConfigsOutput = struct(n0, _LDCO, 0, [_dCL, _nT], [64 | 0, 0]);
export var LoadBalancerInfo = struct(
  n0,
  _LBI,
  0,
  [_eIL, _tGIL, _tGPIL],
  [() => ELBInfoList, () => TargetGroupInfoList, () => TargetGroupPairInfoList]
);
export var MinimumHealthyHosts = struct(n0, _MHH, 0, [_ty, _v], [0, 1]);
export var MinimumHealthyHostsPerZone = struct(n0, _MHHPZ, 0, [_ty, _v], [0, 1]);
export var OnPremisesTagSet = struct(n0, _OPTS, 0, [_oPTSL], [() => OnPremisesTagSetList]);
export var RelatedDeployments = struct(n0, _RD, 0, [_aUOIRDI, _aUOIDI], [0, 64 | 0]);
export var RoleRequiredException = error(
  n0,
  _RREo,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __RoleRequiredException
);
export var RollbackInfo = struct(n0, _RIo, 0, [_rDI, _rTDI, _rM], [0, 0, 0]);
export var TagSetListLimitExceededException = error(
  n0,
  _TSLLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __TagSetListLimitExceededException
);
export var TargetGroupPairInfo = struct(
  n0,
  _TGPI,
  0,
  [_tGa, _pTR, _tTR],
  [() => TargetGroupInfoList, () => TrafficRoute, () => TrafficRoute]
);
export var TargetInstances = struct(n0, _TI, 0, [_tFa, _aSG, _eTS], [() => EC2TagFilterList, 64 | 0, () => EC2TagSet]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TimeBasedCanary = struct(n0, _TBC, 0, [_cPa, _cIa], [1, 1]);
export var TimeBasedLinear = struct(n0, _TBL, 0, [_lP, _lI], [1, 1]);
export var TrafficRoute = struct(n0, _TRr, 0, [_lA], [64 | 0]);
export var TrafficRoutingConfig = struct(
  n0,
  _TRC,
  0,
  [_ty, _tBC, _tBL],
  [0, () => TimeBasedCanary, () => TimeBasedLinear]
);
export var TriggerConfig = struct(n0, _TC, 0, [_tNr, _tTA, _tE], [0, 0, 64 | 0]);
export var TriggerTargetsLimitExceededException = error(
  n0,
  _TTLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __TriggerTargetsLimitExceededException
);
export var UpdateDeploymentGroupInput = struct(
  n0,
  _UDGI,
  0,
  [_aN, _cDGN, _nDGN, _dCN, _eTF, _oPITF, _aSG, _sRA, _tC, _aC, _aRC, _oIS, _dS, _bGDC, _lBI, _eTS, _eS, _oPTS, _tHE],
  [
    0,
    0,
    0,
    0,
    () => EC2TagFilterList,
    () => TagFilterList,
    64 | 0,
    0,
    () => TriggerConfigList,
    () => AlarmConfiguration,
    () => AutoRollbackConfiguration,
    0,
    () => DeploymentStyle,
    () => BlueGreenDeploymentConfiguration,
    () => LoadBalancerInfo,
    () => EC2TagSet,
    () => ECSServiceList,
    () => OnPremisesTagSet,
    2,
  ]
);
export var UpdateDeploymentGroupOutput = struct(n0, _UDGO, 0, [_hNCU], [() => AutoScalingGroupList]);
export var ZonalConfig = struct(n0, _ZC, 0, [_fZMDIS, _mDIS, _mHHPZ], [1, 1, () => MinimumHealthyHostsPerZone]);
export var AlarmList = list(n0, _AL, 0, () => Alarm);
export var AutoRollbackEventsList = 64 | 0;

export var AutoScalingGroupNameList = 64 | 0;

export var DeploymentConfigsList = 64 | 0;

export var DeploymentGroupInfoList = list(n0, _DGIL, 0, () => DeploymentGroupInfo);
export var DeploymentsInfoList = list(n0, _DIL, 0, () => DeploymentInfo);
export var DeploymentStatusMessageList = 64 | 0;

export var EC2TagFilterList = list(n0, _ECTFL, 0, () => EC2TagFilter);
export var EC2TagSetList = list(n0, _ECTSL, 0, () => EC2TagFilterList);
export var ECSServiceList = list(n0, _ECSSL, 0, () => ECSService);
export var ELBInfoList = list(n0, _ELBIL, 0, () => ELBInfo);
export var ListenerArnList = 64 | 0;

export var OnPremisesTagSetList = list(n0, _OPTSL, 0, () => TagFilterList);
export var TargetGroupInfoList = list(n0, _TGIL, 0, () => TargetGroupInfo);
export var TargetGroupPairInfoList = list(n0, _TGPIL, 0, () => TargetGroupPairInfo);
export var TriggerConfigList = list(n0, _TCL, 0, () => TriggerConfig);
export var TriggerEventTypeList = 64 | 0;

export var BatchGetDeploymentGroups = op(
  n0,
  _BGDG,
  0,
  () => BatchGetDeploymentGroupsInput,
  () => BatchGetDeploymentGroupsOutput
);
export var BatchGetDeployments = op(
  n0,
  _BGD,
  0,
  () => BatchGetDeploymentsInput,
  () => BatchGetDeploymentsOutput
);
export var CreateDeployment = op(
  n0,
  _CDr,
  0,
  () => CreateDeploymentInput,
  () => CreateDeploymentOutput
);
export var CreateDeploymentConfig = op(
  n0,
  _CDC,
  0,
  () => CreateDeploymentConfigInput,
  () => CreateDeploymentConfigOutput
);
export var CreateDeploymentGroup = op(
  n0,
  _CDG,
  0,
  () => CreateDeploymentGroupInput,
  () => CreateDeploymentGroupOutput
);
export var DeleteDeploymentConfig = op(
  n0,
  _DDC,
  0,
  () => DeleteDeploymentConfigInput,
  () => Unit
);
export var GetDeploymentConfig = op(
  n0,
  _GDC,
  0,
  () => GetDeploymentConfigInput,
  () => GetDeploymentConfigOutput
);
export var GetDeploymentGroup = op(
  n0,
  _GDG,
  0,
  () => GetDeploymentGroupInput,
  () => GetDeploymentGroupOutput
);
export var ListDeploymentConfigs = op(
  n0,
  _LDC,
  0,
  () => ListDeploymentConfigsInput,
  () => ListDeploymentConfigsOutput
);
export var UpdateDeploymentGroup = op(
  n0,
  _UDG,
  0,
  () => UpdateDeploymentGroupInput,
  () => UpdateDeploymentGroupOutput
);
