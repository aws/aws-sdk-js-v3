// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDPS, _DDPSR, _DDPSRe, _dPSA, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataProtectionSettingsRequest = struct(n0, _DDPSR, 0, [_dPSA], [[0, 1]]);
export var DeleteDataProtectionSettingsResponse = struct(n0, _DDPSRe, 0, [], []);
export var DeleteDataProtectionSettings = op(
  n0,
  _DDPS,
  {
    [_h]: ["DELETE", "/dataProtectionSettings/{dataProtectionSettingsArn+}", 200],
  },
  () => DeleteDataProtectionSettingsRequest,
  () => DeleteDataProtectionSettingsResponse
);
