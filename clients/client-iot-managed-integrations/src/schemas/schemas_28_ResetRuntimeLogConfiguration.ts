// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _MTI, _RRLC, _RRLCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetRuntimeLogConfigurationRequest = struct(n0, _RRLCR, 0, [_MTI], [[0, 1]]);
export var ResetRuntimeLogConfiguration = op(
  n0,
  _RRLC,
  {
    [_h]: ["DELETE", "/runtime-log-configurations/{ManagedThingId}", 200],
  },
  () => ResetRuntimeLogConfigurationRequest,
  () => Unit
);
