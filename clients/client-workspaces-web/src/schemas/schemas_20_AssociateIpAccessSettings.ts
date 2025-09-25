// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIAS, _AIASR, _AIASRs, _h, _hQ, _iASA, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateIpAccessSettingsRequest = struct(
  n0,
  _AIASR,
  0,
  [_pA, _iASA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iASA,
      },
    ],
  ]
);
export var AssociateIpAccessSettingsResponse = struct(n0, _AIASRs, 0, [_pA, _iASA], [0, 0]);
export var AssociateIpAccessSettings = op(
  n0,
  _AIAS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/ipAccessSettings", 200],
  },
  () => AssociateIpAccessSettingsRequest,
  () => AssociateIpAccessSettingsResponse
);
