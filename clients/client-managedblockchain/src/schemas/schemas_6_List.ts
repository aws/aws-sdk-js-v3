// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _LPV,
  _LPVI,
  _LPVO,
  _MI,
  _MN,
  _MR,
  _mR,
  _NI,
  _nT,
  _NTe,
  _PI,
  _PV,
  _PVL,
  _V,
  _VS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProposalVotesInput = struct(
  n0,
  _LPVI,
  0,
  [_NI, _PI, _MR, _NTe],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProposalVotesOutput = struct(n0, _LPVO, 0, [_PV, _NTe], [() => ProposalVoteList, 0]);
export var VoteSummary = struct(n0, _VS, 0, [_V, _MN, _MI], [0, 0, 0]);
export var ProposalVoteList = list(n0, _PVL, 0, () => VoteSummary);
export var ListProposalVotes = op(
  n0,
  _LPV,
  {
    [_h]: ["GET", "/networks/{NetworkId}/proposals/{ProposalId}/votes", 200],
  },
  () => ListProposalVotesInput,
  () => ListProposalVotesOutput
);
