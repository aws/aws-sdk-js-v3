// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAI,
  _ad,
  _aI,
  _em,
  _GAA,
  _GAAR,
  _GAARe,
  _GM,
  _GMA,
  _GMAR,
  _GMARe,
  _GMR,
  _GMRe,
  _h,
  _I,
  _i,
  _iA,
  _iI,
  _jN,
  _ma,
  _mAI,
  _rS,
  _t,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAdministratorAccountRequest = struct(n0, _GAAR, 0, [], []);
export var GetAdministratorAccountResponse = struct(
  n0,
  _GAARe,
  0,
  [_ad],
  [
    [
      () => Invitation,
      {
        [_jN]: _ad,
      },
    ],
  ]
);
export var GetMasterAccountRequest = struct(n0, _GMAR, 0, [], []);
export var GetMasterAccountResponse = struct(
  n0,
  _GMARe,
  0,
  [_ma],
  [
    [
      () => Invitation,
      {
        [_jN]: _ma,
      },
    ],
  ]
);
export var GetMemberRequest = struct(n0, _GMR, 0, [_i], [[0, 1]]);
export var GetMemberResponse = struct(
  n0,
  _GMRe,
  0,
  [_aI, _aAI, _a, _em, _iA, _mAI, _rS, _t, _uA],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aAI,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _em,
      },
    ],
    [
      5,
      {
        [_jN]: _iA,
      },
    ],
    [
      0,
      {
        [_jN]: _mAI,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var Invitation = struct(
  n0,
  _I,
  0,
  [_aI, _iI, _iA, _rS],
  [
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
    [
      5,
      {
        [_jN]: _iA,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var GetAdministratorAccount = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/administrator", 200],
  },
  () => GetAdministratorAccountRequest,
  () => GetAdministratorAccountResponse
);
export var GetMasterAccount = op(
  n0,
  _GMA,
  {
    [_h]: ["GET", "/master", 200],
  },
  () => GetMasterAccountRequest,
  () => GetMasterAccountResponse
);
export var GetMember = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/members/{id}", 200],
  },
  () => GetMemberRequest,
  () => GetMemberResponse
);
