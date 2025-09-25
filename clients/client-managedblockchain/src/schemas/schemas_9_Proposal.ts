// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _NI, _PI, _V, _VMI, _VOP, _VOPI, _VOPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var VoteOnProposalInput = struct(n0, _VOPI, 0, [_NI, _PI, _VMI, _V], [[0, 1], [0, 1], 0, 0]);
export var VoteOnProposalOutput = struct(n0, _VOPO, 0, [], []);
export var VoteOnProposal = op(
  n0,
  _VOP,
  {
    [_h]: ["POST", "/networks/{NetworkId}/proposals/{ProposalId}/votes", 200],
  },
  () => VoteOnProposalInput,
  () => VoteOnProposalOutput
);
