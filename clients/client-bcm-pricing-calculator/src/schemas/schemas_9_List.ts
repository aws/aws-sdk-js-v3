// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _am,
  _aT,
  _aZ,
  _BECS,
  _BECSil,
  _bEI,
  _BELIS,
  _BELISi,
  _BES,
  _BESi,
  _bI,
  _BSS,
  _BSSi,
  _bT,
  _cAF,
  _cAr,
  _cC,
  _eA,
  _eAF,
  _eCs,
  _eUQ,
  _f,
  _fM,
  _FT,
  _hC,
  _hUQ,
  _i,
  _it,
  _l,
  _LBE,
  _LBEC,
  _LBECR,
  _LBECRi,
  _LBEF,
  _LBEFi,
  _LBELI,
  _LBELIF,
  _LBELIFi,
  _LBELIR,
  _LBELIRi,
  _LBER,
  _LBERi,
  _LBS,
  _LBSF,
  _LBSFi,
  _LBSR,
  _LBSRi,
  _lII,
  _lIT,
  _LWE,
  _LWEF,
  _LWEFi,
  _LWER,
  _LWERi,
  _mOa,
  _mP,
  _mR,
  _n,
  _nT,
  _o,
  _oI,
  _pAI,
  _pAT,
  _pO,
  _r,
  _rTa,
  _rTat,
  _s,
  _sC,
  _sPA,
  _tC,
  _tL,
  _uAI,
  _un,
  _uP,
  _UQR,
  _uT,
  _v,
  _WES,
  _WESo,
  BillInterval,
  n0,
} from "./schemas_0";
import { CostAmount } from "./schemas_5_BillEstimate";

/* eslint no-var: 0 */

