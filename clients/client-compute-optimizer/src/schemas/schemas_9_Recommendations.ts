// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _LRF, _LRFi, _n, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LicenseRecommendationFilter = struct(n0, _LRF, 0, [_n, _va], [0, 64 | 0]);
export var LicenseRecommendationFilters = list(n0, _LRFi, 0, () => LicenseRecommendationFilter);
