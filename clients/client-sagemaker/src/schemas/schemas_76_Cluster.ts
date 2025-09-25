// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AD,
  _AL,
  _Al,
  _ANl,
  _ARAu,
  _ARC,
  _ARCu,
  _ASTu,
  _ASu,
  _CAl,
  _CASC,
  _CCR,
  _CCr,
  _CCRr,
  _CIGS,
  _CIGSl,
  _CNl,
  _COEC,
  _COl,
  _CRIGS,
  _CRIGSl,
  _CRl,
  _CSC,
  _CTSC,
  _DC,
  _DCe,
  _ECn,
  _Ek,
  _ERx,
  _FSLC,
  _ICA,
  _ICCS,
  _ICDC,
  _ICN,
  _ICns,
  _ICRUP,
  _IG,
  _IGN,
  _IIm,
  _IMAP,
  _ISC,
  _IT,
  _LCC,
  _M,
  _MBS,
  _METIS,
  _NPM,
  _NR,
  _Or,
  _OSDHC,
  _OVC,
  _PUST,
  _RC,
  _RDP,
  _RIG,
  _RMBS,
  _RUP,
  _SEc,
  _SIGB,
  _Sp,
  _SUC,
  _T,
  _TPA,
  _TPC,
  _TSC,
  _Ty,
  _UICI,
  _UICO,
  _UICp,
  _Va,
  _VC,
  _WIIS,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";
import { ClusterInstanceStorageConfigs, ClusterLifeCycleConfig } from "./schemas_11_Cluster";
import { InferenceComponentRuntimeConfig, InferenceComponentSpecification } from "./schemas_85_Inference";

/* eslint no-var: 0 */

export var Alarm = struct(n0, _A, 0, [_ANl], [0]);
export var AlarmDetails = struct(n0, _AD, 0, [_ANl], [0]);
export var AutoRollbackConfig = struct(n0, _ARC, 0, [_Al], [() => AlarmList]);
export var CapacitySizeConfig = struct(n0, _CSC, 0, [_Ty, _Va], [0, 1]);
export var ClusterAutoScalingConfig = struct(n0, _CASC, 0, [_M, _ASTu], [0, 0]);
export var ClusterInstanceGroupSpecification = struct(
  n0,
  _CIGS,
  0,
  [_ICns, _IGN, _IT, _LCC, _ERx, _TPC, _ISC, _OSDHC, _TPA, _OVC, _SUC, _IIm],
  [
    1,
    0,
    0,
    () => ClusterLifeCycleConfig,
    0,
    1,
    () => ClusterInstanceStorageConfigs,
    64 | 0,
    0,
    () => VpcConfig,
    () => ScheduledUpdateConfig,
    0,
  ]
);
export var ClusterOrchestrator = struct(n0, _COl, 0, [_Ek], [() => ClusterOrchestratorEksConfig]);
export var ClusterOrchestratorEksConfig = struct(n0, _COEC, 0, [_CAl], [0]);
export var ClusterRestrictedInstanceGroupSpecification = struct(
  n0,
  _CRIGS,
  0,
  [_ICns, _IGN, _IT, _ERx, _TPC, _ISC, _OSDHC, _TPA, _OVC, _SUC, _ECn],
  [
    1,
    0,
    0,
    0,
    1,
    () => ClusterInstanceStorageConfigs,
    64 | 0,
    0,
    () => VpcConfig,
    () => ScheduledUpdateConfig,
    () => EnvironmentConfig,
  ]
);
export var ClusterTieredStorageConfig = struct(n0, _CTSC, 0, [_M, _IMAP], [0, 1]);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [_CNl, _IG, _RIG, _VC, _T, _Or, _NR, _TSC, _NPM, _CRl, _ASu],
  [
    0,
    () => ClusterInstanceGroupSpecifications,
    () => ClusterRestrictedInstanceGroupSpecifications,
    () => VpcConfig,
    () => TagList,
    () => ClusterOrchestrator,
    0,
    () => ClusterTieredStorageConfig,
    0,
    0,
    () => ClusterAutoScalingConfig,
  ]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_CAl], [0]);
export var DeploymentConfiguration = struct(
  n0,
  _DCe,
  0,
  [_RUP, _WIIS, _ARCu],
  [() => RollingDeploymentPolicy, 1, () => AutoRollbackAlarms]
);
export var EnvironmentConfig = struct(n0, _ECn, 0, [_FSLC], [() => FSxLustreConfig]);
export var FSxLustreConfig = struct(n0, _FSLC, 0, [_SIGB, _PUST], [1, 1]);
export var InferenceComponentCapacitySize = struct(n0, _ICCS, 0, [_Ty, _Va], [0, 1]);
export var InferenceComponentDeploymentConfig = struct(
  n0,
  _ICDC,
  0,
  [_RUP, _ARCu],
  [() => InferenceComponentRollingUpdatePolicy, () => AutoRollbackConfig]
);
export var InferenceComponentRollingUpdatePolicy = struct(
  n0,
  _ICRUP,
  0,
  [_MBS, _WIIS, _METIS, _RMBS],
  [() => InferenceComponentCapacitySize, 1, 1, () => InferenceComponentCapacitySize]
);
export var RollingDeploymentPolicy = struct(
  n0,
  _RDP,
  0,
  [_MBS, _RMBS],
  [() => CapacitySizeConfig, () => CapacitySizeConfig]
);
export var ScheduledUpdateConfig = struct(n0, _SUC, 0, [_SEc, _DC], [0, () => DeploymentConfiguration]);
export var UpdateInferenceComponentInput = struct(
  n0,
  _UICI,
  0,
  [_ICN, _Sp, _RC, _DC],
  [
    0,
    () => InferenceComponentSpecification,
    () => InferenceComponentRuntimeConfig,
    () => InferenceComponentDeploymentConfig,
  ]
);
export var UpdateInferenceComponentOutput = struct(n0, _UICO, 0, [_ICA], [0]);
export var AlarmList = list(n0, _AL, 0, () => Alarm);
export var AutoRollbackAlarms = list(n0, _ARAu, 0, () => AlarmDetails);
export var ClusterInstanceGroupSpecifications = list(n0, _CIGSl, 0, () => ClusterInstanceGroupSpecification);
export var ClusterRestrictedInstanceGroupSpecifications = list(
  n0,
  _CRIGSl,
  0,
  () => ClusterRestrictedInstanceGroupSpecification
);
export var OnStartDeepHealthChecks = 64 | 0;

export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var UpdateInferenceComponent = op(
  n0,
  _UICp,
  0,
  () => UpdateInferenceComponentInput,
  () => UpdateInferenceComponentOutput
);
