// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAel, _DAR, _EI, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessRequest = struct(n0, _DAR, 0, [_SI, _EI], [0, 0]);
export var DeleteAccess = op(
  n0,
  _DAel,
  0,
  () => DeleteAccessRequest,
  () => Unit
);
