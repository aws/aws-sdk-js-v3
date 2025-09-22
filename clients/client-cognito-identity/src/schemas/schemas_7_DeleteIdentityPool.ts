// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIP, _DIPI, _IPI, n0 } from "./schemas_0";
import { Unit } from "./schemas_6_IdentityPoolRoles";

/* eslint no-var: 0 */

export var DeleteIdentityPoolInput = struct(n0, _DIPI, 0, [_IPI], [0]);
export var DeleteIdentityPool = op(
  n0,
  _DIP,
  0,
  () => DeleteIdentityPoolInput,
  () => Unit
);
