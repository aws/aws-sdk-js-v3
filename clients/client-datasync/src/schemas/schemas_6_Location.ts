// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LA, _Su, _ULFL, _ULFLR, _ULFLRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLocationFsxLustreRequest = struct(n0, _ULFLR, 0, [_LA, _Su], [0, 0]);
export var UpdateLocationFsxLustreResponse = struct(n0, _ULFLRp, 0, [], []);
export var UpdateLocationFsxLustre = op(
  n0,
  _ULFL,
  0,
  () => UpdateLocationFsxLustreRequest,
  () => UpdateLocationFsxLustreResponse
);
