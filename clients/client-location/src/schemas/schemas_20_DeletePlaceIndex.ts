// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPI, _DPIR, _DPIRe, _en, _h, _IN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePlaceIndexRequest = struct(n0, _DPIR, 0, [_IN], [[0, 1]]);
export var DeletePlaceIndexResponse = struct(n0, _DPIRe, 0, [], []);
export var DeletePlaceIndex = op(
  n0,
  _DPI,
  {
    [_h]: ["DELETE", "/places/v0/indexes/{IndexName}", 200],
    [_en]: ["cp.places."],
  },
  () => DeletePlaceIndexRequest,
  () => DeletePlaceIndexResponse
);
