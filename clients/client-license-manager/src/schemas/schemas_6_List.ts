// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADI,
  _AO,
  _ATs,
  _B,
  _CC,
  _CL,
  _CLSL,
  _CTr,
  _D,
  _DLC,
  _DWNF,
  _E,
  _ET,
  _ETx,
  _F,
  _Fi,
  _FL,
  _FV,
  _GAr,
  _GL,
  _GLL,
  _GLr,
  _Gr,
  _HR,
  _I,
  _i,
  _LA,
  _LAi,
  _LC,
  _LCA,
  _LCAice,
  _LCHL,
  _LCI,
  _LCi,
  _LCic,
  _LCTI,
  _LCTi,
  _LCTic,
  _LCTice,
  _LCTicen,
  _LCU,
  _LCUL,
  _LDG,
  _LDGR,
  _LDGRi,
  _Li,
  _LLC,
  _LLCR,
  _LLCRi,
  _LLCT,
  _LLCTR,
  _LLCTRi,
  _LLi,
  _LLMRG,
  _LLMRGR,
  _LLMRGRi,
  _LLR,
  _LLRi,
  _LM,
  _LN,
  _LR,
  _LRG,
  _LRGFO,
  _LRGFOR,
  _LRGFORi,
  _LRGR,
  _LRGRi,
  _LRL,
  _LRLFO,
  _LRLFOR,
  _LRLFORi,
  _LRLR,
  _LRLRi,
  _LT,
  _LTR,
  _LTRi,
  _LUFLC,
  _LUFLCR,
  _LUFLCRi,
  _MR,
  _MRSL,
  _N,
  _NT,
  _OAI,
  _PIL,
  _PN,
  _PSKU,
  _RA,
  _RAo,
  _RGe,
  _RGL,
  _RM,
  _ROI,
  _RS,
  _RSe,
  _RSR,
  _RT,
  _S,
  _SLC,
  _SM,
  _STt,
  _TD,
  _TI,
  _TIo,
  _TLo,
  _Tok,
  _TP,
  _TT,
  _V,
  _Va,
  _Valu,
  _xN,
  n0,
} from "./schemas_0";
import { Grant } from "./schemas_1_Grant";
import {
  ConsumptionConfiguration,
  DatetimeRange,
  EntitlementList,
  IssuerDetails,
  LicenseList,
  MetadataList,
} from "./schemas_2_License";
import {
  AutomatedDiscoveryInformation,
  ConsumedLicenseSummaryList,
  ManagedResourceSummaryList,
} from "./schemas_4_License";
import { ReportGenerator } from "./schemas_5_List";
import { LicenseConversionContext } from "./schemas_8_License";
import { ProductInformationList } from "./schemas_16_License";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_N, _Valu], [0, [() => FilterValues, 0]]);
export var GrantedLicense = struct(
  n0,
  _GL,
  0,
  [_LA, _LN, _PN, _PSKU, _I, _HR, _S, _Va, _B, _E, _CC, _LM, _CTr, _V, _RM],
  [
    0,
    0,
    0,
    0,
    () => IssuerDetails,
    0,
    0,
    () => DatetimeRange,
    0,
    () => EntitlementList,
    () => ConsumptionConfiguration,
    () => MetadataList,
    0,
    0,
    () => ReceivedMetadata,
  ]
);
export var LicenseConfiguration = struct(
  n0,
  _LCi,
  0,
  [_LCI, _LCA, _N, _D, _LCTi, _LR, _LC, _LCHL, _DWNF, _CL, _S, _OAI, _CLSL, _MRSL, _PIL, _ADI],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    1,
    2,
    2,
    1,
    0,
    0,
    () => ConsumedLicenseSummaryList,
    () => ManagedResourceSummaryList,
    () => ProductInformationList,
    () => AutomatedDiscoveryInformation,
  ]
);
export var LicenseConfigurationUsage = struct(n0, _LCU, 0, [_RA, _RT, _RS, _ROI, _ATs, _CL], [0, 0, 0, 0, 4, 1]);
export var LicenseConversionTask = struct(
  n0,
  _LCTice,
  0,
  [_LCTI, _RA, _SLC, _DLC, _S, _SM, _STt, _LCTic, _ET],
  [0, 0, () => LicenseConversionContext, () => LicenseConversionContext, 0, 0, 4, 4, 4]
);
export var ListDistributedGrantsRequest = struct(
  n0,
  _LDGR,
  0,
  [_GAr, _Fi, _NT, _MR],
  [64 | 0, [() => FilterList, 0], 0, 1]
);
export var ListDistributedGrantsResponse = struct(n0, _LDGRi, 0, [_Gr, _NT], [() => GrantList, 0]);
export var ListLicenseConfigurationsRequest = struct(
  n0,
  _LLCR,
  0,
  [_LCAice, _MR, _NT, _Fi],
  [64 | 0, 1, 0, [() => Filters, 0]]
);
export var ListLicenseConfigurationsResponse = struct(n0, _LLCRi, 0, [_LCic, _NT], [() => LicenseConfigurations, 0]);
export var ListLicenseConversionTasksRequest = struct(n0, _LLCTR, 0, [_NT, _MR, _Fi], [0, 1, [() => Filters, 0]]);
export var ListLicenseConversionTasksResponse = struct(
  n0,
  _LLCTRi,
  0,
  [_LCTicen, _NT],
  [() => LicenseConversionTasks, 0]
);
export var ListLicenseManagerReportGeneratorsRequest = struct(
  n0,
  _LLMRGR,
  0,
  [_Fi, _NT, _MR],
  [[() => FilterList, 0], 0, 1]
);
export var ListLicenseManagerReportGeneratorsResponse = struct(
  n0,
  _LLMRGRi,
  0,
  [_RGe, _NT],
  [() => ReportGeneratorList, 0]
);
export var ListLicensesRequest = struct(n0, _LLR, 0, [_LAi, _Fi, _NT, _MR], [64 | 0, [() => FilterList, 0], 0, 1]);
export var ListLicensesResponse = struct(n0, _LLRi, 0, [_Li, _NT], [() => LicenseList, 0]);
export var ListReceivedGrantsForOrganizationRequest = struct(
  n0,
  _LRGFOR,
  0,
  [_LA, _Fi, _NT, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var ListReceivedGrantsForOrganizationResponse = struct(n0, _LRGFORi, 0, [_Gr, _NT], [() => GrantList, 0]);
export var ListReceivedGrantsRequest = struct(
  n0,
  _LRGR,
  0,
  [_GAr, _Fi, _NT, _MR],
  [64 | 0, [() => FilterList, 0], 0, 1]
);
export var ListReceivedGrantsResponse = struct(n0, _LRGRi, 0, [_Gr, _NT], [() => GrantList, 0]);
export var ListReceivedLicensesForOrganizationRequest = struct(
  n0,
  _LRLFOR,
  0,
  [_Fi, _NT, _MR],
  [[() => FilterList, 0], 0, 1]
);
export var ListReceivedLicensesForOrganizationResponse = struct(
  n0,
  _LRLFORi,
  0,
  [_Li, _NT],
  [() => GrantedLicenseList, 0]
);
export var ListReceivedLicensesRequest = struct(
  n0,
  _LRLR,
  0,
  [_LAi, _Fi, _NT, _MR],
  [64 | 0, [() => FilterList, 0], 0, 1]
);
export var ListReceivedLicensesResponse = struct(n0, _LRLRi, 0, [_Li, _NT], [() => GrantedLicenseList, 0]);
export var ListTokensRequest = struct(n0, _LTR, 0, [_TIo, _Fi, _NT, _MR], [64 | 0, [() => FilterList, 0], 0, 1]);
export var ListTokensResponse = struct(n0, _LTRi, 0, [_Tok, _NT], [() => TokenList, 0]);
export var ListUsageForLicenseConfigurationRequest = struct(
  n0,
  _LUFLCR,
  0,
  [_LCA, _MR, _NT, _Fi],
  [0, 1, 0, [() => Filters, 0]]
);
export var ListUsageForLicenseConfigurationResponse = struct(
  n0,
  _LUFLCRi,
  0,
  [_LCUL, _NT],
  [() => LicenseConfigurationUsageList, 0]
);
export var ReceivedMetadata = struct(n0, _RM, 0, [_RSe, _RSR, _AO], [0, 0, 64 | 0]);
export var TokenData = struct(n0, _TD, 0, [_TI, _TT, _LA, _ETx, _TP, _RAo, _S], [0, 0, 0, 0, 64 | 0, 64 | 0, 0]);
export var FilterList = list(n0, _FL, 0, [() => Filter, 0]);
export var Filters = list(n0, _Fi, 0, [
  () => Filter,
  {
    [_xN]: _i,
  },
]);
export var FilterValues = list(n0, _FV, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var GrantedLicenseList = list(n0, _GLL, 0, () => GrantedLicense);
export var GrantList = list(n0, _GLr, 0, () => Grant);
export var LicenseConfigurations = list(n0, _LCic, 0, () => LicenseConfiguration);
export var LicenseConfigurationUsageList = list(n0, _LCUL, 0, () => LicenseConfigurationUsage);
export var LicenseConversionTasks = list(n0, _LCTicen, 0, () => LicenseConversionTask);
export var ReportGeneratorList = list(n0, _RGL, 0, () => ReportGenerator);
export var TokenList = list(n0, _TLo, 0, () => TokenData);
export var ListDistributedGrants = op(
  n0,
  _LDG,
  0,
  () => ListDistributedGrantsRequest,
  () => ListDistributedGrantsResponse
);
export var ListLicenseConfigurations = op(
  n0,
  _LLC,
  0,
  () => ListLicenseConfigurationsRequest,
  () => ListLicenseConfigurationsResponse
);
export var ListLicenseConversionTasks = op(
  n0,
  _LLCT,
  0,
  () => ListLicenseConversionTasksRequest,
  () => ListLicenseConversionTasksResponse
);
export var ListLicenseManagerReportGenerators = op(
  n0,
  _LLMRG,
  0,
  () => ListLicenseManagerReportGeneratorsRequest,
  () => ListLicenseManagerReportGeneratorsResponse
);
export var ListLicenses = op(
  n0,
  _LLi,
  0,
  () => ListLicensesRequest,
  () => ListLicensesResponse
);
export var ListReceivedGrants = op(
  n0,
  _LRG,
  0,
  () => ListReceivedGrantsRequest,
  () => ListReceivedGrantsResponse
);
export var ListReceivedGrantsForOrganization = op(
  n0,
  _LRGFO,
  0,
  () => ListReceivedGrantsForOrganizationRequest,
  () => ListReceivedGrantsForOrganizationResponse
);
export var ListReceivedLicenses = op(
  n0,
  _LRL,
  0,
  () => ListReceivedLicensesRequest,
  () => ListReceivedLicensesResponse
);
export var ListReceivedLicensesForOrganization = op(
  n0,
  _LRLFO,
  0,
  () => ListReceivedLicensesForOrganizationRequest,
  () => ListReceivedLicensesForOrganizationResponse
);
export var ListTokens = op(
  n0,
  _LT,
  0,
  () => ListTokensRequest,
  () => ListTokensResponse
);
export var ListUsageForLicenseConfiguration = op(
  n0,
  _LUFLC,
  0,
  () => ListUsageForLicenseConfigurationRequest,
  () => ListUsageForLicenseConfigurationResponse
);
