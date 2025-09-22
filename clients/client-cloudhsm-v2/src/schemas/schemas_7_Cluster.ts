// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DH, _DHR, _DHRe, _EI, _EIn, _HI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHsmRequest = struct(n0, _DHR, 0, [_CI, _HI, _EI, _EIn], [0, 0, 0, 0]);
export var DeleteHsmResponse = struct(n0, _DHRe, 0, [_HI], [0]);
export var DeleteHsm = op(
  n0,
  _DH,
  0,
  () => DeleteHsmRequest,
  () => DeleteHsmResponse
);
