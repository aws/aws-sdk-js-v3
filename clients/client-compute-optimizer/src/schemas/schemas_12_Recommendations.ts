// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import { _c, _e, _hE, _LEE, _LFRF, _LFRFa, _m, _n, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LambdaFunctionRecommendationFilter = struct(n0, _LFRF, 0, [_n, _va], [0, 64 | 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var LambdaFunctionRecommendationFilters = list(n0, _LFRFa, 0, () => LambdaFunctionRecommendationFilter);
