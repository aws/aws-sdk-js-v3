// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dN, _EA, _em, _GUD, _GUDR, _GUDRe, _hQ, _ht, _i, _pE, _uIs, _uN, _v, _ve, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = struct(n0, _EA, 0, [_em, _v], [0, 2]);
export var GetUserDetailsRequest = struct(
  n0,
  _GUDR,
  0,
  [_i, _uN],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hQ]: _uN,
      },
    ],
  ]
);
export var GetUserDetailsResponse = struct(n0, _GUDRe, 0, [_uIs, _uN, _dN, _pE, _ve], [0, 0, 0, () => EmailAddress, 0]);
export var GetUserDetails = op(
  n0,
  _GUD,
  {
    [_ht]: ["GET", "/userDetails", 200],
  },
  () => GetUserDetailsRequest,
  () => GetUserDetailsResponse
);
