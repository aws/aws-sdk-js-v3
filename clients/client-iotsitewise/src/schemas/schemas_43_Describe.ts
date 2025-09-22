// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _AD, _ADc, _aDI, _aN, _aT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActionDefinition = struct(n0, _AD, 0, [_aDI, _aN, _aT], [0, 0, 0]);
export var ActionDefinitions = list(n0, _ADc, 0, () => ActionDefinition);
