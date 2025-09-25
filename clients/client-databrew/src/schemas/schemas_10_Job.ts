// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _JS, _Mo, _RAu, _Si, _VCa, _VCL, _VMa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var JobSample = struct(n0, _JS, 0, [_Mo, _Si], [0, 1]);
export var ValidationConfiguration = struct(n0, _VCa, 0, [_RAu, _VMa], [0, 0]);
export var ValidationConfigurationList = list(n0, _VCL, 0, () => ValidationConfiguration);
