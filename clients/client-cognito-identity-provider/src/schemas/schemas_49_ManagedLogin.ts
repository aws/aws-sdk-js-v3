// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMLB, _DMLBR, _MLBI, _UPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteManagedLoginBrandingRequest = struct(n0, _DMLBR, 0, [_MLBI, _UPI], [0, 0]);
export var DeleteManagedLoginBranding = op(
  n0,
  _DMLB,
  0,
  () => DeleteManagedLoginBrandingRequest,
  () => Unit
);
