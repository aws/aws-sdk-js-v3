// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CC, _CCR, _CCRo, _cI, _cS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmConnectionRequest = struct(n0, _CCR, 0, [_cI], [0]);
export var ConfirmConnectionResponse = struct(n0, _CCRo, 0, [_cS], [0]);
export var ConfirmConnection = op(
  n0,
  _CC,
  0,
  () => ConfirmConnectionRequest,
  () => ConfirmConnectionResponse
);
