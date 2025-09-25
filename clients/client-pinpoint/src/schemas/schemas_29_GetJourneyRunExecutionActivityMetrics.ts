// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ATc,
  _GJREAM,
  _GJREAMR,
  _GJREAMRe,
  _h,
  _hQ,
  _JAI,
  _JI,
  _JREAMR,
  _LET,
  _Me,
  _NT,
  _nt,
  _PS,
  _ps,
  _RIu,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetJourneyRunExecutionActivityMetricsRequest = struct(
  n0,
  _GJREAMR,
  0,
  [_AI, _JAI, _JI, _NT, _PS, _RIu],
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
    [0, 1],
  ]
);
export var GetJourneyRunExecutionActivityMetricsResponse = struct(
  n0,
  _GJREAMRe,
  0,
  [_JREAMR],
  [[() => JourneyRunExecutionActivityMetricsResponse, 16]]
);
export var JourneyRunExecutionActivityMetricsResponse = struct(
  n0,
  _JREAMR,
  0,
  [_ATc, _AI, _JAI, _JI, _LET, _Me, _RIu],
  [0, 0, 0, 0, 0, 128 | 0, 0]
);
export var GetJourneyRunExecutionActivityMetrics = op(
  n0,
  _GJREAM,
  {
    [_h]: [
      "GET",
      "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/activities/{JourneyActivityId}/execution-metrics",
      200,
    ],
  },
  () => GetJourneyRunExecutionActivityMetricsRequest,
  () => GetJourneyRunExecutionActivityMetricsResponse
);
