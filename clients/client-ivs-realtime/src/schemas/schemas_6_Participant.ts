// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _at,
  _ca,
  _CPT,
  _CPTR,
  _CPTRr,
  _DP,
  _DPR,
  _DPRi,
  _du,
  _eTx,
  _ht,
  _pI,
  _PT,
  _pT,
  _PTS,
  _r,
  _sA,
  _to,
  _uI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ParticipantTokenString = sim(n0, _PTS, 0, 8);
export var CreateParticipantTokenRequest = struct(n0, _CPTR, 0, [_sA, _du, _uI, _at, _ca], [0, 1, 0, 128 | 0, 64 | 0]);
export var CreateParticipantTokenResponse = struct(n0, _CPTRr, 0, [_pT], [[() => ParticipantToken, 0]]);
export var DisconnectParticipantRequest = struct(n0, _DPR, 0, [_sA, _pI, _r], [0, 0, 0]);
export var DisconnectParticipantResponse = struct(n0, _DPRi, 0, [], []);
export var ParticipantToken = struct(
  n0,
  _PT,
  0,
  [_pI, _to, _uI, _at, _du, _ca, _eTx],
  [0, [() => ParticipantTokenString, 0], 0, 128 | 0, 1, 64 | 0, 5]
);
export var ParticipantTokenCapabilities = 64 | 0;

export var ParticipantTokenAttributes = 128 | 0;

export var CreateParticipantToken = op(
  n0,
  _CPT,
  {
    [_ht]: ["POST", "/CreateParticipantToken", 200],
  },
  () => CreateParticipantTokenRequest,
  () => CreateParticipantTokenResponse
);
export var DisconnectParticipant = op(
  n0,
  _DP,
  {
    [_ht]: ["POST", "/DisconnectParticipant", 200],
  },
  () => DisconnectParticipantRequest,
  () => DisconnectParticipantResponse
);
