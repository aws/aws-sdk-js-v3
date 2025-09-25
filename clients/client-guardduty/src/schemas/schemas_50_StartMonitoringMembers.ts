// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DI, _dI, _hL, _ht, _jN, _SMM, _SMMR, _SMMRt, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var StartMonitoringMembersRequest = struct(
  n0,
  _SMMR,
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
export var StartMonitoringMembersResponse = struct(
  n0,
  _SMMRt,
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
export var StartMonitoringMembers = op(
  n0,
  _SMM,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/start", 200],
  },
  () => StartMonitoringMembersRequest,
  () => StartMonitoringMembersResponse
);
