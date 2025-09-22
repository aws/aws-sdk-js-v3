// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _CPIP, _CPIPo, _PN, _PV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConformancePackInputParameter = struct(n0, _CPIPo, 0, [_PN, _PV], [0, 0]);
export var ConformancePackInputParameters = list(n0, _CPIP, 0, () => ConformancePackInputParameter);
