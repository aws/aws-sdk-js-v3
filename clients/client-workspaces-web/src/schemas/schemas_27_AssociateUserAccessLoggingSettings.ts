// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AUALS, _AUALSR, _AUALSRs, _h, _hQ, _pA, _uALSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateUserAccessLoggingSettingsRequest = struct(
  n0,
  _AUALSR,
  0,
  [_pA, _uALSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uALSA,
      },
    ],
  ]
);
export var AssociateUserAccessLoggingSettingsResponse = struct(n0, _AUALSRs, 0, [_pA, _uALSA], [0, 0]);
export var AssociateUserAccessLoggingSettings = op(
  n0,
  _AUALS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/userAccessLoggingSettings", 200],
  },
  () => AssociateUserAccessLoggingSettingsRequest,
  () => AssociateUserAccessLoggingSettingsResponse
);
