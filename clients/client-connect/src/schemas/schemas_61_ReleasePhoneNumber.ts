// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _cT, _h, _hQ, _iT, _PNI, _RPN, _RPNR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ReleasePhoneNumberRequest = struct(
  n0,
  _RPNR,
  0,
  [_PNI, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var ReleasePhoneNumber = op(
  n0,
  _RPN,
  {
    [_h]: ["DELETE", "/phone-number/{PhoneNumberId}", 200],
  },
  () => ReleasePhoneNumberRequest,
  () => Unit
);
