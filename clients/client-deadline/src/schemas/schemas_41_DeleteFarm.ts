// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DFRe, _end, _fI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFarmRequest = struct(n0, _DFR, 0, [_fI], [[0, 1]]);
export var DeleteFarmResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteFarm = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}", 200],
    [_end]: ["management."],
  },
  () => DeleteFarmRequest,
  () => DeleteFarmResponse
);
