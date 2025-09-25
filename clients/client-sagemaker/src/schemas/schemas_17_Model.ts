// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMDS,
  _AMDSd,
  _ASDS,
  _C,
  _CD,
  _CDL,
  _CH,
  _CMI,
  _CMO,
  _CMr,
  _CN,
  _CT,
  _CTo,
  _DICa,
  _DMes,
  _DMIe,
  _DMO,
  _DR,
  _E,
  _ENI,
  _ERA,
  _ET,
  _Fr,
  _FV,
  _HAC,
  _HCA,
  _I,
  _ICm,
  _ID,
  _IEC,
  _IHAC,
  _ISN,
  _ISn,
  _IT,
  _M,
  _MA,
  _MAC,
  _MCSode,
  _MDET,
  _MDS,
  _MDU,
  _ME,
  _MIod,
  _MMC,
  _MNo,
  _MPCD,
  _MPCDL,
  _MPN,
  _MSU,
  _NMN,
  _PC,
  _PIrod,
  _RAC,
  _RAM,
  _RCPA,
  _RIe,
  _RSec,
  _RTIR,
  _RTIRe,
  _SCT,
  _SDS,
  _SDT,
  _SMDS,
  _SRIIT,
  _SRMIMET,
  _STIT,
  _SUr,
  _T,
  _VC,
  ModelAccessConfig,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalModelDataSource = struct(n0, _AMDS, 0, [_CN, _SDS], [0, () => S3ModelDataSource]);
export var AdditionalS3DataSource = struct(n0, _ASDS, 0, [_SDT, _SUr, _CTo, _ET], [0, 0, 0, 0]);
export var ContainerDefinition = struct(
  n0,
  _CD,
  0,
  [_CH, _I, _ICm, _M, _MDU, _MDS, _AMDSd, _E, _MPN, _ISN, _MMC],
  [
    0,
    0,
    () => ImageConfig,
    0,
    0,
    () => ModelDataSource,
    () => AdditionalModelDataSources,
    128 | 0,
    0,
    0,
    () => MultiModelConfig,
  ]
);
export var CreateModelInput = struct(
  n0,
  _CMI,
  0,
  [_MNo, _PC, _C, _IEC, _ERA, _T, _VC, _ENI],
  [
    0,
    () => ContainerDefinition,
    () => ContainerDefinitionList,
    () => InferenceExecutionConfig,
    0,
    () => TagList,
    () => VpcConfig,
    2,
  ]
);
export var CreateModelOutput = struct(n0, _CMO, 0, [_MA], [0]);
export var DeploymentRecommendation = struct(n0, _DR, 0, [_RSec, _RTIR], [0, () => RealTimeInferenceRecommendations]);
export var DescribeModelInput = struct(n0, _DMIe, 0, [_MNo], [0]);
export var DescribeModelOutput = struct(
  n0,
  _DMO,
  0,
  [_MNo, _PC, _C, _IEC, _ERA, _VC, _CT, _MA, _ENI, _DR],
  [
    0,
    () => ContainerDefinition,
    () => ContainerDefinitionList,
    () => InferenceExecutionConfig,
    0,
    () => VpcConfig,
    4,
    0,
    2,
    () => DeploymentRecommendation,
  ]
);
export var ImageConfig = struct(n0, _ICm, 0, [_RAM, _RAC], [0, () => RepositoryAuthConfig]);
export var InferenceExecutionConfig = struct(n0, _IEC, 0, [_M], [0]);
export var InferenceHubAccessConfig = struct(n0, _IHAC, 0, [_HCA], [0]);
export var InferenceSpecification = struct(
  n0,
  _ISn,
  0,
  [_C, _STIT, _SRIIT, _SCT, _SRMIMET],
  [() => ModelPackageContainerDefinitionList, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ModelDataSource = struct(n0, _MDS, 0, [_SDS], [() => S3ModelDataSource]);
export var ModelInput = struct(n0, _MIod, 0, [_DICa], [0]);
export var ModelPackageContainerDefinition = struct(
  n0,
  _MPCD,
  0,
  [_CH, _I, _ID, _MDU, _MDS, _PIrod, _E, _MIod, _Fr, _FV, _NMN, _ASDS, _MDET],
  [0, 0, 0, 0, () => ModelDataSource, 0, 128 | 0, () => ModelInput, 0, 0, 0, () => AdditionalS3DataSource, 0]
);
export var MultiModelConfig = struct(n0, _MMC, 0, [_MCSode], [0]);
export var RealTimeInferenceRecommendation = struct(n0, _RTIRe, 0, [_RIe, _IT, _E], [0, 0, 128 | 0]);
export var RepositoryAuthConfig = struct(n0, _RAC, 0, [_RCPA], [0]);
export var S3ModelDataSource = struct(
  n0,
  _SMDS,
  0,
  [_SUr, _SDT, _CTo, _MAC, _HAC, _MSU, _ET, _ME],
  [0, 0, 0, () => ModelAccessConfig, () => InferenceHubAccessConfig, 0, 0, 0]
);
export var AdditionalModelDataSources = list(n0, _AMDSd, 0, () => AdditionalModelDataSource);
export var ContainerDefinitionList = list(n0, _CDL, 0, () => ContainerDefinition);
export var ContentTypes = 64 | 0;

export var ModelPackageContainerDefinitionList = list(n0, _MPCDL, 0, () => ModelPackageContainerDefinition);
export var RealtimeInferenceInstanceTypes = 64 | 0;

export var RealTimeInferenceRecommendations = list(n0, _RTIR, 0, () => RealTimeInferenceRecommendation);
export var ResponseMIMETypes = 64 | 0;

export var TransformInstanceTypes = 64 | 0;

export var CreateModel = op(
  n0,
  _CMr,
  0,
  () => CreateModelInput,
  () => CreateModelOutput
);
export var DescribeModel = op(
  n0,
  _DMes,
  0,
  () => DescribeModelInput,
  () => DescribeModelOutput
);
