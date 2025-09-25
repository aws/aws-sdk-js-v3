// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CB,
  _CCTP,
  _CPI,
  _CPO,
  _CPre,
  _CSCP,
  _CSCPf,
  _CSD,
  _CSP,
  _CSPf,
  _CSUP,
  _CSUPf,
  _CT,
  _CTA,
  _CTB,
  _CTP,
  _CTPD,
  _CTPf,
  _CTPL,
  _CUTP,
  _DPele,
  _DPesc,
  _DPI,
  _DPIe,
  _DPO,
  _Id,
  _K,
  _LMB,
  _LMT,
  _LPI,
  _LPis,
  _LPO,
  _MR,
  _N,
  _NCa,
  _NT,
  _P,
  _PAI,
  _PAr,
  _PDr,
  _PIa,
  _PIro,
  _PIrod,
  _PNr,
  _PPIro,
  _PPro,
  _PProv,
  _PPSM,
  _PSL,
  _PSr,
  _PSroj,
  _RARN,
  _SBo,
  _SCPD,
  _SCPPD,
  _SCPUD,
  _SD,
  _SM,
  _SO,
  _T,
  _TNe,
  _TPD,
  _TPDe,
  _TPDL,
  _TPe,
  _TPTU,
  _TURL,
  _UPI,
  _UPO,
  _UPpd,
  _UTP,
  _UTPL,
  _Va,
  n0,
  TagList,
  Unit,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CfnCreateTemplateProvider = struct(
  n0,
  _CCTP,
  0,
  [_TNe, _TURL, _RARN, _P],
  [0, 0, 0, () => CfnStackCreateParameters]
);
export var CfnStackCreateParameter = struct(n0, _CSCP, 0, [_K, _Va], [0, 0]);
export var CfnStackDetail = struct(n0, _CSD, 0, [_N, _Id, _SM], [0, 0, 0]);
export var CfnStackParameter = struct(n0, _CSP, 0, [_K, _Va], [0, 0]);
export var CfnStackUpdateParameter = struct(n0, _CSUP, 0, [_K, _Va], [0, 0]);
export var CfnTemplateProviderDetail = struct(
  n0,
  _CTPD,
  0,
  [_TNe, _TURL, _RARN, _P, _SD],
  [0, 0, 0, () => CfnStackParameters, () => CfnStackDetail]
);
export var CfnUpdateTemplateProvider = struct(n0, _CUTP, 0, [_TNe, _TURL, _P], [0, 0, () => CfnStackUpdateParameters]);
export var CreateProjectInput = struct(
  n0,
  _CPI,
  0,
  [_PNr, _PDr, _SCPD, _T, _TPe],
  [0, 0, () => ServiceCatalogProvisioningDetails, () => TagList, () => CreateTemplateProviderList]
);
export var CreateProjectOutput = struct(n0, _CPO, 0, [_PAr, _PIro], [0, 0]);
export var CreateTemplateProvider = struct(n0, _CTP, 0, [_CTPf], [() => CfnCreateTemplateProvider]);
export var DeleteProjectInput = struct(n0, _DPI, 0, [_PNr], [0]);
export var DescribeProjectInput = struct(n0, _DPIe, 0, [_PNr], [0]);
export var DescribeProjectOutput = struct(
  n0,
  _DPO,
  0,
  [_PAr, _PNr, _PIro, _PDr, _SCPD, _SCPPD, _PSr, _TPD, _CB, _CT, _LMT, _LMB],
  [
    0,
    0,
    0,
    0,
    () => ServiceCatalogProvisioningDetails,
    () => ServiceCatalogProvisionedProductDetails,
    0,
    () => TemplateProviderDetailList,
    () => UserContext,
    4,
    4,
    () => UserContext,
  ]
);
export var ListProjectsInput = struct(n0, _LPI, 0, [_CTA, _CTB, _MR, _NCa, _NT, _SBo, _SO], [4, 4, 1, 0, 0, 0, 0]);
export var ListProjectsOutput = struct(n0, _LPO, 0, [_PSL, _NT], [() => ProjectSummaryList, 0]);
export var ProjectSummary = struct(n0, _PSroj, 0, [_PNr, _PDr, _PAr, _PIro, _CT, _PSr], [0, 0, 0, 0, 4, 0]);
export var ProvisioningParameter = struct(n0, _PPro, 0, [_K, _Va], [0, 0]);
export var ServiceCatalogProvisionedProductDetails = struct(n0, _SCPPD, 0, [_PPIro, _PPSM], [0, 0]);
export var ServiceCatalogProvisioningDetails = struct(
  n0,
  _SCPD,
  0,
  [_PIrod, _PAI, _PIa, _PProv],
  [0, 0, 0, () => ProvisioningParameters]
);
export var ServiceCatalogProvisioningUpdateDetails = struct(
  n0,
  _SCPUD,
  0,
  [_PAI, _PProv],
  [0, () => ProvisioningParameters]
);
export var TemplateProviderDetail = struct(n0, _TPDe, 0, [_CTPD], [() => CfnTemplateProviderDetail]);
export var UpdateProjectInput = struct(
  n0,
  _UPI,
  0,
  [_PNr, _PDr, _SCPUD, _T, _TPTU],
  [0, 0, () => ServiceCatalogProvisioningUpdateDetails, () => TagList, () => UpdateTemplateProviderList]
);
export var UpdateProjectOutput = struct(n0, _UPO, 0, [_PAr], [0]);
export var UpdateTemplateProvider = struct(n0, _UTP, 0, [_CTPf], [() => CfnUpdateTemplateProvider]);
export var CfnStackCreateParameters = list(n0, _CSCPf, 0, () => CfnStackCreateParameter);
export var CfnStackParameters = list(n0, _CSPf, 0, () => CfnStackParameter);
export var CfnStackUpdateParameters = list(n0, _CSUPf, 0, () => CfnStackUpdateParameter);
export var CreateTemplateProviderList = list(n0, _CTPL, 0, () => CreateTemplateProvider);
export var ProjectSummaryList = list(n0, _PSL, 0, () => ProjectSummary);
export var ProvisioningParameters = list(n0, _PProv, 0, () => ProvisioningParameter);
export var TemplateProviderDetailList = list(n0, _TPDL, 0, () => TemplateProviderDetail);
export var UpdateTemplateProviderList = list(n0, _UTPL, 0, () => UpdateTemplateProvider);
export var CreateProject = op(
  n0,
  _CPre,
  0,
  () => CreateProjectInput,
  () => CreateProjectOutput
);
export var DeleteProject = op(
  n0,
  _DPele,
  0,
  () => DeleteProjectInput,
  () => Unit
);
export var DescribeProject = op(
  n0,
  _DPesc,
  0,
  () => DescribeProjectInput,
  () => DescribeProjectOutput
);
export var ListProjects = op(
  n0,
  _LPis,
  0,
  () => ListProjectsInput,
  () => ListProjectsOutput
);
export var UpdateProject = op(
  n0,
  _UPpd,
  0,
  () => UpdateProjectInput,
  () => UpdateProjectOutput
);
