// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AFD, _AFDR, _DK, _U, _UPI, n0, Unit, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminForgetDeviceRequest = struct(n0, _AFDR, 0, [_UPI, _U, _DK], [0, [() => UsernameType, 0], 0]);
export var AdminForgetDevice = op(
  n0,
  _AFD,
  0,
  () => AdminForgetDeviceRequest,
  () => Unit
);
