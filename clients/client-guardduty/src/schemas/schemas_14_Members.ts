// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AD,
  _ADc,
  _aDc,
  _AI,
  _aI,
  _AIc,
  _aIc,
  _AIcc,
  _aIcc,
  _CM,
  _CMR,
  _CMRr,
  _DI,
  _dI,
  _E,
  _em,
  _GM,
  _GMR,
  _GMRe,
  _hL,
  _hQ,
  _ht,
  _IA,
  _iA,
  _jN,
  _LM,
  _LMR,
  _LMRi,
  _Me,
  _me,
  _Mem,
  _MI,
  _mI,
  _MR,
  _mR,
  _NT,
  _nT,
  _OAn,
  _oAn,
  _RS,
  _rS,
  _UAn,
  _uAn,
  _UAp,
  _uAp,
  n0,
} from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var AccountDetail = struct(
  n0,
  _AD,
  0,
  [_AIc, _E],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => Email,
      {
        [_jN]: _em,
      },
    ],
  ]
);
export var CreateMembersRequest = struct(
  n0,
  _CMR,
  0,
  [_DI, _ADc],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      () => AccountDetails,
      {
        [_jN]: _aDc,
      },
    ],
  ]
);
export var CreateMembersResponse = struct(
  n0,
  _CMRr,
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
export var GetMembersRequest = struct(
  n0,
  _GMR,
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
export var GetMembersResponse = struct(
  n0,
  _GMRe,
  0,
  [_Me, _UAn],
  [
    [
      () => Members,
      {
        [_jN]: _me,
      },
    ],
    [
      () => UnprocessedAccounts,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var ListMembersRequest = struct(
  n0,
  _LMR,
  0,
  [_DI, _MR, _NT, _OAn],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _oAn,
        [_hQ]: _oAn,
      },
    ],
  ]
);
export var ListMembersResponse = struct(
  n0,
  _LMRi,
  0,
  [_Me, _NT],
  [
    [
      () => Members,
      {
        [_jN]: _me,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Member = struct(
  n0,
  _Mem,
  0,
  [_AIc, _DI, _MI, _E, _RS, _IA, _UAp, _AI],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      () => Email,
      {
        [_jN]: _em,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _iA,
      },
    ],
    [
      0,
      {
        [_jN]: _uAp,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
  ]
);
export var AccountDetails = list(n0, _ADc, 0, [() => AccountDetail, 0]);
export var Members = list(n0, _Me, 0, [() => Member, 0]);
export var CreateMembers = op(
  n0,
  _CM,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member", 200],
  },
  () => CreateMembersRequest,
  () => CreateMembersResponse
);
export var GetMembers = op(
  n0,
  _GM,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/get", 200],
  },
  () => GetMembersRequest,
  () => GetMembersResponse
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/member", 200],
  },
  () => ListMembersRequest,
  () => ListMembersResponse
);
