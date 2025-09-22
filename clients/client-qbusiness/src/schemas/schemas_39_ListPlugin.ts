// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Ac, _aI, _AS, _d, _dN, _iE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActionSummary = struct(n0, _AS, 0, [_aI, _dN, _iE, _d], [0, 0, 0, 0]);
export var Actions = list(n0, _Ac, 0, () => ActionSummary);
