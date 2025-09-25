// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_N], [[0, 1]]);
export var DeleteDatasetResponse = struct(n0, _DDRe, 0, [_N], [0]);
export var DeleteDataset = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/datasets/{Name}", 200],
  },
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);
