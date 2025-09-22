// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GETV, _SSTSP, _SSTSPR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SetSecurityTokenServicePreferencesRequest = struct(n0, _SSTSPR, 0, [_GETV], [0]);
export var SetSecurityTokenServicePreferences = op(
  n0,
  _SSTSP,
  0,
  () => SetSecurityTokenServicePreferencesRequest,
  () => Unit
);
