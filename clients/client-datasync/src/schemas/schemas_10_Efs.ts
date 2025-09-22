// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APA, _FSARA, _ITE, _LA, _Su, _ULE, _ULER, _ULERp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLocationEfsRequest = struct(n0, _ULER, 0, [_LA, _Su, _APA, _FSARA, _ITE], [0, 0, 0, 0, 0]);
export var UpdateLocationEfsResponse = struct(n0, _ULERp, 0, [], []);
export var UpdateLocationEfs = op(
  n0,
  _ULE,
  0,
  () => UpdateLocationEfsRequest,
  () => UpdateLocationEfsResponse
);
