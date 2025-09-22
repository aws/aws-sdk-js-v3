// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMI, _DMIR, _DMIRe, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterManagedInstanceRequest = struct(n0, _DMIR, 0, [_II], [0]);
export var DeregisterManagedInstanceResult = struct(n0, _DMIRe, 0, [], []);
export var DeregisterManagedInstance = op(
  n0,
  _DMI,
  0,
  () => DeregisterManagedInstanceRequest,
  () => DeregisterManagedInstanceResult
);
