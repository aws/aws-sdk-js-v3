// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ABS, _ABSR, _ABSRs, _bSA, _h, _hQ, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateBrowserSettingsRequest = struct(
  n0,
  _ABSR,
  0,
  [_pA, _bSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _bSA,
      },
    ],
  ]
);
export var AssociateBrowserSettingsResponse = struct(n0, _ABSRs, 0, [_pA, _bSA], [0, 0]);
export var AssociateBrowserSettings = op(
  n0,
  _ABS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/browserSettings", 200],
  },
  () => AssociateBrowserSettingsRequest,
  () => AssociateBrowserSettingsResponse
);
