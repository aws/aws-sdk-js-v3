// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATc, _DK, _FDo, _FDR, n0, TokenModelType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ForgetDeviceRequest = struct(n0, _FDR, 0, [_ATc, _DK], [[() => TokenModelType, 0], 0]);
export var ForgetDevice = op(
  n0,
  _FDo,
  0,
  () => ForgetDeviceRequest,
  () => Unit
);
