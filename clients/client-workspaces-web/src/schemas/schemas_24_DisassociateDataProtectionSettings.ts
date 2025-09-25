// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDPSi, _DDPSRi, _DDPSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDataProtectionSettingsRequest = struct(n0, _DDPSRi, 0, [_pA], [[0, 1]]);
export var DisassociateDataProtectionSettingsResponse = struct(n0, _DDPSRis, 0, [], []);
export var DisassociateDataProtectionSettings = op(
  n0,
  _DDPSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/dataProtectionSettings", 200],
  },
  () => DisassociateDataProtectionSettingsRequest,
  () => DisassociateDataProtectionSettingsResponse
);
