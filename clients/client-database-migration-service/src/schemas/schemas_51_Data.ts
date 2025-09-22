// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidOperationFault as __InvalidOperationFault } from "../models/index";
import { _c, _DFAD, _DFADR, _DFADRe, _DIa, _e, _IOF, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetAdvisorDatabasesRequest = struct(n0, _DFADR, 0, [_DIa], [64 | 0]);
export var DeleteFleetAdvisorDatabasesResponse = struct(n0, _DFADRe, 0, [_DIa], [64 | 0]);
export var InvalidOperationFault = error(
  n0,
  _IOF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOperationFault
);
export var DeleteFleetAdvisorDatabases = op(
  n0,
  _DFAD,
  0,
  () => DeleteFleetAdvisorDatabasesRequest,
  () => DeleteFleetAdvisorDatabasesResponse
);
