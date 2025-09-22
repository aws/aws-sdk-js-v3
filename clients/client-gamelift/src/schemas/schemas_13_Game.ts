// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _GPa, _GPL, _K, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GameProperty = struct(n0, _GPa, 0, [_K, _Va], [0, 0]);
export var GamePropertyList = list(n0, _GPL, 0, () => GameProperty);
