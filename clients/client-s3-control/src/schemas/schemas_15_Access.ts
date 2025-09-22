// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAGIC, _AAGICR, _AI, _h, _hCR, _hH, _hL, _ICA, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateAccessGrantsIdentityCenterRequest = struct(
  n0,
  _AAGICR,
  0,
  [_AI, _ICA],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    0,
  ]
);
export var AssociateAccessGrantsIdentityCenter = op(
  n0,
  _AAGIC,
  {
    [_h]: ["POST", "/v20180820/accessgrantsinstance/identitycenter", 200],
    [_hCR]: 1,
  },
  () => AssociateAccessGrantsIdentityCenterRequest,
  () => Unit
);
