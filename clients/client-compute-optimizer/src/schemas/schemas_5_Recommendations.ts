// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _ECSSRF, _ECSSRFe, _n, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ECSServiceRecommendationFilter = struct(n0, _ECSSRF, 0, [_n, _va], [0, 64 | 0]);
export var ECSServiceRecommendationFilters = list(n0, _ECSSRFe, 0, () => ECSServiceRecommendationFilter);
