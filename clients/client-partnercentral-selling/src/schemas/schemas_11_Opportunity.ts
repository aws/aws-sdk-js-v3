// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _h, _I, _IT, _SORu, _SOu, _V, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SubmitOpportunityRequest = struct(n0, _SORu, 0, [_C, _I, _IT, _V], [0, 0, 0, 0]);
export var SubmitOpportunity = op(
  n0,
  _SOu,
  {
    [_h]: ["POST", "/SubmitOpportunity", 200],
  },
  () => SubmitOpportunityRequest,
  () => Unit
);
