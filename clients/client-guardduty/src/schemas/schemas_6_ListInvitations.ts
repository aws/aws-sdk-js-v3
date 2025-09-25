// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _aIc,
  _hQ,
  _ht,
  _IA,
  _iA,
  _II,
  _iI,
  _in,
  _Inv,
  _Invi,
  _jN,
  _LI,
  _LIR,
  _LIRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _RS,
  _rS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Invitation = struct(
  n0,
  _Inv,
  0,
  [_AIc, _II, _RS, _IA],
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
        [_jN]: _iI,
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
  ]
);
export var ListInvitationsRequest = struct(
  n0,
  _LIR,
  0,
  [_MR, _NT],
  [
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
  ]
);
export var ListInvitationsResponse = struct(
  n0,
  _LIRi,
  0,
  [_Invi, _NT],
  [
    [
      () => Invitations,
      {
        [_jN]: _in,
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
export var Invitations = list(n0, _Invi, 0, [() => Invitation, 0]);
export var ListInvitations = op(
  n0,
  _LI,
  {
    [_ht]: ["GET", "/invitation", 200],
  },
  () => ListInvitationsRequest,
  () => ListInvitationsResponse
);
