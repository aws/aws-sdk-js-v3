// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aV, _cI, _DAC, _DACR, _DACRi, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAgentCollaboratorRequest = struct(
  n0,
  _DACR,
  0,
  [_aI, _aV, _cI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateAgentCollaboratorResponse = struct(n0, _DACRi, 0, [], []);
export var DisassociateAgentCollaborator = op(
  n0,
  _DAC,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/", 204],
  },
  () => DisassociateAgentCollaboratorRequest,
  () => DisassociateAgentCollaboratorResponse
);
