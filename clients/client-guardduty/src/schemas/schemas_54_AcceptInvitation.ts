// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcce, _AIR, _AIRc, _DI, _dI, _hL, _ht, _II, _iI, _jN, _MI, _mI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInvitationRequest = struct(
  n0,
  _AIR,
  0,
  [_DI, _MI, _II],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
  ]
);
export var AcceptInvitationResponse = struct(n0, _AIRc, 0, [], []);
export var AcceptInvitation = op(
  n0,
  _AIcce,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/master", 200],
  },
  () => AcceptInvitationRequest,
  () => AcceptInvitationResponse
);
