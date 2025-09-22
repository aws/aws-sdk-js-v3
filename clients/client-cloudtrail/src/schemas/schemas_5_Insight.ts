// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DT, _ECr, _EN, _ES, _ETn, _IT, _LIMD, _LIMDR, _LIMDRi, _MR, _NT, _Pe, _ST, _Ti, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListInsightsMetricDataRequest = struct(
  n0,
  _LIMDR,
  0,
  [_ES, _EN, _IT, _ECr, _ST, _ETn, _Pe, _DT, _MR, _NT],
  [0, 0, 0, 0, 4, 4, 1, 0, 1, 0]
);
export var ListInsightsMetricDataResponse = struct(
  n0,
  _LIMDRi,
  0,
  [_ES, _EN, _IT, _ECr, _Ti, _V, _NT],
  [0, 0, 0, 0, 64 | 4, 64 | 1, 0]
);
export var InsightsMetricValues = 64 | 1;

export var Timestamps = 64 | 4;

export var ListInsightsMetricData = op(
  n0,
  _LIMD,
  2,
  () => ListInsightsMetricDataRequest,
  () => ListInsightsMetricDataResponse
);
