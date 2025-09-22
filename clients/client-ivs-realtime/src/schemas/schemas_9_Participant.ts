// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACAO,
  _aCAO,
  _ACEH,
  _aCEH,
  _at,
  _CC,
  _cC,
  _CSP,
  _cSP,
  _dSA,
  _dSI,
  _fBP,
  _fBRS,
  _fBS,
  _fBUI,
  _fJT,
  _hH,
  _ht,
  _LP,
  _LPR,
  _LPRi,
  _LPRis,
  _LPRR,
  _LPRRi,
  _mR,
  _nT,
  _pa,
  _pI,
  _PL,
  _PR,
  _PRL,
  _PS,
  _pu,
  _rep,
  _rS,
  _rSe,
  _rT,
  _rWS,
  _s,
  _sA,
  _sI,
  _SPR,
  _SPRR,
  _SPRRt,
  _SPRRto,
  _SPRRtop,
  _SPRt,
  _sSA,
  _sSI,
  _STS,
  _sTS,
  _uI,
  _XCTO,
  _xCTO,
  _XFO,
  _xFO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListParticipantReplicasRequest = struct(n0, _LPRR, 0, [_sSA, _pI, _nT, _mR], [0, 0, 0, 1]);
export var ListParticipantReplicasResponse = struct(n0, _LPRRi, 0, [_rep, _nT], [() => ParticipantReplicaList, 0]);
export var ListParticipantsRequest = struct(
  n0,
  _LPR,
  0,
  [_sA, _sI, _fBUI, _fBP, _fBS, _nT, _mR, _fBRS],
  [0, 0, 0, 2, 0, 0, 1, 0]
);
export var ListParticipantsResponse = struct(n0, _LPRi, 0, [_pa, _nT], [() => ParticipantList, 0]);
export var ParticipantReplica = struct(n0, _PR, 0, [_sSA, _pI, _sSI, _dSA, _dSI, _rSe], [0, 0, 0, 0, 0, 0]);
export var ParticipantSummary = struct(
  n0,
  _PS,
  0,
  [_pI, _uI, _s, _fJT, _pu, _rS, _rT, _rSe, _sSA, _sSI],
  [0, 0, 0, 5, 2, 0, 0, 0, 0, 0]
);
export var StartParticipantReplicationRequest = struct(
  n0,
  _SPRR,
  0,
  [_sSA, _dSA, _pI, _rWS, _at],
  [0, 0, 0, 1, 128 | 0]
);
export var StartParticipantReplicationResponse = struct(
  n0,
  _SPRRt,
  0,
  [_aCAO, _aCEH, _cC, _cSP, _sTS, _xCTO, _xFO],
  [
    [
      0,
      {
        [_hH]: _ACAO,
      },
    ],
    [
      0,
      {
        [_hH]: _ACEH,
      },
    ],
    [
      0,
      {
        [_hH]: _CC,
      },
    ],
    [
      0,
      {
        [_hH]: _CSP,
      },
    ],
    [
      0,
      {
        [_hH]: _STS,
      },
    ],
    [
      0,
      {
        [_hH]: _XCTO,
      },
    ],
    [
      0,
      {
        [_hH]: _XFO,
      },
    ],
  ]
);
export var StopParticipantReplicationRequest = struct(n0, _SPRRto, 0, [_sSA, _dSA, _pI], [0, 0, 0]);
export var StopParticipantReplicationResponse = struct(
  n0,
  _SPRRtop,
  0,
  [_aCAO, _aCEH, _cC, _cSP, _sTS, _xCTO, _xFO],
  [
    [
      0,
      {
        [_hH]: _ACAO,
      },
    ],
    [
      0,
      {
        [_hH]: _ACEH,
      },
    ],
    [
      0,
      {
        [_hH]: _CC,
      },
    ],
    [
      0,
      {
        [_hH]: _CSP,
      },
    ],
    [
      0,
      {
        [_hH]: _STS,
      },
    ],
    [
      0,
      {
        [_hH]: _XCTO,
      },
    ],
    [
      0,
      {
        [_hH]: _XFO,
      },
    ],
  ]
);
export var ParticipantList = list(n0, _PL, 0, () => ParticipantSummary);
export var ParticipantReplicaList = list(n0, _PRL, 0, () => ParticipantReplica);
export var ParticipantAttributes = 128 | 0;

export var ListParticipantReplicas = op(
  n0,
  _LPRis,
  {
    [_ht]: ["POST", "/ListParticipantReplicas", 200],
  },
  () => ListParticipantReplicasRequest,
  () => ListParticipantReplicasResponse
);
export var ListParticipants = op(
  n0,
  _LP,
  {
    [_ht]: ["POST", "/ListParticipants", 200],
  },
  () => ListParticipantsRequest,
  () => ListParticipantsResponse
);
export var StartParticipantReplication = op(
  n0,
  _SPR,
  {
    [_ht]: ["POST", "/StartParticipantReplication", 200],
  },
  () => StartParticipantReplicationRequest,
  () => StartParticipantReplicationResponse
);
export var StopParticipantReplication = op(
  n0,
  _SPRt,
  {
    [_ht]: ["POST", "/StopParticipantReplication", 200],
  },
  () => StopParticipantReplicationRequest,
  () => StopParticipantReplicationResponse
);
