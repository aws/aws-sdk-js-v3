// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _CSA,
  _CSAI,
  _CSAO,
  _D,
  _De,
  _DSAe,
  _DSAIe,
  _DSAOe,
  _DT,
  _Id,
  _IT,
  _LSA,
  _LSAFPA,
  _LSAFPAI,
  _LSAFPAO,
  _LSAI,
  _LSAO,
  _N,
  _NPT,
  _PAI,
  _PIr,
  _PS,
  _PTa,
  _SAD,
  _SAS,
  _SASe,
  _USA,
  _USAI,
  _USAO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateServiceActionInput = struct(n0, _CSAI, 0, [_N, _DT, _De, _D, _AL, _IT], [0, 0, 128 | 0, 0, 0, [0, 4]]);
export var CreateServiceActionOutput = struct(n0, _CSAO, 0, [_SAD], [() => ServiceActionDetail]);
export var DescribeServiceActionInput = struct(n0, _DSAIe, 0, [_Id, _AL], [0, 0]);
export var DescribeServiceActionOutput = struct(n0, _DSAOe, 0, [_SAD], [() => ServiceActionDetail]);
export var ListServiceActionsForProvisioningArtifactInput = struct(
  n0,
  _LSAFPAI,
  0,
  [_PIr, _PAI, _PS, _PTa, _AL],
  [0, 0, 1, 0, 0]
);
export var ListServiceActionsForProvisioningArtifactOutput = struct(
  n0,
  _LSAFPAO,
  0,
  [_SAS, _NPT],
  [() => ServiceActionSummaries, 0]
);
export var ListServiceActionsInput = struct(n0, _LSAI, 0, [_AL, _PS, _PTa], [0, 1, 0]);
export var ListServiceActionsOutput = struct(n0, _LSAO, 0, [_SAS, _NPT], [() => ServiceActionSummaries, 0]);
export var ServiceActionDetail = struct(n0, _SAD, 0, [_SASe, _De], [() => ServiceActionSummary, 128 | 0]);
export var ServiceActionSummary = struct(n0, _SASe, 0, [_Id, _N, _D, _DT], [0, 0, 0, 0]);
export var UpdateServiceActionInput = struct(n0, _USAI, 0, [_Id, _N, _De, _D, _AL], [0, 0, 128 | 0, 0, 0]);
export var UpdateServiceActionOutput = struct(n0, _USAO, 0, [_SAD], [() => ServiceActionDetail]);
export var ServiceActionSummaries = list(n0, _SAS, 0, () => ServiceActionSummary);
export var ServiceActionDefinitionMap = 128 | 0;

export var CreateServiceAction = op(
  n0,
  _CSA,
  0,
  () => CreateServiceActionInput,
  () => CreateServiceActionOutput
);
export var DescribeServiceAction = op(
  n0,
  _DSAe,
  0,
  () => DescribeServiceActionInput,
  () => DescribeServiceActionOutput
);
export var ListServiceActions = op(
  n0,
  _LSA,
  0,
  () => ListServiceActionsInput,
  () => ListServiceActionsOutput
);
export var ListServiceActionsForProvisioningArtifact = op(
  n0,
  _LSAFPA,
  0,
  () => ListServiceActionsForProvisioningArtifactInput,
  () => ListServiceActionsForProvisioningArtifactOutput
);
export var UpdateServiceAction = op(
  n0,
  _USA,
  0,
  () => UpdateServiceActionInput,
  () => UpdateServiceActionOutput
);
