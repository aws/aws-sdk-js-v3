// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CGD,
  _CGDo,
  _DCGD,
  _DCGDe,
  _DCGDI,
  _DCGDIe,
  _DCGDO,
  _DCGDOe,
  _GSCD,
  _LCGDV,
  _LCGDVI,
  _LCGDVO,
  _Li,
  _N,
  _NTe,
  _OS,
  _SCD,
  _SVN,
  _TMLM,
  _TVL,
  _UCGD,
  _UCGDI,
  _UCGDO,
  _VCTR,
  _VD,
  _VN,
  n0,
} from "./schemas_0";
import {
  ContainerGroupDefinition,
  ContainerGroupDefinitionList,
  GameServerContainerDefinitionInput,
  SupportContainerDefinitionInputList,
} from "./schemas_9_Group";

/* eslint no-var: 0 */

export var DeleteContainerGroupDefinitionInput = struct(n0, _DCGDI, 0, [_N, _VN, _VCTR], [0, 1, 1]);
export var DeleteContainerGroupDefinitionOutput = struct(n0, _DCGDO, 0, [], []);
export var DescribeContainerGroupDefinitionInput = struct(n0, _DCGDIe, 0, [_N, _VN], [0, 1]);
export var DescribeContainerGroupDefinitionOutput = struct(
  n0,
  _DCGDOe,
  0,
  [_CGD],
  [[() => ContainerGroupDefinition, 0]]
);
export var ListContainerGroupDefinitionVersionsInput = struct(n0, _LCGDVI, 0, [_N, _Li, _NTe], [0, 1, 0]);
export var ListContainerGroupDefinitionVersionsOutput = struct(
  n0,
  _LCGDVO,
  0,
  [_CGDo, _NTe],
  [[() => ContainerGroupDefinitionList, 0], 0]
);
export var UpdateContainerGroupDefinitionInput = struct(
  n0,
  _UCGDI,
  0,
  [_N, _GSCD, _SCD, _TMLM, _TVL, _VD, _SVN, _OS],
  [0, [() => GameServerContainerDefinitionInput, 0], [() => SupportContainerDefinitionInputList, 0], 1, 1, 0, 1, 0]
);
export var UpdateContainerGroupDefinitionOutput = struct(n0, _UCGDO, 0, [_CGD], [[() => ContainerGroupDefinition, 0]]);
export var DeleteContainerGroupDefinition = op(
  n0,
  _DCGD,
  0,
  () => DeleteContainerGroupDefinitionInput,
  () => DeleteContainerGroupDefinitionOutput
);
export var DescribeContainerGroupDefinition = op(
  n0,
  _DCGDe,
  0,
  () => DescribeContainerGroupDefinitionInput,
  () => DescribeContainerGroupDefinitionOutput
);
export var ListContainerGroupDefinitionVersions = op(
  n0,
  _LCGDV,
  0,
  () => ListContainerGroupDefinitionVersionsInput,
  () => ListContainerGroupDefinitionVersionsOutput
);
export var UpdateContainerGroupDefinition = op(
  n0,
  _UCGD,
  0,
  () => UpdateContainerGroupDefinitionInput,
  () => UpdateContainerGroupDefinitionOutput
);
