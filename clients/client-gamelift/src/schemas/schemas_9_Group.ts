// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _CA,
  _CCGD,
  _CCGDI,
  _CCGDO,
  _CD,
  _CDL,
  _CEL,
  _CEo,
  _CGD,
  _CGDA,
  _CGDL,
  _CGDo,
  _CGT,
  _CHC,
  _CI,
  _CIL,
  _CIon,
  _CMP,
  _CMPL,
  _CN,
  _CNo,
  _Com,
  _Con,
  _CP,
  _CPC,
  _CPRL,
  _CPRo,
  _CPRon,
  _Cr,
  _CRI,
  _CT,
  _DFD,
  _DFDI,
  _DFDO,
  _DI,
  _DOe,
  _DS,
  _EO,
  _Es,
  _FA,
  _FD,
  _FI,
  _FP,
  _GCA,
  _GCAI,
  _GCAO,
  _GSCD,
  _GSCDI,
  _HC,
  _I,
  _IP,
  _IU,
  _LCGD,
  _LCGDI,
  _LCGDO,
  _LD,
  _LDo,
  _Li,
  _MHLM,
  _MP,
  _N,
  _NTe,
  _OS,
  _P,
  _PCo,
  _R,
  _RID,
  _SCD,
  _SCDI,
  _SCDIL,
  _SCDL,
  _SCDu,
  _SP,
  _SR,
  _SSV,
  _St,
  _Ta,
  _Tar,
  _Ti,
  _TMLM,
  _TP,
  _TVL,
  _Va,
  _Vc,
  _VD,
  _VN,
  n0,
  PortNumber,
  TagList,
} from "./schemas_0";
import { FleetDeployment } from "./schemas_5_Fleet";
import { AwsCredentials } from "./schemas_49_";

/* eslint no-var: 0 */

