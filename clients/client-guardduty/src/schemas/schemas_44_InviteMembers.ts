// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIcc,
  _aIcc,
  _DEN,
  _dEN,
  _DI,
  _dI,
  _hL,
  _ht,
  _IM,
  _IMR,
  _IMRn,
  _jN,
  _M,
  _m,
  _UAn,
  _uAn,
  n0,
} from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var InviteMembersRequest = struct(
  n0,
  _IMR,
  0,
  [_DI, _AIcc, _DEN, _M],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
    [
      2,
      {
        [_jN]: _dEN,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var InviteMembersResponse = struct(
  n0,
  _IMRn,
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
export var InviteMembers = op(
  n0,
  _IM,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/invite", 200],
  },
  () => InviteMembersRequest,
  () => InviteMembersResponse
);
