// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DL, _DLR, _DLRe, _LA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLocationRequest = struct(n0, _DLR, 0, [_LA], [0]);
export var DeleteLocationResponse = struct(n0, _DLRe, 0, [], []);
export var DeleteLocation = op(
  n0,
  _DL,
  0,
  () => DeleteLocationRequest,
  () => DeleteLocationResponse
);
