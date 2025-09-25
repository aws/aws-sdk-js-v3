// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _GJEM, _GJEMR, _GJEMRe, _h, _hQ, _JEMR, _JI, _LET, _Me, _NT, _nt, _PS, _ps, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetJourneyExecutionMetricsRequest = struct(
  n0,
  _GJEMR,
  0,
  [_AI, _JI, _NT, _PS],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
  ]
);
export var GetJourneyExecutionMetricsResponse = struct(
  n0,
  _GJEMRe,
  0,
  [_JEMR],
  [[() => JourneyExecutionMetricsResponse, 16]]
);
export var JourneyExecutionMetricsResponse = struct(n0, _JEMR, 0, [_AI, _JI, _LET, _Me], [0, 0, 0, 128 | 0]);
export var GetJourneyExecutionMetrics = op(
  n0,
  _GJEM,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics", 200],
  },
  () => GetJourneyExecutionMetricsRequest,
  () => GetJourneyExecutionMetricsResponse
);
