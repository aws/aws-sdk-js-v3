// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dAL, _dLL, _h, _rA, _SVLO, _SVLOR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SetV2LoggingOptionsRequest = struct(n0, _SVLOR, 0, [_rA, _dLL, _dAL], [0, 0, 2]);
export var SetV2LoggingOptions = op(
  n0,
  _SVLO,
  {
    [_h]: ["POST", "/v2LoggingOptions", 200],
  },
  () => SetV2LoggingOptionsRequest,
  () => Unit
);
