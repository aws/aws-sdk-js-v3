// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _aIcc, _DI, _dI, _hL, _ht, _jN, _SMMRto, _SMMRtop, _SMMt, _UAn, _uAn, n0 } from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var StopMonitoringMembersRequest = struct(
  n0,
  _SMMRto,
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
export var StopMonitoringMembersResponse = struct(
  n0,
  _SMMRtop,
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
export var StopMonitoringMembers = op(
  n0,
  _SMMt,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/stop", 200],
  },
  () => StopMonitoringMembersRequest,
  () => StopMonitoringMembersResponse
);
