// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_DN], [0]);
export var DeleteDataset = op(
  n0,
  _DD,
  0,
  () => DeleteDatasetRequest,
  () => Unit
);
