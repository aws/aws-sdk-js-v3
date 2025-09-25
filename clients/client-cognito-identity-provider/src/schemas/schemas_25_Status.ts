// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ATc,
  _AUDS,
  _AUDSR,
  _AUDSRd,
  _DK,
  _DRS,
  _U,
  _UDSp,
  _UDSR,
  _UDSRp,
  _UPI,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdminUpdateDeviceStatusRequest = struct(
  n0,
  _AUDSR,
  0,
  [_UPI, _U, _DK, _DRS],
  [0, [() => UsernameType, 0], 0, 0]
);
export var AdminUpdateDeviceStatusResponse = struct(n0, _AUDSRd, 0, [], []);
export var UpdateDeviceStatusRequest = struct(n0, _UDSR, 0, [_ATc, _DK, _DRS], [[() => TokenModelType, 0], 0, 0]);
export var UpdateDeviceStatusResponse = struct(n0, _UDSRp, 0, [], []);
export var AdminUpdateDeviceStatus = op(
  n0,
  _AUDS,
  0,
  () => AdminUpdateDeviceStatusRequest,
  () => AdminUpdateDeviceStatusResponse
);
export var UpdateDeviceStatus = op(
  n0,
  _UDSp,
  0,
  () => UpdateDeviceStatusRequest,
  () => UpdateDeviceStatusResponse
);
