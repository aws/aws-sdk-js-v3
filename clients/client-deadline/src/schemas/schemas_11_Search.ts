// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _end,
  _eT,
  _fI,
  _fIle,
  _gB,
  _h,
  _pe,
  _qIu,
  _rIe,
  _SSRes,
  _SSSA,
  _SSSAR,
  _SSSARt,
  _sta,
  _sTt,
  _ti,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartSessionsStatisticsAggregationRequest = struct(
  n0,
  _SSSAR,
  0,
  [_fI, _rIe, _sTt, _eT, _ti, _pe, _gB, _sta],
  [[0, 1], () => SessionsStatisticsResources, 5, 5, 0, 0, 64 | 0, 64 | 0]
);
export var StartSessionsStatisticsAggregationResponse = struct(n0, _SSSARt, 0, [_aI], [0]);
export var QueueIds = 64 | 0;

export var UsageGroupBy = 64 | 0;

export var UsageStatistics = 64 | 0;

export var SessionsStatisticsResources = uni(n0, _SSRes, 0, [_qIu, _fIle], [64 | 0, 64 | 0]);
export var StartSessionsStatisticsAggregation = op(
  n0,
  _SSSA,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/sessions-statistics-aggregation", 200],
    [_end]: ["management."],
  },
  () => StartSessionsStatisticsAggregationRequest,
  () => StartSessionsStatisticsAggregationResponse
);
