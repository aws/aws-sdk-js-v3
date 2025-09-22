// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAI, _aI, _DAIA, _DAIAR, _DAIARe, _htt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIAgentRequest = struct(
  n0,
  _DAIAR,
  0,
  [_aI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAIAgentResponse = struct(n0, _DAIARe, 0, [], []);
export var DeleteAIAgent = op(
  n0,
  _DAIA,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiagents/{aiAgentId}", 204],
  },
  () => DeleteAIAgentRequest,
  () => DeleteAIAgentResponse
);
