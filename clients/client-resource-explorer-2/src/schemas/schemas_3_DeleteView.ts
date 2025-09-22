// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DV, _DVI, _DVO, _h, _VA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteViewInput = struct(n0, _DVI, 0, [_VA], [0]);
export var DeleteViewOutput = struct(n0, _DVO, 0, [_VA], [0]);
export var DeleteView = op(
  n0,
  _DV,
  {
    [_h]: ["POST", "/DeleteView", 200],
  },
  () => DeleteViewInput,
  () => DeleteViewOutput
);
