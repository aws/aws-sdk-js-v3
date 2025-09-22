// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DC, _DCR, _h, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_List";

/* eslint no-var: 0 */

export var DeleteCellRequest = struct(n0, _DCR, 0, [_CN], [[0, 1]]);
export var DeleteCell = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/cells/{CellName}", 204],
  },
  () => DeleteCellRequest,
  () => Unit
);
