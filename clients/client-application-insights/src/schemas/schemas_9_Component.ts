// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DC, _DCR, _DCRe, _RGN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteComponentRequest = struct(n0, _DCR, 0, [_RGN, _CN], [0, 0]);
export var DeleteComponentResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteComponent = op(
  n0,
  _DC,
  0,
  () => DeleteComponentRequest,
  () => DeleteComponentResponse
);
