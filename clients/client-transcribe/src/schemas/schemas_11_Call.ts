// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CAJD, _CAJN, _CASF, _CASFL, _DCAJ, _DCAJR, _DCAJRe, _Fe, _h, _M, _RC, _Sk, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CallAnalyticsJobDetails = struct(n0, _CAJD, 0, [_Sk], [() => CallAnalyticsSkippedFeatureList]);
export var CallAnalyticsSkippedFeature = struct(n0, _CASF, 0, [_Fe, _RC, _M], [0, 0, 0]);
export var DeleteCallAnalyticsJobRequest = struct(n0, _DCAJR, 0, [_CAJN], [[0, 1]]);
export var DeleteCallAnalyticsJobResponse = struct(n0, _DCAJRe, 0, [], []);
export var CallAnalyticsSkippedFeatureList = list(n0, _CASFL, 0, () => CallAnalyticsSkippedFeature);
export var DeleteCallAnalyticsJob = op(
  n0,
  _DCAJ,
  {
    [_h]: ["DELETE", "/callanalyticsjobs/{CallAnalyticsJobName}", 204],
  },
  () => DeleteCallAnalyticsJobRequest,
  () => DeleteCallAnalyticsJobResponse
);
