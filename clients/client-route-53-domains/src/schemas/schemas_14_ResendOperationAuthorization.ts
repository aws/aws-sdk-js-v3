// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _OI, _ROA, _ROAR, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Domain";

/* eslint no-var: 0 */

export var ResendOperationAuthorizationRequest = struct(n0, _ROAR, 0, [_OI], [0]);
export var ResendOperationAuthorization = op(
  n0,
  _ROA,
  0,
  () => ResendOperationAuthorizationRequest,
  () => Unit
);
