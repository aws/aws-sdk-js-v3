// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _cT, _dP, _h, _UDP, _UDPI, _UDPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDeletionProtectionInput = struct(n0, _UDPI, 0, [_a, _dP, _cT], [0, 2, [0, 4]]);
export var UpdateDeletionProtectionOutput = struct(n0, _UDPO, 0, [], []);
export var UpdateDeletionProtection = op(
  n0,
  _UDP,
  {
    [_h]: ["POST", "/updateDeletionProtection", 204],
  },
  () => UpdateDeletionProtectionInput,
  () => UpdateDeletionProtectionOutput
);
