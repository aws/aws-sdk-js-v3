// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ARC,
  _At,
  _AUC,
  _DT,
  _Fi,
  _GSPUD,
  _GSPUDR,
  _GSPUDRe,
  _K,
  _MR,
  _NS,
  _NTe,
  _ODCE,
  _Sa,
  _SB,
  _SDo,
  _SO,
  _SPA,
  _SPAC,
  _SPS,
  _SPU,
  _SPUA,
  _SPUD,
  _SPUDa,
  _TAC,
  _TCo,
  _To,
  _TP,
  _UCn,
  _UCs,
  _UP,
  _Ut,
  DateInterval,
  Expression,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSavingsPlansUtilizationDetailsRequest = struct(
  n0,
  _GSPUDR,
  0,
  [_TP, _Fi, _DT, _NTe, _MR, _SB],
  [() => DateInterval, () => Expression, 64 | 0, 0, 1, () => SortDefinition]
);
export var GetSavingsPlansUtilizationDetailsResponse = struct(
  n0,
  _GSPUDRe,
  0,
  [_SPUD, _To, _TP, _NTe],
  [() => SavingsPlansUtilizationDetails, () => SavingsPlansUtilizationAggregates, () => DateInterval, 0]
);
export var SavingsPlansAmortizedCommitment = struct(n0, _SPAC, 0, [_ARC, _AUC, _TAC], [0, 0, 0]);
export var SavingsPlansSavings = struct(n0, _SPS, 0, [_NS, _ODCE], [0, 0]);
export var SavingsPlansUtilization = struct(n0, _SPU, 0, [_TCo, _UCs, _UCn, _UP], [0, 0, 0, 0]);
export var SavingsPlansUtilizationAggregates = struct(
  n0,
  _SPUA,
  0,
  [_Ut, _Sa, _AC],
  [() => SavingsPlansUtilization, () => SavingsPlansSavings, () => SavingsPlansAmortizedCommitment]
);
export var SavingsPlansUtilizationDetail = struct(
  n0,
  _SPUDa,
  0,
  [_SPA, _At, _Ut, _Sa, _AC],
  [0, 128 | 0, () => SavingsPlansUtilization, () => SavingsPlansSavings, () => SavingsPlansAmortizedCommitment]
);
export var SortDefinition = struct(n0, _SDo, 0, [_K, _SO], [0, 0]);
export var SavingsPlansDataTypes = 64 | 0;

export var SavingsPlansUtilizationDetails = list(n0, _SPUD, 0, () => SavingsPlansUtilizationDetail);
export var GetSavingsPlansUtilizationDetails = op(
  n0,
  _GSPUD,
  0,
  () => GetSavingsPlansUtilizationDetailsRequest,
  () => GetSavingsPlansUtilizationDetailsResponse
);
