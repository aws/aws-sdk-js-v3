// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _MN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelRequest = struct(n0, _DMR, 0, [_MN], [0]);
export var DeleteModel = op(
  n0,
  _DM,
  0,
  () => DeleteModelRequest,
  () => Unit
);
