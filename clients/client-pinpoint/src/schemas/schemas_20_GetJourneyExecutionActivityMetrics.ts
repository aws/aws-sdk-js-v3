// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ATc,
  _GJEAM,
  _GJEAMR,
  _GJEAMRe,
  _h,
  _hQ,
  _JAI,
  _JEAMR,
  _JI,
  _LET,
  _Me,
  _NT,
  _nt,
  _PS,
  _ps,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetJourneyExecutionActivityMetricsRequest = struct(
  n0,
  _GJEAMR,
  0,
  [_AI, _JAI, _JI, _NT, _PS],
  [
    [0, 1],
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
export var GetJourneyExecutionActivityMetricsResponse = struct(
  n0,
  _GJEAMRe,
  0,
  [_JEAMR],
  [[() => JourneyExecutionActivityMetricsResponse, 16]]
);
export var JourneyExecutionActivityMetricsResponse = struct(
  n0,
  _JEAMR,
  0,
  [_ATc, _AI, _JAI, _JI, _LET, _Me],
  [0, 0, 0, 0, 0, 128 | 0]
);
export var GetJourneyExecutionActivityMetrics = op(
  n0,
  _GJEAM,
  {
    [_h]: [
      "GET",
      "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics",
      200,
    ],
  },
  () => GetJourneyExecutionActivityMetricsRequest,
  () => GetJourneyExecutionActivityMetricsResponse
);
