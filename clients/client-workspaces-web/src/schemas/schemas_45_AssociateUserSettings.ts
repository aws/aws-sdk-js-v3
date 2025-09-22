// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AUS, _AUSR, _AUSRs, _h, _hQ, _pA, _uSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateUserSettingsRequest = struct(
  n0,
  _AUSR,
  0,
  [_pA, _uSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uSA,
      },
    ],
  ]
);
export var AssociateUserSettingsResponse = struct(n0, _AUSRs, 0, [_pA, _uSA], [0, 0]);
export var AssociateUserSettings = op(
  n0,
  _AUS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/userSettings", 200],
  },
  () => AssociateUserSettingsRequest,
  () => AssociateUserSettingsResponse
);
