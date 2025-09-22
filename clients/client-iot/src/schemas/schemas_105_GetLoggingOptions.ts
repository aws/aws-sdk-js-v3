// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GLO, _GLOR, _GLORe, _h, _lL, _rA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoggingOptionsRequest = struct(n0, _GLOR, 0, [], []);
export var GetLoggingOptionsResponse = struct(n0, _GLORe, 0, [_rA, _lL], [0, 0]);
export var GetLoggingOptions = op(
  n0,
  _GLO,
  {
    [_h]: ["GET", "/loggingOptions", 200],
  },
  () => GetLoggingOptionsRequest,
  () => GetLoggingOptionsResponse
);
