// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _lL, _LOP, _lOP, _rA, _SLO, _SLOR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var LoggingOptionsPayload = struct(n0, _LOP, 0, [_rA, _lL], [0, 0]);
export var SetLoggingOptionsRequest = struct(n0, _SLOR, 0, [_lOP], [[() => LoggingOptionsPayload, 16]]);
export var SetLoggingOptions = op(
  n0,
  _SLO,
  {
    [_h]: ["POST", "/loggingOptions", 200],
  },
  () => SetLoggingOptionsRequest,
  () => Unit
);
