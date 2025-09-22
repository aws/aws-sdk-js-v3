// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _am,
  _an,
  _ARIA,
  _aRIA,
  _ASPA,
  _aSPA,
  _aZ,
  _BCBSCM,
  _BCBSCME,
  _BCBSCMEa,
  _BCBSCMEat,
  _BCBSCMEatc,
  _BCBSCMI,
  _BCBSCMIa,
  _BCBSCMR,
  _BCBSCMRa,
  _BCBSUM,
  _BCBSUME,
  _BCBSUMEa,
  _BCBSUMEat,
  _BCBSUMEatc,
  _BCBSUMI,
  _BCBSUMIa,
  _BCBSUMR,
  _BCBSUMRa,
  _BCWEU,
  _BCWEUE,
  _BCWEUEa,
  _BCWEUEat,
  _BCWEUEatc,
  _BCWEUI,
  _BCWEUIa,
  _BCWEUR,
  _BCWEURa,
  _bEI,
  _BEICMS,
  _BEICMSi,
  _BEIUMS,
  _BEIUMSi,
  _bI,
  _BSCMA,
  _BSCMI,
  _BSCMIi,
  _bSI,
  _BSUMI,
  _BSUMIi,
  _BUBSCM,
  _BUBSCME,
  _BUBSCMEa,
  _BUBSCMEat,
  _BUBSCMEatc,
  _BUBSCMR,
  _BUBSCMRa,
  _BUBSUM,
  _BUBSUME,
  _BUBSUMEa,
  _BUBSUMEat,
  _BUBSUMEatc,
  _BUBSUMR,
  _BUBSUMRa,
  _BUWEU,
  _BUWEUE,
  _BUWEUEa,
  _BUWEUEat,
  _BUWEUEatc,
  _BUWEUR,
  _BUWEURa,
  _cA,
  _cCo,
  _cM,
  _co,
  _cos,
  _cT,
  _cu,
  _d,
  _E,
  _eC,
  _EF,
  _EL,
  _eM,
  _er,
  _f,
  _fE,
  _g,
  _hH,
  _hU,
  _HUE,
  _i,
  _iC,
  _iT,
  _it,
  _k,
  _l,
  _LBEICM,
  _LBEICMR,
  _LBEICMRi,
  _LBEIUM,
  _LBEIUMR,
  _LBEIUMRi,
  _LBSCM,
  _LBSCMR,
  _LBSCMRi,
  _LBSUM,
  _LBSUMR,
  _LBSUMRi,
  _LUF,
  _LUFi,
  _LWEU,
  _LWEUR,
  _LWEURi,
  _mO,
  _mOa,
  _mR,
  _n,
  _no,
  _NRIA,
  _nRIA,
  _NSPA,
  _nSPA,
  _nT,
  _o,
  _or,
  _q,
  _qu,
  _rII,
  _rIOI,
  _s,
  _sC,
  _sH,
  _sPI,
  _sPOI,
  _t,
  _u,
  _UA,
  _uAI,
  _UAs,
  _uM,
  _un,
  _UQ,
  _UQs,
  _uT,
  _v,
  _wEI,
  _WEUI,
  _WEUIo,
  _WEUQ,
  _XACT,
  BillInterval,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddReservedInstanceAction = struct(n0, _ARIA, 0, [_rIOI, _iC], [0, 1]);
