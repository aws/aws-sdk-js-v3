// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GDV, _GDVO, _h, _VA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDefaultViewOutput = struct(n0, _GDVO, 0, [_VA], [0]);
export var GetDefaultView = op(
  n0,
  _GDV,
  {
    [_h]: ["POST", "/GetDefaultView", 200],
  },
  () => Unit,
  () => GetDefaultViewOutput
);
