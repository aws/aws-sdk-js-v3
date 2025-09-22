// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADPS, _ADPSR, _ADPSRs, _dPSA, _h, _hQ, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDataProtectionSettingsRequest = struct(
  n0,
  _ADPSR,
  0,
  [_pA, _dPSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dPSA,
      },
    ],
  ]
);
export var AssociateDataProtectionSettingsResponse = struct(n0, _ADPSRs, 0, [_pA, _dPSA], [0, 0]);
export var AssociateDataProtectionSettings = op(
  n0,
  _ADPS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/dataProtectionSettings", 200],
  },
  () => AssociateDataProtectionSettingsRequest,
  () => AssociateDataProtectionSettingsResponse
);
