// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AL,
  _ARN,
  _AT,
  _Bu,
  _CPA,
  _CPAI,
  _CPAO,
  _CPIr,
  _CPIre,
  _CPOr,
  _CPOre,
  _CPr,
  _CPre,
  _CT,
  _D,
  _Di,
  _DN,
  _DPAe,
  _DPAIe,
  _DPAOe,
  _DPes,
  _DPIes,
  _DPOes,
  _DTV,
  _G,
  _I,
  _Id,
  _IPAP,
  _IT,
  _LAPS,
  _LAPSI,
  _LAPSO,
  _LPAi,
  _LPAIi,
  _LPAOi,
  _LPFP,
  _LPFPI,
  _LPFPO,
  _LPI,
  _LPi,
  _LPO,
  _N,
  _NPT,
  _O,
  _P,
  _PAD,
  _PADr,
  _PAI,
  _PAN,
  _PAP,
  _PAProv,
  _PD,
  _PDo,
  _PIr,
  _PN,
  _PNr,
  _PS,
  _PST,
  _PTa,
  _PTr,
  _PVD,
  _RTem,
  _S,
  _SC,
  _SD,
  _SE,
  _SR,
  _SU,
  _T,
  _Ta,
  _TO,
  _UP,
  _UPA,
  _UPAI,
  _UPAO,
  _UPI,
  _UPO,
  _Ve,
  n0,
} from "./schemas_0";
import { TagOptionDetails } from "./schemas_2_Tag";
import { ProductViewDetail, SourceConnection } from "./schemas_8_Product";
import { Budgets } from "./schemas_10_Describe";
import { ProvisioningArtifactParameters } from "./schemas_16_Product";
import { Tags } from "./schemas_25_Product";
import { AddTags } from "./schemas_29_Portfolio";

/* eslint no-var: 0 */

