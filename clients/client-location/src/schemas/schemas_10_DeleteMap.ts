// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _DMRe, _en, _h, _MN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMapRequest = struct(n0, _DMR, 0, [_MN], [[0, 1]]);
export var DeleteMapResponse = struct(n0, _DMRe, 0, [], []);
export var DeleteMap = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/maps/v0/maps/{MapName}", 200],
    [_en]: ["cp.maps."],
  },
  () => DeleteMapRequest,
  () => DeleteMapResponse
);