export var BillEstimateCommitmentSummary = struct(
  n0,
  _BECS,
  0,
  [_i, _pAT, _oI, _uAI, _r, _tL, _pO, _uP, _mP],
  [0, 0, 0, 0, 0, 0, 0, () => CostAmount, () => CostAmount]
);
export var BillEstimateLineItemSummary = struct(
  n0,
  _BELIS,
  0,
  [_sC, _uT, _o, _l, _aZ, _i, _lII, _lIT, _pAI, _uAI, _eUQ, _eCs, _hUQ, _hC, _sPA],
  [
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
    () => UsageQuantityResult,
    () => CostAmount,
    () => UsageQuantityResult,
    () => CostAmount,
    64 | 0,
  ]
);
export var BillEstimateSummary = struct(n0, _BES, 0, [_i, _n, _s, _bI, _cAr, _eA], [0, 0, 0, () => BillInterval, 4, 4]);
export var BillScenarioSummary = struct(
  n0,
  _BSS,
  0,
  [_i, _n, _bI, _s, _cAr, _eA, _fM],
  [0, 0, () => BillInterval, 0, 4, 4, 0]
);
export var FilterTimestamp = struct(n0, _FT, 0, [_aT, _bT], [4, 4]);
export var ListBillEstimateCommitmentsRequest = struct(n0, _LBECR, 0, [_bEI, _nT, _mR], [0, 0, 1]);
export var ListBillEstimateCommitmentsResponse = struct(
  n0,
  _LBECRi,
  0,
  [_it, _nT],
  [() => BillEstimateCommitmentSummaries, 0]
);
export var ListBillEstimateLineItemsFilter = struct(n0, _LBELIF, 0, [_n, _v, _mOa], [0, 64 | 0, 0]);
export var ListBillEstimateLineItemsRequest = struct(
  n0,
  _LBELIR,
  0,
  [_bEI, _f, _nT, _mR],
  [0, () => ListBillEstimateLineItemsFilters, 0, 1]
);
export var ListBillEstimateLineItemsResponse = struct(
  n0,
  _LBELIRi,
  0,
  [_it, _nT],
  [() => BillEstimateLineItemSummaries, 0]
);
export var ListBillEstimatesFilter = struct(n0, _LBEF, 0, [_n, _v, _mOa], [0, 64 | 0, 0]);
export var ListBillEstimatesRequest = struct(
  n0,
  _LBER,
  0,
  [_f, _cAF, _eAF, _nT, _mR],
  [() => ListBillEstimatesFilters, () => FilterTimestamp, () => FilterTimestamp, 0, 1]
);
export var ListBillEstimatesResponse = struct(n0, _LBERi, 0, [_it, _nT], [() => BillEstimateSummaries, 0]);
export var ListBillScenariosFilter = struct(n0, _LBSF, 0, [_n, _v, _mOa], [0, 64 | 0, 0]);
export var ListBillScenariosRequest = struct(
  n0,
  _LBSR,
  0,
  [_f, _cAF, _eAF, _nT, _mR],
  [() => ListBillScenariosFilters, () => FilterTimestamp, () => FilterTimestamp, 0, 1]
);
export var ListBillScenariosResponse = struct(n0, _LBSRi, 0, [_it, _nT], [() => BillScenarioSummaries, 0]);
export var ListWorkloadEstimatesFilter = struct(n0, _LWEF, 0, [_n, _v, _mOa], [0, 64 | 0, 0]);
export var ListWorkloadEstimatesRequest = struct(
  n0,
  _LWER,
  0,
  [_cAF, _eAF, _f, _nT, _mR],
  [() => FilterTimestamp, () => FilterTimestamp, () => ListWorkloadEstimatesFilters, 0, 1]
);
export var ListWorkloadEstimatesResponse = struct(n0, _LWERi, 0, [_it, _nT], [() => WorkloadEstimateSummaries, 0]);
export var UsageQuantityResult = struct(n0, _UQR, 0, [_am, _un], [1, 0]);
export var WorkloadEstimateSummary = struct(
  n0,
  _WES,
  0,
  [_i, _n, _cAr, _eA, _rTa, _rTat, _s, _tC, _cC, _fM],
  [0, 0, 4, 4, 0, 4, 0, 1, 0, 0]
);
export var BillEstimateCommitmentSummaries = list(n0, _BECSil, 0, () => BillEstimateCommitmentSummary);
export var BillEstimateLineItemSummaries = list(n0, _BELISi, 0, () => BillEstimateLineItemSummary);
export var BillEstimateSummaries = list(n0, _BESi, 0, () => BillEstimateSummary);
export var BillScenarioSummaries = list(n0, _BSSi, 0, () => BillScenarioSummary);
export var ListBillEstimateLineItemsFilters = list(n0, _LBELIFi, 0, () => ListBillEstimateLineItemsFilter);
export var ListBillEstimateLineItemsFilterValues = 64 | 0;

export var ListBillEstimatesFilters = list(n0, _LBEFi, 0, () => ListBillEstimatesFilter);
export var ListBillEstimatesFilterValues = 64 | 0;

export var ListBillScenariosFilters = list(n0, _LBSFi, 0, () => ListBillScenariosFilter);
export var ListBillScenariosFilterValues = 64 | 0;

export var ListWorkloadEstimatesFilters = list(n0, _LWEFi, 0, () => ListWorkloadEstimatesFilter);
export var ListWorkloadEstimatesFilterValues = 64 | 0;

export var SavingsPlanArns = 64 | 0;

export var WorkloadEstimateSummaries = list(n0, _WESo, 0, () => WorkloadEstimateSummary);
export var ListBillEstimateCommitments = op(
  n0,
  _LBEC,
  0,
  () => ListBillEstimateCommitmentsRequest,
  () => ListBillEstimateCommitmentsResponse
);
export var ListBillEstimateLineItems = op(
  n0,
  _LBELI,
  0,
  () => ListBillEstimateLineItemsRequest,
  () => ListBillEstimateLineItemsResponse
);
export var ListBillEstimates = op(
  n0,
  _LBE,
  0,
  () => ListBillEstimatesRequest,
  () => ListBillEstimatesResponse
);
export var ListBillScenarios = op(
  n0,
  _LBS,
  0,
  () => ListBillScenariosRequest,
  () => ListBillScenariosResponse
);
export var ListWorkloadEstimates = op(
  n0,
  _LWE,
  0,
  () => ListWorkloadEstimatesRequest,
  () => ListWorkloadEstimatesResponse
);
