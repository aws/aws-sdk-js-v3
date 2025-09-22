// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DFRe, _f, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetRequest = struct(n0, _DFR, 0, [_f], [0]);
export var DeleteFleetResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteFleet = op(
  n0,
  _DF,
  {
    [_h]: ["POST", "/deleteFleet", 200],
  },
  () => DeleteFleetRequest,
  () => DeleteFleetResponse
);
