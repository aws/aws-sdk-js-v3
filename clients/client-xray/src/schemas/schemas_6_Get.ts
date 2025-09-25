// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AS,
  _ASL,
  _CRIS,
  _ETv,
  _FC,
  _GIE,
  _GIER,
  _GIERe,
  _h,
  _IE,
  _IEL,
  _IEn,
  _II,
  _MR,
  _N,
  _Na,
  _NT,
  _OCk,
  _RCSRIS,
  _RIS,
  _SI,
  _Su,
  _T,
  _TAS,
  _TCo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalousService = struct(n0, _AS, 0, [_SI], [() => ServiceId]);
export var GetInsightEventsRequest = struct(n0, _GIER, 0, [_II, _MR, _NT], [0, 1, 0]);
export var GetInsightEventsResult = struct(n0, _GIERe, 0, [_IE, _NT], [() => InsightEventList, 0]);
export var InsightEvent = struct(
  n0,
  _IEn,
  0,
  [_Su, _ETv, _CRIS, _RCSRIS, _TAS],
  [0, 4, () => RequestImpactStatistics, () => RequestImpactStatistics, () => AnomalousServiceList]
);
export var RequestImpactStatistics = struct(n0, _RIS, 0, [_FC, _OCk, _TCo], [1, 1, 1]);
export var ServiceId = struct(n0, _SI, 0, [_N, _Na, _AI, _T], [0, 64 | 0, 0, 0]);
export var AnomalousServiceList = list(n0, _ASL, 0, () => AnomalousService);
export var InsightEventList = list(n0, _IEL, 0, () => InsightEvent);
export var GetInsightEvents = op(
  n0,
  _GIE,
  {
    [_h]: ["POST", "/InsightEvents", 200],
  },
  () => GetInsightEventsRequest,
  () => GetInsightEventsResult
);
