// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAT, _aI, _hQ, _htt, _RAAIA, _RAAIAR, _RAAIARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveAssistantAIAgentRequest = struct(
  n0,
  _RAAIAR,
  0,
  [_aI, _aAT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aAT,
      },
    ],
  ]
);
export var RemoveAssistantAIAgentResponse = struct(n0, _RAAIARe, 0, [], []);
export var RemoveAssistantAIAgent = op(
  n0,
  _RAAIA,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiagentConfiguration", 204],
  },
  () => RemoveAssistantAIAgentRequest,
  () => RemoveAssistantAIAgentResponse
);
