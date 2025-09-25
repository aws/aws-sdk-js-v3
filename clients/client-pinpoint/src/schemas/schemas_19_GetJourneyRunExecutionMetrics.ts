// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _GJREM,
  _GJREMR,
  _GJREMRe,
  _h,
  _hQ,
  _JI,
  _JREMR,
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

export var GetJourneyRunExecutionMetricsRequest = struct(
  n0,
  _GJREMR,
  0,
  [_AI, _JI, _NT, _PS, _RIu],
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
    [0, 1],
  ]
);
export var GetJourneyRunExecutionMetricsResponse = struct(
  n0,
  _GJREMRe,
  0,
  [_JREMR],
  [[() => JourneyRunExecutionMetricsResponse, 16]]
);
export var JourneyRunExecutionMetricsResponse = struct(
  n0,
  _JREMR,
  0,
  [_AI, _JI, _LET, _Me, _RIu],
  [0, 0, 0, 128 | 0, 0]
);
export var GetJourneyRunExecutionMetrics = op(
  n0,
  _GJREM,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/execution-metrics", 200],
  },
  () => GetJourneyRunExecutionMetricsRequest,
  () => GetJourneyRunExecutionMetricsResponse
);
