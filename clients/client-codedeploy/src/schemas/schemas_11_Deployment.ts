// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _K, _T, _TFa, _TFL, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagFilter = struct(n0, _TFa, 0, [_K, _V, _T], [0, 0, 0]);
export var TagFilterList = list(n0, _TFL, 0, () => TagFilter);
