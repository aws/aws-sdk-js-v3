// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _II, _SDI, _SDIR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SendDiagnosticInterruptRequest = struct(n0, _SDIR, 0, [_II, _DR], [0, 2]);
export var SendDiagnosticInterrupt = op(
  n0,
  _SDI,
  0,
  () => SendDiagnosticInterruptRequest,
  () => Unit
);
