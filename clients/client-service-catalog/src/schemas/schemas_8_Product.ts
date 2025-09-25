// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _AP,
  _AT,
  _B,
  _Bu,
  _CA,
  _CC,
  _CCI,
  _CCO,
  _CD,
  _CP,
  _CPo,
  _CSod,
  _CSP,
  _CT,
  _D,
  _DCe,
  _DCIe,
  _DCOe,
  _Di,
  _DPAA,
  _DPAAI,
  _DPAAO,
  _F,
  _Id,
  _IT,
  _LS,
  _LSS,
  _LSSM,
  _LSSPAI,
  _LSST,
  _LST,
  _N,
  _NPT,
  _O,
  _P,
  _PAM,
  _PARNr,
  _PAS,
  _PASr,
  _PI,
  _PIr,
  _PS,
  _PSr,
  _PTa,
  _PVD,
  _PVDr,
  _PVF,
  _PVS,
  _R,
  _RTem,
  _S,
  _SB,
  _SC,
  _SCD,
  _SCP,
  _SD,
  _SE,
  _SO,
  _SPAA,
  _SPAAI,
  _SPAAO,
  _SPI,
  _SU,
  _T,
  _Ta,
  _TO,
  _UC,
  _UCI,
  _UCO,
  _UPIp,
  _UPOp,
  _UPp,
  n0,
} from "./schemas_0";
import { TagOptionDetails } from "./schemas_2_Tag";
import { ConstraintDetail } from "./schemas_5_Constraint";
import { Budgets } from "./schemas_10_Describe";
import { ProductViewSummary } from "./schemas_12_Product";
import { Tags } from "./schemas_25_Product";
import { AddTags } from "./schemas_29_Portfolio";

/* eslint no-var: 0 */

export var CodeStarParameters = struct(n0, _CSP, 0, [_CA, _R, _B, _AP], [0, 0, 0, 0]);
export var CreateConstraintInput = struct(n0, _CCI, 0, [_AL, _PI, _PIr, _P, _T, _D, _IT], [0, 0, 0, 0, 0, 0, [0, 4]]);
export var CreateConstraintOutput = struct(n0, _CCO, 0, [_CD, _CP, _S], [() => ConstraintDetail, 0, 0]);
export var DescribeConstraintInput = struct(n0, _DCIe, 0, [_AL, _Id], [0, 0]);
export var DescribeConstraintOutput = struct(n0, _DCOe, 0, [_CD, _CP, _S], [() => ConstraintDetail, 0, 0]);
export var DescribeProductAsAdminInput = struct(n0, _DPAAI, 0, [_AL, _Id, _N, _SPI], [0, 0, 0, 0]);
export var DescribeProductAsAdminOutput = struct(
  n0,
  _DPAAO,
  0,
  [_PVD, _PAS, _Ta, _TO, _Bu],
  [() => ProductViewDetail, () => ProvisioningArtifactSummaries, () => Tags, () => TagOptionDetails, () => Budgets]
);
export var LastSync = struct(n0, _LS, 0, [_LST, _LSS, _LSSM, _LSST, _LSSPAI], [4, 0, 0, 4, 0]);
export var ProductViewDetail = struct(
  n0,
  _PVD,
  0,
  [_PVS, _S, _PARNr, _CT, _SC],
  [() => ProductViewSummary, 0, 0, 4, () => SourceConnectionDetail]
);
export var ProvisioningArtifactSummary = struct(n0, _PASr, 0, [_Id, _N, _D, _CT, _PAM], [0, 0, 0, 4, 128 | 0]);
export var SearchProductsAsAdminInput = struct(
  n0,
  _SPAAI,
  0,
  [_AL, _PI, _F, _SB, _SO, _PTa, _PS, _PSr],
  [0, 0, map(n0, _PVF, 0, 0, 64 | 0), 0, 0, 0, 1, 0]
);
export var SearchProductsAsAdminOutput = struct(n0, _SPAAO, 0, [_PVDr, _NPT], [() => ProductViewDetails, 0]);
export var SourceConnection = struct(n0, _SC, 0, [_T, _CPo], [0, () => SourceConnectionParameters]);
export var SourceConnectionDetail = struct(
  n0,
  _SCD,
  0,
  [_T, _CPo, _LS],
  [0, () => SourceConnectionParameters, () => LastSync]
);
export var SourceConnectionParameters = struct(n0, _SCP, 0, [_CSod], [() => CodeStarParameters]);
export var UpdateConstraintInput = struct(n0, _UCI, 0, [_AL, _Id, _D, _P], [0, 0, 0, 0]);
export var UpdateConstraintOutput = struct(n0, _UCO, 0, [_CD, _CP, _S], [() => ConstraintDetail, 0, 0]);
export var UpdateProductInput = struct(
  n0,
  _UPIp,
  0,
  [_AL, _Id, _N, _O, _D, _Di, _SD, _SE, _SU, _AT, _RTem, _SC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => AddTags, 64 | 0, () => SourceConnection]
);
export var UpdateProductOutput = struct(n0, _UPOp, 0, [_PVD, _Ta], [() => ProductViewDetail, () => Tags]);
export var ProductViewDetails = list(n0, _PVDr, 0, () => ProductViewDetail);
export var ProvisioningArtifactSummaries = list(n0, _PAS, 0, () => ProvisioningArtifactSummary);
export var ProvisioningArtifactInfo = 128 | 0;

export var CreateConstraint = op(
  n0,
  _CC,
  0,
  () => CreateConstraintInput,
  () => CreateConstraintOutput
);
export var DescribeConstraint = op(
  n0,
  _DCe,
  0,
  () => DescribeConstraintInput,
  () => DescribeConstraintOutput
);
export var DescribeProductAsAdmin = op(
  n0,
  _DPAA,
  0,
  () => DescribeProductAsAdminInput,
  () => DescribeProductAsAdminOutput
);
export var SearchProductsAsAdmin = op(
  n0,
  _SPAA,
  0,
  () => SearchProductsAsAdminInput,
  () => SearchProductsAsAdminOutput
);
export var UpdateConstraint = op(
  n0,
  _UC,
  0,
  () => UpdateConstraintInput,
  () => UpdateConstraintOutput
);
export var UpdateProduct = op(
  n0,
  _UPp,
  0,
  () => UpdateProductInput,
  () => UpdateProductOutput
);
