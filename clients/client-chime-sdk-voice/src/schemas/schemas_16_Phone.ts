// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _CN, _CNUT, _GPNS, _GPNSR, _h, _UPNS, _UPNSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CallingName = sim(n0, _CN, 0, 8);
export var GetPhoneNumberSettingsResponse = struct(n0, _GPNSR, 0, [_CN, _CNUT], [[() => CallingName, 0], 5]);
export var UpdatePhoneNumberSettingsRequest = struct(n0, _UPNSR, 0, [_CN], [[() => CallingName, 0]]);
export var GetPhoneNumberSettings = op(
  n0,
  _GPNS,
  {
    [_h]: ["GET", "/settings/phone-number", 200],
  },
  () => Unit,
  () => GetPhoneNumberSettingsResponse
);
export var UpdatePhoneNumberSettings = op(
  n0,
  _UPNS,
  {
    [_h]: ["PUT", "/settings/phone-number", 204],
  },
  () => UpdatePhoneNumberSettingsRequest,
  () => Unit
);
