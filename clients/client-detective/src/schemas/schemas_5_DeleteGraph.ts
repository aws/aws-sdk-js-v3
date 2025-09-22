// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _GA, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGraphRequest = struct(n0, _DGR, 0, [_GA], [0]);
export var DeleteGraph = op(
  n0,
  _DG,
  {
    [_h]: ["POST", "/graph/removal", 200],
  },
  () => DeleteGraphRequest,
  () => Unit
);
