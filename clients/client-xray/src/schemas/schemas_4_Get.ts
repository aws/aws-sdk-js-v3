// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ca,
  _CRIS,
  _D,
  _EC,
  _ET,
  _GARN,
  _GEC,
  _GECR,
  _GECRe,
  _GI,
  _GIR,
  _GIRe,
  _GIS,
  _GISR,
  _GISRe,
  _GN,
  _GTSD,
  _GTSDR,
  _GTSDRe,
  _h,
  _II,
  _In,
  _IS,
  _ISL,
  _ISn,
  _KI,
  _LUT,
  _MR,
  _NT,
  _PEC,
  _PECR,
  _PECRu,
  _RCSI,
  _RCSRIS,
  _S,
  _ST,
  _St,
  _Sta,
  _Su,
  _T,
  _TAS,
  _UTSD,
  _UTSDR,
  _UTSDRp,
  n0,
} from "./schemas_0";
import { AnomalousServiceList, RequestImpactStatistics, ServiceId } from "./schemas_6_Get";

/* eslint no-var: 0 */

export var EncryptionConfig = struct(n0, _EC, 0, [_KI, _S, _T], [0, 0, 0]);
export var GetEncryptionConfigRequest = struct(n0, _GECR, 0, [], []);
export var GetEncryptionConfigResult = struct(n0, _GECRe, 0, [_EC], [() => EncryptionConfig]);
export var GetInsightRequest = struct(n0, _GIR, 0, [_II], [0]);
export var GetInsightResult = struct(n0, _GIRe, 0, [_In], [() => Insight]);
export var GetInsightSummariesRequest = struct(
  n0,
  _GISR,
  0,
  [_St, _GARN, _GN, _ST, _ET, _MR, _NT],
  [64 | 0, 0, 0, 4, 4, 1, 0]
);
export var GetInsightSummariesResult = struct(n0, _GISRe, 0, [_IS, _NT], [() => InsightSummaryList, 0]);
export var GetTraceSegmentDestinationRequest = struct(n0, _GTSDR, 0, [], []);
export var GetTraceSegmentDestinationResult = struct(n0, _GTSDRe, 0, [_D, _S], [0, 0]);
export var Insight = struct(
  n0,
  _In,
  0,
  [_II, _GARN, _GN, _RCSI, _Ca, _Sta, _ST, _ET, _Su, _CRIS, _RCSRIS, _TAS],
  [
    0,
    0,
    0,
    () => ServiceId,
    64 | 0,
    0,
    4,
    4,
    0,
    () => RequestImpactStatistics,
    () => RequestImpactStatistics,
    () => AnomalousServiceList,
  ]
);
export var InsightSummary = struct(
  n0,
  _ISn,
  0,
  [_II, _GARN, _GN, _RCSI, _Ca, _Sta, _ST, _ET, _Su, _CRIS, _RCSRIS, _TAS, _LUT],
  [
    0,
    0,
    0,
    () => ServiceId,
    64 | 0,
    0,
    4,
    4,
    0,
    () => RequestImpactStatistics,
    () => RequestImpactStatistics,
    () => AnomalousServiceList,
    4,
  ]
);
export var PutEncryptionConfigRequest = struct(n0, _PECR, 0, [_KI, _T], [0, 0]);
export var PutEncryptionConfigResult = struct(n0, _PECRu, 0, [_EC], [() => EncryptionConfig]);
export var UpdateTraceSegmentDestinationRequest = struct(n0, _UTSDR, 0, [_D], [0]);
export var UpdateTraceSegmentDestinationResult = struct(n0, _UTSDRp, 0, [_D, _S], [0, 0]);
export var Unit = "unit" as const;

export var InsightCategoryList = 64 | 0;

export var InsightStateList = 64 | 0;

export var InsightSummaryList = list(n0, _ISL, 0, () => InsightSummary);
export var GetEncryptionConfig = op(
  n0,
  _GEC,
  {
    [_h]: ["POST", "/EncryptionConfig", 200],
  },
  () => GetEncryptionConfigRequest,
  () => GetEncryptionConfigResult
);
export var GetInsight = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/Insight", 200],
  },
  () => GetInsightRequest,
  () => GetInsightResult
);
export var GetInsightSummaries = op(
  n0,
  _GIS,
  {
    [_h]: ["POST", "/InsightSummaries", 200],
  },
  () => GetInsightSummariesRequest,
  () => GetInsightSummariesResult
);
export var GetTraceSegmentDestination = op(
  n0,
  _GTSD,
  {
    [_h]: ["POST", "/GetTraceSegmentDestination", 200],
  },
  () => GetTraceSegmentDestinationRequest,
  () => GetTraceSegmentDestinationResult
);
export var PutEncryptionConfig = op(
  n0,
  _PEC,
  {
    [_h]: ["POST", "/PutEncryptionConfig", 200],
  },
  () => PutEncryptionConfigRequest,
  () => PutEncryptionConfigResult
);
export var UpdateTraceSegmentDestination = op(
  n0,
  _UTSD,
  {
    [_h]: ["POST", "/UpdateTraceSegmentDestination", 200],
  },
  () => UpdateTraceSegmentDestinationRequest,
  () => UpdateTraceSegmentDestinationResult
);
