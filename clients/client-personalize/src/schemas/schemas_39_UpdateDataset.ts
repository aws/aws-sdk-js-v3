// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dA, _sA, _UD, _UDR, _UDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDatasetRequest = struct(n0, _UDR, 0, [_dA, _sA], [0, 0]);
export var UpdateDatasetResponse = struct(n0, _UDRp, 0, [_dA], [0]);
export var UpdateDataset = op(
  n0,
  _UD,
  2,
  () => UpdateDatasetRequest,
  () => UpdateDatasetResponse
);
