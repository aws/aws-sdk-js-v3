// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _EP, _EPL, _n, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentParameter = struct(n0, _EP, 0, [_n, _v], [0, 0]);
export var EnvironmentParametersList = list(n0, _EPL, 0, () => EnvironmentParameter);
