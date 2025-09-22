// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _AL,
  _Bu,
  _CT,
  _D,
  _Di,
  _DPesc,
  _DPIesc,
  _DPOesc,
  _DPV,
  _DPVI,
  _DPVO,
  _F,
  _G,
  _HDP,
  _Id,
  _LP,
  _LPa,
  _LPAFSA,
  _LPAFSAI,
  _LPAFSAO,
  _N,
  _NPT,
  _O,
  _PA,
  _PAr,
  _PAV,
  _PAVr,
  _PIr,
  _PS,
  _PTa,
  _PVA,
  _PVAV,
  _PVAVr,
  _PVF,
  _PVS,
  _PVSr,
  _SAI,
  _SB,
  _SD,
  _SDho,
  _SE,
  _SO,
  _SPe,
  _SPIe,
  _SPO,
  _SU,
  _T,
  _V,
  n0,
} from "./schemas_0";
import { Budgets } from "./schemas_10_Describe";

/* eslint no-var: 0 */

export var DescribeProductInput = struct(n0, _DPIesc, 0, [_AL, _Id, _N], [0, 0, 0]);
export var DescribeProductOutput = struct(
  n0,
  _DPOesc,
  0,
  [_PVS, _PA, _Bu, _LP],
  [() => ProductViewSummary, () => ProvisioningArtifacts, () => Budgets, () => LaunchPaths]
);
export var DescribeProductViewInput = struct(n0, _DPVI, 0, [_AL, _Id], [0, 0]);
export var DescribeProductViewOutput = struct(
  n0,
  _DPVO,
  0,
  [_PVS, _PA],
  [() => ProductViewSummary, () => ProvisioningArtifacts]
);
export var LaunchPath = struct(n0, _LPa, 0, [_Id, _N], [0, 0]);
export var ListProvisioningArtifactsForServiceActionInput = struct(
  n0,
  _LPAFSAI,
  0,
  [_SAI, _PS, _PTa, _AL],
  [0, 1, 0, 0]
);
export var ListProvisioningArtifactsForServiceActionOutput = struct(
  n0,
  _LPAFSAO,
  0,
  [_PAV, _NPT],
  [() => ProvisioningArtifactViews, 0]
);
export var ProductViewAggregationValue = struct(n0, _PVAV, 0, [_V, _AC], [0, 1]);
export var ProductViewSummary = struct(
  n0,
  _PVS,
  0,
  [_Id, _PIr, _N, _O, _SDho, _T, _Di, _HDP, _SE, _SD, _SU],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
);
export var ProvisioningArtifact = struct(n0, _PAr, 0, [_Id, _N, _D, _CT, _G], [0, 0, 0, 4, 0]);
export var ProvisioningArtifactView = struct(
  n0,
  _PAVr,
  0,
  [_PVS, _PAr],
  [() => ProductViewSummary, () => ProvisioningArtifact]
);
export var SearchProductsInput = struct(
  n0,
  _SPIe,
  0,
  [_AL, _F, _PS, _SB, _SO, _PTa],
  [0, map(n0, _PVF, 0, 0, 64 | 0), 1, 0, 0, 0]
);
export var SearchProductsOutput = struct(
  n0,
  _SPO,
  0,
  [_PVSr, _PVA, _NPT],
  [() => ProductViewSummaries, () => ProductViewAggregations, 0]
);
export var LaunchPaths = list(n0, _LP, 0, () => LaunchPath);
export var ProductViewAggregationValues = list(n0, _PVAVr, 0, () => ProductViewAggregationValue);
export var ProductViewFilterValues = 64 | 0;

export var ProductViewSummaries = list(n0, _PVSr, 0, () => ProductViewSummary);
export var ProvisioningArtifacts = list(n0, _PA, 0, () => ProvisioningArtifact);
export var ProvisioningArtifactViews = list(n0, _PAV, 0, () => ProvisioningArtifactView);
export var ProductViewAggregations = map(n0, _PVA, 0, 0, () => ProductViewAggregationValues);
export var ProductViewFilters = map(n0, _PVF, 0, 0, 64 | 0);
export var DescribeProduct = op(
  n0,
  _DPesc,
  0,
  () => DescribeProductInput,
  () => DescribeProductOutput
);
export var DescribeProductView = op(
  n0,
  _DPV,
  0,
  () => DescribeProductViewInput,
  () => DescribeProductViewOutput
);
export var ListProvisioningArtifactsForServiceAction = op(
  n0,
  _LPAFSA,
  0,
  () => ListProvisioningArtifactsForServiceActionInput,
  () => ListProvisioningArtifactsForServiceActionOutput
);
export var SearchProducts = op(
  n0,
  _SPe,
  0,
  () => SearchProductsInput,
  () => SearchProductsOutput
);
