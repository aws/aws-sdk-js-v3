// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _PAr, _PV, _WP, _WPo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var WorkloadProfile = struct(n0, _WP, 0, [_PAr, _PV], [0, 0]);
export var WorkloadProfiles = list(n0, _WPo, 0, () => WorkloadProfile);
export var RiskCounts = 128 | 1;
