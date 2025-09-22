// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _CSo,
  _D,
  _DPPe,
  _DPPIe,
  _DPPOe,
  _K,
  _PAI,
  _PAN,
  _PAO,
  _PAOK,
  _PAOr,
  _PAP,
  _PAPr,
  _PIa,
  _PIr,
  _PNa,
  _PNr,
  _SSA,
  _SSR,
  _T,
  _TO,
  _TOS,
  _TOSa,
  _UI,
  _UIs,
  _V,
  _Va,
  n0,
} from "./schemas_0";
import { ConstraintSummaries } from "./schemas_5_Constraint";
import { ProvisioningArtifactParameters } from "./schemas_16_Product";

/* eslint no-var: 0 */

export var DescribeProvisioningParametersInput = struct(
  n0,
  _DPPIe,
  0,
  [_AL, _PIr, _PNr, _PAI, _PAN, _PIa, _PNa],
  [0, 0, 0, 0, 0, 0, 0]
);
export var DescribeProvisioningParametersOutput = struct(
  n0,
  _DPPOe,
  0,
  [_PAP, _CSo, _UI, _TO, _PAPr, _PAO, _PAOK],
  [
    () => ProvisioningArtifactParameters,
    () => ConstraintSummaries,
    () => UsageInstructions,
    () => TagOptionSummaries,
    () => ProvisioningArtifactPreferences,
    () => ProvisioningArtifactOutputs,
    () => ProvisioningArtifactOutputs,
  ]
);
export var ProvisioningArtifactOutput = struct(n0, _PAOr, 0, [_K, _D], [0, 0]);
export var ProvisioningArtifactPreferences = struct(n0, _PAPr, 0, [_SSA, _SSR], [64 | 0, 64 | 0]);
export var TagOptionSummary = struct(n0, _TOS, 0, [_K, _Va], [0, 64 | 0]);
export var UsageInstruction = struct(n0, _UIs, 0, [_T, _V], [0, 0]);
export var ProvisioningArtifactOutputs = list(n0, _PAO, 0, () => ProvisioningArtifactOutput);
export var StackSetAccounts = 64 | 0;

export var StackSetRegions = 64 | 0;

export var TagOptionSummaries = list(n0, _TOSa, 0, () => TagOptionSummary);
export var TagOptionValues = 64 | 0;

export var UsageInstructions = list(n0, _UI, 0, () => UsageInstruction);
export var DescribeProvisioningParameters = op(
  n0,
  _DPPe,
  0,
  () => DescribeProvisioningParametersInput,
  () => DescribeProvisioningParametersOutput
);
