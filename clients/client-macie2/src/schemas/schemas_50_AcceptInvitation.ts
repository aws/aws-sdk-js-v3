// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAI, _AI, _AIR, _AIRc, _h, _iI, _jN, _mA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInvitationRequest = struct(
  n0,
  _AIR,
  0,
  [_aAI, _iI, _mA],
  [
    [
      0,
      {
        [_jN]: _aAI,
      },
    ],
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _mA,
      },
    ],
  ]
);
export var AcceptInvitationResponse = struct(n0, _AIRc, 0, [], []);
export var AcceptInvitation = op(
  n0,
  _AI,
  {
    [_h]: ["POST", "/invitations/accept", 200],
  },
  () => AcceptInvitationRequest,
  () => AcceptInvitationResponse
);
