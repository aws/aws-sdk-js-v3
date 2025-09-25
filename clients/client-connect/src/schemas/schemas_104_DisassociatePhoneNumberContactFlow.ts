// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPNCF, _DPNCFR, _h, _hQ, _II, _iI, _PNI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociatePhoneNumberContactFlowRequest = struct(
  n0,
  _DPNCFR,
  0,
  [_PNI, _II],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iI,
      },
    ],
  ]
);
export var DisassociatePhoneNumberContactFlow = op(
  n0,
  _DPNCF,
  {
    [_h]: ["DELETE", "/phone-number/{PhoneNumberId}/contact-flow", 200],
  },
  () => DisassociatePhoneNumberContactFlowRequest,
  () => Unit
);
