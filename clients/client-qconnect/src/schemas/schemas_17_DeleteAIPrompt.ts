// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aPI, _DAIP, _DAIPR, _DAIPRe, _htt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIPromptRequest = struct(
  n0,
  _DAIPR,
  0,
  [_aI, _aPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAIPromptResponse = struct(n0, _DAIPRe, 0, [], []);
export var DeleteAIPrompt = op(
  n0,
  _DAIP,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiprompts/{aiPromptId}", 204],
  },
  () => DeleteAIPromptRequest,
  () => DeleteAIPromptResponse
);
