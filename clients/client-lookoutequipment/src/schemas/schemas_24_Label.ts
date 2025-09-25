// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DL, _DLR, _LGN, _LI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLabelRequest = struct(n0, _DLR, 0, [_LGN, _LI], [0, 0]);
export var DeleteLabel = op(
  n0,
  _DL,
  0,
  () => DeleteLabelRequest,
  () => Unit
);
