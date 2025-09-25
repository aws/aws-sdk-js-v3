// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GWL, _GWLR, _GWLRe, _h, _lT, _sB, _sPa, _sU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetWorkingLocationRequest = struct(n0, _GWLR, 0, [_lT], [0]);
export var GetWorkingLocationResponse = struct(n0, _GWLRe, 0, [_sU, _sPa, _sB], [0, 0, 0]);
export var GetWorkingLocation = op(
  n0,
  _GWL,
  {
    [_h]: ["POST", "/workingLocationV1", 200],
  },
  () => GetWorkingLocationRequest,
  () => GetWorkingLocationResponse
);
