// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _IRF, _IRFd, _n, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IdleRecommendationFilter = struct(n0, _IRF, 0, [_n, _va], [0, 64 | 0]);
export var IdleRecommendationFilters = list(n0, _IRFd, 0, () => IdleRecommendationFilter);
