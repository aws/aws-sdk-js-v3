// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMe, _DMI, _MNo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelInput = struct(n0, _DMI, 0, [_MNo], [0]);
export var DeleteModel = op(
  n0,
  _DMe,
  0,
  () => DeleteModelInput,
  () => Unit
);
