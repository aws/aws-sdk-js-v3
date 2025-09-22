// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACT,
  _AI,
  _AIc,
  _AIna,
  _AM,
  _AMd,
  _AMn,
  _ANOCUUPH,
  _ANOIUPH,
  _ANUUPH,
  _AS,
  _ASc,
  _ASL,
  _ASn,
  _AST,
  _AU,
  _AZ,
  _BC,
  _CAHODS,
  _CAM,
  _CAMR,
  _CAMRr,
  _CCA,
  _CCR,
  _CCRL,
  _CCRos,
  _CCu,
  _CD,
  _CG,
  _CI,
  _CMHODS,
  _CMHODSu,
  _CODS,
  _Conf,
  _CPAC,
  _CU,
  _DCTP,
  _DDBCD,
  _DE,
  _DEa,
  _DO,
  _DRBPS,
  _DROPS,
  _DRU,
  _DTI,
  _DVC,
  _DVe,
  _DWBPS,
  _DWOPS,
  _EAU,
  _EBEIM,
  _EBSRU,
  _EC,
  _ECID,
  _ECIDl,
  _ECRD,
  _ECRU,
  _ECS,
  _ECT,
  _EE,
  _EMC,
  _EMODC,
  _EMS,
  _EMSA,
  _EMSP,
  _EO,
  _EODC,
  _EODCWCC,
  _ERBPS,
  _ERCFLP,
  _EROI,
  _EROPS,
  _ERU,
  _ES,
  _ESA,
  _ESID,
  _ESP,
  _ESPC,
  _ETC,
  _ETMSA,
  _EWBPS,
  _EWOPS,
  _Fa,
  _Fi,
  _FRC,
  _GAM,
  _GAMR,
  _GAMRe,
  _GCT,
  _GRPR,
  _GRPRR,
  _GRPRRe,
  _GRR,
  _GRRR,
  _GRRRe,
  _GS,
  _GSe,
  _GSL,
  _GSPPR,
  _GSPPRR,
  _GSPPRRe,
  _GST,
  _GT,
  _HCTP,
  _HODR,
  _IC,
  _ID,
  _IF,
  _IN,
  _IS,
  _IT,
  _LCCD,
  _LCCDR,
  _LCCDRi,
  _LCPA,
  _LCPAR,
  _LCPARi,
  _LED,
  _LM,
  _LPID,
  _LSPPRG,
  _LSPPRGR,
  _LSPPRGRi,
  _LUD,
  _MA,
  _MAL,
  _MC,
  _MCUP,
  _MD,
  _MDBID,
  _Mem,
  _Meta,
  _MMUP,
  _MN,
  _MNOCUUPH,
  _MNOCUUPHa,
  _MNOIUPH,
  _MNOIUPHa,
  _MNUUPH,
  _MNUUPHa,
  _MR,
  _MRD,
  _MS,
  _MSUP,
  _MT,
  _N,
  _NIBPS,
  _NOBPS,
  _NOR,
  _NP,
  _NPIPS,
  _NPOPS,
  _NPT,
  _NRU,
  _NT,
  _NTe,
  _OC,
  _ODHILP,
  _OI,
  _PD,
  _PDl,
  _Pl,
  _PO,
  _PS,
  _PSa,
  _RCD,
  _RCHILP,
  _RD,
  _RDe,
  _RDI,
  _RDSID,
  _Re,
  _Rec,
  _RI,
  _RID,
  _RIe,
  _RIec,
  _RNOCUTP,
  _RNOITP,
  _RNUTP,
  _RPR,
  _RPRD,
  _RPRDe,
  _RPRe,
  _RPRM,
  _RPRS,
  _RR,
  _RRC,
  _RRi,
  _RRL,
  _RRM,
  _RRS,
  _RSec,
  _RSMC,
  _RT,
  _RTec,
  _RTi,
  _RU,
  _SCC,
  _Ser,
  _SFE,
  _Sk,
  _SP,
  _SPCHILP,
  _SPD,
  _SPPR,
  _SPPRD,
  _SPPRDa,
  _SPPRDL,
  _SPPRM,
  _SPPRS,
  _SPT,
  _SSe,
  _Sto,
  _Su,
  _Tag,
  _Te,
  _TEMSA,
  _TEMSP,
  _TIa,
  _TIar,
  _TIL,
  _TIY,
  _TRC,
  _TRD,
  _TRHILP,
  _TVL,
  _UC,
  _V,
  _Vc,
  Expression,
  n0,
  TagValues,
} from "./schemas_0";
import { CommitmentPurchaseAnalysisConfiguration } from "./schemas_5_Purchase";
import { CostCategoryProcessingStatusList } from "./schemas_7_Cost";
import { ResourceTagList } from "./schemas_10_Create";

