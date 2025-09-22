// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ADp,
  _ARF,
  _At,
  _AUF,
  _CBT,
  _CBTo,
  _CCo,
  _CH,
  _CHP,
  _CNU,
  _CNUP,
  _Co,
  _CP,
  _Fi,
  _G,
  _GAUR,
  _GAURR,
  _GAURRe,
  _GB,
  _Gr,
  _GRC,
  _GRCR,
  _GRCRe,
  _GRU,
  _GRUR,
  _GRURe,
  _GSPC,
  _GSPCR,
  _GSPCRe,
  _GSPU,
  _GSPUR,
  _GSPURe,
  _K,
  _LP,
  _Me,
  _MR,
  _NPT,
  _NRIS,
  _NTe,
  _ODC,
  _ODCORIHU,
  _ODH,
  _ODNU,
  _PH,
  _PU,
  _RAes,
  _RCG,
  _RCGe,
  _RH,
  _RICFUH,
  _RNU,
  _RSe,
  _RUG,
  _RUGe,
  _Sa,
  _SB,
  _SCBSP,
  _Se,
  _SPC,
  _SPCav,
  _SPCD,
  _SPUBT,
  _SPUBTa,
  _TAF,
  _TAH,
  _TAU,
  _TC,
  _To,
  _TP,
  _TPRIS,
  _TR,
  _TRH,
  _TRNU,
  _UBT,
  _UBTt,
  _UH,
  _UP,
  _UPIU,
  _US,
  _Ut,
  _UU,
  _Va,
  DateInterval,
  Expression,
  n0,
} from "./schemas_0";
import {
  SavingsPlansAmortizedCommitment,
  SavingsPlansSavings,
  SavingsPlansUtilization,
  SavingsPlansUtilizationAggregates,
  SortDefinition,
} from "./schemas_2_Get";
import { GroupDefinitions } from "./schemas_12_Get";

/* eslint no-var: 0 */

