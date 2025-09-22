// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Fi, _SCor, _SCort, _SOo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SortCriterion = struct(n0, _SCort, 0, [_Fi, _SOo], [0, 0]);
export var SortCriteria = list(n0, _SCor, 0, () => SortCriterion);
