// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _D, _De, _L, _T, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Destination = struct(n0, _De, 0, [_T, _L], [0, 0]);
export var Destinations = list(n0, _D, 0, () => Destination);