export var Coverage = struct(
  n0,
  _Co,
  0,
  [_CH, _CNU, _CCo],
  [() => CoverageHours, () => CoverageNormalizedUnits, () => CoverageCost]
);
export var CoverageByTime = struct(
  n0,
  _CBT,
  0,
  [_TP, _G, _To],
  [() => DateInterval, () => ReservationCoverageGroups, () => Coverage]
);
export var CoverageCost = struct(n0, _CCo, 0, [_ODC], [0]);
export var CoverageHours = struct(n0, _CH, 0, [_ODH, _RH, _TRH, _CHP], [0, 0, 0, 0]);
export var CoverageNormalizedUnits = struct(n0, _CNU, 0, [_ODNU, _RNU, _TRNU, _CNUP], [0, 0, 0, 0]);
export var GetApproximateUsageRecordsRequest = struct(n0, _GAURR, 0, [_Gr, _Se, _ADp], [0, 64 | 0, 0]);
export var GetApproximateUsageRecordsResponse = struct(
  n0,
  _GAURRe,
  0,
  [_Se, _TR, _LP],
  [128 | 1, 1, () => DateInterval]
);
export var GetReservationCoverageRequest = struct(
  n0,
  _GRCR,
  0,
  [_TP, _GB, _Gr, _Fi, _Me, _NPT, _SB, _MR],
  [() => DateInterval, () => GroupDefinitions, 0, () => Expression, 64 | 0, 0, () => SortDefinition, 1]
);
export var GetReservationCoverageResponse = struct(
  n0,
  _GRCRe,
  0,
  [_CBTo, _To, _NPT],
  [() => CoveragesByTime, () => Coverage, 0]
);
export var GetReservationUtilizationRequest = struct(
  n0,
  _GRUR,
  0,
  [_TP, _GB, _Gr, _Fi, _SB, _NPT, _MR],
  [() => DateInterval, () => GroupDefinitions, 0, () => Expression, () => SortDefinition, 0, 1]
);
export var GetReservationUtilizationResponse = struct(
  n0,
  _GRURe,
  0,
  [_UBT, _To, _NPT],
  [() => UtilizationsByTime, () => ReservationAggregates, 0]
);
export var GetSavingsPlansCoverageRequest = struct(
  n0,
  _GSPCR,
  0,
  [_TP, _GB, _Gr, _Fi, _Me, _NTe, _MR, _SB],
  [() => DateInterval, () => GroupDefinitions, 0, () => Expression, 64 | 0, 0, 1, () => SortDefinition]
);
export var GetSavingsPlansCoverageResponse = struct(n0, _GSPCRe, 0, [_SPC, _NTe], [() => SavingsPlansCoverages, 0]);
export var GetSavingsPlansUtilizationRequest = struct(
  n0,
  _GSPUR,
  0,
  [_TP, _Gr, _Fi, _SB],
  [() => DateInterval, 0, () => Expression, () => SortDefinition]
);
export var GetSavingsPlansUtilizationResponse = struct(
  n0,
  _GSPURe,
  0,
  [_SPUBT, _To],
  [() => SavingsPlansUtilizationsByTime, () => SavingsPlansUtilizationAggregates]
);
export var ReservationAggregates = struct(
  n0,
  _RAes,
  0,
  [_UP, _UPIU, _PH, _PU, _TAH, _TAU, _UH, _UU, _ODCORIHU, _NRIS, _TPRIS, _AUF, _ARF, _TAF, _RICFUH, _RSe, _US],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ReservationCoverageGroup = struct(n0, _RCG, 0, [_At, _Co], [128 | 0, () => Coverage]);
export var ReservationUtilizationGroup = struct(
  n0,
  _RUG,
  0,
  [_K, _Va, _At, _Ut],
  [0, 0, 128 | 0, () => ReservationAggregates]
);
export var SavingsPlansCoverage = struct(
  n0,
  _SPCav,
  0,
  [_At, _Co, _TP],
  [128 | 0, () => SavingsPlansCoverageData, () => DateInterval]
);
export var SavingsPlansCoverageData = struct(n0, _SPCD, 0, [_SCBSP, _ODC, _TC, _CP], [0, 0, 0, 0]);
export var SavingsPlansUtilizationByTime = struct(
  n0,
  _SPUBTa,
  0,
  [_TP, _Ut, _Sa, _AC],
  [() => DateInterval, () => SavingsPlansUtilization, () => SavingsPlansSavings, () => SavingsPlansAmortizedCommitment]
);
export var UtilizationByTime = struct(
  n0,
  _UBTt,
  0,
  [_TP, _G, _To],
  [() => DateInterval, () => ReservationUtilizationGroups, () => ReservationAggregates]
);
export var CoveragesByTime = list(n0, _CBTo, 0, () => CoverageByTime);
export var MetricNames = 64 | 0;

export var ReservationCoverageGroups = list(n0, _RCGe, 0, () => ReservationCoverageGroup);
export var ReservationUtilizationGroups = list(n0, _RUGe, 0, () => ReservationUtilizationGroup);
export var SavingsPlansCoverages = list(n0, _SPC, 0, () => SavingsPlansCoverage);
export var SavingsPlansUtilizationsByTime = list(n0, _SPUBT, 0, () => SavingsPlansUtilizationByTime);
export var UsageServices = 64 | 0;

export var UtilizationsByTime = list(n0, _UBT, 0, () => UtilizationByTime);
export var ApproximateUsageRecordsPerService = 128 | 1;

export var GetApproximateUsageRecords = op(
  n0,
  _GAUR,
  0,
  () => GetApproximateUsageRecordsRequest,
  () => GetApproximateUsageRecordsResponse
);
export var GetReservationCoverage = op(
  n0,
  _GRC,
  0,
  () => GetReservationCoverageRequest,
  () => GetReservationCoverageResponse
);
export var GetReservationUtilization = op(
  n0,
  _GRU,
  0,
  () => GetReservationUtilizationRequest,
  () => GetReservationUtilizationResponse
);
export var GetSavingsPlansCoverage = op(
  n0,
  _GSPC,
  0,
  () => GetSavingsPlansCoverageRequest,
  () => GetSavingsPlansCoverageResponse
);
export var GetSavingsPlansUtilization = op(
  n0,
  _GSPU,
  0,
  () => GetSavingsPlansUtilizationRequest,
  () => GetSavingsPlansUtilizationResponse
);
