// smithy-typescript generated code
import { list, sim, struct } from "@smithy/core/schema";

import { _K, _STes, _STLe, _STV, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SessionTagValue = sim(n0, _STV, 0, 8);
export var SessionTag = struct(n0, _STes, 0, [_K, _V], [0, [() => SessionTagValue, 0]]);
export var SessionTagList = list(n0, _STLe, 0, [() => SessionTag, 0]);
