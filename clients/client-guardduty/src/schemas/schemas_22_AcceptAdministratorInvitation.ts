// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAIc, _AAIR, _AAIRc, _AI, _aI, _DI, _dI, _hL, _ht, _II, _iI, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptAdministratorInvitationRequest = struct(
  n0,
  _AAIR,
  0,
  [_DI, _AI, _II],
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
        [_jN]: _aI,
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
export var AcceptAdministratorInvitationResponse = struct(n0, _AAIRc, 0, [], []);
export var AcceptAdministratorInvitation = op(
  n0,
  _AAIc,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/administrator", 200],
  },
  () => AcceptAdministratorInvitationRequest,
  () => AcceptAdministratorInvitationResponse
);
