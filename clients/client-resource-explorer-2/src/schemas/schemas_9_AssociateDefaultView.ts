// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADV, _ADVI, _ADVO, _h, _VA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDefaultViewInput = struct(n0, _ADVI, 0, [_VA], [0]);
export var AssociateDefaultViewOutput = struct(n0, _ADVO, 0, [_VA], [0]);
export var AssociateDefaultView = op(
  n0,
  _ADV,
  {
    [_h]: ["POST", "/AssociateDefaultView", 200],
  },
  () => AssociateDefaultViewInput,
  () => AssociateDefaultViewOutput
);
