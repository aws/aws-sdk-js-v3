// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPA, _DPAI, _PAA, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var DeletePlatformApplicationInput = struct(n0, _DPAI, 0, [_PAA], [0]);
export var DeletePlatformApplication = op(
  n0,
  _DPA,
  0,
  () => DeletePlatformApplicationInput,
  () => Unit
);
