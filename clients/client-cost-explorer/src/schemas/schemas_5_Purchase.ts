// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AnalysisNotFoundException as __AnalysisNotFoundException } from "../models/index";
import {
  _ACT,
  _AD,
  _AI,
  _AIc,
  _AMd,
  _ANFE,
  _ASc,
  _ASn,
  _AST,
  _AT,
  _c,
  _CAC,
  _CAHODS,
  _CCu,
  _CCur,
  _CMHODS,
  _CMHODSu,
  _CODS,
  _CPAC,
  _e,
  _EAC,
  _EAU,
  _EC,
  _ECC,
  _ECs,
  _ECT,
  _EHC,
  _EMSA,
  _ENCU,
  _EODC,
  _EODCWCC,
  _EROI,
  _ESA,
  _ESP,
  _ESPC,
  _GCPA,
  _GCPAR,
  _GCPARe,
  _GSPPRD,
  _GSPPRDR,
  _GSPPRDRe,
  _GT,
  _HCTP,
  _hE,
  _IF,
  _LBTP,
  _LPID,
  _LPIH,
  _LUT,
  _M,
  _MOLP,
  _OI,
  _PO,
  _RDD,
  _RDHM,
  _RDI,
  _Re,
  _SCPA,
  _SCPAR,
  _SCPARt,
  _SPa,
  _SPCa,
  _SPPAC,
  _SPPAD,
  _SPT,
  _SPTA,
  _SPTE,
  _ST,
  _TIY,
  _UC,
  DateInterval,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisDetails = struct(n0, _AD, 0, [_SPPAD], [() => SavingsPlansPurchaseAnalysisDetails]);
export var AnalysisNotFoundException = error(
  n0,
  _ANFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AnalysisNotFoundException
);
export var CommitmentPurchaseAnalysisConfiguration = struct(
  n0,
  _CPAC,
  0,
  [_SPPAC],
  [() => SavingsPlansPurchaseAnalysisConfiguration]
);
export var GetCommitmentPurchaseAnalysisRequest = struct(n0, _GCPAR, 0, [_AI], [0]);
export var GetCommitmentPurchaseAnalysisResponse = struct(
  n0,
  _GCPARe,
  0,
  [_ECT, _ACT, _AST, _AI, _ASn, _EC, _AD, _CPAC],
  [0, 0, 0, 0, 0, 0, () => AnalysisDetails, () => CommitmentPurchaseAnalysisConfiguration]
);
export var GetSavingsPlanPurchaseRecommendationDetailsRequest = struct(n0, _GSPPRDR, 0, [_RDI], [0]);
export var GetSavingsPlanPurchaseRecommendationDetailsResponse = struct(
  n0,
  _GSPPRDRe,
  0,
  [_RDI, _RDD],
  [0, () => RecommendationDetailData]
);
export var RecommendationDetailData = struct(
  n0,
  _RDD,
  0,
  [
    _ASc,
    _LPID,
    _SPT,
    _TIY,
    _PO,
    _AIc,
    _CCu,
    _IF,
    _Re,
    _OI,
    _GT,
    _LUT,
    _CAHODS,
    _CMHODS,
    _CMHODSu,
    _EAU,
    _EMSA,
    _EODC,
    _EODCWCC,
    _EROI,
    _ESPC,
    _ESA,
    _ESP,
    _EHC,
    _HCTP,
    _UC,
    _CAC,
    _EAC,
    _MOLP,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => MetricsOverLookbackPeriod]
);
export var RecommendationDetailHourlyMetrics = struct(n0, _RDHM, 0, [_ST, _EODC, _CCur, _ECs, _ENCU], [0, 0, 0, 0, 0]);
export var SavingsPlans = struct(n0, _SPa, 0, [_PO, _SPT, _Re, _IF, _TIY, _SPCa, _OI], [0, 0, 0, 0, 0, 1, 0]);
export var SavingsPlansPurchaseAnalysisConfiguration = struct(
  n0,
  _SPPAC,
  0,
  [_ASc, _AIc, _AT, _SPTA, _SPTE, _LBTP],
  [0, 0, 0, () => SavingsPlansToAdd, 64 | 0, () => DateInterval]
);
export var SavingsPlansPurchaseAnalysisDetails = struct(
  n0,
  _SPPAD,
  0,
  [
    _CCu,
    _LPIH,
    _CAC,
    _CAHODS,
    _CMHODS,
    _CMHODSu,
    _CODS,
    _EHC,
    _HCTP,
    _EAC,
    _EAU,
    _EMSA,
    _EODC,
    _EODCWCC,
    _EROI,
    _ESA,
    _ESP,
    _ECC,
    _LUT,
    _UC,
    _AMd,
    _MOLP,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => MetricsOverLookbackPeriod]
);
export var StartCommitmentPurchaseAnalysisRequest = struct(
  n0,
  _SCPAR,
  0,
  [_CPAC],
  [() => CommitmentPurchaseAnalysisConfiguration]
);
export var StartCommitmentPurchaseAnalysisResponse = struct(n0, _SCPARt, 0, [_AI, _AST, _ECT], [0, 0, 0]);
export var MetricsOverLookbackPeriod = list(n0, _MOLP, 0, () => RecommendationDetailHourlyMetrics);
export var SavingsPlansToAdd = list(n0, _SPTA, 0, () => SavingsPlans);
export var SavingsPlansToExclude = 64 | 0;

export var GetCommitmentPurchaseAnalysis = op(
  n0,
  _GCPA,
  0,
  () => GetCommitmentPurchaseAnalysisRequest,
  () => GetCommitmentPurchaseAnalysisResponse
);
export var GetSavingsPlanPurchaseRecommendationDetails = op(
  n0,
  _GSPPRD,
  0,
  () => GetSavingsPlanPurchaseRecommendationDetailsRequest,
  () => GetSavingsPlanPurchaseRecommendationDetailsResponse
);
export var StartCommitmentPurchaseAnalysis = op(
  n0,
  _SCPA,
  0,
  () => StartCommitmentPurchaseAnalysisRequest,
  () => StartCommitmentPurchaseAnalysisResponse
);
