// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _GARN, _P, _SMBGP, _SSMBGP, _SSMBGPI, _SSMBGPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SMBGuestPassword = sim(n0, _SMBGP, 0, 8);
export var SetSMBGuestPasswordInput = struct(n0, _SSMBGPI, 0, [_GARN, _P], [0, [() => SMBGuestPassword, 0]]);
export var SetSMBGuestPasswordOutput = struct(n0, _SSMBGPO, 0, [_GARN], [0]);
export var SetSMBGuestPassword = op(
  n0,
  _SSMBGP,
  0,
  () => SetSMBGuestPasswordInput,
  () => SetSMBGuestPasswordOutput
);
