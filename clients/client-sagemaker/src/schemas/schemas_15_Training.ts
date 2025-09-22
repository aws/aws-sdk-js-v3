// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AICv,
  _ASIC,
  _AZ,
  _CCur,
  _DH,
  _DM,
  _DRCesc,
  _DRCR,
  _DRCRe,
  _DTP,
  _DTPR,
  _DTPRe,
  _ETBn,
  _ETn,
  _Fil,
  _ICns,
  _IT,
  _IUIC,
  _LTP,
  _LTPR,
  _LTPRi,
  _MR,
  _N,
  _NT,
  _RCA,
  _RCO,
  _RCOe,
  _RCS,
  _RCSe,
  _RCT,
  _RETB,
  _RSTA,
  _SBo,
  _SM,
  _SO,
  _St,
  _STAt,
  _STBt,
  _STPO,
  _STPOR,
  _STPORe,
  _STt,
  _TICo,
  _TPA,
  _TPF,
  _TPFr,
  _TPN,
  _TPO,
  _TPOI,
  _TPOr,
  _TPSr,
  _TPSra,
  _TRa,
  _TUSC,
  _UF,
  _UIC,
  _USC,
  _USS,
  _UST,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedCapacityRequest = struct(n0, _DRCR, 0, [_RCA], [0]);
export var DescribeReservedCapacityResponse = struct(
  n0,
  _DRCRe,
  0,
  [_RCA, _RCT, _St, _AZ, _DH, _DM, _STt, _ETn, _IT, _TICo, _AICv, _IUIC, _USS],
  [0, 0, 0, 0, 1, 1, 4, 4, 0, 1, 1, 1, () => UltraServerSummary]
);
export var DescribeTrainingPlanRequest = struct(n0, _DTPR, 0, [_TPN], [0]);
export var DescribeTrainingPlanResponse = struct(
  n0,
  _DTPRe,
  0,
  [_TPA, _TPN, _St, _SM, _DH, _DM, _STt, _ETn, _UF, _CCur, _TICo, _AICv, _IUIC, _UIC, _ASIC, _TUSC, _TRa, _RCS],
  [0, 0, 0, 0, 1, 1, 4, 4, 0, 0, 1, 1, 1, 1, 1, 1, 64 | 0, () => ReservedCapacitySummaries]
);
export var ListTrainingPlansRequest = struct(
  n0,
  _LTPR,
  0,
  [_NT, _MR, _STAt, _STBt, _SBo, _SO, _Fil],
  [0, 1, 4, 4, 0, 0, () => TrainingPlanFilters]
);
export var ListTrainingPlansResponse = struct(n0, _LTPRi, 0, [_NT, _TPSr], [0, () => TrainingPlanSummaries]);
export var ReservedCapacityOffering = struct(
  n0,
  _RCO,
  0,
  [_RCT, _UST, _USC, _IT, _ICns, _AZ, _DH, _DM, _STt, _ETn],
  [0, 0, 1, 0, 1, 0, 1, 1, 4, 4]
);
export var ReservedCapacitySummary = struct(
  n0,
  _RCSe,
  0,
  [_RCA, _RCT, _UST, _USC, _IT, _TICo, _St, _AZ, _DH, _DM, _STt, _ETn],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 4, 4]
);
export var SearchTrainingPlanOfferingsRequest = struct(
  n0,
  _STPOR,
  0,
  [_IT, _ICns, _UST, _USC, _STAt, _ETBn, _DH, _TRa],
  [0, 1, 0, 1, 4, 4, 1, 64 | 0]
);
export var SearchTrainingPlanOfferingsResponse = struct(n0, _STPORe, 0, [_TPO], [() => TrainingPlanOfferings]);
export var TrainingPlanFilter = struct(n0, _TPF, 0, [_N, _Va], [0, 0]);
export var TrainingPlanOffering = struct(
  n0,
  _TPOr,
  0,
  [_TPOI, _TRa, _RSTA, _RETB, _DH, _DM, _UF, _CCur, _RCOe],
  [0, 64 | 0, 4, 4, 1, 1, 0, 0, () => ReservedCapacityOfferings]
);
export var TrainingPlanSummary = struct(
  n0,
  _TPSra,
  0,
  [_TPA, _TPN, _St, _SM, _DH, _DM, _STt, _ETn, _UF, _CCur, _TICo, _AICv, _IUIC, _TUSC, _TRa, _RCS],
  [0, 0, 0, 0, 1, 1, 4, 4, 0, 0, 1, 1, 1, 1, 64 | 0, () => ReservedCapacitySummaries]
);
export var UltraServerSummary = struct(n0, _USS, 0, [_UST, _IT, _USC, _ASIC, _UIC], [0, 0, 1, 1, 1]);
export var ReservedCapacityOfferings = list(n0, _RCOe, 0, () => ReservedCapacityOffering);
export var ReservedCapacitySummaries = list(n0, _RCS, 0, () => ReservedCapacitySummary);
export var SageMakerResourceNames = 64 | 0;

export var TrainingPlanFilters = list(n0, _TPFr, 0, () => TrainingPlanFilter);
export var TrainingPlanOfferings = list(n0, _TPO, 0, () => TrainingPlanOffering);
export var TrainingPlanSummaries = list(n0, _TPSr, 0, () => TrainingPlanSummary);
export var DescribeReservedCapacity = op(
  n0,
  _DRCesc,
  0,
  () => DescribeReservedCapacityRequest,
  () => DescribeReservedCapacityResponse
);
export var DescribeTrainingPlan = op(
  n0,
  _DTP,
  0,
  () => DescribeTrainingPlanRequest,
  () => DescribeTrainingPlanResponse
);
export var ListTrainingPlans = op(
  n0,
  _LTP,
  0,
  () => ListTrainingPlansRequest,
  () => ListTrainingPlansResponse
);
export var SearchTrainingPlanOfferings = op(
  n0,
  _STPO,
  0,
  () => SearchTrainingPlanOfferingsRequest,
  () => SearchTrainingPlanOfferingsResponse
);
