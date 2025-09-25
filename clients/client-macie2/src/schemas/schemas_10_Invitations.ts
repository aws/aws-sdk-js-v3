// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIc,
  _CI,
  _CIR,
  _CIRr,
  _dEN,
  _DI,
  _DIe,
  _DIR,
  _DIRe,
  _DIRel,
  _DIRele,
  _eC,
  _eM,
  _h,
  _jN,
  _lOUA,
  _m,
  _UA,
  _uAn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInvitationsRequest = struct(
  n0,
  _CIR,
  0,
  [_aIc, _dEN, _m],
  [
    [
      64 | 0,
      {
        [_jN]: _aIc,
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
export var CreateInvitationsResponse = struct(
  n0,
  _CIRr,
  0,
  [_uAn],
  [
    [
      () => __listOfUnprocessedAccount,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var DeclineInvitationsRequest = struct(
  n0,
  _DIR,
  0,
  [_aIc],
  [
    [
      64 | 0,
      {
        [_jN]: _aIc,
      },
    ],
  ]
);
export var DeclineInvitationsResponse = struct(
  n0,
  _DIRe,
  0,
  [_uAn],
  [
    [
      () => __listOfUnprocessedAccount,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var DeleteInvitationsRequest = struct(
  n0,
  _DIRel,
  0,
  [_aIc],
  [
    [
      64 | 0,
      {
        [_jN]: _aIc,
      },
    ],
  ]
);
export var DeleteInvitationsResponse = struct(
  n0,
  _DIRele,
  0,
  [_uAn],
  [
    [
      () => __listOfUnprocessedAccount,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var UnprocessedAccount = struct(
  n0,
  _UA,
  0,
  [_aI, _eC, _eM],
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
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
  ]
);
export var __listOfUnprocessedAccount = list(n0, _lOUA, 0, [() => UnprocessedAccount, 0]);
export var CreateInvitations = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/invitations", 200],
  },
  () => CreateInvitationsRequest,
  () => CreateInvitationsResponse
);
export var DeclineInvitations = op(
  n0,
  _DI,
  {
    [_h]: ["POST", "/invitations/decline", 200],
  },
  () => DeclineInvitationsRequest,
  () => DeclineInvitationsResponse
);
export var DeleteInvitations = op(
  n0,
  _DIe,
  {
    [_h]: ["POST", "/invitations/delete", 200],
  },
  () => DeleteInvitationsRequest,
  () => DeleteInvitationsResponse
);
