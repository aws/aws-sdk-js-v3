// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ap, _aV, _DSA, _DSAR, _DSARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSimulationApplicationRequest = struct(n0, _DSAR, 0, [_ap, _aV], [0, 0]);
export var DeleteSimulationApplicationResponse = struct(n0, _DSARe, 0, [], []);
export var DeleteSimulationApplication = op(
  n0,
  _DSA,
  {
    [_h]: ["POST", "/deleteSimulationApplication", 200],
  },
  () => DeleteSimulationApplicationRequest,
  () => DeleteSimulationApplicationResponse
);
