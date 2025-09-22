// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DI, _dI, _DM, _DMR, _DMRe, _hL, _ht, _jN, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var DeleteMembersRequest = struct(
  n0,
  _DMR,
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
export var DeleteMembersResponse = struct(
  n0,
  _DMRe,
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
export var DeleteMembers = op(
  n0,
  _DM,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/delete", 200],
  },
  () => DeleteMembersRequest,
  () => DeleteMembersResponse
);
