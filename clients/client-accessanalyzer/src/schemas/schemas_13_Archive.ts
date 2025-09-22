// smithy-typescript generated code
import { map, struct } from "@smithy/core/schema";

import { _C, _cont, _eq, _exi, _FCM, _ne, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Criterion = struct(n0, _C, 0, [_eq, _ne, _cont, _exi], [64 | 0, 64 | 0, 64 | 0, 2]);
export var ValueList = 64 | 0;

export var FilterCriteriaMap = map(n0, _FCM, 0, 0, () => Criterion);
