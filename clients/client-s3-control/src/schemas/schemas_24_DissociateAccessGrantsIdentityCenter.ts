// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAGIC, _DAGICR, _h, _hCR, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DissociateAccessGrantsIdentityCenterRequest = struct(
  n0,
  _DAGICR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DissociateAccessGrantsIdentityCenter = op(
  n0,
  _DAGIC,
  {
    [_h]: ["DELETE", "/v20180820/accessgrantsinstance/identitycenter", 200],
    [_hCR]: 1,
  },
  () => DissociateAccessGrantsIdentityCenterRequest,
  () => Unit
);
