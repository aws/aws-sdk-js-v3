// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _BF, _ETx, _FC, _FD, _FR, _PF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PartialFailure = struct(n0, _PF, 0, [_FR, _ETx, _FC, _FD], [0, 0, 0, 0]);
export var BatchFailures = list(n0, _BF, 0, () => PartialFailure);
