// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _a, _BE, _BEa, _cod, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchError = struct(n0, _BE, 0, [_a, _cod, _m], [0, 0, 0]);
export var BatchErrors = list(n0, _BEa, 0, () => BatchError);
