// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aPI, _DAIPV, _DAIPVR, _DAIPVRe, _htt, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIPromptVersionRequest = struct(
  n0,
  _DAIPVR,
  0,
  [_aI, _aPI, _vN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteAIPromptVersionResponse = struct(n0, _DAIPVRe, 0, [], []);
export var DeleteAIPromptVersion = op(
  n0,
  _DAIPV,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions/{versionNumber}", 204],
  },
  () => DeleteAIPromptVersionRequest,
  () => DeleteAIPromptVersionResponse
);
