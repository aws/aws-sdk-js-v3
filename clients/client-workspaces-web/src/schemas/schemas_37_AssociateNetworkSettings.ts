// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ANS, _ANSR, _ANSRs, _h, _hQ, _nSA, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateNetworkSettingsRequest = struct(
  n0,
  _ANSR,
  0,
  [_pA, _nSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nSA,
      },
    ],
  ]
);
export var AssociateNetworkSettingsResponse = struct(n0, _ANSRs, 0, [_pA, _nSA], [0, 0]);
export var AssociateNetworkSettings = op(
  n0,
  _ANS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/networkSettings", 200],
  },
  () => AssociateNetworkSettingsRequest,
  () => AssociateNetworkSettingsResponse
);
