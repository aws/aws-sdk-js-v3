// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DIec, _DIR, _DIRe, _ht, _jN, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var DeclineInvitationsRequest = struct(
  n0,
  _DIR,
  0,
  [_AIcc],
  [
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
  ]
);
export var DeclineInvitationsResponse = struct(
  n0,
  _DIRe,
  0,
  [_UAn],
  [
    [
      () => UnprocessedAccounts,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var DeclineInvitations = op(
  n0,
  _DIec,
  {
    [_ht]: ["POST", "/invitation/decline", 200],
  },
  () => DeclineInvitationsRequest,
  () => DeclineInvitationsResponse
);
