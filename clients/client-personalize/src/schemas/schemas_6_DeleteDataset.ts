// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dA, _DD, _DDR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_dA], [0]);
export var DeleteDataset = op(
  n0,
  _DD,
  2,
  () => DeleteDatasetRequest,
  () => Unit
);