export var AddSavingsPlanAction = struct(n0, _ASPA, 0, [_sPOI, _co], [0, 1]);
export var BatchCreateBillScenarioCommitmentModificationEntry = struct(
  n0,
  _BCBSCME,
  0,
  [_k, _g, _uAI, _cA],
  [0, 0, 0, () => BillScenarioCommitmentModificationAction]
);
export var BatchCreateBillScenarioCommitmentModificationError = struct(n0, _BCBSCMEa, 0, [_k, _eM, _eC], [0, 0, 0]);
export var BatchCreateBillScenarioCommitmentModificationItem = struct(
  n0,
  _BCBSCMI,
  0,
  [_k, _i, _g, _uAI, _cA],
  [0, 0, 0, 0, () => BillScenarioCommitmentModificationAction]
);
export var BatchCreateBillScenarioCommitmentModificationRequest = struct(
  n0,
  _BCBSCMR,
  0,
  [_bSI, _cM, _cT],
  [
    0,
    () => BatchCreateBillScenarioCommitmentModificationEntries,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var BatchCreateBillScenarioCommitmentModificationResponse = struct(
  n0,
  _BCBSCMRa,
  0,
  [_it, _er],
  [() => BatchCreateBillScenarioCommitmentModificationItems, () => BatchCreateBillScenarioCommitmentModificationErrors]
);
export var BatchCreateBillScenarioUsageModificationEntry = struct(
  n0,
  _BCBSUME,
  0,
  [_sC, _uT, _o, _aZ, _k, _g, _uAI, _a, _hU],
  [0, 0, 0, 0, 0, 0, 0, () => UsageAmounts, () => HistoricalUsageEntity]
);
export var BatchCreateBillScenarioUsageModificationError = struct(n0, _BCBSUMEa, 0, [_k, _eM, _eC], [0, 0, 0]);
export var BatchCreateBillScenarioUsageModificationItem = struct(
  n0,
  _BCBSUMI,
  0,
  [_sC, _uT, _o, _l, _aZ, _i, _g, _uAI, _q, _hU, _k],
  [0, 0, 0, 0, 0, 0, 0, 0, () => UsageQuantities, () => HistoricalUsageEntity, 0]
);
export var BatchCreateBillScenarioUsageModificationRequest = struct(
  n0,
  _BCBSUMR,
  0,
  [_bSI, _uM, _cT],
  [
    0,
    () => BatchCreateBillScenarioUsageModificationEntries,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var BatchCreateBillScenarioUsageModificationResponse = struct(
  n0,
  _BCBSUMRa,
  0,
  [_it, _er],
  [() => BatchCreateBillScenarioUsageModificationItems, () => BatchCreateBillScenarioUsageModificationErrors]
);
export var BatchCreateWorkloadEstimateUsageEntry = struct(
  n0,
  _BCWEUE,
  0,
  [_sC, _uT, _o, _k, _g, _uAI, _am, _hU],
  [0, 0, 0, 0, 0, 0, 1, () => HistoricalUsageEntity]
);
export var BatchCreateWorkloadEstimateUsageError = struct(n0, _BCWEUEa, 0, [_k, _eC, _eM], [0, 0, 0]);
export var BatchCreateWorkloadEstimateUsageItem = struct(
  n0,
  _BCWEUI,
  0,
  [_sC, _uT, _o, _l, _i, _uAI, _g, _qu, _cos, _cu, _s, _hU, _k],
  [0, 0, 0, 0, 0, 0, 0, () => WorkloadEstimateUsageQuantity, 1, 0, 0, () => HistoricalUsageEntity, 0]
);
export var BatchCreateWorkloadEstimateUsageRequest = struct(
  n0,
  _BCWEUR,
  0,
  [_wEI, _u, _cT],
  [
    0,
    () => BatchCreateWorkloadEstimateUsageEntries,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var BatchCreateWorkloadEstimateUsageResponse = struct(
  n0,
  _BCWEURa,
  0,
  [_it, _er],
  [() => BatchCreateWorkloadEstimateUsageItems, () => BatchCreateWorkloadEstimateUsageErrors]
);
export var BatchUpdateBillScenarioCommitmentModificationEntry = struct(n0, _BUBSCME, 0, [_i, _g], [0, 0]);
export var BatchUpdateBillScenarioCommitmentModificationError = struct(n0, _BUBSCMEa, 0, [_i, _eC, _eM], [0, 0, 0]);
export var BatchUpdateBillScenarioCommitmentModificationRequest = struct(
  n0,
  _BUBSCMR,
  0,
  [_bSI, _cM],
  [0, () => BatchUpdateBillScenarioCommitmentModificationEntries]
);
export var BatchUpdateBillScenarioCommitmentModificationResponse = struct(
  n0,
  _BUBSCMRa,
  0,
  [_it, _er],
  [() => BillScenarioCommitmentModificationItems, () => BatchUpdateBillScenarioCommitmentModificationErrors]
);
export var BatchUpdateBillScenarioUsageModificationEntry = struct(
  n0,
  _BUBSUME,
  0,
  [_i, _g, _a],
  [0, 0, () => UsageAmounts]
);
export var BatchUpdateBillScenarioUsageModificationError = struct(n0, _BUBSUMEa, 0, [_i, _eM, _eC], [0, 0, 0]);
export var BatchUpdateBillScenarioUsageModificationRequest = struct(
  n0,
  _BUBSUMR,
  0,
  [_bSI, _uM],
  [0, () => BatchUpdateBillScenarioUsageModificationEntries]
);
export var BatchUpdateBillScenarioUsageModificationResponse = struct(
  n0,
  _BUBSUMRa,
  0,
  [_it, _er],
  [() => BillScenarioUsageModificationItems, () => BatchUpdateBillScenarioUsageModificationErrors]
);
export var BatchUpdateWorkloadEstimateUsageEntry = struct(n0, _BUWEUE, 0, [_i, _g, _am], [0, 0, 1]);
export var BatchUpdateWorkloadEstimateUsageError = struct(n0, _BUWEUEa, 0, [_i, _eM, _eC], [0, 0, 0]);
export var BatchUpdateWorkloadEstimateUsageRequest = struct(
  n0,
  _BUWEUR,
  0,
  [_wEI, _u],
  [0, () => BatchUpdateWorkloadEstimateUsageEntries]
);
export var BatchUpdateWorkloadEstimateUsageResponse = struct(
  n0,
  _BUWEURa,
  0,
  [_it, _er],
  [() => WorkloadEstimateUsageItems, () => BatchUpdateWorkloadEstimateUsageErrors]
);
export var BillEstimateInputCommitmentModificationSummary = struct(
  n0,
  _BEICMS,
  0,
  [_i, _g, _uAI, _cA],
  [0, 0, 0, () => BillScenarioCommitmentModificationAction]
);
export var BillEstimateInputUsageModificationSummary = struct(
  n0,
  _BEIUMS,
  0,
  [_sC, _uT, _o, _l, _aZ, _i, _g, _uAI, _q, _hU],
  [0, 0, 0, 0, 0, 0, 0, 0, () => UsageQuantities, () => HistoricalUsageEntity]
);
export var BillScenarioCommitmentModificationItem = struct(
  n0,
  _BSCMI,
  0,
  [_i, _uAI, _g, _cA],
  [0, 0, 0, () => BillScenarioCommitmentModificationAction]
);
export var BillScenarioUsageModificationItem = struct(
  n0,
  _BSUMI,
  0,
  [_sC, _uT, _o, _l, _aZ, _i, _g, _uAI, _q, _hU],
  [0, 0, 0, 0, 0, 0, 0, 0, () => UsageQuantities, () => HistoricalUsageEntity]
);
export var Expression = struct(
  n0,
  _E,
  0,
  [_an, _or, _no, _cCo, _d, _t],
  [
    () => ExpressionList,
    () => ExpressionList,
    () => Expression,
    () => ExpressionFilter,
    () => ExpressionFilter,
    () => ExpressionFilter,
  ]
);
export var ExpressionFilter = struct(n0, _EF, 0, [_k, _mO, _v], [0, 64 | 0, 64 | 0]);
export var HistoricalUsageEntity = struct(
  n0,
  _HUE,
  0,
  [_sC, _uT, _o, _l, _uAI, _bI, _fE],
  [0, 0, 0, 0, 0, () => BillInterval, () => Expression]
);
export var ListBillEstimateInputCommitmentModificationsRequest = struct(n0, _LBEICMR, 0, [_bEI, _nT, _mR], [0, 0, 1]);
export var ListBillEstimateInputCommitmentModificationsResponse = struct(
  n0,
  _LBEICMRi,
  0,
  [_it, _nT],
  [() => BillEstimateInputCommitmentModificationSummaries, 0]
);
export var ListBillEstimateInputUsageModificationsRequest = struct(
  n0,
  _LBEIUMR,
  0,
  [_bEI, _f, _nT, _mR],
  [0, () => ListUsageFilters, 0, 1]
);
export var ListBillEstimateInputUsageModificationsResponse = struct(
  n0,
  _LBEIUMRi,
  0,
  [_it, _nT],
  [() => BillEstimateInputUsageModificationSummaries, 0]
);
export var ListBillScenarioCommitmentModificationsRequest = struct(n0, _LBSCMR, 0, [_bSI, _nT, _mR], [0, 0, 1]);
export var ListBillScenarioCommitmentModificationsResponse = struct(
  n0,
  _LBSCMRi,
  0,
  [_it, _nT],
  [() => BillScenarioCommitmentModificationItems, 0]
);
export var ListBillScenarioUsageModificationsRequest = struct(
  n0,
  _LBSUMR,
  0,
  [_bSI, _f, _nT, _mR],
  [0, () => ListUsageFilters, 0, 1]
);
export var ListBillScenarioUsageModificationsResponse = struct(
  n0,
  _LBSUMRi,
  0,
  [_it, _nT],
  [() => BillScenarioUsageModificationItems, 0]
);
export var ListUsageFilter = struct(n0, _LUF, 0, [_n, _v, _mOa], [0, 64 | 0, 0]);
export var ListWorkloadEstimateUsageRequest = struct(
  n0,
  _LWEUR,
  0,
  [_wEI, _f, _nT, _mR],
  [0, () => ListUsageFilters, 0, 1]
);
export var ListWorkloadEstimateUsageResponse = struct(
  n0,
  _LWEURi,
  0,
  [_it, _nT],
  [() => WorkloadEstimateUsageItems, 0]
);
export var NegateReservedInstanceAction = struct(n0, _NRIA, 0, [_rII], [0]);
export var NegateSavingsPlanAction = struct(n0, _NSPA, 0, [_sPI], [0]);
export var UsageAmount = struct(n0, _UA, 0, [_sH, _am], [4, 1]);
export var UsageQuantity = struct(n0, _UQ, 0, [_sH, _un, _am], [4, 0, 1]);
export var WorkloadEstimateUsageItem = struct(
  n0,
  _WEUI,
  0,
  [_sC, _uT, _o, _l, _i, _uAI, _g, _qu, _cos, _cu, _s, _hU],
  [0, 0, 0, 0, 0, 0, 0, () => WorkloadEstimateUsageQuantity, 1, 0, 0, () => HistoricalUsageEntity]
);
export var WorkloadEstimateUsageQuantity = struct(n0, _WEUQ, 0, [_un, _am], [0, 1]);
export var BatchCreateBillScenarioCommitmentModificationEntries = list(
  n0,
  _BCBSCMEat,
  0,
  () => BatchCreateBillScenarioCommitmentModificationEntry
);
export var BatchCreateBillScenarioCommitmentModificationErrors = list(
  n0,
  _BCBSCMEatc,
  0,
  () => BatchCreateBillScenarioCommitmentModificationError
);
export var BatchCreateBillScenarioCommitmentModificationItems = list(
  n0,
  _BCBSCMIa,
  0,
  () => BatchCreateBillScenarioCommitmentModificationItem
);
export var BatchCreateBillScenarioUsageModificationEntries = list(
  n0,
  _BCBSUMEat,
  0,
  () => BatchCreateBillScenarioUsageModificationEntry
);
export var BatchCreateBillScenarioUsageModificationErrors = list(
  n0,
  _BCBSUMEatc,
  0,
  () => BatchCreateBillScenarioUsageModificationError
);
export var BatchCreateBillScenarioUsageModificationItems = list(
  n0,
  _BCBSUMIa,
  0,
  () => BatchCreateBillScenarioUsageModificationItem
);
export var BatchCreateWorkloadEstimateUsageEntries = list(
  n0,
  _BCWEUEat,
  0,
  () => BatchCreateWorkloadEstimateUsageEntry
);
export var BatchCreateWorkloadEstimateUsageErrors = list(
  n0,
  _BCWEUEatc,
  0,
  () => BatchCreateWorkloadEstimateUsageError
);
export var BatchCreateWorkloadEstimateUsageItems = list(n0, _BCWEUIa, 0, () => BatchCreateWorkloadEstimateUsageItem);
export var BatchUpdateBillScenarioCommitmentModificationEntries = list(
  n0,
  _BUBSCMEat,
  0,
  () => BatchUpdateBillScenarioCommitmentModificationEntry
);
export var BatchUpdateBillScenarioCommitmentModificationErrors = list(
  n0,
  _BUBSCMEatc,
  0,
  () => BatchUpdateBillScenarioCommitmentModificationError
);
export var BatchUpdateBillScenarioUsageModificationEntries = list(
  n0,
  _BUBSUMEat,
  0,
  () => BatchUpdateBillScenarioUsageModificationEntry
);
export var BatchUpdateBillScenarioUsageModificationErrors = list(
  n0,
  _BUBSUMEatc,
  0,
  () => BatchUpdateBillScenarioUsageModificationError
);
export var BatchUpdateWorkloadEstimateUsageEntries = list(
  n0,
  _BUWEUEat,
  0,
  () => BatchUpdateWorkloadEstimateUsageEntry
);
export var BatchUpdateWorkloadEstimateUsageErrors = list(
  n0,
  _BUWEUEatc,
  0,
  () => BatchUpdateWorkloadEstimateUsageError
);
export var BillEstimateInputCommitmentModificationSummaries = list(
  n0,
  _BEICMSi,
  0,
  () => BillEstimateInputCommitmentModificationSummary
);
export var BillEstimateInputUsageModificationSummaries = list(
  n0,
  _BEIUMSi,
  0,
  () => BillEstimateInputUsageModificationSummary
);
export var BillScenarioCommitmentModificationItems = list(n0, _BSCMIi, 0, () => BillScenarioCommitmentModificationItem);
export var BillScenarioUsageModificationItems = list(n0, _BSUMIi, 0, () => BillScenarioUsageModificationItem);
export var ExpressionList = list(n0, _EL, 0, () => Expression);
export var ListUsageFilters = list(n0, _LUFi, 0, () => ListUsageFilter);
export var ListUsageFilterValues = 64 | 0;

export var StringList = 64 | 0;

export var UsageAmounts = list(n0, _UAs, 0, () => UsageAmount);
export var UsageQuantities = list(n0, _UQs, 0, () => UsageQuantity);
export var WorkloadEstimateUsageItems = list(n0, _WEUIo, 0, () => WorkloadEstimateUsageItem);
export var BillScenarioCommitmentModificationAction = uni(
  n0,
  _BSCMA,
  0,
  [_aRIA, _aSPA, _nRIA, _nSPA],
  [
    () => AddReservedInstanceAction,
    () => AddSavingsPlanAction,
    () => NegateReservedInstanceAction,
    () => NegateSavingsPlanAction,
  ]
);
export var BatchCreateBillScenarioCommitmentModification = op(
  n0,
  _BCBSCM,
  2,
  () => BatchCreateBillScenarioCommitmentModificationRequest,
  () => BatchCreateBillScenarioCommitmentModificationResponse
);
export var BatchCreateBillScenarioUsageModification = op(
  n0,
  _BCBSUM,
  2,
  () => BatchCreateBillScenarioUsageModificationRequest,
  () => BatchCreateBillScenarioUsageModificationResponse
);
export var BatchCreateWorkloadEstimateUsage = op(
  n0,
  _BCWEU,
  2,
  () => BatchCreateWorkloadEstimateUsageRequest,
  () => BatchCreateWorkloadEstimateUsageResponse
);
export var BatchUpdateBillScenarioCommitmentModification = op(
  n0,
  _BUBSCM,
  2,
  () => BatchUpdateBillScenarioCommitmentModificationRequest,
  () => BatchUpdateBillScenarioCommitmentModificationResponse
);
export var BatchUpdateBillScenarioUsageModification = op(
  n0,
  _BUBSUM,
  2,
  () => BatchUpdateBillScenarioUsageModificationRequest,
  () => BatchUpdateBillScenarioUsageModificationResponse
);
export var BatchUpdateWorkloadEstimateUsage = op(
  n0,
  _BUWEU,
  2,
  () => BatchUpdateWorkloadEstimateUsageRequest,
  () => BatchUpdateWorkloadEstimateUsageResponse
);
export var ListBillEstimateInputCommitmentModifications = op(
  n0,
  _LBEICM,
  0,
  () => ListBillEstimateInputCommitmentModificationsRequest,
  () => ListBillEstimateInputCommitmentModificationsResponse
);
export var ListBillEstimateInputUsageModifications = op(
  n0,
  _LBEIUM,
  0,
  () => ListBillEstimateInputUsageModificationsRequest,
  () => ListBillEstimateInputUsageModificationsResponse
);
export var ListBillScenarioCommitmentModifications = op(
  n0,
  _LBSCM,
  0,
  () => ListBillScenarioCommitmentModificationsRequest,
  () => ListBillScenarioCommitmentModificationsResponse
);
export var ListBillScenarioUsageModifications = op(
  n0,
  _LBSUM,
  0,
  () => ListBillScenarioUsageModificationsRequest,
  () => ListBillScenarioUsageModificationsResponse
);
export var ListWorkloadEstimateUsage = op(
  n0,
  _LWEU,
  0,
  () => ListWorkloadEstimateUsageRequest,
  () => ListWorkloadEstimateUsageResponse
);
