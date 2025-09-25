// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DIel, _DIRel, _DIRele, _ht, _jN, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var DeleteInvitationsRequest = struct(
  n0,
  _DIRel,
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
export var DeleteInvitationsResponse = struct(
  n0,
  _DIRele,
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
export var DeleteInvitations = op(
  n0,
  _DIel,
  {
    [_ht]: ["POST", "/invitation/delete", 200],
  },
  () => DeleteInvitationsRequest,
  () => DeleteInvitationsResponse
);
