// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _cVA, _F, _Fi, _n, _RDSDBRF, _RDSDBRFe, _RP, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_n, _va], [0, 64 | 0]);
export var RDSDBRecommendationFilter = struct(n0, _RDSDBRF, 0, [_n, _va], [0, 64 | 0]);
export var RecommendationPreferences = struct(n0, _RP, 0, [_cVA], [64 | 0]);
export var CpuVendorArchitectures = 64 | 0;

export var Filters = list(n0, _Fi, 0, () => Filter);
export var RDSDBRecommendationFilters = list(n0, _RDSDBRFe, 0, () => RDSDBRecommendationFilter);
