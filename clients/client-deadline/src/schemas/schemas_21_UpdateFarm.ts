// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _de, _dN, _end, _fI, _h, _UF, _UFR, _UFRp, Description, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFarmRequest = struct(n0, _UFR, 0, [_fI, _dN, _de], [[0, 1], 0, [() => Description, 0]]);
export var UpdateFarmResponse = struct(n0, _UFRp, 0, [], []);
export var UpdateFarm = op(
  n0,
  _UF,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}", 200],
    [_end]: ["management."],
  },
  () => UpdateFarmRequest,
  () => UpdateFarmResponse
);
