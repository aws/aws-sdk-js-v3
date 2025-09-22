// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DCAC, _DCACR, _DCACRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCallAnalyticsCategoryRequest = struct(n0, _DCACR, 0, [_CN], [[0, 1]]);
export var DeleteCallAnalyticsCategoryResponse = struct(n0, _DCACRe, 0, [], []);
export var DeleteCallAnalyticsCategory = op(
  n0,
  _DCAC,
  {
    [_h]: ["DELETE", "/callanalyticscategories/{CategoryName}", 204],
  },
  () => DeleteCallAnalyticsCategoryRequest,
  () => DeleteCallAnalyticsCategoryResponse
);
