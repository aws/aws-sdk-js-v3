// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _GD, _GDr, _K, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GroupDefinition = struct(n0, _GDr, 0, [_Ty, _K], [0, 0]);
export var GroupDefinitions = list(n0, _GD, 0, () => GroupDefinition);
