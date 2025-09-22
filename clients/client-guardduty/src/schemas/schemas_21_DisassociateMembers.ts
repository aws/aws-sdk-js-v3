// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DI, _dI, _DMi, _DMRi, _DMRis, _hL, _ht, _jN, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var DisassociateMembersRequest = struct(
  n0,
  _DMRi,
  0,
  [_DI, _AIcc],
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
  ]
);
export var DisassociateMembersResponse = struct(
  n0,
  _DMRis,
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
export var DisassociateMembers = op(
  n0,
  _DMi,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/disassociate", 200],
  },
  () => DisassociateMembersRequest,
  () => DisassociateMembersResponse
);
