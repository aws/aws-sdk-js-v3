// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _EBSF, _EBSFi, _n, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EBSFilter = struct(n0, _EBSF, 0, [_n, _va], [0, 64 | 0]);
export var EBSFilters = list(n0, _EBSFi, 0, () => EBSFilter);
