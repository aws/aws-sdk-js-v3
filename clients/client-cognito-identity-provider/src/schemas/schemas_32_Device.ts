// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AGD,
  _AGDR,
  _AGDRd,
  _ATc,
  _D,
  _DA,
  _DCD,
  _DK,
  _DLAD,
  _DLMD,
  _DT,
  _GD,
  _GDR,
  _GDRe,
  _U,
  _UPI,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";
import { AttributeListType } from "./schemas_26_User";

/* eslint no-var: 0 */

export var AdminGetDeviceRequest = struct(n0, _AGDR, 0, [_DK, _UPI, _U], [0, 0, [() => UsernameType, 0]]);
export var AdminGetDeviceResponse = struct(n0, _AGDRd, 0, [_D], [[() => DeviceType, 0]]);
export var DeviceType = struct(n0, _DT, 0, [_DK, _DA, _DCD, _DLMD, _DLAD], [0, [() => AttributeListType, 0], 4, 4, 4]);
export var GetDeviceRequest = struct(n0, _GDR, 0, [_DK, _ATc], [0, [() => TokenModelType, 0]]);
export var GetDeviceResponse = struct(n0, _GDRe, 0, [_D], [[() => DeviceType, 0]]);
export var AdminGetDevice = op(
  n0,
  _AGD,
  0,
  () => AdminGetDeviceRequest,
  () => AdminGetDeviceResponse
);
export var GetDevice = op(
  n0,
  _GD,
  0,
  () => GetDeviceRequest,
  () => GetDeviceResponse
);
