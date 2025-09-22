// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSBU, _GSBUR, _h, _sBU, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSignedBluinsightsUrlResponse = struct(n0, _GSBUR, 0, [_sBU], [0]);
export var GetSignedBluinsightsUrl = op(
  n0,
  _GSBU,
  {
    [_h]: ["GET", "/signed-bi-url", 200],
  },
  () => Unit,
  () => GetSignedBluinsightsUrlResponse
);
