// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAI, _aI, _DAIAV, _DAIAVR, _DAIAVRe, _htt, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIAgentVersionRequest = struct(
  n0,
  _DAIAVR,
  0,
  [_aI, _aAI, _vN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteAIAgentVersionResponse = struct(n0, _DAIAVRe, 0, [], []);
export var DeleteAIAgentVersion = op(
  n0,
  _DAIAV,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiagents/{aiAgentId}/versions/{versionNumber}", 204],
  },
  () => DeleteAIAgentVersionRequest,
  () => DeleteAIAgentVersionResponse
);