export var CreatePortfolioInput = struct(
  n0,
  _CPIr,
  0,
  [_AL, _DN, _D, _PN, _Ta, _IT],
  [0, 0, 0, 0, () => AddTags, [0, 4]]
);
export var CreatePortfolioOutput = struct(n0, _CPOr, 0, [_PD, _Ta], [() => PortfolioDetail, () => Tags]);
export var CreateProductInput = struct(
  n0,
  _CPIre,
  0,
  [_AL, _N, _O, _D, _Di, _SD, _SE, _SU, _PTr, _Ta, _PAP, _IT, _SC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => AddTags, () => ProvisioningArtifactProperties, [0, 4], () => SourceConnection]
);
export var CreateProductOutput = struct(
  n0,
  _CPOre,
  0,
  [_PVD, _PAD, _Ta],
  [() => ProductViewDetail, () => ProvisioningArtifactDetail, () => Tags]
);
export var CreateProvisioningArtifactInput = struct(
  n0,
  _CPAI,
  0,
  [_AL, _PIr, _P, _IT],
  [0, 0, () => ProvisioningArtifactProperties, [0, 4]]
);
export var CreateProvisioningArtifactOutput = struct(
  n0,
  _CPAO,
  0,
  [_PAD, _I, _S],
  [() => ProvisioningArtifactDetail, 128 | 0, 0]
);
export var DescribePortfolioInput = struct(n0, _DPIes, 0, [_AL, _Id], [0, 0]);
export var DescribePortfolioOutput = struct(
  n0,
  _DPOes,
  0,
  [_PD, _Ta, _TO, _Bu],
  [() => PortfolioDetail, () => Tags, () => TagOptionDetails, () => Budgets]
);
export var DescribeProvisioningArtifactInput = struct(
  n0,
  _DPAIe,
  0,
  [_AL, _PAI, _PIr, _PAN, _PNr, _Ve, _IPAP],
  [0, 0, 0, 0, 0, 2, 2]
);
export var DescribeProvisioningArtifactOutput = struct(
  n0,
  _DPAOe,
  0,
  [_PAD, _I, _S, _PAP],
  [() => ProvisioningArtifactDetail, 128 | 0, 0, () => ProvisioningArtifactParameters]
);
export var ListAcceptedPortfolioSharesInput = struct(n0, _LAPSI, 0, [_AL, _PTa, _PS, _PST], [0, 0, 1, 0]);
export var ListAcceptedPortfolioSharesOutput = struct(n0, _LAPSO, 0, [_PDo, _NPT], [() => PortfolioDetails, 0]);
export var ListPortfoliosForProductInput = struct(n0, _LPFPI, 0, [_AL, _PIr, _PTa, _PS], [0, 0, 0, 1]);
export var ListPortfoliosForProductOutput = struct(n0, _LPFPO, 0, [_PDo, _NPT], [() => PortfolioDetails, 0]);
export var ListPortfoliosInput = struct(n0, _LPI, 0, [_AL, _PTa, _PS], [0, 0, 1]);
export var ListPortfoliosOutput = struct(n0, _LPO, 0, [_PDo, _NPT], [() => PortfolioDetails, 0]);
export var ListProvisioningArtifactsInput = struct(n0, _LPAIi, 0, [_AL, _PIr], [0, 0]);
export var ListProvisioningArtifactsOutput = struct(
  n0,
  _LPAOi,
  0,
  [_PADr, _NPT],
  [() => ProvisioningArtifactDetails, 0]
);
export var PortfolioDetail = struct(n0, _PD, 0, [_Id, _ARN, _DN, _D, _CT, _PN], [0, 0, 0, 0, 4, 0]);
export var ProvisioningArtifactDetail = struct(
  n0,
  _PAD,
  0,
  [_Id, _N, _D, _T, _CT, _A, _G, _SR],
  [0, 0, 0, 0, 4, 2, 0, 0]
);
export var ProvisioningArtifactProperties = struct(n0, _PAProv, 0, [_N, _D, _I, _T, _DTV], [0, 0, 128 | 0, 0, 2]);
export var UpdatePortfolioInput = struct(
  n0,
  _UPI,
  0,
  [_AL, _Id, _DN, _D, _PN, _AT, _RTem],
  [0, 0, 0, 0, 0, () => AddTags, 64 | 0]
);
export var UpdatePortfolioOutput = struct(n0, _UPO, 0, [_PD, _Ta], [() => PortfolioDetail, () => Tags]);
export var UpdateProvisioningArtifactInput = struct(
  n0,
  _UPAI,
  0,
  [_AL, _PIr, _PAI, _N, _D, _A, _G],
  [0, 0, 0, 0, 0, 2, 0]
);
export var UpdateProvisioningArtifactOutput = struct(
  n0,
  _UPAO,
  0,
  [_PAD, _I, _S],
  [() => ProvisioningArtifactDetail, 128 | 0, 0]
);
export var PortfolioDetails = list(n0, _PDo, 0, () => PortfolioDetail);
export var ProvisioningArtifactDetails = list(n0, _PADr, 0, () => ProvisioningArtifactDetail);
export var CreatePortfolio = op(
  n0,
  _CPr,
  0,
  () => CreatePortfolioInput,
  () => CreatePortfolioOutput
);
export var CreateProduct = op(
  n0,
  _CPre,
  0,
  () => CreateProductInput,
  () => CreateProductOutput
);
export var CreateProvisioningArtifact = op(
  n0,
  _CPA,
  0,
  () => CreateProvisioningArtifactInput,
  () => CreateProvisioningArtifactOutput
);
export var DescribePortfolio = op(
  n0,
  _DPes,
  0,
  () => DescribePortfolioInput,
  () => DescribePortfolioOutput
);
export var DescribeProvisioningArtifact = op(
  n0,
  _DPAe,
  0,
  () => DescribeProvisioningArtifactInput,
  () => DescribeProvisioningArtifactOutput
);
export var ListAcceptedPortfolioShares = op(
  n0,
  _LAPS,
  0,
  () => ListAcceptedPortfolioSharesInput,
  () => ListAcceptedPortfolioSharesOutput
);
export var ListPortfolios = op(
  n0,
  _LPi,
  0,
  () => ListPortfoliosInput,
  () => ListPortfoliosOutput
);
export var ListPortfoliosForProduct = op(
  n0,
  _LPFP,
  0,
  () => ListPortfoliosForProductInput,
  () => ListPortfoliosForProductOutput
);
export var ListProvisioningArtifacts = op(
  n0,
  _LPAi,
  0,
  () => ListProvisioningArtifactsInput,
  () => ListProvisioningArtifactsOutput
);
export var UpdatePortfolio = op(
  n0,
  _UP,
  0,
  () => UpdatePortfolioInput,
  () => UpdatePortfolioOutput
);
export var UpdateProvisioningArtifact = op(
  n0,
  _UPA,
  0,
  () => UpdateProvisioningArtifactInput,
  () => UpdateProvisioningArtifactOutput
);
