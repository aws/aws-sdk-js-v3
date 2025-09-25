// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _ED, _PEa, _PEar, _PV, ErrorDetail, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PartitionError = struct(n0, _PEa, 0, [_PV, _ED], [64 | 0, () => ErrorDetail]);
export var PartitionErrors = list(n0, _PEar, 0, () => PartitionError);
