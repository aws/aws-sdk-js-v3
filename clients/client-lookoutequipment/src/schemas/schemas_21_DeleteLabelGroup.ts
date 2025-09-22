// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLG, _DLGR, _LGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLabelGroupRequest = struct(n0, _DLGR, 0, [_LGN], [0]);
export var DeleteLabelGroup = op(
  n0,
  _DLG,
  0,
  () => DeleteLabelGroupRequest,
  () => Unit
);