/* eslint no-var: 0 */

export var AnalysisSummary = struct(
  n0,
  _AS,
  0,
  [_ECT, _ACT, _AST, _ASn, _EC, _AI, _CPAC],
  [0, 0, 0, 0, 0, 0, () => CommitmentPurchaseAnalysisConfiguration]
);
export var AnomalyMonitor = struct(
  n0,
  _AM,
  0,
  [_MA, _MN, _CD, _LUD, _LED, _MT, _MD, _MS, _DVC],
  [0, 0, 0, 0, 0, 0, 0, () => Expression, 1]
);
export var CostCategoryReference = struct(
  n0,
  _CCR,
  0,
  [_CCA, _N, _ES, _EE, _NOR, _PS, _V, _DVe],
  [0, 0, 0, 0, 1, () => CostCategoryProcessingStatusList, 64 | 0, 0]
);
export var CreateAnomalyMonitorRequest = struct(
  n0,
  _CAMR,
  0,
  [_AM, _RT],
  [() => AnomalyMonitor, () => ResourceTagList]
);
export var CreateAnomalyMonitorResponse = struct(n0, _CAMRr, 0, [_MA], [0]);
export var CurrentInstance = struct(
  n0,
  _CI,
  0,
  [_RI, _IN, _Tag, _RD, _RU, _RCHILP, _SPCHILP, _ODHILP, _TRHILP, _MC, _CCu],
  [0, 0, () => TagValuesList, () => ResourceDetails, () => ResourceUtilization, 0, 0, 0, 0, 0, 0]
);
export var DiskResourceUtilization = struct(n0, _DRU, 0, [_DROPS, _DWOPS, _DRBPS, _DWBPS], [0, 0, 0, 0]);
export var DynamoDBCapacityDetails = struct(n0, _DDBCD, 0, [_CU, _Re], [0, 0]);
export var EBSResourceUtilization = struct(n0, _EBSRU, 0, [_EROPS, _EWOPS, _ERBPS, _EWBPS], [0, 0, 0, 0]);
export var EC2InstanceDetails = struct(
  n0,
  _ECID,
  0,
  [_Fa, _IT, _Re, _AZ, _Pl, _Te, _CG, _SFE],
  [0, 0, 0, 0, 0, 0, 2, 2]
);
export var EC2ResourceDetails = struct(
  n0,
  _ECRD,
  0,
  [_HODR, _IT, _Pl, _Re, _Sk, _Mem, _NP, _Sto, _Vc],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var EC2ResourceUtilization = struct(
  n0,
  _ECRU,
  0,
  [_MCUP, _MMUP, _MSUP, _EBSRU, _DRU, _NRU],
  [0, 0, 0, () => EBSResourceUtilization, () => DiskResourceUtilization, () => NetworkResourceUtilization]
);
export var EC2Specification = struct(n0, _ECS, 0, [_OC], [0]);
export var ElastiCacheInstanceDetails = struct(n0, _ECIDl, 0, [_Fa, _NT, _Re, _PD, _CG, _SFE], [0, 0, 0, 0, 2, 2]);
export var ESInstanceDetails = struct(n0, _ESID, 0, [_IC, _IS, _Re, _CG, _SFE], [0, 0, 0, 2, 2]);
export var GenerationSummary = struct(n0, _GS, 0, [_RIe, _GSe, _GST, _GCT, _ECT], [0, 0, 0, 0, 0]);
export var GetAnomalyMonitorsRequest = struct(n0, _GAMR, 0, [_MAL, _NPT, _MR], [64 | 0, 0, 1]);
export var GetAnomalyMonitorsResponse = struct(n0, _GAMRe, 0, [_AMn, _NPT], [() => AnomalyMonitors, 0]);
export var GetReservationPurchaseRecommendationRequest = struct(
  n0,
  _GRPRR,
  0,
  [_AIc, _Ser, _Fi, _ASc, _LPID, _TIY, _PO, _SSe, _PSa, _NPT],
  [0, 0, () => Expression, 0, 0, 0, 0, () => ServiceSpecification, 1, 0]
);
export var GetReservationPurchaseRecommendationResponse = struct(
  n0,
  _GRPRRe,
  0,
  [_Meta, _Rec, _NPT],
  [() => ReservationPurchaseRecommendationMetadata, () => ReservationPurchaseRecommendations, 0]
);
export var GetRightsizingRecommendationRequest = struct(
  n0,
  _GRRR,
  0,
  [_Fi, _Conf, _Ser, _PSa, _NPT],
  [() => Expression, () => RightsizingRecommendationConfiguration, 0, 1, 0]
);
export var GetRightsizingRecommendationResponse = struct(
  n0,
  _GRRRe,
  0,
  [_Meta, _Su, _RR, _NPT, _Conf],
  [
    () => RightsizingRecommendationMetadata,
    () => RightsizingRecommendationSummary,
    () => RightsizingRecommendationList,
    0,
    () => RightsizingRecommendationConfiguration,
  ]
);
export var GetSavingsPlansPurchaseRecommendationRequest = struct(
  n0,
  _GSPPRR,
  0,
  [_SPT, _TIY, _PO, _ASc, _NPT, _PSa, _LPID, _Fi],
  [0, 0, 0, 0, 0, 1, 0, () => Expression]
);
export var GetSavingsPlansPurchaseRecommendationResponse = struct(
  n0,
  _GSPPRRe,
  0,
  [_Meta, _SPPR, _NPT],
  [() => SavingsPlansPurchaseRecommendationMetadata, () => SavingsPlansPurchaseRecommendation, 0]
);
export var InstanceDetails = struct(
  n0,
  _ID,
  0,
  [_ECID, _RDSID, _RID, _ECIDl, _ESID, _MDBID],
  [
    () => EC2InstanceDetails,
    () => RDSInstanceDetails,
    () => RedshiftInstanceDetails,
    () => ElastiCacheInstanceDetails,
    () => ESInstanceDetails,
    () => MemoryDBInstanceDetails,
  ]
);
export var ListCommitmentPurchaseAnalysesRequest = struct(n0, _LCPAR, 0, [_ASn, _NPT, _PSa, _AIna], [0, 0, 1, 64 | 0]);
export var ListCommitmentPurchaseAnalysesResponse = struct(
  n0,
  _LCPARi,
  0,
  [_ASL, _NPT],
  [() => AnalysisSummaryList, 0]
);
export var ListCostCategoryDefinitionsRequest = struct(n0, _LCCDR, 0, [_EO, _NTe, _MR], [0, 0, 1]);
export var ListCostCategoryDefinitionsResponse = struct(
  n0,
  _LCCDRi,
  0,
  [_CCRos, _NTe],
  [() => CostCategoryReferencesList, 0]
);
export var ListSavingsPlansPurchaseRecommendationGenerationRequest = struct(
  n0,
  _LSPPRGR,
  0,
  [_GSe, _RIec, _PSa, _NPT],
  [0, 64 | 0, 1, 0]
);
export var ListSavingsPlansPurchaseRecommendationGenerationResponse = struct(
  n0,
  _LSPPRGRi,
  0,
  [_GSL, _NPT],
  [() => GenerationSummaryList, 0]
);
export var MemoryDBInstanceDetails = struct(n0, _MDBID, 0, [_Fa, _NT, _Re, _CG, _SFE], [0, 0, 0, 2, 2]);
export var ModifyRecommendationDetail = struct(n0, _MRD, 0, [_TIa], [() => TargetInstancesList]);
export var NetworkResourceUtilization = struct(n0, _NRU, 0, [_NIBPS, _NOBPS, _NPIPS, _NPOPS], [0, 0, 0, 0]);
export var RDSInstanceDetails = struct(
  n0,
  _RDSID,
  0,
  [_Fa, _IT, _Re, _DE, _DEa, _DO, _LM, _CG, _SFE],
  [0, 0, 0, 0, 0, 0, 0, 2, 2]
);
export var RedshiftInstanceDetails = struct(n0, _RID, 0, [_Fa, _NT, _Re, _CG, _SFE], [0, 0, 0, 2, 2]);
export var ReservationPurchaseRecommendation = struct(
  n0,
  _RPR,
  0,
  [_ASc, _LPID, _TIY, _PO, _SSe, _RDe, _RSec],
  [
    0,
    0,
    0,
    0,
    () => ServiceSpecification,
    () => ReservationPurchaseRecommendationDetails,
    () => ReservationPurchaseRecommendationSummary,
  ]
);
export var ReservationPurchaseRecommendationDetail = struct(
  n0,
  _RPRD,
  0,
  [
    _AIc,
    _ID,
    _RNOITP,
    _RNUTP,
    _MNOIUPH,
    _MNUUPH,
    _MNOIUPHa,
    _MNUUPHa,
    _ANOIUPH,
    _ANUUPH,
    _AU,
    _EBEIM,
    _CCu,
    _EMSA,
    _EMSP,
    _EMODC,
    _ERCFLP,
    _UC,
    _RSMC,
    _RCD,
    _RNOCUTP,
    _MNOCUUPH,
    _MNOCUUPHa,
    _ANOCUUPH,
  ],
  [
    0,
    () => InstanceDetails,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => ReservedCapacityDetails,
    0,
    0,
    0,
    0,
  ]
);
export var ReservationPurchaseRecommendationMetadata = struct(n0, _RPRM, 0, [_RIe, _GT, _AMd], [0, 0, 0]);
export var ReservationPurchaseRecommendationSummary = struct(n0, _RPRS, 0, [_TEMSA, _TEMSP, _CCu], [0, 0, 0]);
export var ReservedCapacityDetails = struct(n0, _RCD, 0, [_DDBCD], [() => DynamoDBCapacityDetails]);
export var ResourceDetails = struct(n0, _RD, 0, [_ECRD], [() => EC2ResourceDetails]);
export var ResourceUtilization = struct(n0, _RU, 0, [_ECRU], [() => EC2ResourceUtilization]);
export var RightsizingRecommendation = struct(
  n0,
  _RRi,
  0,
  [_AIc, _CI, _RTi, _MRD, _TRD, _FRC],
  [0, () => CurrentInstance, 0, () => ModifyRecommendationDetail, () => TerminateRecommendationDetail, 64 | 0]
);
export var RightsizingRecommendationConfiguration = struct(n0, _RRC, 0, [_RTec, _BC], [0, 2]);
export var RightsizingRecommendationMetadata = struct(n0, _RRM, 0, [_RIe, _GT, _LPID, _AMd], [0, 0, 0, 0]);
export var RightsizingRecommendationSummary = struct(n0, _RRS, 0, [_TRC, _ETMSA, _SCC, _SP], [0, 0, 0, 0]);
export var SavingsPlansDetails = struct(n0, _SPD, 0, [_Re, _IF, _OI], [0, 0, 0]);
export var SavingsPlansPurchaseRecommendation = struct(
  n0,
  _SPPR,
  0,
  [_ASc, _SPT, _TIY, _PO, _LPID, _SPPRD, _SPPRS],
  [0, 0, 0, 0, 0, () => SavingsPlansPurchaseRecommendationDetailList, () => SavingsPlansPurchaseRecommendationSummary]
);
export var SavingsPlansPurchaseRecommendationDetail = struct(
  n0,
  _SPPRDa,
  0,
  [
    _SPD,
    _AIc,
    _UC,
    _EROI,
    _CCu,
    _ESPC,
    _EODC,
    _EODCWCC,
    _ESA,
    _ESP,
    _HCTP,
    _EAU,
    _EMSA,
    _CMHODSu,
    _CMHODS,
    _CAHODS,
    _RDI,
  ],
  [() => SavingsPlansDetails, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var SavingsPlansPurchaseRecommendationMetadata = struct(n0, _SPPRM, 0, [_RIe, _GT, _AMd], [0, 0, 0]);
export var SavingsPlansPurchaseRecommendationSummary = struct(
  n0,
  _SPPRS,
  0,
  [_EROI, _CCu, _ETC, _CODS, _ESA, _TRC, _DCTP, _HCTP, _ESP, _EMSA, _EODCWCC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ServiceSpecification = struct(n0, _SSe, 0, [_ECS], [() => EC2Specification]);
export var TargetInstance = struct(
  n0,
  _TIar,
  0,
  [_EMC, _EMS, _CCu, _DTI, _RD, _ERU, _PDl],
  [0, 0, 0, 2, () => ResourceDetails, () => ResourceUtilization, 64 | 0]
);
export var TerminateRecommendationDetail = struct(n0, _TRD, 0, [_EMS, _CCu], [0, 0]);
export var AnalysisIds = 64 | 0;

export var AnalysisSummaryList = list(n0, _ASL, 0, () => AnalysisSummary);
export var AnomalyMonitors = list(n0, _AMn, 0, () => AnomalyMonitor);
export var CostCategoryReferencesList = list(n0, _CCRL, 0, () => CostCategoryReference);
export var FindingReasonCodes = 64 | 0;

export var GenerationSummaryList = list(n0, _GSL, 0, () => GenerationSummary);
export var PlatformDifferences = 64 | 0;

export var RecommendationIdList = 64 | 0;

export var ReservationPurchaseRecommendationDetails = list(
  n0,
  _RPRDe,
  0,
  () => ReservationPurchaseRecommendationDetail
);
export var ReservationPurchaseRecommendations = list(n0, _RPRe, 0, () => ReservationPurchaseRecommendation);
export var RightsizingRecommendationList = list(n0, _RRL, 0, () => RightsizingRecommendation);
export var SavingsPlansPurchaseRecommendationDetailList = list(
  n0,
  _SPPRDL,
  0,
  () => SavingsPlansPurchaseRecommendationDetail
);
export var TagValuesList = list(n0, _TVL, 0, () => TagValues);
export var TargetInstancesList = list(n0, _TIL, 0, () => TargetInstance);
export var CreateAnomalyMonitor = op(
  n0,
  _CAM,
  0,
  () => CreateAnomalyMonitorRequest,
  () => CreateAnomalyMonitorResponse
);
export var GetAnomalyMonitors = op(
  n0,
  _GAM,
  0,
  () => GetAnomalyMonitorsRequest,
  () => GetAnomalyMonitorsResponse
);
export var GetReservationPurchaseRecommendation = op(
  n0,
  _GRPR,
  0,
  () => GetReservationPurchaseRecommendationRequest,
  () => GetReservationPurchaseRecommendationResponse
);
export var GetRightsizingRecommendation = op(
  n0,
  _GRR,
  0,
  () => GetRightsizingRecommendationRequest,
  () => GetRightsizingRecommendationResponse
);
export var GetSavingsPlansPurchaseRecommendation = op(
  n0,
  _GSPPR,
  0,
  () => GetSavingsPlansPurchaseRecommendationRequest,
  () => GetSavingsPlansPurchaseRecommendationResponse
);
export var ListCommitmentPurchaseAnalyses = op(
  n0,
  _LCPA,
  0,
  () => ListCommitmentPurchaseAnalysesRequest,
  () => ListCommitmentPurchaseAnalysesResponse
);
export var ListCostCategoryDefinitions = op(
  n0,
  _LCCD,
  0,
  () => ListCostCategoryDefinitionsRequest,
  () => ListCostCategoryDefinitionsResponse
);
export var ListSavingsPlansPurchaseRecommendationGeneration = op(
  n0,
  _LSPPRG,
  0,
  () => ListSavingsPlansPurchaseRecommendationGenerationRequest,
  () => ListSavingsPlansPurchaseRecommendationGenerationResponse
);
