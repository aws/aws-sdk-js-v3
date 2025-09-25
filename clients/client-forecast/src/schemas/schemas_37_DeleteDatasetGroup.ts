// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDG, _DDGR, _DGA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetGroupRequest = struct(n0, _DDGR, 0, [_DGA], [0]);
export var DeleteDatasetGroup = op(
  n0,
  _DDG,
  2,
  () => DeleteDatasetGroupRequest,
  () => Unit
);
