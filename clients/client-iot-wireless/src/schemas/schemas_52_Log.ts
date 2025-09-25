// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _RIe, _RRLL, _RRLLR, _RRLLRe, _RT, _rT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetResourceLogLevelRequest = struct(
  n0,
  _RRLLR,
  0,
  [_RIe, _RT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var ResetResourceLogLevelResponse = struct(n0, _RRLLRe, 0, [], []);
export var ResetResourceLogLevel = op(
  n0,
  _RRLL,
  {
    [_h]: ["DELETE", "/log-levels/{ResourceIdentifier}", 204],
  },
  () => ResetResourceLogLevelRequest,
  () => ResetResourceLogLevelResponse
);
