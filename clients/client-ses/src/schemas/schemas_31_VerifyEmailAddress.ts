// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EA, _VEAe, _VEAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var VerifyEmailAddressRequest = struct(n0, _VEAR, 0, [_EA], [0]);
export var VerifyEmailAddress = op(
  n0,
  _VEAe,
  0,
  () => VerifyEmailAddressRequest,
  () => Unit
);
