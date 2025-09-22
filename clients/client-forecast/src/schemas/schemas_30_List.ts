// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Co, _Fi, _Fil, _K, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Filter = struct(n0, _Fi, 0, [_K, _V, _Co], [0, 0, 0]);
export var Filters = list(n0, _Fil, 0, () => Filter);
