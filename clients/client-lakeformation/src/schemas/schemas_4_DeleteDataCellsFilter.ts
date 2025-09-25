// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDCF, _DDCFR, _DDCFRe, _DN, _h, _N, _TCI, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataCellsFilterRequest = struct(n0, _DDCFR, 0, [_TCI, _DN, _TN, _N], [0, 0, 0, 0]);
export var DeleteDataCellsFilterResponse = struct(n0, _DDCFRe, 0, [], []);
export var DeleteDataCellsFilter = op(
  n0,
  _DDCF,
  {
    [_h]: ["POST", "/DeleteDataCellsFilter", 200],
  },
  () => DeleteDataCellsFilterRequest,
  () => DeleteDataCellsFilterResponse
);
