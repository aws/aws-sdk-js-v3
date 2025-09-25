// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAa, _DDe, _DDR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_DAa], [0]);
export var DeleteDataset = op(
  n0,
  _DDe,
  2,
  () => DeleteDatasetRequest,
  () => Unit
);