export var ContainerDependency = struct(n0, _CD, 0, [_CNo, _Con], [0, 0]);
export var ContainerEnvironment = struct(n0, _CEo, 0, [_N, _Va], [0, 0]);
export var ContainerGroupDefinition = struct(
  n0,
  _CGD,
  0,
  [_CGDA, _CT, _OS, _N, _CGT, _TMLM, _TVL, _GSCD, _SCD, _VN, _VD, _St, _SR],
  [0, 4, 0, 0, 0, 1, 1, [() => GameServerContainerDefinition, 0], [() => SupportContainerDefinitionList, 0], 1, 0, 0, 0]
);
export var ContainerHealthCheck = struct(n0, _CHC, 0, [_Com, _I, _R, _SP, _Ti], [64 | 0, 1, 1, 1, 1]);
export var ContainerIdentifier = struct(n0, _CI, 0, [_CNo, _CRI], [0, 0]);
export var ContainerMountPoint = struct(n0, _CMP, 0, [_IP, _CP, _AL], [0, 0, 0]);
export var ContainerPortConfiguration = struct(n0, _CPC, 0, [_CPRo], [[() => ContainerPortRangeList, 0]]);
export var ContainerPortRange = struct(
  n0,
  _CPRon,
  0,
  [_FP, _TP, _P],
  [[() => PortNumber, 0], [() => PortNumber, 0], 0]
);
export var CreateContainerGroupDefinitionInput = struct(
  n0,
  _CCGDI,
  0,
  [_N, _CGT, _TMLM, _TVL, _GSCD, _SCD, _OS, _VD, _Ta],
  [
    0,
    0,
    1,
    1,
    [() => GameServerContainerDefinitionInput, 0],
    [() => SupportContainerDefinitionInputList, 0],
    0,
    0,
    () => TagList,
  ]
);
export var CreateContainerGroupDefinitionOutput = struct(n0, _CCGDO, 0, [_CGD], [[() => ContainerGroupDefinition, 0]]);
export var DescribeFleetDeploymentInput = struct(n0, _DFDI, 0, [_FI, _DI], [0, 0]);
export var DescribeFleetDeploymentOutput = struct(
  n0,
  _DFDO,
  0,
  [_FD, _LD],
  [() => FleetDeployment, () => LocationalDeployments]
);
export var GameServerContainerDefinition = struct(
  n0,
  _GSCD,
  0,
  [_CNo, _DOe, _MP, _EO, _IU, _PCo, _RID, _SSV],
  [
    0,
    () => ContainerDependencyList,
    () => ContainerMountPointList,
    () => ContainerEnvironmentList,
    0,
    [() => ContainerPortConfiguration, 0],
    0,
    0,
  ]
);
export var GameServerContainerDefinitionInput = struct(
  n0,
  _GSCDI,
  0,
  [_CNo, _DOe, _MP, _EO, _IU, _PCo, _SSV],
  [
    0,
    () => ContainerDependencyList,
    () => ContainerMountPointList,
    () => ContainerEnvironmentList,
    0,
    [() => ContainerPortConfiguration, 0],
    0,
  ]
);
export var GetComputeAccessInput = struct(n0, _GCAI, 0, [_FI, _CN], [0, 0]);
export var GetComputeAccessOutput = struct(
  n0,
  _GCAO,
  0,
  [_FI, _FA, _CN, _CA, _Cr, _Tar, _CIon],
  [0, 0, 0, 0, [() => AwsCredentials, 0], 0, () => ContainerIdentifierList]
);
export var ListContainerGroupDefinitionsInput = struct(n0, _LCGDI, 0, [_CGT, _Li, _NTe], [0, 1, 0]);
export var ListContainerGroupDefinitionsOutput = struct(
  n0,
  _LCGDO,
  0,
  [_CGDo, _NTe],
  [[() => ContainerGroupDefinitionList, 0], 0]
);
export var LocationalDeployment = struct(n0, _LDo, 0, [_DS], [0]);
export var SupportContainerDefinition = struct(
  n0,
  _SCDu,
  0,
  [_CNo, _DOe, _MP, _EO, _Es, _HC, _IU, _MHLM, _PCo, _RID, _Vc],
  [
    0,
    () => ContainerDependencyList,
    () => ContainerMountPointList,
    () => ContainerEnvironmentList,
    2,
    () => ContainerHealthCheck,
    0,
    1,
    [() => ContainerPortConfiguration, 0],
    0,
    1,
  ]
);
export var SupportContainerDefinitionInput = struct(
  n0,
  _SCDI,
  0,
  [_CNo, _DOe, _MP, _EO, _Es, _HC, _IU, _MHLM, _PCo, _Vc],
  [
    0,
    () => ContainerDependencyList,
    () => ContainerMountPointList,
    () => ContainerEnvironmentList,
    2,
    () => ContainerHealthCheck,
    0,
    1,
    [() => ContainerPortConfiguration, 0],
    1,
  ]
);
export var ContainerCommandStringList = 64 | 0;

export var ContainerDependencyList = list(n0, _CDL, 0, () => ContainerDependency);
export var ContainerEnvironmentList = list(n0, _CEL, 0, () => ContainerEnvironment);
export var ContainerGroupDefinitionList = list(n0, _CGDL, 0, [() => ContainerGroupDefinition, 0]);
export var ContainerIdentifierList = list(n0, _CIL, 0, () => ContainerIdentifier);
export var ContainerMountPointList = list(n0, _CMPL, 0, () => ContainerMountPoint);
export var ContainerPortRangeList = list(n0, _CPRL, 0, [() => ContainerPortRange, 0]);
export var SupportContainerDefinitionInputList = list(n0, _SCDIL, 0, [() => SupportContainerDefinitionInput, 0]);
export var SupportContainerDefinitionList = list(n0, _SCDL, 0, [() => SupportContainerDefinition, 0]);
export var LocationalDeployments = map(n0, _LD, 0, 0, () => LocationalDeployment);
export var CreateContainerGroupDefinition = op(
  n0,
  _CCGD,
  0,
  () => CreateContainerGroupDefinitionInput,
  () => CreateContainerGroupDefinitionOutput
);
export var DescribeFleetDeployment = op(
  n0,
  _DFD,
  0,
  () => DescribeFleetDeploymentInput,
  () => DescribeFleetDeploymentOutput
);
export var GetComputeAccess = op(
  n0,
  _GCA,
  0,
  () => GetComputeAccessInput,
  () => GetComputeAccessOutput
);
export var ListContainerGroupDefinitions = op(
  n0,
  _LCGD,
  0,
  () => ListContainerGroupDefinitionsInput,
  () => ListContainerGroupDefinitionsOutput
);
