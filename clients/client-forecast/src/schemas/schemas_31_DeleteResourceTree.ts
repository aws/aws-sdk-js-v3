// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRT, _DRTR, _RA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceTreeRequest = struct(n0, _DRTR, 0, [_RA], [0]);
export var DeleteResourceTree = op(
  n0,
  _DRT,
  2,
  () => DeleteResourceTreeRequest,
  () => Unit
);
